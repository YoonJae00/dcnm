import { useEffect } from "react";
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import { mountIntro, shouldPlayIntro } from "./dcmIntro.js";
import { setIntroPhase } from "./introState";
import "./intro.css";

/** 인트로가 걷히기 시작한 뒤 메인 첫 화면이 올라오기까지의 간격(ms) */
const REVEAL_DELAY = 280;

/** ?intro로 다시 재생하는 건 페이지를 연 직후 한 번만. 사이트 안에서 홈으로 돌아올 때마다 틀지 않아요. */
let forceUsed = false;

/**
 * 홈(/) 화면 맨 위에 한 번 넣어요. 처음 방문한 사람에게만 화면 위에 인트로를 띄워요.
 * - 주소를 `/?intro#/` 처럼 열면 본 기록과 상관없이 재생해요 (발표용).
 * - 동작 줄이기 설정을 켠 사람에게는 재생하지 않아요.
 * - 첫 화면을 가리는 `dcm-intro-pending`은 index.html의 인라인 스크립트가 붙여요. 조건은 같아요.
 */
export function Intro() {
  useEffect(() => {
    const html = document.documentElement;
    const force = !forceUsed && new URLSearchParams(window.location.search).has("intro");

    if (!shouldPlayIntro({ force })) {
      html.classList.remove("dcm-intro-pending");
      setIntroPhase("revealed");
      return;
    }

    setIntroPhase("playing");
    let revealTimer: number | undefined;
    const intro = mountIntro({
      onLift: () => {
        forceUsed = true;
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

  return null;
}
