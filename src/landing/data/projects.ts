/**
 * 활동·프로젝트 데이터 (더미). 이후 /projects 목록·상세 페이지에서도 그대로 써요.
 */

export type ProjectCategory = "프로젝트" | "해커톤" | "스터디" | "세미나";
export type CoverMotif = "grid" | "orbit" | "wave" | "bars" | "dots" | "rings";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  generation: number;
  period: string;
  summary: string;
  tags: string[];
  award?: string;
  cover: { from: string; to: string; motif: CoverMotif };
};

export const projects: Project[] = [
  {
    slug: "campus-lost-found",
    title: "줍줍 지도",
    category: "해커톤",
    generation: 7,
    period: "2026.09",
    summary: "캠퍼스 분실물을 지도 위에 등록하고 찾아주는 서비스",
    tags: ["Next.js", "Supabase", "Kakao Map"],
    award: "교내 해커톤 대상",
    cover: { from: "#6367ff", to: "#c9beff", motif: "dots" },
  },
  {
    slug: "moa-bab",
    title: "모아밥",
    category: "프로젝트",
    generation: 7,
    period: "2026.03 – 06",
    summary: "학식 메뉴와 식당 혼잡도를 실시간으로 알려주는 앱",
    tags: ["Flutter", "Firebase", "Python"],
    cover: { from: "#8494ff", to: "#ffdbfd", motif: "bars" },
  },
  {
    slug: "dcm-jam-2026",
    title: "DC&M Jam 2026",
    category: "해커톤",
    generation: 7,
    period: "2026.08",
    summary: "12팀 48명이 참가한 무박 2일 자체 해커톤",
    tags: ["24시간", "12팀", "자체 행사"],
    cover: { from: "#1b1b33", to: "#6367ff", motif: "rings" },
  },
  {
    slug: "study-mate",
    title: "스터디메이트",
    category: "프로젝트",
    generation: 6,
    period: "2025.09 – 12",
    summary: "관심사와 시간표로 스터디원을 매칭해 주는 AI 서비스",
    tags: ["FastAPI", "React", "LLM"],
    award: "SW 공모전 우수상",
    cover: { from: "#c9beff", to: "#6367ff", motif: "orbit" },
  },
  {
    slug: "algorithm-season-3",
    title: "알고리즘 스터디 시즌 3",
    category: "스터디",
    generation: 7,
    period: "2026.03 – 06",
    summary: "주 2회, 한 학기 동안 함께 푼 문제만 400개",
    tags: ["C++", "Python", "백준"],
    cover: { from: "#34344d", to: "#8494ff", motif: "grid" },
  },
  {
    slug: "tech-talk-2026",
    title: "현직자 테크 토크",
    category: "세미나",
    generation: 7,
    period: "2026.05",
    summary: "선배 개발자 4명이 들려준 첫 회사, 첫 코드 리뷰 이야기",
    tags: ["커리어", "코드 리뷰", "OB 초청"],
    cover: { from: "#ffdbfd", to: "#8494ff", motif: "wave" },
  },
];
