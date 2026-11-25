import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { HomeFeaturedCard, HomeGridCard } from "@/components/HomeCaseCard";
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

      {/* Clientes y proyectos propios */}
      <section className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-8 sm:justify-start">
        {HOME_COPY.clients.map((client) => (
          <span key={client} className="text-sm font-heading font-semibold opacity-80">
            {client}
          </span>
        ))}
      </section>

      <hr className="hr" />

      {/* Casos seleccionados */}
      <section className="flex flex-col gap-6 py-16">
        <FadeIn className="flex flex-col gap-2">
          <h2>{HOME_COPY.selectedCasesTitle}</h2>
          <span className="kicker">{HOME_COPY.selectedCasesKicker}</span>
        </FadeIn>

        <FadeIn>
          <HomeFeaturedCard c={featured} />
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((c, i) => (
            <FadeIn key={c.slug} delay={0.05 * (i + 1)}>
              <HomeGridCard c={c} />
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
