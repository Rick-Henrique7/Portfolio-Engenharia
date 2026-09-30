"use client";

import { useEffect, useState } from "react";
import { useLanguage, LangToggle } from "./LanguageProvider";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const { lang, t } = useLanguage();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? (lang === "pt" ? "Fechar menu" : "Close menu") : (lang === "pt" ? "Abrir menu" : "Open menu")}
        aria-expanded={open}
        aria-controls="menu-mobile"
        onClick={() => setOpen((v) => !v)}
        className={`relative z-[60] flex size-11 items-center justify-center rounded-full border transition-colors ${
          open ? "border-ink bg-ink text-bg" : "border-line text-ink"
        }`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
        </svg>
      </button>

      <div
        id="menu-mobile"
        hidden={!open}
        className="fixed inset-x-0 top-16 bottom-0 z-50 flex flex-col bg-bg px-5 pt-6 pb-8 md:top-20 md:px-10"
      >
        <nav aria-label={lang === "pt" ? "Seções" : "Sections"} className="flex flex-col">
          {t.nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline justify-between border-b border-line py-5"
            >
              <span className="font-serif text-[36px] leading-none sm:text-[44px]">{item.label}</span>
              <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
            </a>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-4">
          <LangToggle size="mobile" />
          <a
            href={t.profile.cvHref}
            download
            className="flex h-13 items-center justify-center rounded-full bg-ink text-[15px] font-medium text-bg"
          >
            {lang === "pt" ? "Baixar CV" : "Download CV"}
          </a>
        </div>
      </div>
    </div>
  );
}
