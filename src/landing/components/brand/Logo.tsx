import { cn } from "@/lib/cn";

type GlyphProps = {
  className?: string;
  /** 막대·꺾쇠 색 */
  stroke?: string;
  /** 밑줄(커서) 색 */
  cursor?: string;
  /** 밑줄을 터미널 커서처럼 깜빡이게 */
  blink?: boolean | "hover";
};

/** ▷_ 글리프. 박스 없이 글리프만 그려요. */
export function LogoGlyph({
  className,
  stroke = "currentColor",
  cursor = "#8494FF",
  blink = false,
}: GlyphProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <path
        d="M14.5 13.5v21M21 13.5 32 24 21 34.5"
        stroke={stroke}
        strokeWidth={4.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x={29}
        y={33.4}
        width={8}
        height={3.2}
        rx={1}
        fill={cursor}
        className={cn(
          blink === true && "animate-blink",
          blink === "hover" && "group-hover:animate-blink",
        )}
      />
    </svg>
  );
}

type MarkProps = {
  className?: string;
  variant?: "solid" | "gradient";
  blink?: boolean | "hover";
};

/** 둥근 사각형 앱 아이콘 형태의 로고 */
export function LogoMark({ className, variant = "solid", blink }: MarkProps) {
  return (
    <span
      className={cn(
        "inline-grid place-items-center rounded-[28%] text-white",
        variant === "solid" ? "bg-primary" : "bg-brand",
        className,
      )}
    >
      <LogoGlyph className="size-[78%]" cursor="#FFDBFD" blink={blink} />
    </span>
  );
}

/** 글리프 + DC&M 워드마크 */
export function Logo({
  className,
  tone = "brand",
}: {
  className?: string;
  tone?: "brand" | "ink" | "white";
}) {
  const glyph =
    tone === "white"
      ? { stroke: "#FFFFFF", cursor: "#FFDBFD" }
      : tone === "ink"
        ? { stroke: "#1B1B33", cursor: "#6367FF" }
        : { stroke: "#6367FF", cursor: "#8494FF" };
  const text =
    tone === "white" ? "text-white" : tone === "ink" ? "text-ink" : "text-primary";
  const amp =
    tone === "white"
      ? "text-accent"
      : tone === "ink"
        ? "text-primary"
        : "text-secondary";

  return (
    <span
      className={cn("group inline-flex items-center gap-1 font-extrabold", className)}
    >
      <LogoGlyph className="h-[1.6em] w-[1.6em] -ml-[0.2em]" blink="hover" {...glyph} />
      <span className={cn("tracking-[-0.04em]", text)}>
        DC<span className={amp}>&amp;</span>M
      </span>
    </span>
  );
}
