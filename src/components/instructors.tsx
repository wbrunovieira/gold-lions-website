import { Check } from "lucide-react";
import { instructor } from "@/config/site";
import { InstagramIcon } from "@/components/ui/brand-icons";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Instructors() {
  return (
    <section id="professor" className="relative bg-surface py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="relative">
          <div className="absolute -inset-2 -z-10 -translate-x-2 translate-y-3 rounded-3xl border border-gold/30 sm:-inset-3 sm:-translate-x-5 sm:translate-y-5" />
          <PhotoPlaceholder label="Foto do professor" className="aspect-[4/5] rounded-3xl" />
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Quem ensina"
            title={
              <>
                {instructor.name.split(" ")[0]}{" "}
                <span className="text-gold">{instructor.name.split(" ").slice(1).join(" ")}</span>
              </>
            }
          />
          <Reveal delay={0.1}>
            <p className="mt-2 text-sm font-semibold tracking-[0.2em] text-muted uppercase">
              {instructor.role}
            </p>
            {instructor.bio.map((p) => (
              <p key={p} className="mt-5 text-lg text-zinc-300">
                {p}
              </p>
            ))}

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {instructor.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-center gap-3 rounded-xl border border-white/8 bg-black px-4 py-3 text-zinc-200"
                >
                  <Check className="size-4 shrink-0 text-gold" />
                  {h}
                </li>
              ))}
            </ul>

            <a
              href={instructor.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 font-semibold transition-colors hover:border-gold hover:text-gold"
            >
              <InstagramIcon className="size-4" />
              Instagram
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
