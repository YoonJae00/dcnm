"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { useNow } from "@/hooks/useNow";
import { recruit } from "@/data/site";
import { formatRange, getCurrentStepIndex } from "@/lib/recruit";
import { Check } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

export function Timeline() {
  const ref = useRef<HTMLOListElement>(null);
  const now = useNow();
  const current = now === null ? -2 : getCurrentStepIndex(now);

  // 스크롤하면 세로선이 채워져요
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.55"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <div className="rounded-[28px] bg-mist p-6 ring-1 ring-gray-1 sm:p-9">
      <h3 className="text-20 font-bold text-ink">모집 일정</h3>
      <ol ref={ref} className="relative mt-7">
        {/* 세로선 */}
        <span aria-hidden className="absolute top-4 bottom-4 left-[15px] w-[2px] rounded-full bg-gray-2" />
        <motion.span
          aria-hidden
          className="bg-brand absolute top-4 bottom-4 left-[15px] w-[2px] origin-top rounded-full"
          style={{ scaleY: fill }}
        />

        {recruit.steps.map((step, i) => {
          const status = current === -2 ? "unknown" : i < current ? "done" : i === current ? "current" : "upcoming";
          return (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative flex gap-4 pb-8 last:pb-0"
            >
              <span
                className={cn(
                  "relative z-10 grid size-8 shrink-0 place-items-center rounded-full text-12 font-bold transition-colors",
                  status === "done" && "bg-primary text-white",
                  status === "current" && "bg-white text-primary ring-2 ring-primary",
                  (status === "upcoming" || status === "unknown") &&
                    "bg-white text-gray-3 ring-1 ring-gray-2",
                )}
              >
                {status === "current" && (
                  <span className="absolute inset-0 animate-ping rounded-full ring-2 ring-primary/50" />
                )}
                {status === "done" ? <Check className="size-4" strokeWidth={3} /> : i + 1}
              </span>
              <div className="pt-0.5">
                <div className="flex flex-wrap items-center gap-2">
                  <p
                    className={cn(
                      "text-16 font-bold sm:text-20",
                      status === "upcoming" ? "text-gray-5" : "text-ink",
                    )}
                  >
                    {step.title}
                  </p>
                  {status === "current" && (
                    <span className="rounded-full bg-primary px-2 py-0.5 text-12 font-bold text-white">
                      진행 중
                    </span>
                  )}
                </div>
                <p className="mt-0.5 font-mono text-12 font-semibold tracking-normal text-primary sm:text-14">
                  {formatRange(step.start, step.end)}
                </p>
                <p className="mt-1.5 text-14 text-gray-4">{step.description}</p>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
