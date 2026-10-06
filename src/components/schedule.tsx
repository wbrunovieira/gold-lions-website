"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Clock } from "lucide-react";
import { schedule } from "@/config/site";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const classColors: Record<string, string> = {
  Kids: "bg-sky-400",
  Juvenil: "bg-violet-400",
  "Adulto Iniciante": "bg-emerald-400",
  "Avançado & Competição": "bg-gold",
  Feminino: "bg-pink-400",
  "No-Gi": "bg-orange-400",
};

function Session({ time, name }: { time: string; name: string }) {
  return (
    <li className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">
      <span className={`size-2 shrink-0 rounded-full ${classColors[name] ?? "bg-zinc-500"}`} />
      <span className="font-display text-xl tracking-wide text-gold">{time}</span>
      <span className="text-sm text-zinc-300">{name}</span>
    </li>
  );
}

export function Schedule() {
  const [active, setActive] = useState(0);
  const day = schedule[active];

  return (
    <section id="horarios" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Horários"
          title={
            <>
              Grade <span className="text-gold">semanal</span>
            </>
          }
          description="Turmas de manhã, à tarde e à noite para encaixar o treino na sua rotina."
        />

        {/* Mobile/tablet: abas por dia */}
        <Reveal className="mt-12 lg:hidden">
          <div
            role="tablist"
            aria-label="Dias da semana"
            className="flex gap-1 overflow-x-auto rounded-full border border-white/10 p-1"
          >
            {schedule.map((d, i) => (
              <button
                key={d.day}
                type="button"
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={`relative flex-1 rounded-full px-3 py-2 text-sm font-semibold transition-colors ${
                  active === i ? "text-black" : "text-zinc-400"
                }`}
              >
                {active === i && (
                  <motion.span
                    layoutId="day-pill"
                    className="absolute inset-0 rounded-full bg-gold"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative">{d.short}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.ul
              key={day.day}
              role="tabpanel"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mt-6 space-y-2"
            >
              {day.sessions.map((s) => (
                <Session key={s.time} time={s.time} name={s.class} />
              ))}
            </motion.ul>
          </AnimatePresence>
        </Reveal>

        {/* Desktop: semana inteira */}
        <Reveal className="mt-16 hidden grid-cols-6 gap-3 lg:grid">
          {schedule.map((d) => (
            <div key={d.day} className="rounded-2xl border border-white/8 bg-surface p-3">
              <h3 className="mb-3 px-1 font-display text-2xl tracking-wide uppercase">
                {d.day}
              </h3>
              <ul className="space-y-2">
                {d.sessions.map((s) => (
                  <li
                    key={s.time}
                    className="rounded-xl border border-white/5 bg-black px-3 py-2.5"
                  >
                    <p className="flex items-center gap-2 font-display text-xl tracking-wide text-gold">
                      <span className={`size-1.5 rounded-full ${classColors[s.class] ?? "bg-zinc-500"}`} />
                      {s.time}
                    </p>
                    <p className="text-sm leading-snug text-zinc-300">{s.class}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>

        <p className="mt-8 flex items-center justify-center gap-2 text-sm text-muted">
          <Clock className="size-4" />
          Duração média de 1h15 por aula. Chegue 10 minutos antes.
        </p>
      </div>
    </section>
  );
}
