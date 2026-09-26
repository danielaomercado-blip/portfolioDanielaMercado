import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AssetPlaceholder from "@/components/AssetPlaceholder";
import CaseIndexNav from "@/components/CaseIndexNav";
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

  return (
    <article>
      <AssetPlaceholder label={caseStudy.coverLabel} aspect="21 / 8" className="rounded-none" />

      <div className="mx-auto max-w-6xl px-4">
        <header className="flex flex-col gap-3 py-10">
          <span className="card-kicker">{caseStudy.kicker}</span>
          <h1 className="max-w-3xl">{caseStudy.title}</h1>
          <div className="mt-2 grid max-w-2xl gap-6 sm:grid-cols-3">
            {caseStudy.meta.map((m) => (
              <div key={m.label}>
                <div className="kicker text-xs">{m.label}</div>
                <p className="mt-1 text-sm">{m.value}</p>
              </div>
            ))}
          </div>
        </header>

        <hr className="hr" />

        <div className="flex items-start gap-8 py-12">
          <CaseIndexNav />

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
              {caseStudy.procesoIntro && <p>{caseStudy.procesoIntro}</p>}
              <div className="grid gap-4 sm:grid-cols-2">
                {caseStudy.procesoCards.map((card) => (
                  <div key={card.title} className="card">
                    <div className="card-title">{card.title}</div>
                    {card.screenshotLabel && (
                      <AssetPlaceholder label={card.screenshotLabel} aspect="16 / 9" />
                    )}
                    <ul className="flex list-none flex-col gap-2 text-sm">
                      {card.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section id="resultado" className="flex flex-col gap-3 scroll-mt-8">
              <span className="card-kicker">03 · Resultado</span>
              <div className="grid gap-4 sm:grid-cols-3">
                {caseStudy.resultado.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="card-title text-2xl text-accent">{stat.value}</div>
                    <p className="text-sm opacity-80">{stat.label}</p>
                  </div>
                ))}
              </div>
              <ul className="flex list-none flex-col gap-2">
                {caseStudy.resultado.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="reflexion" className="flex flex-col gap-3 scroll-mt-8">
              <span className="card-kicker">04 · Reflexión</span>
              {caseStudy.reflexion.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>
          </div>
        </div>

        <section id="galeria" className="flex flex-col gap-3 py-8 scroll-mt-8">
          <span className="kicker">Galería de pantallas — scroll horizontal</span>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {caseStudy.galeria.map((label) => (
              <AssetPlaceholder
                key={label}
                label={label}
                aspect="9 / 16"
                className="h-[260px] w-[150px] flex-none"
              />
            ))}
          </div>
        </section>

        <hr className="hr" />

        <footer className="flex flex-col gap-4 py-10 sm:flex-row sm:justify-between">
          <Link href={prev ? `/proyectos/${prev.slug}` : "/proyectos"} className="text-sm">
            ← {prev ? `${prev.kicker.split(" · ")[0]} · ${prev.title}` : "Índice de proyectos"}
          </Link>
          <Link href={next ? `/proyectos/${next.slug}` : "/proyectos"} className="text-sm">
            {next ? `${next.kicker.split(" · ")[0]} · ${next.title}` : "Índice de proyectos"} →
          </Link>
        </footer>
      </div>
    </article>
  );
}
