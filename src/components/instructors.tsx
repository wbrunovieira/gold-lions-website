import { instructors } from "@/config/site";
import { InstagramIcon } from "@/components/ui/brand-icons";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

// Faixa desenhada: cor da faixa + ponteira (preta tem ponteira vermelha).
const belts = {
  black: { body: "bg-zinc-900 border border-white/15", tip: "bg-red-600" },
  brown: { body: "bg-amber-900", tip: "bg-zinc-950" },
};

export function Instructors() {
  return (
    <section id="professores" className="relative bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Professores"
          title={
            <>
              Quem te guia <span className="text-gold">no tatame</span>
            </>
          }
          description="Professores graduados, com experiência em competição e, acima de tudo, em ensinar."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {instructors.map((p, i) => (
            <Reveal key={p.name} delay={0.1 * i}>
              <article className="group overflow-hidden rounded-3xl border border-white/8 bg-black">
                <div className="overflow-hidden">
                  <PhotoPlaceholder
                    label="Foto do professor"
                    className="aspect-[4/5] transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex h-3 w-full overflow-hidden rounded-sm" aria-hidden="true">
                    <span className={`flex-1 ${belts[p.belt].body}`} />
                    <span className={`w-12 ${belts[p.belt].tip}`} />
                    <span className={`w-4 ${belts[p.belt].body}`} />
                  </div>
                  <p className="mt-4 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                    {p.degree}
                  </p>
                  <div className="mt-1 flex items-center justify-between gap-4">
                    <h3 className="font-display text-3xl tracking-wide uppercase">{p.name}</h3>
                    <a
                      href={p.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Instagram de ${p.name}`}
                      className="shrink-0 rounded-full border border-white/10 p-2 text-zinc-400 transition-colors hover:border-gold hover:text-gold"
                    >
                      <InstagramIcon className="size-4" />
                    </a>
                  </div>
                  <p className="mt-2 text-muted">{p.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
