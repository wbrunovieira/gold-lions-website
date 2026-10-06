import { LION_PATHS, LION_VIEWBOX } from "./lion-paths";

// Leão estático. Usa `currentColor`, então a cor vem da classe (ex.: text-gold).
export function LionMark({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox={LION_VIEWBOX}
      fill="currentColor"
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      className={className}
    >
      {LION_PATHS.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}
