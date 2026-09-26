import type { Metadata } from "next";
import Link from "next/link";
import AssetPlaceholder from "@/components/AssetPlaceholder";
import { SOBRE_MI_COPY } from "@/lib/site-copy";

export const metadata: Metadata = {
  title: "Sobre mí",
  description: SOBRE_MI_COPY.title,
};

export default function SobreMiPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <section className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <AssetPlaceholder label="retrato" aspect="1 / 1" className="w-24 flex-none sm:w-32" />
        <div className="flex flex-col gap-2">
          <span className="card-kicker">{SOBRE_MI_COPY.kicker}</span>
          <h1>{SOBRE_MI_COPY.title}</h1>
        </div>
      </section>

      <hr className="hr" />

      <section className="flex flex-col gap-4 py-8">
        <span className="kicker">{SOBRE_MI_COPY.whatIDoTitle}</span>
        <div className="grid gap-4 sm:grid-cols-2">
          {SOBRE_MI_COPY.whatIDo.map((title) => (
            <div key={title} className="card">
              <div className="card-title">{title}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4 py-8">
        <span className="kicker">{SOBRE_MI_COPY.trayectoriaTitle}</span>
        {/* TODO (pendiente de Daniela): esta sección viene vacía en el HTML
            fuente — no se inventan años, roles ni empresas. Reemplazar este
            placeholder por las entradas reales cuando estén definidas. */}
        <p className="asset-placeholder">
          Contenido pendiente — agregar año, rol y empresa de cada etapa.
        </p>
      </section>

      <hr className="hr" />

      <section className="flex flex-col gap-4 py-8">
        <h2>{SOBRE_MI_COPY.ctaTitle}</h2>
        <Link href="/contacto" className="btn btn-primary self-start">
          {SOBRE_MI_COPY.ctaButton}
        </Link>
      </section>
    </div>
  );
}
