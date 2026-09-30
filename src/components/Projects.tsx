"use client";

import { useLanguage } from "./LanguageProvider";
import { FadeIn } from "./FadeIn";
import { ExpandButton } from "./ExpandButton";
import { Container, Eyebrow, Glyph, SectionTitle, linkProps } from "./ui";

export function Projects() {
  const { lang, t } = useLanguage();

  return (
    <section id="projetos" className="scroll-mt-16 bg-surface">
      <Container className="flex flex-col gap-8 py-18 md:gap-10 md:py-24 lg:gap-12 lg:py-28">
        <FadeIn>
          <div className="flex flex-col gap-4">
            <Eyebrow>{lang === "pt" ? "03 — Projetos" : "03 — Projects"}</Eyebrow>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <SectionTitle>{lang === "pt" ? "Projetos selecionados" : "Selected projects"}</SectionTitle>
              <a
                href={t.profile.github}
                {...linkProps(t.profile.github)}
                className="self-start border-b border-ink pb-0.5 text-[15px] font-medium md:self-auto"
              >
                <span className="md:hidden lg:inline">{lang === "pt" ? "Todos no " : "All on "}</span>GitHub <Glyph kind="external" />
              </a>
            </div>
          </div>
        </FadeIn>

        {t.featuredProjects.map((project, index) => {
          const mediaFirst = index % 2 === 0;
          return (
            <FadeIn key={project.slug} delay={index * 150}>
              <article
                id={project.slug}
                className="grid gap-4 rounded-xl border border-line bg-bg p-3 md:gap-5 md:p-4 lg:min-h-[380px] lg:grid-cols-12 lg:gap-6 lg:p-6"
              >
                <div
                  className={`relative flex h-[200px] items-end overflow-hidden rounded-lg bg-media p-3 md:h-[320px] md:p-4 lg:col-span-7 lg:h-auto ${
                    mediaFirst ? "" : "lg:order-2"
                  }`}
                >
                  {project.image ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={`${lang === "pt" ? "Tela do" : "Screen of"} ${project.title}`}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover object-center"
                      />
                      <ExpandButton src={project.image} alt={project.title} />
                    </>
                  ) : (
                    <span className="font-mono text-[11px] text-muted uppercase md:text-xs">[{project.media}]</span>
                  )}
                </div>

                <div className="flex flex-col gap-3 px-2 pb-3 md:gap-3.5 md:px-4 md:pb-4 lg:col-span-5 lg:gap-5 lg:p-5">
                  <span className="font-mono text-xs text-accent uppercase lg:text-base">{project.eyebrow}</span>
                  <h3 className="font-serif text-[32px] leading-[1.05] font-normal md:text-[40px] lg:text-[52px]">{project.title}</h3>
                  <p className="max-w-[560px] text-[15px] leading-relaxed text-body md:text-base lg:text-xl lg:leading-relaxed">{project.description}</p>
                  {project.next && <p className="max-w-[560px] text-[13px] leading-normal text-muted md:text-sm lg:text-[15px]">{project.next}</p>}
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between lg:mt-auto lg:flex-col lg:items-start lg:gap-5">
                    <ul className="flex flex-wrap gap-x-5 gap-y-1.5 font-mono text-[13px] lg:gap-x-6 lg:text-base">
                      {project.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                    <div className="flex gap-5 text-[15px] font-medium lg:text-lg">
                      <a href={project.caseStudyHref} className="hover:text-accent">
                        {lang === "pt" ? "Estudo de caso" : "Case study"} <Glyph kind="arrow" />
                      </a>
                      <a href={project.codeHref} {...linkProps(project.codeHref)} className="text-muted hover:text-ink">
                        {lang === "pt" ? "Código" : "Code"} <Glyph kind="external" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </FadeIn>
          );
        })}

        <div className="grid gap-4 md:grid-cols-3 lg:gap-5">
          {t.otherProjects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 100}>
              <article className="flex h-full flex-col gap-2.5 rounded-xl border border-line bg-bg p-6 md:p-5 lg:gap-3.5 lg:p-7">
                <span className="font-mono text-xs text-muted uppercase md:text-[11px] lg:text-xs">{project.eyebrow}</span>
                <h3 className="text-xl font-semibold md:text-lg lg:text-2xl">{project.title}</h3>
                <p className="text-[15px] leading-normal text-body md:text-sm lg:text-lg lg:leading-relaxed">{project.description}</p>
                <a
                  href={project.href}
                  {...linkProps(project.href)}
                  className="mt-auto pt-2 text-sm font-medium hover:text-accent lg:pt-4 lg:text-base"
                >
                  {lang === "pt" ? "Ver projeto" : "View project"} <Glyph kind="arrow" />
                </a>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
