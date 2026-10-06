"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery, site } from "@/config/site";
import { InstagramIcon } from "@/components/ui/brand-icons";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

function Photo({ index, className = "" }: { index: number; className?: string }) {
  const item = gallery[index];
  if (!item.src) return <PhotoPlaceholder label={item.alt} className={className} />;
  return (
    <div className={`relative ${className}`}>
      <Image src={item.src} alt={item.alt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
    </div>
  );
}

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  const step = (delta: number) =>
    setOpen((i) => (i === null ? null : (i + delta + gallery.length) % gallery.length));

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
  }, [open]);

  return (
    <section id="galeria" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Galeria"
          title={
            <>
              A vida no <span className="text-gold">tatame</span>
            </>
          }
          description="Treinos, graduações, campeonatos e a resenha depois do treino."
        />

        <div className="mt-16 grid grid-flow-dense auto-rows-[180px] grid-cols-1 gap-3 sm:auto-rows-[220px] sm:grid-cols-4">
          {gallery.map((item, i) => (
            <Reveal key={item.alt} delay={0.05 * i} className={item.span ?? ""}>
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label={`Ampliar: ${item.alt}`}
                className="group relative block size-full overflow-hidden rounded-2xl border border-white/8"
              >
                <Photo index={i} className="size-full transition-transform duration-700 group-hover:scale-105" />
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
            <motion.div
              key={open}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Photo index={open} className="aspect-[4/3] w-full overflow-hidden rounded-2xl" />
              <p className="mt-4 text-center text-muted">{gallery[open].alt}</p>
            </motion.div>

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
