import { faqs, site } from "@/config/site";

export function JsonLd() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "SportsActivityLocation",
      "@id": `${site.url}/#academia`,
      name: site.name,
      description: site.description,
      url: site.url,
      image: `${site.url}/logo.jpg`,
      logo: `${site.url}/logo.jpg`,
      telephone: `+${site.whatsapp.number}`,
      sport: "Brazilian Jiu-Jitsu",
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
      sameAs: [site.instagram.link],
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
