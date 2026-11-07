/**
 * DC&M 랜딩 인트로
 *
 * 어두운 화면에서 키워드가 퍼졌다가 가운데로 모이고, Prompt D 로고가 선으로 그려진 뒤
 * DC&M이 한 글자씩 찍힙니다. 둘러보기나 SKIP(또는 Esc)을 누르면 위로 걷히며 사라집니다.
 *
 * 프레임워크 없이 동작합니다. React에서는 Intro.tsx가 이 파일을 불러 씁니다.
 * 스타일은 intro.css에 있습니다.
 *
 *   import { mountIntro, shouldPlayIntro } from './dcmIntro.js';
 *   if (shouldPlayIntro()) mountIntro({ onDone: () => console.log('끝') });
 */

/** 본 기록을 남기는 localStorage 키 */
export const INTRO_SEEN_KEY = 'dcm-intro-seen';

export const DEFAULT_WORDS = [
  '알고리즘', '자료구조', '웹', '앱', 'AI', '게임',
  '해커톤', '스터디', '세미나', '오픈소스', 'Git', '프로젝트',
];

export const DEFAULT_COPY = '한성대학교 컴퓨터공학부 학술 정동아리';

/** 단계별 시작 시각(ms). 시안의 타임라인과 같습니다. */
export const TIMING = {
  chipsStart: 300,  // 첫 키워드가 퍼지기 시작
  chipGap: 140,     // 키워드 사이 간격
  chipIn: 900,      // 키워드 하나가 자리 잡는 시간
  gather: 2900,     // 키워드가 가운데로 모이기 시작
  gatherGap: 25,
  gatherOut: 560,
  draw: 3350,       // 빛이 터지고 로고 획 그리기
  cursor: 4100,     // 커서 깜빡임
  type: 4200,       // D, C, &, M 타이핑 시작
  typeGap: 110,
  sub: 4650,        // Digital Contents & Multimedia
  copy: 4850,       // 소개 한 줄
  cta: 5100,        // 둘러보기 버튼
  lift: 900,        // 위로 걷히는 시간 (intro.css의 transition과 같게)
};

const TONES = ['#8494FF', '#C9BEFF', '#FFDBFD'];

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/**
 * 인트로를 틀지 정합니다.
 * - 동작 줄이기 설정이 켜져 있으면 틀지 않습니다.
 * - 한 번 본 사람에게는 틀지 않습니다.
 * - force가 true면 무조건 틉니다 (발표 · 확인용, 예: 주소 뒤에 ?intro).
 */
export function shouldPlayIntro({ force = false } = {}) {
  if (force) return true;
  if (prefersReducedMotion()) return false;
  try {
    return !window.localStorage.getItem(INTRO_SEEN_KEY);
  } catch {
    return true;
  }
}

export function markIntroSeen() {
  try { window.localStorage.setItem(INTRO_SEEN_KEY, '1'); } catch { /* 저장 못 해도 괜찮음 */ }
}

export function resetIntroSeen() {
  try { window.localStorage.removeItem(INTRO_SEEN_KEY); } catch { /* 무시 */ }
}

