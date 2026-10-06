import { Camera } from "lucide-react";

// PROVISÓRIO: ocupa o lugar das fotos reais até o cliente enviar o material.
export function PhotoPlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-950 to-black ${className}`}
    >
      <div className="absolute inset-0 bg-grain opacity-[0.07]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(254,192,9,0.12),transparent_60%)]" />
      <div className="relative flex flex-col items-center gap-2 text-zinc-600">
        <Camera className="size-6" />
        <span className="text-xs tracking-widest uppercase">{label}</span>
      </div>
    </div>
  );
}
