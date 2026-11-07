import { useEffect, useRef, useState } from 'react';
import { LogoMark } from './Logo';

// 홈 맨 위 인트로. 스크롤하면 내려오는 코드 비 사이로 카메라가 들어가고,
// 끝에서 화면이 페이지 배경으로 이어집니다.
// 코드처럼 보이는 글자만: 0/1, 16진수, 기호, 동아리 이름
const GLYPHS = '0101010123456789ABCDEFabcdef{}[]()<>;:=+-*/&|!?#$%_DCM';
const pick = () => GLYPHS[(Math.random() * GLYPHS.length) | 0];

// 세로로 읽히는 코드 키워드. 한 줄 안에 기호와 섞여 위에서 아래로 내려옵니다.
const WORDS = [
  'if', 'else', 'for', 'while', 'def', 'return', 'class', 'import', 'from', 'const', 'let', 'var',
  'function', 'print()', 'main()', 'true', 'false', 'null', 'None', 'int', 'void', 'async', 'await',
  'try', 'catch', 'new', 'this', 'self', 'public', 'static', 'lambda', 'yield', 'break', '=>', '&&', '!=',
  'git', 'npm', 'pip', 'sudo', 'SELECT', 'React', 'Java', 'Spring', 'Python', 'C++', 'HTML', 'CSS',
  'Unity', 'AI', 'IoT', 'DC&M', '0x1F', '#include', 'console.log', 'useState',
];

// 한 줄(세로)에 들어갈 글자 배열. fixed는 키워드 글자라서 깜빡이며 바뀌지 않음
function makeStream(n) {
  const chars = []; const fixed = [];
  while (chars.length < n) {
    if (Math.random() < 0.55) {
      const w = WORDS[(Math.random() * WORDS.length) | 0];
      for (const ch of w) { chars.push(ch); fixed.push(true); }
    }
    const gap = 1 + ((Math.random() * 4) | 0);
    for (let i = 0; i < gap; i += 1) { chars.push(pick()); fixed.push(false); }
  }
  return { chars: chars.slice(0, n), fixed: fixed.slice(0, n) };
}
const TITLE = 'DC&M';

// 깊이가 다른 세 겹. depth가 클수록 가깝고, 스크롤할 때 더 빨리 지나갑니다.
const LAYERS = [
  { size: 11, speed: 0.16, alpha: 0.22, depth: 0.35, trail: 10, density: 0.52, grow: 0 },
  { size: 15, speed: 0.24, alpha: 0.38, depth: 0.8, trail: 12, density: 0.45, grow: 0.4 },
  { size: 21, speed: 0.34, alpha: 0.6, depth: 1.5, trail: 14, density: 0.33, grow: 1 },
];

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));


function useDecode(text, run) {
  const [out, setOut] = useState(text);
  useEffect(() => {
    if (!run) return undefined;
    let frame = 0;
    const id = setInterval(() => {
      frame += 1;
      setOut(text.split('').map((c, i) => (frame > 6 + i * 4 ? c : pick())).join(''));
      if (frame > 6 + text.length * 4) clearInterval(id);
    }, 45);
    return () => clearInterval(id);
  }, [text, run]);
  return out;
}

