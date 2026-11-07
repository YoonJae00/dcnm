"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import type { ComponentProps, MouseEvent } from "react";

type Props = Omit<ComponentProps<typeof Link>, "href"> & { href: string };

/**
 * 같은 페이지의 `#해시` 링크는 Lenis로 부드럽게 스크롤하고,
 * 다른 페이지 링크는 일반 Next 라우팅을 그대로 써요.
 */
export function SmartLink({ href, onClick, ...props }: Props) {
  const pathname = usePathname();
  const lenis = useLenis();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
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
    if (lenis) lenis.scrollTo(el, { duration: 1.2, force: true });
    else el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
