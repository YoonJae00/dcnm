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

-- 프로젝트 팀 공간(워크스페이스) ------------------------------------------
-- 작성자·참여 확정 팀원·운영진만 보고 씁니다. (migrations/20261107_workspace.sql과 같은 내용)

-- 팀인지 확인: 작성자이거나 참여 확정 팀원이거나 운영진
create or replace function is_team(pid uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select is_admin() or exists (
    select 1 from projects where id = pid and (author_id = auth.uid() or auth.uid() = any (member_ids))
  );
$$;
revoke execute on function is_team(uuid) from public, anon;
grant execute on function is_team(uuid) to authenticated;

-- Storage 경로 '{project_id}/...'의 첫 폴더로 팀인지 확인합니다. 첫 폴더가 uuid 모양이 아니면 false (형 변환 오류로 막히지 않게).
create or replace function is_team_path(path text) returns boolean
language sql stable security definer set search_path = public as $$
  select case
    when (storage.foldername(path))[1] ~* '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$'
      then is_team(((storage.foldername(path))[1])::uuid)
    else false
  end;
$$;
revoke execute on function is_team_path(text) from public, anon;
grant execute on function is_team_path(text) to authenticated;

create or replace function can_manage_path(path text) returns boolean
language sql stable security definer set search_path = public as $$
  select case
    when (storage.foldername(path))[1] ~* '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$'
      then is_project_author(((storage.foldername(path))[1])::uuid) or is_admin()
    else is_admin()
  end;
$$;
revoke execute on function can_manage_path(text) from public, anon;
grant execute on function can_manage_path(text) to authenticated;

-- 표 ---------------------------------------------------------------------
-- 공지·링크·파일
create table if not exists ws_posts (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references projects (id) on delete cascade,
  kind text not null check (kind in ('notice', 'link', 'file')),
  title text not null check (char_length(title) between 1 and 120),
  body text check (body is null or char_length(body) <= 5000),
  url text check (url is null or url ~* '^https?://'),
  file_path text,
  file_name text,
  file_size int check (file_size is null or file_size between 0 and 10485760),
  pinned boolean not null default false,
  created_by uuid references profiles (id) on delete set null,
  created_by_name text,
  created_at timestamptz not null default now()
);

-- 팀 일정·마감
create table if not exists ws_events (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references projects (id) on delete cascade,
  title text not null check (char_length(title) between 1 and 120),
  date date not null,
  start_time text check (start_time is null or start_time ~ '^\d{2}:\d{2}$'),
  end_time text check (end_time is null or end_time ~ '^\d{2}:\d{2}$'),
  place text,
  note text check (note is null or char_length(note) <= 1000),
  kind text not null default 'event' check (kind in ('event', 'deadline')),
  created_by uuid references profiles (id) on delete set null,
  created_by_name text,
  created_at timestamptz not null default now()
);

-- 회의 (투표 중 → 확정 → 끝남)
create table if not exists ws_meetings (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references projects (id) on delete cascade,
  title text not null check (char_length(title) between 1 and 120),
  agenda text check (agenda is null or char_length(agenda) <= 3000),
  link text check (link is null or link ~* '^https?://'),
  status text not null default 'polling' check (status in ('polling', 'scheduled', 'done')),
  starts_at timestamptz,
  duration_min int not null default 60 check (duration_min between 10 and 600),
  created_by uuid references profiles (id) on delete set null,
  created_by_name text,
  created_at timestamptz not null default now()
);

-- 회의 후보 일시. project_id는 권한 판정용으로 같이 저장하고, 부모 회의와 같은 프로젝트인지 정책에서 확인합니다.
create table if not exists ws_meeting_slots (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references projects (id) on delete cascade,
  meeting_id uuid not null references ws_meetings (id) on delete cascade,
  starts_at timestamptz not null,
  created_by uuid references profiles (id) on delete set null,
  created_by_name text,
  created_at timestamptz not null default now()
);

-- 후보별 가능 표시 (한 사람이 한 후보에 한 번)
create table if not exists ws_meeting_votes (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references projects (id) on delete cascade,
  slot_id uuid not null references ws_meeting_slots (id) on delete cascade,
  user_id uuid not null references profiles (id) on delete cascade,
  user_name text,
  created_at timestamptz not null default now(),
  unique (slot_id, user_id)
);

-- 회의록 (회의마다 하나)
create table if not exists ws_minutes (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references projects (id) on delete cascade,
  meeting_id uuid not null unique references ws_meetings (id) on delete cascade,
  agenda text check (agenda is null or char_length(agenda) <= 5000),
  decisions text check (decisions is null or char_length(decisions) <= 5000),
  notes text check (notes is null or char_length(notes) <= 10000),
  attendee_ids uuid[] not null default '{}',
  created_by uuid references profiles (id) on delete set null,
  created_by_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 할 일 보드
create table if not exists ws_tasks (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references projects (id) on delete cascade,
  title text not null check (char_length(title) between 1 and 200),
  status text not null default 'todo' check (status in ('todo', 'doing', 'done')),
  assignee_id uuid references profiles (id) on delete set null,
  assignee_name text,
  due date,
  note text check (note is null or char_length(note) <= 2000),
  sort int not null default 0,
  minutes_id uuid references ws_minutes (id) on delete set null,
  created_by uuid references profiles (id) on delete set null,
  created_by_name text,
  created_at timestamptz not null default now()
);

create index if not exists ws_posts_project on ws_posts (project_id);
create index if not exists ws_events_project on ws_events (project_id, date);
create index if not exists ws_meetings_project on ws_meetings (project_id);
create index if not exists ws_meeting_slots_meeting on ws_meeting_slots (meeting_id);
create index if not exists ws_meeting_votes_slot on ws_meeting_votes (slot_id);
create index if not exists ws_tasks_project on ws_tasks (project_id, status);

-- 고칠 때 프로젝트·쓴 사람은 바뀌지 않게 (팀원 모두 고칠 수 있으므로 남의 글을 내 것으로 바꾸거나 다른 팀으로 옮기지 못하게)
create or replace function ws_keep_owner() returns trigger
language plpgsql as $$
begin
  new.project_id := old.project_id;
  new.created_by := old.created_by;
  new.created_by_name := old.created_by_name;
  new.created_at := old.created_at;
  return new;
end;
$$;

create or replace function ws_touch() returns trigger
language plpgsql as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

-- 접근 규칙(RLS) -----------------------------------------------------------
-- 모든 정책은 로그인한 사람(authenticated)에게만 적용합니다. 익명은 어떤 행도 못 봅니다.
do $$
declare t text;
begin
  foreach t in array array['ws_posts','ws_events','ws_meetings','ws_meeting_slots','ws_meeting_votes','ws_minutes','ws_tasks'] loop
    execute format('alter table %I enable row level security', t);
    execute format('drop policy if exists "%1$s read" on %1$I', t);
    execute format('create policy "%1$s read" on %1$I for select to authenticated using (is_team(project_id))', t);
  end loop;

  -- 일반 표: 팀원이 자기 이름으로 만들고, 팀원 누구나 고치고, 쓴 사람·작성자·운영진이 지웁니다.
  foreach t in array array['ws_posts','ws_events','ws_meetings','ws_minutes','ws_tasks'] loop
    execute format('drop policy if exists "%1$s insert" on %1$I', t);
    execute format('drop policy if exists "%1$s update" on %1$I', t);
    execute format('create policy "%1$s update" on %1$I for update to authenticated using (is_team(project_id)) with check (is_team(project_id))', t);
    execute format('drop policy if exists "%1$s delete" on %1$I', t);
    execute format('create policy "%1$s delete" on %1$I for delete to authenticated using (is_team(project_id) and (created_by = auth.uid() or is_project_author(project_id) or is_admin()))', t);
    execute format('drop trigger if exists %1$s_keep_owner on %1$I', t);
    execute format('create trigger %1$s_keep_owner before update on %1$I for each row execute function ws_keep_owner()', t);
  end loop;
end $$;

drop policy if exists "ws_posts insert" on ws_posts;
create policy "ws_posts insert" on ws_posts for insert to authenticated
  with check (created_by = auth.uid() and is_team(project_id));
drop policy if exists "ws_events insert" on ws_events;
create policy "ws_events insert" on ws_events for insert to authenticated
  with check (created_by = auth.uid() and is_team(project_id));
drop policy if exists "ws_meetings insert" on ws_meetings;
create policy "ws_meetings insert" on ws_meetings for insert to authenticated
  with check (created_by = auth.uid() and is_team(project_id));
drop policy if exists "ws_tasks insert" on ws_tasks;
create policy "ws_tasks insert" on ws_tasks for insert to authenticated
  with check (created_by = auth.uid() and is_team(project_id)
    and (minutes_id is null or exists (select 1 from ws_minutes m where m.id = minutes_id and m.project_id = ws_tasks.project_id)));
drop policy if exists "ws_minutes insert" on ws_minutes;
create policy "ws_minutes insert" on ws_minutes for insert to authenticated
  with check (created_by = auth.uid() and is_team(project_id)
    and exists (select 1 from ws_meetings m where m.id = meeting_id and m.project_id = ws_minutes.project_id));

-- 회의록이 가리키는 회의는 바꾸지 못하게 (다른 팀 회의로 옮기기 방지)
drop trigger if exists ws_minutes_touch on ws_minutes;
create trigger ws_minutes_touch before update on ws_minutes for each row execute function ws_touch();
create or replace function ws_minutes_keep_meeting() returns trigger
language plpgsql as $$
begin
  new.meeting_id := old.meeting_id;
  return new;
end;
$$;
drop trigger if exists ws_minutes_keep_meeting on ws_minutes;
create trigger ws_minutes_keep_meeting before update on ws_minutes for each row execute function ws_minutes_keep_meeting();

-- 할 일의 회의록 연결은 같은 프로젝트 회의록만
drop policy if exists "ws_tasks update" on ws_tasks;
create policy "ws_tasks update" on ws_tasks for update to authenticated using (is_team(project_id))
  with check (is_team(project_id)
    and (minutes_id is null or exists (select 1 from ws_minutes m where m.id = minutes_id and m.project_id = ws_tasks.project_id)));

-- 후보 일시: 팀원이 만들고(같은 프로젝트 회의에만), 고치기는 없음, 지우기는 쓴 사람·작성자·운영진
drop policy if exists "ws_meeting_slots insert" on ws_meeting_slots;
create policy "ws_meeting_slots insert" on ws_meeting_slots for insert to authenticated
  with check (created_by = auth.uid() and is_team(project_id)
    and exists (select 1 from ws_meetings m where m.id = meeting_id and m.project_id = ws_meeting_slots.project_id));
drop policy if exists "ws_meeting_slots delete" on ws_meeting_slots;
create policy "ws_meeting_slots delete" on ws_meeting_slots for delete to authenticated
  using (is_team(project_id) and (created_by = auth.uid() or is_project_author(project_id) or is_admin()));

-- 투표: 본인 것만 추가·삭제 (같은 프로젝트 후보에만)
drop policy if exists "ws_meeting_votes insert" on ws_meeting_votes;
create policy "ws_meeting_votes insert" on ws_meeting_votes for insert to authenticated
  with check (user_id = auth.uid() and is_team(project_id)
    and exists (select 1 from ws_meeting_slots s where s.id = slot_id and s.project_id = ws_meeting_votes.project_id));
drop policy if exists "ws_meeting_votes delete" on ws_meeting_votes;
create policy "ws_meeting_votes delete" on ws_meeting_votes for delete to authenticated
  using (user_id = auth.uid() and is_team(project_id));

-- 파일 보관함 (비공개 버킷, 10MB) -------------------------------------------
-- 경로: '{project_id}/{uuid}-{안전한 파일명}'. 내려받기는 서명 URL로만.
insert into storage.buckets (id, name, public, file_size_limit)
values ('workspace', 'workspace', false, 10485760)
on conflict (id) do update set public = false, file_size_limit = 10485760;

drop policy if exists "workspace read" on storage.objects;
create policy "workspace read" on storage.objects for select to authenticated
  using (bucket_id = 'workspace' and is_team_path(name));
drop policy if exists "workspace upload" on storage.objects;
create policy "workspace upload" on storage.objects for insert to authenticated
  with check (bucket_id = 'workspace' and is_team_path(name));
drop policy if exists "workspace delete" on storage.objects;
create policy "workspace delete" on storage.objects for delete to authenticated
  using (bucket_id = 'workspace' and is_team_path(name) and (owner_id = auth.uid()::text or can_manage_path(name)));
-- 덮어쓰기(update)는 허용하지 않습니다. 파일을 바꾸려면 지우고 다시 올리세요.

-- 운영진 등록 예시 (실제 이메일로 바꿔 실행)
-- insert into admins (email) values ('운영진이메일@example.com');
-- 부원 승인 예시 (보통은 운영진 화면 > 멤버에서 로그인 이메일을 적어 초대하면 됩니다)
-- update profiles set approved = true, name = '이현성', part = '웹' where email = '부원이메일@example.com';

-- 개인정보 보호 (2026-11-07) ------------------------------------------------

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
