import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import type { IntentPage } from "@/config/intent-pages";
import { site } from "@/config/site";
import { Faq } from "@/components/faq";
import { FinalCta, Footer } from "@/components/footer";
import { Location } from "@/components/location";
import { Navbar } from "@/components/navbar";
import { Schedule } from "@/components/schedule";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhatsAppButton } from "@/components/whatsapp-button";

function IntentJsonLd({ page }: { page: IntentPage }) {
  const url = `${site.url}/${page.slug}`;
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: site.url },
        { "@type": "ListItem", position: 2, name: page.breadcrumb, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#pagina`,
      url,
      name: page.metaTitle,
      description: page.metaDescription,
      inLanguage: "pt-BR",
      about: { "@id": `${site.url}/#academia` },
      isPartOf: { "@id": `${site.url}/#site` },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function IntentPageView({ page }: { page: IntentPage }) {
  return (
    <>
      <IntentJsonLd page={page} />
      <Navbar />
      <main className="flex flex-1 flex-col">
        <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
          <div className="pointer-events-none absolute top-0 left-1/2 size-[60rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(circle,rgba(254,192,9,0.12),transparent_60%)]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <nav aria-label="Você está em" className="flex items-center gap-1.5 text-sm text-muted">
                <Link href="/" className="hover:text-gold">
                  Início
                </Link>
                <ChevronRight className="size-3.5" />
                <span className="text-zinc-300">{page.breadcrumb}</span>
              </nav>
              <h1 className="mt-5 font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95] tracking-wide uppercase">
                {page.title[0]} <span className="text-gradient-gold">{page.title[1]}</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-zinc-300">{page.lead}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={site.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-black shadow-[0_0_40px_-8px_rgba(254,192,9,0.6)] transition-transform hover:scale-105"
                >
                  Agende sua aula grátis
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#horarios"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 font-semibold transition-colors hover:border-gold hover:text-gold"
                >
                  Ver horários
                </a>
              </div>
            </div>
            {/* Sem Reveal: a foto é o LCP no celular e precisa aparecer no primeiro paint. */}
            <div className="mx-auto w-full max-w-[22rem]">
              <Image
                src={page.photo.src}
                alt={page.photo.alt}
                placeholder="blur"
                preload
                sizes="352px"
                className="h-auto w-full rounded-3xl border border-white/10 shadow-2xl shadow-black/60 lg:rotate-2"
              />
            </div>
          </div>
        </section>

        <section aria-labelledby="beneficios" className="bg-surface py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 id="beneficios" className="sr-only">
              Por que treinar na Gold Lions
            </h2>
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {page.benefits.map(({ icon: Icon, title, text }, i) => (
                <Reveal as="li" key={title} delay={0.06 * i} className="h-full rounded-3xl border border-white/8 bg-black p-6">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl tracking-wide uppercase">{title}</h3>
                  <p className="mt-2 text-muted">{text}</p>
                </Reveal>
              ))}
            </ul>

            <div className="mt-20">
              <SectionHeading eyebrow="Na prática" title={page.howTitle} />
              <ol className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
                {page.how.map((step, i) => (
                  <Reveal as="li" key={step.title} delay={0.08 * i} className="relative h-full rounded-3xl border border-white/8 bg-black p-6 pt-10">
                    <span className="absolute -top-5 left-6 flex size-10 items-center justify-center rounded-full bg-gold font-display text-2xl text-black">
                      {i + 1}
                    </span>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="mt-2 text-muted">{step.text}</p>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <Schedule />
        <Faq items={page.faqs} />
        <Location />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
