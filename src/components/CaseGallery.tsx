import type { GalleryGroup } from "@/lib/case-studies";
import { ZoomableImage } from "@/components/Lightbox";

export default function CaseGallery({ groups }: { groups: GalleryGroup[] }) {
  if (groups.length === 0) return null;

  return (
    <div className="flex flex-col gap-6">
      {groups.map((group) => (
        <div key={group.title} className="flex flex-col gap-3">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h4>{group.title}</h4>
            <span className="kicker text-xs">{group.countLabel}</span>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-4">
            {group.figures.map((figure, i) => (
              <figure key={i} className="flex w-[clamp(150px,30vw,220px)] flex-none flex-col gap-2">
                <div className="relative aspect-[3/4] overflow-hidden rounded-md shadow-lg">
                  {figure.chrome ? (
                    <div className="h-full overflow-hidden rounded-md bg-surface">
                      <div className="flex h-6 items-center bg-neutral-800 px-2 font-heading text-[9px] text-neutral-300">
                        {figure.chrome}
                      </div>
                      <div className="relative h-[calc(100%-1.5rem)]">
                        <ZoomableImage src={figure.image.src} alt={figure.image.alt} />
                      </div>
                    </div>
                  ) : (
                    <ZoomableImage src={figure.image.src} alt={figure.image.alt} />
                  )}
                </div>
                <figcaption className="text-xs text-neutral-300">{figure.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