const chevron = (color) =>
  `<svg viewBox="0 0 10 10" aria-hidden="true"><path d="M3 1.5 6.5 5 3 8.5" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const MARKUP = `
  <div class="dcm-intro__glow"></div>
  <div class="dcm-intro__dots"></div>
  <div class="dcm-intro__flash"></div>
  <div class="dcm-intro__chips" aria-hidden="true"></div>
  <button class="dcm-intro__skip" type="button">SKIP</button>
  <div class="dcm-intro__brand">
    <svg class="dcm-intro__mark" viewBox="0 0 67 64" aria-hidden="true">
      <path class="stem" d="M8 7V57" pathLength="1"/>
      <path class="chev" d="M24 7L50 32L24 57" pathLength="1"/>
      <rect x="46" y="52" width="20" height="9" rx="2"/>
    </svg>
    <p class="dcm-intro__word" aria-label="DC&amp;M"><span>D</span><span>C</span><span class="amp">&amp;</span><span>M</span></p>
    <p class="dcm-intro__sub">Digital Contents <span>&amp;</span> Multimedia</p>
    <p class="dcm-intro__copy"></p>
    <button class="dcm-intro__cta" type="button">둘러보기 <span aria-hidden="true">→</span></button>
  </div>`;

/**
 * 인트로를 화면에 띄우고 재생합니다.
 * @param {object}   [options]
 * @param {string[]} [options.words]     퍼지는 키워드 (기본 12개)
 * @param {string}   [options.copy]      로고 아래 소개 한 줄
 * @param {Function} [options.onLift]    걷히기 시작할 때 한 번 불림 (메인 등장 연출을 맞출 때)
 * @param {Function} [options.onDone]    걷히고 나서 한 번 불림
 * @param {HTMLElement} [options.container] 붙일 곳 (기본 document.body)
 * @returns {{ skip: () => void, destroy: () => void }}
 */
export function mountIntro({
  words = DEFAULT_WORDS,
  copy = DEFAULT_COPY,
  onLift,
  onDone,
  container = document.body,
} = {}) {
  const html = document.documentElement;
  const root = document.createElement('div');
  root.className = 'dcm-intro';
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-modal', 'true');
  root.setAttribute('aria-label', 'DC&M 소개');
  // Lenis 같은 스크롤 라이브러리가 인트로 위의 휠·터치로 뒤 페이지를 움직이지 않게
  root.setAttribute('data-lenis-prevent', '');
  root.innerHTML = MARKUP;
  root.querySelector('.dcm-intro__copy').textContent = copy;

  const chipsBox = root.querySelector('.dcm-intro__chips');
  const dotsBox = root.querySelector('.dcm-intro__dots');
  const skipBtn = root.querySelector('.dcm-intro__skip');
  const ctaBtn = root.querySelector('.dcm-intro__cta');
  const letters = [...root.querySelectorAll('.dcm-intro__word span')];

  const chips = words.map((word, i) => {
    const chip = document.createElement('div');
    chip.className = 'dcm-intro__chip';
    const inner = document.createElement('span');
    inner.style.setProperty('--bob-delay', `${-(i % 5) * 0.6}s`);
    inner.innerHTML = chevron(TONES[i % TONES.length]);
    inner.append(word);
    chip.append(inner);
    chipsBox.append(chip);
    return chip;
  });

  for (let i = 0; i < 18; i++) {
    const dot = document.createElement('span');
    dot.style.left = `${(i * 53 + 7) % 100}%`;
    dot.style.top = `${(i * 37 + 11) % 100}%`;
    dot.style.animationDuration = `${6 + (i % 5)}s`;
    dot.style.animationDelay = `${-i}s`;
    dotsBox.append(dot);
  }

  container.append(root);
  html.classList.add('dcm-intro-open');

  let timers = [];
  let anims = [];
  let finished = false;
  const at = (ms, fn) => timers.push(window.setTimeout(fn, ms));
  const stopTimers = () => { timers.forEach(clearTimeout); timers = []; };

  const onKey = (e) => { if (e.key === 'Escape') lift(); };
  document.addEventListener('keydown', onKey);

  function cleanup() {
    stopTimers();
    anims.forEach((a) => a.cancel());
    anims = [];
    document.removeEventListener('keydown', onKey);
    root.remove();
    html.classList.remove('dcm-intro-open');
  }

  function lift() {
    if (finished) return;
    finished = true;
    stopTimers();
    markIntroSeen();
    html.classList.remove('dcm-intro-open');
    html.classList.add('dcm-intro-lifted');
    root.classList.add('is-lifted');
    onLift?.();
    window.setTimeout(() => { cleanup(); onDone?.(); }, TIMING.lift + 50);
    window.setTimeout(() => html.classList.remove('dcm-intro-lifted'), TIMING.lift + 1200);
  }

  skipBtn.addEventListener('click', lift);
  ctaBtn.addEventListener('click', lift);
  root.tabIndex = -1;
  root.focus({ preventScroll: true });

  // Web Animations를 못 쓰는 브라우저는 마지막 장면(로고 + 버튼)만 보여 줍니다.
  if (typeof root.animate === 'function') {
    root.classList.add('is-playing');
    const w = window.innerWidth;
    const h = window.innerHeight;
    const fx = w < 520 ? 0.30 : 0.40;
    const n = chips.length;

    chips.forEach((chip, i) => {
      const angle = (i / n) * Math.PI * 2 - Math.PI / 2 + (((i * 7) % 5) - 2) * 0.07;
      const r = 0.84 + ((i * 5) % 4) * 0.05;
      const dx = Math.cos(angle) * w * fx * r;
      const dy = Math.sin(angle) * h * 0.39 * r;
      const there = `translate(calc(-50% + ${dx.toFixed(1)}px), calc(-50% + ${dy.toFixed(1)}px)) scale(1)`;
      const home = 'translate(-50%, -50%) scale(.2)';

      anims.push(chip.animate(
        [{ transform: home, opacity: 0 }, { transform: there, opacity: 1 }],
        { duration: TIMING.chipIn, delay: TIMING.chipsStart + i * TIMING.chipGap, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'forwards' },
      ));
      at(TIMING.gather + i * TIMING.gatherGap, () => {
        anims.push(chip.animate(
          [{ transform: there, opacity: 1 }, { transform: home, opacity: 0 }],
          { duration: TIMING.gatherOut, easing: 'cubic-bezier(.7,0,.84,0)', fill: 'forwards' },
        ));
      });
    });

    at(TIMING.draw, () => root.classList.add('is-burst', 'is-draw'));
    at(TIMING.cursor, () => root.classList.add('is-cursor'));
    letters.forEach((l, i) => at(TIMING.type + i * TIMING.typeGap, () => l.classList.add('is-on')));
    at(TIMING.sub, () => root.classList.add('is-sub'));
    at(TIMING.copy, () => root.classList.add('is-copy'));
    at(TIMING.cta, () => root.classList.add('is-cta'));
  }

  return {
    skip: lift,
    destroy() {
      finished = true;
      cleanup();
      html.classList.remove('dcm-intro-lifted');
    },
  };
}
