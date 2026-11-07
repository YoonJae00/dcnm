import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

const fields = [
  { symbol: "</>", name: "웹 · 앱", description: "아이디어를 눈앞의 화면으로 만들고, 직접 써보고 싶은 경험을 고민해요.", tags: ["프론트엔드", "모바일"] },
  { symbol: "{ }", name: "서버 · 인프라", description: "화면 뒤에서 데이터를 연결하고, 서비스가 안정적으로 돌아가게 만들어요.", tags: ["백엔드", "클라우드"] },
  { symbol: "✳", name: "AI · 데이터", description: "데이터에서 힌트를 찾고, 새로운 기술을 실제 서비스에 적용해 봐요.", tags: ["머신러닝", "데이터 분석"] },
  { symbol: "↗", name: "기획 · 디자인", description: "어떤 문제를 풀지 질문하고, 사람들이 쉽게 쓸 수 있는 흐름을 그려요.", tags: ["서비스 기획", "UI · UX"] },
];

export function Members() {
  return (
    <section id="members" aria-labelledby="members-title" className="scroll-mt-16 bg-page py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Our members"
          title={<span id="members-title">관심사는 달라도,<br />만드는 즐거움은 같으니까</span>}
          description="처음 코드를 쓰는 사람부터 배포를 경험한 사람까지. 서로의 관심사와 경험을 나누며 함께 만들어요."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {fields.map((field, index) => (
            <Reveal key={field.name} delay={index * 0.06} className="h-full">
              <article className="flex h-full flex-col rounded-[28px] bg-mist p-6 ring-1 ring-gray-2/50">
                <span aria-hidden="true" className="grid size-14 place-items-center rounded-2xl bg-surface font-mono text-24 font-bold tracking-normal text-primary shadow-s">{field.symbol}</span>
                <h3 className="mt-6 text-20 font-bold text-ink">{field.name}</h3>
                <p className="mt-3 flex-1 text-16 text-gray-4">{field.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {field.tags.map((tag) => <li key={tag} className="rounded-full bg-surface px-3 py-1 text-12 font-semibold text-gray-4">{tag}</li>)}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6">
          <div className="flex flex-col items-start justify-between gap-6 rounded-[28px] bg-mist p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <p className="text-20 font-bold text-ink">아직 내 분야를 찾는 중이어도 괜찮아요.</p>
              <p className="mt-2 text-16 text-gray-4">작은 스터디부터 함께하며, 만들고 싶은 것을 찾아가요.</p>
            </div>
            <ButtonLink href="/#recruit" size="md" arrow className="shrink-0">함께하고 싶다면</ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
