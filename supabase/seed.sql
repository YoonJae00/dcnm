-- 예시 데이터 (schema.sql 실행 후 실행)

insert into settings (id, recruit_open, recruit_title, recruit_start, recruit_deadline, landing_enabled, recruit_details, intro, room, links) values (1, true, '2027학년도 1학기 신입 부원 모집', '2026-11-03', '2026-11-23', true, '{"generation":8,"applyEndTime":"23:59","steps":[{"title":"서류 접수","description":"온라인 지원서로 간단한 자기소개와 관심 분야를 알려주세요.","start":"2026-11-03T00:00:00+09:00","end":"2026-11-23T23:59:59+09:00"},{"title":"서류 발표","description":"합격 여부와 면접 시간을 문자와 메일로 안내해요.","start":"2026-11-26T18:00:00+09:00"},{"title":"대면 면접","description":"20분 내외의 편안한 대화예요. 코딩 테스트는 없어요.","start":"2026-11-28T10:00:00+09:00","end":"2026-11-29T18:00:00+09:00"},{"title":"최종 발표","description":"최종 합격자에게 개별 연락을 드려요.","start":"2026-12-02T18:00:00+09:00"},{"title":"8기 OT","description":"8기 동기들과 처음 만나는 날! 팀 빌딩도 함께해요.","start":"2026-12-05T14:00:00+09:00"}],"qualifications":["개발에 관심 있는 재학생이라면 전공·학년 무관","한 학기 동안 주 1회 정기 모임에 참여할 수 있는 분","함께 만들고 기록하는 걸 즐기는 분"],"faqs":[{"q":"비전공자도 지원할 수 있나요?","a":"물론이에요. 매 기수 멤버의 30% 정도가 비전공자예요. 첫 4주는 기초 스터디로 함께 시작하니 걱정하지 않아도 돼요."},{"q":"프로젝트 경험이 없어도 괜찮나요?","a":"괜찮아요. 경험보다 ''무엇을 만들어 보고 싶은지''가 더 중요해요. 학기 중반부터 선배 멤버와 함께 첫 프로젝트를 진행해요."},{"q":"정기 모임은 언제, 어디서 하나요?","a":"매주 목요일 저녁 7시에 교내 세미나실에서 모여요. 시험 기간에는 쉬어 가요."},{"q":"회비가 있나요?","a":"학기당 2만 원이에요. 해커톤 간식비, 서버 비용, 세미나 연사 초청 등에 투명하게 사용하고 매 학기 내역을 공개해요."},{"q":"면접은 어떻게 진행되나요?","a":"20분 내외의 대면 면접이에요. 지원서 내용을 바탕으로 관심 분야와 하고 싶은 것에 대해 편하게 이야기 나눠요. 코딩 테스트는 없어요."}]}'::jsonb, 'DC&M은 한성대학교 학생들이 모여 코딩테스트 스터디, 독서클럽, 해커톤을 함께 하는 동아리입니다. 함께할 프로젝트를 직접 올리고 사람을 모을 수도 있습니다.', '인성관 306호', '[{"label":"한성대학교","url":"https://www.hansung.ac.kr"},{"label":"학술정보관","url":"https://hsel.hansung.ac.kr"},{"label":"프로그래머스","url":"https://programmers.co.kr"},{"label":"백준","url":"https://www.acmicpc.net"}]'::jsonb) on conflict (id) do update set recruit_open = excluded.recruit_open, recruit_title = excluded.recruit_title, recruit_start = excluded.recruit_start, recruit_deadline = excluded.recruit_deadline, landing_enabled = excluded.landing_enabled, recruit_details = excluded.recruit_details, intro = excluded.intro, room = excluded.room, links = excluded.links;

