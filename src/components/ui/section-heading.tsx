import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <Reveal className={`max-w-2xl ${alignment}`}>
      <p className="text-sm font-semibold tracking-[0.25em] text-gold uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-5xl leading-none tracking-wide uppercase sm:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg text-muted">{description}</p>
      )}
    </Reveal>
  );
}
