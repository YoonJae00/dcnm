import { recruit } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Check } from "@/components/ui/icons";
import { Countdown } from "@/components/sections/recruit/Countdown";
import { Timeline } from "@/components/sections/recruit/Timeline";
import { Tracks } from "@/components/sections/recruit/Tracks";

export function Recruit() {
  return (
    <section id="recruit" aria-labelledby="recruit-title" className="scroll-mt-16 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Recruiting"
          title={
            <span id="recruit-title">
              {recruit.generation}기 신입 부원을
              <br />
              모집해요
            </span>
          }
          description="전공도, 실력도 상관없어요. 만들고 싶은 게 있다면 충분해요."
        />

        <div className="mt-12 grid gap-5 sm:mt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-6">
          <div className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <Reveal>
              <Countdown />
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-[28px] bg-white p-6 shadow-s ring-1 ring-gray-1 sm:p-8">
                <h3 className="text-20 font-bold text-ink">지원 자격</h3>
                <ul className="mt-4 space-y-3">
                  {recruit.qualifications.map((q) => (
                    <li key={q} className="flex gap-3 text-16 text-gray-5">
                      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-positive/10 text-positive">
                        <Check className="size-3.5" strokeWidth={3} />
                      </span>
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <Timeline />
          </Reveal>
        </div>

        <Tracks />
      </div>
    </section>
  );
}
