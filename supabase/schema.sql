-- DC&M 동아리 사이트 Supabase 스키마 (프로젝트·개인 로그인·커뮤니티 포함)
-- Supabase 대시보드 > SQL Editor에 붙여 넣고 한 번 실행하세요.

create extension if not exists pgcrypto;

-- 동아리 콘텐츠 ------------------------------------------------------------
create table if not exists members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  generation int,
  role text not null default '부원',
  part text,
  intro text,
  tags text[] not null default '{}',
  github text,
  sort int not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists notices (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  body text,
  pinned boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  date date not null,
  start_time text,
  end_time text,
  place text,
  kind text not null default '정기',
  note text,
  created_at timestamptz not null default now()
);

create table if not exists settings (
  id int primary key default 1 check (id = 1),
  recruit_open boolean not null default false,
  recruit_title text,
  recruit_start date,
  recruit_deadline date,
  intro text,
  room text,
  links jsonb not null default '[]',
  landing_enabled boolean not null default false,
  recruit_details jsonb
);
-- 이미 만든 DB에는 아래 세 줄만 따로 실행하세요 (모집 랜딩용 칸).
alter table settings add column if not exists recruit_start date;
alter table settings add column if not exists landing_enabled boolean not null default false;
alter table settings add column if not exists recruit_details jsonb;

-- 개인 로그인 -------------------------------------------------------------
-- 로그인한 사람마다 한 줄. approved가 true여야 모집글·참여 신청·글쓰기가 됩니다.
create table if not exists profiles (
  id uuid primary key references auth.users on delete cascade,
  email text not null,
  name text not null,
  generation int,
  part text,
  role text not null default '부원',
  approved boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists admins (
  email text primary key
);

-- 프로젝트 -----------------------------------------------------------------
create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  status text not null default 'recruiting' check (status in ('ongoing', 'recruiting', 'done')),
  origin text not null default 'personal' check (origin in ('club', 'personal')),
  kind text not null default '프로젝트',
  title text not null check (char_length(title) between 2 and 80),
  summary text,
  body text,
  author_id uuid references profiles (id) on delete set null,
  author_name text,
  member_ids uuid[] not null default '{}',
  member_names text[] not null default '{}',
  capacity int check (capacity is null or capacity between 1 and 100),
  deadline date,
  condition text,
  mode text,
  period text,
  start_date date,
  end_date date,
  meet_days int[] not null default '{}',
  meet_time text,
  place text,
  tags text[] not null default '{}',
  link text,
  created_at timestamptz not null default now()
);

create table if not exists applications (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references projects (id) on delete cascade,
  user_id uuid not null references profiles (id) on delete cascade,
  user_name text,
  message text check (message is null or char_length(message) <= 300),
  status text not null default 'pending' check (status in ('pending', 'accepted', 'rejected')),
  created_at timestamptz not null default now(),
  unique (project_id, user_id)
);

create table if not exists inquiries (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references projects (id) on delete cascade,
  user_id uuid references profiles (id) on delete set null,
  user_name text,
  body text not null check (char_length(body) between 2 and 1000),
  created_at timestamptz not null default now()
);

-- 커뮤니티 -----------------------------------------------------------------
create table if not exists posts (
  id uuid primary key default gen_random_uuid(),
  category text not null default '자유',
  title text not null check (char_length(title) between 2 and 120),
  body text not null check (char_length(body) between 10 and 5000),
  author_id uuid references profiles (id) on delete set null,
  author_name text,
  project_id uuid references projects (id) on delete set null,
  created_at timestamptz not null default now()
);

create table if not exists comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references posts (id) on delete cascade,
  user_id uuid references profiles (id) on delete set null,
  user_name text,
  body text not null check (char_length(body) between 2 and 500),
  created_at timestamptz not null default now()
);

create table if not exists post_likes (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references posts (id) on delete cascade,
  user_id uuid not null references profiles (id) on delete cascade,
  unique (post_id, user_id)
);

-- 지원·문의 (비회원도 제출 가능, 개인정보) ----------------------------------
create table if not exists submissions (
  id uuid primary key default gen_random_uuid(),
  kind text not null check (kind in ('apply', 'inquiry')),
  name text not null check (char_length(name) between 2 and 20),
  email text not null check (char_length(email) <= 200),
  student_id text check (student_id is null or student_id ~ '^[0-9]{7,10}$'),
  phone text,
  part text,
  message text not null check (char_length(message) between 10 and 1000),
  consent boolean not null check (consent),
  created_at timestamptz not null default now()
);

-- 권한 확인 함수 -----------------------------------------------------------
create or replace function is_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from admins where email = auth.jwt() ->> 'email');
$$;

create or replace function is_approved() returns boolean
language sql stable security definer set search_path = public as $$
  select is_admin() or exists (select 1 from profiles where id = auth.uid() and approved);
$$;

create or replace function is_project_author(pid uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from projects where id = pid and author_id = auth.uid());
$$;

