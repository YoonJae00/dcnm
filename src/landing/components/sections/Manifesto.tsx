
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { manifesto } from "@/data/site";
import { cn } from "@/lib/cn";

const tokens = manifesto.split(" ").map((raw) => {
  const highlighted = raw.startsWith("*");
  return { text: raw.replace(/\*/g, ""), highlighted };
});

function Word({
  progress,
  range,
  highlighted,
  children,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  highlighted: boolean;
  children: string;
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  const y = useTransform(progress, range, [6, 0]);
  return (
    <>
      <motion.span
        style={{ opacity, y }}
        className={cn("inline-block", highlighted && "text-brand")}
      >
        {children}
      </motion.span>{" "}
    </>
  );
}

/** 스크롤하면 단어가 하나씩 켜지는 애플식 문단 */
export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.45", "end end"] });
  const n = tokens.length;
  const barScale = useTransform(scrollYProgress, [0, 0.85], [0, 1]);

  return (
    <section id="about" aria-label="동아리 소개" className="scroll-mt-16 bg-white">
      <div ref={ref} className="relative h-[140vh] sm:h-[160vh]">
        <div className="sticky top-16 flex min-h-[70svh] items-start py-8 sm:py-12">
          <div className="mx-auto w-full max-w-5xl px-5 md:px-8">
            <div className="mb-8 flex items-center gap-4">
              <p className="font-mono text-14 font-semibold tracking-normal text-primary">
                <span className="opacity-60">{"// "}</span>About DC&amp;M
              </p>
              <div className="h-[2px] flex-1 overflow-hidden rounded-full bg-gray-1">
                <motion.div
                  className="bg-brand h-full origin-left"
                  style={{ scaleX: barScale }}
                />
              </div>
            </div>
            <p className="text-[clamp(1.75rem,0.9rem+3.6vw,3.6rem)] leading-[1.36] font-bold text-ink">
              {tokens.map((t, i) => (
                <Word
                  key={i}
                  progress={scrollYProgress}
                  range={[(i / n) * 0.85, ((i + 1) / n) * 0.85]}
                  highlighted={t.highlighted}
                >
                  {t.text}
                </Word>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
