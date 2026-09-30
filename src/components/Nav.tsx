"use client";

import { useLanguage, LangToggle } from "./LanguageProvider";
import { MobileMenu } from "./MobileMenu";
import { Container } from "./ui";

export function Nav() {
  const { lang, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-line">
      {/* Fundo translúcido com blur numa camada própria. Se o backdrop-filter ficasse no
          <header>, ele viraria o bloco de contenção do menu mobile (position: fixed) e o
          painel ficaria preso dentro do header, com altura zero e sem fundo. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-bg/85 backdrop-blur-md" />
      <Container className="flex h-16 items-center justify-between md:h-20 lg:h-[clamp(80px,5.56vw,110px)]">
        <a href="#topo" className="font-serif text-2xl tracking-[-0.02em] md:text-[28px] lg:text-[clamp(28px,1.95vw,40px)]">
          {t.profile.name}
        </a>

        <nav aria-label={lang === "pt" ? "Seções" : "Sections"} className="hidden items-center gap-10 lg:flex lg:gap-[clamp(40px,2.8vw,56px)]">
          {t.nav.map((item) => (
            <a key={item.href} href={item.href} className="text-[15px] text-body transition-colors hover:text-ink lg:text-[clamp(18px,1.4vw,24px)]">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 lg:gap-4">
          <LangToggle />
          <a
            href={t.profile.cvHref}
            download
            className="hidden h-11 items-center rounded-full border border-ink px-5 text-sm font-medium transition-colors hover:bg-ink hover:text-bg sm:flex lg:h-[clamp(48px,3.3vw,64px)] lg:px-[clamp(20px,1.4vw,28px)] lg:text-[clamp(17px,1.2vw,22px)]"
          >
            {lang === "pt" ? "Baixar CV" : "Download CV"}
          </a>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
