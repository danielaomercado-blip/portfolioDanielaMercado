import Link from "next/link";
import AssetPlaceholder from "@/components/AssetPlaceholder";
import FadeIn from "@/components/FadeIn";
import { CASE_STUDIES } from "@/lib/case-studies";
import { CONTACT_INFO, CV_FILE_HREF } from "@/lib/constants";
import { HOME_COPY } from "@/lib/site-copy";

export default function Home() {
  const [featured, ...rest] = CASE_STUDIES;

  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* Hero */}
      <section className="flex flex-col gap-4 py-16 sm:py-24">
        <FadeIn>
          <span className="tag tag-outline">{HOME_COPY.kicker.toUpperCase()}</span>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h1 className="max-w-2xl">{HOME_COPY.heroTitle}</h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="max-w-xl text-base opacity-80">{HOME_COPY.heroBody}</p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="mt-2 flex flex-wrap gap-3">
            <Link href="/proyectos" className="btn btn-primary">
              {HOME_COPY.primaryCta}
            </Link>
            <a href={CV_FILE_HREF} className="btn btn-secondary">
              {HOME_COPY.secondaryCta}
            </a>
          </div>
        </FadeIn>
      </section>

      <hr className="hr" />

      {/* Trabajé con */}
      <section className="flex flex-col items-center gap-6 py-8 sm:flex-row">
        <span className="kicker flex-none">{HOME_COPY.workedWithLabel}</span>
        <div className="flex flex-1 flex-wrap items-center gap-6">
          {HOME_COPY.clients.map((client, i) =>
            client ? (
              <span key={client} className="text-sm font-heading font-semibold opacity-80">
                {client}
              </span>
            ) : (
              <AssetPlaceholder key={`client-${i}`} label="logo" aspect="3 / 1" className="w-28" />
            ),
          )}
        </div>
      </section>

      <hr className="hr" />

      {/* Casos seleccionados */}
      <section className="flex flex-col gap-6 py-16">
        <FadeIn className="flex flex-col gap-2">
          <h2>{HOME_COPY.selectedCasesTitle}</h2>
          <span className="kicker">{HOME_COPY.selectedCasesKicker}</span>
        </FadeIn>

        <FadeIn>
          <Link
            href={`/proyectos/${featured.slug}`}
            className="card elev-sm block gap-4 no-underline hover:elev-md"
          >
            <AssetPlaceholder label={featured.coverLabel} aspect="21 / 9" />
            <div className="card-kicker">{featured.cardKicker}</div>
            <div className="card-title text-xl">{featured.title}</div>
            <p className="card-body">{featured.summary}</p>
          </Link>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-3">
          {rest.map((c, i) => (
            <FadeIn key={c.slug} delay={0.05 * (i + 1)}>
              <Link href={`/proyectos/${c.slug}`} className="card elev-sm h-full no-underline hover:elev-md">
                <AssetPlaceholder label="imagen" aspect="4 / 3" />
                <div className="card-kicker">{c.cardKicker}</div>
                <div className="card-title">{c.title}</div>
                <p className="card-body">{c.summary}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <hr className="hr" />

      {/* Cómo trabajo */}
      <section className="flex flex-col gap-6 py-16">
        <FadeIn>
          <h2>{HOME_COPY.howIWorkTitle}</h2>
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-3">
          {HOME_COPY.howIWorkSteps.map((step, i) => (
            <FadeIn key={step.number} delay={0.05 * i}>
              <span className="card-kicker">{step.number}</span>
              <div className="card-title mt-2">{step.title}</div>
            </FadeIn>
          ))}
        </div>
      </section>

      <hr className="hr" />

      {/* CTA final */}
      <section className="flex flex-col gap-4 py-16">
        <FadeIn>
          <h2 className="max-w-xs">{HOME_COPY.ctaTitle}</h2>
        </FadeIn>
        <FadeIn delay={0.05}>
          <div className="flex flex-wrap gap-3">
            <Link href="/contacto" className="btn btn-primary">
              {HOME_COPY.ctaPrimary}
            </Link>
            <a href={CONTACT_INFO.linkedin} className="btn btn-secondary">
              {HOME_COPY.ctaSecondary}
            </a>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
