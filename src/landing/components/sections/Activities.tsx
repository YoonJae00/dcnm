import { useState } from "react";
import { projects, type ProjectCategory } from "@/data/projects";
import { ProjectCover } from "@/components/projects/ProjectCover";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Trophy } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

const categories: ("전체" | ProjectCategory)[] = ["전체", "프로젝트", "해커톤", "스터디", "세미나"];

export function Activities() {
  const [category, setCategory] = useState<(typeof categories)[number]>("전체");
  const visibleProjects = category === "전체" ? projects : projects.filter((project) => project.category === category);

  return (
    <section id="activities" aria-labelledby="activities-title" className="scroll-mt-16 bg-mist py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Activities"
          title={<span id="activities-title">배우고, 만들고,<br />함께 나누는 시간</span>}
          description="스터디에서 시작한 호기심이 프로젝트로, 해커톤의 아이디어가 하나의 서비스로 이어져요."
        />
        <div role="group" aria-label="활동 종류" className="mt-10 flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              aria-controls="landing-activity-list"
              onClick={() => setCategory(item)}
              className={cn(
                "min-h-11 rounded-full px-5 py-2 text-14 font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary",
                category === item ? "bg-primary text-white" : "bg-surface text-gray-4 ring-1 ring-gray-2 hover:text-primary",
              )}
            >{item}</button>
          ))}
        </div>
        <p role="status" className="sr-only">{category} 활동 {visibleProjects.length}개</p>
        <div id="landing-activity-list" className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <article key={project.slug} className="overflow-hidden rounded-[28px] bg-surface shadow-s ring-1 ring-gray-2/60">
              <div className="relative aspect-[16/10] overflow-hidden">
                <ProjectCover project={project} className="size-full" />
                <span className="absolute top-4 left-4 rounded-full bg-surface/90 px-3 py-1 text-12 font-bold text-ink">{project.category}</span>
                {project.award && (
                  <span className="absolute right-4 bottom-4 inline-flex items-center gap-1 rounded-full bg-night/90 px-3 py-1 text-12 font-semibold text-white">
                    <Trophy className="size-3.5 text-accent" />{project.award}
                  </span>
                )}
              </div>
              <div className="p-6">
                <p className="text-12 font-semibold text-gray-4">{project.generation}기 · {project.period}</p>
                <h3 className="mt-2 text-24 font-bold text-ink">{project.title}</h3>
                <p className="mt-3 min-h-[3.3em] text-16 text-gray-4">{project.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => <li key={tag} className="rounded-lg bg-gray-1 px-2.5 py-1 text-12 font-semibold text-gray-4">{tag}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="mb-5 text-20 font-bold text-ink">다음 이야기는 함께 만들어요.</p>
          <ButtonLink href="/#recruit" arrow>모집 안내 보기</ButtonLink>
        </div>
      </div>
    </section>
  );
}
