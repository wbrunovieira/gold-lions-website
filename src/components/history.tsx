import Image from "next/image";
import { Quote } from "lucide-react";
import { history, instructor } from "@/config/site";
import { LionMark } from "@/components/lion/lion-mark";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function History() {
  return (
    <section id="historia" className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Nossa história"
          title={
            <>
              Da garagem ao <span className="text-gold">nosso tatame</span>
            </>
          }
        />

        <ol className="relative mt-16 space-y-16 sm:space-y-24">
          {/* Linha do tempo: vertical à esquerda no celular, ao centro no desktop. */}
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[0.6875rem] w-px bg-gradient-to-b from-gold/60 via-gold/25 to-transparent md:left-1/2"
          />

          {history.milestones.map((m, i) => {
            const flip = i % 2 === 1;
            return (
              <li key={m.title} className="relative grid items-center gap-8 pl-10 md:grid-cols-2 md:gap-16 md:pl-0">
                <span
                  aria-hidden="true"
                  className="absolute top-1.5 left-0 flex size-6 items-center justify-center rounded-full border border-gold/50 bg-black md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
                >
                  <span className="size-2 rounded-full bg-gold" />
                </span>

                <Reveal className={flip ? "md:order-2" : "md:text-right"}>
                  <p className="font-display text-2xl tracking-wide text-gold uppercase">{m.when}</p>
                  <h3 className="mt-1 font-display text-4xl leading-none tracking-wide uppercase sm:text-5xl">
                    {m.title}
                  </h3>
                  <p className="mt-4 text-lg text-zinc-300">{m.text}</p>
                </Reveal>

                <Reveal delay={0.1} className={`flex ${flip ? "md:order-1 md:justify-end" : ""}`}>
                  {m.photo ? (
                    <figure
                      className={`w-full max-w-[22rem] rounded-2xl border border-white/10 bg-black p-2 shadow-2xl shadow-black/60 ${
                        flip ? "md:rotate-2" : "md:-rotate-2"
                      }`}
                    >
                      <Image
                        src={m.photo.src}
                        alt={m.photo.alt}
                        placeholder="blur"
                        sizes="352px"
                        className="h-auto w-full rounded-xl"
                      />
                    </figure>
                  ) : (
                    <div className="relative flex aspect-[4/3] w-full max-w-[22rem] flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-gold via-gold to-gold-deep p-6 text-center text-black shadow-2xl shadow-gold/10 md:-rotate-2">
                      <LionMark className="h-32 w-auto text-black/85" />
                      {m.badge && (
                        <p className="mt-4 rounded-full bg-black px-4 py-1.5 font-display text-xl tracking-wide text-gold uppercase">
                          {m.badge}
                        </p>
                      )}
                    </div>
                  )}
                </Reveal>
              </li>
            );
          })}
        </ol>

        <Reveal className="mx-auto mt-24 max-w-3xl text-center">
          <Quote className="mx-auto size-10 text-gold" />
          <blockquote className="mt-6 font-display text-3xl leading-tight tracking-wide uppercase sm:text-5xl">
            {history.purpose}
          </blockquote>
          <p className="mt-6 text-muted">
            {instructor.name}, {instructor.role.toLowerCase()}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
