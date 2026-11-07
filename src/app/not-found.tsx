import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { ButtonLink } from "@/components/ui/Button";
import { LogoGlyph } from "@/components/brand/Logo";

export const metadata: Metadata = {
  title: "페이지 준비 중",
};

/** 아직 만들지 않은 페이지(멤버·활동·지원)로 들어와도 자연스럽게 안내해요. */
export default function NotFound() {
  return (
    <>
      <Header />
      <main className="relative isolate flex min-h-dvh items-center justify-center overflow-hidden bg-mist px-5 py-32">
        <div
          aria-hidden
          className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_70%)]"
        />
        <div className="w-full max-w-lg text-center">
          <div className="mx-auto w-full overflow-hidden rounded-[20px] bg-ink text-left shadow-l">
            <div className="flex h-10 items-center gap-2 border-b border-white/[0.06] px-4">
              <span className="size-3 rounded-full bg-[#ff5f57]" />
              <span className="size-3 rounded-full bg-[#febc2e]" />
              <span className="size-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="space-y-1.5 p-5 font-mono text-14 tracking-normal">
              <p>
                <span className="text-secondary">~/dcnm</span>
                <span className="text-light"> $</span>
                <span className="text-white"> git checkout this-page</span>
              </p>
              <p className="text-[#ff8a8f]">error: 아직 커밋되지 않은 페이지예요 (404)</p>
              <p className="flex items-center text-gray-3">
                열심히 만드는 중이에요
                <LogoGlyph className="ml-1 size-5" stroke="#C9BEFF" cursor="#8494FF" blink />
              </p>
            </div>
          </div>
          <h1 className="mt-10 text-30 font-extrabold text-ink">이 페이지는 아직 준비 중이에요</h1>
          <p className="mt-2 text-16 text-gray-4">곧 멋지게 배포할게요. 그동안 메인 페이지를 둘러봐 주세요.</p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href="/" arrow>
              메인으로 가기
            </ButtonLink>
          </div>
        </div>
      </main>
    </>
  );
}
