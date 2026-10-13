import { intentPages } from "@/config/intent-pages";
import { appFeatures, audiences, faqs, history, instructor, schedule, site } from "@/config/site";

// Resumo da academia para buscadores de IA (padrão llms.txt), gerado da config.
// Preços ficam de fora até o cliente confirmar — um dado errado aqui é
// repetido pelas IAs.
export const dynamic = "force-static";

export function GET() {
  const body = `# ${site.name}

> Academia de jiu-jitsu brasileiro em ${site.address.city} - ${site.address.state}, no Sul de Minas Gerais. Uma turma única para todos os níveis, de iniciantes a quem quer competir, com aula experimental gratuita.

## Contato e localização

- Endereço: ${site.address.full}
- WhatsApp: ${site.whatsapp.display} (${site.whatsapp.link})
- Instagram: [${site.instagram.handle}](${site.instagram.link})
- Como chegar: [Google Maps](${site.maps.googleMaps}) · [Waze](${site.maps.waze})
- Também atende alunos de: ${site.region.join(", ")}

## Área do aluno (app)

Alunos acessam pelo celular ou computador: ${site.studentArea.url}
${appFeatures.map((f) => `- ${f.title}: ${f.text}`).join("\n")}

## Professor

- ${instructor.name} — ${instructor.role}
${instructor.highlights.map((h) => `- ${h}`).join("\n")}

${instructor.bio.join("\n\n")}

## Nossa história

${history.milestones.map((m) => `- ${m.when} — ${m.title}: ${m.text}`).join("\n")}

${history.purpose}

## Horários${schedule.provisional ? " (provisórios)" : ""}

${schedule.days}, turma única para todos os níveis:
${schedule.sessions.map((s) => `- ${s.start} às ${s.end}`).join("\n")}

## Para quem é

${audiences.map((a) => `- ${a.name}: ${a.description}`).join("\n")}

## Perguntas frequentes

${faqs.map((f) => `- **${f.q}** ${f.a}`).join("\n")}

## Links

- [Site](${site.url}): página completa com horários, planos, professor e localização
${intentPages.map((p) => `- [${p.breadcrumb}](${site.url}/${p.slug}): ${p.metaDescription}`).join("\n")}
- [Agendar aula experimental](${site.whatsapp.link}): pelo WhatsApp
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
