"use client";

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  style?: CSSProperties;
};

// Posição inicial (antes de aparecer). O deslocamento horizontal só vale de md
// para cima: no mobile o container tem só 20px de margem lateral e um
// translate-x de 24px estouraria a largura da tela (rolagem horizontal).
const hiddenByDirection = {
  up: "translate-y-6",
  left: "translate-y-6 md:translate-y-0 md:-translate-x-6",
  right: "translate-y-6 md:translate-y-0 md:translate-x-6",
  none: "",
} as const;

export function FadeIn({ children, className = "", delay = 0, direction = "up", style }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  // A visibilidade fica no estado do React (e não numa classe injetada no DOM):
  // se o className for reescrito num re-render, o elemento não some de novo.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Quem prefere menos movimento (ou navegador sem IntersectionObserver) vê tudo de imediato.
    if (typeof IntersectionObserver === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stateClass = visible
    ? "opacity-100 translate-x-0 translate-y-0"
    : `opacity-0 ${hiddenByDirection[direction]}`;

  return (
    <div
      ref={ref}
      className={`${stateClass} transition-all duration-700 ease-out motion-reduce:transition-none ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}
