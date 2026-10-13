import { CalendarDays, Clock } from "lucide-react";
import { schedule } from "@/config/site";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Schedule() {
  return (
    <section id="horarios" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Horários"
          title={
            <>
              Escolha o seu <span className="text-gold">horário</span>
            </>
          }
          description="Aulas de jiu-jitsu para todos os níveis. Venha no horário que encaixa na sua rotina."
        />

        <Reveal className="mt-12 flex justify-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-5 py-2 text-sm font-semibold tracking-[0.15em] text-gold uppercase">
            <CalendarDays className="size-4" />
            {schedule.days}
          </p>
        </Reveal>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {schedule.sessions.map((s, i) => (
            <Reveal key={s.start} delay={0.08 * i}>
              <li className="group flex flex-col items-center rounded-3xl border border-white/8 bg-surface px-4 py-8 text-center transition-colors hover:border-gold/40">
                <Clock className="size-5 text-gold" />
                <p className="mt-4 font-display text-5xl leading-none tracking-wide text-gold sm:text-6xl">
                  {s.start}
                </p>
                <p className="mt-2 text-sm text-muted">até {s.end}</p>
              </li>
            </Reveal>
          ))}
        </ul>

        <p className="mt-8 text-center text-sm text-muted">
          {schedule.provisional && "Horários provisórios: novas turmas em breve. "}
          Chegue 10 minutos antes da aula.
        </p>
      </div>
    </section>
  );
}
