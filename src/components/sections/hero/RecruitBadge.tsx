"use client";

import { useNow } from "@/hooks/useNow";
import { recruit } from "@/data/site";
import { formatShortDate, getPhase } from "@/lib/recruit";
import { SmartLink } from "@/components/ui/SmartLink";
import { ArrowRight } from "@/components/ui/icons";

/** 현재 날짜에 따라 '모집 예정 / 모집 중 D-n / 마감'을 자동으로 보여줘요. */
export function RecruitBadge() {
  const now = useNow();
  const phase = now === null ? null : getPhase(now);
  const days =
    now === null ? null : Math.floor((Date.parse(recruit.applyEnd) - now) / 86_400_000);

  const label =
    phase === "upcoming"
      ? `${recruit.generation}기 모집 예정 · ${formatShortDate(recruit.applyStart)} 오픈`
      : phase === "closed"
        ? `${recruit.generation}기 모집이 마감되었어요`
        : `${recruit.generation}기 신입 부원 모집 중`;

  return (
    <SmartLink
      href="/#recruit"
      className="group inline-flex items-center gap-2 rounded-full bg-white/80 py-1.5 pr-3 pl-2 text-14 font-semibold text-gray-5 shadow-s ring-1 ring-gray-2/80 backdrop-blur transition-shadow hover:shadow-m"
    >
      <span className="relative flex size-2.5 items-center justify-center">
        {phase !== "closed" && (
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
        )}
        <span
          className={`relative inline-flex size-2 rounded-full ${phase === "closed" ? "bg-gray-3" : "bg-primary"}`}
        />
      </span>
      <span>{label}</span>
      {phase === "open" && days !== null && (
        <span className="rounded-full bg-primary px-2 py-0.5 text-12 font-bold text-white tabular-nums">
          {days <= 0 ? "D-Day" : `D-${days}`}
        </span>
      )}
      <ArrowRight className="size-3.5 text-gray-3 transition-transform group-hover:translate-x-0.5" />
    </SmartLink>
  );
}
