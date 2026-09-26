import type { Metadata } from "next";
import ProjectsFilter from "@/components/ProjectsFilter";
import { PROYECTOS_COPY } from "@/lib/site-copy";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Cuatro casos de producto, de Moonflow y PAGOS360.",
};

export default function ProyectosPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <div className="flex flex-col gap-2 pb-8">
        <span className="card-kicker">{PROYECTOS_COPY.kicker}</span>
        <h1>{PROYECTOS_COPY.title}</h1>
      </div>
      <ProjectsFilter />
    </div>
  );
}
