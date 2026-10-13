"use client";

import { useSyncExternalStore } from "react";
import { CalendarDays } from "lucide-react";
import { schedule } from "@/config/site";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

// O dia da semana só existe no navegador; no servidor fica -1 (nenhum dia
// destacado), então o HTML do servidor e o da hidratação são iguais.
const noop = () => () => {};
function useToday() {
  return useSyncExternalStore(
    noop,
    () => new Date().getDay(),
    () => -1,
  );
}

export function Schedule() {
  const today = useToday();
  const cols = {
    gridTemplateColumns: `3.5rem repeat(${schedule.weekdays.length}, minmax(0, 1fr))`,
  };

  return (
    <section id="horarios" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Horários"
          title={
            <>
              Escolha o seu <span className="text-gold">horário</span>
            </>
          }
          description="Aulas de jiu-jitsu para todos os níveis. Venha no horário que encaixa na sua rotina."
        />

        <Reveal className="mt-12">
          <div
            role="table"
            aria-label={`Calendário de aulas: ${schedule.days}`}
            className="overflow-hidden rounded-3xl border border-white/8 bg-surface p-2 sm:p-4"
          >
            <div role="row" style={cols} className="grid gap-1.5 sm:gap-3">
              <span role="columnheader" className="sr-only">
                Horário
              </span>
              <span aria-hidden="true" />
              {schedule.weekdays.map((d) => {
                const isToday = d.dow === today;
                return (
                  <div
                    key={d.dow}
                    role="columnheader"
                    className={`rounded-xl py-2 text-center font-display text-lg tracking-wide uppercase sm:py-3 sm:text-2xl ${
                      isToday ? "bg-gold text-black" : "text-zinc-300"
                    }`}
                  >
                    <span className="sm:hidden">{d.short}</span>
                    <span className="hidden sm:inline">{d.long}</span>
                    {isToday && (
                      <span className="block font-sans text-[0.6rem] font-bold tracking-[0.15em] sm:text-[0.65rem]">
                        HOJE
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {schedule.sessions.map((s) => (
              <div key={s.start} role="row" style={cols} className="mt-1.5 grid gap-1.5 sm:mt-3 sm:gap-3">
                <div role="rowheader" className="flex flex-col justify-center pr-1 text-right">
                  <span className="font-display text-xl leading-none text-gold sm:text-2xl">
                    {s.start}
                  </span>
                  <span className="mt-0.5 text-[0.65rem] text-muted sm:text-xs">{s.end}</span>
                </div>
                {schedule.weekdays.map((d) => {
                  const isToday = d.dow === today;
                  return (
                    <div
                      key={d.dow}
                      role="cell"
                      aria-label={`${d.long}, ${s.start} às ${s.end}: aula de jiu-jitsu`}
                      className={`flex min-h-16 flex-col justify-center rounded-xl border px-1 py-3 text-center transition-colors sm:min-h-20 sm:rounded-2xl sm:px-3 ${
                        isToday
                          ? "border-gold bg-gold/20"
                          : "border-gold/20 bg-gold/[0.06] hover:border-gold/50"
                      }`}
                    >
                      <span className="text-xs font-semibold text-zinc-100 sm:text-sm">
                        <span className="sm:hidden">Aula</span>
                        <span className="hidden sm:inline">Jiu-jitsu</span>
                      </span>
                      <span className="mt-0.5 hidden text-xs text-muted sm:block">
                        Todos os níveis
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </Reveal>

        <p className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-sm text-muted">
          <CalendarDays className="size-4 text-gold" />
          Turma única para todos os níveis, aulas de 1 hora.
          {schedule.provisional && " Horários provisórios: novas turmas em breve."} Chegue 10
          minutos antes.
        </p>
      </div>
    </section>
  );
}
