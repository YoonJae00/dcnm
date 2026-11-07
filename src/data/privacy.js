// 개인정보 처리방침 값. 문구를 바꾸면 version을 올리고 history에 줄을 더하세요.
// version이 바뀌면 로그인한 부원에게 동의 화면이 다시 나옵니다. (근거: docs/privacy-legal-notes.md)
//
// 보호책임자 이름·연락처는 여기에 적지 않습니다. 이름은 멤버 표에서 직책이 '회장'인 사람,
// 연락처는 운영진 화면 > 사이트 설정의 '개인정보 문의 연락처'(없으면 회장 계정 이메일)에서 자동으로 채워집니다.
// (src/lib/privacy.js 의 usePrivacyOfficer)

export const PRIVACY = {
  version: '2026-11-07',
  effective: '2026-11-07',
  operator: 'DC&M',
  operatorFull: 'DC&M (한성대학교 개발 동아리)',
  site: 'https://hsu-dcnm.vercel.app',
  officerTitle: '회장',
  officerFallbackName: '동아리 회장',
  officerDept: '운영진',
  inquiryPath: '/apply?tab=inquiry',
  replyDays: 10,
  applyRetentionDays: 30,
  inquiryRetentionDays: 30,
};

// 처리하는 개인정보: 목적·항목·보유 기간 (처리방침과 동의 화면이 같은 값을 씁니다)
export const COLLECTIONS = [
  {
    id: 'apply',
    who: '지원자 (비회원)',
    purpose: '부원 선발과 면접 안내',
    required: '이름, 학번, 이메일, 관심 분야, 지원 동기',
    optional: '전화번호',
    period: `모집 마감일부터 ${PRIVACY.applyRetentionDays}일 이내 파기`,
    how: '지원서 제출 시 동의',
  },
  {
    id: 'inquiry',
    who: '문의한 사람 (비회원)',
    purpose: '문의 답변',
    required: '이름, 이메일, 문의 내용',
    optional: '',
    period: `접수일부터 ${PRIVACY.inquiryRetentionDays}일 이내 파기`,
    how: '문의 제출 시 동의',
  },
  {
    id: 'account',
    who: '부원 계정',
    purpose: '부원 확인과 로그인, 글쓰기·프로젝트 참여 등 동아리 활동 지원',
    required: '이메일, 이름, 기수, 활동 분야, 직책, 승인 여부, 가입일, 처리방침 동의 시각과 버전, 로그인 기록(인증 서비스가 자동 기록하는 로그인 시각·접속 정보)',
    optional: '',
    period: '탈퇴(계정 삭제) 시까지. 탈퇴하면 지체 없이 삭제',
    how: '첫 로그인 때 동의',
  },
  {
    id: 'card',
    who: '공개 멤버 카드',
    purpose: '동아리 소개 화면(멤버)에 부원 소개',
    required: '이름, 기수, 직책, 활동 분야, 소개, 기술 태그, GitHub 주소(입력한 경우)',
    optional: '',
    period: '본인이 삭제를 요청하거나 탈퇴할 때까지(탈퇴 시 카드도 함께 삭제)',
    how: '운영진이 본인에게 알리고 등록. 첫 로그인 동의 화면에서도 공개 사실을 안내',
  },
  {
    id: 'activity',
    who: '커뮤니티·프로젝트 활동',
    purpose: '글·댓글·프로젝트 모집·참여 신청·문의 기능 제공',
    required: '작성자 이름, 계정 식별값, 작성한 글·댓글·신청 내용, 작성 시각',
    optional: '',
    period: '탈퇴 시까지. 탈퇴할 때 이름을 \'탈퇴한 회원\'으로 바꾸거나, 선택하면 글·댓글까지 삭제',
    how: '첫 로그인 동의에 포함',
  },
];

export const PROCESSORS = [
  {
    name: 'Supabase, Inc.',
    task: '데이터베이스 저장·관리, 부원 로그인 인증, 로그인 링크 메일 발송',
    country: '싱가포르 (서버 위치)',
    url: 'https://supabase.com/privacy',
  },
  {
    name: 'Vercel Inc.',
    task: '웹사이트 호스팅과 전송(방문 시 접속 기록이 호스팅 업체에 자동으로 남음)',
    country: '미국 등 (Vercel 서버 위치)',
    url: 'https://vercel.com/legal/privacy-policy',
  },
];

