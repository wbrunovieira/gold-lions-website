import { ArrowRight, MapPin } from "lucide-react";
import { navLinks, site } from "@/config/site";
import { LionMark } from "@/components/lion/lion-mark";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/brand-icons";
import { Reveal } from "@/components/ui/reveal";
import WBSignature from "@/components/wb-signature";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-gold via-gold to-gold-deep" />
      <div className="absolute inset-0 bg-grain opacity-[0.12] mix-blend-multiply" />
      <LionMark className="pointer-events-none absolute -right-20 -bottom-20 h-[30rem] w-auto text-black/15 sm:h-[40rem]" />
      <Reveal className="relative mx-auto max-w-3xl text-center text-black">
        <h2 className="font-display text-6xl leading-[0.9] uppercase sm:text-8xl">
          Seu primeiro treino é por nossa conta
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-black/70">
          Sem compromisso e sem precisar de kimono. Chame no WhatsApp e escolha o melhor horário.
        </p>
        <a
          href={site.whatsapp.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-black px-6 py-4 font-semibold whitespace-nowrap sm:px-8 sm:text-lg text-gold transition-transform hover:scale-105"
        >
          <WhatsAppIcon className="size-5" />
          Agendar aula experimental
          <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
        </a>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <a href="#inicio" className="flex items-center gap-3">
            <LionMark className="h-12 w-auto text-gold" />
            <span className="font-display text-3xl tracking-wider uppercase">
              Gold <span className="text-gold">Lions</span>
            </span>
          </a>
          <p className="mt-4 max-w-sm text-muted">
            Jiu-jitsu team em {site.address.city} - {site.address.state}. Disciplina, respeito e garra
            dentro e fora do tatame.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.instagram.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-white/10 p-3 text-zinc-400 transition-colors hover:border-gold hover:text-gold"
            >
              <InstagramIcon className="size-5" />
            </a>
            <a
              href={site.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="rounded-full border border-white/10 p-3 text-zinc-400 transition-colors hover:border-gold hover:text-gold"
            >
              <WhatsAppIcon className="size-5" />
            </a>
          </div>
        </div>

        <nav aria-label="Rodapé">
          <h3 className="font-display text-xl tracking-wider text-gold uppercase">Navegação</h3>
          <ul className="mt-4 space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-muted transition-colors hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-xl tracking-wider text-gold uppercase">Contato</h3>
          <ul className="mt-4 space-y-3 text-muted">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              {site.address.full}
            </li>
            <li>
              <a href={site.whatsapp.link} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-foreground">
                <WhatsAppIcon className="mt-0.5 size-4 shrink-0 text-gold" />
                {site.whatsapp.display}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-zinc-500 sm:flex-row sm:px-6">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
          </p>
          <WBSignature className="text-zinc-400" />
        </div>
      </div>
    </footer>
  );
}
