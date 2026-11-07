// 라이트/다크 테마. 메인 사이트와 모집 랜딩이 같이 씁니다.
// html에 data-theme="light|dark"를 붙이고, 고른 값은 이 브라우저에 저장합니다.
// 첫 화면 깜빡임을 막는 초기 설정은 index.html의 인라인 스크립트가 먼저 합니다.
import { useEffect, useState } from 'react';

export const THEME_KEY = 'dcm-theme';

export function currentTheme() {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

export function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem(THEME_KEY, theme); } catch { /* 저장이 막혀도 이번 방문에서는 바뀐 테마로 보임 */ }
  window.dispatchEvent(new CustomEvent('dcm-theme', { detail: theme }));
}

export function useTheme() {
  const [theme, set] = useState(() => (typeof document === 'undefined' ? 'light' : currentTheme()));
  useEffect(() => {
    const on = () => set(currentTheme());
    window.addEventListener('dcm-theme', on);
    return () => window.removeEventListener('dcm-theme', on);
  }, []);
  const toggle = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  return [theme, toggle];
}
