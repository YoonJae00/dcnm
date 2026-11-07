
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { LogoGlyph } from "@/components/brand/Logo";
import { Check } from "@/components/ui/icons";
import { cn } from "@/lib/cn";
import { CoffeeMascot } from "./CoffeeMascot";

/* ───────────── 1. 스터디: 깃허브 잔디 ───────────── */

const COLS = 20;
const ROWS = 7;
// 결정적(deterministic) 의사 난수 — 서버/클라이언트 렌더 결과가 같아야 해요.
const level = (i: number) => {
  const x = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
  const r = x - Math.floor(x);
  const trend = (i / (COLS * ROWS)) * 0.5; // 뒤로 갈수록 더 열심히
  const v = r * 0.8 + trend;
  return v > 0.95 ? 4 : v > 0.75 ? 3 : v > 0.55 ? 2 : v > 0.35 ? 1 : 0;
};
const levelClass = ["bg-gray-1", "bg-light/60", "bg-secondary/70", "bg-primary/80", "bg-primary"];

export function ContributionVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  return (
    <div ref={ref} className="rounded-2xl bg-surface p-4 shadow-s ring-1 ring-gray-1 sm:p-5">
      <div className="mb-3 flex items-center justify-between text-12 font-semibold text-gray-4">
        <span>7기 스터디 커밋</span>
        <span className="font-mono tracking-normal text-primary">1,284 commits</span>
      </div>
      <div
        className="grid gap-[3px] sm:gap-1"
        style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`, gridAutoFlow: "column", gridTemplateRows: `repeat(${ROWS}, minmax(0, 1fr))` }}
      >
        {Array.from({ length: COLS * ROWS }, (_, i) => {
          const col = Math.floor(i / ROWS);
          const row = i % ROWS;
          return (
            <motion.span
              key={i}
              className={cn("aspect-square rounded-[3px]", levelClass[level(i)])}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={inView ? { opacity: 1, scale: 1 } : undefined}
              transition={{ duration: 0.35, delay: (col + row) * 0.025 }}
            />
          );
        })}
      </div>
      <div className="mt-3 flex items-center justify-end gap-1 text-12 text-gray-3">
        <span className="mr-1">Less</span>
        {levelClass.map((c) => (
          <span key={c} className={cn("size-2.5 rounded-[2px]", c)} />
        ))}
        <span className="ml-1">More</span>
      </div>
    </div>
  );
}

/* ───────────── 2. 프로젝트: 기획 → 배포 파이프라인 ───────────── */

const STAGES = ["기획", "디자인", "개발", "배포"];

export function PipelineVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <div ref={ref} className="space-y-2.5">
      {STAGES.map((stage, i) => (
        <div
          key={stage}
          className="flex items-center gap-3 rounded-xl bg-surface px-3.5 py-2.5 shadow-s ring-1 ring-gray-1"
        >
          <motion.span
            className="grid size-6 shrink-0 place-items-center rounded-full bg-gray-1 text-white"
            animate={inView ? { backgroundColor: "#6367FF" } : undefined}
            transition={{ delay: 0.3 + i * 0.45, duration: 0.3 }}
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : undefined}
              transition={{ delay: 0.35 + i * 0.45, type: "spring", stiffness: 500, damping: 20 }}
            >
              <Check className="size-3.5" strokeWidth={3} />
            </motion.span>
          </motion.span>
          <span className="w-12 shrink-0 text-14 font-semibold text-gray-5">{stage}</span>
          <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-1">
            <motion.span
              className="bg-brand block h-full origin-left rounded-full"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : undefined}
              transition={{ delay: i * 0.45, duration: 0.45, ease: "easeInOut" }}
            />
          </span>
        </div>
      ))}
    </div>
  );
}

/* ───────────── 3. 해커톤: 24시간 카운트다운 ───────────── */

const HACKATHON_SECONDS = 24 * 3600;
const INITIAL_COFFEES = 37;
const COFFEE_SECONDS = 30 * 60;

export function HackathonTimer() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  const [{ left, coffees }, setTimer] = useState({ left: HACKATHON_SECONDS, coffees: INITIAL_COFFEES });

  useEffect(() => {
    if (!inView) return;
    const id = window.setInterval(() => {
      setTimer((timer) => timer.left > 0 ? { ...timer, left: timer.left - 1 } : timer);
    }, 1000);
    return () => window.clearInterval(id);
  }, [inView]);

  const drinkCoffee = () => setTimer((timer) => timer.coffees > 0
    ? { left: timer.left + COFFEE_SECONDS, coffees: timer.coffees - 1 }
    : timer);
  const totalSeconds = HACKATHON_SECONDS + (INITIAL_COFFEES - coffees) * COFFEE_SECONDS;

  const hh = String(Math.floor(left / 3600)).padStart(2, "0");
  const mm = String(Math.floor((left % 3600) / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");

  return (
    <div ref={ref} className="rounded-2xl bg-night p-5 text-white shadow-m">
      <div className="flex items-center justify-between text-12 font-semibold text-gray-3">
        <span className="flex items-center gap-1.5">
          <span className="size-1.5 animate-pulse rounded-full bg-negative" />
          DC&amp;M Jam · LIVE
        </span>
        <button
          type="button"
          onClick={drinkCoffee}
          disabled={coffees === 0}
          aria-label={`커피 ${coffees}잔 남음, 한 잔 마시고 30분 추가`}
          title={coffees > 0 ? '커피 한 잔으로 30분 더!' : '커피를 모두 마셨어요'}
          className="-my-2 inline-flex min-h-10 items-center rounded-lg px-2 text-light transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-light disabled:cursor-not-allowed disabled:opacity-40"
        >
          ☕ × {coffees}
        </button>
      </div>
      {coffees === 0 && <CoffeeMascot />}
      <span className="sr-only" role="status">
        {coffees < INITIAL_COFFEES ? `30분을 추가했어요. 남은 커피 ${coffees}잔.` : ''}
      </span>
      <p className="mt-3 font-mono text-[40px] leading-none font-bold tracking-tight tabular-nums sm:text-[44px]">
        {hh}
        <span className="animate-pulse text-light">:</span>
        {mm}
        <span className="animate-pulse text-light">:</span>
        {ss}
      </p>
      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
        <div
          className="bg-brand h-full rounded-full transition-[width] duration-1000 ease-linear"
          style={{ width: `${Math.max(0, Math.min(100, (1 - left / totalSeconds) * 100))}%` }}
        />
      </div>
    </div>
  );
}

/* ───────────── 4. 네트워킹: 궤도를 도는 멤버들 ───────────── */

const INNER = [
  { n: "준", c: "from-primary to-light" },
  { n: "서", c: "from-secondary to-accent" },
  { n: "민", c: "from-[#34344d] to-secondary" },
];
const OUTER = [
  { n: "OB", c: "from-primary to-secondary" },
  { n: "하", c: "from-light to-accent" },
  { n: "윤", c: "from-secondary to-primary" },
  { n: "지", c: "from-[#5c5c78] to-light" },
  { n: "현", c: "from-primary to-accent" },
];

function Orbit({
  items,
  radius,
  duration,
  reverse,
}: {
  items: { n: string; c: string }[];
  radius: number;
  duration: number;
  reverse?: boolean;
}) {
  const reduce = false;
  const spin = reduce ? {} : { rotate: reverse ? -360 : 360 };
  return (
    <motion.div
      className="absolute top-1/2 left-1/2"
      style={{ width: radius * 2, height: radius * 2, marginLeft: -radius, marginTop: -radius }}
      animate={spin}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      <div className="absolute inset-0 rounded-full border border-dashed border-light" />
      {items.map((item, i) => {
        const angle = (i / items.length) * Math.PI * 2;
        // 소수점을 2자리로 잘라요. 34.99999999999997 같은 값은 브라우저가 "35px"로 바꿔 적어서
        // 하이드레이션 때 서버 HTML과 클라이언트 값이 달라 보이는 경고가 나요.
        const x = Math.round((Math.cos(angle) * radius + radius) * 100) / 100;
        const y = Math.round((Math.sin(angle) * radius + radius) * 100) / 100;
        return (
          <motion.span
            key={item.n + i}
            className={cn(
              "absolute grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-br text-14 font-bold text-white shadow-m ring-[3px] ring-surface",
              item.c,
            )}
            style={{ left: x, top: y }}
            animate={reduce ? {} : { rotate: reverse ? 360 : -360 }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
          >
            {item.n}
          </motion.span>
        );
      })}
    </motion.div>
  );
}

export function NetworkVisual() {
  return (
    <div className="relative mx-auto h-[260px] w-full max-w-[320px]" aria-hidden>
      <Orbit items={OUTER} radius={120} duration={60} />
      <Orbit items={INNER} radius={70} duration={40} reverse />
      <span className="absolute top-1/2 left-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[22px] bg-primary text-white shadow-m">
        <LogoGlyph className="size-11" cursor="#FFDBFD" blink />
      </span>
    </div>
  );
}
