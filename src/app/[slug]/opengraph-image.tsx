import { intentPages } from "@/config/intent-pages";
import { ogSize, renderOgImage } from "@/lib/og-image";

export const alt = "Gold Lions Jiu-Jitsu Team em Santa Rita do Sapucaí";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return intentPages.map((p) => ({ slug: p.slug }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = intentPages.find((p) => p.slug === slug);
  return renderOgImage({
    lines: page ? [page.title[0], page.title[1]] : ["Jiu-jitsu em", "Santa Rita do Sapucaí"],
    // Na página da aula experimental o título já diz "grátis": o botão chama para a ação.
    cta: slug === "aula-experimental" ? "Agende pelo WhatsApp" : undefined,
  });
}
