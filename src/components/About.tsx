"use client";

import { useLanguage } from "./LanguageProvider";
import { FadeIn } from "./FadeIn";
import { Container, Eyebrow, SectionTitle } from "./ui";

export function About() {
  const { lang, t } = useLanguage();

  return (
    <section id="sobre" className="scroll-mt-16">
      <Container className="flex flex-col gap-12 py-18 md:gap-14 md:py-24 lg:gap-16 lg:py-28">
        <div className="grid gap-12 md:gap-14 lg:grid-cols-12 lg:gap-6">
          <div className="flex flex-col gap-5 md:gap-6 lg:col-span-6">
            <FadeIn>
              <Eyebrow>{lang === "pt" ? "02 — Sobre mim" : "02 — About me"}</Eyebrow>
            </FadeIn>
            <FadeIn delay={100}>
              <SectionTitle>
                {t.about.title.before}
                <em>{t.about.title.highlight}</em>
                {t.about.title.after}
              </SectionTitle>
            </FadeIn>
            <div className="grid max-w-[640px] gap-5 md:gap-6">
              {t.about.paragraphs.map((text, i) => (
                <FadeIn key={text.slice(0, 24)} delay={150 + i * 100}>
                  <p className="text-base leading-relaxed text-body md:text-lg lg:text-xl lg:leading-relaxed">
                    {text}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn delay={200} direction="right" className="lg:col-span-5 lg:col-start-8 lg:justify-center">
            <div className="flex flex-col gap-10 md:gap-12">
              <ol className="border-b border-line">
                {t.timeline.map((item) => (
                  <li key={item.title} className="grid gap-1.5 border-t border-line py-[18px] sm:grid-cols-[140px_1fr] sm:gap-1 md:py-5 lg:py-6">
                    <span className="font-mono text-xs text-muted md:text-sm lg:text-base">{item.period}</span>
                    <div className="flex flex-col gap-1">
                      <span className="text-[17px] font-semibold lg:text-xl">{item.title}</span>
                      <span className="text-[15px] text-muted lg:text-lg">{item.detail}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="grid grid-cols-2 gap-x-5 gap-y-7 border-t border-line pt-10 sm:grid-cols-4 sm:gap-8 lg:gap-12 lg:pt-12">
            {t.stack.map((group) => (
              <div key={group.area} className="flex flex-col gap-2 md:gap-2.5">
                <h3 className="font-mono text-xs text-muted uppercase lg:text-sm">{group.area}</h3>
                <ul className="text-[15px] leading-[1.7] lg:text-base">
                  {group.items.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
