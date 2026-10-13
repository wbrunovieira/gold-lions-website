"use client";

import Link from "next/link";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { LogIn, Menu, X } from "lucide-react";
import { LionMark } from "@/components/lion/lion-mark";
import { navLinks, site } from "@/config/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-white/5 bg-black/75 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <LionMark className="h-9 w-auto text-gold" />
          <span className="font-display text-2xl tracking-wider uppercase">
            Gold <span className="text-gold">Lions</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-5 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-zinc-300 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={site.studentArea.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 py-1 pr-4 pl-1 text-sm font-semibold backdrop-blur-md transition-colors hover:border-gold/60 hover:text-gold"
          >
            <span className="flex size-7 items-center justify-center rounded-full bg-gold/15 text-gold transition-colors group-hover:bg-gold group-hover:text-black">
              <LogIn className="size-3.5" />
            </span>
            Área do aluno
          </a>
          <a
            href={site.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-black transition-transform hover:scale-105"
          >
            Aula experimental
          </a>
        </div>

        <a
          href={site.studentArea.url}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto mr-1 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold backdrop-blur-md transition-colors hover:border-gold/60 hover:text-gold lg:hidden"
        >
          <LogIn className="size-3.5 text-gold" />
          Área do aluno
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="-mr-2 p-2 lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 pt-2 pb-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-display text-3xl tracking-wide uppercase hover:text-gold"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-4">
                <a
                  href={site.studentArea.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-white/15 py-3 font-semibold"
                >
                  <LogIn className="size-4 text-gold" />
                  Acessar área do aluno
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={site.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center rounded-full bg-gold py-3 font-semibold text-black"
                >
                  Agendar aula experimental
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
