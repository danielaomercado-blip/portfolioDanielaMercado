"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { createContext, useContext, useState, type ReactNode } from "react";

export interface LightboxItem {
  src: string;
  alt: string;
  label?: string;
}

interface LightboxState {
  items: LightboxItem[];
  index: number;
}

const LightboxContext = createContext<(items: LightboxItem[], index: number) => void>(() => {});

export function useLightbox() {
  return useContext(LightboxContext);
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<LightboxState | null>(null);

  const close = () => setState(null);
  const step = (delta: number) =>
    setState((s) =>
      s ? { ...s, index: (s.index + delta + s.items.length) % s.items.length } : s,
    );

  const active = state ? state.items[state.index] : null;
  const hasMultiple = (state?.items.length ?? 0) > 1;

  return (
    <LightboxContext.Provider value={(items, index) => setState({ items, index })}>
      {children}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-start justify-center bg-black/85 px-4 pb-10 pt-14 backdrop-blur-sm sm:pt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Cerrar"
              className="fixed right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 sm:right-6 sm:top-6"
            >
              <X size={20} />
            </button>

            {hasMultiple && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(-1);
                  }}
                  aria-label="Anterior"
                  className="fixed left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 sm:left-6"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(1);
                  }}
                  aria-label="Siguiente"
                  className="fixed right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 sm:right-6"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            <motion.div
              layoutId={active.src}
              className="relative max-h-[80vh] max-w-[90vw] overflow-hidden rounded-xl bg-neutral-100 p-2 shadow-lg"
              transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {active.label && (
                <span className="absolute left-4 top-4 z-10 font-heading text-xs font-medium text-neutral-900">
                  {active.label}
                </span>
              )}
              <Image
                src={active.src}
                alt={active.alt}
                width={1600}
                height={1600}
                className="block max-h-[76vh] w-auto rounded-md"
                style={{ height: "auto" }}
                sizes="90vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LightboxContext.Provider>
  );
}

export function ZoomableImage({
  src,
  alt,
  className = "",
  sizes,
  fill = true,
  items,
  index = 0,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  fill?: boolean;
  /** Galería completa para poder navegar con flechas. Si no se pasa, se abre solo esta imagen. */
  items?: LightboxItem[];
  index?: number;
}) {
  const open = useLightbox();
  const group = items ?? [{ src, alt }];

  return (
    <motion.div
      layoutId={src}
      onClick={() => open(group, index)}
      className={`cursor-zoom-in ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes ?? "(max-width: 768px) 50vw, 25vw"}
        className="object-cover"
      />
    </motion.div>
  );
}
