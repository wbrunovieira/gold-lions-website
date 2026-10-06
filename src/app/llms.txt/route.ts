import { classes, faqs, instructor, site } from "@/config/site";

// Resumo da academia para buscadores de IA (padrão llms.txt), gerado da config.
// Horários, preços e Instagram ficam de fora até o cliente confirmar — um
// dado errado aqui é repetido pelas IAs. Turmas e FAQ vêm da config: revisar
// aqui também quando o cliente confirmar quais turmas a academia oferece.
export const dynamic = "force-static";

export function GET() {
  const body = `# ${site.name}

> Academia de jiu-jitsu brasileiro em ${site.address.city} - ${site.address.state}, no Sul de Minas Gerais. Aulas para crianças, jovens, adultos iniciantes, mulheres e competidores, com aula experimental gratuita.

## Contato e localização

- Endereço: ${site.address.full}
- WhatsApp: ${site.whatsapp.display} (${site.whatsapp.link})
- Como chegar: [Google Maps](${site.maps.googleMaps}) · [Waze](${site.maps.waze})
- Também atende alunos de: ${site.region.join(", ")}

## Professor

- ${instructor.name} — ${instructor.role}
${instructor.highlights.map((h) => `- ${h}`).join("\n")}

${instructor.bio.join("\n\n")}

## Turmas

${classes.map((c) => `- ${c.name} (${c.audience}): ${c.description}`).join("\n")}

## Perguntas frequentes

${faqs.map((f) => `- **${f.q}** ${f.a}`).join("\n")}

## Links

- [Site](${site.url}): página completa com turmas, horários, planos e localização
- [Agendar aula experimental](${site.whatsapp.link}): pelo WhatsApp
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
