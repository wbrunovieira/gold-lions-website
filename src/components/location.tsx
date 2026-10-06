import { Clock, MapPin, Navigation } from "lucide-react";
import { site } from "@/config/site";
import { WhatsAppIcon } from "@/components/ui/brand-icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Location() {
  return (
    <section id="localizacao" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Localização"
          title={
            <>
              Venha nos <span className="text-gold">visitar</span>
            </>
          }
          description="Estamos esperando você para a sua primeira aula. É só chegar!"
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.6fr]">
          <Reveal className="flex flex-col gap-4">
            <div className="rounded-3xl border border-white/10 bg-surface p-7">
              <div className="flex gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold">Endereço</h3>
                  <p className="mt-1 text-muted">{site.address.full}</p>
                </div>
              </div>
              <div className="mt-6 flex gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <Clock className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold">Funcionamento</h3>
                  <ul className="mt-1 text-muted">
                    {site.openingHours.map((h) => (
                      <li key={h.days}>
                        {h.days}: <span className="text-zinc-300">{h.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <p className="mt-2 text-sm font-semibold tracking-[0.2em] text-muted uppercase">
              Como chegar
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <a
                href={site.maps.waze}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 rounded-2xl bg-[#33ccff] px-5 py-4 font-semibold text-black transition-transform hover:scale-[1.03]"
              >
                <Navigation className="size-5 transition-transform group-hover:rotate-12" />
                Ir com Waze
              </a>
              <a
                href={site.maps.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 rounded-2xl bg-white px-5 py-4 font-semibold text-black transition-transform hover:scale-[1.03]"
              >
                <MapPin className="size-5 text-[#ea4335] transition-transform group-hover:-translate-y-0.5" />
                Ir com Google Maps
              </a>
            </div>
            <a
              href={site.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl border border-white/15 px-5 py-4 font-semibold transition-colors hover:border-gold hover:text-gold"
            >
              <WhatsAppIcon className="size-5" />
              Dúvidas? Fale no WhatsApp
            </a>
          </Reveal>

          <Reveal delay={0.1} className="min-h-[22rem] overflow-hidden rounded-3xl border border-white/10">
            <iframe
              title={`Mapa: ${site.name}`}
              src={site.maps.embed}
              className="size-full min-h-[22rem] grayscale-[0.4] invert-[0.92] hue-rotate-180"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
