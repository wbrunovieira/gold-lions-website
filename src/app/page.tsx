import { About } from "@/components/about";
import { Classes } from "@/components/classes";
import { Faq } from "@/components/faq";
import { FinalCta, Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { Instructors } from "@/components/instructors";
import { JsonLd } from "@/components/json-ld";
import { Location } from "@/components/location";
import { Navbar } from "@/components/navbar";
import { Pricing } from "@/components/pricing";
import { Schedule } from "@/components/schedule";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";
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
        <Classes />
        <Schedule />
        <Instructors />
        <Gallery />
        <Testimonials />
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
