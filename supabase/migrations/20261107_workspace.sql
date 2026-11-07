-- 프로젝트 팀 공간(워크스페이스) (2026-11-07)
-- 프로젝트 작성자, 참여 확정 팀원(projects.member_ids), 운영진만 보고 씁니다.
-- 만들기·고치기는 팀원 모두, 지우기는 쓴 사람·프로젝트 작성자·운영진.
-- 여러 번 실행해도 됩니다 (schema.sql에도 같은 내용이 들어 있습니다). schema.sql을 먼저 실행한 DB에서 실행하세요.

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
