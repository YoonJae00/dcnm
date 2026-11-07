"use client";

import { ReactLenis } from "lenis/react";
import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * - Lenis: 애플 사이트 같은 관성 스크롤. prefers-reduced-motion이면 자동으로 꺼져요.
 * - MotionConfig: 사용자가 '동작 줄이기'를 켰으면 transform 애니메이션을 생략해요.
 */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.11, anchors: true, wheelMultiplier: 1 }}>
      <MotionConfig reducedMotion="user" transition={{ ease: [0.22, 1, 0.36, 1] }}>
        {children}
      </MotionConfig>
    </ReactLenis>
  );
}
