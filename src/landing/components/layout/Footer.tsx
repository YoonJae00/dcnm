import { Logo } from "@/components/brand/Logo";
import { SmartLink } from "@/components/ui/SmartLink";
import { Github, Instagram, Mail } from "@/components/ui/icons";
import { club } from "@/data/site";
import { useNavLinks } from "@/lib/ActivitiesContext";

export function Footer() {
  const navLinks = useNavLinks();
  const socials = [
    { label: "Instagram", href: club.instagram, icon: Instagram },
    { label: "GitHub", href: club.github, icon: Github },
    { label: "이메일", href: `mailto:${club.email}`, icon: Mail },
  ];

  return (
    <footer className="border-t border-gray-1 bg-page">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo className="text-[26px]" />
            <p className="mt-3 max-w-xs text-14 text-gray-4">{club.description}</p>
          </div>
          <div className="flex gap-16">
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <SmartLink
                    href={l.href}
                    className="text-14 font-semibold text-gray-4 transition-colors hover:text-ink"
                  >
                    {l.label}
                  </SmartLink>
                </li>
              ))}
              <li>
                <SmartLink
                  href="/apply"
                  className="text-14 font-semibold text-primary transition-colors hover:text-ink"
                >
                  지원·문의
                </SmartLink>
              </li>
            </ul>
            <ul className="flex gap-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={label}
                    className="grid size-10 place-items-center rounded-full bg-gray-1 text-gray-4 transition-[background-color,color,transform] hover:-translate-y-0.5 hover:bg-primary hover:text-white"
                  >
                    <Icon className="size-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-gray-1 pt-6 text-12 text-gray-3 sm:flex-row sm:justify-between">
          <div className="space-y-2">
            <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <span>© {club.founded}–2026 {club.name}. All rights reserved.</span>
              <SmartLink href="/privacy" className="text-14 font-bold text-primary underline-offset-4 hover:underline">
                개인정보 처리방침
              </SmartLink>
            </p>
            <p className="text-gray-4">개발 · 주호 · 현성 · 석우 · 윤재</p>
          </div>
          <p className="font-mono tracking-normal">
            built with <span className="text-primary">▷_</span> by {club.name} members
          </p>
        </div>
      </div>
    </footer>
  );
}
