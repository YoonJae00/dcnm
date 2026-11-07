
import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stats, techStack } from "@/data/site";

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const reduce = useReducedMotion();
  const mv = useMotionValue(0);
  const text = useTransform(mv, (v) => Math.round(v).toLocaleString("ko-KR"));

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      mv.set(value);
      return;
    }
    const controls = animate(mv, value, { duration: 2, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [inView, mv, value, reduce]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {text}
    </motion.span>
  );
}

function Marquee({ items, reverse }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="mask-fade-x group flex overflow-hidden">
      <div
        className={`flex shrink-0 gap-3 pr-3 group-hover:[animation-play-state:paused] ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {/* 넓은 화면에서도 끊기지 않게 4번 반복하고 -50%만큼 흘려보내요 */}
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            aria-hidden={i >= items.length}
            className="shrink-0 rounded-full bg-surface px-5 py-2.5 text-14 font-semibold text-gray-5 ring-1 ring-gray-2 transition-colors hover:bg-primary hover:text-white dark:bg-white/[0.08] dark:text-white/90 dark:ring-white/15 dark:hover:bg-primary"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Stats() {
  const half = Math.ceil(techStack.length / 2);
  return (
    <section
      aria-labelledby="stats-title"
      className="relative isolate overflow-hidden bg-mist py-24 text-ink transition-colors sm:py-32 dark:bg-night"
    >
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -z-10 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px] dark:bg-primary/35"
      />
      <div
        aria-hidden
        className="bg-grid absolute inset-0 -z-10 opacity-40 [mask-image:linear-gradient(to_bottom,#000,transparent_70%)]"
      />

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="DC&M in numbers"
          title={<span id="stats-title">숫자로 보는 DC&amp;M</span>}
          description="2003년에 시작해, 지금은 이만큼 자랐어요."
        />

        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 sm:mt-20 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-gray-2 pt-6 dark:border-white/15"
            >
              <dt className="text-14 font-semibold text-gray-4 sm:text-16">{s.label}</dt>
              <dd className="mt-3">
                <span className="bg-[linear-gradient(120deg,#4338ca_20%,#6367ff_60%,#7c3aed)] dark:bg-[linear-gradient(120deg,#fff_20%,#c9beff_60%,#ffdbfd)] bg-clip-text text-[clamp(3rem,2rem+4vw,5rem)] leading-none font-extrabold text-transparent">
                  <Counter value={s.value} />
                </span>
                <span className="ml-1 text-24 font-bold text-primary dark:text-light">{s.unit}</span>
              </dd>
              <dd className="mt-3 text-14 text-gray-4">{s.caption}</dd>
            </motion.div>
          ))}
        </dl>
      </div>

      <div className="mt-20 space-y-3 sm:mt-28">
        <p className="mb-5 text-center text-14 font-semibold text-gray-4 dark:text-white/70">
          우리가 다뤄온 기술들
        </p>
        <Marquee items={techStack.slice(0, half)} />
        <Marquee items={techStack.slice(half)} reverse />
      </div>
    </section>
  );
}
