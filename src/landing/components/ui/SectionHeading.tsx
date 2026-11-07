import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: Props) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", "max-w-3xl", className)}>
      <Reveal>
        <p
          className={cn(
            "font-mono text-14 font-semibold tracking-normal",
            tone === "dark" ? "text-light" : "text-primary",
          )}
        >
          <span className="opacity-60">{"// "}</span>
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.06}>
        <h2
          className={cn(
            "mt-3 text-title font-extrabold",
            tone === "dark" ? "text-white" : "text-ink",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.12}>
          <p
            className={cn(
              "mt-4 text-16 font-medium sm:text-20",
              tone === "dark" ? "text-gray-3" : "text-gray-4",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
