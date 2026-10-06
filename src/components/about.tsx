import { Flame, HeartHandshake, Target } from "lucide-react";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

// PROVISÓRIO: texto institucional até o cliente enviar a história da equipe.
const values = [
  {
    icon: Target,
    title: "Disciplina",
    text: "Constância vence talento. Cada treino é um passo na sua evolução.",
  },
  {
    icon: HeartHandshake,
    title: "Respeito",
    text: "Ao professor, ao parceiro de treino e a quem acabou de chegar.",
  },
  {
    icon: Flame,
    title: "Garra",
    text: "Coragem para sair da zona de conforto, dentro e fora do tatame.",
  },
];

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="absolute -inset-2 -z-10 translate-x-2 translate-y-3 sm:-inset-3 sm:translate-x-5 sm:translate-y-5 rounded-3xl border border-gold/30" />
          <PhotoPlaceholder
            label="Foto da equipe"
            className="aspect-[4/5] rounded-3xl sm:aspect-[5/4] lg:aspect-[4/5]"
          />
          <div className="absolute -bottom-6 left-6 rounded-2xl border border-white/10 bg-black/80 px-6 py-4 backdrop-blur-md">
            <p className="font-display text-4xl leading-none text-gold">Desde 2015</p>
            <p className="mt-1 text-sm text-muted">formando atletas e pessoas</p>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Sobre a equipe"
            title={
              <>
                Mais que uma academia,{" "}
                <span className="text-gold">uma família</span>
              </>
            }
            description="A Gold Lions nasceu em Santa Rita do Sapucaí com um propósito: levar o jiu-jitsu de verdade para quem quer evoluir, seja para competir, emagrecer, aprender a se defender ou simplesmente ter um lugar para pertencer."
          />

          <ul className="mt-10 space-y-6">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={0.1 * i}>
                <li className="flex gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-gold">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-muted">{text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
