import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { LION_PATHS, LION_VIEWBOX } from "@/components/lion/lion-paths";

// Prévia de compartilhamento (WhatsApp, Instagram, Facebook...) no padrão da
// marca: texto à esquerda, leão à direita. Usada pela home e pelas páginas internas.
export const ogSize = { width: 1200, height: 630 };

const bebas = readFile(join(process.cwd(), "src/app/fonts/BebasNeue-Regular.ttf"));

export async function renderOgImage({
  lines,
  cta = "Aula experimental grátis",
}: {
  // A última linha sai em dourado.
  lines: string[];
  cta?: string;
}) {
  const long = lines.join(" ").length > 34;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 72px",
          background: "radial-gradient(circle at 78% 50%, #3a2a00 0%, #000 58%)",
          fontFamily: "Bebas Neue",
          color: "#f5f5f5",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 700 }}>
          <div style={{ fontSize: 34, letterSpacing: 6, color: "#fec009" }}>Gold Lions Jiu-Jitsu Team</div>
          {lines.map((line, i) => (
            <div
              key={line}
              style={{
                fontSize: long ? 88 : 112,
                lineHeight: 0.95,
                marginTop: i === 0 ? 18 : 0,
                color: i === lines.length - 1 ? "#fec009" : "#f5f5f5",
              }}
            >
              {line}
            </div>
          ))}
          <div
            style={{
              display: "flex",
              marginTop: 36,
              alignSelf: "flex-start",
              background: "#fec009",
              color: "#000",
              fontSize: 40,
              padding: "10px 30px",
              borderRadius: 999,
            }}
          >
            {cta}
          </div>
        </div>
        <svg viewBox={LION_VIEWBOX} width={340} height={438} fill="#fec009">
          {LION_PATHS.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </svg>
      </div>
    ),
    {
      ...ogSize,
      fonts: [{ name: "Bebas Neue", data: await bebas, style: "normal", weight: 400 }],
    },
  );
}
