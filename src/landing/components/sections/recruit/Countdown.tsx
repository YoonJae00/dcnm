
import { AnimatePresence, motion } from "motion/react";
import { useNow } from "@/hooks/useNow";
import { useRecruit } from "@/lib/RecruitContext";
import { formatRange, getPhase, splitDuration } from "@/lib/recruit";
import { ButtonLink } from "@/components/ui/Button";

/** 숫자가 바뀔 때 위에서 아래로 굴러 내려오는 자릿수 */
function RollingDigit({ digit }: { digit: string }) {
  return (
    <span className="relative inline-block h-[1.15em] w-[0.62em] overflow-hidden align-bottom">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          key={digit}
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 grid place-items-center"
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function Unit({ value, label }: { value: number | null; label: string }) {
  const text = value === null ? "--" : String(value).padStart(2, "0");
  return (
    <div className="flex flex-1 flex-col items-center rounded-2xl bg-white/12 py-3 ring-1 ring-white/15 backdrop-blur-sm sm:py-4">
      <span className="text-[clamp(2rem,1.4rem+2.4vw,3rem)] leading-none font-extrabold tabular-nums">
        {text.split("").map((d, i) => (
          <RollingDigit key={`${text.length}-${i}`} digit={d} />
        ))}
      </span>
      <span className="mt-1.5 text-12 font-semibold text-white/70">{label}</span>
    </div>
  );
}

export function Countdown() {
  const recruit = useRecruit();
  const now = useNow();
  const phase = now === null ? "open" : getPhase(recruit, now);
  const target = phase === "upcoming" ? recruit.applyStart : recruit.applyEnd;
  const parts = now === null ? null : splitDuration(Date.parse(target) - now);

  return (
    <div className="relative isolate overflow-hidden rounded-[28px] bg-primary p-6 text-white shadow-m sm:p-9">
      <div aria-hidden className="bg-brand-deep absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="absolute -top-24 -right-16 -z-10 size-72 rounded-full bg-accent/40 blur-3xl"
      />

      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-12 font-bold ring-1 ring-white/20">
          <span
            className={`size-1.5 rounded-full ${phase === "closed" ? "bg-gray-3" : "animate-pulse bg-white"}`}
          />
          {phase === "upcoming" ? "모집 예정" : phase === "closed" ? "모집 마감" : "서류 접수 중"}
        </span>
        <span className="font-mono text-12 tracking-normal text-white/70">
          {recruit.generation}th generation
        </span>
      </div>

      {phase === "closed" ? (
        <div className="mt-8">
          <p className="text-30 font-extrabold">
            {recruit.generation}기 모집이 마감되었어요
          </p>
          <p className="mt-2 text-16 text-white/80">
            관심 가져주셔서 고마워요. 다음 기수 모집 소식을 가장 먼저 알려드릴게요.
          </p>
        </div>
      ) : (
        <>
          <p className="mt-8 text-16 font-semibold text-white/85 sm:text-20">
            {phase === "upcoming" ? "서류 접수 시작까지" : "서류 마감까지"}
          </p>
          <div className="mt-4 flex gap-2 sm:gap-3" role="timer" aria-live="off">
            <Unit value={parts?.days ?? null} label="일" />
            <Unit value={parts?.hours ?? null} label="시간" />
            <Unit value={parts?.minutes ?? null} label="분" />
            <Unit value={parts?.seconds ?? null} label="초" />
          </div>
          <p className="mt-4 text-14 text-white/75">
            서류 접수 {formatRange(recruit.applyStart, recruit.applyEnd)} 23:59까지
          </p>
        </>
      )}

      <div className="mt-8 flex flex-col gap-2.5 sm:flex-row">
        {phase === "closed" ? (
          <ButtonLink href="/apply" variant="white" arrow className="sm:flex-1">
            다음 기수 소식 받기
          </ButtonLink>
        ) : (
          <ButtonLink href="/apply" variant="white" arrow className="sm:flex-1">
            지원서 작성하기
          </ButtonLink>
        )}
        <ButtonLink href="/apply?tab=inquiry" variant="ghost-white" className="sm:w-auto">
          문의하기
        </ButtonLink>
      </div>
    </div>
  );
}
