import { site } from "@/config/site";
import { ogSize, renderOgImage } from "@/lib/og-image";

export const alt = `${site.name} — Jiu-jitsu em ${site.address.city} - ${site.address.state}`;
export const size = ogSize;
export const contentType = "image/png";

export default function OpengraphImage() {
  return renderOgImage({ lines: ["Jiu-jitsu em", site.address.city] });
}
