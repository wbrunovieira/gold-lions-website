import {
  ArrowUpRight,
  Award,
  Bell,
  CalendarDays,
  CirclePlay,
  Dumbbell,
  Flame,
  LogIn,
  MessagesSquare,
  QrCode,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { appFeatures, site, type AppFeatureKey } from "@/config/site";
import { LionMark } from "@/components/lion/lion-mark";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const icons: Record<AppFeatureKey, LucideIcon> = {
  aulas: CalendarDays,
  tecnicas: CirclePlay,
  checkin: QrCode,
  evolucao: TrendingUp,
  graduacao: Award,
  comunidade: MessagesSquare,
  treinos: Dumbbell,
  avisos: Bell,
};

// Ilustração do app (não é print): mostra o tipo de informação que o aluno vê.
function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[17rem]">
      <div className="absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(circle,rgba(254,192,9,0.22),transparent_65%)]" />
      <div className="rounded-[2.5rem] border border-white/15 bg-zinc-950 p-2.5 shadow-2xl shadow-black/70">
        <div className="overflow-hidden rounded-[2rem] bg-black">
          <div className="flex items-center justify-between px-5 pt-4 pb-3">
            <span className="flex items-center gap-2">
              <LionMark className="h-6 w-auto text-gold" />
              <span className="font-display text-lg tracking-wider uppercase">
                Gold <span className="text-gold">Lions</span>
              </span>
            </span>
            <Bell className="size-4 text-zinc-500" />
          </div>

          <div className="space-y-2.5 px-3 pb-5">
            <div className="rounded-2xl bg-gradient-to-br from-gold to-gold-deep p-4 text-black">
              <p className="text-[0.65rem] font-bold tracking-[0.15em] uppercase opacity-70">Próxima aula</p>
              <p className="mt-1 font-display text-3xl leading-none">Hoje · 09:30</p>
              <p className="mt-1 text-xs font-medium opacity-80">Jiu-jitsu · Todos os níveis</p>
              <span className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-black py-2 text-xs font-semibold text-gold">
                <QrCode className="size-3.5" />
                Fazer check-in
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-zinc-900/80 p-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                <CirclePlay className="size-5" />
              </span>
              <div className="min-w-0">
                <p className="text-[0.65rem] tracking-wide text-zinc-500 uppercase">Técnica da aula</p>
                <p className="truncate text-sm font-semibold">Vídeo e animação 3D</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/8 bg-zinc-900/80 p-3">
              <div className="flex items-center justify-between">
                <p className="text-[0.65rem] tracking-wide text-zinc-500 uppercase">Sua evolução</p>
                <span className="flex items-center gap-1 text-xs font-semibold text-gold">
                  <Flame className="size-3.5" />
                  Sequência
                </span>
              </div>
              <div className="mt-2.5 flex h-2.5 overflow-hidden rounded-sm" aria-hidden="true">
                <span className="flex-1 bg-zinc-100" />
                <span className="w-8 bg-zinc-950" />
                <span className="w-3 bg-zinc-100" />
              </div>
              <p className="mt-2 text-xs text-zinc-400">Graus e graduação acompanhados pelo professor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function StudentArea() {
  return (
    <section id="area-do-aluno" className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Área do aluno"
            title={
              <>
                Seu jiu-jitsu na <span className="text-gold">palma da mão</span>
              </>
            }
            description="Aluno Gold Lions acompanha tudo pelo app: as aulas e as técnicas de cada uma, o check-in, a evolução e o caminho até a próxima faixa. Funciona no celular e no computador."
          />

          <ul className="mt-10 grid gap-x-6 gap-y-5 sm:grid-cols-2">
            {appFeatures.map((f, i) => {
              const Icon = icons[f.key];
              return (
                <Reveal key={f.key} delay={0.04 * i}>
                  <li className="flex gap-3.5">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-gold">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-semibold">{f.title}</h3>
                      <p className="mt-0.5 text-sm text-muted">{f.text}</p>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ul>

          <Reveal className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
            <a
              href={site.studentArea.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-black shadow-[0_0_40px_-8px_rgba(254,192,9,0.6)] transition-transform hover:scale-105"
            >
              <LogIn className="size-4" />
              Acessar área do aluno
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <p className="text-sm text-muted">
              Ainda não é aluno?{" "}
              <a
                href={site.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-foreground underline decoration-gold/50 underline-offset-4 hover:text-gold"
              >
                Agende uma aula grátis
              </a>
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <PhoneMockup />
          <p className="mt-8 text-center text-xs text-zinc-500">
            Plataforma{" "}
            <a
              href={site.studentArea.platformUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/20 underline-offset-2 hover:text-zinc-300"
            >
              {site.studentArea.platform}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
