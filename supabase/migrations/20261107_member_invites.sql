-- 운영진이 추가한 멤버의 첫 로그인 (2026-11-07)
-- 운영진이 멤버 카드에 로그인 이메일을 적으면 member_invites에 초대가 생깁니다.
-- 그 이메일로 처음 로그인하면 claim_invite()가 profile을 승인 상태로 만들고, 운영진 직책이면 admins에 넣습니다.
-- 여러 번 실행해도 됩니다 (schema.sql에도 같은 내용이 들어 있습니다).

create table if not exists member_invites (
  email text primary key check (email = lower(email) and email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]{2,}$'),
  member_id uuid references members (id) on delete set null,
  name text,
  generation int,
  role text not null default '부원' check (role in ('회장', '부회장', '운영진', '부원')),
  part text,
  claimed_by uuid references profiles (id) on delete set null,
  claimed_at timestamptz,
  created_at timestamptz not null default now()
);

alter table member_invites enable row level security;

-- 운영진은 전부, 로그인한 본인은 자기 이메일 행 읽기만. 익명은 아무것도 못 봅니다.
drop policy if exists "invites admin all" on member_invites;
create policy "invites admin all" on member_invites for all to authenticated using (is_admin()) with check (is_admin());
drop policy if exists "invites self read" on member_invites;
create policy "invites self read" on member_invites for select to authenticated using (lower(email) = lower(auth.jwt() ->> 'email'));

-- 초대 받기: 로그인한 사람의 (인증된) 이메일과 맞는, 아직 아무도 받지 않은 초대가 있으면
-- profile을 승인 상태로 만들고 이름·기수·분야·직책을 초대 값으로 맞춥니다. 초대가 없으면 아무것도 하지 않습니다.
-- 승인·직책·운영진 권한은 이 함수로만 올라갑니다(profiles 본인 insert는 approved=false, role='부원'만 허용).
create or replace function claim_invite() returns boolean
language plpgsql volatile security definer set search_path = public as $$
declare
  uid uuid := auth.uid();
  mail text;
  inv member_invites%rowtype;
begin
  if uid is null then
    return false;
  end if;
  -- JWT 값 대신 auth.users에서 이메일 인증이 끝난 주소만 씁니다.
  -- (이메일 확인을 끈 프로젝트에서 남의 이메일로 비밀번호 가입해 초대를 가로채는 것을 막기 위해)
  select lower(u.email) into mail from auth.users u where u.id = uid and u.email_confirmed_at is not null;
  if mail is null then
    return false;
  end if;
  -- 한 번 받은 초대는 다시 쓰지 않습니다. 운영진이 나중에 승인을 거둬도 다시 승인되지 않게.
  select * into inv from member_invites where email = mail and claimed_by is null for update;
  if not found then
    return false;
  end if;

  insert into profiles (id, email, name, generation, part, role, approved)
  values (uid, mail, coalesce(nullif(btrim(inv.name), ''), split_part(mail, '@', 1)), inv.generation, inv.part, inv.role, true)
  on conflict (id) do update
    set name = excluded.name, generation = excluded.generation, part = excluded.part, role = excluded.role, approved = true;

  if inv.role in ('회장', '부회장', '운영진') then
    insert into admins (email) values (mail) on conflict do nothing;
  end if;

  update member_invites set claimed_by = uid, claimed_at = now() where email = mail;
  return true;
end;
$$;

revoke execute on function claim_invite() from public, anon;
grant execute on function claim_invite() to authenticated;
