export type CaseCategory = "Mobile" | "B2B SaaS" | "Fintech";

export interface ImageRef {
  src: string;
  alt: string;
}

export interface CaseMeta {
  label: string;
  lines: string[];
}

export interface CaseCard {
  title: string;
  items: string[];
}

export interface CaseStat {
  value: string;
  label: string;
}

/** Portada compuesta del header de cada caso. */
export type CaseCover =
  | {
      kind: "frame";
      bar: string;
      web: ImageRef;
      phones: { image: ImageRef; className: string }[];
    }
  | {
      kind: "phones-only";
      phones: { image: ImageRef; className: string }[];
    }
  | {
      kind: "wide";
      bar: string;
      media: { type: "video"; src: string; alt: string } | { type: "image"; image: ImageRef };
    };

/** Un paso del timeline de Proceso. */
export interface ProcessStep {
  number: string;
  title: string;
  body?: string;
  images: ImageRef[];
  /** Cuando la captura todavía no existe (pendiente de Daniela). */
  placeholder?: string;
  layout?: "pair" | "tall" | "flow" | "default";
}

export interface SolutionCard {
  title: string;
  items: string[];
  shots?: ImageRef[];
}

export interface MiniGame {
  title: string;
  body: string;
  video: ImageRef;
}

export interface GalleryFigure {
  image: ImageRef;
  caption: string;
  chrome?: string;
}

export interface GalleryGroup {
  title: string;
  countLabel: string;
  figures: GalleryFigure[];
}

export interface CaseStudy {
  slug: string;
  order: number;
  empresa: string;
  categories: CaseCategory[];
  indexLabel: string;
  tagLabel: string;
  sub: string;
  title: string;
  lead: string;
  cardKicker: string;
  summary: string;
  cover: CaseCover;
  homeImage: ImageRef | { web: ImageRef; phones: { image: ImageRef; className: string }[] };
  meta: CaseMeta[];
  problema: string[];
  rolYEquipo: CaseCard[];
  procesoIntro: string[];
  minijuegos?: MiniGame[];
  processSteps: ProcessStep[];
  solutionLead?: string;
  solutionCards: SolutionCard[];
  mosaicImages?: ImageRef[];
  resultado: {
    stats: CaseStat[];
    items: string[];
  };
  reflexion: string[];
  galleryGroups: GalleryGroup[];
}

