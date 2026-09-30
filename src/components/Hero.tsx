"use client";

import { useLanguage } from "./LanguageProvider";
import { FadeIn } from "./FadeIn";
import { Container, Glyph, linkProps } from "./ui";

export function Hero() {
  const { lang, t } = useLanguage();

  return (
    <section id="topo" className="scroll-mt-20">
      <Container className="grid gap-8 pt-8 pb-14 md:grid-cols-12 md:gap-x-6 md:gap-y-12 md:pt-10 md:pb-20 lg:pt-12">
        {/* ── Text column ── */}
        <div className="flex flex-col gap-5 md:col-span-12 md:gap-7 lg:col-span-8 lg:gap-8">
          <FadeIn>
            <h1 className="font-serif text-[32px] leading-[1.02] font-normal tracking-[-0.02em] sm:text-[40px] md:text-[72px] md:leading-[0.98] lg:text-[clamp(64px,6.1vw,132px)]">
              {t.profile.headline.before}
              <em className="text-accent">{t.profile.headline.highlight}</em>
              {t.profile.headline.after}
            </h1>
          </FadeIn>

          <FadeIn delay={100}>
            <p className="max-w-[33em] text-[15px] leading-relaxed text-body sm:text-[17px] md:text-lg lg:text-2xl lg:leading-relaxed">
              {t.profile.intro}
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#feitos"
                className="flex h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 text-[14px] font-medium text-bg transition-opacity hover:opacity-85 sm:h-13 sm:px-7 sm:text-[15px] lg:h-[72px] lg:px-12 lg:text-xl"
              >
                {lang === "pt" ? "Ver resultados" : "See results"} <Glyph kind="arrow" />
              </a>
              <a
                href={t.profile.github}
                {...linkProps(t.profile.github)}
                className="flex h-12 items-center justify-center gap-2 rounded-full border border-line px-6 text-[14px] font-medium transition-colors hover:border-ink sm:h-13 sm:px-7 sm:text-[15px] lg:h-[72px] lg:px-12 lg:text-xl"
              >
                GitHub <Glyph kind="external" />
              </a>
            </div>
          </FadeIn>
        </div>

        {/* ── Stats row ── */}
        <FadeIn delay={150} className="md:col-span-7 lg:col-span-8">
          <dl className="grid grid-cols-3 gap-2 border-t border-line pt-5 sm:gap-3 sm:pt-6 md:flex md:flex-col md:justify-between md:gap-6 md:pt-7 lg:flex-row lg:justify-start lg:gap-14 lg:self-end lg:pt-8">
            {t.heroStats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse justify-end gap-0.5 sm:gap-1 lg:justify-start lg:gap-1.5">
                <dt className="text-[11px] leading-snug text-muted sm:text-[13px] md:text-base lg:text-lg">
                  {stat.label}
                </dt>
                <dd className="font-mono text-[22px] tracking-[-0.03em] sm:text-[28px] md:text-5xl lg:text-6xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </FadeIn>

        {/* ── Photo ── */}
        <FadeIn
          delay={200}
          direction="right"
          className="md:col-span-5 lg:col-span-4 lg:col-start-9 lg:row-span-2 lg:row-start-1 flex flex-col"
        >
          <div className="flex flex-1 flex-col gap-2 sm:gap-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-line bg-[#e3e3df] sm:aspect-auto sm:min-h-[300px] sm:flex-1 md:min-h-[340px] lg:min-h-[480px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={t.profile.photo}
                alt={t.profile.name}
                width={800}
                height={1000}
                fetchPriority="high"
                className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
              />
            </div>
            <div className="flex justify-between gap-4 font-mono text-[11px] text-muted sm:text-xs md:text-sm lg:text-base">
              <span>{t.profile.role}</span>
              <span>{t.profile.since}</span>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
