module.exports = [
"[project]/src/components/brand/Logo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Logo",
    ()=>Logo,
    "LogoGlyph",
    ()=>LogoGlyph,
    "LogoMark",
    ()=>LogoMark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-ssr] (ecmascript)");
;
;
function LogoGlyph({ className, stroke = "currentColor", cursor = "#8494FF", blink = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 48 48",
        fill: "none",
        "aria-hidden": "true",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("shrink-0", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: 29,
                y: 33.4,
                width: 8,
                height: 3.2,
                rx: 1,
                fill: cursor,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(blink === true && "animate-blink", blink === "hover" && "group-hover:animate-blink")
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
function LogoMark({ className, variant = "solid", blink }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-grid place-items-center rounded-[28%] text-white", variant === "solid" ? "bg-primary" : "bg-brand", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoGlyph, {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group inline-flex items-center gap-1 font-extrabold", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoGlyph, {
                className: "h-[1.6em] w-[1.6em] -ml-[0.2em]",
                blink: "hover",
                ...glyph
            }, void 0, false, {
                fileName: "[project]/src/components/brand/Logo.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("tracking-[-0.04em]", text),
                children: [
                    "DC",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/src/components/layout/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/brand/Logo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SmartLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SmartLink.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function Header() {
    const { scrollY, scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])();
    const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(scrollYProgress, {
        stiffness: 160,
        damping: 30,
        restDelta: 0.001
    });
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const lenis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLenis"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(scrollY, "change", (y)=>setScrolled(y > 12));
    // 모바일 메뉴가 열려 있으면 뒤 페이지 스크롤을 멈춰요.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (open) lenis?.stop();
        else lenis?.start();
        document.documentElement.style.overflow = open ? "hidden" : "";
        const onKey = (e)=>e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return ()=>window.removeEventListener("keydown", onKey);
    }, [
        open,
        lenis
    ]);
    const solid = scrolled || open;
    return(// data-reveal: 인트로가 걷힐 때 살짝 올라오며 나타나요 (intro.css)
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        "data-reveal": true,
        className: "fixed inset-x-0 top-0 z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 border-b transition-[background-color,border-color,backdrop-filter] duration-300", solid ? "border-gray-2/70 bg-white/75 backdrop-blur-xl backdrop-saturate-150" : "border-transparent bg-transparent")
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "relative mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SmartLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SmartLink"], {
                        href: "/#top",
                        "aria-label": "DC&M 홈",
                        className: "text-[22px]",
                        onClick: ()=>setOpen(false),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logo"], {}, void 0, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "hidden items-center gap-1 md:flex",
                        onMouseLeave: ()=>setHovered(null),
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["navLinks"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SmartLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SmartLink"], {
                                        href: link.href,
                                        onMouseEnter: ()=>setHovered(link.href),
                                        className: "relative z-10 block rounded-full px-4 py-2 text-14 font-semibold text-gray-4 transition-colors hover:text-ink",
                                        children: link.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this),
                                    hovered === link.href && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SmartLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SmartLink"], {
                                href: "/apply",
                                className: "hidden h-9 items-center rounded-full bg-ink px-4 text-14 font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-primary active:scale-95 md:inline-flex",
                                children: "지원하기"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-label": open ? "메뉴 닫기" : "메뉴 열기",
                                "aria-expanded": open,
                                "aria-controls": "mobile-menu",
                                onClick: ()=>setOpen((v)=>!v),
                                className: "relative grid size-10 place-items-center rounded-full transition-colors hover:bg-gray-1 md:hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sr-only",
                                        children: "메뉴"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                "aria-hidden": true,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-brand absolute inset-x-0 bottom-0 h-[2px] origin-left transition-opacity duration-300", scrolled ? "opacity-100" : "opacity-0"),
                style: {
                    scaleX: progress
                }
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
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
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].ul, {
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
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["navLinks"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].li, {
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
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SmartLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SmartLink"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].li, {
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
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SmartLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SmartLink"], {
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
}),
"[project]/src/components/ui/SmartLink.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SmartLink",
    ()=>SmartLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis-react.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function SmartLink({ href, onClick, ...props }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const lenis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLenis"])();
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        onClick: handleClick,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/SmartLink.tsx",
        lineNumber: 38,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/data/site.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/lib/cn.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** 조건부 className 결합 (외부 의존성 없이 최소 구현) */ __turbopack_context__.s([
    "cn",
    ()=>cn
]);
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}
}),
];

//# sourceMappingURL=src_07p600hptw0ph._.js.map