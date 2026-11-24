"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { createContext, useContext, useState, type ReactNode } from "react";

interface LightboxItem {
  src: string;
  alt: string;
}

const LightboxContext = createContext<(item: LightboxItem) => void>(() => {});

export function useLightbox() {
  return useContext(LightboxContext);
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<LightboxItem | null>(null);

  return (
    <LightboxContext.Provider value={setActive}>
      {children}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              layoutId={active.src}
              className="relative max-h-[85vh] max-w-[90vw]"
              transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <Image
                src={active.src}
                alt={active.alt}
                width={1600}
                height={1600}
                className="max-h-[85vh] w-auto rounded-md shadow-lg"
                style={{ height: "auto" }}
                sizes="90vw"
              />
            </motion.div>
            {active.alt && (
              <motion.p
                className="absolute bottom-6 left-0 right-0 text-center text-[13px] text-neutral-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                {active.alt}
              </motion.p>
            )}
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
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  fill?: boolean;
}) {
  const open = useLightbox();

  return (
    <motion.div
      layoutId={src}
      onClick={() => open({ src, alt })}
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
