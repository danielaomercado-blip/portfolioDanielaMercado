import type { SolutionCard } from "@/lib/case-studies";
import { ZoomableImage } from "@/components/Lightbox";

export default function SolutionCards({ cards }: { cards: SolutionCard[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {cards.map((card) => (
        <div key={card.title} className="card">
          <div className="card-title">{card.title}</div>
          {card.shots && card.shots.length > 0 && (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {card.shots.map((shot, i) => (
                <div
                  key={i}
                  className="relative h-28 w-44 flex-none overflow-hidden rounded-sm shadow-sm"
                >
                  <ZoomableImage src={shot.src} alt={shot.alt} />
                </div>
              ))}
            </div>
          )}
          <ul className="flex list-none flex-col gap-2 text-sm">
            {card.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
