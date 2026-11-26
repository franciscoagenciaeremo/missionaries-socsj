"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ChronicleHighlight } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { SectionLabel } from "./gold-rule";
import { cn } from "@/lib/utils";

// Permite marcar frases en negrita en el contenido con **así** sin tener que
// pasar a HTML/rich text en el tipo Chronicle.
function renderWithBold(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((chunk, i) =>
    chunk.startsWith("**") && chunk.endsWith("**") ? (
      <strong key={i} className="font-bold">
        {chunk.slice(2, -2)}
      </strong>
    ) : (
      chunk
    )
  );
}

export function HighlightSection({
  highlight,
  locale,
  label,
  reverse = false,
  tinted = false,
  dark = false,
}: {
  highlight: ChronicleHighlight;
  locale: Locale;
  label?: string;
  reverse?: boolean;
  tinted?: boolean;
  dark?: boolean;
}) {
  return (
    <section
      className={cn(
        "px-6 py-20",
        tinted && "bg-ssj-celeste",
        dark && "bg-ssj-navy-panel"
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-16",
          reverse && "md:[&>*:first-child]:order-2"
        )}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
          <Image
            src={highlight.image.src}
            alt={highlight.image.alt[locale]}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          {label && <SectionLabel onDark={dark}>{label}</SectionLabel>}
          <h2
            className={cn(
              "font-display text-2xl font-extrabold sm:text-3xl",
              dark ? "text-ssj-white" : "text-ssj-ink"
            )}
          >
            {highlight.title[locale]}
          </h2>
          <p
            className={cn(
              "text-base leading-relaxed sm:text-lg",
              dark ? "text-ssj-white/80" : "text-text-muted"
            )}
          >
            {renderWithBold(highlight.text[locale])}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
