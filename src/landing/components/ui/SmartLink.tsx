import { Link, useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";
import type { ComponentProps, MouseEvent } from "react";

type Props = Omit<ComponentProps<typeof Link>, "to"> & { href: string };

/**
 * - `/#id` 형태: 같은 화면 안의 섹션 이동이에요. 주소(hash)는 바꾸지 않고 스크롤만 해요.
 *   (HashRouter에서는 `#id`가 곧 경로라서 주소를 바꾸면 없는 페이지가 돼요.)
 * - 그 밖의 `/경로`: react-router로 이동해요.
 * - http·mailto 같은 바깥 주소: 일반 링크예요.
 */
export function SmartLink({ href, onClick, children, ...props }: Props) {
  const { pathname } = useLocation();
  const lenis = useLenis();

  if (/^[a-z][a-z0-9+.-]*:/i.test(href)) {
    return (
      <a href={href} onClick={onClick} {...(props as ComponentProps<"a">)}>
        {children}
      </a>
    );
  }

  if (href.startsWith("/#")) {
    const id = decodeURIComponent(href.slice(2));
    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      onClick?.(e);
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      const el = id && id !== "top" ? document.getElementById(id) : null;
      // 모바일 메뉴 링크는 onClick에서 메뉴를 닫는데, 그 뒤 effect가 lenis.start()를 부르면서 진행 중인
      // 스크롤 애니메이션을 멈춰요. 그래서 한 틱 뒤에 스크롤을 시작해요.
      // force: 메뉴가 열려 Lenis가 멈춘 상태에서 눌러도 스크롤되게
      window.setTimeout(() => {
        if (lenis) lenis.scrollTo(el ?? 0, { duration: 1.2, force: true });
        else if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        else window.scrollTo({ top: 0, behavior: "smooth" });
      }, 0);
    };
    return (
      // href는 현재 화면 경로로 둬서, 새 탭으로 열어도 같은 화면이 열려요.
      <a href={`#${pathname}`} onClick={handleClick} {...(props as ComponentProps<"a">)}>
        {children}
      </a>
    );
  }

  return (
    <Link to={href} onClick={onClick} {...props}>
      {children}
    </Link>
  );
}