-- 접근 규칙(RLS) -----------------------------------------------------------
do $$
declare t text;
begin
  foreach t in array array['members','notices','events','settings','profiles','admins','projects','applications','inquiries','posts','comments','post_likes','submissions'] loop
    execute format('alter table %I enable row level security', t);
  end loop;
  -- 누구나 읽기, 운영진만 쓰기
  foreach t in array array['members','notices','events','settings'] loop
    execute format('drop policy if exists "%1$s read" on %1$I', t);
    execute format('create policy "%1$s read" on %1$I for select using (true)', t);
    execute format('drop policy if exists "%1$s admin write" on %1$I', t);
    execute format('create policy "%1$s admin write" on %1$I for all using (is_admin()) with check (is_admin())', t);
  end loop;
end $$;

-- profiles: 본인과 운영진만 보기, 처음 로그인할 때 승인 전 상태로만 만들기, 승인·역할 변경은 운영진
drop policy if exists "profiles read" on profiles;
create policy "profiles read" on profiles for select using (id = auth.uid() or is_admin());
drop policy if exists "profiles self insert" on profiles;
create policy "profiles self insert" on profiles for insert with check (id = auth.uid() and approved = false and role = '부원');
drop policy if exists "profiles admin update" on profiles;
create policy "profiles admin update" on profiles for update using (is_admin()) with check (is_admin());

drop policy if exists "admins self" on admins;
create policy "admins self" on admins for select using (email = auth.jwt() ->> 'email');

-- 멤버 초대: 운영진이 멤버 카드에 적은 로그인 이메일 (비공개). 이메일은 공개 표 members에 넣지 않습니다.
-- 처음 로그인하면 claim_invite()가 승인·직책·운영진 권한을 초대 값으로 맞춥니다.
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

-- projects: 누구나 읽기, 승인된 부원이 자기 이름으로 올리기, 작성자·운영진이 수정
drop policy if exists "projects read" on projects;
create policy "projects read" on projects for select using (true);
drop policy if exists "projects insert" on projects;
create policy "projects insert" on projects for insert with check (is_approved() and author_id = auth.uid() and (origin = 'personal' or is_admin()));
drop policy if exists "projects update" on projects;
create policy "projects update" on projects for update using (author_id = auth.uid() or is_admin());
drop policy if exists "projects delete" on projects;
create policy "projects delete" on projects for delete using (author_id = auth.uid() or is_admin());

-- applications: 본인·프로젝트 작성자·운영진만 보기, 결정은 작성자·운영진
drop policy if exists "applications read" on applications;
create policy "applications read" on applications for select using (user_id = auth.uid() or is_project_author(project_id) or is_admin());
drop policy if exists "applications insert" on applications;
create policy "applications insert" on applications for insert with check (user_id = auth.uid() and is_approved() and status = 'pending');
drop policy if exists "applications decide" on applications;
create policy "applications decide" on applications for update using (is_project_author(project_id) or is_admin());
drop policy if exists "applications cancel" on applications;
create policy "applications cancel" on applications for delete using (user_id = auth.uid() or is_admin());

-- inquiries, posts, comments: 누구나 읽기, 승인된 부원이 자기 이름으로 쓰기, 본인·운영진이 지우기
drop policy if exists "inquiries read" on inquiries;
create policy "inquiries read" on inquiries for select using (true);
drop policy if exists "inquiries insert" on inquiries;
create policy "inquiries insert" on inquiries for insert with check (user_id = auth.uid() and is_approved());
drop policy if exists "inquiries delete" on inquiries;
create policy "inquiries delete" on inquiries for delete using (user_id = auth.uid() or is_admin());

drop policy if exists "posts read" on posts;
create policy "posts read" on posts for select using (true);
drop policy if exists "posts insert" on posts;
create policy "posts insert" on posts for insert with check (author_id = auth.uid() and is_approved());
drop policy if exists "posts update" on posts;
create policy "posts update" on posts for update using (author_id = auth.uid() or is_admin());
drop policy if exists "posts delete" on posts;
create policy "posts delete" on posts for delete using (author_id = auth.uid() or is_admin());

drop policy if exists "comments read" on comments;
create policy "comments read" on comments for select using (true);
drop policy if exists "comments insert" on comments;
create policy "comments insert" on comments for insert with check (user_id = auth.uid() and is_approved());
drop policy if exists "comments delete" on comments;
create policy "comments delete" on comments for delete using (user_id = auth.uid() or is_admin());

drop policy if exists "likes read" on post_likes;
create policy "likes read" on post_likes for select using (true);
drop policy if exists "likes insert" on post_likes;
create policy "likes insert" on post_likes for insert with check (user_id = auth.uid());
drop policy if exists "likes delete" on post_likes;
create policy "likes delete" on post_likes for delete using (user_id = auth.uid());

-- submissions: 누구나 제출만, 열람·삭제는 운영진
drop policy if exists "submissions insert" on submissions;
create policy "submissions insert" on submissions for insert to anon, authenticated with check (consent);
drop policy if exists "submissions admin read" on submissions;
create policy "submissions admin read" on submissions for select using (is_admin());
drop policy if exists "submissions admin delete" on submissions;
create policy "submissions admin delete" on submissions for delete using (is_admin());

-- 운영진 등록 예시 (실제 이메일로 바꿔 실행)
-- insert into admins (email) values ('운영진이메일@example.com');
-- 부원 승인 예시 (보통은 운영진 화면 > 멤버에서 로그인 이메일을 적어 초대하면 됩니다)
-- update profiles set approved = true, name = '이현성', part = '웹' where email = '부원이메일@example.com';
