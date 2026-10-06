import { faqs, instructor, site } from "@/config/site";

export function JsonLd() {
  const academyId = `${site.url}/#academia`;
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "SportsActivityLocation",
      "@id": academyId,
      name: site.name,
      alternateName: site.shortName,
      description: site.description,
      url: site.url,
      image: `${site.url}/opengraph-image`,
      logo: `${site.url}/lion.svg`,
      telephone: `+${site.whatsapp.number}`,
      sport: "Brazilian Jiu-Jitsu",
      knowsAbout: ["Jiu-jitsu brasileiro", "Jiu-jitsu infantil", "Jiu-jitsu feminino", "No-Gi", "Defesa pessoal"],
      address: {
        "@type": "PostalAddress",
        streetAddress: [site.address.street, site.address.neighborhood].filter(Boolean).join(", ") || undefined,
        addressLocality: site.address.city,
        addressRegion: site.address.state,
        postalCode: site.address.postalCode || undefined,
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: site.address.lat,
        longitude: site.address.lng,
      },
      hasMap: site.maps.googleMaps,
      openingHoursSpecification: site.openingHours.map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.dayOfWeek,
        opens: h.opens,
        closes: h.closes,
      })),
      areaServed: [site.address.city, ...site.region].map((city) => ({
        "@type": "City",
        name: `${city} - MG`,
      })),
      founder: {
        "@type": "Person",
        name: instructor.name,
        jobTitle: instructor.role,
        homeLocation: { "@type": "City", name: `${site.address.city} - MG` },
      },
      makesOffer: {
        "@type": "Offer",
        name: "Aula experimental gratuita de jiu-jitsu",
        price: "0",
        priceCurrency: "BRL",
        url: site.whatsapp.link,
      },
      sameAs: [site.instagram.link],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${site.url}/#site`,
      name: site.name,
      url: site.url,
      inLanguage: "pt-BR",
      publisher: { "@id": academyId },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
