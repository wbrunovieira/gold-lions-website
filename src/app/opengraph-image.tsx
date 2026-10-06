import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { LION_PATHS, LION_VIEWBOX } from "@/components/lion/lion-paths";
import { site } from "@/config/site";

// Prévia de compartilhamento (WhatsApp, Instagram, Facebook...).
export const alt = `${site.name} — Jiu-jitsu em ${site.address.city} - ${site.address.state}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const bebas = await readFile(join(process.cwd(), "src/app/fonts/BebasNeue-Regular.ttf"));

export default function OpengraphImage() {
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
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 680 }}>
          <div style={{ fontSize: 34, letterSpacing: 6, color: "#fec009" }}>Gold Lions Jiu-Jitsu Team</div>
          <div style={{ fontSize: 112, lineHeight: 0.92, marginTop: 18 }}>Jiu-jitsu em</div>
          <div style={{ fontSize: 112, lineHeight: 0.92, color: "#fec009" }}>
            {site.address.city}
          </div>
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
            Aula experimental grátis
          </div>
        </div>
        <svg viewBox={LION_VIEWBOX} width={360} height={464} fill="#fec009">
          {LION_PATHS.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </svg>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Bebas Neue", data: bebas, style: "normal", weight: 400 }],
    },
  );
}
