import type { ProcessStep } from "@/lib/case-studies";
import { ZoomableImage } from "@/components/Lightbox";
import AssetPlaceholder from "@/components/AssetPlaceholder";

const ASPECT: Record<NonNullable<ProcessStep["layout"]>, string> = {
  pair: "7 / 8",
  tall: "16 / 10",
  flow: "4 / 3",
  default: "16 / 10",
};

export default function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="flex flex-col gap-8">
      {steps.map((step) => (
        <div
          key={step.number}
          className="grid grid-cols-1 items-start gap-6 sm:grid-cols-[200px_1fr]"
        >
          <div className="flex flex-col gap-2">
            <span className="kicker text-xs">{step.number}</span>
            <div className="card-title">{step.title}</div>
            {step.body && <p className="text-[12.5px] opacity-80">{step.body}</p>}
          </div>
          {step.placeholder ? (
            <AssetPlaceholder label={step.placeholder} aspect="16 / 10" />
          ) : step.images.length > 1 ? (
            <div
              className="grid gap-[2px] overflow-hidden rounded-md bg-neutral-200"
              style={{ gridTemplateColumns: `repeat(${step.images.length}, 1fr)` }}
            >
              {step.images.map((image, i) => (
                <div key={i} className="relative" style={{ aspectRatio: ASPECT[step.layout ?? "pair"] }}>
                  <ZoomableImage src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>
          ) : (
            step.images[0] && (
              <div
                className="relative overflow-hidden rounded-md shadow-md"
                style={{ aspectRatio: ASPECT[step.layout ?? "default"] }}
              >
                <ZoomableImage src={step.images[0].src} alt={step.images[0].alt} />
              </div>
            )
          )}
        </div>
      ))}
    </div>
  );
}
