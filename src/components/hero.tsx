"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { AnimatedLion } from "@/components/lion/animated-lion";
import { site } from "@/config/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const lionY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const lionOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative flex min-h-svh items-center overflow-hidden bg-black pt-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 size-[70rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(254,192,9,0.14),transparent_60%)]" />
        <div className="absolute inset-0 bg-grain opacity-[0.06]" />
        <p
          aria-hidden="true"
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-display text-[28vw] leading-none whitespace-nowrap text-white/[0.025] uppercase select-none"
        >
          Jiu-Jitsu
        </p>
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-4">
        <motion.div style={{ y: textY }} className="order-2 text-center lg:order-1 lg:text-left">
          {/* O H1 semântico carrega a busca local; o slogan abaixo é o destaque visual. */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-[0.68rem] font-semibold tracking-[0.12em] text-gold uppercase sm:text-xs sm:tracking-[0.2em]"
          >
            Jiu-jitsu em {site.address.city} · {site.address.state}
          </motion.h1>

          <p className="mt-6 font-display text-[clamp(3.5rem,10vw,7.25rem)] leading-[0.98] tracking-wide uppercase">
            {["Treine luta.", "Faça amigos.", "Ganhe saúde."].map((line, i) => (
              <span key={line} className="-mt-[0.12em] block overflow-hidden pt-[0.12em]">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 + i * 0.1, ease }}
                  className={`block ${i === 2 ? "text-gradient-gold -mt-[0.12em] pt-[0.12em]" : ""}`}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease }}
            className="mx-auto mt-6 max-w-lg text-lg text-zinc-400 lg:mx-0"
          >
            Jiu-jitsu em Santa Rita do Sapucaí para crianças, mulheres e adultos.
            Condicionamento, defesa pessoal e uma equipe que te puxa pra cima. A
            primeira aula é grátis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease }}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a
              href={site.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-black shadow-[0_0_40px_-8px_rgba(254,192,9,0.6)] transition-transform hover:scale-105"
            >
              Agende sua aula grátis
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#horarios"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-semibold transition-colors hover:border-gold hover:text-gold"
            >
              Ver horários
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: lionY, opacity: lionOpacity }}
          className="order-1 flex justify-center lg:order-2"
        >
          <AnimatedLion
            title="Leão da Gold Lions Jiu-Jitsu Team"
            className="h-60 w-auto drop-shadow-[0_0_60px_rgba(254,192,9,0.25)] sm:h-88 lg:h-[34rem]"
          />
        </motion.div>
      </div>

      <motion.a
        href="#numeros"
        aria-label="Rolar para baixo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.2 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-zinc-500 sm:block"
      >
        <ChevronDown className="size-6" />
      </motion.a>
    </section>
  );
}
