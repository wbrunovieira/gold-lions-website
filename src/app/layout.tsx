import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { site } from "@/config/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Jiu-jitsu em ${site.address.city} - ${site.address.state} | ${site.shortName}`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "jiu-jitsu",
    "jiu-jitsu Santa Rita do Sapucaí",
    "academia de jiu-jitsu",
    "aula de jiu-jitsu",
    "defesa pessoal Santa Rita do Sapucaí",
    "artes marciais Santa Rita do Sapucaí",
    "Gold Lions",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: site.name,
    title: site.name,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${bebas.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
        {/* Vercel Web Analytics (sem cookies) e Speed Insights (Core Web Vitals reais). */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
