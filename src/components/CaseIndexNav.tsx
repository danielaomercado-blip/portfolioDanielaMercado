const SECTIONS = [
  { href: "#problema", label: "Problema" },
  { href: "#rol-equipo", label: "Rol y equipo" },
  { href: "#proceso", label: "Proceso" },
  { href: "#resultado", label: "Resultado" },
  { href: "#reflexion", label: "Reflexión" },
  { href: "#galeria", label: "Galería" },
];

// Sticky: ningún ancestro de este componente (layout.tsx, wrappers) puede
// tener overflow: hidden, o `position: sticky` deja de funcionar.
export default function CaseIndexNav() {
  return (
    <nav className="sticky top-8 hidden w-[110px] flex-none flex-col gap-3 self-start lg:flex">
      {SECTIONS.map((section) => (
        <a key={section.href} href={section.href} className="kicker text-xs">
          {section.label}
        </a>
      ))}
    </nav>
  );
}
