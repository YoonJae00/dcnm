import { useSyncExternalStore } from "react";

/**
 * pending  : 아직 인트로를 틀지 정하지 않음 (첫 렌더 · 하이드레이션 직후)
 * playing  : 인트로가 화면을 덮고 있음
 * revealed : 인트로가 걷히기 시작했거나, 틀지 않기로 함 → 메인 등장 연출 시작
 */
type Phase = "pending" | "playing" | "revealed";

let phase: Phase = "pending";
const listeners = new Set<() => void>();

export function setIntroPhase(next: Phase) {
  if (phase === next) return;
  phase = next;
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** 메인 첫 화면의 등장 애니메이션을 시작해도 되면 true */
export function useIntroRevealed() {
  return useSyncExternalStore(
    subscribe,
    () => phase === "revealed",
    () => false,
  );
}
