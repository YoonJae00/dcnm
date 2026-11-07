
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { tracks } from "@/data/site";
import { Check } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

/** 토스식 세그먼트 컨트롤 + 트랙 상세 */
export function Tracks() {
  const [activeId, setActiveId] = useState(tracks[0].id);
  const active = tracks.find((t) => t.id === activeId) ?? tracks[0];

  return (
    <div className="mt-16 sm:mt-24">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="text-24 font-bold text-ink sm:text-30">모집 트랙</h3>
          <p className="mt-1 text-16 text-gray-4">관심 있는 트랙을 눌러보세요. 지원할 때 1지망·2지망을 고를 수 있어요.</p>
        </div>
      </div>

      <div
        role="tablist"
        aria-label="모집 트랙"
        className="no-scrollbar mt-6 flex w-full gap-1 overflow-x-auto rounded-2xl bg-gray-1 p-1.5 sm:inline-flex sm:w-auto"
      >
        {tracks.map((t) => {
          const selected = t.id === activeId;
          return (
            <button
              key={t.id}
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={selected}
              aria-controls={`panel-${t.id}`}
              onClick={() => setActiveId(t.id)}
              className={cn(
                "relative flex-1 shrink-0 rounded-xl px-4 py-2.5 text-14 font-bold whitespace-nowrap transition-colors sm:flex-none sm:px-6 sm:text-16",
                selected ? "text-ink" : "text-gray-4 hover:text-gray-5",
              )}
            >
              {selected && (
                <motion.span
                  layoutId="track-pill"
                  className="absolute inset-0 rounded-xl bg-surface shadow-s"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              <span className="relative">{t.name}</span>
            </button>
          );
        })}
      </div>

      <div className="relative mt-5">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active.id}
            role="tabpanel"
            id={`panel-${active.id}`}
            aria-labelledby={`tab-${active.id}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-5 rounded-[28px] bg-surface p-6 shadow-s ring-1 ring-gray-1 sm:p-9 md:grid-cols-[1.1fr_1fr] md:gap-10"
          >
            <div>
              <p className="text-24 font-bold text-ink">{active.name}</p>
              <p className="mt-1.5 text-16 text-gray-4">{active.summary}</p>
              <ul className="mt-6 space-y-3">
                {active.learn.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06 }}
                    className="flex gap-3 text-16 text-gray-5"
                  >
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-mist text-primary">
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
              <ul className="mt-6 flex flex-wrap gap-2">
                {active.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-lg bg-mist px-3 py-1.5 text-14 font-semibold text-primary"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl bg-night shadow-m">
              <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-4 py-3">
                <span className="size-2.5 rounded-full bg-white/15" />
                <span className="size-2.5 rounded-full bg-white/15" />
                <span className="size-2.5 rounded-full bg-white/15" />
                <span className="ml-2 font-mono text-12 tracking-normal text-gray-4">
                  {active.id}.dcm
                </span>
              </div>
              <pre className="no-scrollbar overflow-x-auto p-5 font-mono text-[13px] leading-[1.9] tracking-normal sm:text-14">
                {active.snippet.map((line, i) => (
                  <motion.div
                    key={line + i}
                    initial={{ opacity: 0, filter: "blur(4px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ delay: 0.15 + i * 0.07 }}
                    className="flex"
                  >
                    <span className="mr-4 w-4 shrink-0 text-right text-gray-5 select-none">{i + 1}</span>
                    <span className={line.trim().startsWith("#") ? "text-gray-4" : "text-light"}>
                      {line}
                    </span>
                  </motion.div>
                ))}
              </pre>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
