
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { faqs } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Plus } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section aria-labelledby="faq-title" className="bg-mist py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <span id="faq-title">
              자주 묻는
              <br />
              질문
            </span>
          }
          description="더 궁금한 점은 문의하기로 편하게 물어봐 주세요."
        />

        <ul className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.li
                key={item.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={cn(
                  "overflow-hidden rounded-3xl bg-surface ring-1 transition-[box-shadow,--tw-ring-color] duration-300",
                  isOpen ? "shadow-m ring-light" : "ring-gray-1 hover:shadow-s",
                )}
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center gap-4 px-6 py-5 text-left sm:px-7 sm:py-6"
                  >
                    <span className="font-mono text-14 font-bold tracking-normal text-primary">
                      Q{i + 1}
                    </span>
                    <span className="flex-1 text-16 font-bold text-ink sm:text-20">{item.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 26 }}
                      className={cn(
                        "grid size-8 shrink-0 place-items-center rounded-full transition-colors",
                        isOpen ? "bg-primary text-white" : "bg-gray-1 text-gray-4",
                      )}
                    >
                      <Plus className="size-4" strokeWidth={2.5} />
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-6 pb-6 pl-[3.6rem] text-16 text-gray-4 sm:px-7 sm:pl-[3.85rem]">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
