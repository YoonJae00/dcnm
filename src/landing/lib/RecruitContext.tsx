import { createContext, useContext, useMemo, type ReactNode } from "react";
import { recruit as defaultRecruit, tracks as defaultTracks, faqs as defaultFaqs } from "@/data/site";
import type { Faq, Track } from "@/data/site";
import type { Recruit } from "@/lib/recruit";
import { resolveRecruitContent } from "../../lib/recruitDetails.js";

/** 운영진 설정(settings) 중 모집 랜딩이 쓰는 칸. 비어 있으면 data/site.ts의 기본값을 써요. */
export type RecruitSettings = {
  recruit_start?: string | null;
  recruit_deadline?: string | null;
  recruit_details?: unknown;
};

type Content = { recruit: Recruit; tracks: Track[]; faqs: Faq[] };

const RecruitContext = createContext<Content>({
  recruit: defaultRecruit as Recruit,
  tracks: defaultTracks,
  faqs: defaultFaqs,
});

/**
 * 기수·일정·지원 자격·트랙·FAQ를 설정값으로 바꿔요.
 * 서류 접수(첫 단계)는 시작일 00:00 ~ 마감일 마감 시각(KST)이에요.
 */
export function RecruitProvider({ settings, children }: { settings: RecruitSettings; children: ReactNode }) {
  const { recruit_start, recruit_deadline, recruit_details } = settings;
  const value = useMemo(
    () => resolveRecruitContent({ recruit_start, recruit_deadline, recruit_details }) as Content,
    [recruit_start, recruit_deadline, recruit_details],
  );
  return <RecruitContext.Provider value={value}>{children}</RecruitContext.Provider>;
}

export const useRecruit = () => useContext(RecruitContext).recruit;
export const useTracks = () => useContext(RecruitContext).tracks;
export const useFaqs = () => useContext(RecruitContext).faqs;