insert into members (name, generation, role, part, intro, tags, github, sort) values ('문선우', null, '회장', null, null, array[]::text[], null, 1);
insert into members (name, generation, role, part, intro, tags, github, sort) values ('이규원', null, '부회장', null, null, array[]::text[], null, 2);
insert into members (name, generation, role, part, intro, tags, github, sort) values ('김윤재', null, '부원', null, null, array[]::text[], null, 3);
insert into members (name, generation, role, part, intro, tags, github, sort) values ('김도윤', null, '부원', null, null, array[]::text[], null, 4);
insert into members (name, generation, role, part, intro, tags, github, sort) values ('강경민', null, '부원', null, null, array[]::text[], null, 5);
insert into members (name, generation, role, part, intro, tags, github, sort) values ('양다원', null, '부원', null, null, array[]::text[], null, 6);
insert into members (name, generation, role, part, intro, tags, github, sort) values ('임주호', null, '부원', null, null, array[]::text[], null, 7);
insert into members (name, generation, role, part, intro, tags, github, sort) values ('이석우', null, '부원', null, null, array[]::text[], null, 8);
insert into members (name, generation, role, part, intro, tags, github, sort) values ('이현성', null, '부원', null, null, array[]::text[], null, 9);
insert into members (name, generation, role, part, intro, tags, github, sort) values ('정민지', null, '부원', null, null, array[]::text[], null, 10);
insert into members (name, generation, role, part, intro, tags, github, sort) values ('김달현', null, '부원', null, null, array[]::text[], null, 11);
insert into members (name, generation, role, part, intro, tags, github, sort) values ('김민서', null, '부원', null, null, array[]::text[], null, 12);
insert into members (name, generation, role, part, intro, tags, github, sort) values ('김재우', null, '부원', null, null, array[]::text[], null, 13);
insert into members (name, generation, role, part, intro, tags, github, sort) values ('김찬호', null, '부원', null, null, array[]::text[], null, 14);
insert into members (name, generation, role, part, intro, tags, github, sort) values ('나윤서', null, '부원', null, null, array[]::text[], null, 15);
insert into members (name, generation, role, part, intro, tags, github, sort) values ('마연희', null, '부원', null, null, array[]::text[], null, 16);
insert into members (name, generation, role, part, intro, tags, github, sort) values ('정래준', null, '부원', null, null, array[]::text[], null, 17);
insert into members (name, generation, role, part, intro, tags, github, sort) values ('김재환', null, '부원', null, null, array[]::text[], null, 18);
insert into members (name, generation, role, part, intro, tags, github, sort) values ('송지원', null, '부원', null, null, array[]::text[], null, 19);
insert into members (name, generation, role, part, intro, tags, github, sort) values ('송하원', null, '부원', null, null, array[]::text[], null, 20);
insert into members (name, generation, role, part, intro, tags, github, sort) values ('안현진', null, '부원', null, null, array[]::text[], null, 21);
insert into members (name, generation, role, part, intro, tags, github, sort) values ('유성재', null, '부원', null, null, array[]::text[], null, 22);
insert into members (name, generation, role, part, intro, tags, github, sort) values ('윤준영', null, '부원', null, null, array[]::text[], null, 23);
insert into members (name, generation, role, part, intro, tags, github, sort) values ('이규형', null, '부원', null, null, array[]::text[], null, 24);
insert into members (name, generation, role, part, intro, tags, github, sort) values ('홍성환', null, '부원', null, null, array[]::text[], null, 25);
insert into members (name, generation, role, part, intro, tags, github, sort) values ('문차민', null, '부원', null, null, array[]::text[], null, 26);
insert into members (name, generation, role, part, intro, tags, github, sort) values ('이윤채', null, '부원', null, null, array[]::text[], null, 27);
insert into members (name, generation, role, part, intro, tags, github, sort) values ('장다혜', null, '부원', null, null, array[]::text[], null, 28);
insert into members (name, generation, role, part, intro, tags, github, sort) values ('정윤녕', null, '부원', null, null, array[]::text[], null, 29);
insert into members (name, generation, role, part, intro, tags, github, sort) values ('천자민', null, '부원', null, null, array[]::text[], null, 30);
insert into members (name, generation, role, part, intro, tags, github, sort) values ('정동오', null, '부원', null, null, array[]::text[], null, 31);

insert into notices (title, body, pinned, created_at) values ('미니 해커톤 안내', '이번 미니 해커톤 주제는 동아리 웹사이트 만들기입니다. 가장 잘 만든 팀의 결과물은 실제 동아리 사이트로 씁니다.

일시: 11월 7일(토) 10:00 ~ 20:00
장소: 탐구관 301호

필수 기능
1. 메인 페이지 (동아리 소개, 모집 안내 버튼)
2. 멤버 소개 페이지 (카드형, 기수/역할 필터)
3. 활동/프로젝트 목록과 상세 페이지
4. 지원·문의 폼 (입력값 검사, 제출 완료 화면)
5. 반응형과 배포 (마감 때 URL 제출)

가산점: 공지사항 게시판과 관리자 로그인, 일정 캘린더, 검색, 다크 모드 등', true, '2026-11-06T18:00:00+09:00');
insert into notices (title, body, pinned, created_at) values ('프로젝트 신청 기능이 생겼습니다', '공모전이나 스터디를 같이 할 사람을 사이트에서 모을 수 있습니다. 프로젝트 메뉴의 프로젝트 신청에서 모집글을 올리세요.
참여가 확정되면 정기 모임이 내 활동의 개인 캘린더에 들어갑니다.', false, '2026-11-05T12:00:00+09:00');
insert into notices (title, body, pinned, created_at) values ('독서클럽 대면 모임 (11월 12일)', '11월 12일(목) 15:20 ~ 16:00에 동아리방(인성관 306호)에서 지도교수님과 함께하는 대면 모임이 있습니다. 읽은 부분까지 질문을 하나씩 준비해 오세요.', false, '2026-11-03T12:00:00+09:00');
insert into notices (title, body, pinned, created_at) values ('일요일 코딩테스트 스터디 일정', '스터디는 매주 일요일 오후 3시에 시작합니다. 풀 문제는 전날까지 공유합니다.', false, '2026-10-30T12:00:00+09:00');
insert into notices (title, body, pinned, created_at) values ('2027학년도 1학기 신입 부원 모집', '모집 기간, 대상, 활동 내용, 면접 일정을 여기에 적어 주세요. 지원은 사이트의 지원하기 페이지에서 받습니다.', false, '2026-10-20T12:00:00+09:00');

insert into events (title, date, start_time, end_time, place, kind, note) values ('미니 해커톤', '2026-11-07', '10:00', '20:00', '탐구관 301호', '행사', '동아리 웹사이트 만들기');
insert into events (title, date, start_time, end_time, place, kind, note) values ('독서클럽 대면 모임', '2026-11-12', '15:20', '16:00', '인성관 306호', '정기', '지도교수님 참여');
insert into events (title, date, start_time, end_time, place, kind, note) values ('해커톤 결과 공유회', '2026-11-20', '18:30', '19:30', '인성관 306호', '행사', null);
insert into events (title, date, start_time, end_time, place, kind, note) values ('신입 부원 모집 마감', '2026-11-23', null, null, null, '모집', null);
insert into events (title, date, start_time, end_time, place, kind, note) values ('종강 총회', '2026-12-18', '18:00', '20:00', '인성관 306호', '행사', null);

