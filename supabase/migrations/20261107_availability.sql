-- 팀 공간 > 회의 > 시간 맞추기 (When2meet식 가능 시간 격자) (2026-11-07)
-- 날짜 여러 개 × 하루 시간 범위를 15·30분 칸으로 나누고, 팀원이 가능한 칸을 칠합니다.
-- 날짜(dates)와 분(start_min·end_min)은 한국 시간(KST) 벽시계 기준입니다. 사이트의 toIso()처럼 브라우저 현지 시각으로 읽습니다.
-- 칸 번호 = 날짜 순번 × 하루 칸 수 + 그날 안의 칸 순번. 격자가 바뀌면 칸 번호가 어긋나므로 격자는 만든 뒤 고칠 수 없습니다.
-- 여러 번 실행해도 됩니다 (schema.sql에도 같은 내용이 들어 있습니다). 20261107_workspace.sql 다음에 실행하세요.

create table if not exists ws_avail_polls (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references projects (id) on delete cascade,
  title text not null check (char_length(title) between 1 and 120),
  dates date[] not null check (cardinality(dates) between 1 and 14),
  start_min int not null check (start_min between 0 and 1440),
  end_min int not null check (end_min between 0 and 1440),
  slot_min int not null default 30 check (slot_min in (15, 30)),
  duration_min int check (duration_min is null or duration_min between 15 and 600),
  closed boolean not null default false,
  meeting_id uuid references ws_meetings (id) on delete set null,
  created_by uuid references profiles (id) on delete set null,
  created_by_name text,
  created_at timestamptz not null default now(),
  check (start_min < end_min),
  check ((end_min - start_min) % slot_min = 0)
);

create table if not exists ws_avail_responses (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references projects (id) on delete cascade,
  poll_id uuid not null references ws_avail_polls (id) on delete cascade,
  user_id uuid not null references profiles (id) on delete cascade,
  user_name text,
  -- 14일 × 하루 96칸(15분) = 1344칸이 최대
  slots int[] not null default '{}' check (cardinality(slots) <= 1344),
  updated_at timestamptz not null default now(),
  unique (poll_id, user_id)
);

create index if not exists ws_avail_polls_project on ws_avail_polls (project_id);
create index if not exists ws_avail_responses_poll on ws_avail_responses (poll_id);

-- 격자(날짜·시간 범위·칸 크기)는 만든 뒤 바꾸지 못하게 (이미 칠한 칸 번호가 어긋나지 않게)
create or replace function ws_avail_polls_keep_grid() returns trigger
language plpgsql as $$
begin
  new.dates := old.dates;
  new.start_min := old.start_min;
  new.end_min := old.end_min;
  new.slot_min := old.slot_min;
  return new;
end;
$$;

-- 응답: 고칠 때 프로젝트·투표·사람은 그대로, 칸 번호는 그 투표 격자 안의 값만 (중복 제거·정렬)
create or replace function ws_avail_responses_check() returns trigger
language plpgsql as $$
declare
  pl ws_avail_polls%rowtype;
  total int;
begin
  if tg_op = 'UPDATE' then
    new.project_id := old.project_id;
    new.poll_id := old.poll_id;
    new.user_id := old.user_id;
  end if;
  select * into pl from ws_avail_polls where id = new.poll_id;
  if not found then
    raise exception '시간 맞추기를 찾을 수 없습니다.';
  end if;
  total := cardinality(pl.dates) * ((pl.end_min - pl.start_min) / pl.slot_min);
  new.slots := coalesce((select array_agg(distinct s order by s) from unnest(new.slots) as s where s is not null), '{}');
  if exists (select 1 from unnest(new.slots) as s where s < 0 or s >= total) then
    raise exception '격자 밖의 칸이 들어 있습니다.';
  end if;
  new.updated_at := now();
  return new;
end;
$$;

-- 접근 규칙(RLS) -----------------------------------------------------------
alter table ws_avail_polls enable row level security;
alter table ws_avail_responses enable row level security;

drop policy if exists "ws_avail_polls read" on ws_avail_polls;
create policy "ws_avail_polls read" on ws_avail_polls for select to authenticated using (is_team(project_id));
drop policy if exists "ws_avail_responses read" on ws_avail_responses;
create policy "ws_avail_responses read" on ws_avail_responses for select to authenticated using (is_team(project_id));

-- 투표: 팀원이 자기 이름으로 만들고, 팀원 누구나 고치고(닫기·회의 연결), 쓴 사람·작성자·운영진이 지웁니다.
-- 연결하는 회의는 같은 프로젝트 회의만.
drop policy if exists "ws_avail_polls insert" on ws_avail_polls;
create policy "ws_avail_polls insert" on ws_avail_polls for insert to authenticated
  with check (created_by = auth.uid() and is_team(project_id)
    and (meeting_id is null or exists (select 1 from ws_meetings m where m.id = meeting_id and m.project_id = ws_avail_polls.project_id)));
drop policy if exists "ws_avail_polls update" on ws_avail_polls;
create policy "ws_avail_polls update" on ws_avail_polls for update to authenticated using (is_team(project_id))
  with check (is_team(project_id)
    and (meeting_id is null or exists (select 1 from ws_meetings m where m.id = meeting_id and m.project_id = ws_avail_polls.project_id)));
drop policy if exists "ws_avail_polls delete" on ws_avail_polls;
create policy "ws_avail_polls delete" on ws_avail_polls for delete to authenticated
  using (is_team(project_id) and (created_by = auth.uid() or is_project_author(project_id) or is_admin()));

drop trigger if exists ws_avail_polls_keep_owner on ws_avail_polls;
create trigger ws_avail_polls_keep_owner before update on ws_avail_polls for each row execute function ws_keep_owner();
drop trigger if exists ws_avail_polls_keep_grid on ws_avail_polls;
create trigger ws_avail_polls_keep_grid before update on ws_avail_polls for each row execute function ws_avail_polls_keep_grid();

-- 응답: 본인 행만 만들고·고치고·지웁니다. 같은 프로젝트의 닫히지 않은 투표에만 칠할 수 있습니다.
drop policy if exists "ws_avail_responses insert" on ws_avail_responses;
create policy "ws_avail_responses insert" on ws_avail_responses for insert to authenticated
  with check (user_id = auth.uid() and is_team(project_id)
    and exists (select 1 from ws_avail_polls p where p.id = poll_id and p.project_id = ws_avail_responses.project_id and not p.closed));
drop policy if exists "ws_avail_responses update" on ws_avail_responses;
create policy "ws_avail_responses update" on ws_avail_responses for update to authenticated
  using (user_id = auth.uid() and is_team(project_id))
  with check (user_id = auth.uid() and is_team(project_id)
    and exists (select 1 from ws_avail_polls p where p.id = poll_id and p.project_id = ws_avail_responses.project_id and not p.closed));
drop policy if exists "ws_avail_responses delete" on ws_avail_responses;
create policy "ws_avail_responses delete" on ws_avail_responses for delete to authenticated
  using (user_id = auth.uid() and is_team(project_id));

drop trigger if exists ws_avail_responses_check on ws_avail_responses;
create trigger ws_avail_responses_check before insert or update on ws_avail_responses for each row execute function ws_avail_responses_check();