// 국외 이전: 지침이 요구하는 항목(근거·항목·국가·시기와 방법·이전받는 자·목적과 보유 기간·거부 방법)
export const OVERSEAS = [
  {
    kind: '처리위탁·보관',
    to: 'Supabase, Inc. (연락처: https://supabase.com/privacy)',
    country: '싱가포르',
    items: '지원·문의 항목(이름, 학번, 이메일, 전화번호, 관심 분야, 지원 동기·문의 내용), 부원 계정 항목, 멤버 카드, 글·댓글·참여 신청',
    when: '지원서·문의 제출, 로그인, 글 작성 등 이용할 때마다 즉시. HTTPS로 암호화해 네트워크 전송',
    purpose: '데이터베이스 저장·보관, 로그인 인증, 로그인 링크 메일 발송',
    period: '위 "보유 기간"과 같음. 파기·탈퇴 시 삭제',
    basis: '「개인정보 보호법」 제28조의8제1항제1호 (국외 이전에 대한 별도 동의)',
    refuse: '지원·문의 화면과 첫 로그인 화면의 "국외 이전 동의"를 선택하지 않으면 이전하지 않습니다. 이 경우 온라인 지원·문의와 부원 로그인은 이용할 수 없습니다(문의는 운영진에게 직접 연락). 이미 동의했다면 계정 삭제 또는 삭제 요청으로 철회할 수 있습니다.',
  },
  {
    kind: '처리위탁(호스팅 접속 기록)',
    to: 'Vercel Inc. (연락처: https://vercel.com/legal/privacy-policy)',
    country: '미국 등',
    items: '접속 IP 주소, 브라우저 정보, 접속 시각 같은 접속 기록 (지원서·계정 정보는 Vercel을 거치지 않고 Supabase로 바로 전송)',
    when: '사이트를 열 때마다 자동으로',
    purpose: '웹사이트 전송과 보안',
    period: 'Vercel의 보관 정책에 따름. 동아리는 이 기록을 열람하거나 이용하지 않음',
    basis: '호스팅 서비스 제공에 따라 자동으로 처리됨 (처리방침에 알립니다)',
    refuse: '사이트를 이용하지 않는 것 외에는 접속 기록을 막을 방법이 없습니다.',
  },
];

export const SAFETY = [
  ['관리적 조치', '개인정보를 열람할 수 있는 운영진 계정을 최소한으로 두고, 개인정보 보호책임자를 지정해 운영합니다. 지원·문의는 모집이 끝나면 운영진이 직접 파기합니다.'],
  ['기술적 조치', '지원서·문의는 운영진만, 부원 정보는 본인과 운영진만 볼 수 있게 데이터베이스 접근 규칙(행 단위 보안)을 설정했습니다. 사이트와 서버 사이는 HTTPS로 암호화합니다. 비밀번호는 인증 서비스가 복호화할 수 없는 방식으로 저장해 동아리도 알 수 없습니다. 이메일 인증이 끝난 주소만 부원 초대를 받을 수 있습니다.'],
  ['물리적 조치', '동아리가 따로 운영하는 서버나 보관 장소는 없고, 클라우드 업체(Supabase, Vercel)의 데이터센터 보안에 의존합니다.'],
];

// 브라우저 저장소(쿠키는 쓰지 않습니다)
export const STORAGE = [
  ['dcm-theme', '선택한 화면 테마(밝게·어둡게)', '직접 지울 때까지'],
  ['dcm-intro-seen', '첫 화면 인트로를 이미 봤다는 표시', '직접 지울 때까지'],
  ['sb-…-auth-token', '부원 로그인 상태(로그인한 경우에만)', '로그아웃하거나 세션이 끝날 때까지'],
  ['dcm-site-db-v2, dcm-user', '예시 데이터 모드에서만 쓰는 화면 확인용 데이터', '예시 데이터로 되돌리기 또는 직접 지울 때까지'],
];

export const EXTERNAL_FONTS = [
  ['jsDelivr (cdn.jsdelivr.net)', 'SUIT 글꼴'],
  ['Google Fonts (fonts.googleapis.com, fonts.gstatic.com)', 'IBM Plex 글꼴'],
];

export const AGENCIES = [
  ['개인정보 분쟁조정위원회', '1833-6972', 'www.kopico.go.kr'],
  ['개인정보침해 신고센터', '국번 없이 118', 'privacy.kisa.or.kr'],
  ['경찰청 사이버수사국', '국번 없이 182', 'ecrm.police.go.kr'],
];

export const HISTORY = [
  { version: '2026-11-07', from: '2026-11-07', to: '현재', note: '최초 제정' },
];
