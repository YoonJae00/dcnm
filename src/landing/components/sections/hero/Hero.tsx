
import { type PointerEvent, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { ButtonLink } from "@/components/ui/Button";
import { RecruitBadge } from "@/components/sections/hero/RecruitBadge";
import { useIntroRevealed } from "@intro/introState";
import { club, recruit } from "@/data/site";

const ease = [0.22, 1, 0.36, 1] as const;

/** 단어가 아래에서 마스크를 뚫고 올라오는 토스식 타이틀 */
function RevealWord({
  children,
  delay,
  play,
}: {
  children: ReactNode;
  delay: number;
  play: boolean;
}) {
  return (
    <span className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
      <motion.span
        className="inline-block"
        initial={{ y: "105%" }}
        animate={play ? { y: "0%" } : undefined}
        transition={{ duration: 0.9, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/** 마우스를 따라 깊이감 있게 움직이는 요소 */
function Parallax({
  mx,
  my,
  depth,
  className,
  children,
}: {
  mx: MotionValue<number>;
  my: MotionValue<number>;
  depth: number;
  className?: string;
  children?: ReactNode;
}) {
  const x = useTransform(mx, (v) => v * depth);
  const y = useTransform(my, (v) => v * depth);
  return (
    <motion.div className={className} style={{ x, y }}>
      {children}
    </motion.div>
  );
}

function FloatingChip({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`animate-float rounded-2xl bg-white/75 px-4 py-3 font-mono text-[13px] tracking-normal text-gray-5 shadow-m ring-1 ring-white backdrop-blur-md ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

export function Hero() {
  // 첫 방문 인트로가 떠 있으면, 걷히기 시작할 때까지 등장 연출을 미뤄요.
  const play = useIntroRevealed();

  // 포인터 패럴랙스 (-0.5 ~ 0.5)
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 60, damping: 18, mass: 0.6 });
  const my = useSpring(rawY, { stiffness: 60, damping: 18, mass: 0.6 });

  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="top"
      onPointerMove={onPointerMove}
      className="relative isolate overflow-hidden bg-white pt-32 pb-16 sm:pt-40 sm:pb-20"
    >
      {/* 배경: 모눈 + 그라디언트 오브 */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 isolate bg-mist [mask-image:linear-gradient(to_bottom,#000_50%,transparent_100%)]">
        <div
          aria-hidden
          className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_30%,#000_30%,transparent_100%)]"
        />
        <Parallax mx={mx} my={my} depth={-50} className="absolute -top-24 left-[8%] -z-10">
          <div className="size-[380px] rounded-full bg-light/60 blur-[90px]" />
        </Parallax>
        <Parallax mx={mx} my={my} depth={70} className="absolute top-10 right-[4%] -z-10">
          <div className="size-[420px] rounded-full bg-accent/80 blur-[100px]" />
        </Parallax>
        <Parallax mx={mx} my={my} depth={30} className="absolute top-[38%] left-[30%] -z-10">
          <div className="size-[360px] rounded-full bg-secondary/30 blur-[110px]" />
        </Parallax>
      </div>

      {/* 떠다니는 칩 (데스크톱) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden lg:block"
      >
        <Parallax mx={mx} my={my} depth={-36} className="absolute top-[22%] left-[6%]">
          <FloatingChip>
            <span className="text-primary">git</span> commit -m &quot;첫 배포&quot;
          </FloatingChip>
        </Parallax>
        <Parallax mx={mx} my={my} depth={44} className="absolute top-[18%] right-[7%]">
          <FloatingChip className="[animation-delay:-2s]">
            <span className="text-positive">✓</span> Build succeeded
          </FloatingChip>
        </Parallax>
        <Parallax mx={mx} my={my} depth={-24} className="absolute top-[46%] left-[10%]">
          <FloatingChip className="[animation-delay:-4s] font-sans font-semibold tracking-[-0.02em]">
            🚀 PR #128 merged
          </FloatingChip>
        </Parallax>
        <Parallax mx={mx} my={my} depth={30} className="absolute top-[44%] right-[9%]">
          <FloatingChip className="[animation-delay:-1s] font-sans font-semibold tracking-[-0.02em]">
            <span className="text-brand">+ {recruit.generation}기</span> 합류 대기 중
          </FloatingChip>
        </Parallax>
      </motion.div>

      {/* 카피 */}
      <motion.div
        className="relative mx-auto max-w-6xl px-5 text-center md:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.96 }}
          animate={play ? { opacity: 1, y: 0, scale: 1 } : undefined}
          transition={{ duration: 0.6, ease }}
          className="flex justify-center"
        >
          <RecruitBadge />
        </motion.div>

        <h1 className="mt-6 text-display font-extrabold text-ink">
          <span className="block">
            <RevealWord play={play} delay={0.1}>아이디어가</RevealWord>
          </span>
          <span className="block">
            <RevealWord play={play} delay={0.22}>
              <span className="text-brand">코드</span>가
            </RevealWord>{" "}
            <RevealWord play={play} delay={0.3}>되는</RevealWord>{" "}
            <RevealWord play={play} delay={0.38}>곳</RevealWord>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          animate={play ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
          transition={{ duration: 0.8, delay: 0.55, ease }}
          className="mx-auto mt-6 max-w-[34rem] text-16 font-medium text-gray-4 sm:text-20"
        >
          기획부터 배포까지, 함께 만들고 함께 성장하는{" "}
          <br className="hidden sm:block" />
          개발 동아리 {club.name}에서 {recruit.generation}기 신입 부원을 찾고 있어요.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={play ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, delay: 0.7, ease }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap"
        >
          <ButtonLink href="/#recruit" arrow className="w-full sm:w-auto">
            모집 안내 보기
          </ButtonLink>
          <ButtonLink href="/#about" variant="secondary" className="w-full sm:w-auto">
            동아리 둘러보기
          </ButtonLink>
          <ButtonLink href="/login?next=%2F" variant="secondary" className="w-full sm:w-auto">
            기존부원 로그인
          </ButtonLink>
        </motion.div>
      </motion.div>

    </section>
  );
}
