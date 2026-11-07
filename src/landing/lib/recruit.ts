import type { RecruitStep } from "@/data/site";

export type Recruit = {
  generation: number;
  /** 서류 접수 마감 시각 "HH:MM" */
  applyEndTime: string;
  applyStart: string;
  applyEnd: string;
  steps: RecruitStep[];
  qualifications: string[];
};

export type RecruitPhase = "upcoming" | "open" | "closed";

const KST = "Asia/Seoul";

/** "11.23 (월)" 형식. 서버·클라이언트 어디서 호출해도 KST 기준으로 같은 결과가 나와요. */
export function formatShortDate(iso: string) {
  const parts = new Intl.DateTimeFormat("ko-KR", {
    timeZone: KST,
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
  }).formatToParts(new Date(iso));
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return `${get("month")}.${get("day")} (${get("weekday")})`;
}

export function formatRange(start: string, end?: string) {
  if (!end) return formatShortDate(start);
  const a = formatShortDate(start);
  const b = formatShortDate(end);
  return a === b ? a : `${a} – ${b}`;
}

export function getPhase(recruit: Recruit, now: number): RecruitPhase {
  if (now < Date.parse(recruit.applyStart)) return "upcoming";
  if (now > Date.parse(recruit.applyEnd)) return "closed";
  return "open";
}

/** 현재 진행 중(또는 가장 최근에 시작한) 단계의 인덱스. 시작 전이면 -1 */
export function getCurrentStepIndex(recruit: Recruit, now: number) {
  let index = -1;
  recruit.steps.forEach((step, i) => {
    if (now >= Date.parse(step.start)) index = i;
  });
  return index;
}

export function splitDuration(ms: number) {
  const clamped = Math.max(0, ms);
  const totalSeconds = Math.floor(clamped / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}
