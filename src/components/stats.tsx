"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";
import { stats } from "@/config/site";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section id="numeros" className="relative border-y border-white/5 bg-surface">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center gap-1 px-4 py-10 text-center sm:py-14 ${
              i % 2 === 0 ? "border-r border-white/5" : ""
            } ${i < 2 ? "border-b border-white/5 lg:border-b-0" : ""} ${
              i === 1 ? "lg:border-r" : ""
            }`}
          >
            <dt className="order-2 text-sm text-muted">{stat.label}</dt>
            <dd className="order-1 font-display text-6xl text-gold sm:text-7xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
