-- 프로젝트 진행 상황 공개 칸 (2026-11-07)
-- 메인(Home)의 "지금 다른 팀은" 카드에 보여 줍니다. 팀 공간 내용은 팀만 볼 수 있으므로, 공개해도 되는 값만 projects에 둡니다.
-- 고치기는 기존 projects update 정책(작성자·운영진)을 그대로 따릅니다.
-- 여러 번 실행해도 됩니다 (schema.sql에도 같은 내용이 들어 있습니다). schema.sql을 먼저 실행한 DB에서 실행하세요.

alter table projects add column if not exists progress int;
alter table projects add column if not exists status_note text;
alter table projects add column if not exists progress_updated_at timestamptz;

alter table projects drop constraint if exists projects_progress_range;
alter table projects add constraint projects_progress_range check (progress is null or progress between 0 and 100);
alter table projects drop constraint if exists projects_status_note_len;
alter table projects add constraint projects_status_note_len check (status_note is null or char_length(status_note) <= 120);

-- 진행률이나 한 줄 상황이 바뀔 때만 갱신 시각을 서버 시각으로 맞춥니다 (클라이언트가 보낸 값은 무시).
create or replace function projects_touch_progress() returns trigger
language plpgsql as $$
begin
  if new.progress is distinct from old.progress or new.status_note is distinct from old.status_note then
    new.progress_updated_at := now();
  else
    new.progress_updated_at := old.progress_updated_at;
  end if;
  return new;
end;
$$;
drop trigger if exists projects_touch_progress on projects;
create trigger projects_touch_progress before update on projects for each row execute function projects_touch_progress();
