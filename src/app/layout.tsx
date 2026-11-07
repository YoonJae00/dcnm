import type { Metadata, Viewport } from "next";
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "lenis/dist/lenis.css";
import "./globals.css";
import { Providers } from "@/components/providers/Providers";
import { club } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: `${club.name} — ${club.tagline}`,
    template: `%s | ${club.name}`,
  },
  description: club.description,
  openGraph: {
    title: `${club.name} — ${club.tagline}`,
    description: club.description,
    locale: "ko_KR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F6FF",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // 인트로의 인라인 스크립트가 하이드레이션 전에 html class를 붙여서 suppressHydrationWarning
    <html lang="ko" suppressHydrationWarning>
      <body className="min-h-dvh">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
