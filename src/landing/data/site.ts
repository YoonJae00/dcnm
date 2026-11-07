/**
 * 사이트 전역 콘텐츠 — 실제 동아리 정보가 정해지면 이 파일만 고치면 돼요.
 * (현재는 모두 더미 데이터)
 */

import { defaultRecruit, defaultFaqs } from "../../data/recruitDefaults.js";

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
  { label: "멤버", href: "/#members" },
  { label: "활동", href: "/#activities" },
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

/** 기본값은 data/recruitDefaults.js에 있고, 운영진 설정이 있으면 lib/RecruitContext가 덮어써요. */
export const recruit = {
  ...defaultRecruit,
  applyStart: defaultRecruit.steps[0].start,
  applyEnd: defaultRecruit.steps[0].end,
  steps: defaultRecruit.steps as RecruitStep[],
};

/* ─────────────────────────── 소개 ─────────────────────────── */

/** `*단어*` 로 감싸면 스크롤 시 브랜드 그라디언트로 강조돼요. */
export const manifesto =
  "우리는 수업에서 배운 코드를 *진짜* *서비스로* 만들어요. 혼자서는 막막한 첫 배포도, 밤새우는 해커톤도 함께라면 *가장* *즐거운* *기억이* 돼요. DC&M은 *만드는* *사람들이* 모이는 곳이에요.";

export const stats = [
  { label: "기수", value: 26, unit: "기", caption: "2003년 창단" },
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

export type Faq = { q: string; a: string };
export const faqs: Faq[] = defaultFaqs;
