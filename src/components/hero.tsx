"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/logo.jpg"
          alt="Gold Lions Jiu-Jitsu Team"
          width={600}
          height={600}
          priority
          className="size-72 sm:size-96"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
      >
        Disciplina, técnica e <span className="text-gold">força</span> no
        tatame.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-6 max-w-xl text-lg text-zinc-400"
      >
        Treine jiu-jitsu com a equipe Gold Lions. Aulas para todas as idades e
        níveis.
      </motion.p>

      <motion.a
        href="#"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-medium text-black"
      >
        Agende uma aula experimental
        <ArrowRight className="size-4" />
      </motion.a>
    </section>
  );
}
