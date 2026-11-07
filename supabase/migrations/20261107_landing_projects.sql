-- 랜딩 Activities에 보일 프로젝트 (2026-11-07)
-- 운영진이 사이트 설정에서 체크한 프로젝트 id. 배열 순서가 랜딩 표시 순서입니다. 여러 번 실행해도 됩니다.
alter table settings add column if not exists landing_projects uuid[] not null default '{}';
