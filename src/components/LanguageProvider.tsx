"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import * as pt from "@/content/site";
import * as en from "@/content/site-en";

type Lang = "pt" | "en";

type LanguageContextType = {
  lang: Lang;
  toggle: () => void;
  t: typeof pt;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

const contentMap = { pt, en } as const;

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");

  const toggle = useCallback(() => {
    setLang((prev) => (prev === "pt" ? "en" : "pt"));
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, toggle, t: contentMap[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

/** Toggle com slide animado — usar no Nav e MobileMenu */
export function LangToggle({ size = "default" }: { size?: "default" | "mobile" }) {
  const { lang, toggle } = useLanguage();
  const isEn = lang === "en";

  if (size === "mobile") {
    return (
      <div className="relative flex self-start rounded-full border border-line p-1 font-mono text-xs" role="group" aria-label={lang === "pt" ? "Idioma" : "Language"}>
        {/* sliding pill */}
        <span
          className="absolute top-1 bottom-1 w-[calc(50%-2px)] rounded-full bg-ink transition-transform duration-300 ease-in-out"
          style={{ transform: isEn ? "translateX(calc(100% + 4px))" : "translateX(0)" }}
        />
        <button type="button" onClick={() => isEn && toggle()} className={`relative z-10 min-h-9 rounded-full px-4 transition-colors duration-300 ${!isEn ? "text-bg" : "text-muted"}`}>
          PT
        </button>
        <button type="button" onClick={() => !isEn && toggle()} className={`relative z-10 min-h-9 rounded-full px-4 transition-colors duration-300 ${isEn ? "text-bg" : "text-muted"}`}>
          EN
        </button>
      </div>
    );
  }

  return (
    <div className="relative hidden rounded-full border border-line p-1 font-mono text-xs lg:flex lg:text-[clamp(12px,0.83vw,16px)]" role="group" aria-label={lang === "pt" ? "Idioma" : "Language"}>
      {/* sliding pill */}
      <span
        className="absolute top-1 bottom-1 w-[calc(50%-2px)] rounded-full bg-ink transition-transform duration-300 ease-in-out"
        style={{ transform: isEn ? "translateX(calc(100% + 4px))" : "translateX(0)" }}
      />
      <button type="button" onClick={() => isEn && toggle()} className={`relative z-10 rounded-full px-3 py-1.5 transition-colors duration-300 ${!isEn ? "text-bg" : "text-muted hover:text-ink"}`}>
        PT
      </button>
      <button type="button" onClick={() => !isEn && toggle()} className={`relative z-10 rounded-full px-3 py-1.5 transition-colors duration-300 ${isEn ? "text-bg" : "text-muted hover:text-ink"}`}>
        EN
      </button>
    </div>
  );
}
