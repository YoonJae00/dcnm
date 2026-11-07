
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { projects, type Project } from "@/data/projects";
import { recruit } from "@/data/site";
import { ProjectCover } from "@/components/projects/ProjectCover";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight, Trophy } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

const DESKTOP = "(min-width: 768px)";

/** 마우스 방향으로 살짝 기우는 3D 카드 */
function TiltCard({ project }: { project: Project }) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 220, damping: 20 });
  const rotateY = useSpring(ry, { stiffness: 220, damping: 20 });

  const onMove = (e: PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 10);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 10);
  };
  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.article
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="group relative w-[78vw] max-w-[340px] shrink-0 snap-start overflow-hidden rounded-[28px] bg-surface shadow-s ring-1 ring-gray-2/60 transition-shadow duration-300 hover:shadow-l sm:w-[360px] sm:max-w-none lg:w-[380px]"
    >
      <Link to="/projects/done" className="block focus-visible:outline-offset-[-3px]">
        <div className="relative aspect-[16/10.4] overflow-hidden">
          <ProjectCover
            project={project}
            className="size-full transition-transform duration-700 ease-(--ease-toss) group-hover:scale-[1.06]"
          />
          <span className="absolute top-4 left-4 rounded-full bg-surface/90 px-3 py-1 text-12 font-bold text-ink backdrop-blur">
            {project.category}
          </span>
          {project.award && (
            <span className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-night/80 px-3 py-1 text-12 font-semibold text-white backdrop-blur">
              <Trophy className="size-3.5 text-accent" />
              {project.award}
            </span>
          )}
        </div>
        <div className="p-6">
          <p className="text-12 font-semibold text-gray-3">
            {project.generation}기 · {project.period}
          </p>
          <h3 className="mt-1.5 flex items-center gap-1 text-20 font-bold text-ink sm:text-24">
            {project.title}
            <ArrowRight className="size-5 -translate-x-1 text-primary opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </h3>
          <p className="mt-2 line-clamp-2 min-h-[3.2em] text-14 text-gray-4 sm:text-16">
            {project.summary}
          </p>
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-lg bg-gray-1 px-2.5 py-1 text-12 font-semibold text-gray-4"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </motion.article>
  );
}

function EndCard() {
  return (
    <div className="bg-brand relative flex w-[78vw] max-w-[340px] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-[28px] p-7 text-white sm:w-[360px] sm:max-w-none lg:w-[380px]">
      <div aria-hidden className="absolute -right-10 -bottom-10 size-48 rounded-full bg-white/20 blur-2xl" />
      <p className="font-mono text-14 tracking-normal text-white/80">next_project.tsx</p>
      <div className="relative">
        <p className="text-30 leading-snug font-extrabold">
          다음 프로젝트,
          <br />
          {recruit.generation}기와 함께
          <br />
          만들어요
        </p>
        <ButtonLink href="/#recruit" variant="white" size="md" arrow className="mt-8">
          모집 안내 보기
        </ButtonLink>
      </div>
    </div>
  );
}

export function Activities() {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const distance = useMotionValue(0);
  const [height, setHeight] = useState<number | null>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(() => -scrollYProgress.get() * distance.get());
  const smoothX = useSpring(x, { stiffness: 260, damping: 40, mass: 0.4 });
  const total = projects.length + 1;

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    setActive(Math.min(total - 1, Math.floor(p * total)));
  });

  // 가로로 이동해야 할 거리 측정 → 그만큼 섹션 높이를 늘려요 (데스크톱만)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const mq = window.matchMedia(DESKTOP);

    const measure = () => {
      if (!mq.matches) {
        distance.set(0);
        setHeight(null);
        return;
      }
      const last = track.lastElementChild as HTMLElement | null;
      if (!last) return;
      const pad = parseFloat(getComputedStyle(track).paddingLeft) || 0;
      const d = Math.max(0, last.offsetLeft + last.offsetWidth + pad - track.clientWidth);
      distance.set(d);
      setHeight(window.innerHeight + d);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    mq.addEventListener("change", measure);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      mq.removeEventListener("change", measure);
      window.removeEventListener("resize", measure);
    };
  }, [distance]);

  return (
    <section id="activities" aria-labelledby="activities-title" className="scroll-mt-16 bg-mist">
      <div ref={outerRef} className="relative" style={height ? { height } : undefined}>
        <div className="flex flex-col justify-center py-24 sm:py-32 md:sticky md:top-0 md:h-dvh md:overflow-hidden md:py-0">
          <div className="mx-auto flex w-full max-w-6xl items-end justify-between gap-6 px-5 md:px-8">
            <SectionHeading
              eyebrow="Activities"
              title={
                <span id="activities-title">
                  최근에는 이런 걸
                  <br />
                  만들었어요
                </span>
              }
            />
            <div className="hidden shrink-0 flex-col items-end gap-3 pb-2 md:flex">
              <Link
                to="/projects/done"
                className="group inline-flex items-center gap-1 text-14 font-semibold text-gray-4 transition-colors hover:text-primary"
              >
                전체 활동 보기
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <div className="flex items-center gap-3 font-mono text-14 tracking-normal text-gray-4 tabular-nums">
                <span className="text-ink">{String(active + 1).padStart(2, "0")}</span>
                <span className="relative h-[2px] w-24 overflow-hidden rounded-full bg-gray-2">
                  <motion.span
                    className="bg-brand absolute inset-0 origin-left"
                    style={{ scaleX: scrollYProgress }}
                  />
                </span>
                <span>{String(total).padStart(2, "0")}</span>
              </div>
            </div>
          </div>

          <motion.div
            ref={trackRef}
            style={{ x: smoothX }}
            className={cn(
              "no-scrollbar relative mt-10 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-6 sm:mt-14",
              "md:snap-none md:gap-6 md:overflow-visible md:px-[max(2rem,calc((100vw-72rem)/2+2rem))] md:pb-0",
            )}
          >
            {projects.map((p) => (
              <TiltCard key={p.slug} project={p} />
            ))}
            <EndCard />
          </motion.div>

          <div className="mx-auto mt-2 w-full max-w-6xl px-5 md:hidden">
            <Link
              to="/projects/done"
              className="inline-flex items-center gap-1 text-14 font-semibold text-gray-4"
            >
              전체 활동 보기 <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
