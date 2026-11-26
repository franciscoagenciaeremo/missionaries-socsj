"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function ChronicleHero({
  eyebrow,
  title,
  quote,
  quoteCitation,
  ctaLabel,
  imageSrc,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  quote: string;
  quoteCitation?: string;
  ctaLabel: string;
  imageSrc: string;
  imageAlt: string;
}) {
  function scrollToSubscribe() {
    document
      .getElementById("subscribe-block")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: "var(--overlay-quote)" }}
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col gap-6 px-6 pb-16 pt-40 text-center text-ssj-white sm:pb-24"
      >
        <span className="text-xs font-bold tracking-[0.25em] text-ssj-gold-soft sm:text-sm">
          {eyebrow}
        </span>
        <h1 className="font-display text-3xl font-extrabold leading-tight sm:text-5xl">
          {title}
        </h1>
        <p className="font-quote mx-auto max-w-2xl text-xl italic text-ssj-white/90 sm:text-2xl">
          &ldquo;{quote}&rdquo;
        </p>
        {quoteCitation && (
          <p className="-mt-4 text-sm text-ssj-white/70 sm:text-base">
            {quoteCitation}
          </p>
        )}
        <div className="mt-2 flex justify-center">
          <Button variant="gold" size="lg" onClick={scrollToSubscribe}>
            {ctaLabel}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
