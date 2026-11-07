// 예시 데이터: Supabase를 연결하지 않았을 때 사이트가 이 내용으로 동작합니다.
// 멤버 이름과 개인 프로젝트·게시글은 화면 확인용 예시입니다. 운영 전에 바꿔 주세요.

import { defaultRecruit, defaultFaqs } from './recruitDefaults.js';

const M = (id, name, generation, role, part, intro, tags, sort) => ({ id, name, generation, role, part, intro, tags, github: '', sort });

export const seed = {
  settings: {
    id: 1,
    recruit_open: true,
    recruit_title: '2027학년도 1학기 신입 부원 모집',
    recruit_start: '2026-11-03',
    recruit_deadline: '2026-11-23',
    landing_enabled: true,
    // 랜딩 Activities에 보일 프로젝트 id (순서대로). 운영진 화면 > 사이트 설정에서 바꿀 수 있습니다.
    landing_projects: ['d1', 'p1', 'p4', 'd2'],
    // 모집 랜딩의 기수·일정·지원 자격·FAQ. 운영진 화면 > 사이트 설정에서 바꿀 수 있습니다. (형식은 README 참고)
    recruit_details: {
      generation: defaultRecruit.generation,
      applyEndTime: defaultRecruit.applyEndTime,
      steps: defaultRecruit.steps,
      qualifications: defaultRecruit.qualifications,
      faqs: defaultFaqs,
    },
    intro:
      'DC&M은 한성대학교 학생들이 모여 코딩테스트 스터디, 독서클럽, 해커톤을 함께 하는 동아리입니다. 함께할 프로젝트를 직접 올리고 사람을 모을 수도 있습니다.',
    room: '인성관 306호',
    // 랜딩 하단·부원 홈 바로가기. 운영진 화면 > 모집 설정에서 바꿀 수 있습니다.
    links: [
      { label: '한성대학교', url: 'https://www.hansung.ac.kr' },
      { label: '학술정보관', url: 'https://hsel.hansung.ac.kr' },
      { label: '프로그래머스', url: 'https://programmers.co.kr' },
      { label: '백준', url: 'https://www.acmicpc.net' },
    ],
  },

  members: [
    // 기수·분야·소개는 운영진 화면 > 멤버에서 채울 수 있습니다.
    M('m1', '문선우', null, '회장', '', '', [], 1),
    M('m2', '이규원', null, '부회장', '', '', [], 2),
    M('m3', '김윤재', null, '부원', '', '', [], 3),
    M('m4', '김도윤', null, '부원', '', '', [], 4),
    M('m5', '강경민', null, '부원', '', '', [], 5),
    M('m6', '양다원', null, '부원', '', '', [], 6),
    M('m7', '임주호', null, '부원', '', '', [], 7),
    M('m8', '이석우', null, '부원', '', '', [], 8),
    M('m9', '이현성', null, '부원', '', '', [], 9),
    M('m10', '정민지', null, '부원', '', '', [], 10),
    { ...M('m11', '김달현', null, '부원', '', '', [], 11), created_at: '2026-11-06T10:00:00+09:00' },
    { ...M('m12', '김민서', null, '부원', '', '', [], 12), created_at: '2026-11-07T09:30:00+09:00' },
    M('m13', '김재우', null, '부원', '', '', [], 13),
    M('m14', '김찬호', null, '부원', '', '', [], 14),
    M('m15', '나윤서', null, '부원', '', '', [], 15),
    M('m16', '마연희', null, '부원', '', '', [], 16),
    M('m17', '정래준', null, '부원', '', '', [], 17),
    M('m18', '김재환', null, '부원', '', '', [], 18),
    M('m19', '송지원', null, '부원', '', '', [], 19),
    M('m20', '송하원', null, '부원', '', '', [], 20),
    M('m21', '안현진', null, '부원', '', '', [], 21),
    M('m22', '유성재', null, '부원', '', '', [], 22),
    M('m23', '윤준영', null, '부원', '', '', [], 23),
    M('m24', '이규형', null, '부원', '', '', [], 24),
    M('m25', '홍성환', null, '부원', '', '', [], 25),
    M('m26', '문차민', null, '부원', '', '', [], 26),
    M('m27', '이윤채', null, '부원', '', '', [], 27),
    M('m28', '장다혜', null, '부원', '', '', [], 28),
    M('m29', '정윤녕', null, '부원', '', '', [], 29),
    M('m30', '천자민', null, '부원', '', '', [], 30),
    M('m31', '정동오', null, '부원', '', '', [], 31),
  ],

  // status: ongoing(진행 중) | recruiting(모집 중) | done(완료)
  // origin: club(동아리 개설) | personal(개인 신청)
  // meet_days: 0(일)~6(토) 요일, meet_time: 정기 모임 시작 시각 → 참여자 개인 캘린더에 반복 일정으로 들어감
  projects: [
    {
      id: 'p1', status: 'ongoing', origin: 'club', kind: '프로젝트',
      title: '동아리 웹사이트 운영', summary: '해커톤 1조 결과물을 실제 사이트로 운영하면서 프로젝트·커뮤니티 기능을 붙입니다.',
      body: '미니 해커톤에서 만든 사이트를 동아리 공식 사이트로 씁니다.\n매주 수요일 저녁에 디스코드에서 만나 기능 하나씩 붙이고, 운영진 피드백을 반영합니다.',
      author_id: 'm1', author_name: '문선우', member_ids: ['m1', 'm3', 'm5', 'm9'], capacity: 4,
      period: '2026.11 – 2027.02', start_date: '2026-11-08', end_date: '2027-02-28', meet_days: [3], meet_time: '19:00', place: '디스코드',
      tags: ['React', 'Supabase'], link: '', created_at: '2026-11-07T20:00:00+09:00',
      progress: 45, status_note: '프로젝트·커뮤니티 기능은 붙였고, 지금은 팀 공간 화면과 홈 개편을 마무리하는 중이에요.', progress_updated_at: '2026-11-07T21:30:00+09:00',
    },
    {
      id: 'p2', status: 'ongoing', origin: 'club', kind: '스터디',
      title: '코딩테스트 스터디', summary: '매주 일요일 오후 3시에 프로그래머스와 백준 문제를 풀고 풀이를 설명합니다.',
      body: '2026년 2학기에는 주 1회 진행합니다.\n그리디, DP, 스택, 그래프 문제를 브론즈부터 실버 난이도까지 풀고 각자 풀이를 설명합니다. 언어는 Python을 기본으로 하되 C나 Java로 풀어도 됩니다.',
      author_id: 'm2', author_name: '이규원', member_ids: ['m2', 'm7', 'm9', 'm6', 'm8'], capacity: 10,
      period: '2026년 2학기', start_date: '2026-09-06', end_date: '2026-12-20', meet_days: [0], meet_time: '15:00', place: '온라인',
      tags: ['Python', '프로그래머스', '백준'], link: '', created_at: '2026-09-01T12:00:00+09:00',
      progress: 60, status_note: '그래프 탐색 주차까지 끝냈고, 다음 주부터 DP 심화 문제를 풉니다.', progress_updated_at: '2026-11-02T16:00:00+09:00',
    },
    {
      id: 'p3', status: 'ongoing', origin: 'club', kind: '독서',
      title: '독서클럽 (학술정보관 연계)', summary: '러셀의 『어떻게 인간과 공존하는 인공지능을 만들 것인가』를 함께 읽습니다.',
      body: '학술정보관 독서클럽 프로그램과 연계해 진행합니다.\n평소에는 디스코드로 비대면 모임을 하고, 지도교수님이 참여하는 회차는 동아리방에서 대면으로 만납니다. 모임 날짜는 일정 탭에 따로 올립니다.',
      author_id: 'm4', author_name: '김도윤', member_ids: ['m4', 'm10', 'm3', 'm9'], capacity: 10,
      period: '2026.09 – 2026.12', start_date: '2026-09-15', end_date: '2026-12-15', meet_days: [], meet_time: '', place: '인성관 306호',
      tags: ['독서', 'AI 윤리'], link: '', created_at: '2026-09-10T12:00:00+09:00',
      progress: 75, status_note: '책 8장까지 읽었어요. 11월 12일 대면 모임에서 질문을 나눕니다.', progress_updated_at: '2026-11-03T12:30:00+09:00',
    },
    {
      id: 'p4', status: 'ongoing', origin: 'personal', kind: '공모전',
      title: 'AI 에이전트 공모전 팀', summary: '데이터 분석 대회에 4인 팀으로 나갑니다. 매주 실험 결과를 공유합니다.',
      body: '대회 마감까지 매주 화요일 밤에 실험 결과를 공유하고 다음 주 할 일을 나눕니다.',
      author_id: 'm10', author_name: '정민지', member_ids: ['m10', 'm4', 'm8', 'm9'], capacity: 4,
      period: '2026.11 – 2026.12', start_date: '2026-11-03', end_date: '2026-12-15', meet_days: [2], meet_time: '21:00', place: '디스코드',
      tags: ['Python', 'LLM'], link: '', created_at: '2026-10-28T12:00:00+09:00',
      progress: 30, status_note: '데이터 전처리를 끝내고 첫 모델 실험을 돌리고 있어요.', progress_updated_at: '2026-11-04T23:10:00+09:00',
    },
    {
      id: 'p5', status: 'ongoing', origin: 'personal', kind: '프로젝트',
      title: '강의실 빈자리 알리미', summary: '강의실 좌석 센서 값을 모아 빈자리를 웹으로 보여 주는 IoT 프로젝트입니다.',
      body: '아두이노 압력 센서로 좌석 사용 여부를 모으고, 서버에서 강의실별 빈자리를 보여 줍니다.',
      author_id: 'm8', author_name: '이석우', member_ids: ['m8', 'm5', 'm6'], capacity: 3,
      period: '2026.10 – 2027.01', start_date: '2026-10-01', end_date: '2027-01-31', meet_days: [5], meet_time: '18:00', place: '동아리방',
      tags: ['Arduino', 'Python'], link: '', created_at: '2026-09-25T12:00:00+09:00',
      progress: 55, status_note: '센서 값 수집은 되고, 강의실별 빈자리 화면을 만드는 중입니다.', progress_updated_at: '2026-11-06T18:40:00+09:00',
    },
    {
      id: 'p6', status: 'ongoing', origin: 'personal', kind: '프로젝트',
      title: 'Unity 2D 인디게임', summary: '방학 전까지 데모 한 판을 만드는 것이 목표입니다. 기획과 그래픽을 나눠 맡습니다.',
      body: '짧은 2D 퍼즐 게임 데모를 만듭니다. 토요일 오후에 온라인으로 만나 진행 상황을 맞춥니다.',
      author_id: 'm9', author_name: '이현성', member_ids: ['m9', 'm3'], capacity: 3,
      period: '2026.10 – 2027.02', start_date: '2026-10-10', end_date: '2027-02-20', meet_days: [6], meet_time: '14:00', place: '온라인',
      tags: ['Unity', 'C#'], link: '', created_at: '2026-10-05T12:00:00+09:00',
      progress: 20, status_note: '퍼즐 규칙을 확정했고 첫 스테이지 그래픽을 그리고 있어요.', progress_updated_at: '2026-10-31T15:20:00+09:00',
    },

    {
      id: 'r1', status: 'recruiting', origin: 'personal', kind: '스터디',
      title: '정보처리기사 필기 스터디 같이 하실 분', summary: '내년 1회차 필기를 목표로 주 2회 기출을 풀고 오답을 공유합니다. 처음 준비하는 분도 환영합니다.',
      body: '화요일과 금요일 밤 9시에 디스코드에서 만나 한 회차 기출을 같이 채점하고, 틀린 문제를 한 사람씩 설명합니다.\n혼자 하면 데이터베이스와 소프트웨어 설계 파트에서 자꾸 멈추게 되더라고요. 처음 준비하시는 분도 괜찮습니다.',
      author_id: 'm7', author_name: '임주호', member_ids: ['m7', 'm2', 'm4'], capacity: 5,
      deadline: '2026-11-10', condition: '매주 기출 1회분 풀어 오기', mode: '온라인',
      period: '11/17 – 12/26 (6주)', start_date: '2026-11-17', end_date: '2026-12-26', meet_days: [2, 5], meet_time: '21:00', place: '디스코드',
      tags: ['자격증'], link: '', created_at: '2026-11-05T12:00:00+09:00',
    },
    {
      id: 'r2', status: 'recruiting', origin: 'personal', kind: '스터디',
      title: 'Spring 입문 강의 같이 들어요', summary: '인프런 Spring 입문 강의를 8주 동안 같이 듣고 매주 진도와 막힌 부분을 공유합니다.',
      body: '매주 일요일 밤까지 정해진 진도를 듣고, 월요일 저녁에 30분 동안 막힌 부분을 이야기합니다.',
      author_id: 'm6', author_name: '양다원', member_ids: ['m6', 'm5', 'm8', 'm10'], capacity: 6,
      deadline: '2026-11-12', condition: '주 1회 진도 인증, Java 기초 문법', mode: '온라인',
      period: '11/12 – 1/7 (8주)', start_date: '2026-11-16', end_date: '2027-01-07', meet_days: [1], meet_time: '20:00', place: '디스코드',
      tags: ['Java', 'Spring'], link: '', created_at: '2026-11-04T12:00:00+09:00',
    },
    {
      id: 'r3', status: 'recruiting', origin: 'personal', kind: '공모전',
      title: '교내 SW 아이디어 경진대회 팀원 구해요', summary: '캠퍼스 생활 문제를 푸는 서비스 아이디어로 나갑니다. 기획서와 시연용 화면까지 만듭니다.',
      body: '아이디어는 정해져 있고, 시연용 화면을 함께 만들 사람을 찾습니다.\n주 1회는 동아리방에서 만나고 나머지는 온라인으로 진행합니다.',
      author_id: 'm5', author_name: '강경민', member_ids: ['m5', 'm1'], capacity: 4,
      deadline: '2026-11-16', condition: '프론트엔드 1명, 디자인 1명', mode: '혼합',
      period: '11/20 – 12/15', start_date: '2026-11-20', end_date: '2026-12-15', meet_days: [4], meet_time: '18:30', place: '동아리방',
      tags: ['공모전', 'React'], link: '', created_at: '2026-11-03T12:00:00+09:00',
    },
    {
      id: 'r4', status: 'recruiting', origin: 'club', kind: '프로젝트',
      title: '동아리 사이트 고도화 (React)', summary: '해커톤 결과물에 로그인, 프로젝트 신청, 커뮤니티를 붙여 실제로 운영합니다.',
      body: '운영진과 함께 사이트를 고도화할 부원을 찾습니다. React 기초만 있으면 됩니다.',
      author_id: 'm1', author_name: '문선우', member_ids: ['m1'], capacity: 3,
      deadline: '2026-11-21', condition: 'React 기초, 격주 회의 참석', mode: '대면',
      period: '11월 – 1월', start_date: '2026-11-25', end_date: '2027-01-31', meet_days: [3], meet_time: '18:00', place: '동아리방',
      tags: ['React'], link: '', created_at: '2026-11-07T21:00:00+09:00',
    },
    {
      id: 'r5', status: 'recruiting', origin: 'personal', kind: '스터디',
      title: 'Figma 기초 같이 익혀요', summary: '해커톤에서 디자인이 제일 어려웠던 사람끼리 4주 동안 Figma 기초를 같이 연습합니다.',
      body: '매주 목요일 저녁에 한 화면씩 따라 만들어 보고 서로 피드백합니다.',
      author_id: 'm9', author_name: '이현성', member_ids: ['m9'], capacity: 4,
      deadline: '2026-11-14', condition: '노트북 지참, 매주 과제 1개', mode: '대면',
      period: '11/19 – 12/10 (4주)', start_date: '2026-11-19', end_date: '2026-12-10', meet_days: [4], meet_time: '19:00', place: '인성관 306호',
      tags: ['Figma', '디자인'], link: '', created_at: '2026-11-06T12:00:00+09:00',
    },

    {
      id: 'd1', status: 'done', origin: 'club', kind: '해커톤',
      title: '미니 해커톤: 동아리 웹사이트 만들기', summary: '하루 동안 팀별로 동아리 웹사이트를 만들어 가장 잘 만든 결과물을 실제 사이트로 씁니다.',
      body: '11월 7일(토) 10시부터 20시까지 탐구관 301호에서 진행한 미니 해커톤입니다.\n필수 기능은 메인 페이지, 멤버 소개(기수·역할 필터), 활동 목록과 상세, 지원·문의 폼, 반응형과 배포였습니다.',
      author_id: 'm1', author_name: '문선우', member_ids: ['m1', 'm2', 'm3', 'm5', 'm9', 'm10'], capacity: 12,
      period: '2026. 11. 7.', start_date: '2026-11-07', end_date: '2026-11-07', meet_days: [], meet_time: '', place: '탐구관 301호',
      tags: ['React', 'Supabase'], link: '', created_at: '2026-11-07T20:00:00+09:00',
    },
    {
      id: 'd2', status: 'done', origin: 'club', kind: '스터디',
      title: '2026년 1학기 코딩테스트 스터디', summary: '한 학기 동안 프로그래머스 고득점 Kit을 끝까지 풀었습니다.',
      body: '매주 일요일에 모여 문제를 풀고 풀이를 공유했습니다.',
      author_id: 'm2', author_name: '이규원', member_ids: ['m2', 'm7', 'm6'], capacity: 10,
      period: '2026. 3. – 6.', start_date: '2026-03-08', end_date: '2026-06-14', meet_days: [], meet_time: '', place: '온라인',
      tags: ['Python'], link: '', created_at: '2026-06-15T12:00:00+09:00',
    },
    {
      id: 'd3', status: 'done', origin: 'personal', kind: '스터디',
      title: '여름방학 백준 100문제 챌린지', summary: '방학 8주 동안 각자 백준 100문제를 풀고 매주 인증했습니다.',
      body: '다섯 명 중 네 명이 100문제를 채웠습니다.',
      author_id: 'm7', author_name: '임주호', member_ids: ['m7', 'm9', 'm8'], capacity: 5,
      period: '2026. 7. – 8.', start_date: '2026-07-01', end_date: '2026-08-31', meet_days: [], meet_time: '', place: '온라인',
      tags: ['백준'], link: '', created_at: '2026-08-31T12:00:00+09:00',
    },
    {
      id: 'd4', status: 'done', origin: 'personal', kind: '프로젝트',
      title: '시간표 겹침 찾기 웹앱', summary: '친구들 시간표를 넣으면 다 같이 비는 시간을 찾아 주는 웹앱입니다.',
      body: '조별 과제 회의 시간을 잡기 힘들어서 만들었습니다.',
      author_id: 'm5', author_name: '강경민', member_ids: ['m5', 'm6', 'm9'], capacity: 3,
      period: '2026. 4. – 6.', start_date: '2026-04-01', end_date: '2026-06-30', meet_days: [], meet_time: '', place: '',
      tags: ['JavaScript'], link: '', created_at: '2026-06-30T12:00:00+09:00',
    },
  ],

  // 참여 신청: pending(대기) | accepted(수락) | rejected(거절)
  applications: [
    { id: 'a1', project_id: 'r2', user_id: 'm9', user_name: '이현성', message: 'Java는 수업에서 배웠고 Spring은 처음입니다.', status: 'pending', created_at: '2026-11-06T13:00:00+09:00' },
    { id: 'a2', project_id: 'r5', user_id: 'm10', user_name: '정민지', message: '해커톤 때 화면 그리는 게 제일 막혔어요. 같이 하고 싶습니다.', status: 'pending', created_at: '2026-11-06T18:00:00+09:00' },
    { id: 'a3', project_id: 'r5', user_id: 'm5', user_name: '강경민', message: '목요일 저녁 가능합니다.', status: 'pending', created_at: '2026-11-07T09:00:00+09:00' },
    { id: 'a4', project_id: 'r3', user_id: 'm9', user_name: '이현성', message: '프론트엔드로 참여하고 싶습니다.', status: 'rejected', created_at: '2026-11-04T09:00:00+09:00' },
  ],

  inquiries: [
    { id: 'q1', project_id: 'r1', user_id: 'm5', user_name: '강경민', body: '기출은 몇 년도 것부터 푸나요? 교재는 따로 사야 하나요?', created_at: '2026-11-05T15:00:00+09:00' },
    { id: 'q2', project_id: 'r1', user_id: 'm7', user_name: '임주호', body: '2023년부터 거꾸로 풉니다. 교재 없이 무료 기출 사이트로 해도 됩니다.', created_at: '2026-11-05T16:30:00+09:00' },
  ],

  posts: [
    { id: 'b1', category: '프로젝트 후기', title: '미니 해커톤 1조 회고: 하루 만에 Supabase 붙여 본 이야기', body: '오전에 기획 보고서를 쓰고 오후에 화면을 만들었습니다. 제일 오래 걸린 건 의외로 지원 폼 입력값 검사였어요.\n\n다음에는 처음부터 데이터 구조를 먼저 정하고 화면을 만들 생각입니다.', author_id: 'm9', author_name: '이현성', project_id: 'd1', created_at: '2026-11-07T19:30:00+09:00' },
    { id: 'b2', category: '결과물', title: '아두이노로 강의실 소음 측정기 만들어 봤습니다', body: '사운드 센서 하나로 데시벨을 재서 1분마다 기록합니다. 시험 기간에 열람실 고를 때 쓰려고요.', author_id: 'm8', author_name: '이석우', project_id: '', created_at: '2026-11-05T22:10:00+09:00' },
    { id: 'b3', category: '자유', title: '학교 근처 시험기간 밤샘 카페 추천 받아요', body: '콘센트 많고 늦게까지 여는 곳 있으면 알려 주세요.', author_id: 'm5', author_name: '강경민', project_id: '', created_at: '2026-11-04T23:40:00+09:00' },
    { id: 'b4', category: '질문', title: '백준 DP 문제 막힐 때 어떻게 공부하셨나요?', body: '점화식을 세우는 단계에서 계속 막힙니다. 추천할 만한 문제 순서가 있을까요?', author_id: 'm10', author_name: '정민지', project_id: '', created_at: '2026-11-03T20:00:00+09:00' },
    { id: 'b5', category: '프로젝트 후기', title: '여름방학 백준 100문제 챌린지 끝났습니다', body: '다섯 명 중 네 명이 100문제를 채웠습니다. 매주 인증 규칙이 제일 효과 있었어요.', author_id: 'm7', author_name: '임주호', project_id: 'd3', created_at: '2026-09-01T12:00:00+09:00' },
    { id: 'b6', category: '건의', title: '동아리방에 모니터 하나 더 있으면 좋겠습니다', body: '스터디할 때 화면 공유용으로 하나 더 있으면 편할 것 같아요.', author_id: 'm6', author_name: '양다원', project_id: '', created_at: '2026-10-30T18:00:00+09:00' },
  ],

  comments: [
    { id: 'c1', post_id: 'b1', user_id: 'm1', user_name: '문선우', body: '고생 많았어요. 운영 프로젝트에서 이어서 해 봐요.', created_at: '2026-11-07T20:10:00+09:00' },
    { id: 'c2', post_id: 'b1', user_id: 'm5', user_name: '강경민', body: '입력값 검사 공감합니다.', created_at: '2026-11-07T20:30:00+09:00' },
    { id: 'c3', post_id: 'b4', user_id: 'm2', user_name: '이규원', body: '1차원 DP부터 10문제 정도 풀고 2차원으로 넘어가 보세요. 스터디 때 목록 공유할게요.', created_at: '2026-11-03T21:00:00+09:00' },
  ],

  post_likes: [
    { id: 'l1', post_id: 'b1', user_id: 'm1' }, { id: 'l2', post_id: 'b1', user_id: 'm5' }, { id: 'l3', post_id: 'b1', user_id: 'm2' },
    { id: 'l4', post_id: 'b2', user_id: 'm9' }, { id: 'l5', post_id: 'b2', user_id: 'm3' },
    { id: 'l6', post_id: 'b3', user_id: 'm9' }, { id: 'l7', post_id: 'b4', user_id: 'm2' }, { id: 'l8', post_id: 'b5', user_id: 'm9' },
  ],

  notices: [
    {
      id: 'n1', title: '미니 해커톤 안내', pinned: true, created_at: '2026-11-06T18:00:00+09:00',
      body: '이번 미니 해커톤 주제는 동아리 웹사이트 만들기입니다. 가장 잘 만든 팀의 결과물은 실제 동아리 사이트로 씁니다.\n\n일시: 11월 7일(토) 10:00 ~ 20:00\n장소: 탐구관 301호\n\n필수 기능\n1. 메인 페이지 (동아리 소개, 모집 안내 버튼)\n2. 멤버 소개 페이지 (카드형, 기수/역할 필터)\n3. 활동/프로젝트 목록과 상세 페이지\n4. 지원·문의 폼 (입력값 검사, 제출 완료 화면)\n5. 반응형과 배포 (마감 때 URL 제출)\n\n가산점: 공지사항 게시판과 관리자 로그인, 일정 캘린더, 검색, 다크 모드 등',
    },
    { id: 'n2', title: '프로젝트 신청 기능이 생겼습니다', pinned: false, created_at: '2026-11-05T12:00:00+09:00', body: '공모전이나 스터디를 같이 할 사람을 사이트에서 모을 수 있습니다. 프로젝트 메뉴의 프로젝트 신청에서 모집글을 올리세요.\n참여가 확정되면 정기 모임이 내 활동의 개인 캘린더에 들어갑니다.' },
    { id: 'n3', title: '독서클럽 대면 모임 (11월 12일)', pinned: false, created_at: '2026-11-03T12:00:00+09:00', body: '11월 12일(목) 15:20 ~ 16:00에 동아리방(인성관 306호)에서 지도교수님과 함께하는 대면 모임이 있습니다. 읽은 부분까지 질문을 하나씩 준비해 오세요.' },
    { id: 'n4', title: '일요일 코딩테스트 스터디 일정', pinned: false, created_at: '2026-10-30T12:00:00+09:00', body: '스터디는 매주 일요일 오후 3시에 시작합니다. 풀 문제는 전날까지 공유합니다.' },
    { id: 'n5', title: '2027학년도 1학기 신입 부원 모집', pinned: false, created_at: '2026-10-20T12:00:00+09:00', body: '모집 기간, 대상, 활동 내용, 면접 일정을 여기에 적어 주세요. 지원은 사이트의 지원하기 페이지에서 받습니다.' },
  ],

  // 동아리 전체 일정 (정기 모임이 있는 프로젝트 일정은 개인 캘린더에서 따로 계산)
  events: [
    { id: 'e1', title: '미니 해커톤', date: '2026-11-07', start_time: '10:00', end_time: '20:00', place: '탐구관 301호', kind: '행사', note: '동아리 웹사이트 만들기' },
    { id: 'e2', title: '독서클럽 대면 모임', date: '2026-11-12', start_time: '15:20', end_time: '16:00', place: '인성관 306호', kind: '정기', note: '지도교수님 참여' },
    { id: 'e3', title: '해커톤 결과 공유회', date: '2026-11-20', start_time: '18:30', end_time: '19:30', place: '인성관 306호', kind: '행사', note: '' },
    { id: 'e4', title: '신입 부원 모집 마감', date: '2026-11-23', start_time: '', end_time: '', place: '', kind: '모집', note: '' },
    { id: 'e5', title: '종강 총회', date: '2026-12-18', start_time: '18:00', end_time: '20:00', place: '인성관 306호', kind: '행사', note: '' },
  ],

  // 팀 공간 (프로젝트 p1 '동아리 웹사이트 운영' 팀: m1·m3·m5·m9). 시각은 한국 시간 기준 ISO 문자열.
  // kind: notice(공지) | link(링크) | file(파일, Supabase 연결 시에만 올리기)
  ws_posts: [
    { id: 'wp1', project_id: 'p1', kind: 'notice', title: '회의는 매주 수요일 19시, 디스코드 회의 채널에서', body: '정기 회의 외에 급한 일은 디스코드 #웹사이트 채널에 남겨 주세요.\n회의 전날까지 할 일 보드에서 내 카드 상태를 바꿔 두면 회의가 빨라집니다.', pinned: true, created_by: 'm1', created_by_name: '문선우', created_at: '2026-11-07T21:00:00+09:00' },
    { id: 'wp2', project_id: 'p1', kind: 'notice', title: '배포 전 확인 순서', body: '1. npm run build 통과\n2. 다크 모드·모바일 화면 확인\n3. 운영진 단톡에 배포 알림', pinned: false, created_by: 'm3', created_by_name: '김윤재', created_at: '2026-11-06T22:00:00+09:00' },
    { id: 'wp3', project_id: 'p1', kind: 'link', title: 'GitHub 저장소', url: 'https://github.com/', body: 'dcm-site 브랜치에서 작업합니다.', pinned: false, created_by: 'm3', created_by_name: '김윤재', created_at: '2026-11-05T20:00:00+09:00' },
    { id: 'wp4', project_id: 'p1', kind: 'link', title: '화면 시안 (Figma)', url: 'https://www.figma.com/', body: '메인·프로젝트 상세 시안', pinned: false, created_by: 'm5', created_by_name: '강경민', created_at: '2026-11-05T21:00:00+09:00' },
    { id: 'wp5', project_id: 'p1', kind: 'link', title: '회의 메모 모음 (Notion)', url: 'https://www.notion.so/', body: '', pinned: false, created_by: 'm9', created_by_name: '이현성', created_at: '2026-11-04T21:30:00+09:00' },
  ],

  // kind: event(일정) | deadline(마감)
  ws_events: [
    { id: 'wv1', project_id: 'p1', title: '운영진 시연', date: '2026-11-13', start_time: '18:00', end_time: '18:30', place: '인성관 306호', note: '프로젝트 팀 공간 시연', kind: 'event', created_by: 'm1', created_by_name: '문선우', created_at: '2026-11-07T21:10:00+09:00' },
    { id: 'wv2', project_id: 'p1', title: '1차 배포 마감', date: '2026-11-18', start_time: '', end_time: '', place: '', note: 'Supabase 연결까지', kind: 'deadline', created_by: 'm3', created_by_name: '김윤재', created_at: '2026-11-07T21:15:00+09:00' },
  ],

  // status: polling(투표 중) | scheduled(확정) | done(끝남)
  ws_meetings: [
    { id: 'wm1', project_id: 'p1', title: '팀 공간 기능 정리 회의', agenda: '할 일 보드 쓰는 규칙 정하기\n다음 배포 범위', link: 'https://meet.google.com/', status: 'polling', starts_at: null, duration_min: 60, created_by: 'm9', created_by_name: '이현성', created_at: '2026-11-07T21:20:00+09:00' },
    { id: 'wm2', project_id: 'p1', title: '디자인 리뷰', agenda: '메인 화면 시안 검토\n다크 모드 색 확인', link: 'https://discord.com/', status: 'scheduled', starts_at: '2026-11-09T19:00:00+09:00', duration_min: 60, created_by: 'm5', created_by_name: '강경민', created_at: '2026-11-06T12:00:00+09:00' },
    { id: 'wm3', project_id: 'p1', title: '킥오프', agenda: '역할 나누기, 일정 정하기', link: 'https://discord.com/', status: 'done', starts_at: '2026-11-04T19:00:00+09:00', duration_min: 90, created_by: 'm1', created_by_name: '문선우', created_at: '2026-11-02T12:00:00+09:00' },
  ],

  ws_meeting_slots: [
    { id: 'ws1', project_id: 'p1', meeting_id: 'wm1', starts_at: '2026-11-10T19:00:00+09:00', created_by: 'm9', created_by_name: '이현성', created_at: '2026-11-07T21:20:00+09:00' },
    { id: 'ws2', project_id: 'p1', meeting_id: 'wm1', starts_at: '2026-11-11T20:00:00+09:00', created_by: 'm9', created_by_name: '이현성', created_at: '2026-11-07T21:20:00+09:00' },
    { id: 'ws3', project_id: 'p1', meeting_id: 'wm1', starts_at: '2026-11-12T21:00:00+09:00', created_by: 'm9', created_by_name: '이현성', created_at: '2026-11-07T21:20:00+09:00' },
  ],

  ws_meeting_votes: [
    { id: 'wvt1', project_id: 'p1', slot_id: 'ws1', user_id: 'm9', user_name: '이현성', created_at: '2026-11-07T21:21:00+09:00' },
    { id: 'wvt2', project_id: 'p1', slot_id: 'ws2', user_id: 'm9', user_name: '이현성', created_at: '2026-11-07T21:21:00+09:00' },
    { id: 'wvt3', project_id: 'p1', slot_id: 'ws2', user_id: 'm1', user_name: '문선우', created_at: '2026-11-07T21:30:00+09:00' },
    { id: 'wvt4', project_id: 'p1', slot_id: 'ws3', user_id: 'm5', user_name: '강경민', created_at: '2026-11-07T21:40:00+09:00' },
  ],

  ws_minutes: [
    { id: 'wn1', project_id: 'p1', meeting_id: 'wm3', agenda: '역할 나누기\n일정 정하기', decisions: '- 화면은 김윤재, 데이터는 이현성, 디자인은 강경민이 맡는다\n- 매주 수요일 19시에 회의한다\n- 1차 배포는 11월 18일', notes: '운영진 피드백은 문선우가 모아서 회의 때 공유\nSupabase 무료 요금제로 시작', attendee_ids: ['m1', 'm3', 'm5', 'm9'], created_by: 'm1', created_by_name: '문선우', created_at: '2026-11-04T20:30:00+09:00', updated_at: '2026-11-04T20:40:00+09:00' },
    { id: 'wn2', project_id: 'p1', meeting_id: 'wm2', agenda: '메인 화면 시안 검토\n다크 모드 색 확인', decisions: '', notes: '', attendee_ids: [], created_by: 'm5', created_by_name: '강경민', created_at: '2026-11-07T12:00:00+09:00', updated_at: '2026-11-07T12:00:00+09:00' },
  ],

  // status: todo(할 일) | doing(진행 중) | done(완료)
  ws_tasks: [
    { id: 'wt1', project_id: 'p1', title: '프로젝트 상세 화면 다듬기', status: 'doing', assignee_id: 'm3', assignee_name: '김윤재', due: '2026-11-08', note: '', sort: 0, minutes_id: 'wn1', created_by: 'm1', created_by_name: '문선우', created_at: '2026-11-04T20:45:00+09:00' },
    { id: 'wt2', project_id: 'p1', title: 'Supabase 표 설계 정리', status: 'todo', assignee_id: 'm9', assignee_name: '이현성', due: '2026-11-12', note: 'RLS 정책까지', sort: 0, minutes_id: 'wn1', created_by: 'm1', created_by_name: '문선우', created_at: '2026-11-04T20:46:00+09:00' },
    { id: 'wt3', project_id: 'p1', title: '메인 화면 시안', status: 'done', assignee_id: 'm5', assignee_name: '강경민', due: '2026-11-06', note: '', sort: 0, minutes_id: 'wn1', created_by: 'm1', created_by_name: '문선우', created_at: '2026-11-04T20:47:00+09:00' },
    { id: 'wt4', project_id: 'p1', title: '운영진 피드백 모으기', status: 'todo', assignee_id: 'm1', assignee_name: '문선우', due: '2026-11-05', note: '', sort: 0, minutes_id: null, created_by: 'm1', created_by_name: '문선우', created_at: '2026-11-04T21:00:00+09:00' },
    { id: 'wt5', project_id: 'p1', title: '모바일 화면 점검', status: 'todo', assignee_id: null, assignee_name: '', due: '', note: '390px 기준', sort: 0, minutes_id: null, created_by: 'm9', created_by_name: '이현성', created_at: '2026-11-06T21:00:00+09:00' },
  ],

  submissions: [],
};
