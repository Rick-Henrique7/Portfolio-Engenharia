"use client";

import { useLanguage } from "./LanguageProvider";
import { FadeIn } from "./FadeIn";
import { Container, Eyebrow, Glyph, linkProps } from "./ui";

export function Contact() {
  const { lang, t } = useLanguage();

  return (
    <section id="contato" className="scroll-mt-16 bg-night text-bg">
      <Container className="flex flex-col gap-14 pt-18 pb-8 md:gap-16 md:pt-24 md:pb-10 lg:gap-20 lg:pt-28 lg:pb-12">
        <FadeIn>
          <div className="grid items-end gap-12 md:gap-14 lg:grid-cols-12 lg:gap-6">
            <div className="flex flex-col gap-4 md:gap-5 lg:col-span-7">
              <Eyebrow dark>{lang === "pt" ? "04 — Contato" : "04 — Contact"}</Eyebrow>
              <h2 className="font-serif text-[40px] leading-[0.95] sm:text-[52px] font-normal tracking-[-0.02em] md:text-[88px] lg:text-[clamp(88px,7.2vw,160px)]">
                {lang === "pt" ? (
                  <>Vamos <em>conversar</em>.</>
                ) : (
                  <>Let&apos;s <em>talk</em>.</>
                )}
              </h2>
              <p className="max-w-[480px] text-base leading-relaxed text-night-muted md:text-[17px] lg:text-xl">{t.contact.intro}</p>
            </div>

            <ul className="grid border-b border-night-line md:grid-cols-2 md:gap-x-6 lg:col-span-4 lg:col-start-9 lg:grid-cols-1">
              {t.contact.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...linkProps(link.href)}
                    {...(link.icon === "download" ? { download: true } : {})}
                    className="flex min-h-14 items-center justify-between border-t border-night-line text-[17px] text-bg transition-colors hover:text-night-muted md:min-h-15 lg:text-xl"
                  >
                    <span>{link.label}</span>
                    <Glyph kind={link.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <footer className="flex flex-col gap-1.5 font-mono text-xs text-night-label sm:flex-row sm:justify-between">
          <span>&copy; 2026 {t.profile.name}</span>
          <span>{t.profile.location} &middot; PT / EN</span>
        </footer>
      </Container>
    </section>
  );
}
