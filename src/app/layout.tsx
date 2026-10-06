import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Geist } from "next/font/google";
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
    default: `${site.name} | Jiu-jitsu em ${site.address.city} - ${site.address.state}`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "jiu-jitsu",
    "jiu-jitsu Santa Rita do Sapucaí",
    "academia de jiu-jitsu",
    "jiu-jitsu kids",
    "jiu-jitsu feminino",
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
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
