import Image from "next/image";
import type { CaseCover as CaseCoverType } from "@/lib/case-studies";

function Chrome({ bar, children }: { bar: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl bg-surface shadow-lg">
      <div className="flex h-7 items-center bg-neutral-800 px-3 font-heading text-[10px] text-neutral-300">
        {bar}
      </div>
      {children}
    </div>
  );
}

export default function CaseCover({ cover }: { cover: CaseCoverType }) {
  if (cover.kind === "wide") {
    return (
      <div className="relative w-full overflow-hidden lg:w-[112%]">
        <Chrome bar={cover.bar}>
          {cover.media.type === "video" ? (
            <video
              src={cover.media.src}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={cover.media.alt}
              className="block aspect-video w-full bg-neutral-900 object-cover"
            />
          ) : (
            <Image
              src={cover.media.image.src}
              alt={cover.media.image.alt}
              width={1600}
              height={860}
              className="block w-full"
              style={{ height: "auto" }}
              priority
            />
          )}
        </Chrome>
      </div>
    );
  }

  return (
    <div className="relative aspect-[840/780] w-full">
      {cover.kind === "frame" && (
        <div className="absolute left-[8%] top-0 w-[108%] overflow-hidden rounded-xl rounded-r-none shadow-lg">
          <Chrome bar={cover.bar}>
            <Image
              src={cover.web.src}
              alt={cover.web.alt}
              width={1200}
              height={760}
              className="block w-full"
              style={{ height: "auto" }}
              priority
            />
          </Chrome>
        </div>
      )}
      {cover.phones.map((phone, i) => (
        <div
          key={i}
          className={`absolute overflow-hidden rounded-xl shadow-[0_24px_32px_rgba(0,0,0,0.55)] ${phone.className}`}
        >
          <Image
            src={phone.image.src}
            alt={phone.image.alt}
            width={400}
            height={860}
            className="block w-full"
            style={{ height: "auto" }}
          />
        </div>
      ))}
    </div>
  );
}
