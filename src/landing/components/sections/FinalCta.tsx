
import { useRef, type PointerEvent } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { LogoMark } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { recruit } from "@/data/site";

export function FinalCta() {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 150, damping: 15 });
  const rotateY = useSpring(ry, { stiffness: 150, damping: 15 });

  // 스크롤로 들어올 때 카드가 커지며 둥근 모서리가 펴져요
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], [64, 36]);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 30);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 30);
  };

  return (
    <section aria-labelledby="cta-title" className="bg-page px-4 py-20 sm:px-6 sm:py-28">
      <motion.div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={() => {
          rx.set(0);
          ry.set(0);
        }}
        style={{ scale, borderRadius: radius }}
        className="bg-brand-deep relative isolate mx-auto max-w-6xl overflow-hidden px-6 py-16 text-center text-white sm:px-12 sm:py-24"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,#000,transparent_70%)]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(255 255 255 / 0.14) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.14) 1px, transparent 1px)",
          }}
        />
        <div aria-hidden className="absolute -bottom-32 -left-20 -z-10 size-96 rounded-full bg-accent/50 blur-[100px]" />
        <div aria-hidden className="absolute -top-32 -right-20 -z-10 size-96 rounded-full bg-primary/60 blur-[100px]" />

        <div className="flex justify-center [perspective:800px]">
          <motion.div style={{ rotateX, rotateY }} className="animate-float">
            <LogoMark
              className="size-20 shadow-[0_24px_48px_-8px_rgb(27_27_51/0.35)] ring-1 ring-white/40 sm:size-24"
              blink
            />
          </motion.div>
        </div>

        <h2 id="cta-title" className="mt-8 text-title font-extrabold">
          다음 커밋의 주인공,
          <br />
          바로 당신이에요
        </h2>
        <p className="mx-auto mt-4 max-w-md text-16 text-white/85 sm:text-20">
          {recruit.generation}기와 함께 아이디어를 코드로, 코드를 서비스로 만들어요.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/apply" variant="white" arrow className="w-full sm:w-auto">
            {recruit.generation}기 지원하기
          </ButtonLink>
          <ButtonLink href="/apply?tab=inquiry" variant="ghost-white" className="w-full sm:w-auto">
            문의하기
          </ButtonLink>
        </div>
      </motion.div>
    </section>
  );
}
