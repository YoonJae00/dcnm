// 메인 사이트와 같은 테마 스위치(JS 모듈)를 그대로 씁니다
import { useTheme } from "../../../lib/theme";
import { cn } from "@/lib/cn";

/** 랜딩 헤더의 해/달 버튼. 메인 사이트와 같은 저장값(dcm-theme)을 써요. */
export function ThemeToggle({ className }: { className?: string }) {
  const [theme, toggle] = useTheme() as ["light" | "dark", () => void];
  const dark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "라이트 모드로 바꾸기" : "다크 모드로 바꾸기"}
      title={dark ? "라이트 모드" : "다크 모드"}
      className={cn(
        "relative grid size-9 place-items-center overflow-hidden rounded-full text-gray-4 transition-colors hover:bg-gray-1 hover:text-ink",
        className,
      )}
    >
      <svg viewBox="0 0 24 24" aria-hidden fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        className={cn("absolute size-[18px] transition-[transform,opacity] duration-500", dark ? "translate-y-6 rotate-90 opacity-0" : "opacity-100")}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      <svg viewBox="0 0 24 24" aria-hidden fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className={cn("absolute size-[18px] transition-[transform,opacity] duration-500", dark ? "opacity-100" : "-translate-y-6 -rotate-90 opacity-0")}>
        <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z" />
      </svg>
    </button>
  );
}
