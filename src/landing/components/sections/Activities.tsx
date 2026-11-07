import { useState } from "react";
import { ProjectCover } from "@/components/projects/ProjectCover";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { SmartLink } from "@/components/ui/SmartLink";
import { useActivities, type ActivityProject } from "@/lib/ActivitiesContext";
import { coverFor } from "@/lib/cover";
import { cn } from "@/lib/cn";

const STATUS_LABEL = { ongoing: "진행 중", recruiting: "모집 중", done: "완료" } as const;

const ALL = "전체";

/** 'YYYY-MM-DD' → 'YYYY.MM.DD' */
const dot = (d: string) => d.replaceAll("-", ".");

function periodText(p: ActivityProject) {
  if (p.start_date && p.end_date) return `${dot(p.start_date)} ~ ${dot(p.end_date)}`;
  if (p.period) return p.period;
  if (p.start_date) return `${dot(p.start_date)} ~`;
  return "";
}

/** 랜딩 활동 섹션: 운영진이 사이트 설정에서 체크한 프로젝트만, 체크한 순서대로 보여요. 없으면 섹션째 숨겨요. */
export function Activities() {
  const { ready, items } = useActivities();
  const [selected, setSelected] = useState(ALL);

  // 불러오는 동안은 자리만 잡아 둬서 아래 섹션이 밀리지 않게 해요. (체크한 게 없으면 ready가 바로 true)
  if (!ready) return <div aria-hidden className="min-h-[56rem] bg-mist" />;
  if (items.length === 0) return null;

  const categories = [ALL, ...Array.from(new Set(items.map((p) => p.kind)))];
  const category = categories.includes(selected) ? selected : ALL;
  const visibleProjects = category === ALL ? items : items.filter((p) => p.kind === category);

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
              onClick={() => setSelected(item)}
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
            <article key={project.id} className="group relative overflow-hidden rounded-[28px] bg-surface shadow-s ring-1 ring-gray-2/60 transition-shadow focus-within:ring-2 focus-within:ring-primary hover:shadow-m">
              <div className="relative aspect-[16/10] overflow-hidden">
                <ProjectCover cover={coverFor(project.id)} className="size-full" />
                <span className="absolute top-4 left-4 rounded-full bg-surface/90 px-3 py-1 text-12 font-bold text-ink">{project.kind}</span>
              </div>
              <div className="p-6">
                <p className="text-12 font-semibold text-gray-4">
                  {[STATUS_LABEL[project.status], periodText(project)].filter(Boolean).join(" · ")}
                </p>
                <h3 className="mt-2 text-24 font-bold text-ink">
                  <SmartLink href={`/projects/${project.id}`} className="outline-none after:absolute after:inset-0 after:content-['']">
                    {project.title}
                  </SmartLink>
                </h3>
                {project.summary && <p className="mt-3 line-clamp-3 min-h-[3.3em] text-16 text-gray-4">{project.summary}</p>}
                {!!project.tags?.length && (
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => <li key={tag} className="rounded-lg bg-gray-1 px-2.5 py-1 text-12 font-semibold text-gray-4">{tag}</li>)}
                  </ul>
                )}
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
