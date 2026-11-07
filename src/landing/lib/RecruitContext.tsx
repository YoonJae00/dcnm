import { createContext, useContext, useMemo, type ReactNode } from "react";
import { recruit as defaults } from "@/data/site";
import type { Recruit } from "@/lib/recruit";

/** 운영진 설정에서 온 모집 기간 (YYYY-MM-DD, KST). 없으면 data/site.ts 값을 써요. */
export type RecruitPeriod = { start?: string | null; deadline?: string | null };

const RecruitContext = createContext<Recruit>(defaults);

/**
 * 서류 접수(첫 단계)의 시작·마감을 설정값으로 바꿔요.
 * 시작일 00:00 ~ 마감일 23:59:59 (KST). 나머지 단계와 기수는 data/site.ts 그대로예요.
 */
export function RecruitProvider({ period, children }: { period: RecruitPeriod; children: ReactNode }) {
  const { start, deadline } = period;
  const value = useMemo<Recruit>(() => {
    const applyStart = start ? `${start}T00:00:00+09:00` : defaults.applyStart;
    const applyEnd = deadline ? `${deadline}T23:59:59+09:00` : defaults.applyEnd;
    return {
      ...defaults,
      applyStart,
      applyEnd,
      steps: defaults.steps.map((step, i) =>
        i === 0 ? { ...step, start: applyStart, end: applyEnd } : step,
      ),
    };
  }, [start, deadline]);
  return <RecruitContext.Provider value={value}>{children}</RecruitContext.Provider>;
}

export function useRecruit() {
  return useContext(RecruitContext);
}
