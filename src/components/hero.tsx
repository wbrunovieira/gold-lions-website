"use client";

import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm text-amber-400"
      >
        <Sparkles className="size-4" />
        Gold Lions
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-3xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl"
      >
        Um website moderno, pronto para crescer.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 max-w-xl text-lg text-zinc-400"
      >
        Next.js, Tailwind CSS, Motion e Lucide — a base para construir algo
        incrível.
      </motion.p>

      <motion.a
        href="#"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 font-medium text-black"
      >
        Começar
        <ArrowRight className="size-4" />
      </motion.a>
    </section>
  );
}
