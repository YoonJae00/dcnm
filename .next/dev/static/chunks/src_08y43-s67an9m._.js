(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/brand/Logo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Logo",
    ()=>Logo,
    "LogoGlyph",
    ()=>LogoGlyph,
    "LogoMark",
    ()=>LogoMark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
;
;
function LogoGlyph({ className, stroke = "currentColor", cursor = "#8494FF", blink = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 48 48",
        fill: "none",
        "aria-hidden": "true",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shrink-0", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14.5 13.5v21M21 13.5 32 24 21 34.5",
                stroke: stroke,
                strokeWidth: 4.2,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/brand/Logo.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: 29,
                y: 33.4,
                width: 8,
                height: 3.2,
                rx: 1,
                fill: cursor,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(blink === true && "animate-blink", blink === "hover" && "group-hover:animate-blink")
            }, void 0, false, {
                fileName: "[project]/src/components/brand/Logo.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/brand/Logo.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = LogoGlyph;
function LogoMark({ className, variant = "solid", blink }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-grid place-items-center rounded-[28%] text-white", variant === "solid" ? "bg-primary" : "bg-brand", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoGlyph, {
            className: "size-[78%]",
            cursor: "#FFDBFD",
            blink: blink
        }, void 0, false, {
            fileName: "[project]/src/components/brand/Logo.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/brand/Logo.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_c1 = LogoMark;
function Logo({ className, tone = "brand" }) {
    const glyph = tone === "white" ? {
        stroke: "#FFFFFF",
        cursor: "#FFDBFD"
    } : tone === "ink" ? {
        stroke: "#1B1B33",
        cursor: "#6367FF"
    } : {
        stroke: "#6367FF",
        cursor: "#8494FF"
    };
    const text = tone === "white" ? "text-white" : tone === "ink" ? "text-ink" : "text-primary";
    const amp = tone === "white" ? "text-accent" : tone === "ink" ? "text-primary" : "text-secondary";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group inline-flex items-center gap-1 font-extrabold", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoGlyph, {
                className: "h-[1.6em] w-[1.6em] -ml-[0.2em]",
                blink: "hover",
                ...glyph
            }, void 0, false, {
                fileName: "[project]/src/components/brand/Logo.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("tracking-[-0.04em]", text),
                children: [
                    "DC",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: amp,
                        children: "&"
                    }, void 0, false, {
                        fileName: "[project]/src/components/brand/Logo.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this),
                    "M"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/brand/Logo.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/brand/Logo.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c2 = Logo;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "LogoGlyph");
__turbopack_context__.k.register(_c1, "LogoMark");
__turbopack_context__.k.register(_c2, "Logo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/intro/Intro.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Intro",
    ()=>Intro
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$intro$2f$dcmIntro$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/intro/dcmIntro.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$intro$2f$introState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/intro/introState.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
/** 인트로가 걷히기 시작한 뒤 메인 첫 화면이 올라오기까지의 간격(ms) */ const REVEAL_DELAY = 280;
/**
 * 하이드레이션 전에 실행돼서, 인트로를 틀 사람이면 html에 dcm-intro-pending을 붙여요.
 * 그동안 globals.css가 화면을 인트로 배경으로 덮어서 메인이 잠깐 보였다 사라지지 않아요.
 * 조건은 shouldPlayIntro와 같아요.
 */ const PENDING_SCRIPT = `(function(){try{var q=new URLSearchParams(location.search).has("intro");if(q||(!matchMedia("(prefers-reduced-motion: reduce)").matches&&!localStorage.getItem(${JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$intro$2f$dcmIntro$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INTRO_SEEN_KEY"])})))document.documentElement.classList.add("dcm-intro-pending")}catch(e){}})()`;
function Intro() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Intro.useEffect": ()=>{
            const html = document.documentElement;
            const force = new URLSearchParams(window.location.search).has("intro");
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$intro$2f$dcmIntro$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldPlayIntro"])({
                force
            })) {
                html.classList.remove("dcm-intro-pending");
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$intro$2f$introState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setIntroPhase"])("revealed");
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$intro$2f$introState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setIntroPhase"])("playing");
            let revealTimer;
            const intro = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$intro$2f$dcmIntro$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mountIntro"])({
                onLift: {
                    "Intro.useEffect.intro": ()=>{
                        revealTimer = window.setTimeout({
                            "Intro.useEffect.intro": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$intro$2f$introState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setIntroPhase"])("revealed")
                        }["Intro.useEffect.intro"], REVEAL_DELAY);
                    }
                }["Intro.useEffect.intro"]
            });
            // 인트로가 같은 배경으로 위를 덮었으니 임시 가림막은 걷어요.
            html.classList.remove("dcm-intro-pending");
            return ({
                "Intro.useEffect": ()=>{
                    window.clearTimeout(revealTimer);
                    intro.destroy();
                }
            })["Intro.useEffect"];
        }
    }["Intro.useEffect"], []);
    // 클라이언트에서는 type을 text/plain으로 바꿔 React의 <script> 경고를 피해요.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
        type: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "text/plain",
        suppressHydrationWarning: true,
        dangerouslySetInnerHTML: {
            __html: PENDING_SCRIPT
        }
    }, void 0, false, {
        fileName: "[project]/src/components/intro/Intro.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(Intro, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Intro;
var _c;
__turbopack_context__.k.register(_c, "Intro");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/intro/dcmIntro.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

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
 */ /** 본 기록을 남기는 localStorage 키 */ __turbopack_context__.s([
    "DEFAULT_COPY",
    ()=>DEFAULT_COPY,
    "DEFAULT_WORDS",
    ()=>DEFAULT_WORDS,
    "INTRO_SEEN_KEY",
    ()=>INTRO_SEEN_KEY,
    "TIMING",
    ()=>TIMING,
    "markIntroSeen",
    ()=>markIntroSeen,
    "mountIntro",
    ()=>mountIntro,
    "resetIntroSeen",
    ()=>resetIntroSeen,
    "shouldPlayIntro",
    ()=>shouldPlayIntro
]);
const INTRO_SEEN_KEY = 'dcm-intro-seen';
const DEFAULT_WORDS = [
    '알고리즘',
    '자료구조',
    '웹',
    '앱',
    'AI',
    '게임',
    '해커톤',
    '스터디',
    '세미나',
    '오픈소스',
    'Git',
    '프로젝트'
];
const DEFAULT_COPY = '한성대학교 컴퓨터공학부 학술 정동아리';
const TIMING = {
    chipsStart: 300,
    chipGap: 140,
    chipIn: 900,
    gather: 2900,
    gatherGap: 25,
    gatherOut: 560,
    draw: 3350,
    cursor: 4100,
    type: 4200,
    typeGap: 110,
    sub: 4650,
    copy: 4850,
    cta: 5100,
    lift: 900
};
const TONES = [
    '#8494FF',
    '#C9BEFF',
    '#FFDBFD'
];
const prefersReducedMotion = ()=>("TURBOPACK compile-time value", "object") !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
function shouldPlayIntro({ force = false } = {}) {
    if (force) return true;
    if (prefersReducedMotion()) return false;
    try {
        return !window.localStorage.getItem(INTRO_SEEN_KEY);
    } catch  {
        return true;
    }
}
function markIntroSeen() {
    try {
        window.localStorage.setItem(INTRO_SEEN_KEY, '1');
    } catch  {}
}
function resetIntroSeen() {
    try {
        window.localStorage.removeItem(INTRO_SEEN_KEY);
    } catch  {}
}
const chevron = (color)=>`<svg viewBox="0 0 10 10" aria-hidden="true"><path d="M3 1.5 6.5 5 3 8.5" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
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
function mountIntro({ words = DEFAULT_WORDS, copy = DEFAULT_COPY, onLift, onDone, container = document.body } = {}) {
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
    const letters = [
        ...root.querySelectorAll('.dcm-intro__word span')
    ];
    const chips = words.map((word, i)=>{
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
    for(let i = 0; i < 18; i++){
        const dot = document.createElement('span');
        dot.style.left = `${(i * 53 + 7) % 100}%`;
        dot.style.top = `${(i * 37 + 11) % 100}%`;
        dot.style.animationDuration = `${6 + i % 5}s`;
        dot.style.animationDelay = `${-i}s`;
        dotsBox.append(dot);
    }
    container.append(root);
    html.classList.add('dcm-intro-open');
    let timers = [];
    let anims = [];
    let finished = false;
    const at = (ms, fn)=>timers.push(window.setTimeout(fn, ms));
    const stopTimers = ()=>{
        timers.forEach(clearTimeout);
        timers = [];
    };
    const onKey = (e)=>{
        if (e.key === 'Escape') lift();
    };
    document.addEventListener('keydown', onKey);
    function cleanup() {
        stopTimers();
        anims.forEach((a)=>a.cancel());
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
        window.setTimeout(()=>{
            cleanup();
            onDone?.();
        }, TIMING.lift + 50);
        window.setTimeout(()=>html.classList.remove('dcm-intro-lifted'), TIMING.lift + 1200);
    }
    skipBtn.addEventListener('click', lift);
    ctaBtn.addEventListener('click', lift);
    root.tabIndex = -1;
    root.focus({
        preventScroll: true
    });
    // Web Animations를 못 쓰는 브라우저는 마지막 장면(로고 + 버튼)만 보여 줍니다.
    if (typeof root.animate === 'function') {
        root.classList.add('is-playing');
        const w = window.innerWidth;
        const h = window.innerHeight;
        const fx = w < 520 ? 0.30 : 0.40;
        const n = chips.length;
        chips.forEach((chip, i)=>{
            const angle = i / n * Math.PI * 2 - Math.PI / 2 + (i * 7 % 5 - 2) * 0.07;
            const r = 0.84 + i * 5 % 4 * 0.05;
            const dx = Math.cos(angle) * w * fx * r;
            const dy = Math.sin(angle) * h * 0.39 * r;
            const there = `translate(calc(-50% + ${dx.toFixed(1)}px), calc(-50% + ${dy.toFixed(1)}px)) scale(1)`;
            const home = 'translate(-50%, -50%) scale(.2)';
            anims.push(chip.animate([
                {
                    transform: home,
                    opacity: 0
                },
                {
                    transform: there,
                    opacity: 1
                }
            ], {
                duration: TIMING.chipIn,
                delay: TIMING.chipsStart + i * TIMING.chipGap,
                easing: 'cubic-bezier(.16,1,.3,1)',
                fill: 'forwards'
            }));
            at(TIMING.gather + i * TIMING.gatherGap, ()=>{
                anims.push(chip.animate([
                    {
                        transform: there,
                        opacity: 1
                    },
                    {
                        transform: home,
                        opacity: 0
                    }
                ], {
                    duration: TIMING.gatherOut,
                    easing: 'cubic-bezier(.7,0,.84,0)',
                    fill: 'forwards'
                }));
            });
        });
        at(TIMING.draw, ()=>root.classList.add('is-burst', 'is-draw'));
        at(TIMING.cursor, ()=>root.classList.add('is-cursor'));
        letters.forEach((l, i)=>at(TIMING.type + i * TIMING.typeGap, ()=>l.classList.add('is-on')));
        at(TIMING.sub, ()=>root.classList.add('is-sub'));
        at(TIMING.copy, ()=>root.classList.add('is-copy'));
        at(TIMING.cta, ()=>root.classList.add('is-cta'));
    }
    return {
        skip: lift,
        destroy () {
            finished = true;
            cleanup();
            html.classList.remove('dcm-intro-lifted');
        }
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/intro/introState.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setIntroPhase",
    ()=>setIntroPhase,
    "useIntroRevealed",
    ()=>useIntroRevealed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
let phase = "pending";
const listeners = new Set();
function setIntroPhase(next) {
    if (phase === next) return;
    phase = next;
    listeners.forEach((listener)=>listener());
}
function subscribe(listener) {
    listeners.add(listener);
    return ()=>{
        listeners.delete(listener);
    };
}
function useIntroRevealed() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, {
        "useIntroRevealed.useSyncExternalStore": ()=>phase === "revealed"
    }["useIntroRevealed.useSyncExternalStore"], {
        "useIntroRevealed.useSyncExternalStore": ()=>false
    }["useIntroRevealed.useSyncExternalStore"]);
}
_s(useIntroRevealed, "FpwL93IKMLJZuQQXefVtWynbBPQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/brand/Logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SmartLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SmartLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function Header() {
    _s();
    const { scrollY, scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])();
    const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(scrollYProgress, {
        stiffness: 160,
        damping: 30,
        restDelta: 0.001
    });
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const lenis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLenis"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(scrollY, "change", {
        "Header.useMotionValueEvent": (y)=>setScrolled(y > 12)
    }["Header.useMotionValueEvent"]);
    // 모바일 메뉴가 열려 있으면 뒤 페이지 스크롤을 멈춰요.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if (open) lenis?.stop();
            else lenis?.start();
            document.documentElement.style.overflow = open ? "hidden" : "";
            const onKey = {
                "Header.useEffect.onKey": (e)=>e.key === "Escape" && setOpen(false)
            }["Header.useEffect.onKey"];
            window.addEventListener("keydown", onKey);
            return ({
                "Header.useEffect": ()=>window.removeEventListener("keydown", onKey)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        open,
        lenis
    ]);
    const solid = scrolled || open;
    return(// data-reveal: 인트로가 걷힐 때 살짝 올라오며 나타나요 (intro.css)
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        "data-reveal": true,
        className: "fixed inset-x-0 top-0 z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 border-b transition-[background-color,border-color,backdrop-filter] duration-300", solid ? "border-gray-2/70 bg-white/75 backdrop-blur-xl backdrop-saturate-150" : "border-transparent bg-transparent")
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "relative mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SmartLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmartLink"], {
                        href: "/#top",
                        "aria-label": "DC&M 홈",
                        className: "text-[22px]",
                        onClick: ()=>setOpen(false),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {}, void 0, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "hidden items-center gap-1 md:flex",
                        onMouseLeave: ()=>setHovered(null),
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navLinks"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SmartLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmartLink"], {
                                        href: link.href,
                                        onMouseEnter: ()=>setHovered(link.href),
                                        className: "relative z-10 block rounded-full px-4 py-2 text-14 font-semibold text-gray-4 transition-colors hover:text-ink",
                                        children: link.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this),
                                    hovered === link.href && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                                        layoutId: "nav-hover",
                                        className: "absolute inset-0 rounded-full bg-gray-1",
                                        transition: {
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 34
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 74,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, link.href, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SmartLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmartLink"], {
                                href: "/apply",
                                className: "hidden h-9 items-center rounded-full bg-ink px-4 text-14 font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-primary active:scale-95 md:inline-flex",
                                children: "지원하기"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-label": open ? "메뉴 닫기" : "메뉴 열기",
                                "aria-expanded": open,
                                "aria-controls": "mobile-menu",
                                onClick: ()=>setOpen((v)=>!v),
                                className: "relative grid size-10 place-items-center rounded-full transition-colors hover:bg-gray-1 md:hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sr-only",
                                        children: "메뉴"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                                        className: "absolute h-[2px] w-5 rounded-full bg-ink",
                                        animate: open ? {
                                            rotate: 45,
                                            y: 0
                                        } : {
                                            rotate: 0,
                                            y: -4
                                        },
                                        transition: {
                                            type: "spring",
                                            stiffness: 500,
                                            damping: 32
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                                        className: "absolute h-[2px] w-5 rounded-full bg-ink",
                                        animate: open ? {
                                            rotate: -45,
                                            y: 0
                                        } : {
                                            rotate: 0,
                                            y: 4
                                        },
                                        transition: {
                                            type: "spring",
                                            stiffness: 500,
                                            damping: 32
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                "aria-hidden": true,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-brand absolute inset-x-0 bottom-0 h-[2px] origin-left transition-opacity duration-300", scrolled ? "opacity-100" : "opacity-0"),
                style: {
                    scaleX: progress
                }
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                    id: "mobile-menu",
                    className: "fixed inset-x-0 top-16 bottom-0 bg-white/95 backdrop-blur-xl md:hidden",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0,
                        transition: {
                            duration: 0.2
                        }
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].ul, {
                        className: "flex flex-col gap-1 px-5 pt-6",
                        initial: "hidden",
                        animate: "show",
                        variants: {
                            show: {
                                transition: {
                                    staggerChildren: 0.05,
                                    delayChildren: 0.05
                                }
                            }
                        },
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navLinks"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].li, {
                                    variants: {
                                        hidden: {
                                            opacity: 0,
                                            y: 16
                                        },
                                        show: {
                                            opacity: 1,
                                            y: 0
                                        }
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SmartLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmartLink"], {
                                        href: link.href,
                                        onClick: ()=>setOpen(false),
                                        className: "block py-3 text-30 font-bold text-ink active:text-primary",
                                        children: link.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 147,
                                        columnNumber: 19
                                    }, this)
                                }, link.href, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 140,
                                    columnNumber: 17
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].li, {
                                className: "pt-6",
                                variants: {
                                    hidden: {
                                        opacity: 0,
                                        y: 16
                                    },
                                    show: {
                                        opacity: 1,
                                        y: 0
                                    }
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SmartLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmartLink"], {
                                    href: "/apply",
                                    onClick: ()=>setOpen(false),
                                    className: "flex h-14 items-center justify-center rounded-2xl bg-primary text-16 font-bold text-white active:scale-[0.98]",
                                    children: "8기 지원하기"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 160,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 156,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 133,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 126,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Header.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this));
}
_s(Header, "fhoCrA5jTZBU6rIU55YrJguwIE8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLenis"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/projects/ProjectCover.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectCover",
    ()=>ProjectCover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const W = 400;
const H = 260;
function Motif({ motif }) {
    switch(motif){
        case "grid":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: Array.from({
                    length: 10
                }, (_, c)=>Array.from({
                        length: 6
                    }, (_, r)=>{
                        const on = (c * 7 + r * 3) % 5 === 0;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: 40 + c * 34,
                            y: 30 + r * 34,
                            width: 24,
                            height: 24,
                            rx: 6,
                            fill: "#fff",
                            opacity: on ? 0.9 : 0.14
                        }, `${c}-${r}`, false, {
                            fileName: "[project]/src/components/projects/ProjectCover.tsx",
                            lineNumber: 16,
                            columnNumber: 17
                        }, this);
                    }))
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectCover.tsx",
                lineNumber: 11,
                columnNumber: 9
            }, this);
        case "orbit":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: "none",
                stroke: "#fff",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: 300,
                        cy: 140,
                        r: 46,
                        strokeOpacity: 0.6,
                        strokeWidth: 2
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectCover.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: 300,
                        cy: 140,
                        r: 88,
                        strokeOpacity: 0.35,
                        strokeWidth: 2
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectCover.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: 300,
                        cy: 140,
                        r: 132,
                        strokeOpacity: 0.2,
                        strokeWidth: 2
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectCover.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: 300,
                        cy: 140,
                        r: 18,
                        fill: "#fff",
                        fillOpacity: 0.95,
                        stroke: "none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectCover.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: 238,
                        cy: 78,
                        r: 9,
                        fill: "#fff",
                        stroke: "none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectCover.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: 388,
                        cy: 170,
                        r: 7,
                        fill: "#fff",
                        fillOpacity: 0.8,
                        stroke: "none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectCover.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: 192,
                        cy: 210,
                        r: 6,
                        fill: "#fff",
                        fillOpacity: 0.7,
                        stroke: "none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectCover.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/projects/ProjectCover.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this);
        case "wave":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: "none",
                stroke: "#fff",
                strokeWidth: 3,
                strokeLinecap: "round",
                children: Array.from({
                    length: 6
                }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: `M -20 ${90 + i * 22} C 80 ${40 + i * 22}, 160 ${150 + i * 22}, 260 ${90 + i * 22} S 380 ${40 + i * 22}, 440 ${100 + i * 22}`,
                        strokeOpacity: 0.85 - i * 0.12
                    }, i, false, {
                        fileName: "[project]/src/components/projects/ProjectCover.tsx",
                        lineNumber: 47,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectCover.tsx",
                lineNumber: 45,
                columnNumber: 9
            }, this);
        case "bars":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    0.35,
                    0.55,
                    0.42,
                    0.78,
                    0.6,
                    0.92,
                    0.7
                ].map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: 60 + i * 44,
                        y: H - 40 - h * 170,
                        width: 28,
                        height: h * 170,
                        rx: 8,
                        fill: "#fff",
                        opacity: i === 5 ? 0.95 : 0.35 + i * 0.05
                    }, i, false, {
                        fileName: "[project]/src/components/projects/ProjectCover.tsx",
                        lineNumber: 59,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectCover.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, this);
        case "dots":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    Array.from({
                        length: 13
                    }, (_, c)=>Array.from({
                            length: 8
                        }, (_, r)=>{
                            const dx = c - 9;
                            const dy = r - 3;
                            const d = Math.sqrt(dx * dx + dy * dy);
                            const size = Math.max(1.5, 9 - d * 1.3);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: 30 + c * 30,
                                cy: 25 + r * 30,
                                r: size,
                                fill: "#fff",
                                opacity: Math.max(0.15, 1 - d * 0.14)
                            }, `${c}-${r}`, false, {
                                fileName: "[project]/src/components/projects/ProjectCover.tsx",
                                lineNumber: 82,
                                columnNumber: 17
                            }, this);
                        })),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M270 92c-14 0-25 11-25 25 0 19 25 43 25 43s25-24 25-43c0-14-11-25-25-25Z",
                        fill: "#fff"
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectCover.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: 270,
                        cy: 117,
                        r: 8,
                        fill: "#6367ff"
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectCover.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/projects/ProjectCover.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, this);
        case "rings":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: "none",
                stroke: "#fff",
                strokeWidth: 2,
                children: [
                    Array.from({
                        length: 7
                    }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: W / 2,
                            cy: H / 2,
                            r: 38 + i * 24,
                            strokeOpacity: 0.9 - i * 0.12
                        }, i, false, {
                            fileName: "[project]/src/components/projects/ProjectCover.tsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: W / 2,
                        y: H / 2 + 9,
                        textAnchor: "middle",
                        fill: "#fff",
                        stroke: "none",
                        fontSize: 26,
                        fontWeight: 800,
                        fontFamily: "ui-monospace, monospace",
                        children: "24h"
                    }, void 0, false, {
                        fileName: "[project]/src/components/projects/ProjectCover.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/projects/ProjectCover.tsx",
                lineNumber: 102,
                columnNumber: 9
            }, this);
    }
}
_c = Motif;
function ProjectCover({ project, className }) {
    _s();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const { from, to, motif } = project.cover;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: `0 0 ${W} ${H}`,
        preserveAspectRatio: "xMidYMid slice",
        className: className,
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: `${id}-bg`,
                        x1: "0",
                        y1: "0",
                        x2: "1",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0",
                                stopColor: from
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectCover.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: to
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectCover.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/projects/ProjectCover.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                        id: `${id}-glow`,
                        cx: "0.85",
                        cy: "0.1",
                        r: "0.7",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0",
                                stopColor: "#fff",
                                stopOpacity: 0.35
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectCover.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#fff",
                                stopOpacity: 0
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects/ProjectCover.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/projects/ProjectCover.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/projects/ProjectCover.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: W,
                height: H,
                fill: `url(#${id}-bg)`
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectCover.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: W,
                height: H,
                fill: `url(#${id}-glow)`
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectCover.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Motif, {
                motif: motif
            }, void 0, false, {
                fileName: "[project]/src/components/projects/ProjectCover.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/projects/ProjectCover.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
}
_s(ProjectCover, "WhsuKpSQZEWeFcB7gWlfDRQktoQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c1 = ProjectCover;
var _c, _c1;
__turbopack_context__.k.register(_c, "Motif");
__turbopack_context__.k.register(_c1, "ProjectCover");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Activities.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Activities",
    ()=>Activities
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/projects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$ProjectCover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/projects/ProjectCover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SectionHeading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
const DESKTOP = "(min-width: 768px)";
/** 마우스 방향으로 살짝 기우는 3D 카드 */ function TiltCard({ project }) {
    _s();
    const rx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const ry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const rotateX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(rx, {
        stiffness: 220,
        damping: 20
    });
    const rotateY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(ry, {
        stiffness: 220,
        damping: 20
    });
    const onMove = (e)=>{
        if (e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        ry.set(((e.clientX - r.left) / r.width - 0.5) * 10);
        rx.set(-((e.clientY - r.top) / r.height - 0.5) * 10);
    };
    const reset = ()=>{
        rx.set(0);
        ry.set(0);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].article, {
        onPointerMove: onMove,
        onPointerLeave: reset,
        style: {
            rotateX,
            rotateY,
            transformPerspective: 1000
        },
        className: "group relative w-[78vw] max-w-[340px] shrink-0 snap-start overflow-hidden rounded-[28px] bg-white shadow-s ring-1 ring-gray-2/60 transition-shadow duration-300 hover:shadow-l sm:w-[360px] sm:max-w-none lg:w-[380px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: `/projects/${project.slug}`,
            className: "block focus-visible:outline-offset-[-3px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative aspect-[16/10.4] overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$projects$2f$ProjectCover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectCover"], {
                            project: project,
                            className: "size-full transition-transform duration-700 ease-(--ease-toss) group-hover:scale-[1.06]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Activities.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-12 font-bold text-ink backdrop-blur",
                            children: project.category
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Activities.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        project.award && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-ink/80 px-3 py-1 text-12 font-semibold text-white backdrop-blur",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trophy"], {
                                    className: "size-3.5 text-accent"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Activities.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this),
                                project.award
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Activities.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Activities.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-12 font-semibold text-gray-3",
                            children: [
                                project.generation,
                                "기 · ",
                                project.period
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Activities.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "mt-1.5 flex items-center gap-1 text-20 font-bold text-ink sm:text-24",
                            children: [
                                project.title,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight"], {
                                    className: "size-5 -translate-x-1 text-primary opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Activities.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Activities.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 line-clamp-2 min-h-[3.2em] text-14 text-gray-4 sm:text-16",
                            children: project.summary
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Activities.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "mt-4 flex flex-wrap gap-1.5",
                            children: project.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "rounded-lg bg-gray-1 px-2.5 py-1 text-12 font-semibold text-gray-4",
                                    children: tag
                                }, tag, false, {
                                    fileName: "[project]/src/components/sections/Activities.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Activities.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Activities.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Activities.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Activities.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(TiltCard, "rQKfDSOV3K7US2uAT9ygrhQwP7U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c = TiltCard;
function EndCard() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-brand relative flex w-[78vw] max-w-[340px] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-[28px] p-7 text-white sm:w-[360px] sm:max-w-none lg:w-[380px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "absolute -right-10 -bottom-10 size-48 rounded-full bg-white/20 blur-2xl"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Activities.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-mono text-14 tracking-normal text-white/80",
                children: "next_project.tsx"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Activities.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-30 leading-snug font-extrabold",
                        children: [
                            "다음 프로젝트,",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/components/sections/Activities.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recruit"].generation,
                            "기와 함께",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/components/sections/Activities.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            "만들어요"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Activities.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonLink"], {
                        href: "/#recruit",
                        variant: "white",
                        size: "md",
                        arrow: true,
                        className: "mt-8",
                        children: "모집 안내 보기"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Activities.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Activities.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Activities.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_c1 = EndCard;
function Activities() {
    _s1();
    const outerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const distance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const [height, setHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: outerRef,
        offset: [
            "start start",
            "end end"
        ]
    });
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])({
        "Activities.useTransform[x]": ()=>-scrollYProgress.get() * distance.get()
    }["Activities.useTransform[x]"]);
    const smoothX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(x, {
        stiffness: 260,
        damping: 40,
        mass: 0.4
    });
    const total = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].length + 1;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(scrollYProgress, "change", {
        "Activities.useMotionValueEvent": (p)=>{
            setActive(Math.min(total - 1, Math.floor(p * total)));
        }
    }["Activities.useMotionValueEvent"]);
    // 가로로 이동해야 할 거리 측정 → 그만큼 섹션 높이를 늘려요 (데스크톱만)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Activities.useEffect": ()=>{
            const track = trackRef.current;
            if (!track) return;
            const mq = window.matchMedia(DESKTOP);
            const measure = {
                "Activities.useEffect.measure": ()=>{
                    if (!mq.matches) {
                        distance.set(0);
                        setHeight(null);
                        return;
                    }
                    const last = track.lastElementChild;
                    if (!last) return;
                    const pad = parseFloat(getComputedStyle(track).paddingLeft) || 0;
                    const d = Math.max(0, last.offsetLeft + last.offsetWidth + pad - track.clientWidth);
                    distance.set(d);
                    setHeight(window.innerHeight + d);
                }
            }["Activities.useEffect.measure"];
            measure();
            const ro = new ResizeObserver(measure);
            ro.observe(track);
            mq.addEventListener("change", measure);
            window.addEventListener("resize", measure);
            return ({
                "Activities.useEffect": ()=>{
                    ro.disconnect();
                    mq.removeEventListener("change", measure);
                    window.removeEventListener("resize", measure);
                }
            })["Activities.useEffect"];
        }
    }["Activities.useEffect"], [
        distance
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "activities",
        "aria-labelledby": "activities-title",
        className: "scroll-mt-16 bg-mist",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: outerRef,
            className: "relative",
            style: height ? {
                height
            } : undefined,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col justify-center py-24 sm:py-32 md:sticky md:top-0 md:h-dvh md:overflow-hidden md:py-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto flex w-full max-w-6xl items-end justify-between gap-6 px-5 md:px-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
                                eyebrow: "Activities",
                                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    id: "activities-title",
                                    children: [
                                        "최근에는 이런 걸",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/sections/Activities.tsx",
                                            lineNumber: 173,
                                            columnNumber: 19
                                        }, this),
                                        "만들었어요"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Activities.tsx",
                                    lineNumber: 171,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Activities.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden shrink-0 flex-col items-end gap-3 pb-2 md:flex",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/projects",
                                        className: "group inline-flex items-center gap-1 text-14 font-semibold text-gray-4 transition-colors hover:text-primary",
                                        children: [
                                            "전체 활동 보기",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight"], {
                                                className: "size-4 transition-transform group-hover:translate-x-0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Activities.tsx",
                                                lineNumber: 184,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Activities.tsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 font-mono text-14 tracking-normal text-gray-4 tabular-nums",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-ink",
                                                children: String(active + 1).padStart(2, "0")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Activities.tsx",
                                                lineNumber: 187,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative h-[2px] w-24 overflow-hidden rounded-full bg-gray-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                                                    className: "bg-brand absolute inset-0 origin-left",
                                                    style: {
                                                        scaleX: scrollYProgress
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Activities.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Activities.tsx",
                                                lineNumber: 188,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: String(total).padStart(2, "0")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Activities.tsx",
                                                lineNumber: 194,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Activities.tsx",
                                        lineNumber: 186,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Activities.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Activities.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                        ref: trackRef,
                        style: {
                            x: smoothX
                        },
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("no-scrollbar relative mt-10 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-6 sm:mt-14", "md:snap-none md:gap-6 md:overflow-visible md:px-[max(2rem,calc((100vw-72rem)/2+2rem))] md:pb-0"),
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TiltCard, {
                                    project: p
                                }, p.slug, false, {
                                    fileName: "[project]/src/components/sections/Activities.tsx",
                                    lineNumber: 208,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EndCard, {}, void 0, false, {
                                fileName: "[project]/src/components/sections/Activities.tsx",
                                lineNumber: 210,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Activities.tsx",
                        lineNumber: 199,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto mt-2 w-full max-w-6xl px-5 md:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/projects",
                            className: "inline-flex items-center gap-1 text-14 font-semibold text-gray-4",
                            children: [
                                "전체 활동 보기 ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight"], {
                                    className: "size-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Activities.tsx",
                                    lineNumber: 218,
                                    columnNumber: 24
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Activities.tsx",
                            lineNumber: 214,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Activities.tsx",
                        lineNumber: 213,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Activities.tsx",
                lineNumber: 166,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Activities.tsx",
            lineNumber: 165,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Activities.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
}
_s1(Activities, "vxQaA/MwtkgIsG0qXsyO2QkEQqU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"]
    ];
});
_c2 = Activities;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "TiltCard");
__turbopack_context__.k.register(_c1, "EndCard");
__turbopack_context__.k.register(_c2, "Activities");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Faq.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Faq",
    ()=>Faq
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SectionHeading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Faq() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-labelledby": "faq-title",
        className: "bg-mist py-24 sm:py-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto grid max-w-6xl gap-10 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
                    eyebrow: "FAQ",
                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        id: "faq-title",
                        children: [
                            "자주 묻는",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/components/sections/Faq.tsx",
                                lineNumber: 21,
                                columnNumber: 15
                            }, this),
                            "질문"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Faq.tsx",
                        lineNumber: 19,
                        columnNumber: 13
                    }, this),
                    description: "더 궁금한 점은 문의하기로 편하게 물어봐 주세요."
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Faq.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-3",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faqs"].map((item, i)=>{
                        const isOpen = open === i;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].li, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                amount: 0.6
                            },
                            transition: {
                                duration: 0.6,
                                delay: i * 0.05
                            },
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("overflow-hidden rounded-3xl bg-white ring-1 transition-[box-shadow,--tw-ring-color] duration-300", isOpen ? "shadow-m ring-light" : "ring-gray-1 hover:shadow-s"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "aria-expanded": isOpen,
                                        "aria-controls": `faq-${i}`,
                                        onClick: ()=>setOpen(isOpen ? null : i),
                                        className: "flex w-full items-center gap-4 px-6 py-5 text-left sm:px-7 sm:py-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-14 font-bold tracking-normal text-primary",
                                                children: [
                                                    "Q",
                                                    i + 1
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/Faq.tsx",
                                                lineNumber: 51,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex-1 text-16 font-bold text-ink sm:text-20",
                                                children: item.q
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Faq.tsx",
                                                lineNumber: 54,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                                                animate: {
                                                    rotate: isOpen ? 45 : 0
                                                },
                                                transition: {
                                                    type: "spring",
                                                    stiffness: 400,
                                                    damping: 26
                                                },
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid size-8 shrink-0 place-items-center rounded-full transition-colors", isOpen ? "bg-primary text-white" : "bg-gray-1 text-gray-4"),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plus"], {
                                                    className: "size-4",
                                                    strokeWidth: 2.5
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Faq.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Faq.tsx",
                                                lineNumber: 55,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Faq.tsx",
                                        lineNumber: 44,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Faq.tsx",
                                    lineNumber: 43,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    initial: false,
                                    children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                        id: `faq-${i}`,
                                        initial: {
                                            height: 0,
                                            opacity: 0
                                        },
                                        animate: {
                                            height: "auto",
                                            opacity: 1
                                        },
                                        exit: {
                                            height: 0,
                                            opacity: 0
                                        },
                                        transition: {
                                            duration: 0.35,
                                            ease: [
                                                0.22,
                                                1,
                                                0.36,
                                                1
                                            ]
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "px-6 pb-6 pl-[3.6rem] text-16 text-gray-4 sm:px-7 sm:pl-[3.85rem]",
                                            children: item.a
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Faq.tsx",
                                            lineNumber: 76,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Faq.tsx",
                                        lineNumber: 69,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Faq.tsx",
                                    lineNumber: 67,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, item.q, true, {
                            fileName: "[project]/src/components/sections/Faq.tsx",
                            lineNumber: 32,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Faq.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Faq.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Faq.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(Faq, "kwOYwiAlGcf16u2JaFl+OYF7OQ8=");
_c = Faq;
var _c;
__turbopack_context__.k.register(_c, "Faq");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/FinalCta.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FinalCta",
    ()=>FinalCta
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/brand/Logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function FinalCta() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const ry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const rotateX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(rx, {
        stiffness: 150,
        damping: 15
    });
    const rotateY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(ry, {
        stiffness: 150,
        damping: 15
    });
    // 스크롤로 들어올 때 카드가 커지며 둥근 모서리가 펴져요
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: ref,
        offset: [
            "start end",
            "center center"
        ]
    });
    const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        0.9,
        1
    ]);
    const radius = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        64,
        36
    ]);
    const onMove = (e)=>{
        if (e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        ry.set(((e.clientX - r.left) / r.width - 0.5) * 30);
        rx.set(-((e.clientY - r.top) / r.height - 0.5) * 30);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-labelledby": "cta-title",
        className: "bg-white px-4 py-20 sm:px-6 sm:py-28",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
            ref: ref,
            onPointerMove: onMove,
            onPointerLeave: ()=>{
                rx.set(0);
                ry.set(0);
            },
            style: {
                scale,
                borderRadius: radius
            },
            className: "bg-brand-deep relative isolate mx-auto max-w-6xl overflow-hidden px-6 py-16 text-center text-white sm:px-12 sm:py-24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "aria-hidden": true,
                    className: "absolute inset-0 -z-10 bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,#000,transparent_70%)]",
                    style: {
                        backgroundImage: "linear-gradient(to right, rgb(255 255 255 / 0.14) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.14) 1px, transparent 1px)"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/FinalCta.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "aria-hidden": true,
                    className: "absolute -bottom-32 -left-20 -z-10 size-96 rounded-full bg-accent/50 blur-[100px]"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/FinalCta.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "aria-hidden": true,
                    className: "absolute -top-32 -right-20 -z-10 size-96 rounded-full bg-primary/60 blur-[100px]"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/FinalCta.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center [perspective:800px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                        style: {
                            rotateX,
                            rotateY
                        },
                        className: "animate-float",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoMark"], {
                            className: "size-20 shadow-[0_24px_48px_-8px_rgb(27_27_51/0.35)] ring-1 ring-white/40 sm:size-24",
                            blink: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/FinalCta.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/FinalCta.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/FinalCta.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    id: "cta-title",
                    className: "mt-8 text-title font-extrabold",
                    children: [
                        "다음 커밋의 주인공,",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/src/components/sections/FinalCta.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        "바로 당신이에요"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/FinalCta.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mx-auto mt-4 max-w-md text-16 text-white/85 sm:text-20",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recruit"].generation,
                        "기와 함께 아이디어를 코드로, 코드를 서비스로 만들어요."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/FinalCta.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonLink"], {
                            href: "/apply",
                            variant: "white",
                            arrow: true,
                            className: "w-full sm:w-auto",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recruit"].generation,
                                "기 지원하기"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/FinalCta.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonLink"], {
                            href: "/apply#contact",
                            variant: "ghost-white",
                            className: "w-full sm:w-auto",
                            children: "문의하기"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/FinalCta.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/FinalCta.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/FinalCta.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/FinalCta.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(FinalCta, "SSsA37dxrIAAEaExKN2HPzXvPjc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = FinalCta;
var _c;
__turbopack_context__.k.register(_c, "FinalCta");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Manifesto.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Manifesto",
    ()=>Manifesto
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const tokens = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["manifesto"].split(" ").map((raw)=>{
    const highlighted = raw.startsWith("*");
    return {
        text: raw.replace(/\*/g, ""),
        highlighted
    };
});
function Word({ progress, range, highlighted, children }) {
    _s();
    const opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(progress, range, [
        0.14,
        1
    ]);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(progress, range, [
        6,
        0
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                style: {
                    opacity,
                    y
                },
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-block", highlighted && "text-brand"),
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Manifesto.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            " "
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Manifesto.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(Word, "nNLXSSmMeyHkLcxJU8DbAuS8h/Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = Word;
function Manifesto() {
    _s1();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: ref,
        offset: [
            "start 0.45",
            "end end"
        ]
    });
    const n = tokens.length;
    const barScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.85
    ], [
        0,
        1
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        "aria-label": "동아리 소개",
        className: "scroll-mt-16 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: "relative h-[140vh] sm:h-[160vh]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 flex h-dvh items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto w-full max-w-5xl px-5 md:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8 flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-mono text-14 font-semibold tracking-normal text-primary",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "opacity-60",
                                            children: "// "
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Manifesto.tsx",
                                            lineNumber: 52,
                                            columnNumber: 17
                                        }, this),
                                        "About DC&M"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Manifesto.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-[2px] flex-1 overflow-hidden rounded-full bg-gray-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                        className: "bg-brand h-full origin-left",
                                        style: {
                                            scaleX: barScale
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Manifesto.tsx",
                                        lineNumber: 55,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Manifesto.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Manifesto.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[clamp(1.75rem,0.9rem+3.6vw,3.6rem)] leading-[1.36] font-bold text-ink",
                            children: tokens.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Word, {
                                    progress: scrollYProgress,
                                    range: [
                                        i / n * 0.85,
                                        (i + 1) / n * 0.85
                                    ],
                                    highlighted: t.highlighted,
                                    children: t.text
                                }, i, false, {
                                    fileName: "[project]/src/components/sections/Manifesto.tsx",
                                    lineNumber: 63,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Manifesto.tsx",
                            lineNumber: 61,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Manifesto.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Manifesto.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Manifesto.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Manifesto.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s1(Manifesto, "2/IZpdx9xd28Y1ty+p7icM2C4/0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c1 = Manifesto;
var _c, _c1;
__turbopack_context__.k.register(_c, "Word");
__turbopack_context__.k.register(_c1, "Manifesto");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Stats.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Stats",
    ()=>Stats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SectionHeading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Counter({ value }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        amount: 0.8
    });
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const mv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(mv, {
        "Counter.useTransform[text]": (v)=>Math.round(v).toLocaleString("ko-KR")
    }["Counter.useTransform[text]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Counter.useEffect": ()=>{
            if (!inView) return;
            if (reduce) {
                mv.set(value);
                return;
            }
            const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(mv, value, {
                duration: 2,
                ease: [
                    0.16,
                    1,
                    0.3,
                    1
                ]
            });
            return ({
                "Counter.useEffect": ()=>controls.stop()
            })["Counter.useEffect"];
        }
    }["Counter.useEffect"], [
        inView,
        mv,
        value,
        reduce
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
        ref: ref,
        className: "tabular-nums",
        children: text
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Stats.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(Counter, "nQTFt42fL+clZkKxGlkY3S5HEzE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = Counter;
function Marquee({ items, reverse }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mask-fade-x group flex overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `flex shrink-0 gap-3 pr-3 group-hover:[animation-play-state:paused] ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`,
            children: [
                ...items,
                ...items,
                ...items,
                ...items
            ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    "aria-hidden": i >= items.length,
                    className: "shrink-0 rounded-full bg-white/[0.06] px-5 py-2.5 text-14 font-semibold text-gray-2 ring-1 ring-white/10 transition-colors hover:bg-primary hover:text-white",
                    children: item
                }, i, false, {
                    fileName: "[project]/src/components/sections/Stats.tsx",
                    lineNumber: 47,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Stats.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Stats.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_c1 = Marquee;
function Stats() {
    const half = Math.ceil(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["techStack"].length / 2);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-labelledby": "stats-title",
        className: "relative isolate overflow-hidden bg-ink py-24 text-white sm:py-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "absolute -top-40 left-1/2 -z-10 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-primary/35 blur-[140px]"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Stats.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "bg-grid absolute inset-0 -z-10 opacity-40 [mask-image:linear-gradient(to_bottom,#000,transparent_70%)]"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Stats.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl px-5 md:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
                        tone: "dark",
                        eyebrow: "DC&M in numbers",
                        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            id: "stats-title",
                            children: "숫자로 보는 DC&M"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Stats.tsx",
                            lineNumber: 80,
                            columnNumber: 18
                        }, this),
                        description: "2019년 작은 스터디에서 시작해, 지금은 이만큼 자랐어요."
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Stats.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                        className: "mt-14 grid grid-cols-2 gap-x-6 gap-y-12 sm:mt-20 lg:grid-cols-4",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stats"].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true,
                                    amount: 0.5
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: i * 0.08,
                                    ease: [
                                        0.22,
                                        1,
                                        0.36,
                                        1
                                    ]
                                },
                                className: "border-t border-white/10 pt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        className: "text-14 font-semibold text-gray-3 sm:text-16",
                                        children: s.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Stats.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        className: "mt-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-[linear-gradient(120deg,#fff_20%,#c9beff_60%,#ffdbfd)] bg-clip-text text-[clamp(3rem,2rem+4vw,5rem)] leading-none font-extrabold text-transparent",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Counter, {
                                                    value: s.value
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Stats.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Stats.tsx",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-1 text-24 font-bold text-light",
                                                children: s.unit
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Stats.tsx",
                                                lineNumber: 99,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Stats.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        className: "mt-3 text-14 text-gray-3",
                                        children: s.caption
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Stats.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, s.label, true, {
                                fileName: "[project]/src/components/sections/Stats.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Stats.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Stats.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-20 space-y-3 sm:mt-28",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-5 text-center text-14 font-semibold text-gray-4",
                        children: "우리가 다뤄온 기술들"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Stats.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Marquee, {
                        items: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["techStack"].slice(0, half)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Stats.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Marquee, {
                        items: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["techStack"].slice(half),
                        reverse: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Stats.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Stats.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Stats.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_c2 = Stats;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Counter");
__turbopack_context__.k.register(_c1, "Marquee");
__turbopack_context__.k.register(_c2, "Stats");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/hero/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$hero$2f$RecruitBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/hero/RecruitBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$hero$2f$Terminal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/hero/Terminal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$intro$2f$introState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/intro/introState.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const ease = [
    0.22,
    1,
    0.36,
    1
];
/** 단어가 아래에서 마스크를 뚫고 올라오는 토스식 타이틀 */ function RevealWord({ children, delay, play }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
            className: "inline-block",
            initial: {
                y: "105%"
            },
            animate: play ? {
                y: "0%"
            } : undefined,
            transition: {
                duration: 0.9,
                delay,
                ease
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/sections/hero/Hero.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/hero/Hero.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c = RevealWord;
/** 마우스를 따라 깊이감 있게 움직이는 요소 */ function Parallax({ mx, my, depth, className, children }) {
    _s();
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(mx, {
        "Parallax.useTransform[x]": (v)=>v * depth
    }["Parallax.useTransform[x]"]);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(my, {
        "Parallax.useTransform[y]": (v)=>v * depth
    }["Parallax.useTransform[y]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        className: className,
        style: {
            x,
            y
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/sections/hero/Hero.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(Parallax, "1SM6jigCkt/La/FbN03vH4jv/eI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c1 = Parallax;
function FloatingChip({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `animate-float rounded-2xl bg-white/75 px-4 py-3 font-mono text-[13px] tracking-normal text-gray-5 shadow-m ring-1 ring-white backdrop-blur-md ${className ?? ""}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/sections/hero/Hero.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_c2 = FloatingChip;
function Hero() {
    _s1();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 첫 방문 인트로가 떠 있으면, 걷히기 시작할 때까지 등장 연출을 미뤄요.
    const play = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$intro$2f$introState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIntroRevealed"])();
    // 포인터 패럴랙스 (-0.5 ~ 0.5)
    const rawX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const rawY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const mx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(rawX, {
        stiffness: 60,
        damping: 18,
        mass: 0.6
    });
    const my = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(rawY, {
        stiffness: 60,
        damping: 18,
        mass: 0.6
    });
    const onPointerMove = (e)=>{
        if (e.pointerType !== "mouse") return;
        const rect = e.currentTarget.getBoundingClientRect();
        rawX.set((e.clientX - rect.left) / rect.width - 0.5);
        rawY.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    // 애플식 스크롤 연출: 기울어진 터미널이 스크롤하면 똑바로 펴져요
    const { scrollYProgress: stageProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: stageRef,
        offset: [
            "start end",
            "start 0.2"
        ]
    });
    const rotateX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(stageProgress, [
        0,
        1
    ], [
        26,
        0
    ]);
    const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(stageProgress, [
        0,
        1
    ], [
        0.88,
        1
    ]);
    // 히어로 카피는 스크롤하면 살짝 흐려지며 멀어져요
    const { scrollYProgress: heroProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: sectionRef,
        offset: [
            "start start",
            "end start"
        ]
    });
    const copyOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(heroProgress, [
        0,
        0.35
    ], [
        1,
        0
    ]);
    const copyY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(heroProgress, [
        0,
        0.35
    ], [
        0,
        -60
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "top",
        ref: sectionRef,
        onPointerMove: onPointerMove,
        className: "relative isolate overflow-hidden bg-[linear-gradient(to_bottom,var(--color-mist)_0%,var(--color-mist)_55%,#fff_100%)] pt-32 sm:pt-40",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_30%,#000_30%,transparent_100%)]"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/hero/Hero.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Parallax, {
                mx: mx,
                my: my,
                depth: -50,
                className: "absolute -top-24 left-[8%] -z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "size-[380px] rounded-full bg-light/60 blur-[90px]"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/hero/Hero.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/hero/Hero.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Parallax, {
                mx: mx,
                my: my,
                depth: 70,
                className: "absolute top-10 right-[4%] -z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "size-[420px] rounded-full bg-accent/80 blur-[100px]"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/hero/Hero.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/hero/Hero.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Parallax, {
                mx: mx,
                my: my,
                depth: 30,
                className: "absolute top-[38%] left-[30%] -z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "size-[360px] rounded-full bg-secondary/30 blur-[110px]"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/hero/Hero.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/hero/Hero.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                "aria-hidden": true,
                style: {
                    opacity: copyOpacity
                },
                className: "pointer-events-none absolute inset-0 hidden lg:block",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Parallax, {
                        mx: mx,
                        my: my,
                        depth: -36,
                        className: "absolute top-[22%] left-[6%]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingChip, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-primary",
                                    children: "git"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/hero/Hero.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this),
                                ' commit -m "첫 배포"'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/hero/Hero.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/hero/Hero.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Parallax, {
                        mx: mx,
                        my: my,
                        depth: 44,
                        className: "absolute top-[18%] right-[7%]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingChip, {
                            className: "[animation-delay:-2s]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-positive",
                                    children: "✓"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/hero/Hero.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this),
                                " Build succeeded"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/hero/Hero.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/hero/Hero.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Parallax, {
                        mx: mx,
                        my: my,
                        depth: -24,
                        className: "absolute top-[46%] left-[10%]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingChip, {
                            className: "[animation-delay:-4s] font-sans font-semibold tracking-[-0.02em]",
                            children: "🚀 PR #128 merged"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/hero/Hero.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/hero/Hero.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Parallax, {
                        mx: mx,
                        my: my,
                        depth: 30,
                        className: "absolute top-[44%] right-[9%]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingChip, {
                            className: "[animation-delay:-1s] font-sans font-semibold tracking-[-0.02em]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-brand",
                                    children: [
                                        "+ ",
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recruit"].generation,
                                        "기"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/hero/Hero.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this),
                                " 합류 대기 중"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/hero/Hero.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/hero/Hero.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/hero/Hero.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                style: {
                    opacity: copyOpacity,
                    y: copyY
                },
                className: "relative mx-auto max-w-6xl px-5 text-center md:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 12,
                            scale: 0.96
                        },
                        animate: play ? {
                            opacity: 1,
                            y: 0,
                            scale: 1
                        } : undefined,
                        transition: {
                            duration: 0.6,
                            ease
                        },
                        className: "flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$hero$2f$RecruitBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RecruitBadge"], {}, void 0, false, {
                            fileName: "[project]/src/components/sections/hero/Hero.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/hero/Hero.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "mt-6 text-display font-extrabold text-ink",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RevealWord, {
                                    play: play,
                                    delay: 0.1,
                                    children: "아이디어가"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/hero/Hero.tsx",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/hero/Hero.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RevealWord, {
                                        play: play,
                                        delay: 0.22,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-brand",
                                                children: "코드"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/hero/Hero.tsx",
                                                lineNumber: 182,
                                                columnNumber: 15
                                            }, this),
                                            "가"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/hero/Hero.tsx",
                                        lineNumber: 181,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RevealWord, {
                                        play: play,
                                        delay: 0.3,
                                        children: "되는"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/hero/Hero.tsx",
                                        lineNumber: 184,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RevealWord, {
                                        play: play,
                                        delay: 0.38,
                                        children: "곳"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/hero/Hero.tsx",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/hero/Hero.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/hero/Hero.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].p, {
                        initial: {
                            opacity: 0,
                            y: 16,
                            filter: "blur(6px)"
                        },
                        animate: play ? {
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)"
                        } : undefined,
                        transition: {
                            duration: 0.8,
                            delay: 0.55,
                            ease
                        },
                        className: "mx-auto mt-6 max-w-[34rem] text-16 font-medium text-gray-4 sm:text-20",
                        children: [
                            "기획부터 배포까지, 함께 만들고 함께 성장하는",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                className: "hidden sm:block"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/hero/Hero.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this),
                            "개발 동아리 ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["club"].name,
                            "에서 ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recruit"].generation,
                            "기 신입 부원을 찾고 있어요."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/hero/Hero.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 16
                        },
                        animate: play ? {
                            opacity: 1,
                            y: 0
                        } : undefined,
                        transition: {
                            duration: 0.7,
                            delay: 0.7,
                            ease
                        },
                        className: "mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonLink"], {
                                href: "/#recruit",
                                arrow: true,
                                className: "w-full sm:w-auto",
                                children: "모집 안내 보기"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/hero/Hero.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonLink"], {
                                href: "/#about",
                                variant: "secondary",
                                className: "w-full sm:w-auto",
                                children: "동아리 둘러보기"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/hero/Hero.tsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/hero/Hero.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/hero/Hero.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: stageRef,
                className: "relative mx-auto mt-16 max-w-4xl px-4 pb-24 [perspective:1400px] sm:mt-20 sm:px-8 sm:pb-32",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 60
                        },
                        animate: play ? {
                            opacity: 1,
                            y: 0
                        } : undefined,
                        transition: {
                            duration: 1,
                            delay: 0.85,
                            ease
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                            style: {
                                rotateX,
                                scale,
                                transformOrigin: "50% 0%"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$hero$2f$Terminal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Terminal"], {}, void 0, false, {
                                fileName: "[project]/src/components/sections/hero/Hero.tsx",
                                lineNumber: 226,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/hero/Hero.tsx",
                            lineNumber: 225,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/hero/Hero.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": true,
                        className: "absolute inset-x-16 bottom-16 -z-10 h-24 rounded-full bg-primary/25 blur-3xl sm:bottom-24"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/hero/Hero.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/hero/Hero.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/hero/Hero.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
_s1(Hero, "qOTZybPGJYUlcdM30PNxeAiECO8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$intro$2f$introState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIntroRevealed"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c3 = Hero;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "RevealWord");
__turbopack_context__.k.register(_c1, "Parallax");
__turbopack_context__.k.register(_c2, "FloatingChip");
__turbopack_context__.k.register(_c3, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/hero/RecruitBadge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RecruitBadge",
    ()=>RecruitBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useNow.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$recruit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/recruit.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SmartLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SmartLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function RecruitBadge() {
    _s();
    const now = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNow"])();
    const phase = now === null ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$recruit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPhase"])(now);
    const days = now === null ? null : Math.floor((Date.parse(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recruit"].applyEnd) - now) / 86_400_000);
    const label = phase === "upcoming" ? `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recruit"].generation}기 모집 예정 · ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$recruit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatShortDate"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recruit"].applyStart)} 오픈` : phase === "closed" ? `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recruit"].generation}기 모집이 마감되었어요` : `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recruit"].generation}기 신입 부원 모집 중`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SmartLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmartLink"], {
        href: "/#recruit",
        className: "group inline-flex items-center gap-2 rounded-full bg-white/80 py-1.5 pr-3 pl-2 text-14 font-semibold text-gray-5 shadow-s ring-1 ring-gray-2/80 backdrop-blur transition-shadow hover:shadow-m",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "relative flex size-2.5 items-center justify-center",
                children: [
                    phase !== "closed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute inline-flex size-full animate-ping rounded-full bg-primary/60"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/hero/RecruitBadge.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `relative inline-flex size-2 rounded-full ${phase === "closed" ? "bg-gray-3" : "bg-primary"}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/hero/RecruitBadge.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/hero/RecruitBadge.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/sections/hero/RecruitBadge.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            phase === "open" && days !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "rounded-full bg-primary px-2 py-0.5 text-12 font-bold text-white tabular-nums",
                children: days <= 0 ? "D-Day" : `D-${days}`
            }, void 0, false, {
                fileName: "[project]/src/components/sections/hero/RecruitBadge.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight"], {
                className: "size-3.5 text-gray-3 transition-transform group-hover:translate-x-0.5"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/hero/RecruitBadge.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/hero/RecruitBadge.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(RecruitBadge, "t70lBptlS54ZF8dxX2pScDbDMW0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNow"]
    ];
});
_c = RecruitBadge;
var _c;
__turbopack_context__.k.register(_c, "RecruitBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/hero/Terminal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Terminal",
    ()=>Terminal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$recruit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/recruit.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$intro$2f$introState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/intro/introState.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const INTRO = [
    "whoami",
    "ls activities/",
    "dcm recruit --status"
];
const CHIPS = [
    "help",
    "whoami",
    "schedule",
    "tracks",
    "apply"
];
const COMMANDS = [
    "help",
    "whoami",
    "ls",
    "schedule",
    "tracks",
    "recruit",
    "apply",
    "date",
    "clear",
    "echo"
];
const sleep = (ms)=>new Promise((r)=>setTimeout(r, ms));
function ddayLabel(now) {
    const days = Math.floor((Date.parse(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recruit"].applyEnd) - now) / 86_400_000);
    return days <= 0 ? "D-Day" : `D-${days}`;
}
function run(input, onApply) {
    const [cmd, ...args] = input.trim().split(/\s+/);
    const now = Date.now();
    switch(cmd){
        case "":
            return [];
        case "help":
            return [
                [
                    "muted",
                    "사용할 수 있는 명령어"
                ],
                [
                    "out",
                    "  whoami      DC&M 한 줄 소개"
                ],
                [
                    "out",
                    "  ls          활동 분야 보기"
                ],
                [
                    "out",
                    "  schedule    8기 모집 일정"
                ],
                [
                    "out",
                    "  tracks      모집 트랙"
                ],
                [
                    "out",
                    "  recruit     모집 현황"
                ],
                [
                    "out",
                    "  apply       모집 안내로 이동"
                ],
                [
                    "out",
                    "  clear       화면 지우기"
                ]
            ];
        case "whoami":
            return [
                [
                    "accent",
                    `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["club"].name} · ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["club"].tagline}`
                ],
                [
                    "muted",
                    `since ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["club"].founded} · ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stats"][1].value} members · ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stats"][2].value} projects`
                ]
            ];
        case "ls":
            return [
                [
                    "dir",
                    "study/   project/   hackathon/   seminar/   network/"
                ]
            ];
        case "schedule":
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recruit"].steps.map((s)=>[
                    "out",
                    `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$recruit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRange"])(s.start, s.end)}\t${s.title}`,
                    13
                ]);
        case "tracks":
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tracks"].map((t)=>[
                    "out",
                    `${t.name}\t${t.stack.join(", ")}`,
                    7
                ]);
        case "dcm":
        case "dcnm":
        case "recruit":
            {
                const phase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$recruit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPhase"])(now);
                if (phase === "open") return [
                    [
                        "ok",
                        `● ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recruit"].generation}기 신입 부원 모집 중`
                    ],
                    [
                        "muted",
                        `  서류 접수 ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$recruit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRange"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recruit"].applyStart, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recruit"].applyEnd)}`
                    ],
                    [
                        "muted",
                        `  마감까지 ${ddayLabel(now)}`
                    ]
                ];
                if (phase === "upcoming") return [
                    [
                        "accent",
                        `○ ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recruit"].generation}기 모집 예정 · ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$recruit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRange"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recruit"].applyStart)} 오픈`
                    ]
                ];
                return [
                    [
                        "muted",
                        `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recruit"].generation}기 모집이 마감되었어요. 다음 기수에서 만나요!`
                    ]
                ];
            }
        case "apply":
            onApply();
            return [
                [
                    "ok",
                    "✓ 모집 안내로 이동할게요 ↓"
                ]
            ];
        case "date":
            return [
                [
                    "out",
                    new Intl.DateTimeFormat("ko-KR", {
                        timeZone: "Asia/Seoul",
                        dateStyle: "full",
                        timeStyle: "medium"
                    }).format(now)
                ]
            ];
        case "echo":
            return [
                [
                    "out",
                    args.join(" ")
                ]
            ];
        case "clear":
            return "clear";
        case "sudo":
            return [
                [
                    "err",
                    "권한이 없어요 🙅"
                ],
                [
                    "muted",
                    "대신 8기에 지원해서 정식 멤버 권한을 받아보는 건 어때요? → apply"
                ]
            ];
        case "exit":
            return [
                [
                    "muted",
                    "아직 보여드릴 게 많아요. 스크롤을 내려보세요 ↓"
                ]
            ];
        default:
            return [
                [
                    "err",
                    `command not found: ${cmd}`
                ],
                [
                    "muted",
                    "help 를 입력하면 쓸 수 있는 명령어를 볼 수 있어요"
                ]
            ];
    }
}
const kindClass = {
    cmd: "text-white",
    out: "text-gray-2",
    ok: "text-[#5ee0a0]",
    err: "text-[#ff8a8f]",
    muted: "text-gray-3",
    accent: "text-light font-semibold",
    dir: "text-secondary"
};
function Prompt() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "mr-2 shrink-0 select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-secondary",
                children: "~/dcnm"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/hero/Terminal.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-light",
                children: " $"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/hero/Terminal.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/hero/Terminal.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_c = Prompt;
function Terminal() {
    _s();
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bodyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const idRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const historyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const historyIndexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(-1);
    const [lines, setLines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [typing, setTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(rootRef, {
        once: true,
        amount: 0.35
    });
    // 첫 방문 인트로 뒤에서 미리 재생되지 않게, 인트로가 걷힌 뒤에 시작해요.
    const revealed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$intro$2f$introState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIntroRevealed"])();
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const lenis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLenis"])();
    const push = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Terminal.useCallback[push]": (items)=>{
            setLines({
                "Terminal.useCallback[push]": (prev)=>[
                        ...prev,
                        ...items.map({
                            "Terminal.useCallback[push]": ([kind, text, col])=>({
                                    id: idRef.current++,
                                    kind,
                                    text,
                                    col
                                })
                        }["Terminal.useCallback[push]"])
                    ]
            }["Terminal.useCallback[push]"]);
        }
    }["Terminal.useCallback[push]"], []);
    const goToRecruit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Terminal.useCallback[goToRecruit]": ()=>{
            window.setTimeout({
                "Terminal.useCallback[goToRecruit]": ()=>{
                    const el = document.getElementById("recruit");
                    if (!el) return;
                    if (lenis) lenis.scrollTo(el, {
                        duration: 1.6
                    });
                    else el.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }["Terminal.useCallback[goToRecruit]"], 650);
        }
    }["Terminal.useCallback[goToRecruit]"], [
        lenis
    ]);
    const execute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Terminal.useCallback[execute]": (cmd)=>{
            push([
                [
                    "cmd",
                    cmd
                ]
            ]);
            const result = run(cmd, goToRecruit);
            if (result === "clear") setLines([]);
            else push(result);
        }
    }["Terminal.useCallback[execute]"], [
        push,
        goToRecruit
    ]);
    /** 사람이 치는 것처럼 한 글자씩 입력한 뒤 실행 */ const typeAndRun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Terminal.useCallback[typeAndRun]": async (cmd, isCancelled = ({
            "Terminal.useCallback[typeAndRun]": ()=>false
        })["Terminal.useCallback[typeAndRun]"])=>{
            if (reduce) {
                execute(cmd);
                return;
            }
            for(let i = 1; i <= cmd.length; i++){
                if (isCancelled()) return;
                setTyping(cmd.slice(0, i));
                await sleep(38 + Math.random() * 45);
            }
            await sleep(160);
            if (isCancelled()) return;
            setTyping(null);
            execute(cmd);
        }
    }["Terminal.useCallback[typeAndRun]"], [
        execute,
        reduce
    ]);
    // 화면에 들어오면 인트로 스크립트 재생
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Terminal.useEffect": ()=>{
            if (!inView || !revealed) return;
            let cancelled = false;
            const isCancelled = {
                "Terminal.useEffect.isCancelled": ()=>cancelled
            }["Terminal.useEffect.isCancelled"];
            ({
                "Terminal.useEffect": async ()=>{
                    await sleep(reduce ? 0 : 500);
                    for (const cmd of INTRO){
                        if (cancelled) return;
                        await typeAndRun(cmd, isCancelled);
                        await sleep(reduce ? 0 : 420);
                    }
                    if (cancelled) return;
                    push([
                        [
                            "muted",
                            "명령어를 직접 입력하거나 아래 버튼을 눌러보세요. (help)"
                        ]
                    ]);
                    setBusy(false);
                }
            })["Terminal.useEffect"]();
            return ({
                "Terminal.useEffect": ()=>{
                    cancelled = true;
                    setTyping(null);
                }
            })["Terminal.useEffect"];
        // 인트로는 한 번만 재생
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["Terminal.useEffect"], [
        inView,
        revealed
    ]);
    // 새 줄이 생기면 터미널 안에서만 맨 아래로 스크롤
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Terminal.useEffect": ()=>{
            const el = bodyRef.current;
            if (el) el.scrollTop = el.scrollHeight;
        }
    }["Terminal.useEffect"], [
        lines,
        typing
    ]);
    const onChip = async (cmd)=>{
        if (busy) return;
        setBusy(true);
        setValue("");
        await typeAndRun(cmd);
        historyRef.current.unshift(cmd);
        setBusy(false);
    };
    const onKeyDown = (e)=>{
        if (e.key === "Enter") {
            e.preventDefault();
            const cmd = value.trim();
            execute(cmd);
            if (cmd) historyRef.current.unshift(cmd);
            historyIndexRef.current = -1;
            setValue("");
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            const next = Math.min(historyIndexRef.current + 1, historyRef.current.length - 1);
            if (next >= 0) {
                historyIndexRef.current = next;
                setValue(historyRef.current[next]);
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            const next = historyIndexRef.current - 1;
            historyIndexRef.current = Math.max(next, -1);
            setValue(next >= 0 ? historyRef.current[next] : "");
        } else if (e.key === "Tab") {
            const matches = COMMANDS.filter((c)=>value && c.startsWith(value));
            if (matches.length === 1) {
                e.preventDefault();
                setValue(matches[0] + " ");
            }
        } else if (e.key === "l" && e.ctrlKey) {
            e.preventDefault();
            setLines([]);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: rootRef,
        className: "overflow-hidden rounded-[20px] bg-ink text-left shadow-l ring-1 ring-ink/10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-11 items-center gap-2 border-b border-white/[0.06] bg-white/[0.03] px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "size-3 rounded-full bg-[#ff5f57]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/hero/Terminal.tsx",
                        lineNumber: 269,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "size-3 rounded-full bg-[#febc2e]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/hero/Terminal.tsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "size-3 rounded-full bg-[#28c840]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/hero/Terminal.tsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex-1 text-center font-mono text-12 tracking-normal text-gray-4",
                        children: "dcnm — zsh"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/hero/Terminal.tsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-[52px]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/hero/Terminal.tsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/hero/Terminal.tsx",
                lineNumber: 268,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: bodyRef,
                "data-lenis-prevent": true,
                onClick: ()=>!busy && inputRef.current?.focus({
                        preventScroll: true
                    }),
                className: "no-scrollbar h-[280px] cursor-text overflow-y-auto px-4 py-4 font-mono text-[13px] leading-[1.75] tracking-normal sm:h-[340px] sm:px-6 sm:text-14",
                children: [
                    lines.map((line)=>line.kind === "cmd" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Prompt, {}, void 0, false, {
                                    fileName: "[project]/src/components/sections/hero/Terminal.tsx",
                                    lineNumber: 288,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white",
                                    children: line.text
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/hero/Terminal.tsx",
                                    lineNumber: 289,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, line.id, true, {
                            fileName: "[project]/src/components/sections/hero/Terminal.tsx",
                            lineNumber: 287,
                            columnNumber: 13
                        }, this) : line.text.includes("\t") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex pl-[1em]", kindClass[line.kind]),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "shrink-0",
                                    style: {
                                        width: `${line.col ?? 8}em`
                                    },
                                    children: line.text.split("\t")[0]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/hero/Terminal.tsx",
                                    lineNumber: 293,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: line.text.split("\t")[1]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/hero/Terminal.tsx",
                                    lineNumber: 296,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, line.id, true, {
                            fileName: "[project]/src/components/sections/hero/Terminal.tsx",
                            lineNumber: 292,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("whitespace-pre-wrap", kindClass[line.kind]),
                            children: line.text || " "
                        }, line.id, false, {
                            fileName: "[project]/src/components/sections/hero/Terminal.tsx",
                            lineNumber: 299,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Prompt, {}, void 0, false, {
                                fileName: "[project]/src/components/sections/hero/Terminal.tsx",
                                lineNumber: 306,
                                columnNumber: 11
                            }, this),
                            busy ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white",
                                        children: typing
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/hero/Terminal.tsx",
                                        lineNumber: 309,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-px inline-block h-[1.15em] w-[0.6em] animate-blink bg-light/90"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/hero/Terminal.tsx",
                                        lineNumber: 310,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/hero/Terminal.tsx",
                                lineNumber: 308,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: inputRef,
                                value: value,
                                onChange: (e)=>setValue(e.target.value),
                                onKeyDown: onKeyDown,
                                "aria-label": "터미널 명령어 입력",
                                autoComplete: "off",
                                autoCapitalize: "off",
                                autoCorrect: "off",
                                spellCheck: false,
                                enterKeyHint: "send",
                                placeholder: "help",
                                className: "min-w-0 flex-1 bg-transparent text-white caret-light outline-none placeholder:text-gray-5 focus-visible:outline-none"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/hero/Terminal.tsx",
                                lineNumber: 313,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/hero/Terminal.tsx",
                        lineNumber: 305,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/hero/Terminal.tsx",
                lineNumber: 279,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "no-scrollbar flex items-center gap-2 overflow-x-auto border-t border-white/[0.06] px-4 py-3 sm:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "shrink-0 text-12 text-gray-4",
                        children: "눌러보기"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/hero/Terminal.tsx",
                        lineNumber: 333,
                        columnNumber: 9
                    }, this),
                    CHIPS.map((cmd)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            disabled: busy,
                            onClick: ()=>onChip(cmd),
                            className: "shrink-0 rounded-full bg-white/[0.06] px-3 py-1.5 font-mono text-12 tracking-normal text-gray-2 ring-1 ring-white/10 transition-[background-color,transform,opacity] hover:bg-primary hover:text-white active:scale-95 disabled:pointer-events-none disabled:opacity-40",
                            children: cmd
                        }, cmd, false, {
                            fileName: "[project]/src/components/sections/hero/Terminal.tsx",
                            lineNumber: 335,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/hero/Terminal.tsx",
                lineNumber: 332,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/hero/Terminal.tsx",
        lineNumber: 263,
        columnNumber: 5
    }, this);
}
_s(Terminal, "HYWhGK9+pdghOsMLDC8I9UGfN2U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$intro$2f$introState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIntroRevealed"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLenis"]
    ];
});
_c1 = Terminal;
var _c, _c1;
__turbopack_context__.k.register(_c, "Prompt");
__turbopack_context__.k.register(_c1, "Terminal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/recruit/Countdown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Countdown",
    ()=>Countdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useNow.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$recruit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/recruit.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
/** 숫자가 바뀔 때 위에서 아래로 굴러 내려오는 자릿수 */ function RollingDigit({ digit }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "relative inline-block h-[1.15em] w-[0.62em] overflow-hidden align-bottom",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            initial: false,
            mode: "popLayout",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                initial: {
                    y: "-100%",
                    opacity: 0
                },
                animate: {
                    y: "0%",
                    opacity: 1
                },
                exit: {
                    y: "100%",
                    opacity: 0
                },
                transition: {
                    duration: 0.45,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ]
                },
                className: "absolute inset-0 grid place-items-center",
                children: digit
            }, digit, false, {
                fileName: "[project]/src/components/sections/recruit/Countdown.tsx",
                lineNumber: 14,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/recruit/Countdown.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/recruit/Countdown.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = RollingDigit;
function Unit({ value, label }) {
    const text = value === null ? "--" : String(value).padStart(2, "0");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-1 flex-col items-center rounded-2xl bg-white/12 py-3 ring-1 ring-white/15 backdrop-blur-sm sm:py-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[clamp(2rem,1.4rem+2.4vw,3rem)] leading-none font-extrabold tabular-nums",
                children: text.split("").map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RollingDigit, {
                        digit: d
                    }, `${text.length}-${i}`, false, {
                        fileName: "[project]/src/components/sections/recruit/Countdown.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/recruit/Countdown.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mt-1.5 text-12 font-semibold text-white/70",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/sections/recruit/Countdown.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/recruit/Countdown.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c1 = Unit;
function Countdown() {
    _s();
    const now = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNow"])();
    const phase = now === null ? "open" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$recruit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPhase"])(now);
    const target = phase === "upcoming" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recruit"].applyStart : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recruit"].applyEnd;
    const parts = now === null ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$recruit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitDuration"])(Date.parse(target) - now);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative isolate overflow-hidden rounded-[28px] bg-primary p-6 text-white shadow-m sm:p-9",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "bg-brand-deep absolute inset-0 -z-10"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/recruit/Countdown.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "absolute -top-24 -right-16 -z-10 size-72 rounded-full bg-accent/40 blur-3xl"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/recruit/Countdown.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-12 font-bold ring-1 ring-white/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `size-1.5 rounded-full ${phase === "closed" ? "bg-gray-3" : "animate-pulse bg-white"}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/recruit/Countdown.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            phase === "upcoming" ? "모집 예정" : phase === "closed" ? "모집 마감" : "서류 접수 중"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/recruit/Countdown.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-12 tracking-normal text-white/70",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recruit"].generation,
                            "th generation"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/recruit/Countdown.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/recruit/Countdown.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            phase === "closed" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-30 font-extrabold",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recruit"].generation,
                            "기 모집이 마감되었어요"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/recruit/Countdown.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-16 text-white/80",
                        children: "관심 가져주셔서 고마워요. 다음 기수 모집 소식을 가장 먼저 알려드릴게요."
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/recruit/Countdown.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/recruit/Countdown.tsx",
                lineNumber: 70,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-8 text-16 font-semibold text-white/85 sm:text-20",
                        children: phase === "upcoming" ? "서류 접수 시작까지" : "서류 마감까지"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/recruit/Countdown.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex gap-2 sm:gap-3",
                        role: "timer",
                        "aria-live": "off",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Unit, {
                                value: parts?.days ?? null,
                                label: "일"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/recruit/Countdown.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Unit, {
                                value: parts?.hours ?? null,
                                label: "시간"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/recruit/Countdown.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Unit, {
                                value: parts?.minutes ?? null,
                                label: "분"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/recruit/Countdown.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Unit, {
                                value: parts?.seconds ?? null,
                                label: "초"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/recruit/Countdown.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/recruit/Countdown.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-14 text-white/75",
                        children: [
                            "서류 접수 ",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$recruit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRange"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recruit"].applyStart, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recruit"].applyEnd),
                            " 23:59까지"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/recruit/Countdown.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/recruit/Countdown.tsx",
                lineNumber: 79,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 flex flex-col gap-2.5 sm:flex-row",
                children: [
                    phase === "closed" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonLink"], {
                        href: "/apply",
                        variant: "white",
                        arrow: true,
                        className: "sm:flex-1",
                        children: "다음 기수 소식 받기"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/recruit/Countdown.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonLink"], {
                        href: "/apply",
                        variant: "white",
                        arrow: true,
                        className: "sm:flex-1",
                        children: "지원서 작성하기"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/recruit/Countdown.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonLink"], {
                        href: "/apply#contact",
                        variant: "ghost-white",
                        className: "sm:w-auto",
                        children: "문의하기"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/recruit/Countdown.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/recruit/Countdown.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/recruit/Countdown.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(Countdown, "t70lBptlS54ZF8dxX2pScDbDMW0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNow"]
    ];
});
_c2 = Countdown;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "RollingDigit");
__turbopack_context__.k.register(_c1, "Unit");
__turbopack_context__.k.register(_c2, "Countdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/recruit/Timeline.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Timeline",
    ()=>Timeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useNow.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$recruit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/recruit.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function Timeline() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const now = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNow"])();
    const current = now === null ? -2 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$recruit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentStepIndex"])(now);
    // 스크롤하면 세로선이 채워져요
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: ref,
        offset: [
            "start 0.75",
            "end 0.55"
        ]
    });
    const fill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(scrollYProgress, {
        stiffness: 120,
        damping: 28
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-[28px] bg-mist p-6 ring-1 ring-gray-1 sm:p-9",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-20 font-bold text-ink",
                children: "모집 일정"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/recruit/Timeline.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                ref: ref,
                className: "relative mt-7",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": true,
                        className: "absolute top-4 bottom-4 left-[15px] w-[2px] rounded-full bg-gray-2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/recruit/Timeline.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                        "aria-hidden": true,
                        className: "bg-brand absolute top-4 bottom-4 left-[15px] w-[2px] origin-top rounded-full",
                        style: {
                            scaleY: fill
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/recruit/Timeline.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recruit"].steps.map((step, i)=>{
                        const status = current === -2 ? "unknown" : i < current ? "done" : i === current ? "current" : "upcoming";
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].li, {
                            initial: {
                                opacity: 0,
                                x: -12
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: true,
                                amount: 0.8
                            },
                            transition: {
                                duration: 0.6,
                                delay: i * 0.05
                            },
                            className: "relative flex gap-4 pb-8 last:pb-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative z-10 grid size-8 shrink-0 place-items-center rounded-full text-12 font-bold transition-colors", status === "done" && "bg-primary text-white", status === "current" && "bg-white text-primary ring-2 ring-primary", (status === "upcoming" || status === "unknown") && "bg-white text-gray-3 ring-1 ring-gray-2"),
                                    children: [
                                        status === "current" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute inset-0 animate-ping rounded-full ring-2 ring-primary/50"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/recruit/Timeline.tsx",
                                            lineNumber: 53,
                                            columnNumber: 19
                                        }, this),
                                        status === "done" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Check"], {
                                            className: "size-4",
                                            strokeWidth: 3
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/recruit/Timeline.tsx",
                                            lineNumber: 55,
                                            columnNumber: 38
                                        }, this) : i + 1
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/recruit/Timeline.tsx",
                                    lineNumber: 43,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-0.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-16 font-bold sm:text-20", status === "upcoming" ? "text-gray-5" : "text-ink"),
                                                    children: step.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/recruit/Timeline.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 19
                                                }, this),
                                                status === "current" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-full bg-primary px-2 py-0.5 text-12 font-bold text-white",
                                                    children: "진행 중"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/recruit/Timeline.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/recruit/Timeline.tsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-0.5 font-mono text-12 font-semibold tracking-normal text-primary sm:text-14",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$recruit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRange"])(step.start, step.end)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/recruit/Timeline.tsx",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1.5 text-14 text-gray-4",
                                            children: step.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/recruit/Timeline.tsx",
                                            lineNumber: 76,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/recruit/Timeline.tsx",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, step.title, true, {
                            fileName: "[project]/src/components/sections/recruit/Timeline.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/recruit/Timeline.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/recruit/Timeline.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(Timeline, "s2vLhmxtHgqNkt8n1R+9/TbOW0Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNow"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c = Timeline;
var _c;
__turbopack_context__.k.register(_c, "Timeline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/recruit/Tracks.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tracks",
    ()=>Tracks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Tracks() {
    _s();
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tracks"][0].id);
    const active = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tracks"].find((t)=>t.id === activeId) ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tracks"][0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-16 sm:mt-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-24 font-bold text-ink sm:text-30",
                            children: "모집 트랙"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/recruit/Tracks.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-16 text-gray-4",
                            children: "관심 있는 트랙을 눌러보세요. 지원할 때 1지망·2지망을 고를 수 있어요."
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/recruit/Tracks.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/recruit/Tracks.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/recruit/Tracks.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "tablist",
                "aria-label": "모집 트랙",
                className: "no-scrollbar mt-6 flex w-full gap-1 overflow-x-auto rounded-2xl bg-gray-1 p-1.5 sm:inline-flex sm:w-auto",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tracks"].map((t)=>{
                    const selected = t.id === activeId;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        role: "tab",
                        id: `tab-${t.id}`,
                        "aria-selected": selected,
                        "aria-controls": `panel-${t.id}`,
                        onClick: ()=>setActiveId(t.id),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex-1 shrink-0 rounded-xl px-4 py-2.5 text-14 font-bold whitespace-nowrap transition-colors sm:flex-none sm:px-6 sm:text-16", selected ? "text-ink" : "text-gray-4 hover:text-gray-5"),
                        children: [
                            selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                                layoutId: "track-pill",
                                className: "absolute inset-0 rounded-xl bg-white shadow-s",
                                transition: {
                                    type: "spring",
                                    stiffness: 420,
                                    damping: 34
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/recruit/Tracks.tsx",
                                lineNumber: 44,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative",
                                children: t.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/recruit/Tracks.tsx",
                                lineNumber: 50,
                                columnNumber: 15
                            }, this)
                        ]
                    }, t.id, true, {
                        fileName: "[project]/src/components/sections/recruit/Tracks.tsx",
                        lineNumber: 31,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/sections/recruit/Tracks.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    initial: false,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                        role: "tabpanel",
                        id: `panel-${active.id}`,
                        "aria-labelledby": `tab-${active.id}`,
                        initial: {
                            opacity: 0,
                            y: 14
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -10
                        },
                        transition: {
                            duration: 0.3,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ]
                        },
                        className: "grid gap-5 rounded-[28px] bg-white p-6 shadow-s ring-1 ring-gray-1 sm:p-9 md:grid-cols-[1.1fr_1fr] md:gap-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-24 font-bold text-ink",
                                        children: active.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/recruit/Tracks.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1.5 text-16 text-gray-4",
                                        children: active.summary
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/recruit/Tracks.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-6 space-y-3",
                                        children: active.learn.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].li, {
                                                initial: {
                                                    opacity: 0,
                                                    x: -8
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                transition: {
                                                    delay: 0.08 + i * 0.06
                                                },
                                                className: "flex gap-3 text-16 text-gray-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-mist text-primary",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Check"], {
                                                            className: "size-3.5",
                                                            strokeWidth: 3
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/recruit/Tracks.tsx",
                                                            lineNumber: 82,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/recruit/Tracks.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 21
                                                    }, this),
                                                    item
                                                ]
                                            }, item, true, {
                                                fileName: "[project]/src/components/sections/recruit/Tracks.tsx",
                                                lineNumber: 74,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/recruit/Tracks.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-6 flex flex-wrap gap-2",
                                        children: active.stack.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "rounded-lg bg-mist px-3 py-1.5 text-14 font-semibold text-primary",
                                                children: s
                                            }, s, false, {
                                                fileName: "[project]/src/components/sections/recruit/Tracks.tsx",
                                                lineNumber: 90,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/recruit/Tracks.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/recruit/Tracks.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-hidden rounded-2xl bg-ink shadow-m",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 border-b border-white/[0.06] px-4 py-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "size-2.5 rounded-full bg-white/15"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/recruit/Tracks.tsx",
                                                lineNumber: 102,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "size-2.5 rounded-full bg-white/15"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/recruit/Tracks.tsx",
                                                lineNumber: 103,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "size-2.5 rounded-full bg-white/15"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/recruit/Tracks.tsx",
                                                lineNumber: 104,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 font-mono text-12 tracking-normal text-gray-4",
                                                children: [
                                                    active.id,
                                                    ".dcm"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/recruit/Tracks.tsx",
                                                lineNumber: 105,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/recruit/Tracks.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                        className: "no-scrollbar overflow-x-auto p-5 font-mono text-[13px] leading-[1.9] tracking-normal sm:text-14",
                                        children: active.snippet.map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    filter: "blur(4px)"
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    filter: "blur(0px)"
                                                },
                                                transition: {
                                                    delay: 0.15 + i * 0.07
                                                },
                                                className: "flex",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mr-4 w-4 shrink-0 text-right text-gray-5 select-none",
                                                        children: i + 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/recruit/Tracks.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: line.trim().startsWith("#") ? "text-gray-4" : "text-light",
                                                        children: line
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/recruit/Tracks.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, line + i, true, {
                                                fileName: "[project]/src/components/sections/recruit/Tracks.tsx",
                                                lineNumber: 111,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/recruit/Tracks.tsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/recruit/Tracks.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this)
                        ]
                    }, active.id, true, {
                        fileName: "[project]/src/components/sections/recruit/Tracks.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/recruit/Tracks.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/recruit/Tracks.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/recruit/Tracks.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(Tracks, "Aqiz9WowfIXL5W4aKePkXptT5z0=");
_c = Tracks;
var _c;
__turbopack_context__.k.register(_c, "Tracks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/values/Values.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Values",
    ()=>Values
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SectionHeading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$values$2f$visuals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/values/visuals.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const values = [
    {
        key: "study",
        label: "Study",
        title: "매주 함께 공부해요",
        description: "트랙별 스터디로 기초부터 차근차근. 배운 내용은 블로그로 기록하고 서로 코드 리뷰를 해요.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Code"], {
            className: "size-5"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/values/Values.tsx",
            lineNumber: 32,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        visual: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$values$2f$visuals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContributionVisual"], {}, void 0, false, {
            fileName: "[project]/src/components/sections/values/Values.tsx",
            lineNumber: 33,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0)),
        wide: true
    },
    {
        key: "project",
        label: "Project",
        title: "진짜 서비스를 만들어요",
        description: "학기마다 팀을 꾸려 기획부터 배포까지 한 사이클을 완주해요.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layers"], {
            className: "size-5"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/values/Values.tsx",
            lineNumber: 41,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        visual: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$values$2f$visuals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PipelineVisual"], {}, void 0, false, {
            fileName: "[project]/src/components/sections/values/Values.tsx",
            lineNumber: 42,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        key: "hackathon",
        label: "Hackathon",
        title: "24시간 몰입해요",
        description: "교내외 해커톤에 함께 나가고, 여름엔 자체 해커톤 DC&M Jam을 열어요.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bolt"], {
            className: "size-5"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/values/Values.tsx",
            lineNumber: 49,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        visual: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$values$2f$visuals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HackathonTimer"], {}, void 0, false, {
            fileName: "[project]/src/components/sections/values/Values.tsx",
            lineNumber: 50,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        key: "network",
        label: "Network",
        title: "선배와 연결돼요",
        description: "현직자 선배의 멘토링과 테크 토크, 기수를 넘나드는 홈커밍 데이로 오래가는 네트워크를 만들어요.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Users"], {
            className: "size-5"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/values/Values.tsx",
            lineNumber: 58,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        visual: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$values$2f$visuals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkVisual"], {}, void 0, false, {
            fileName: "[project]/src/components/sections/values/Values.tsx",
            lineNumber: 59,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0)),
        wide: true
    }
];
/** 마우스 위치를 따라 은은한 빛이 따라오는 카드 */ function SpotlightCard({ value, index }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const onMove = (e)=>{
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--x", `${e.clientX - rect.left}px`);
        el.style.setProperty("--y", `${e.clientY - rect.top}px`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        ref: ref,
        onPointerMove: onMove,
        initial: {
            opacity: 0,
            y: 40,
            scale: 0.97
        },
        whileInView: {
            opacity: 1,
            y: 0,
            scale: 1
        },
        viewport: {
            once: true,
            amount: 0.2
        },
        transition: {
            duration: 0.8,
            delay: index % 2 * 0.1,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative overflow-hidden rounded-[28px] bg-mist p-6 ring-1 ring-gray-1 transition-shadow duration-300 hover:shadow-m sm:p-8", value.wide && "md:col-span-2"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                style: {
                    background: "radial-gradient(520px circle at var(--x, 50%) var(--y, 50%), rgb(99 103 255 / 0.12), transparent 45%)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/sections/values/Values.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative grid h-full gap-8", value.wide && "md:grid-cols-[1fr_1.15fr] md:items-center"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "self-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "grid size-10 place-items-center rounded-xl bg-white text-primary shadow-s transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110",
                                        children: value.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/values/Values.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-12 font-semibold tracking-normal text-gray-3 uppercase",
                                        children: value.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/values/Values.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/values/Values.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mt-5 text-24 font-bold text-ink sm:text-30",
                                children: value.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/values/Values.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-16 text-gray-4",
                                children: value.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/values/Values.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/values/Values.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "self-end",
                        children: value.visual
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/values/Values.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/values/Values.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/values/Values.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(SpotlightCard, "QMBuJFIdzLIeqBcFwhMf246mjOM=");
_c = SpotlightCard;
function Values() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-labelledby": "values-title",
        className: "bg-white py-24 sm:py-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl px-5 md:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
                    eyebrow: "What we do",
                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        id: "values-title",
                        children: [
                            "DC&M에서는",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/components/sections/values/Values.tsx",
                                lineNumber: 129,
                                columnNumber: 15
                            }, this),
                            "이렇게 성장해요"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/values/Values.tsx",
                        lineNumber: 127,
                        columnNumber: 13
                    }, this),
                    description: "공부하고, 만들고, 몰입하고, 연결되는 한 학기."
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/values/Values.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 grid gap-4 sm:mt-16 md:grid-cols-3 md:gap-5",
                    children: values.map((v, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpotlightCard, {
                            value: v,
                            index: i
                        }, v.key, false, {
                            fileName: "[project]/src/components/sections/values/Values.tsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/values/Values.tsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/values/Values.tsx",
            lineNumber: 123,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/values/Values.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
_c1 = Values;
var _c, _c1;
__turbopack_context__.k.register(_c, "SpotlightCard");
__turbopack_context__.k.register(_c1, "Values");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/values/visuals.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContributionVisual",
    ()=>ContributionVisual,
    "HackathonTimer",
    ()=>HackathonTimer,
    "NetworkVisual",
    ()=>NetworkVisual,
    "PipelineVisual",
    ()=>PipelineVisual
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/brand/Logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
/* ───────────── 1. 스터디: 깃허브 잔디 ───────────── */ const COLS = 20;
const ROWS = 7;
// 결정적(deterministic) 의사 난수 — 서버/클라이언트 렌더 결과가 같아야 해요.
const level = (i)=>{
    const x = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
    const r = x - Math.floor(x);
    const trend = i / (COLS * ROWS) * 0.5; // 뒤로 갈수록 더 열심히
    const v = r * 0.8 + trend;
    return v > 0.95 ? 4 : v > 0.75 ? 3 : v > 0.55 ? 2 : v > 0.35 ? 1 : 0;
};
const levelClass = [
    "bg-gray-1",
    "bg-light/60",
    "bg-secondary/70",
    "bg-primary/80",
    "bg-primary"
];
function ContributionVisual() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        amount: 0.4
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "rounded-2xl bg-white p-4 shadow-s ring-1 ring-gray-1 sm:p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 flex items-center justify-between text-12 font-semibold text-gray-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "7기 스터디 커밋"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/values/visuals.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono tracking-normal text-primary",
                        children: "1,284 commits"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/values/visuals.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/values/visuals.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-[3px] sm:gap-1",
                style: {
                    gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
                    gridAutoFlow: "column",
                    gridTemplateRows: `repeat(${ROWS}, minmax(0, 1fr))`
                },
                children: Array.from({
                    length: COLS * ROWS
                }, (_, i)=>{
                    const col = Math.floor(i / ROWS);
                    const row = i % ROWS;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("aspect-square rounded-[3px]", levelClass[level(i)]),
                        initial: {
                            opacity: 0,
                            scale: 0.4
                        },
                        animate: inView ? {
                            opacity: 1,
                            scale: 1
                        } : undefined,
                        transition: {
                            duration: 0.35,
                            delay: (col + row) * 0.025
                        }
                    }, i, false, {
                        fileName: "[project]/src/components/sections/values/visuals.tsx",
                        lineNumber: 40,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/sections/values/visuals.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex items-center justify-end gap-1 text-12 text-gray-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mr-1",
                        children: "Less"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/values/visuals.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    levelClass.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("size-2.5 rounded-[2px]", c)
                        }, c, false, {
                            fileName: "[project]/src/components/sections/values/visuals.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-1",
                        children: "More"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/values/visuals.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/values/visuals.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/values/visuals.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(ContributionVisual, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = ContributionVisual;
/* ───────────── 2. 프로젝트: 기획 → 배포 파이프라인 ───────────── */ const STAGES = [
    "기획",
    "디자인",
    "개발",
    "배포"
];
function PipelineVisual() {
    _s1();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        amount: 0.5
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "space-y-2.5",
        children: STAGES.map((stage, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 rounded-xl bg-white px-3.5 py-2.5 shadow-s ring-1 ring-gray-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                        className: "grid size-6 shrink-0 place-items-center rounded-full bg-gray-1 text-white",
                        animate: inView ? {
                            backgroundColor: "#6367FF"
                        } : undefined,
                        transition: {
                            delay: 0.3 + i * 0.45,
                            duration: 0.3
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                            initial: {
                                scale: 0
                            },
                            animate: inView ? {
                                scale: 1
                            } : undefined,
                            transition: {
                                delay: 0.35 + i * 0.45,
                                type: "spring",
                                stiffness: 500,
                                damping: 20
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Check"], {
                                className: "size-3.5",
                                strokeWidth: 3
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/values/visuals.tsx",
                                lineNumber: 85,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/values/visuals.tsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/values/visuals.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-12 shrink-0 text-14 font-semibold text-gray-5",
                        children: stage
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/values/visuals.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-1.5 flex-1 overflow-hidden rounded-full bg-gray-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                            className: "bg-brand block h-full origin-left rounded-full",
                            initial: {
                                scaleX: 0
                            },
                            animate: inView ? {
                                scaleX: 1
                            } : undefined,
                            transition: {
                                delay: i * 0.45,
                                duration: 0.45,
                                ease: "easeInOut"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/values/visuals.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/values/visuals.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this)
                ]
            }, stage, true, {
                fileName: "[project]/src/components/sections/values/visuals.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/sections/values/visuals.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s1(PipelineVisual, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = PipelineVisual;
function HackathonTimer() {
    _s2();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        amount: 0.5
    });
    const [left, setLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(24 * 3600);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HackathonTimer.useEffect": ()=>{
            if (!inView) return;
            const id = window.setInterval({
                "HackathonTimer.useEffect.id": ()=>setLeft({
                        "HackathonTimer.useEffect.id": (s)=>s <= 1 ? 24 * 3600 : s - 1
                    }["HackathonTimer.useEffect.id"])
            }["HackathonTimer.useEffect.id"], 1000);
            return ({
                "HackathonTimer.useEffect": ()=>window.clearInterval(id)
            })["HackathonTimer.useEffect"];
        }
    }["HackathonTimer.useEffect"], [
        inView
    ]);
    const hh = String(Math.floor(left / 3600)).padStart(2, "0");
    const mm = String(Math.floor(left % 3600 / 60)).padStart(2, "0");
    const ss = String(left % 60).padStart(2, "0");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "rounded-2xl bg-ink p-5 text-white shadow-m",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between text-12 font-semibold text-gray-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "size-1.5 animate-pulse rounded-full bg-negative"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/values/visuals.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            "DC&M Jam · LIVE"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/values/visuals.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "☕ × 37"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/values/visuals.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/values/visuals.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 font-mono text-[40px] leading-none font-bold tracking-tight tabular-nums sm:text-[44px]",
                children: [
                    hh,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "animate-pulse text-light",
                        children: ":"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/values/visuals.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    mm,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "animate-pulse text-light",
                        children: ":"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/values/visuals.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    ss
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/values/visuals.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 h-1.5 overflow-hidden rounded-full bg-white/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-brand h-full rounded-full transition-[width] duration-1000 ease-linear",
                    style: {
                        width: `${(1 - left / (24 * 3600)) * 100}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/values/visuals.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/values/visuals.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/values/visuals.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
_s2(HackathonTimer, "HCi0LkpTen0gYNZYgFwM4IXgb94=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c2 = HackathonTimer;
/* ───────────── 4. 네트워킹: 궤도를 도는 멤버들 ───────────── */ const INNER = [
    {
        n: "준",
        c: "from-primary to-light"
    },
    {
        n: "서",
        c: "from-secondary to-accent"
    },
    {
        n: "민",
        c: "from-[#34344d] to-secondary"
    }
];
const OUTER = [
    {
        n: "OB",
        c: "from-primary to-secondary"
    },
    {
        n: "하",
        c: "from-light to-accent"
    },
    {
        n: "윤",
        c: "from-secondary to-primary"
    },
    {
        n: "지",
        c: "from-[#5c5c78] to-light"
    },
    {
        n: "현",
        c: "from-primary to-accent"
    }
];
function Orbit({ items, radius, duration, reverse }) {
    _s3();
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const spin = reduce ? {} : {
        rotate: reverse ? -360 : 360
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        className: "absolute top-1/2 left-1/2",
        style: {
            width: radius * 2,
            height: radius * 2,
            marginLeft: -radius,
            marginTop: -radius
        },
        animate: spin,
        transition: {
            duration,
            repeat: Infinity,
            ease: "linear"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-full border border-dashed border-light"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/values/visuals.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            items.map((item, i)=>{
                const angle = i / items.length * Math.PI * 2;
                // 소수점을 2자리로 잘라요. 34.99999999999997 같은 값은 브라우저가 "35px"로 바꿔 적어서
                // 하이드레이션 때 서버 HTML과 클라이언트 값이 달라 보이는 경고가 나요.
                const x = Math.round((Math.cos(angle) * radius + radius) * 100) / 100;
                const y = Math.round((Math.sin(angle) * radius + radius) * 100) / 100;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-br text-14 font-bold text-white shadow-m ring-[3px] ring-white", item.c),
                    style: {
                        left: x,
                        top: y
                    },
                    animate: reduce ? {} : {
                        rotate: reverse ? 360 : -360
                    },
                    transition: {
                        duration,
                        repeat: Infinity,
                        ease: "linear"
                    },
                    children: item.n
                }, item.n + i, false, {
                    fileName: "[project]/src/components/sections/values/visuals.tsx",
                    lineNumber: 189,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/values/visuals.tsx",
        lineNumber: 175,
        columnNumber: 5
    }, this);
}
_s3(Orbit, "VqoxUmuj54Zl2QZdC/zIZVdX+nY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c3 = Orbit;
function NetworkVisual() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative mx-auto h-[260px] w-full max-w-[320px]",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Orbit, {
                items: OUTER,
                radius: 120,
                duration: 60
            }, void 0, false, {
                fileName: "[project]/src/components/sections/values/visuals.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Orbit, {
                items: INNER,
                radius: 70,
                duration: 40,
                reverse: true
            }, void 0, false, {
                fileName: "[project]/src/components/sections/values/visuals.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute top-1/2 left-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[22px] bg-primary text-white shadow-m",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoGlyph"], {
                    className: "size-11",
                    cursor: "#FFDBFD",
                    blink: true
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/values/visuals.tsx",
                    lineNumber: 213,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/values/visuals.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/values/visuals.tsx",
        lineNumber: 209,
        columnNumber: 5
    }, this);
}
_c4 = NetworkVisual;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "ContributionVisual");
__turbopack_context__.k.register(_c1, "PipelineVisual");
__turbopack_context__.k.register(_c2, "HackathonTimer");
__turbopack_context__.k.register(_c3, "Orbit");
__turbopack_context__.k.register(_c4, "NetworkVisual");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ButtonLink",
    ()=>ButtonLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SmartLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SmartLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
;
;
;
;
const variants = {
    primary: "bg-primary text-white shadow-m hover:bg-[#5559f5] hover:shadow-[0_12px_32px_rgb(99_103_255/0.32)]",
    secondary: "bg-white text-ink shadow-s ring-1 ring-gray-2 hover:ring-gray-3",
    ink: "bg-ink text-white hover:bg-gray-5",
    white: "bg-white text-primary shadow-m hover:bg-mist",
    "ghost-white": "bg-white/15 text-white ring-1 ring-white/40 hover:bg-white/25"
};
function ButtonLink({ href, children, variant = "primary", size = "lg", arrow = false, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SmartLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmartLink"], {
        href: href,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group inline-flex items-center justify-center gap-1.5 rounded-2xl font-bold", "transition-[background-color,box-shadow,transform,color] duration-200 ease-(--ease-toss) active:scale-[0.96]", size === "lg" ? "h-14 px-7 text-16" : "h-11 px-5 text-14", variants[variant], className),
        children: [
            children,
            arrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight"], {
                className: "size-[1.1em] transition-transform duration-300 ease-(--ease-toss) group-hover:translate-x-1"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Button.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Button.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c = ButtonLink;
var _c;
__turbopack_context__.k.register(_c, "ButtonLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reveal",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
"use client";
;
;
function Reveal({ delay = 0, y = 28, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        initial: {
            opacity: 0,
            y
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            amount: 0.25
        },
        transition: {
            duration: 0.8,
            delay,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Reveal.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/SectionHeading.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionHeading",
    ()=>SectionHeading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
;
;
;
function SectionHeading({ eyebrow, title, description, align = "left", tone = "light", className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(align === "center" && "mx-auto text-center", "max-w-3xl", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-mono text-14 font-semibold tracking-normal", tone === "dark" ? "text-light" : "text-primary"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "opacity-60",
                            children: "// "
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/SectionHeading.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        eyebrow
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/SectionHeading.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/SectionHeading.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                delay: 0.06,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-3 text-title font-extrabold", tone === "dark" ? "text-white" : "text-ink"),
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SectionHeading.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/SectionHeading.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                delay: 0.12,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-4 text-16 font-medium sm:text-20", tone === "dark" ? "text-gray-3" : "text-gray-4"),
                    children: description
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SectionHeading.tsx",
                    lineNumber: 47,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/SectionHeading.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/SectionHeading.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = SectionHeading;
var _c;
__turbopack_context__.k.register(_c, "SectionHeading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/SmartLink.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SmartLink",
    ()=>SmartLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis-react.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function SmartLink({ href, onClick, ...props }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const lenis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLenis"])();
    const handleClick = (e)=>{
        onClick?.(e);
        if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        const hashIndex = href.indexOf("#");
        if (hashIndex < 0) return;
        const path = href.slice(0, hashIndex) || pathname;
        if (path !== pathname) return;
        const id = decodeURIComponent(href.slice(hashIndex + 1));
        const el = id ? document.getElementById(id) : null;
        if (!el) return;
        e.preventDefault();
        // force: 모바일 메뉴가 열려 Lenis가 멈춘 상태에서 눌러도 스크롤되게
        if (lenis) lenis.scrollTo(el, {
            duration: 1.2,
            force: true
        });
        else el.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
        window.history.replaceState(null, "", `#${id}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        onClick: handleClick,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/SmartLink.tsx",
        lineNumber: 38,
        columnNumber: 10
    }, this);
}
_s(SmartLink, "e+oB9Ur3SCtKyoO96OgqfZEFRlI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLenis"]
    ];
});
_c = SmartLink;
var _c;
__turbopack_context__.k.register(_c, "SmartLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/icons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowDown",
    ()=>ArrowDown,
    "ArrowRight",
    ()=>ArrowRight,
    "Bolt",
    ()=>Bolt,
    "Check",
    ()=>Check,
    "Code",
    ()=>Code,
    "Github",
    ()=>Github,
    "Instagram",
    ()=>Instagram,
    "Layers",
    ()=>Layers,
    "Mail",
    ()=>Mail,
    "Plus",
    ()=>Plus,
    "Trophy",
    ()=>Trophy,
    "Users",
    ()=>Users
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const base = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true
};
const ArrowRight = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...p,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M5 12h14M13 6l6 6-6 6"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/icons.tsx",
            lineNumber: 17,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/icons.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = ArrowRight;
const ArrowDown = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...p,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 5v14M6 13l6 6 6-6"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/icons.tsx",
            lineNumber: 23,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/icons.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = ArrowDown;
const Check = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...p,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m5 12.5 4.5 4.5L19 7.5"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/icons.tsx",
            lineNumber: 29,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/icons.tsx",
        lineNumber: 28,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = Check;
const Plus = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...p,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 5v14M5 12h14"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/icons.tsx",
            lineNumber: 35,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/icons.tsx",
        lineNumber: 34,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = Plus;
const Code = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...p,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m8 7-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/icons.tsx",
            lineNumber: 41,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/icons.tsx",
        lineNumber: 40,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = Code;
const Layers = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...p,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m12 3 9 5-9 5-9-5 9-5Z"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 47,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m3 13 9 5 9-5"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 48,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/icons.tsx",
        lineNumber: 46,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c5 = Layers;
const Bolt = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...p,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M13 2 4 14h7l-1 8 9-12h-7l1-8Z"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/icons.tsx",
            lineNumber: 54,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/icons.tsx",
        lineNumber: 53,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c6 = Bolt;
const Users = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...p,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "9",
                cy: "8",
                r: "3.5"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 60,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 61,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.8c2 .7 3.2 2.5 3.6 5.2"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 62,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/icons.tsx",
        lineNumber: 59,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c7 = Users;
const Trophy = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...p,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 4h8v5a4 4 0 0 1-8 0V4Z"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 68,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8.5 20h7M10 17h4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 69,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/icons.tsx",
        lineNumber: 67,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c8 = Trophy;
const Mail = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...p,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "5",
                width: "18",
                height: "14",
                rx: "2.5"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 75,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m4 7 8 6 8-6"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 76,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/icons.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c9 = Mail;
const Github = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": true,
        ...p,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/icons.tsx",
            lineNumber: 82,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/icons.tsx",
        lineNumber: 81,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c10 = Github;
const Instagram = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...p,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "3",
                width: "18",
                height: "18",
                rx: "5"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 88,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 89,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "17.5",
                cy: "6.5",
                r: "0.6",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 90,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/icons.tsx",
        lineNumber: 87,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c11 = Instagram;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "ArrowRight");
__turbopack_context__.k.register(_c1, "ArrowDown");
__turbopack_context__.k.register(_c2, "Check");
__turbopack_context__.k.register(_c3, "Plus");
__turbopack_context__.k.register(_c4, "Code");
__turbopack_context__.k.register(_c5, "Layers");
__turbopack_context__.k.register(_c6, "Bolt");
__turbopack_context__.k.register(_c7, "Users");
__turbopack_context__.k.register(_c8, "Trophy");
__turbopack_context__.k.register(_c9, "Mail");
__turbopack_context__.k.register(_c10, "Github");
__turbopack_context__.k.register(_c11, "Instagram");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 활동·프로젝트 데이터 (더미). 이후 /projects 목록·상세 페이지에서도 그대로 써요.
 */ __turbopack_context__.s([
    "projects",
    ()=>projects
]);
const projects = [
    {
        slug: "campus-lost-found",
        title: "줍줍 지도",
        category: "해커톤",
        generation: 7,
        period: "2026.09",
        summary: "캠퍼스 분실물을 지도 위에 등록하고 찾아주는 서비스",
        tags: [
            "Next.js",
            "Supabase",
            "Kakao Map"
        ],
        award: "교내 해커톤 대상",
        cover: {
            from: "#6367ff",
            to: "#c9beff",
            motif: "dots"
        }
    },
    {
        slug: "moa-bab",
        title: "모아밥",
        category: "프로젝트",
        generation: 7,
        period: "2026.03 – 06",
        summary: "학식 메뉴와 식당 혼잡도를 실시간으로 알려주는 앱",
        tags: [
            "Flutter",
            "Firebase",
            "Python"
        ],
        cover: {
            from: "#8494ff",
            to: "#ffdbfd",
            motif: "bars"
        }
    },
    {
        slug: "dcm-jam-2026",
        title: "DC&M Jam 2026",
        category: "해커톤",
        generation: 7,
        period: "2026.08",
        summary: "12팀 48명이 참가한 무박 2일 자체 해커톤",
        tags: [
            "24시간",
            "12팀",
            "자체 행사"
        ],
        cover: {
            from: "#1b1b33",
            to: "#6367ff",
            motif: "rings"
        }
    },
    {
        slug: "study-mate",
        title: "스터디메이트",
        category: "프로젝트",
        generation: 6,
        period: "2025.09 – 12",
        summary: "관심사와 시간표로 스터디원을 매칭해 주는 AI 서비스",
        tags: [
            "FastAPI",
            "React",
            "LLM"
        ],
        award: "SW 공모전 우수상",
        cover: {
            from: "#c9beff",
            to: "#6367ff",
            motif: "orbit"
        }
    },
    {
        slug: "algorithm-season-3",
        title: "알고리즘 스터디 시즌 3",
        category: "스터디",
        generation: 7,
        period: "2026.03 – 06",
        summary: "주 2회, 한 학기 동안 함께 푼 문제만 400개",
        tags: [
            "C++",
            "Python",
            "백준"
        ],
        cover: {
            from: "#34344d",
            to: "#8494ff",
            motif: "grid"
        }
    },
    {
        slug: "tech-talk-2026",
        title: "현직자 테크 토크",
        category: "세미나",
        generation: 7,
        period: "2026.05",
        summary: "선배 개발자 4명이 들려준 첫 회사, 첫 코드 리뷰 이야기",
        tags: [
            "커리어",
            "코드 리뷰",
            "OB 초청"
        ],
        cover: {
            from: "#ffdbfd",
            to: "#8494ff",
            motif: "wave"
        }
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/site.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 사이트 전역 콘텐츠 — 실제 동아리 정보가 정해지면 이 파일만 고치면 돼요.
 * (현재는 모두 더미 데이터)
 */ __turbopack_context__.s([
    "club",
    ()=>club,
    "faqs",
    ()=>faqs,
    "manifesto",
    ()=>manifesto,
    "navLinks",
    ()=>navLinks,
    "recruit",
    ()=>recruit,
    "stats",
    ()=>stats,
    "techStack",
    ()=>techStack,
    "tracks",
    ()=>tracks
]);
const club = {
    name: "DC&M",
    tagline: "아이디어가 코드가 되는 곳",
    description: "기획부터 배포까지, 함께 만들고 함께 성장하는 개발 동아리 DC&M이에요.",
    founded: 2019,
    email: "hello@dcm.club",
    instagram: "https://instagram.com/",
    github: "https://github.com/"
};
const navLinks = [
    {
        label: "소개",
        href: "/#about"
    },
    {
        label: "멤버",
        href: "/members"
    },
    {
        label: "활동",
        href: "/projects"
    },
    {
        label: "모집 안내",
        href: "/#recruit"
    }
];
const recruit = {
    generation: 8,
    applyStart: "2026-11-03T00:00:00+09:00",
    applyEnd: "2026-11-23T23:59:59+09:00",
    steps: [
        {
            title: "서류 접수",
            description: "온라인 지원서로 간단한 자기소개와 관심 분야를 알려주세요.",
            start: "2026-11-03T00:00:00+09:00",
            end: "2026-11-23T23:59:59+09:00"
        },
        {
            title: "서류 발표",
            description: "합격 여부와 면접 시간을 문자와 메일로 안내해요.",
            start: "2026-11-26T18:00:00+09:00"
        },
        {
            title: "대면 면접",
            description: "20분 내외의 편안한 대화예요. 코딩 테스트는 없어요.",
            start: "2026-11-28T10:00:00+09:00",
            end: "2026-11-29T18:00:00+09:00"
        },
        {
            title: "최종 발표",
            description: "최종 합격자에게 개별 연락을 드려요.",
            start: "2026-12-02T18:00:00+09:00"
        },
        {
            title: "8기 OT",
            description: "8기 동기들과 처음 만나는 날! 팀 빌딩도 함께해요.",
            start: "2026-12-05T14:00:00+09:00"
        }
    ],
    qualifications: [
        "개발에 관심 있는 재학생이라면 전공·학년 무관",
        "한 학기 동안 주 1회 정기 모임에 참여할 수 있는 분",
        "함께 만들고 기록하는 걸 즐기는 분"
    ]
};
const tracks = [
    {
        id: "frontend",
        name: "프론트엔드",
        summary: "사용자가 직접 만지는 화면을 설계하고 구현해요.",
        learn: [
            "HTML·CSS·JS 기초부터 React 컴포넌트 설계까지",
            "디자이너와 협업하는 디자인 시스템 구현",
            "Vercel로 직접 배포하고 성능 개선하기"
        ],
        stack: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind"
        ],
        snippet: [
            "export default function Apply() {",
            "  return <Button onClick={join}>",
            "    8기 지원하기",
            "  </Button>;",
            "}"
        ]
    },
    {
        id: "backend",
        name: "백엔드",
        summary: "서비스를 떠받치는 서버와 데이터를 책임져요.",
        learn: [
            "REST API 설계와 인증·인가 구현",
            "데이터베이스 모델링과 쿼리 최적화",
            "Docker와 클라우드로 서버 운영하기"
        ],
        stack: [
            "Spring Boot",
            "Node.js",
            "MySQL",
            "AWS"
        ],
        snippet: [
            '@PostMapping("/apply")',
            "public Member join(@RequestBody You you) {",
            "  return dcm.welcome(you, 8);",
            "}"
        ]
    },
    {
        id: "app",
        name: "앱",
        summary: "손안에서 매일 쓰는 모바일 앱을 만들어요.",
        learn: [
            "크로스플랫폼 앱 구조와 상태 관리",
            "푸시 알림·카메라 등 네이티브 기능 연동",
            "스토어 출시까지 경험하기"
        ],
        stack: [
            "Flutter",
            "Dart",
            "Firebase",
            "Swift"
        ],
        snippet: [
            "onPressed: () {",
            "  Navigator.push(",
            "    context, DcmRoute(gen: 8),",
            "  );",
            "}"
        ]
    },
    {
        id: "ai",
        name: "AI · 데이터",
        summary: "데이터로 문제를 정의하고 모델로 풀어내요.",
        learn: [
            "파이썬 데이터 분석과 시각화",
            "머신러닝 모델 학습과 평가",
            "LLM API를 활용한 서비스 프로토타입"
        ],
        stack: [
            "Python",
            "PyTorch",
            "FastAPI",
            "Pandas"
        ],
        snippet: [
            "model = DCM(generation=8)",
            "model.fit(passion, epochs=16)",
            "print(model.predict(you))",
            "# >>> 합격 확률 높음"
        ]
    }
];
const manifesto = "우리는 수업에서 배운 코드를 *진짜* *서비스로* 만들어요. 혼자서는 막막한 첫 배포도, 밤새우는 해커톤도 함께라면 *가장* *즐거운* *기억이* 돼요. DC&M은 *만드는* *사람들이* 모이는 곳이에요.";
const stats = [
    {
        label: "기수",
        value: 8,
        unit: "기",
        caption: `${2019}년 창단 이후 매년`
    },
    {
        label: "누적 멤버",
        value: 142,
        unit: "명",
        caption: "현재 활동 중 38명"
    },
    {
        label: "완성한 프로젝트",
        value: 57,
        unit: "개",
        caption: "실제 배포까지 마친 서비스"
    },
    {
        label: "대회 수상",
        value: 18,
        unit: "회",
        caption: "교내외 해커톤·공모전"
    }
];
const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Spring Boot",
    "Node.js",
    "Flutter",
    "Swift",
    "Kotlin",
    "Python",
    "FastAPI",
    "PyTorch",
    "Docker",
    "AWS",
    "Firebase",
    "Figma",
    "GitHub Actions"
];
const faqs = [
    {
        q: "비전공자도 지원할 수 있나요?",
        a: "물론이에요. 매 기수 멤버의 30% 정도가 비전공자예요. 첫 4주는 트랙별 기초 스터디로 시작하니 걱정하지 않아도 돼요."
    },
    {
        q: "프로젝트 경험이 없어도 괜찮나요?",
        a: "괜찮아요. 경험보다 '무엇을 만들어 보고 싶은지'가 더 중요해요. 학기 중반부터 선배 멤버와 함께 첫 프로젝트를 진행해요."
    },
    {
        q: "정기 모임은 언제, 어디서 하나요?",
        a: "매주 목요일 저녁 7시에 교내 세미나실에서 모여요. 시험 기간에는 쉬어 가요."
    },
    {
        q: "회비가 있나요?",
        a: "학기당 2만 원이에요. 해커톤 간식비, 서버 비용, 세미나 연사 초청 등에 투명하게 사용하고 매 학기 내역을 공개해요."
    },
    {
        q: "면접은 어떻게 진행되나요?",
        a: "20분 내외의 대면 면접이에요. 지원서 내용을 바탕으로 관심 분야와 하고 싶은 것에 대해 편하게 이야기 나눠요. 코딩 테스트는 없어요."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useNow.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNow",
    ()=>useNow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
/**
 * 1초마다 갱신되는 현재 시각(ms).
 * 서버 렌더·하이드레이션 중에는 null을 돌려줘서 시간 차이로 인한 hydration 불일치가 없어요.
 */ let current = 0;
let timer;
const listeners = new Set();
function subscribe(listener) {
    listeners.add(listener);
    if (timer === undefined) {
        current = Date.now();
        timer = window.setInterval(()=>{
            current = Date.now();
            listeners.forEach((l)=>l());
        }, 1000);
    }
    return ()=>{
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
function useNow() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, getSnapshot, getServerSnapshot);
}
_s(useNow, "FpwL93IKMLJZuQQXefVtWynbBPQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/cn.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** 조건부 className 결합 (외부 의존성 없이 최소 구현) */ __turbopack_context__.s([
    "cn",
    ()=>cn
]);
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/recruit.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatRange",
    ()=>formatRange,
    "formatShortDate",
    ()=>formatShortDate,
    "getCurrentStepIndex",
    ()=>getCurrentStepIndex,
    "getPhase",
    ()=>getPhase,
    "splitDuration",
    ()=>splitDuration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-client] (ecmascript)");
;
const KST = "Asia/Seoul";
function formatShortDate(iso) {
    const parts = new Intl.DateTimeFormat("ko-KR", {
        timeZone: KST,
        month: "2-digit",
        day: "2-digit",
        weekday: "short"
    }).formatToParts(new Date(iso));
    const get = (type)=>parts.find((p)=>p.type === type)?.value ?? "";
    return `${get("month")}.${get("day")} (${get("weekday")})`;
}
function formatRange(start, end) {
    if (!end) return formatShortDate(start);
    const a = formatShortDate(start);
    const b = formatShortDate(end);
    return a === b ? a : `${a} – ${b}`;
}
function getPhase(now) {
    if (now < Date.parse(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recruit"].applyStart)) return "upcoming";
    if (now > Date.parse(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recruit"].applyEnd)) return "closed";
    return "open";
}
function getCurrentStepIndex(now) {
    let index = -1;
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recruit"].steps.forEach((step, i)=>{
        if (now >= Date.parse(step.start)) index = i;
    });
    return index;
}
function splitDuration(ms) {
    const clamped = Math.max(0, ms);
    const totalSeconds = Math.floor(clamped / 1000);
    return {
        days: Math.floor(totalSeconds / 86400),
        hours: Math.floor(totalSeconds % 86400 / 3600),
        minutes: Math.floor(totalSeconds % 3600 / 60),
        seconds: totalSeconds % 60
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_08y43-s67an9m._.js.map