import { useId } from "react";
import { LION_PATHS, LION_VIEWBOX } from "./lion-paths";

const [vbX, vbY, vbW, vbH] = LION_VIEWBOX.split(" ").map(Number);
const SHEEN_WIDTH = 420;

// Leão do hero: o contorno é desenhado, o corpo se preenche e, depois, um
// brilho dourado atravessa o leão de tempos em tempos. A animação é CSS
// (classes lion-* em globals.css) para o HTML do servidor e do cliente ser o
// mesmo e para `prefers-reduced-motion` desligar tudo sem hidratação.
export function AnimatedLion({
  className,
  title,
}: {
  className?: string;
  title: string;
}) {
  const clipId = useId();
  const sheenId = useId();

  return (
    <svg viewBox={LION_VIEWBOX} role="img" aria-label={title} className={className}>
      <defs>
        <clipPath id={clipId}>
          {LION_PATHS.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </clipPath>
        <linearGradient id={sheenId} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#fff6d6" stopOpacity="0" />
          <stop offset="0.5" stopColor="#fff6d6" stopOpacity="0.85" />
          <stop offset="1" stopColor="#fff6d6" stopOpacity="0" />
        </linearGradient>
      </defs>

      <g
        className="lion-draw"
        fill="var(--gold)"
        stroke="var(--gold)"
        strokeWidth={4}
        strokeLinejoin="round"
      >
        {LION_PATHS.map((d, i) => (
          <path key={i} d={d} pathLength={1} />
        ))}
      </g>

      <g clipPath={`url(#${clipId})`}>
        <rect
          className="lion-sheen"
          x={vbX - SHEEN_WIDTH}
          y={vbY - vbH * 0.25}
          width={SHEEN_WIDTH}
          height={vbH * 1.5}
          fill={`url(#${sheenId})`}
          style={{ "--sheen-distance": `${vbW + SHEEN_WIDTH * 2}px` } as React.CSSProperties}
        />
      </g>
    </svg>
  );
}
