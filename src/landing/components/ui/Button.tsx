import type { ReactNode } from "react";
import { SmartLink } from "@/components/ui/SmartLink";
import { ArrowRight } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ink" | "white" | "ghost-white";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white shadow-m hover:bg-[#5559f5] hover:shadow-[0_12px_32px_rgb(99_103_255/0.32)]",
  secondary: "bg-white text-ink shadow-s ring-1 ring-gray-2 hover:ring-gray-3",
  ink: "bg-ink text-white hover:bg-gray-5",
  white: "bg-white text-primary shadow-m hover:bg-mist",
  "ghost-white": "bg-white/15 text-white ring-1 ring-white/40 hover:bg-white/25",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: "md" | "lg";
  arrow?: boolean;
  className?: string;
};

/** 토스 스타일 버튼 — 누르면 살짝 눌리고, 화살표가 앞으로 미끄러져요. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "lg",
  arrow = false,
  className,
}: Props) {
  return (
    <SmartLink
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-1.5 rounded-2xl font-bold",
        "transition-[background-color,box-shadow,transform,color] duration-200 ease-(--ease-toss) active:scale-[0.96]",
        size === "lg" ? "h-14 px-7 text-16" : "h-11 px-5 text-14",
        variants[variant],
        className,
      )}
    >
      {children}
      {arrow && (
        <ArrowRight className="size-[1.1em] transition-transform duration-300 ease-(--ease-toss) group-hover:translate-x-1" />
      )}
    </SmartLink>
  );
}
