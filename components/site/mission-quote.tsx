import Image from "next/image";
import type { Locale } from "@/lib/i18n";

// Seccion fija de cierre para las paginas de cronica (no en el indice):
// una frase institucional sobre la mision, con el logo y una foto full-width
// de fondo. Es contenido de marca, no de la cronica puntual -- por eso vive
// hardcodeado aca (como el footer) y no en content/cronicas/*.
// Texto biblico segun USCCB (NABRE), formato de cita "Mk. 3, 14".
const MISSION_QUOTE: Record<Locale, { quote: string; citation: string }> = {
  en: {
    quote:
      "He appointed twelve that they might be with him and he might send them forth to preach.",
    citation: "Mk. 3, 14",
  },
};

const CROSS_LOGO: Record<Locale, string> = {
  en: "/logos/CruzENG_Blanco.png",
};

const ORG_NAME: Record<Locale, string> = {
  en: "Saint John Society",
};

export function MissionQuote({ locale }: { locale: Locale }) {
  const { quote, citation } = MISSION_QUOTE[locale];

  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 py-24">
      <Image
        src="/photos/cierre-mision.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-ssj-navy-deep/80"
      />
      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <Image
          src={CROSS_LOGO[locale]}
          alt={ORG_NAME[locale]}
          width={48}
          height={48}
        />
        <p className="font-quote text-xl italic leading-relaxed text-ssj-white sm:text-2xl">
          &ldquo;{quote}&rdquo;
        </p>
        <span className="text-sm font-bold tracking-[0.2em] text-ssj-gold-soft">
          {citation}
        </span>
      </div>
    </section>
  );
}
