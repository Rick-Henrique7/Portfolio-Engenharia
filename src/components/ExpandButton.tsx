"use client";

import { useLightbox } from "./ImageLightbox";

export function ExpandButton({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const { open } = useLightbox();
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        open(src, alt);
      }}
      className={
        className ??
        "absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-lg bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/80 md:top-4 md:right-4 md:h-10 md:w-10"
      }
      aria-label="Expandir imagem"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 3 21 3 21 9" />
        <polyline points="9 21 3 21 3 15" />
        <line x1="21" y1="3" x2="14" y2="10" />
        <line x1="3" y1="21" x2="10" y2="14" />
      </svg>
    </button>
  );
}
