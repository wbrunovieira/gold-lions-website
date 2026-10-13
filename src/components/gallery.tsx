"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery, site } from "@/config/site";
import { InstagramIcon } from "@/components/ui/brand-icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  const step = useCallback(
    (delta: number) =>
      setOpen((i) => (i === null ? null : (i + delta + gallery.length) % gallery.length)),
    [],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, step]);

  return (
    <section id="galeria" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Galeria"
          title={
            <>
              A vida no <span className="text-gold">tatame</span>
            </>
          }
          description="Treinos, amizades e conquistas da nossa equipe."
        />

        {/* Masonry: as fotos mantêm a proporção original e nunca passam de ~330px. */}
        <div className="mt-16 columns-2 gap-3 sm:gap-4 md:columns-3">
          {gallery.map((photo, i) => (
            <Reveal key={photo.alt} delay={0.05 * i} className="mb-3 break-inside-avoid sm:mb-4">
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label={`Ampliar: ${photo.alt}`}
                className="group relative block w-full overflow-hidden rounded-2xl border border-white/8"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  placeholder="blur"
                  sizes="(min-width: 768px) 320px, 50vw"
                  className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gold/0 transition-colors group-hover:bg-gold/10" />
              </button>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={site.instagram.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold transition-colors hover:border-gold hover:text-gold"
          >
            <InstagramIcon className="size-5" />
            Siga {site.instagram.handle}
          </a>
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={gallery[open].alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setOpen(null)}
          >
            <motion.figure
              key={open}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex max-w-full flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* No máximo 1,25x o tamanho nativo: as fotos são pequenas e ampliar mais só borra. */}
              <Image
                src={gallery[open].src}
                alt={gallery[open].alt}
                sizes="520px"
                style={{ width: Math.round(gallery[open].src.width * 1.25) }}
                className="h-auto max-h-[75vh] max-w-full rounded-2xl object-contain"
              />
              <figcaption className="mt-4 max-w-sm text-center text-sm text-muted">
                {gallery[open].alt}
              </figcaption>
            </motion.figure>

            <button type="button" aria-label="Fechar" onClick={() => setOpen(null)} className="absolute top-4 right-4 rounded-full bg-white/10 p-2 hover:bg-white/20">
              <X className="size-6" />
            </button>
            <button
              type="button"
              aria-label="Foto anterior"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              className="absolute left-2 rounded-full bg-white/10 p-2 hover:bg-white/20 sm:left-6"
            >
              <ChevronLeft className="size-6" />
            </button>
            <button
              type="button"
              aria-label="Próxima foto"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              className="absolute right-2 rounded-full bg-white/10 p-2 hover:bg-white/20 sm:right-6"
            >
              <ChevronRight className="size-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
