import { useEffect, useRef, useState } from "react";
import { useTable } from "../../../lib/hooks";
import { initials } from "../../../lib/format";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Github } from "@/components/ui/icons";

type Member = {
  id: string;
  name: string;
  generation: number | null;
  role: string;
  part?: string;
  intro?: string;
  tags?: string[];
  github?: string;
};

// 등록된 공개 프로필만 사용해요. 계정 정보나 내부 프로젝트는 조회하지 않아요.
export function Members() {
  const { rows, error, reload } = useTable("members");
  const members = rows as Member[] | null;
  const [generation, setGeneration] = useState("all");
  const [query, setQuery] = useState("");
  const listRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = 0;
  }, [generation, query]);
  const generations = [...new Set((members ?? []).map((member) => member.generation).filter((value): value is number => value != null))].sort((a, b) => b - a);
  const hasUnknownGeneration = (members ?? []).some((member) => member.generation == null);
  const search = query.trim().toLowerCase();
  const shown = (members ?? []).filter((member) =>
    (generation === "all" || (generation === "unknown" ? member.generation == null : String(member.generation) === generation)) &&
    (!search || [member.name, member.role, member.part, member.intro, ...(member.tags ?? [])].join(" ").toLowerCase().includes(search)),
  );
  const grouped = new Map<number | null, Member[]>();
  for (const member of shown) {
    const key = member.generation ?? null;
    const group = grouped.get(key) ?? [];
    group.push(member);
    grouped.set(key, group);
  }
  const groups = [...grouped.entries()].sort(([a], [b]) =>
    a === b ? 0 : a === null ? 1 : b === null ? -1 : b - a,
  );
  const clearFilters = () => { setGeneration("all"); setQuery(""); };

  return (
    <section id="members" aria-labelledby="members-title" className="scroll-mt-16 bg-page py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Our members"
          title={<span id="members-title">함께 만들고 있는<br />DC&amp;M의 멤버들</span>}
          description="서로 다른 관심사와 경험이 모여, 하나의 팀이 돼요. 함께하는 멤버들을 만나보세요."
        />
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-end">
          {generations.length > 0 && <label className="flex flex-col gap-2 text-14 font-semibold text-gray-4">
            기수
            <select value={generation} onChange={(event) => setGeneration(event.target.value)} className="min-h-12 rounded-2xl border border-gray-2 bg-surface px-4 py-3 text-16 text-ink sm:min-w-36">
              <option value="all">전체 기수</option>
              {generations.map((value) => <option key={value} value={value}>{value}기</option>)}
              {hasUnknownGeneration && <option value="unknown">기수 미정</option>}
            </select>
          </label>}
          <label className="flex flex-1 flex-col gap-2 text-14 font-semibold text-gray-4">
            멤버 검색
            <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="이름, 관심 분야, 기술로 찾아보세요" className="min-h-12 w-full rounded-2xl border border-gray-2 bg-surface px-4 py-3 text-16 text-ink placeholder:text-gray-4" />
          </label>
        </div>
        {error ? (
          <div role="alert" className="mt-8 rounded-[28px] bg-mist p-8 text-center text-gray-4">
            <p>멤버 목록을 불러오지 못했어요.</p>
            <button type="button" onClick={reload} className="mt-4 rounded-full bg-primary px-5 py-3 font-semibold text-white">다시 불러오기</button>
          </div>
        ) : members === null ? (
          <p role="status" className="mt-8 rounded-[28px] bg-mist p-8 text-center text-gray-4">멤버들을 불러오고 있어요.</p>
        ) : (
          <>
            <p role="status" className="mt-5 text-14 font-medium text-gray-4">총 {shown.length}명</p>
            <div
              id="landing-member-list"
              ref={listRef}
              role="region"
              aria-label="부원 목록"
              tabIndex={0}
              className="mt-5 max-h-[min(24rem,60svh)] overflow-y-auto overscroll-auto rounded-2xl p-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              style={{ scrollbarGutter: "stable", scrollbarColor: "var(--color-gray-3) transparent" }}
            >
              {groups.map(([groupGeneration, groupMembers]) => (
                <section key={groupGeneration ?? "unknown"} aria-labelledby={`member-generation-${groupGeneration ?? "unknown"}`} className="mb-7 last:mb-0">
                  <div className="mb-4 flex items-center gap-3">
                    <h3 id={`member-generation-${groupGeneration ?? "unknown"}`} className="shrink-0 text-16 font-bold text-ink">
                      {groupGeneration === null ? "기수 미정" : `${groupGeneration}기`}
                      <span className="ml-2 text-12 font-medium text-gray-4">{groupMembers.length}명</span>
                    </h3>
                    <hr className="min-w-4 flex-1 border-t border-gray-2" />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {groupMembers.map((member) => {
                      const github = member.github && /^https?:\/\//i.test(member.github) ? member.github : null;
                      return (
                        <article key={member.id} className="flex flex-col rounded-2xl bg-mist p-4 ring-1 ring-gray-2/50">
                          <div className="flex items-center gap-3">
                            <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-xl bg-surface text-16 font-bold text-primary shadow-s">{initials(member.name)}</span>
                            <div className="min-w-0">
                              <h4 className="text-16 font-bold text-ink">{member.name}</h4>
                              <p className="mt-0.5 text-12 text-gray-4">{[member.generation != null ? `${member.generation}기` : null, member.role].filter(Boolean).join(" · ")}</p>
                            </div>
                          </div>
                          {member.part && <p className="mt-5 text-14 font-semibold text-primary">{member.part}</p>}
                          {member.intro && <p className="mt-3 whitespace-pre-line text-16 text-gray-4">{member.intro}</p>}
                          {!!member.tags?.length && (
                            <ul className="mt-5 flex flex-wrap gap-2">
                              {member.tags.map((tag, index) => <li key={`${tag}-${index}`} className="rounded-full bg-surface px-3 py-1 text-12 font-semibold text-gray-4">{tag}</li>)}
                            </ul>
                          )}
                          {github && <a href={github} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} GitHub (새 탭)`} className="mt-5 inline-flex min-h-11 items-center gap-2 self-start rounded-full px-3 text-14 font-semibold text-gray-4 transition-colors hover:bg-surface hover:text-primary"><Github className="size-4" />GitHub ↗</a>}
                        </article>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
            {shown.length === 0 && (
              <div className="mt-5 rounded-[28px] bg-mist p-8 text-center text-gray-4">
                <p>{members.length === 0 ? "아직 등록된 멤버가 없어요." : "조건에 맞는 멤버가 없어요."}</p>
                {(generation !== "all" || query) && <button type="button" onClick={clearFilters} className="mt-4 rounded-full bg-primary px-5 py-3 font-semibold text-white">전체 멤버 보기</button>}
              </div>
            )}
          </>
        )}
        <div className="mt-12 text-center">
          <ButtonLink href="/#recruit" size="md" arrow>함께하고 싶다면</ButtonLink>
        </div>
      </div>
    </section>
  );
}
