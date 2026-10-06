import {
  ArrowUpRight,
  Baby,
  Flame,
  Medal,
  Shield,
  Sparkles,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import { classes, site, type ClassKey } from "@/config/site";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const icons: Record<ClassKey, LucideIcon> = {
  kids: Baby,
  juvenil: Medal,
  iniciante: Sparkles,
  avancado: Trophy,
  feminino: Shield,
  nogi: Flame,
};

export function Classes() {
  return (
    <section id="turmas" className="relative bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Turmas"
          title={
            <>
              Um tatame para <span className="text-gold">cada fase</span>
            </>
          }
          description="Do primeiro dia de faixa branca ao pódio. Escolha a turma que combina com você."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((c, i) => {
            const Icon = icons[c.key];
            return (
              <Reveal key={c.key} delay={0.06 * i} className="h-full">
                <a
                  href={site.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/8 bg-black p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_20px_60px_-20px_rgba(254,192,9,0.25)]"
                >
                  <div className="absolute -top-20 -right-20 size-48 rounded-full bg-gold/0 blur-3xl transition-colors duration-500 group-hover:bg-gold/15" />
                  <div className="flex items-start justify-between">
                    <span className="flex size-14 items-center justify-center rounded-2xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-black">
                      <Icon className="size-6" />
                    </span>
                    <ArrowUpRight className="size-5 text-zinc-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
                  </div>
                  <p className="mt-8 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                    {c.audience}
                  </p>
                  <h3 className="mt-2 font-display text-4xl tracking-wide uppercase">
                    {c.name}
                  </h3>
                  <p className="mt-3 text-muted">{c.description}</p>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
