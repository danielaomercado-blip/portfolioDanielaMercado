import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CaseCover from "@/components/CaseCover";
import CaseGallery from "@/components/CaseGallery";
import CaseMosaic from "@/components/CaseMosaic";
import CaseIndexNav from "@/components/CaseIndexNav";
import ProcessTimeline from "@/components/ProcessTimeline";
import SolutionCards from "@/components/SolutionCards";
import { LightboxProvider } from "@/components/Lightbox";
import { CASE_STUDIES, getAdjacentCases, getCaseBySlug } from "@/lib/case-studies";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/proyectos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseBySlug(slug);
  if (!caseStudy) return {};
  return {
    title: caseStudy.title,
    description: caseStudy.summary,
  };
}

export default async function CaseDetailPage({ params }: PageProps<"/proyectos/[slug]">) {
  const { slug } = await params;
  const caseStudy = getCaseBySlug(slug);
  if (!caseStudy) notFound();

  const { prev, next } = getAdjacentCases(slug);
  const hasIndex = caseStudy.galleryGroups.length > 0;

  return (
    <LightboxProvider>
      <article>
        <div className="mx-auto max-w-6xl px-4">
          <header className="grid items-center gap-8 py-10 lg:grid-cols-[5fr_6fr]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="tag tag-outline">{caseStudy.tagLabel}</span>
                <span className="text-[13px] text-neutral-300">{caseStudy.sub}</span>
              </div>
              <h1>{caseStudy.title}</h1>
              <p className="max-w-[440px] text-base text-neutral-200">{caseStudy.lead}</p>
              <div className="mt-2 grid grid-cols-3 gap-6 border-t border-divider pt-6">
                {caseStudy.meta.map((m) => (
                  <div key={m.label} className="flex flex-col gap-1 text-[13px]">
                    <span className="kicker text-xs">{m.label}</span>
                    {m.lines.map((line, i) => (
                      <span key={i}>{line}</span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden">
              <CaseCover cover={caseStudy.cover} />
            </div>
          </header>

          <hr className="hr" />

          <div className="flex items-start gap-8 py-12">
            {hasIndex && <CaseIndexNav />}

            <div className="flex flex-1 flex-col gap-16">
              <section id="problema" className="flex flex-col gap-3 scroll-mt-8">
                <span className="card-kicker">01 · Problema</span>
                {caseStudy.problema.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </section>

              <section id="rol-equipo" className="flex flex-col gap-3 scroll-mt-8">
                <span className="card-kicker">02 · Rol y equipo</span>
                <div className="grid gap-4 sm:grid-cols-3">
                  {caseStudy.rolYEquipo.map((card) => (
                    <div key={card.title} className="card">
                      <div className="kicker text-xs">{card.title}</div>
                      {card.items.map((item, i) => (
                        <p key={i} className="card-body">
                          {item}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </section>

              <section id="proceso" className="flex flex-col gap-4 scroll-mt-8">
                <span className="card-kicker">Proceso · decisiones clave</span>
                {caseStudy.procesoIntro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}

                {caseStudy.minijuegos && (
                  <>
                    <span className="card-kicker mt-2">Los 3 minijuegos</span>
                    <div className="grid gap-6 sm:grid-cols-3">
                      {caseStudy.minijuegos.map((game) => (
                        <div key={game.title} className="flex flex-col gap-2">
                          <video
                            src={game.video.src}
                            aria-label={game.video.alt}
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            className="aspect-video w-full rounded-md object-cover shadow-md"
                          />
                          <div className="card-title">{game.title}</div>
                          <p className="text-xs opacity-80">{game.body}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                <ProcessTimeline steps={caseStudy.processSteps} />

                {(caseStudy.solutionLead || caseStudy.solutionCards.length > 0) && (
                  <>
                    <span className="card-kicker mt-4">La solución</span>
                    {caseStudy.solutionLead && <p>{caseStudy.solutionLead}</p>}
                    {caseStudy.mosaicImages && (
                      <CaseMosaic images={caseStudy.mosaicImages} label={`Pantallas de ${caseStudy.title}`} />
                    )}
                    <SolutionCards cards={caseStudy.solutionCards} />
                  </>
                )}
              </section>

              {caseStudy.resultado.stats.length > 0 || caseStudy.resultado.items.length > 0 ? (
                <section id="resultado" className="flex flex-col gap-3 scroll-mt-8">
                  <span className="card-kicker">03 · Resultado</span>
                  {caseStudy.resultado.stats.length > 0 && (
                    <div className="grid gap-4 sm:grid-cols-3">
                      {caseStudy.resultado.stats.map((stat) => (
                        <div key={stat.label}>
                          <div className="card-title text-2xl text-accent">{stat.value}</div>
                          <p className="text-sm opacity-80">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  <ul className="flex list-none flex-col gap-2">
                    {caseStudy.resultado.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </section>
              ) : null}

              <section id="reflexion" className="flex flex-col gap-3 scroll-mt-8">
                <span className="card-kicker">04 · Reflexión</span>
                {caseStudy.reflexion.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </section>
            </div>
          </div>

          {hasIndex && (
            <section id="galeria" className="flex flex-col gap-3 py-8 scroll-mt-8">
              <span className="kicker">Galería</span>
              <CaseGallery groups={caseStudy.galleryGroups} />
            </section>
          )}

          <hr className="hr" />

          <footer className="flex flex-col gap-4 py-10 sm:flex-row sm:justify-between">
            <Link href={prev ? `/proyectos/${prev.slug}` : "/proyectos"} className="text-sm">
              ← {prev ? `${prev.tagLabel} · ${prev.title}` : "Índice de proyectos"}
            </Link>
            <Link href={next ? `/proyectos/${next.slug}` : "/proyectos"} className="text-sm">
              {next ? `${next.tagLabel} · ${next.title}` : "Índice de proyectos"} →
            </Link>
          </footer>
        </div>
      </article>
    </LightboxProvider>
  );
}
