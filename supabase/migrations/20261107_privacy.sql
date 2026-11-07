-- 개인정보 보호 (2026-11-07)
-- 처리방침 버전·동의 기록, 개인정보 문의 연락처, 계정 삭제(탈퇴). 여러 번 실행해도 됩니다.
-- schema.sql에도 같은 내용이 들어 있습니다. 근거는 docs/privacy-legal-notes.md.
-- ※ 화면 코드보다 이 SQL을 먼저 적용하세요(지원 폼이 새 칸에 값을 보냅니다).

-- 1. 지원·문의: 동의 문구 버전·동의 시각·국외 이전 동의·전화번호(선택) 동의를 기록 ----------
alter table submissions add column if not exists consent_version text check (consent_version is null or char_length(consent_version) <= 20);
alter table submissions add column if not exists consent_overseas boolean not null default false;
alter table submissions add column if not exists consent_phone boolean not null default false;
alter table submissions add column if not exists consented_at timestamptz not null default now();

-- 새로 접수하려면 수집·이용 동의와 국외 이전 별도 동의가 모두 있어야 하고, 동의 시각은 서버 시각이어야 합니다.
-- 전화번호를 적었다면 전화번호 선택 동의도 있어야 합니다. (이미 쌓인 옛 행에는 적용되지 않습니다)
drop policy if exists "submissions insert" on submissions;
create policy "submissions insert" on submissions for insert to anon, authenticated
  with check (
    consent and consent_overseas and consent_version is not null
    and consented_at >= now() - interval '1 minute' and consented_at <= now() + interval '1 minute'
    and (phone is null or consent_phone)
  );

-- 2. 부원 계정: 처리방침에 동의한 시각과 버전 ----------------------------------------------
alter table profiles add column if not exists privacy_agreed_at timestamptz;
alter table profiles add column if not exists privacy_version text check (privacy_version is null or char_length(privacy_version) <= 20);

-- 본인이 처음 만들 때 동의 기록을 직접 넣지 못하게 합니다(기록은 agree_privacy()로만).
drop policy if exists "profiles self insert" on profiles;
create policy "profiles self insert" on profiles for insert
  with check (id = auth.uid() and approved = false and role = '부원' and privacy_agreed_at is null and privacy_version is null);

-- 본인 행의 동의 기록 두 칸만 씁니다. 다른 칸(승인·직책 등)은 건드리지 않습니다.
create or replace function agree_privacy(version text) returns void
language plpgsql volatile security definer set search_path = public as $$
begin
  if auth.uid() is null then
    raise exception '로그인이 필요합니다';
  end if;
  if version is null or btrim(version) = '' or char_length(version) > 20 then
    raise exception '처리방침 버전이 올바르지 않습니다';
  end if;
  update profiles set privacy_agreed_at = now(), privacy_version = btrim(version) where id = auth.uid();
end;
$$;

revoke execute on function agree_privacy(text) from public, anon;
grant execute on function agree_privacy(text) to authenticated;

-- 3. 개인정보 문의 연락처 -------------------------------------------------------------------
-- 운영진이 사이트 설정에 적은 값을 우선, 없으면 회장 계정의 이메일 1개만 돌려줍니다.
-- 로그인하지 않은 방문자도 처리방침에서 볼 수 있어야 하므로 anon도 실행할 수 있습니다.
-- 반환값은 연락처 문자열 하나뿐이고, 다른 계정 정보는 나가지 않습니다.
alter table settings add column if not exists privacy_contact text check (privacy_contact is null or char_length(privacy_contact) <= 200);

create or replace function privacy_contact() returns text
language sql stable security definer set search_path = public as $$
  select coalesce(
    (select nullif(btrim(s.privacy_contact), '') from settings s where s.id = 1),
    (select p.email from profiles p where p.role = '회장' and p.approved order by p.created_at desc limit 1)
  );
$$;

revoke execute on function privacy_contact() from public;
grant execute on function privacy_contact() to anon, authenticated;

-- 4. 계정 삭제(탈퇴) --------------------------------------------------------------------------
-- 본인(auth.uid())의 계정만 지웁니다. 다른 사람의 id를 받지 않습니다.
-- 지워지는 것: 로그인 계정·프로필·프로젝트 참여 신청·좋아요, 내 멤버 카드와 초대 기록, 같은 이메일로 접수된 지원·문의
-- 남는 것(delete_content = false): 내가 쓴 글·댓글·문의·프로젝트는 작성자 이름을 '탈퇴한 회원'으로 바꿔 남김
-- delete_content = true: 내가 쓴 글·댓글·문의도 함께 지움 (내가 만든 프로젝트 글은 이름만 지우고 남김)
create or replace function delete_my_account(delete_content boolean default false) returns void
language plpgsql volatile security definer set search_path = public as $$
declare
  uid uuid := auth.uid();
  mail text;
begin
  if uid is null then
    raise exception '로그인이 필요합니다';
  end if;
  select lower(u.email) into mail from auth.users u where u.id = uid;
  if mail is null then
    raise exception '계정을 찾을 수 없습니다';
  end if;
  if exists (select 1 from admins where lower(email) = mail) and (select count(*) from admins) <= 1 then
    raise exception '마지막 운영진 계정은 직접 탈퇴할 수 없습니다. 다른 운영진을 먼저 등록하세요.';
  end if;

  if delete_content then
    delete from posts where author_id = uid; -- 달린 댓글도 함께 지워집니다
    delete from comments where user_id = uid;
    delete from inquiries where user_id = uid;
  end if;
  update posts set author_name = '탈퇴한 회원' where author_id = uid;
  update comments set user_name = '탈퇴한 회원' where user_id = uid;
  update inquiries set user_name = '탈퇴한 회원' where user_id = uid;
  update projects set author_name = '탈퇴한 회원' where author_id = uid;

  -- 프로젝트 참여자 목록(id 배열과 이름 배열)에서 나를 뺍니다.
  update projects p set
    member_names = coalesce((
      select array_agg(coalesce(p.member_names[i], '') order by i)
      from generate_subscripts(p.member_ids, 1) as i
      where p.member_ids[i] <> uid
    ), '{}'),
    member_ids = array_remove(p.member_ids, uid)
  where uid = any (p.member_ids);

  delete from members where id in (select member_id from member_invites where claimed_by = uid and member_id is not null);
  delete from member_invites where claimed_by = uid or email = mail;
  delete from submissions where lower(email) = mail;
  delete from admins where lower(email) = mail;
  delete from auth.users where id = uid; -- profiles, applications, post_likes는 연쇄로 지워지고 글·댓글의 author는 비워집니다
end;
$$;

revoke execute on function delete_my_account(boolean) from public, anon;
grant execute on function delete_my_account(boolean) to authenticated;

-- 5. 멤버 카드를 지우면 그 사람의 초대(로그인 이메일) 기록도 함께 지웁니다 ---------------------------
-- 이메일이 초대 표에만 남아 있는 일을 막습니다. 계정 자체(profiles)는 그대로입니다.
create or replace function drop_invites_of_member() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  delete from member_invites where member_id = old.id;
  return old;
end;
$$;

revoke execute on function drop_invites_of_member() from public, anon, authenticated;

drop trigger if exists members_drop_invites on members;
create trigger members_drop_invites before delete on members for each row execute function drop_invites_of_member();
