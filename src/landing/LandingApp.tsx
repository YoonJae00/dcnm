import { ReactLenis } from "lenis/react";
import { MotionConfig } from "motion/react";
import { ActivitiesProvider } from "@/lib/ActivitiesContext";
import { RecruitProvider, type RecruitSettings } from "@/lib/RecruitContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/hero/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Values } from "@/components/sections/values/Values";
import { Stats } from "@/components/sections/Stats";
import { Members } from "@/components/sections/Members";
import { Activities } from "@/components/sections/Activities";
import { Recruit } from "@/components/sections/recruit/Recruit";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "lenis/dist/lenis.css";
import "./landing.css";

/**
 * 모집 랜딩 화면. dcm-site의 Layout(헤더·푸터·맨 위 띠) 없이 자기 Header/Footer로 전체 화면을 써요.
 * - Lenis: 관성 스크롤. `anchors`는 꺼 둬요. 켜면 `#/members` 같은 라우터 링크를 Lenis가 가로채요.
 * - MotionConfig: '동작 줄이기'를 켠 사람에게는 transform 애니메이션을 생략해요.
 * - 인트로는 홈 라우트에서 따로 그려요 (src/intro).
 */
export default function LandingApp({ settings }: { settings: RecruitSettings }) {
  return (
    <div className="landing">
      <ReactLenis root options={{ lerp: 0.11, anchors: false, wheelMultiplier: 1, allowNestedScroll: true }}>
        <MotionConfig reducedMotion="user" transition={{ ease: [0.22, 1, 0.36, 1] }}>
          <RecruitProvider settings={settings}>
            <ActivitiesProvider ids={settings.landing_projects}>
            <Header />
            <main>
              <Hero />
              <Manifesto />
              <Values />
              <Stats />
              <Members />
              <Activities />
              <Recruit />
              <Faq />
              <FinalCta />
            </main>
            <Footer />
            </ActivitiesProvider>
          </RecruitProvider>
        </MotionConfig>
      </ReactLenis>
    </div>
  );
}