export default function MatrixIntro({ onDone }) {
  const doneRef = useRef(false);
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const progress = useRef(0);
  const [p, setP] = useState(0);
  const reduced = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const title = useDecode(TITLE, !reduced);

  // 새로고침해도 인트로 처음부터
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  // 스크롤 진행도 0 → 1
  useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const v = clamp(-r.top / Math.max(1, r.height - window.innerHeight));
      progress.current = v;
      setP(v);
      // 끝까지 오면 인트로를 걷어내고 본문 맨 위에서 시작 (다시 올라가도 인트로 없음)
      if (v >= 0.97 && !doneRef.current) { doneRef.current = true; onDone?.(); }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);

  const goDown = () => {
    const el = wrapRef.current;
    if (el) window.scrollTo({ top: el.offsetHeight, behavior: reduced ? 'auto' : 'smooth' });
  };

  // 코드 비 그리기
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const accent = '#8f92ff'; // 검정 위에서 잘 보이는 밝은 보라빛 파랑
    let w = 0; let h = 0; let layers = []; let raf = 0; let visible = true; let last = 0; let started = false; let startAt = 0;

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      layers = LAYERS.map((L) => {
        const cols = Math.ceil(w / L.size) + 1;
        const rows = Math.ceil(h / L.size) + L.trail;
        return {
          ...L,
          cols: Array.from({ length: cols }, (_, i) => ({
            x: i * L.size + L.size / 2,
            head: reduced ? Math.random() * rows : -Math.random() * 10, // 화면 바로 위에서 대기
            speed: L.speed * (0.6 + Math.random() * 0.8),
            ...makeStream(rows + L.trail),
            on: Math.random() < L.density,
          })),
          rows,
        };
      });
    };

    const draw = (t) => {
      const dt = Math.min(50, t - (last || t)); last = t;
      const pr = progress.current;
      const ease = pr * pr;
      // 처음엔 코드가 없고, 스크롤을 내리면 위에서부터 내려오기 시작. 깊이 들어갈수록 빨라짐
      if (!started && window.scrollY > 4) { started = true; startAt = t || performance.now(); }
      const show = started || reduced ? 1 : 0;
      // 시작 직후 1.2초는 빠르게 쏟아지고, 그다음 원래 속도로
      const burst = started ? 1 + 3 * clamp(1 - ((t || performance.now()) - startAt) / 1200) : 0;
      const move = started ? burst * (1 + pr * 2) : 0;
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2; const cy = h / 2;
      for (const L of layers) {
        const z = 1 + ease * 9 * L.depth;
        const fade = L.alpha * (1 - L.grow * 0.75 * (1 - clamp(pr * 3))) * clamp(1.25 - (z - 1) / (7 * L.depth + 1));
        if (fade * show <= 0.01) continue;
        const fs = L.size * z;
        ctx.font = `${fs}px "IBM Plex Mono", ui-monospace, monospace`;
        ctx.textAlign = 'center';
        for (const c of L.cols) {
          if (!reduced && move > 0) {
            c.head += c.speed * (dt / 16) * move;
            if (c.head - L.trail > L.rows) { c.head = -Math.random() * 20; c.on = Math.random() < L.density; }
            if (Math.random() < 0.02 * move) { const j = (Math.random() * c.chars.length) | 0; if (!c.fixed[j]) c.chars[j] = pick(); }
          }
          if (!c.on) continue;
          const sx = cx + (c.x - cx) * z;
          if (sx < -fs || sx > w + fs) continue;
          const headRow = Math.floor(c.head);
          for (let k = 0; k < L.trail; k += 1) {
            const row = headRow - k;
            if (row < 0) break;
            const sy = cy + (row * L.size - cy) * z;
            if (sy < -fs || sy > h + fs) continue;
            const a = fade * show * (1 - k / L.trail);
            if (k === 0) { ctx.fillStyle = `rgba(238,240,255,${Math.min(1, fade * show * 1.2)})`; }
            else { ctx.globalAlpha = a; ctx.fillStyle = accent; }
            ctx.fillText(c.chars[row % c.chars.length], sx, sy);
            ctx.globalAlpha = 1;
          }
        }
      }
      if (visible && !reduced) raf = requestAnimationFrame(draw);
    };

    build();
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible) raf = requestAnimationFrame(draw);
    });
    io.observe(canvas);
    const onResize = () => { build(); if (reduced) draw(0); };
    window.addEventListener('resize', onResize);
    // 움직임 줄이기 설정이면 멈춘 한 장면만, 스크롤에 맞춰 다시 그림
    const onScroll = () => { if (reduced) draw(0); };
    window.addEventListener('scroll', onScroll, { passive: true });
    draw(0);
    return () => { cancelAnimationFrame(raf); io.disconnect(); window.removeEventListener('resize', onResize); window.removeEventListener('scroll', onScroll); };
  }, [reduced]);

  const skip = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    onDone?.();
  };

  const titleOut = clamp(p / 0.45);
  const veil = clamp((p - 0.6) / 0.32);

  return (
    <section ref={wrapRef} className="intro" aria-label="DC&M 인트로">
      <div className="intro-stage">
        <canvas ref={canvasRef} className="intro-rain" aria-hidden="true" />
        <div className="intro-vignette" aria-hidden="true" />
        <div
          className="intro-title"
          style={{ opacity: 1 - titleOut, transform: `scale(${1 + titleOut * 1.6})`, filter: `blur(${titleOut * 6}px)` }}
        >
          <LogoMark size={64} color="#eef0ff" cursor="#fbd3f3" blink className="intro-mark" />
          <h1 aria-label="DC&M">{title}</h1>
          <p>한성대학교 동아리</p>
        </div>
        <button type="button" className="intro-hint" onClick={goDown} style={{ opacity: 1 - clamp(p / 0.12) }}>
          스크롤해서 들어가기
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <button type="button" className="intro-skip" onClick={skip} style={{ opacity: 1 - veil }}>건너뛰기</button>
        <div className="intro-veil" aria-hidden="true" style={{ opacity: veil }} />
      </div>
    </section>
  );
}
