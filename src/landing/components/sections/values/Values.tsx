
import { useRef, type PointerEvent, type ReactNode } from "react";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Bolt, Code, Layers, Users } from "@/components/ui/icons";
import {
  ContributionVisual,
  HackathonTimer,
  NetworkVisual,
  PipelineVisual,
} from "@/components/sections/values/visuals";
import { cn } from "@/lib/cn";

type Value = {
  key: string;
  label: string;
  title: string;
  description: string;
  icon: ReactNode;
  visual: ReactNode;
  wide?: boolean;
};

const values: Value[] = [
  {
    key: "study",
    label: "Study",
    title: "매주 함께 공부해요",
    description:
      "트랙별 스터디로 기초부터 차근차근. 배운 내용은 블로그로 기록하고 서로 코드 리뷰를 해요.",
    icon: <Code className="size-5" />,
    visual: <ContributionVisual />,
    wide: true,
  },
  {
    key: "project",
    label: "Project",
    title: "진짜 서비스를 만들어요",
    description: "학기마다 팀을 꾸려 기획부터 배포까지 한 사이클을 완주해요.",
    icon: <Layers className="size-5" />,
    visual: <PipelineVisual />,
  },
  {
    key: "hackathon",
    label: "Hackathon",
    title: "24시간 몰입해요",
    description: "교내외 해커톤에 함께 나가고, 여름엔 자체 해커톤 DC&M Jam을 열어요.",
    icon: <Bolt className="size-5" />,
    visual: <HackathonTimer />,
  },
  {
    key: "network",
    label: "Network",
    title: "선배와 연결돼요",
    description:
      "현직자 선배의 멘토링과 테크 토크, 기수를 넘나드는 홈커밍 데이로 오래가는 네트워크를 만들어요.",
    icon: <Users className="size-5" />,
    visual: <NetworkVisual />,
    wide: true,
  },
];

/** 마우스 위치를 따라 은은한 빛이 따라오는 카드 */
function SpotlightCard({ value, index }: { value: Value; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative overflow-hidden rounded-[28px] bg-mist p-6 ring-1 ring-gray-1 transition-shadow duration-300 hover:shadow-m sm:p-8",
        value.wide && "md:col-span-2",
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(520px circle at var(--x, 50%) var(--y, 50%), rgb(99 103 255 / 0.12), transparent 45%)",
        }}
      />
      <div
        className={cn(
          "relative grid h-full gap-8",
          value.wide && "md:grid-cols-[1fr_1.15fr] md:items-center",
        )}
      >
        <div className="self-start">
          <div className="flex items-center gap-2.5">
            <span className="grid size-10 place-items-center rounded-xl bg-surface text-primary shadow-s transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
              {value.icon}
            </span>
            <span className="font-mono text-12 font-semibold tracking-normal text-gray-3 uppercase">
              {value.label}
            </span>
          </div>
          <h3 className="mt-5 text-24 font-bold text-ink sm:text-30">{value.title}</h3>
          <p className="mt-2 text-16 text-gray-4">{value.description}</p>
        </div>
        <div className="self-end">{value.visual}</div>
      </div>
    </motion.div>
  );
}

export function Values() {
  return (
    <section aria-labelledby="values-title" className="bg-page py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="What we do"
          title={
            <span id="values-title">
              DC&amp;M에서는
              <br />
              이렇게 성장해요
            </span>
          }
          description="공부하고, 만들고, 몰입하고, 연결되는 한 학기."
        />
        <div className="mt-12 grid gap-4 sm:mt-16 md:grid-cols-3 md:gap-5">
          {values.map((v, i) => (
            <SpotlightCard key={v.key} value={v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
