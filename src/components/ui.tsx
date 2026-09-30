// Peças pequenas reutilizadas pelas seções.
// Container: ocupa a largura toda da tela, com margem lateral de 20 / 40 / 80 px (igual ao mockup).

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`w-full px-5 md:px-10 xl:px-20 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span className={`font-mono text-[13px] ${dark ? "text-night-muted" : "text-accent"}`}>{children}</span>
  );
}

export function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={`font-serif text-[28px] leading-[1.05] sm:text-[36px] sm:leading-none font-normal tracking-[-0.02em] md:text-[56px] lg:text-[clamp(64px,5.5vw,120px)] ${className}`}
    >
      {children}
    </h2>
  );
}

export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-night-chip px-2.5 py-1.5 font-mono text-xs text-night-body">
      {children}
    </span>
  );
}

const glyphs = { arrow: "→", external: "↗", download: "↓" } as const;

export function Glyph({ kind }: { kind: keyof typeof glyphs }) {
  return <span aria-hidden="true">{glyphs[kind]}</span>;
}

export function isExternal(href: string) {
  return href.startsWith("http");
}

export function linkProps(href: string) {
  return isExternal(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};
}
