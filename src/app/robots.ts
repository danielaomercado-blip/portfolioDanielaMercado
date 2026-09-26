import type { MetadataRoute } from "next";

// TODO (pendiente de Daniela): actualizar con el dominio real de Vercel/custom domain.
const BASE_URL = "https://example.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
