import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { intentPages } from "@/config/intent-pages";
import { IntentPageView } from "@/components/intent-page";

// Só as páginas definidas em intent-pages.ts existem; o resto é 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return intentPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = intentPages.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    // Sem "| Gold Lions": o Google já mostra o nome do site acima do título.
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: { canonical: `/${page.slug}` },
    // openGraph/twitter substituem os da raiz por inteiro: repetir siteName e card.
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: "Gold Lions Jiu-Jitsu Team",
      url: `/${page.slug}`,
      title: page.metaTitle,
      description: page.metaDescription,
    },
    twitter: { card: "summary_large_image", title: page.metaTitle, description: page.metaDescription },
  };
}

export default async function Page({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const page = intentPages.find((p) => p.slug === slug);
  if (!page) notFound();
  return <IntentPageView page={page} />;
}
