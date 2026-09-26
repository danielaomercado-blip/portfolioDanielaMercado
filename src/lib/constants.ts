export const SITE_NAME = "Daniela Mercado";
export const SITE_TITLE = "Daniela Mercado — Product Builder";
export const SITE_DESCRIPTION =
  "Product Builder / Product Owner. Transformo problemas complejos en productos funcionales y escalables.";

export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/contacto", label: "Contacto" },
] as const;

/**
 * TODO (pendiente de Daniela): reemplazar por los valores reales.
 * El HTML fuente traía placeholders equivalentes (hola@ejemplo.com, "#").
 */
export const CONTACT_INFO = {
  email: "hola@ejemplo.com",
  linkedin: "#",
  calendly: "#",
};

/** TODO (pendiente de Daniela): agregar el PDF real en /public y actualizar la ruta. */
export const CV_FILE_HREF = "/cv-daniela-mercado.pdf";
