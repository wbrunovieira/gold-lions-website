import { About } from "@/components/about";
import { Audiences } from "@/components/audiences";
import { Faq } from "@/components/faq";
import { FinalCta, Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { History } from "@/components/history";
import { Instructors } from "@/components/instructors";
import { JsonLd } from "@/components/json-ld";
import { Location } from "@/components/location";
import { Navbar } from "@/components/navbar";
import { Pricing } from "@/components/pricing";
import { Schedule } from "@/components/schedule";
import { Stats } from "@/components/stats";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Stats />
        <About />
        <History />
        <Audiences />
        <Schedule />
        <Instructors />
        <Gallery />
        <Pricing />
        <Faq />
        <Location />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
