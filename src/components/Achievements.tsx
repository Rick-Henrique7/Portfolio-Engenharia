"use client";

import { useLanguage } from "./LanguageProvider";
import { FadeIn } from "./FadeIn";
import { ExpandButton } from "./ExpandButton";
import { Chip, Container, Eyebrow, Glyph, SectionTitle } from "./ui";

export function Achievements() {
  const { lang, t } = useLanguage();

  return (
    <section id="feitos" className="scroll-mt-16 bg-night text-bg">
      <Container className="flex flex-col gap-10 py-18 md:gap-12 md:py-24 lg:gap-14 lg:py-28">
        <FadeIn>
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end lg:gap-6">
            <div className="flex flex-col gap-4">
              <Eyebrow dark>{lang === "pt" ? "01 — Feitos" : "01 — Achievements"}</Eyebrow>
              <SectionTitle>{lang === "pt" ? "Resultados na Brasa Tecnologia" : "Results at Brasa Tecnologia"}</SectionTitle>
            </div>
            <p className="max-w-[520px] leading-relaxed text-night-muted lg:max-w-[380px]">
              {lang === "pt"
                ? "Agentes de IA e automações que construí em N8N para clientes da Brasa, do atendimento à integração com sistemas."
                : "AI agents and automations I built in N8N for Brasa clients, from customer service to system integration."}
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-4 md:gap-5 lg:grid-cols-2">
          {t.achievements.map((item, i) => (
            <FadeIn key={item.title} delay={i * 150}>
              <article className="flex h-full flex-col gap-4 rounded-xl border border-night-line bg-night-surface p-6 md:gap-5 md:p-8">
                <header className="flex flex-col-reverse gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="text-xl font-semibold md:text-[22px] lg:text-3xl">{item.title}</h3>
                  <span className="flex shrink-0 items-center gap-2 font-mono text-xs text-night-muted lg:text-base">
                    {item.status && (
                      <span className="rounded-full border border-night-chip px-2 py-0.5 text-night-body">{item.status}</span>
                    )}
                    {item.period}
                  </span>
                </header>

                {item.image && (
                  <div className="relative block overflow-hidden rounded-lg border border-night-line">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image.src}
                      alt={item.image.alt}
                      loading="lazy"
                      className="h-[150px] w-full object-cover object-left transition-transform duration-500 hover:scale-[1.03]"
                    />
                    <ExpandButton
                      src={item.image.src}
                      alt={item.image.alt}
                      className="absolute top-2 right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-opacity hover:bg-black/80"
                    />
                  </div>
                )}

                <dl className="flex flex-col gap-3 text-[15px] leading-normal text-night-body sm:gap-2.5 lg:text-lg lg:leading-relaxed">
                  <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                    <dt className="font-mono text-[11px] text-night-label sm:w-[80px] sm:shrink-0 sm:pt-0.5 sm:text-xs lg:text-[13px]">
                      {lang === "pt" ? "CONTEXTO" : "CONTEXT"}
                    </dt>
                    <dd>{item.context}</dd>
                  </div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                    <dt className="font-mono text-[11px] text-night-label sm:w-[80px] sm:shrink-0 sm:pt-0.5 sm:text-xs lg:text-[13px]">
                      {lang === "pt" ? "AÇÃO" : "ACTION"}
                    </dt>
                    <dd>{item.action}</dd>
                  </div>
                </dl>

                {item.links && (
                  <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium lg:text-base">
                    {item.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-bg underline decoration-night-chip underline-offset-4 transition-colors hover:decoration-bg"
                        >
                          {link.label} <Glyph kind="external" />
                        </a>
                      </li>
                    ))}
                  </ul>
                )}

                <footer className="mt-auto flex flex-col gap-3.5 border-t border-night-line pt-4 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-4 md:pt-5">
                  <p className="flex max-w-[260px] flex-col gap-1">
                    <span className="font-mono text-[34px] leading-none tracking-[-0.03em] md:text-[40px]">{item.result.value}</span>
                    <span className="text-sm text-night-muted">{item.result.label}</span>
                  </p>
                  <ul className="flex flex-wrap gap-1.5 sm:max-w-[55%] sm:justify-end" aria-label={lang === "pt" ? "Tecnologias" : "Technologies"}>
                    {item.stack.map((tech) => (
                      <li key={tech}>
                        <Chip>{tech}</Chip>
                      </li>
                    ))}
                  </ul>
                </footer>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
