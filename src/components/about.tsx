import Image from "next/image";
import { Flame, HeartHandshake, Target } from "lucide-react";
import { photos } from "@/config/photos";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

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
        {/* A foto original tem ~340px: moldura limitada para não ampliar. */}
        <Reveal className="mx-auto w-full max-w-[22rem]">
          <div className="relative">
            <div className="absolute -inset-2 -z-10 translate-x-2 translate-y-3 rounded-3xl border border-gold/30 sm:-inset-3 sm:translate-x-5 sm:translate-y-5" />
            <Image
              src={photos.equipeKimonos.src}
              alt={photos.equipeKimonos.alt}
              placeholder="blur"
              sizes="352px"
              className="h-auto w-full rounded-3xl"
            />
          </div>
          <div className="mt-10 flex items-baseline gap-3 rounded-2xl border border-white/10 bg-surface px-6 py-4">
            <p className="font-display text-4xl leading-none text-gold">10+ anos</p>
            <p className="text-sm text-muted">de paixão pelo jiu-jitsu</p>
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
            description="A Gold Lions chega a Santa Rita do Sapucaí com um propósito: levar o jiu-jitsu de verdade para quem quer evoluir, seja para competir, emagrecer, aprender a se defender ou simplesmente ter um lugar para pertencer. Uma equipe nova, construída treino a treino, e você pode fazer parte dela desde o começo."
          />

          <ul className="mt-10 space-y-6">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={0.1 * i} className="flex gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-gold">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-muted">{text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
