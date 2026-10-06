import { Check } from "lucide-react";
import { plans, site } from "@/config/site";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Pricing() {
  return (
    <section id="planos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Planos"
          title={
            <>
              Comece <span className="text-gold">hoje</span>
            </>
          }
          description="A primeira aula é por nossa conta. Depois, escolha o plano que cabe na sua rotina."
        />

        <div className="mx-auto mt-16 grid max-w-5xl items-center gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={0.1 * i}>
              <div
                className={`relative rounded-3xl p-8 ${
                  plan.highlighted
                    ? "border-2 border-gold bg-gradient-to-b from-gold/15 to-black shadow-[0_0_80px_-20px_rgba(254,192,9,0.4)] md:py-12"
                    : "border border-white/10 bg-surface"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-bold tracking-wider text-black uppercase">
                    Mais escolhido
                  </span>
                )}
                <h3 className="font-display text-3xl tracking-wide uppercase">{plan.name}</h3>
                <p className="mt-4 flex items-baseline gap-1">
                  <span className="font-display text-6xl text-gold">{plan.price}</span>
                  <span className="text-muted">{plan.period}</span>
                </p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-zinc-300">
                      <Check className="mt-0.5 size-5 shrink-0 text-gold" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={site.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 flex justify-center rounded-full py-3 font-semibold transition-transform hover:scale-[1.03] ${
                    plan.highlighted ? "bg-gold text-black" : "border border-white/15 hover:border-gold hover:text-gold"
                  }`}
                >
                  Quero esse plano
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
