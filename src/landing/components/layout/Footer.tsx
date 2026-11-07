import { Logo } from "@/components/brand/Logo";
import { SmartLink } from "@/components/ui/SmartLink";
import { Github, Instagram, Mail } from "@/components/ui/icons";
import { club } from "@/data/site";
import { useNavLinks } from "@/lib/ActivitiesContext";

export function Footer({ links }: { links?: { label: string; url: string }[] | null }) {
  const quickLinks = (links ?? []).filter((link) => /^https?:\/\//i.test(link.url));
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
        {quickLinks.length > 0 && (
          <nav aria-label="자주 쓰는 링크" className="mt-10 rounded-2xl bg-mist p-5 sm:p-6">
            <h2 className="text-14 font-bold text-ink">자주 쓰는 링크</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {quickLinks.map((link) => (
                <li key={`${link.label}-${link.url}`}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`${link.label} (새 탭)`} className="inline-flex min-h-11 items-center gap-3 rounded-xl bg-surface px-4 py-2 text-14 font-semibold text-gray-4 ring-1 ring-gray-2 transition-colors hover:text-primary">
                    {link.label}<span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
        <div className="mt-12 flex flex-col gap-2 border-t border-gray-1 pt-6 text-12 text-gray-3 sm:flex-row sm:justify-between">
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>© {club.founded}–2026 {club.name}. All rights reserved.</span>
            <SmartLink href="/privacy" className="text-14 font-bold text-primary underline-offset-4 hover:underline">
              개인정보 처리방침
            </SmartLink>
          </p>
          <p className="font-mono tracking-normal">
            built with <span className="text-primary">▷_</span> by {club.name} members
          </p>
        </div>
      </div>
    </footer>
  );
}
