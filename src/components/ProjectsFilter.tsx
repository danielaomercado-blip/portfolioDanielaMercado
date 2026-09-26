"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import AssetPlaceholder from "@/components/AssetPlaceholder";
import { CASE_STUDIES, type CaseCategory } from "@/lib/case-studies";
import { CATEGORIES } from "@/lib/site-copy";

type Category = (typeof CATEGORIES)[number];

export default function ProjectsFilter() {
  const [active, setActive] = useState<Category>("Todos");

  const filtered = useMemo(() => {
    if (active === "Todos") return CASE_STUDIES;
    return CASE_STUDIES.filter((c) => c.categories.includes(active as CaseCategory));
  }, [active]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={active === category}
            onClick={() => setActive(category)}
            className={active === category ? "tag tag-accent" : "tag tag-outline"}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-col">
        <hr className="hr" />
        {filtered.map((c) => (
          <div key={c.slug}>
            <Link
              href={`/proyectos/${c.slug}`}
              className="flex items-center gap-4 py-4 no-underline"
            >
              <AssetPlaceholder label="img" aspect="4 / 3" className="w-16 flex-none" />
              <div className="flex-1">
                <div className="kicker text-xs">
                  {c.cardKicker} · {c.indexLabel.split(" · ")[1]}
                </div>
                <div className="card-title mt-2">{c.title}</div>
              </div>
              <span className="kicker">→</span>
            </Link>
            <hr className="hr" />
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="py-8 text-sm text-muted">No hay casos en esta categoría todavía.</p>
        )}
      </div>
    </div>
  );
}
