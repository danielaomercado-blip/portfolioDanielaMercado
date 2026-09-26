export const HOME_COPY = {
  kicker: "Product Builder",
  heroTitle: "Transformo problemas complejos en productos funcionales y escalables.",
  heroBody:
    "Combino arquitectura lógica, diseño UX y herramientas de vanguardia con IA para llevar soluciones del research al entorno de producción.",
  primaryCta: "Ver proyectos",
  secondaryCta: "Descargar CV",
  workedWithLabel: "Trabajé con",
  // El HTML fuente solo confirma dos logos por nombre (Moonflow, PAGOS360);
  // el tercer slot queda como placeholder pendiente.
  clients: ["Moonflow", "PAGOS360", null] as (string | null)[],
  selectedCasesKicker: "4 casos · del más reciente al primero",
  selectedCasesTitle: "Casos seleccionados",
  howIWorkTitle: "Cómo trabajo",
  // El HTML fuente solo trae los títulos de estos 3 pasos, sin copy de cuerpo.
  howIWorkSteps: [
    { number: "01", title: "Entender" },
    { number: "02", title: "Diseñar" },
    { number: "03", title: "Construir" },
  ],
  ctaTitle: "¿Construimos algo juntos?",
  ctaPrimary: "Escribime",
  ctaSecondary: "LinkedIn",
};

export const SOBRE_MI_COPY = {
  kicker: "Sobre mí",
  title: "Diseño y construyo, de punta a punta",
  whatIDoTitle: "Qué hago",
  // Solo títulos en el HTML fuente, sin copy de cuerpo por card.
  whatIDo: ["Producto", "UX / UI", "IA y automatización", "Front-end"],
  trayectoriaTitle: "Trayectoria",
  ctaTitle: "Hablemos",
  ctaButton: "Escribime",
};

export const CONTACTO_COPY = {
  kicker: "Contacto",
  title: "¿Construimos algo juntos?",
  submitLabel: "Enviar",
  directTitle: "O directo",
};

export const PROYECTOS_COPY = {
  kicker: "Proyectos",
  title: "4 casos, mismo recorrido",
};

export const CATEGORIES = ["Todos", "Mobile", "B2B SaaS", "Fintech"] as const;
