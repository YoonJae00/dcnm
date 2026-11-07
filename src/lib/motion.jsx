import { useEffect, useRef, useState } from 'react';

// 화면에 들어올 때 살짝 떠오르는 요소들. 같은 묶음 안에서는 순서대로 조금씩 늦게 나타납니다.
const TARGETS = [
  '.greet > *', '.mine-grid > *', '.hero2 > *', '.statement p', '.page-head', '.hblock .block-head', '.stats4 .stat', '.card-grid > *', '.parts > *',
  '.member-grid > *', '.home-cols .section', '.cta-band', '.week', '.post-row',
  '.filters', '.panel', '.article', '.rows > *',
].join(',');

const reduced = () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

export function useReveal(rootRef, key) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root || reduced() || !('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    // 개발 모드(StrictMode)에서는 이 effect가 두 번 실행되므로, 표시 여부는 요소가 아니라 이번 실행에서 기억
    const seen = new WeakSet();
    const scan = () => {
      root.querySelectorAll(TARGETS).forEach((el) => {
        if (seen.has(el) || el.classList.contains('in')) return;
        seen.add(el);
        const i = Array.prototype.indexOf.call(el.parentElement?.children || [], el);
        el.style.setProperty('--rv-delay', `${Math.min(Math.max(i, 0), 6) * 60}ms`);
        el.classList.add('rv');
        io.observe(el);
      });
    };
    scan();
    // 데이터가 늦게 들어와도 새로 생긴 요소를 잡음
    const mo = new MutationObserver(scan);
    mo.observe(root, { childList: true, subtree: true });
    return () => { io.disconnect(); mo.disconnect(); };
  }, [rootRef, key]);
}

// 숫자가 0에서 목표값까지 올라감 (화면에 보일 때 한 번)
export function CountUp({ value, duration = 900 }) {
  const ref = useRef(null);
  const [n, setN] = useState(reduced() ? value : 0);
  useEffect(() => {
    if (reduced()) { setN(value); return undefined; }
    const el = ref.current;
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t) => {
        const k = Math.min(1, (t - t0) / duration);
        setN(Math.round(value * (1 - (1 - k) ** 3)));
        if (k < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [value, duration]);
  return <b ref={ref}>{n}</b>;
}
