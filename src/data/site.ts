/**
 * 사이트 전역 콘텐츠 — 실제 동아리 정보가 정해지면 이 파일만 고치면 돼요.
 * (현재는 모두 더미 데이터)
 */

export const club = {
  name: "DC&M",
  tagline: "아이디어가 코드가 되는 곳",
  description:
    "기획부터 배포까지, 함께 만들고 함께 성장하는 개발 동아리 DC&M이에요.",
  founded: 2019,
  email: "hello@dcm.club",
  instagram: "https://instagram.com/",
  github: "https://github.com/",
} as const;

export const navLinks = [
  { label: "소개", href: "/#about" },
  { label: "멤버", href: "/members" },
  { label: "활동", href: "/projects" },
  { label: "모집 안내", href: "/#recruit" },
] as const;

/* ─────────────────────────── 모집 ─────────────────────────── */

export type RecruitStep = {
  title: string;
  description: string;
  /** ISO 8601 (KST) */
  start: string;
  end?: string;
};

export const recruit = {
  generation: 8,
  applyStart: "2026-11-03T00:00:00+09:00",
  applyEnd: "2026-11-23T23:59:59+09:00",
  steps: [
    {
      title: "서류 접수",
      description: "온라인 지원서로 간단한 자기소개와 관심 분야를 알려주세요.",
      start: "2026-11-03T00:00:00+09:00",
      end: "2026-11-23T23:59:59+09:00",
    },
    {
      title: "서류 발표",
      description: "합격 여부와 면접 시간을 문자와 메일로 안내해요.",
      start: "2026-11-26T18:00:00+09:00",
    },
    {
      title: "대면 면접",
      description: "20분 내외의 편안한 대화예요. 코딩 테스트는 없어요.",
      start: "2026-11-28T10:00:00+09:00",
      end: "2026-11-29T18:00:00+09:00",
    },
    {
      title: "최종 발표",
      description: "최종 합격자에게 개별 연락을 드려요.",
      start: "2026-12-02T18:00:00+09:00",
    },
    {
      title: "8기 OT",
      description: "8기 동기들과 처음 만나는 날! 팀 빌딩도 함께해요.",
      start: "2026-12-05T14:00:00+09:00",
    },
  ] satisfies RecruitStep[],
  qualifications: [
    "개발에 관심 있는 재학생이라면 전공·학년 무관",
    "한 학기 동안 주 1회 정기 모임에 참여할 수 있는 분",
    "함께 만들고 기록하는 걸 즐기는 분",
  ],
};

export type Track = {
  id: string;
  name: string;
  summary: string;
  learn: string[];
  stack: string[];
  /** 트랙 카드에 보여줄 짧은 코드 (줄 단위) */
  snippet: string[];
};

export const tracks: Track[] = [
  {
    id: "frontend",
    name: "프론트엔드",
    summary: "사용자가 직접 만지는 화면을 설계하고 구현해요.",
    learn: [
      "HTML·CSS·JS 기초부터 React 컴포넌트 설계까지",
      "디자이너와 협업하는 디자인 시스템 구현",
      "Vercel로 직접 배포하고 성능 개선하기",
    ],
    stack: ["React", "Next.js", "TypeScript", "Tailwind"],
    snippet: [
      "export default function Apply() {",
      "  return <Button onClick={join}>",
      "    8기 지원하기",
      "  </Button>;",
      "}",
    ],
  },
  {
    id: "backend",
    name: "백엔드",
    summary: "서비스를 떠받치는 서버와 데이터를 책임져요.",
    learn: [
      "REST API 설계와 인증·인가 구현",
      "데이터베이스 모델링과 쿼리 최적화",
      "Docker와 클라우드로 서버 운영하기",
    ],
    stack: ["Spring Boot", "Node.js", "MySQL", "AWS"],
    snippet: [
      '@PostMapping("/apply")',
      "public Member join(@RequestBody You you) {",
      "  return dcm.welcome(you, 8);",
      "}",
    ],
  },
  {
    id: "app",
    name: "앱",
    summary: "손안에서 매일 쓰는 모바일 앱을 만들어요.",
    learn: [
      "크로스플랫폼 앱 구조와 상태 관리",
      "푸시 알림·카메라 등 네이티브 기능 연동",
      "스토어 출시까지 경험하기",
    ],
    stack: ["Flutter", "Dart", "Firebase", "Swift"],
    snippet: [
      "onPressed: () {",
      "  Navigator.push(",
      "    context, DcmRoute(gen: 8),",
      "  );",
      "}",
    ],
  },
  {
    id: "ai",
    name: "AI · 데이터",
    summary: "데이터로 문제를 정의하고 모델로 풀어내요.",
    learn: [
      "파이썬 데이터 분석과 시각화",
      "머신러닝 모델 학습과 평가",
      "LLM API를 활용한 서비스 프로토타입",
    ],
    stack: ["Python", "PyTorch", "FastAPI", "Pandas"],
    snippet: [
      "model = DCM(generation=8)",
      "model.fit(passion, epochs=16)",
      "print(model.predict(you))",
      "# >>> 합격 확률 높음",
    ],
  },
];

/* ─────────────────────────── 소개 ─────────────────────────── */

/** `*단어*` 로 감싸면 스크롤 시 브랜드 그라디언트로 강조돼요. */
export const manifesto =
  "우리는 수업에서 배운 코드를 *진짜* *서비스로* 만들어요. 혼자서는 막막한 첫 배포도, 밤새우는 해커톤도 함께라면 *가장* *즐거운* *기억이* 돼요. DC&M은 *만드는* *사람들이* 모이는 곳이에요.";

export const stats = [
  { label: "기수", value: 8, unit: "기", caption: `${2019}년 창단 이후 매년` },
  { label: "누적 멤버", value: 142, unit: "명", caption: "현재 활동 중 38명" },
  { label: "완성한 프로젝트", value: 57, unit: "개", caption: "실제 배포까지 마친 서비스" },
  { label: "대회 수상", value: 18, unit: "회", caption: "교내외 해커톤·공모전" },
] as const;

export const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Spring Boot",
  "Node.js",
  "Flutter",
  "Swift",
  "Kotlin",
  "Python",
  "FastAPI",
  "PyTorch",
  "Docker",
  "AWS",
  "Firebase",
  "Figma",
  "GitHub Actions",
];

export const faqs = [
  {
    q: "비전공자도 지원할 수 있나요?",
    a: "물론이에요. 매 기수 멤버의 30% 정도가 비전공자예요. 첫 4주는 트랙별 기초 스터디로 시작하니 걱정하지 않아도 돼요.",
  },
  {
    q: "프로젝트 경험이 없어도 괜찮나요?",
    a: "괜찮아요. 경험보다 '무엇을 만들어 보고 싶은지'가 더 중요해요. 학기 중반부터 선배 멤버와 함께 첫 프로젝트를 진행해요.",
  },
  {
    q: "정기 모임은 언제, 어디서 하나요?",
    a: "매주 목요일 저녁 7시에 교내 세미나실에서 모여요. 시험 기간에는 쉬어 가요.",
  },
  {
    q: "회비가 있나요?",
    a: "학기당 2만 원이에요. 해커톤 간식비, 서버 비용, 세미나 연사 초청 등에 투명하게 사용하고 매 학기 내역을 공개해요.",
  },
  {
    q: "면접은 어떻게 진행되나요?",
    a: "20분 내외의 대면 면접이에요. 지원서 내용을 바탕으로 관심 분야와 하고 싶은 것에 대해 편하게 이야기 나눠요. 코딩 테스트는 없어요.",
  },
] as const;
