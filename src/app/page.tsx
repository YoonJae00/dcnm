import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/hero/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Values } from "@/components/sections/values/Values";
import { Stats } from "@/components/sections/Stats";
import { Activities } from "@/components/sections/Activities";
import { Recruit } from "@/components/sections/recruit/Recruit";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Intro } from "@/components/intro/Intro";

export default function Home() {
  return (
    <>
      {/* 첫 방문 인트로. 헤더보다 먼저 와야 인라인 스크립트가 첫 화면 전에 실행돼요. */}
      <Intro />
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Values />
        <Stats />
        <Activities />
        <Recruit />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
