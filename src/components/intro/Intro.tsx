"use client";

import { useEffect } from "react";
import { INTRO_SEEN_KEY, mountIntro, shouldPlayIntro } from "./dcmIntro.js";
import { setIntroPhase } from "./introState";
import "./intro.css";

/** 인트로가 걷히기 시작한 뒤 메인 첫 화면이 올라오기까지의 간격(ms) */
const REVEAL_DELAY = 280;

/**
 * 하이드레이션 전에 실행돼서, 인트로를 틀 사람이면 html에 dcm-intro-pending을 붙여요.
 * 그동안 globals.css가 화면을 인트로 배경으로 덮어서 메인이 잠깐 보였다 사라지지 않아요.
 * 조건은 shouldPlayIntro와 같아요.
 */
const PENDING_SCRIPT = `(function(){try{var q=new URLSearchParams(location.search).has("intro");if(q||(!matchMedia("(prefers-reduced-motion: reduce)").matches&&!localStorage.getItem(${JSON.stringify(INTRO_SEEN_KEY)})))document.documentElement.classList.add("dcm-intro-pending")}catch(e){}})()`;

/**
 * 메인(/) 맨 위에 한 번 넣어요. 처음 방문한 사람에게만 body 위에 인트로를 띄워요.
 * - 주소 뒤에 ?intro를 붙이면 본 기록과 상관없이 재생해요 (발표용).
 * - 동작 줄이기 설정을 켠 사람에게는 재생하지 않아요.
 */
export function Intro() {
  useEffect(() => {
    const html = document.documentElement;
    const force = new URLSearchParams(window.location.search).has("intro");

    if (!shouldPlayIntro({ force })) {
      html.classList.remove("dcm-intro-pending");
      setIntroPhase("revealed");
      return;
    }

    setIntroPhase("playing");
    let revealTimer: number | undefined;
    const intro = mountIntro({
      onLift: () => {
        revealTimer = window.setTimeout(() => setIntroPhase("revealed"), REVEAL_DELAY);
      },
    });
    // 인트로가 같은 배경으로 위를 덮었으니 임시 가림막은 걷어요.
    html.classList.remove("dcm-intro-pending");

    return () => {
      window.clearTimeout(revealTimer);
      intro.destroy();
    };
  }, []);

  // 클라이언트에서는 type을 text/plain으로 바꿔 React의 <script> 경고를 피해요.
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: PENDING_SCRIPT }}
    />
  );
}
