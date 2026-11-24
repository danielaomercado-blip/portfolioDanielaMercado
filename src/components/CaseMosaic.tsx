import Image from "next/image";
import type { ImageRef } from "@/lib/case-studies";

/** Mosaico decorativo rotado — firma visual del caso 01, con muchas pantallas de la app. */
export default function CaseMosaic({ images, label }: { images: ImageRef[]; label: string }) {
  const columns = 6;
  const cols: ImageRef[][] = Array.from({ length: columns }, (_, i) =>
    Array.from({ length: 3 }, (_, j) => images[(i * 3 + j) % images.length]),
  );

  return (
    <figure
      aria-label={label}
      className="relative my-2 aspect-[16/10] overflow-hidden rounded-md bg-surface"
    >
      <div
        className="absolute left-1/2 top-1/2 grid w-[170%] -translate-x-1/2 -translate-y-1/2 rotate-[30deg] gap-x-[2.1%]"
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
      >
        {cols.map((col, i) => (
          <div
            key={i}
            className="flex flex-col"
            style={i % 2 === 1 ? { marginTop: "-113%" } : undefined}
          >
            {col.map((image, j) => (
              <div
                key={j}
                className="relative mb-[13%] aspect-[421/900] w-full drop-shadow-[0_12px_16px_rgba(0,0,0,0.5)]"
              >
                <Image src={image.src} alt="" fill className="object-cover" sizes="20vw" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </figure>
  );
}
