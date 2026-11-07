"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "motion/react";
import { useLenis } from "lenis/react";
import { Logo } from "@/components/brand/Logo";
import { SmartLink } from "@/components/ui/SmartLink";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/cn";

export function Header() {
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 30, restDelta: 0.001 });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const lenis = useLenis();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 12));

  // 모바일 메뉴가 열려 있으면 뒤 페이지 스크롤을 멈춰요.
  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, lenis]);

  const solid = scrolled || open;

  return (
    // data-reveal: 인트로가 걷힐 때 살짝 올라오며 나타나요 (intro.css)
    <header data-reveal className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "absolute inset-0 border-b transition-[background-color,border-color,backdrop-filter] duration-300",
          solid
            ? "border-gray-2/70 bg-white/75 backdrop-blur-xl backdrop-saturate-150"
            : "border-transparent bg-transparent",
        )}
      />
      <nav className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <SmartLink
          href="/#top"
          aria-label="DC&M 홈"
          className="text-[22px]"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </SmartLink>

        <ul
          className="hidden items-center gap-1 md:flex"
          onMouseLeave={() => setHovered(null)}
        >
          {navLinks.map((link) => (
            <li key={link.href} className="relative">
              <SmartLink
                href={link.href}
                onMouseEnter={() => setHovered(link.href)}
                className="relative z-10 block rounded-full px-4 py-2 text-14 font-semibold text-gray-4 transition-colors hover:text-ink"
              >
                {link.label}
              </SmartLink>
              {hovered === link.href && (
                <motion.span
                  layoutId="nav-hover"
                  className="absolute inset-0 rounded-full bg-gray-1"
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                />
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <SmartLink
            href="/apply"
            className="hidden h-9 items-center rounded-full bg-ink px-4 text-14 font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-primary active:scale-95 md:inline-flex"
          >
            지원하기
          </SmartLink>
          <button
            type="button"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="relative grid size-10 place-items-center rounded-full transition-colors hover:bg-gray-1 md:hidden"
          >
            <span className="sr-only">메뉴</span>
            <motion.span
              className="absolute h-[2px] w-5 rounded-full bg-ink"
              animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
              transition={{ type: "spring", stiffness: 500, damping: 32 }}
            />
            <motion.span
              className="absolute h-[2px] w-5 rounded-full bg-ink"
              animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
              transition={{ type: "spring", stiffness: 500, damping: 32 }}
            />
          </button>
        </div>
      </nav>

      {/* 스크롤 진행 바 */}
      <motion.div
        aria-hidden
        className={cn(
          "bg-brand absolute inset-x-0 bottom-0 h-[2px] origin-left transition-opacity duration-300",
          scrolled ? "opacity-100" : "opacity-0",
        )}
        style={{ scaleX: progress }}
      />

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-x-0 top-16 bottom-0 bg-white/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            <motion.ul
              className="flex flex-col gap-1 px-5 pt-6"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } } }}
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <SmartLink
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-30 font-bold text-ink active:text-primary"
                  >
                    {link.label}
                  </SmartLink>
                </motion.li>
              ))}
              <motion.li
                className="pt-6"
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              >
                <SmartLink
                  href="/apply"
                  onClick={() => setOpen(false)}
                  className="flex h-14 items-center justify-center rounded-2xl bg-primary text-16 font-bold text-white active:scale-[0.98]"
                >
                  8기 지원하기
                </SmartLink>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