const img = (dir: string, file: string, alt: string): ImageRef => ({
  src: `/images/${dir}/${file}`,
  alt,
});

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "caso-01",
    order: 1,
    empresa: "Moonflow",
    categories: ["Mobile", "B2B SaaS"],
    indexLabel: "Moonflow · Field ops",
    tagLabel: "CASO 01",
    sub: "Moonflow · Field ops",
    title: "App Mobile y Módulo Web de Gestión de Campo",
    lead: "Un add-on nativo que conecta en tiempo real al supervisor en oficina con la fuerza de cobranza en terreno: rutas, GPS en vivo y evidencias digitales.",
    cardKicker: "01 · Moonflow · Field ops",
    summary:
      'Add-on nativo que saca la gestión en terreno de la "caja negra": GPS en vivo, evidencias digitales y rendición en tiempo real.',
    cover: {
      kind: "frame",
      bar: "Moonflow · Gestión de campo · Mapa",
      web: img("caso-01", "web-mapa.png", ""),
      phones: [
        {
          image: img("caso-01", "hoja-de-ruta.png", ""),
          className: "left-0 top-[27%] w-[30%]",
        },
        {
          image: img("caso-01", "navegacion.png", ""),
          className: "left-[27%] top-[36%] w-[30%]",
        },
      ],
    },
    homeImage: {
      web: img("caso-01", "web-mapa.png", ""),
      phones: [
        { image: img("caso-01", "hoja-de-ruta.png", ""), className: "left-[7%] top-[20%] w-[20%]" },
        { image: img("caso-01", "navegacion.png", ""), className: "left-[24%] top-[30%] w-[20%]" },
      ],
    },
    meta: [
      { label: "Rol", lines: ["Product Builder", "PM · UX Designer"] },
      { label: "Alcance", lines: ["App iOS / Android", "Módulo web"] },
      { label: "Modelo", lines: ["Add-on SaaS", "B2B"] },
    ],
    problema: [
      'Las operaciones de cobranza y gestión domiciliaria en terreno solían funcionar como una "caja negra" para las organizaciones: existía una desconexión en tiempo real entre los supervisores en oficina y la fuerza de campo, falta de trazabilidad geográfica de los gestores, demoras en el registro de resultados, ausencia de evidencias digitales inmediatas (fotos, audios) y baja optimización de rutas. Además, las empresas clientes requerían una solución nativa e integrada al SaaS de Moonflow que evitara recurrir a plataformas externas fragmentadas.',
    ],
    rolYEquipo: [
      { title: "Rol", items: ["Product Builder / Product Manager / UX Designer."] },
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
    procesoIntro: [
      "El proceso arrancó en Miro: relevamiento con el cliente, definición del flujo automático, mapa de navegación y prototipado del recorrido principal.",
    ],
    processSteps: [
      {
        number: "01",
        title: "Requerimientos del cliente",
        body: "Relevamiento de funcionalidades para la app del gestor y para el módulo web del supervisor.",
        images: [
          img("caso-01", "proceso-requerimientos.png", "Requerimientos del cliente: app"),
          img("caso-01", "proceso-mdc.png", "Requerimientos del cliente: módulo web"),
        ],
        layout: "pair",
      },
      {
        number: "02",
        title: "Flujo automático",
        body: "Cómo entra un deudor al módulo de gestión de campo, cómo se asigna al gestor y cuándo vuelve al flujo de comunicaciones.",
        images: [img("caso-01", "proceso-mdc2.png", "Flujo automático")],
      },
      {
        number: "03",
        title: "Mapa de navegación",
        body: "Recorridos de la app: hoja de ruta, check-in y resultado, promesa de pago, pago a verificar, llamada, cancelación, impresión, mapa y estadísticas.",
        images: [img("caso-01", "proceso-nav.jpg", "Mapa de navegación de la app")],
        layout: "tall",
      },
      {
        number: "04",
        title: "Prototipado",
        body: "Wireframes del recorrido principal: login, hoja de ruta, detalle del cliente, recorrido, check-in y resultado.",
        images: [img("caso-01", "proceso-prototipado.png", "Prototipado en Miro")],
      },
    ],
    solutionLead:
      "Se diseñó una solución integral compuesta por dos componentes interconectados: una App Mobile para el gestor de campo y un Módulo Web en el Dashboard de Moonflow para el supervisor.",
    solutionCards: [
      {
        title: "App Mobile · gestor de campo",
        items: [
          "Autenticación y hoja de ruta priorizada por distancia, monto adeudado y semáforo de riesgo.",
          "Navegación in situ: GPS, llamada directa al deudor y check-in automático al arribar.",
          "Captura multimodal de evidencias: resultado de visita, entrega de cartas, fotos, notas de voz y promesas de pago.",
          "Herramientas de terreno: impresoras portátiles vía Wi-Fi/Bluetooth, optimización de ruta, estadísticas y push operativas.",
        ],
      },
      {
        title: "Módulo Web · supervisor",
        items: [
          'Administración: usuarios con rol "Gestor de campo", zonas geográficas y flujo de visitas enviado a las 5:00 AM.',
          "Panel de gestores: métricas en tiempo real y semáforo GPS (Activo, Alerta, Crítico, Inactivo).",
          "Mapa interactivo con ubicación en vivo y acceso a WhatsApp Web.",
          "Auditoría: trazabilidad de gestiones y almacenamiento de fotos y audios en la ficha del cliente.",
        ],
        shots: [
          img("caso-01", "web-gestores.png", "Gestores"),
          img("caso-01", "web-visitas.png", "Visitas"),
          img("caso-01", "web-mapa.png", "Mapa"),
        ],
      },
    ],
    mosaicImages: [
      img("caso-01", "pago.png", ""),
      img("caso-01", "estadisticas.png", ""),
      img("caso-01", "hoja-de-ruta.png", ""),
      img("caso-01", "imprimir.png", ""),
      img("caso-01", "gestion.png", ""),
      img("caso-01", "ordenes.png", ""),
      img("caso-01", "whatsapp.png", ""),
      img("caso-01", "detalle-cliente.png", ""),
      img("caso-01", "navegacion.png", ""),
      img("caso-01", "compromiso.png", ""),
      img("caso-01", "formulario.png", ""),
      img("caso-01", "mapa-gestor.png", ""),
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
    galleryGroups: [
      {
        title: "App Mobile · gestor de campo",
        countLabel: "12 pantallas · deslizá →",
        figures: [
          { image: img("caso-01", "hoja-de-ruta.png", "Hoja de ruta"), caption: "Hoja de ruta" },
          { image: img("caso-01", "detalle-cliente.png", "Detalle del cliente"), caption: "Detalle del cliente" },
          { image: img("caso-01", "navegacion.png", "Navegación y check-in"), caption: "Navegación y check-in" },
          { image: img("caso-01", "gestion.png", "Resultado de visita"), caption: "Resultado de visita" },
          { image: img("caso-01", "formulario.png", "Formulario de visita"), caption: "Formulario de visita" },
          { image: img("caso-01", "compromiso.png", "Compromiso de pago"), caption: "Compromiso de pago" },
          { image: img("caso-01", "pago.png", "Pago a verificar"), caption: "Pago a verificar" },
          { image: img("caso-01", "ordenes.png", "Órdenes de pago"), caption: "Órdenes de pago" },
          { image: img("caso-01", "imprimir.png", "Impresión de cartas"), caption: "Impresión de cartas" },
          { image: img("caso-01", "mapa-gestor.png", "Mapa del gestor"), caption: "Mapa del gestor" },
          { image: img("caso-01", "whatsapp.png", "Canal con supervisor"), caption: "Canal con supervisor" },
          { image: img("caso-01", "estadisticas.png", "Mis estadísticas"), caption: "Mis estadísticas" },
        ],
      },
      {
        title: "Módulo Web · supervisor",
        countLabel: "3 pantallas · deslizá →",
        figures: [
          { image: img("caso-01", "web-mapa.png", "Mapa en vivo"), caption: "Mapa en vivo", chrome: "Mapa en vivo" },
          {
            image: img("caso-01", "web-visitas.png", "Historial de visitas"),
            caption: "Historial de visitas",
            chrome: "Historial de visitas",
          },
          {
            image: img("caso-01", "web-gestores.png", "Panel de gestores"),
            caption: "Panel de gestores",
            chrome: "Panel de gestores",
          },
        ],
      },
    ],
  },
  {
    slug: "caso-02",
    order: 2,
    empresa: "Moonflow",
    categories: ["B2B SaaS"],
    indexLabel: "Moonflow · PLG",
    tagLabel: "CASO 02",
    sub: "Moonflow · Product-Led Growth",
    title: "Healthcheck y Score de Clientes",
    lead: "Un widget autogestionado que evalúa cada semana el nivel de adopción de cada cliente y lo guía hacia la activación de las herramientas avanzadas.",
    cardKicker: "02 · Moonflow",
    summary: "Motor de adopción autogestionado (PLG).",
    cover: {
      kind: "wide",
      bar: "Moonflow · Control center · Healthcheck",
      media: { type: "video", src: "/images/caso-02/healthcheck.mp4", alt: "El widget de Healthcheck se abre desde el borde del dashboard y muestra el score del cliente" },
    },
    homeImage: img("home", "hc-95-crop.png", ""),
    meta: [
      { label: "Rol", lines: ["Lead Product Designer", "Product Builder"] },
      { label: "Alcance", lines: ["Widget flotante", "autogestionado"] },
      { label: "Modelo", lines: ["Propiedad", "end-to-end"] },
    ],
    problema: [
      "Una vez completado el onboarding inicial y superado el paso a producción, los clientes de Moonflow solían estancarse en un uso básico de la plataforma, aprovechando un porcentaje reducido de las funcionalidades avanzadas (flujos automatizados, agentes de inteligencia artificial, portales de autogestión de pago).",
      "No existía una palanca dentro del producto (PLG) que incentivara de manera autónoma al cliente a profundizar en el uso del software. Esta falta de adopción reducía el valor percibido del producto, mantenía la morosidad más alta de lo necesario y sobrecargaba al equipo de CS con gestiones educativas manuales y recurrentes.",
      "Objetivo. Un widget de Healthcheck y Score 100% autogestionado que evalúe semanalmente el nivel de adopción funcional de cada cliente y lo guíe proactivamente hacia la activación de herramientas avanzadas.",
    ],
    rolYEquipo: [
      { title: "Rol", items: ["Lead Product Designer & Product Builder (propiedad end-to-end)."] },
      {
        title: "Equipo",
        items: ["Trabajo multidisciplinario con Product Management, Data Analytics e Ingeniería de Software."],
      },
      {
        title: "Responsabilidades",
        items: ["Lógica de negocio y ponderaciones, diseño de sistema e interfaz en Figma, especificación técnica y handover de HUs."],
      },
    ],
    procesoIntro: [
      "Antes de diseñar el widget, ordené el problema en Miro y definí qué hace Customer Success cuando un cliente queda con score bajo.",
    ],
    processSteps: [
      {
        number: "01",
        title: "Brainstorming",
        body: "Del problema a las soluciones: datos que el cliente no carga o no actualiza, errores que solo se informan por correo, ideas de indicadores y alertas, y las soluciones posibles.",
        images: [img("caso-02", "proceso-brainstorm.jpg", "Brainstorming: definir el problema, juntar ideas e identificar soluciones")],
      },
      {
        number: "02",
        title: "Proceso ante score bajo",
        body: "Al terminar el onboarding se califica el proyecto como OK o deficiente. Si está deficiente, OB y CS arman un plan de acción; si está OK, se identifican oportunidades de up/cross.",
        images: [img("caso-02", "proceso-score-bajo.jpg", "Diagrama del proceso a aplicar ante un score bajo del cliente")],
        layout: "flow",
      },
      {
        number: "03",
        title: "Evolución del diseño",
        body: "Iteraciones del widget de izquierda a derecha: de un score con gráfico de evolución y lista de tareas, a una cabecera más compacta, categorías desplegables y la versión final con el score circular.",
        images: [img("caso-02", "proceso-evolucion.png", "Evolución del diseño del widget de Healthcheck")],
      },
      {
        number: "04",
        title: "Mejoras y correcciones",
        body: "Variantes sobre el dashboard: banner con o sin corona en cada tab, y el texto de la pestaña flotante (fijo o cambiante según la etapa).",
        images: [img("caso-02", "proceso-mejoras.png", "Mejoras y correcciones: banner con y sin corona, texto de la pestaña")],
      },
    ],
    solutionCards: [
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
        items: [
          "Pestaña lateral flotante en el borde derecho con indicador de categoría actual.",
          "Dos tabs: Mejora tu score (por defecto) y Ya implementado, que agrupa logros.",
          "Deep linking: cada tarea enlaza a la pantalla exacta de configuración, sin búsqueda manual.",
        ],
        shots: [
          img("caso-02", "hc-ubicacion.png", "Ubicación: pestaña flotante en el borde derecho del dashboard"),
          img("caso-02", "hc-tabs.png", "Tabs: Mejora tu score y Ya implementado"),
        ],
      },
      {
        title: "Restricciones de layout",
        items: [
          "Cabecera limitada al 25% de la altura total para maximizar el área de tareas.",
          "En categorías densas (hasta 6 tareas) se despliega solo el primer componente relevante.",
        ],
        shots: [img("caso-02", "hc-mejora.png", "Cabecera compacta y primer componente desplegado")],
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
    galleryGroups: [
      {
        title: "Widget de Healthcheck",
        countLabel: "8 pantallas · deslizá →",
        figures: [
          { image: img("caso-02", "hc-v2.png", "Exploración · categoría desplegada"), caption: "Exploración · categoría desplegada" },
          { image: img("caso-02", "hc-v3.png", "Exploración · tareas con antigüedad"), caption: "Exploración · tareas con antigüedad" },
          { image: img("caso-02", "hc-v6.png", "Exploración · evolución del score"), caption: "Exploración · evolución del score" },
          { image: img("caso-02", "hc-mejora.png", "Mejora tu score · oportunidades"), caption: "Mejora tu score · oportunidades" },
          { image: img("caso-02", "hc-tabs.png", "Ya implementado · 60/100"), caption: "Ya implementado · 60/100" },
          { image: img("caso-02", "hc-15.png", "Nivel Nuevo · 15/100"), caption: "Nivel Nuevo · 15/100" },
          { image: img("caso-02", "hc-55.png", "Nivel Estándar · 55/100"), caption: "Nivel Estándar · 55/100" },
          { image: img("caso-02", "hc-95.png", "Nivel Experto · 95/100"), caption: "Nivel Experto · 95/100" },
        ],
      },
      {
        title: "En el dashboard",
        countLabel: "1 pantalla",
        figures: [
          {
            image: img("caso-02", "hc-ubicacion.png", "Pestaña flotante de Healthcheck en el borde derecho del dashboard"),
            caption: "Pestaña flotante en el dashboard",
            chrome: "Cuentas por cobrar · pestaña Healthcheck",
          },
        ],
      },
    ],
  },
  {
    slug: "caso-03",
    order: 3,
    empresa: "PAGOS360",
    categories: ["Mobile", "Fintech"],
    indexLabel: "PAGOS360 · Mobile",
    tagLabel: "CASO 03",
    sub: "PAGOS360 · Fintech · App mobile",
    title: "Onboarding Gamificado para Fintech",
    lead: "Un flujo de alta de cuentas que convierte los tiempos muertos de validación en minijuegos, sin perder la sobriedad y confianza que exige un producto financiero.",
    cardKicker: "03 · PAGOS360",
    summary: "Tiempos muertos convertidos en engagement.",
    cover: {
      kind: "phones-only",
      phones: [
        { image: img("caso-03", "cuit.webp", ""), className: "left-[2%] top-[16%] w-[29%] rounded-[14px]" },
        { image: img("caso-03", "codigo.webp", ""), className: "left-[68%] top-[20%] w-[29%] rounded-[14px]" },
        { image: img("caso-03", "desafio-4.webp", ""), className: "left-[33%] top-[4%] w-[33%] rounded-[14px] z-10" },
      ],
    },
    homeImage: img("home", "p360-desafios-crop.png", ""),
    meta: [
      { label: "Rol", lines: ["Lead Product &", "Game Designer"] },
      { label: "Alcance", lines: ["App Android", "Figma + Unity"] },
      { label: "Año", lines: ["2022", "Primer proyecto"] },
    ],
    problema: [
      "Contexto de negocio. PAGOS360 es una plataforma de procesamiento de pagos que necesitaba automatizar y digitalizar el alta de nuevas cuentas de clientes (B2B2C).",
      'El problema de UX/producto. El proceso de registro financiero requiere múltiples pasos obligatorios de alto sesgo analítico y fricción: carga de CUIT, documentación tributaria, validación biométrica y códigos OTP. Esto generaba "tiempos muertos" de hasta 1 minuto en validaciones de API, donde el riesgo de abandono y la ansiedad por seguridad de datos aumentaban drásticamente.',
      "Objetivo. Mitigar la fatiga del usuario en los tiempos muertos de validación, aumentando la retención durante el flujo de registro sin perder la sobriedad y confianza que exige un producto financiero.",
    ],
    rolYEquipo: [
      { title: "Rol", items: ["Lead Product & Game Designer (proceso end-to-end)."] },
      { title: "Equipo", items: ["Proyecto de tesis / consultoría para comitente real, en dupla con un Artista 2D/3D."] },
      {
        title: "Responsabilidades",
        items: ["Estrategia de producto y benchmarking, arquitectura de información y diagramas de flujo, diseño de sistema UI/UX y diseño de interacción y mecánicas."],
      },
    ],
    procesoIntro: [
      "En lugar de ver los tiempos de espera como un error del sistema, los transformamos en oportunidades de engagement.",
      "Fue mi primer proyecto, que comencé en 2022. A nivel pantallas la app no tiene mucha navegación, pero tuvimos que crear 3 minijuegos completos de principio a fin, cada uno con sus propios marcadores, estética, interfaz, código, mecánicas y UX/UI.",
    ],
    minijuegos: [
      {
        title: "Cafecito",
        body: "Durante la validación del CUIT (~1 min de espera de la API): con el touch se mueve la taza de derecha a izquierda.",
        video: { src: "/images/caso-03/juego-cafecito.mp4", alt: "Gameplay del minijuego Cafecito" },
      },
      {
        title: "Runner",
        body: "Después de enviar un botón de pago: una carrera hasta que ingresa el pago.",
        video: { src: "/images/caso-03/juego-runner.mp4", alt: "Gameplay del minijuego Runner" },
      },
      {
        title: "Quiz de ciberseguridad",
        body: "El último desafío de la app: un edu game de preguntas rápidas para prevenir fraudes.",
        video: { src: "/images/caso-03/juego-quiz.mp4", alt: "Gameplay del minijuego Quiz de ciberseguridad" },
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Bocetos de interfaz",
        body: "Primer recorrido del alta: datos del responsable, código por correo, CUIT y términos, con la barra de progreso numerada y el mapa de desafíos.",
        images: [img("caso-03", "proceso-bocetos.webp", "Bocetos de las pantallas del alta y del mapa de desafíos")],
      },
      {
        number: "02",
        title: "Diagrama de interfaz",
        body: "Mapa de navegación de la app: el alta con CUIT, código, documentación y biometría, y los desafíos a los que se accede después del login.",
        images: [
          img("caso-03", "proceso-diagrama-1.webp", "Diagrama de interfaz del alta"),
          img("caso-03", "proceso-diagrama-2.webp", "Diagrama de interfaz de los desafíos"),
        ],
        layout: "pair",
      },
      {
        number: "03",
        title: "Moodboard y referencias",
        body: "Referencias de apps financieras para una interfaz en light mode, sobria, con acentos en azul y violeta.",
        images: [img("caso-03", "proceso-moodboard.webp", "Moodboard de la interfaz")],
      },
      {
        number: "04",
        title: "Bocetos de minijuegos",
        body: "Bocetos a mano y arte de los minijuegos que acompañan cada tiempo de espera.",
        images: [
          img("caso-03", "proceso-sketch-juegos.webp", "Bocetos a mano de los minijuegos"),
          img("caso-03", "proceso-arte-juego.webp", "Arte de un minijuego"),
        ],
        layout: "pair",
      },
    ],
    solutionLead: undefined,
    solutionCards: [
      {
        title: 'Mapeo de "tiempos muertos" a dinámicas',
        items: [
          'Validación de CUIT (~1 min de espera de API): juego interactivo "Barra de Café" mientras el servidor procesa en segundo plano.',
          'Verificación OTP: minijuego táctil ("Acertijo") conectado a la identidad visual de la marca.',
          "Educación en ciberseguridad: quiz de respuesta rápida que entretiene y previene fraudes durante la captura de datos sensibles.",
        ],
      },
      {
        title: "Carga sensible y entretenimiento (UI craft)",
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
    galleryGroups: [
      {
        title: "App PAGOS360",
        countLabel: "22 pantallas · del alta a los desafíos · deslizá →",
        figures: [
          { image: img("caso-03", "cuit.webp", "Paso 1 · CUIT y café de espera"), caption: "Paso 1 · CUIT y café de espera" },
          { image: img("caso-03", "mail.webp", "Paso 2 · Correo del negocio"), caption: "Paso 2 · Correo del negocio" },
          { image: img("caso-03", "codigo.webp", "Paso 3 · Código y minijuego oculto"), caption: "Paso 3 · Código y minijuego oculto" },
          { image: img("caso-03", "minijuego.webp", "Minijuego · Acertijo"), caption: "Minijuego · Acertijo" },
          { image: img("caso-03", "docu.webp", "Paso 4 · Documentación"), caption: "Paso 4 · Documentación" },
          { image: img("caso-03", "datos-bio-1.webp", "Paso 5 · Selfie"), caption: "Paso 5 · Selfie" },
          { image: img("caso-03", "datos-bio-2.webp", "Paso 5 · Biometría completa"), caption: "Paso 5 · Biometría completa" },
          { image: img("caso-03", "bienvenida.webp", "Bienvenida y credenciales"), caption: "Bienvenida y credenciales" },
          { image: img("caso-03", "login.webp", "Login"), caption: "Login" },
          { image: img("caso-03", "desafio-1.webp", "Desafíos · 1 de 4"), caption: "Desafíos · 1 de 4" },
          { image: img("caso-03", "boton-de-pago.webp", "Botón de pago"), caption: "Botón de pago" },
          { image: img("caso-03", "medios-de-pago.webp", "Medios de pago"), caption: "Medios de pago" },
          { image: img("caso-03", "enviar-link.webp", "Enviar link"), caption: "Enviar link" },
          { image: img("caso-03", "confirmacion.webp", "Botón de pago enviado"), caption: "Botón de pago enviado" },
          { image: img("caso-03", "desafio-2.webp", "Desafíos · 2 de 4"), caption: "Desafíos · 2 de 4" },
          { image: img("caso-03", "experiencia-de-pago.webp", "¿Cómo me pagan? · Link"), caption: "¿Cómo me pagan? · Link" },
          { image: img("caso-03", "paso-2.webp", "¿Cómo me pagan? · Opción de pago"), caption: "¿Cómo me pagan? · Opción de pago" },
          { image: img("caso-03", "paso-3.webp", "¿Cómo me pagan? · Datos del pago"), caption: "¿Cómo me pagan? · Datos del pago" },
          { image: img("caso-03", "paso-4.webp", "¿Cómo me pagan? · Comprobante"), caption: "¿Cómo me pagan? · Comprobante" },
          { image: img("caso-03", "desafio-3.webp", "Desafíos · 3 de 4"), caption: "Desafíos · 3 de 4" },
          { image: img("caso-03", "quiz.webp", "Quiz de ciberseguridad"), caption: "Quiz de ciberseguridad" },
          { image: img("caso-03", "desafio-4.webp", "Desafíos · ciberseguridad"), caption: "Desafíos · ciberseguridad" },
        ],
      },
    ],
  },
  {
    slug: "caso-04",
    order: 4,
    empresa: "Moonflow",
    categories: ["B2B SaaS"],
    indexLabel: "Moonflow · B2B SaaS",
    tagLabel: "CASO 04",
    sub: "Moonflow · B2B SaaS",
    title: "Widget de Checklist de Onboarding B2B",
    lead: "Un widget flotante dentro del producto que funciona como fuente única de verdad del proceso de implementación y acelera la salida a producción.",
    cardKicker: "04 · Moonflow",
    summary: "Fuente única de verdad para el go-live.",
    cover: {
      kind: "wide",
      bar: "Moonflow · Onboarding · Checklist",
      media: { type: "video", src: "/images/caso-04/checklist.mp4", alt: "El cliente abre el checklist de onboarding desde la pestaña flotante y revisa las tareas pendientes" },
    },
    homeImage: img("home", "ck-final-crop.png", ""),
    meta: [
      { label: "Rol", lines: ["Lead Product Designer", "Product Builder"] },
      { label: "Alcance", lines: ["Widget flotante", "in-product"] },
      { label: "Modelo", lines: ["Propiedad", "end-to-end"] },
    ],
    problema: [
      "Contexto de negocio. Moonflow es una plataforma SaaS B2B de gestión de cobranzas. Tras completar el onboarding inicial y agendar la llamada de kickoff, los nuevos clientes debían configurar múltiples módulos técnicos (cuentas bancarias, pasarelas, canales de comunicación, estrategias) para poder salir a producción.",
      "El problema de producto y negocio. La falta de visibilidad centralizada sobre las tareas pendientes generaba desalineación entre el cliente y el especialista de onboarding. Esto creaba un cuello de botella operativo, extendía el time-to-PRD, aumentaba la carga de soporte manual y ponía en riesgo la conversión temprana de las cuentas.",
      'Objetivo. Un widget flotante e interactivo dentro del producto que sirva como "fuente única de verdad" del proceso de implementación, automatizando la verificación de estados y acelerando la activación en producción.',
    ],
    rolYEquipo: [
      { title: "Rol", items: ["Lead Product Designer & Product Builder (propiedad end-to-end)."] },
      {
        title: "Equipo",
        items: ["Coordinación con Customer Success / Onboarding Specialists, Product Management e Ingeniería de Software."],
      },
      {
        title: "Responsabilidades",
        items: ["Diseño funcional y lógica de negocio, sistema UI/UX en Figma, especificación técnica y handover de HUs con integración a HubSpot vía webhooks."],
      },
    ],
    procesoIntro: [
      "El checklist se definió primero en Miro, módulo por módulo, y después se fue ajustando en iteraciones sobre el producto real.",
    ],
    processSteps: [
      {
        number: "01",
        title: "Definición del producto",
        body: "Mapa de cada módulo del checklist: qué tareas incluye, cuáles se completan solas y cuáles de forma manual, adónde lleva cada una y cómo se comporta el semáforo de salida a producción.",
        images: [img("caso-04", "proceso-producto.png", "Definición del producto: módulos, tareas y lógica de cada una")],
      },
      {
        number: "02",
        title: "Flujo de método de cobro",
        body: "El caso más complejo: qué pasa si el cliente omite el paso, si selecciona una o más pasarelas en el onboarding y cuándo se marca el check como completo.",
        images: [img("caso-04", "proceso-flujo-cobro.png", "Diagrama del flujo de método de cobro")],
      },
      {
        number: "03",
        title: "Del boceto a la primera versión",
        body: "Del boceto a mano a las primeras pantallas del widget: cabecera con fecha de salida a producción, responsables y semáforo, y la lista de módulos.",
        images: [img("caso-04", "evolucion-1.png", "Evolución del diseño: boceto y primeras versiones")],
      },
      {
        number: "04",
        title: "Ajustes de jerarquía",
        body: "Cabecera con tipografía más grande y jerarquía vertical, ítem resuelto con link a la sección correspondiente y vista de detalle de cada módulo.",
        images: [img("caso-04", "evolucion-2.png", "Evolución del diseño: ajustes de cabecera y detalle de módulo")],
      },
      {
        number: "05",
        title: "Pruebas en contexto",
        body: "El widget sobre la pantalla de onboarding: pruebas de ancho, íconos y detalle de subtareas.",
        images: [img("caso-04", "evolucion-3.png", "Evolución del diseño: pruebas sobre la pantalla de onboarding")],
      },
    ],
    solutionLead:
      "En lugar de diseñar solo un componente visual de lista, estructuré una máquina de estados condicional y un flujo de permisos para dos actores clave.",
    solutionCards: [
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
        items: [
          "Semáforo y alerta de SLA: si se alcanza la fecha de salida a producción sin completar tareas, se actualiza la fecha y se activa un semáforo rojo en la cabecera.",
          'Sección "sin agregar": contenedor de módulos omitidos con transferencia bidireccional; las tareas ya completadas no se pueden eliminar.',
          "Filtros geográficos y de plan: ocultamiento automático de pasarelas sin cobertura o funciones fuera del plan contratado.",
        ],
        shots: [
          img("caso-04", "spec-cabecera.png", "Cabecera: semáforo y fecha de salida a producción"),
          img("caso-04", "spec-sin-agregar.png", "Sección Sin agregar: módulos omitidos"),
          img("caso-04", "spec-plan.png", "Estrategia de cobranzas: opciones ocultas según el plan"),
        ],
      },
      {
        title: "Documentación para ingeniería",
        items: [
          "Historias de usuario con comportamientos de UI, enlaces a documentación de ayuda y diseño de la Fase 2 de integración con HubSpot.",
          "Webhooks para sincronizar la fecha de go live y las asignaciones de Customer Success / AM.",
        ],
        shots: [
          img("caso-04", "spec-conexion.png", "HU · Métodos de conexión"),
          img("caso-04", "spec-canales.png", "HU · Canales de comunicación: WhatsApp"),
          img("caso-04", "spec-cuentas.png", "HU · Métodos de cobro: cuentas bancarias"),
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
    galleryGroups: [
      {
        title: "Evolución del widget de Checklist",
        countLabel: "13 pantallas · del boceto a la versión final · deslizá →",
        figures: [
          { image: img("caso-04", "gal-01-boceto.png", "Boceto inicial"), caption: "Boceto inicial" },
          { image: img("caso-04", "gal-02-v1.png", "Primera versión · salida a producción"), caption: "Primera versión · salida a producción" },
          { image: img("caso-04", "gal-03-v2.png", "Iconos por módulo y semáforo"), caption: "Iconos por módulo y semáforo" },
          { image: img("caso-04", "gal-04-v3.png", "Saludo personalizado"), caption: "Saludo personalizado" },
          { image: img("caso-04", "gal-05-empecemos.png", "Empecemos · cabecera más grande"), caption: "Empecemos · cabecera más grande" },
          { image: img("caso-04", "gal-06-empecemos-detalle.png", "Empecemos · detalle de módulo"), caption: "Empecemos · detalle de módulo" },
          { image: img("caso-04", "gal-07-tareas.png", "Tareas · sección Sin agregar"), caption: "Tareas · sección Sin agregar" },
          { image: img("caso-04", "gal-08-integracion.png", "Tareas · Integración de datos"), caption: "Tareas · Integración de datos" },
          { image: img("caso-04", "gal-09-canales.png", "Tareas · Canales de comunicación"), caption: "Tareas · Canales de comunicación" },
          { image: img("caso-04", "gal-10-cobro.png", "Tareas · Métodos de cobro"), caption: "Tareas · Métodos de cobro" },
          { image: img("caso-04", "gal-11-portal.png", "Tareas · Portal de clientes"), caption: "Tareas · Portal de clientes" },
          { image: img("caso-04", "gal-12-completo.png", "Tareas · todo listo para activar"), caption: "Tareas · todo listo para activar" },
          { image: img("caso-04", "gal-final.png", "Versión final · Todo listo"), caption: "Versión final · Todo listo" },
        ],
      },
    ],
  },
  {
    slug: "caso-05",
    order: 5,
    empresa: "Proyecto propio",
    categories: [],
    indexLabel: "Proyecto propio · IA",
    tagLabel: "CASO 05",
    sub: "Proyecto propio · IA aplicada",
    title: "Este portfolio, de la idea a producción",
    lead: "Un proyecto integral de principio a fin: combiné herramientas que ya conocía con la versatilidad de la IA, adaptándome a herramientas nuevas en cada etapa.",
    cardKicker: "05 · Proyecto propio",
    summary: "Un proyecto integral construido con IA.",
    cover: {
      kind: "wide",
      bar: "danielamercado · portfolio",
      media: { type: "image", image: img("caso-05", "home.png", "Página de inicio del portfolio") },
    },
    homeImage: img("home", "portfolio-crop.png", ""),
    meta: [
      { label: "Rol", lines: ["Product Builder", "end-to-end"] },
      { label: "IA", lines: ["Gemini", "Claude"] },
      { label: "Stack", lines: ["Canva · VS Code", "GitHub · Vercel"] },
    ],
    problema: [
      "Necesitaba un portfolio que mostrara mi trabajo como product builder con la misma estructura en todos los casos: problema, rol y equipo, resultado y reflexión.",
      "Objetivo. Llevarlo de la idea a producción yo misma, usando la IA en cada etapa: guion, estructura, diseño, código y deploy.",
    ],
    rolYEquipo: [
      { title: "Rol", items: ["Product Builder: dirección, contenido, diseño y puesta en producción."] },
      { title: "IA", items: ["Gemini para los guiones y la estructura. Claude para el diseño y la puesta en producción."] },
      { title: "Herramientas", items: ["Canva, Visual Studio Code, GitHub y Vercel."] },
    ],
    procesoIntro: [],
    processSteps: [
      {
        number: "01",
        title: "Research",
        body: "Antes de diseñar: busqué portfolios que me gustaran, armé una dirección visual e investigué qué estructuras se usan al armar un portfolio para elegir la que mejor se adapta a mi puesto y experiencia.",
        images: [img("caso-05", "research.webp", "Portfolios de referencia y herramientas visuales que me gustaron")],
      },
      {
        number: "02",
        title: "Guion y estructura",
        body: "Con Gemini, a partir de mis presentaciones y manuales en PDF, armé un documento con el guion de cada caso, todos con las mismas secciones: Problema, Rol y equipo, Proceso, Resultado y Reflexión.",
        images: [
          img("caso-05", "word.webp", "Documento con el guion y la estructura de los casos de estudio"),
          img("caso-05", "gemini.png", "Gemini armando la estructura del caso de Gestión de campo"),
        ],
        layout: "pair",
      },
      {
        number: "03",
        title: "Wireframe",
        body: "Con Claude armé el wireframe a partir de un portfolio de referencia, con las secciones propias y la misma estructura para los cuatro casos.",
        images: [img("caso-05", "wireframe.png", "Wireframe del portfolio")],
        layout: "tall",
      },
      {
        number: "04",
        title: "Diseño visual",
        body: "Con Claude pasé al diseño final: portadas, galerías y proceso de cada caso, a partir de mis presentaciones, manuales, PDFs y videos reales.",
        images: [img("caso-05", "diseno.png", "Diseño visual de una portada de caso")],
        layout: "tall",
      },
      {
        number: "05",
        title: "Código y versionado",
        body: "Llevé el código a Visual Studio Code y lo versioné en GitHub.",
        images: [],
        placeholder: "captura de VS Code / GitHub",
      },
      {
        number: "06",
        title: "Puesta en producción",
        body: "Deploy del sitio en Vercel.",
        images: [],
        placeholder: "captura de Vercel",
      },
    ],
    solutionCards: [],
    resultado: {
      stats: [],
      items: [
        "Sitio en producción con cinco casos de estudio, construido de punta a punta.",
        "Proceso integral: contenido, diseño, código y deploy a cargo de una sola persona, con la IA como apoyo en cada etapa.",
      ],
    },
    reflexion: [
      "Combiné herramientas que ya conocía con la versatilidad de la IA y me adapté a herramientas nuevas a medida que el proyecto las necesitaba.",
    ],
    galleryGroups: [],
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
