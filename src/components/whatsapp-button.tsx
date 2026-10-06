"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { WhatsAppIcon } from "@/components/ui/brand-icons";
import { site } from "@/config/site";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) =>
    setVisible(y > window.innerHeight * 0.6),
  );

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={site.whatsapp.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="fixed right-4 bottom-4 z-40 flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg shadow-black/50 sm:right-6 sm:bottom-6"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25d366] opacity-30" />
          <WhatsAppIcon className="relative size-7" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
