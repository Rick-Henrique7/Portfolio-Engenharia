"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

type LightboxCtx = { open: (src: string, alt: string) => void };
const Ctx = createContext<LightboxCtx>({ open: () => {} });

export function useLightbox() {
  return useContext(Ctx);
}

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [img, setImg] = useState<{ src: string; alt: string } | null>(null);

  const open = useCallback((src: string, alt: string) => setImg({ src, alt }), []);
  const close = useCallback(() => setImg(null), []);

  useEffect(() => {
    if (!img) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [img, close]);

  return (
    <Ctx.Provider value={{ open }}>
      {children}
      {img && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={close}
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:top-6 md:right-6 md:h-12 md:w-12"
            aria-label="Fechar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img.src}
            alt={img.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
          />
        </div>
      )}
    </Ctx.Provider>
  );
}
