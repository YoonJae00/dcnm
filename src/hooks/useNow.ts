"use client";

import { useSyncExternalStore } from "react";

/**
 * 1초마다 갱신되는 현재 시각(ms).
 * 서버 렌더·하이드레이션 중에는 null을 돌려줘서 시간 차이로 인한 hydration 불일치가 없어요.
 */
let current = 0;
let timer: number | undefined;
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  if (timer === undefined) {
    current = Date.now();
    timer = window.setInterval(() => {
      current = Date.now();
      listeners.forEach((l) => l());
    }, 1000);
  }
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0 && timer !== undefined) {
      window.clearInterval(timer);
      timer = undefined;
    }
  };
}

function getSnapshot() {
  if (current === 0) current = Date.now();
  return current;
}

function getServerSnapshot() {
  return null;
}

export function useNow(): number | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
