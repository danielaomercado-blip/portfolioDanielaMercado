export type CaseCategory = "Mobile" | "B2B SaaS" | "Fintech";

export interface CaseMeta {
  label: string;
  value: string;
}

export interface CaseCard {
  title: string;
  screenshotLabel?: string;
  items: string[];
}

export interface CaseStat {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  order: number;
  empresa: string;
  categories: CaseCategory[];
  /** Etiqueta corta usada en el índice de /proyectos, p. ej. "Moonflow · Field ops" */
  indexLabel: string;
  /** Kicker de la portada del caso, p. ej. "Caso 01 · Moonflow · Gestión de campo" */
  kicker: string;
  title: string;
  /** Kicker corto usado en las cards de Home, p. ej. "01 · Moonflow · Field ops" */
  cardKicker: string;
  /** Bajada corta usada en las cards de Home */
  summary: string;
  coverLabel: string;
  meta: CaseMeta[];
  problema: string[];
  rolYEquipo: CaseCard[];
  procesoIntro: string;
  procesoCards: CaseCard[];
  resultado: {
    stats: CaseStat[];
    items: string[];
  };
  reflexion: string[];
  galeria: string[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "caso-01",
    order: 1,
    empresa: "Moonflow",
    categories: ["Mobile", "B2B SaaS"],
    indexLabel: "Moonflow · Field ops",
    kicker: "Caso 01 · Moonflow · Gestión de campo",
    title: "App Mobile y Módulo Web de Gestión de Campo",
    cardKicker: "01 · Moonflow · Field ops",
    summary:
      'Add-on nativo que saca la gestión en terreno de la "caja negra": GPS en vivo, evidencias digitales y rendición en tiempo real.',
    coverLabel: "portada del caso — imagen grande (app + dashboard)",
    meta: [
      { label: "Rol", value: "Product Builder / PM / UX Designer" },
      { label: "Alcance", value: "App mobile + módulo web dashboard" },
      { label: "Modelo", value: "Add-on en marketplace SaaS" },
    ],
    problema: [
      'Las operaciones de cobranza y gestión domiciliaria en terreno solían funcionar como una "caja negra" para las organizaciones: existía una desconexión en tiempo real entre los supervisores en oficina y la fuerza de campo, falta de trazabilidad geográfica de los gestores, demoras en el registro de resultados, ausencia de evidencias digitales inmediatas (fotos, audios) y baja optimización de rutas. Además, las empresas clientes requerían una solución nativa e integrada al SaaS de Moonflow que evitara recurrir a plataformas externas fragmentadas.',
    ],
    rolYEquipo: [
      {
        title: "Rol",
        items: ["Product Builder / Product Manager / UX Designer."],
      },
      {
        title: "Equipo",
        items: [
          "Desarrolladores Mobile (iOS/Android), Desarrolladores Web/Backend, Diseñadores UX/UI, QA y Stakeholders de Operaciones/Cobranzas.",
        ],
      },
      {
        title: "Responsabilidades",
        items: [
          "Definición del flujo funcional extremo a extremo, arquitectura de información, empaquetado comercial del add-on, integración con el motor de flujos y especificación técnica de evidencias e interoperabilidad GPS.",
        ],
      },
    ],
    procesoIntro:
      "Se diseñó una solución integral compuesta por dos componentes interconectados: una App Mobile para el gestor de campo y un Módulo Web en el Dashboard de Moonflow para el supervisor.",
    procesoCards: [
      {
        title: "App Mobile · gestor de campo",
        screenshotLabel: "pantallas de la app",
        items: [
          "Autenticación y hoja de ruta priorizada por distancia, monto adeudado y semáforo de riesgo.",
          "Navegación in situ: GPS, llamada directa al deudor y check-in automático al arribar.",
          "Captura multimodal de evidencias: resultado de visita, entrega de cartas, fotos, notas de voz y promesas de pago.",
          "Herramientas de terreno: impresoras portátiles vía Wi-Fi/Bluetooth, optimización de ruta, estadísticas y push operativas.",
        ],
      },
      {
        title: "Módulo Web · supervisor",
        screenshotLabel: "dashboard web",
        items: [
          'Administración: usuarios con rol "Gestor de campo", zonas geográficas y flujo de visitas enviado a las 5:00 AM.',
          "Panel de gestores: métricas en tiempo real y semáforo GPS (Activo, Alerta, Crítico, Inactivo).",
          "Mapa interactivo con ubicación en vivo y acceso a WhatsApp Web.",
          "Auditoría: trazabilidad de gestiones y almacenamiento de fotos y audios en la ficha del cliente.",
        ],
      },
    ],
    resultado: {
      stats: [
        { value: "360°", label: "visibilidad geográfica para supervisión" },
        { value: "Tiempo real", label: "rendición digital, sin digitación manual" },
        { value: "Add-on", label: "lanzado en el marketplace de Moonflow" },
      ],
      items: [
        "Monetización y modelo SaaS: lanzamiento en el marketplace de Moonflow como módulo Add-on.",
        "Eficiencia operativa: eliminación de los tiempos muertos de digitación manual al pasar del papel/Excel a la rendición digital en tiempo real.",
        "Control y trazabilidad: respaldos fotográficos y de audio integrados directamente al historial del cliente.",
      ],
    },
    reflexion: [
      "Lecciones aprendidas. La integración entre aplicaciones móviles y paneles web demanda contemplar escenarios de conectividad inestable en campo, consumo eficiente de batería en segundo plano durante el rastreo GPS y mecanismos sólidos de sincronización offline-online.",
      "Evolución futura. Extender el algoritmo de distribución geográfica automática por cuadrantes o distritos e integrar recomendaciones predictivas sobre la mejor hora para visitar a cada deudor.",
    ],
    galeria: ["hoja de ruta", "check-in", "evidencias", "mapa en vivo", "panel de gestores"],
  },
  {
    slug: "caso-02",
    order: 2,
    empresa: "Moonflow",
    categories: ["B2B SaaS"],
    indexLabel: "Moonflow · PLG",
    kicker: "Caso 02 · Moonflow · Product-Led Growth",
    title: "Healthcheck y Score de Clientes",
    cardKicker: "02 · Moonflow",
    summary: "Motor de adopción autogestionado (PLG).",
    coverLabel: "portada del caso — widget de score",
    meta: [
      { label: "Rol", value: "Lead Product Designer & Product Builder" },
      { label: "Alcance", value: "Widget flotante autogestionado" },
      { label: "Modelo", value: "Propiedad end-to-end" },
    ],
    problema: [
      "Una vez completado el onboarding inicial y superado el paso a producción, los clientes de Moonflow solían estancarse en un uso básico de la plataforma, aprovechando un porcentaje reducido de las funcionalidades avanzadas (flujos automatizados, agentes de inteligencia artificial, portales de autogestión de pago).",
      "No existía una palanca dentro del producto (PLG) que incentivara de manera autónoma al cliente a profundizar en el uso del software. Esta falta de adopción reducía el valor percibido del producto, mantenía la morosidad más alta de lo necesario y sobrecargaba al equipo de CS con gestiones educativas manuales y recurrentes.",
      "Objetivo. Un widget de Healthcheck y Score 100% autogestionado que evalúe semanalmente el nivel de adopción funcional de cada cliente y lo guíe proactivamente hacia la activación de herramientas avanzadas.",
    ],
    rolYEquipo: [
      {
        title: "Rol",
        items: ["Lead Product Designer & Product Builder (propiedad end-to-end)."],
      },
      {
        title: "Equipo",
        items: [
          "Trabajo multidisciplinario con Product Management, Data Analytics e Ingeniería de Software.",
        ],
      },
      {
        title: "Responsabilidades",
        items: [
          "Lógica de negocio y ponderaciones, diseño de sistema e interfaz en Figma, especificación técnica y handover de HUs.",
        ],
      },
    ],
    procesoIntro: "",
    procesoCards: [
      {
        title: "Lógica algorítmica B2B vs. B2C",
        items: [
          "B2C: pondera canales de alta efectividad masiva — WhatsApp automatizado (+10), SMS (+4), Agente AI Moonflow Talk (+10).",
          "B2B: correos automáticos por flujo (+20), llamadas agendadas (+3), actualización de datos por API/ERP (+15).",
          "Cálculo semanal automático con histórico guardado para ver evolución temporal.",
        ],
      },
      {
        title: "Niveles y comunicación contextual",
        items: [
          "Principiante (0–29), Estándar (30–59), Avanzado (60–89), Experto (90–99) y Experto 100/100.",
          'Banner dinámico con mensajes adaptados al nivel: "las implementaciones con mayor score tienen menos morosidad y costos de operación más bajos".',
        ],
      },
      {
        title: "Arquitectura de interfaz (PLG)",
        screenshotLabel: "pestaña flotante + tabs",
        items: [
          "Pestaña lateral flotante en el borde derecho con indicador de categoría actual.",
          "Dos tabs: Mejora tu score (por defecto) y Ya implementado, que agrupa logros.",
          "Deep linking: cada tarea enlaza a la pantalla exacta de configuración, sin búsqueda manual.",
        ],
      },
      {
        title: "Restricciones de layout",
        items: [
          "Cabecera limitada al 25% de la altura total para maximizar el área de tareas.",
          "En categorías densas (hasta 6 tareas) se despliega solo el primer componente relevante.",
        ],
      },
    ],
    resultado: {
      stats: [
        { value: "100%", label: "autogestionado, sin intervención de CS" },
        { value: "Semanal", label: "recálculo de score con histórico" },
        { value: "5 niveles", label: "de principiante a experto 100/100" },
      ],
      items: [
        "Motor autónomo de adopción: se impulsó el uso de funcionalidades clave (Agente AI, portales de clientes, integraciones API/ERP) de forma orgánica y desatendida.",
        "Alineación con los KPIs del cliente: activaciones que aumentan la tasa de contacto de cobranza y reducen morosidad y costos operativos.",
        "Handover impecable: eventos de origen, condiciones lógicas de chips y rutas de navegación especificados sin ambigüedades.",
      ],
    },
    reflexion: [
      "Batch semanal vs. tiempo real. Calcular el score tras cada acción habría exigido procesamiento constante y costoso. Se optó por cálculo semanal programado y se compensó la pérdida de inmediatez explicando la frecuencia del refresco en la interfaz.",
      'Densidad vs. regla de "no scroll". Con múltiples categorías y hasta 6 subtareas el scroll era inevitable: se priorizó cabecera compacta y un solo módulo desplegado.',
      "Gamificación B2B con valor real. Conectar cada punto del score con un beneficio financiero directo convirtió al Healthcheck en un consultor de producto automatizado.",
    ],
    galeria: ["score circular", "mejora tu score", "ya implementado", "matriz de puntajes"],
  },
  {
    slug: "caso-03",
    order: 3,
    empresa: "PAGOS360",
    categories: ["Mobile", "Fintech"],
    indexLabel: "PAGOS360 · Mobile",
    kicker: "Caso 03 · PAGOS360 · App Mobile",
    title: "Onboarding Gamificado para Fintech",
    cardKicker: "03 · PAGOS360",
    summary: "Tiempos muertos convertidos en engagement.",
    coverLabel: "portada del caso — app mobile + minijuegos",
    meta: [
      { label: "Rol", value: "Lead Product & Game Designer" },
      { label: "Alcance", value: "Proceso end-to-end, Figma + Unity" },
      { label: "Contexto", value: "Tesis / consultoría para comitente real" },
    ],
    problema: [
      "Contexto de negocio. PAGOS360 es una plataforma de procesamiento de pagos que necesitaba automatizar y digitalizar el alta de nuevas cuentas de clientes (B2B2C).",
      'El problema de UX/producto. El proceso de registro financiero requiere múltiples pasos obligatorios de alto sesgo analítico y fricción: carga de CUIT, documentación tributaria, validación biométrica y códigos OTP. Esto generaba "tiempos muertos" de hasta 1 minuto en validaciones de API, donde el riesgo de abandono y la ansiedad por seguridad de datos aumentaban drásticamente.',
      "Objetivo. Mitigar la fatiga del usuario en los tiempos muertos de validación, aumentando la retención durante el flujo de registro sin perder la sobriedad y confianza que exige un producto financiero.",
    ],
    rolYEquipo: [
      {
        title: "Rol",
        items: ["Lead Product & Game Designer (proceso end-to-end)."],
      },
      {
        title: "Equipo",
        items: [
          "Proyecto de tesis / consultoría para comitente real, en dupla con un Artista 2D/3D.",
        ],
      },
      {
        title: "Responsabilidades",
        items: [
          "Estrategia de producto y benchmarking, arquitectura de información y diagramas de flujo, diseño de sistema UI/UX y diseño de interacción y mecánicas.",
        ],
      },
    ],
    procesoIntro:
      "En lugar de ver los tiempos de espera como un error del sistema, los transformamos en oportunidades de engagement.",
    procesoCards: [
      {
        title: 'Mapeo de "tiempos muertos" a dinámicas',
        screenshotLabel: "diagramas de lógica y flujo",
        items: [
          'Validación de CUIT (~1 min de espera de API): juego interactivo "Barra de Café" mientras el servidor procesa en segundo plano.',
          'Verificación OTP: minijuego táctil ("Acertijo") conectado a la identidad visual de la marca.',
          "Educación en ciberseguridad: quiz de respuesta rápida que entretiene y previene fraudes durante la captura de datos sensibles.",
        ],
      },
      {
        title: "Carga sensible y entretenimiento (UI craft)",
        screenshotLabel: "formulario fiscal vs. minijuego",
        items: [
          "Interfaz en light mode con tonos fríos y tipografía limpia para que los formularios tributarios y biométricos se sintieran rigurosos y seguros.",
          "Dinámicas lúdicas aisladas de forma modular: el usuario siempre puede pausar, saltar o salir cuando la validación está lista.",
        ],
      },
    ],
    resultado: {
      stats: [
        { value: "5 etapas", label: "biometría, DNI, CUIT, datos fiscales y OTP" },
        { value: "~1 min", label: "de espera pasiva convertida en tiempo activo" },
        { value: "Modular", label: "arquitectura actualizable por el cliente" },
      ],
      items: [
        "Solución entregada: prototipo completamente funcional de app mobile (Android) en Unity/Figma que guía al solicitante paso a paso por el flujo de alta.",
        "Impacto en la experiencia: el tiempo de espera pasivo pasó a ser tiempo activo de fidelización y educación en ciberseguridad, con retroalimentación visual constante y recompensas por avance.",
        "Escalabilidad: el cliente puede actualizar las preguntas del quiz o cambiar las mecánicas según requerimientos normativos o de marketing.",
      ],
    },
    reflexion: [
      "El balance entre gamificación y confianza. El mayor aprendizaje fue encontrar la frontera exacta entre hacer un flujo amigable y no banalizar el registro de datos financieros. La ludificación en fintech debe ser un catalizador de tranquilidad, no una distracción que genere desconfianza.",
      "¿Qué haría diferente hoy? Con un enfoque puramente SaaS/Growth, validaría primero el impacto con micro-interacciones livianas en Lottie/Figma antes de construir minijuegos completos en 3D en Unity, logrando un time-to-market mucho más ágil con resultados similares de retención.",
    ],
    galeria: ["diagrama de flujo", "carga de CUIT", "barra de café", "quiz de seguridad", "OTP"],
  },
  {
    slug: "caso-04",
    order: 4,
    empresa: "Moonflow",
    categories: ["B2B SaaS"],
    indexLabel: "Moonflow · B2B SaaS",
    kicker: "Caso 04 · Moonflow · B2B SaaS",
    title: "Widget de Checklist de Onboarding B2B",
    cardKicker: "04 · Moonflow",
    summary: "Fuente única de verdad para el go-live.",
    coverLabel: "portada del caso — widget de checklist",
    meta: [
      { label: "Rol", value: "Lead Product Designer & Product Builder" },
      { label: "Alcance", value: "Widget flotante in-product" },
      { label: "Modelo", value: "Propiedad end-to-end" },
    ],
    problema: [
      "Contexto de negocio. Moonflow es una plataforma SaaS B2B de gestión de cobranzas. Tras completar el onboarding inicial y agendar la llamada de kickoff, los nuevos clientes debían configurar múltiples módulos técnicos (cuentas bancarias, pasarelas, canales de comunicación, estrategias) para poder salir a producción.",
      "El problema de producto y negocio. La falta de visibilidad centralizada sobre las tareas pendientes generaba desalineación entre el cliente y el especialista de onboarding. Esto creaba un cuello de botella operativo, extendía el time-to-PRD, aumentaba la carga de soporte manual y ponía en riesgo la conversión temprana de las cuentas.",
      'Objetivo. Un widget flotante e interactivo dentro del producto que sirva como "fuente única de verdad" del proceso de implementación, automatizando la verificación de estados y acelerando la activación en producción.',
    ],
    rolYEquipo: [
      {
        title: "Rol",
        items: ["Lead Product Designer & Product Builder (propiedad end-to-end)."],
      },
      {
        title: "Equipo",
        items: [
          "Coordinación con Customer Success / Onboarding Specialists, Product Management e Ingeniería de Software.",
        ],
      },
      {
        title: "Responsabilidades",
        items: [
          "Diseño funcional y lógica de negocio, sistema UI/UX en Figma, especificación técnica y handover de HUs con integración a HubSpot vía webhooks.",
        ],
      },
    ],
    procesoIntro:
      "En lugar de diseñar solo un componente visual de lista, estructuré una máquina de estados condicional y un flujo de permisos para dos actores clave.",
    procesoCards: [
      {
        title: "Permisos y roles",
        items: [
          "Onboarding Specialist: control total — edita fechas límite, asigna asesores, agrega o quita módulos y valida checks manuales.",
          "Responsable de OB (cliente): visualiza avances, entra por hipervínculos de configuración directa y mueve módulos opcionales.",
        ],
      },
      {
        title: "Estados automáticos vs. manuales",
        items: [
          'Automáticos: el sistema tilda la tarea cuando la API detecta la condición (WhatsApp "activo y conectado", KYC de pasarela "verificado", portal "publicado y activo").',
          "Manuales: estrategias de cobranza y credenciales de integración quedan a criterio del especialista.",
        ],
      },
      {
        title: "Casos de borde y excepciones",
        screenshotLabel: 'semáforo de SLA + sección "sin agregar"',
        items: [
          "Semáforo y alerta de SLA: si se alcanza la fecha de salida a producción sin completar tareas, se actualiza la fecha y se activa un semáforo rojo en la cabecera.",
          'Sección "sin agregar": contenedor de módulos omitidos con transferencia bidireccional; las tareas ya completadas no se pueden eliminar.',
          "Filtros geográficos y de plan: ocultamiento automático de pasarelas sin cobertura o funciones fuera del plan contratado.",
        ],
      },
      {
        title: "Documentación para ingeniería",
        screenshotLabel: "HUs y criterios de aceptación",
        items: [
          "Historias de usuario con comportamientos de UI, enlaces a documentación de ayuda y diseño de la Fase 2 de integración con HubSpot.",
          "Webhooks para sincronizar la fecha de go live y las asignaciones de Customer Success / AM.",
        ],
      },
    ],
    resultado: {
      stats: [
        { value: "1 fuente", label: "única de verdad para el go-live" },
        { value: "Menos PRD", label: "tiempo de salida a producción reducido" },
        { value: "2 roles", label: "matriz de permisos cliente / especialista" },
      ],
      items: [
        "Estandarización del go-live: se eliminó la incertidumbre en la configuración post-venta, reduciendo fricción y tiempos de salida a producción.",
        "Eficiencia operativa en CS: menos reuniones y correos de seguimiento, al convertir el widget en el canal principal de autogestión del cliente.",
        "Aceleración del desarrollo: la definición exhaustiva de casos de borde y criterios de aceptación eliminó re-trabajo y bloqueos técnicos.",
      ],
    },
    reflexion: [
      "Priorización del scope (MVP). Se desacopló la experiencia visual del widget de las automatizaciones pesadas de CRM: la Fase 1 se enfocó en la interacción y la lógica interna, postergando los webhooks bidireccionales con HubSpot a la Fase 2.",
      "Automatización vs. human-in-the-loop. Dar flexibilidad al especialista para modificar opciones preseleccionadas o ajustar fechas evitó que fallas externas bloquearan al cliente.",
      "Madurez de producto. Diseñar un checklist B2B no es un ejercicio de UI, sino un contrato operativo compartido entre el cliente y Customer Success donde la claridad funcional impulsa la retención.",
    ],
    galeria: ["widget cerrado", "módulos anidados", "semáforo de SLA", "sin agregar"],
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

export function getAdjacentCases(slug: string): {
  prev: CaseStudy | undefined;
  next: CaseStudy | undefined;
} {
  const index = CASE_STUDIES.findIndex((c) => c.slug === slug);
  if (index === -1) return { prev: undefined, next: undefined };
  const prev = index > 0 ? CASE_STUDIES[index - 1] : undefined;
  const next = index < CASE_STUDIES.length - 1 ? CASE_STUDIES[index + 1] : undefined;
  return { prev, next };
}
