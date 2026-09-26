import type { MetadataRoute } from "next";
import { CASE_STUDIES } from "@/lib/case-studies";

// TODO (pendiente de Daniela): actualizar con el dominio real de Vercel/custom domain.
const BASE_URL = "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/proyectos", "/sobre-mi", "/contacto"].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const caseRoutes = CASE_STUDIES.map((c) => ({
    url: `${BASE_URL}/proyectos/${c.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...caseRoutes];
}
