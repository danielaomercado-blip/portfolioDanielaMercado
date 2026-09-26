// TODO (pendiente de Daniela): reemplazar por next/image con el asset real
// cuando esté disponible (portadas de caso, galería, logos, retrato, CV).
export default function AssetPlaceholder({
  label,
  aspect = "16 / 9",
  className = "",
}: {
  label: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`asset-placeholder ${className}`}
      style={{ aspectRatio: aspect }}
      role="img"
      aria-label={`Placeholder: ${label}`}
    >
      {label}
    </div>
  );
}
