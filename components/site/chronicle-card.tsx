import Image from "next/image";
import Link from "next/link";
import type { Chronicle } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { formatPeriod } from "@/lib/i18n";

/** Foto de la tarjeta, o la cruz sobre fondo azul de marca si la crónica no tiene foto. */
function CardImage({ chronicle, locale }: { chronicle: Chronicle; locale: Locale }) {
  const image = chronicle.cardImage ?? chronicle.heroImage;
  if (!image) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-ssj-navy-deep">
        <Image src="/logos/CruzENG_Blanco.svg" alt="" width={56} height={56} />
      </div>
    );
  }
  return (
    <Image
      src={image.src}
      alt={image.alt[locale]}
      fill
      sizes="(min-width: 768px) 33vw, 100vw"
      className="object-cover"
    />
  );
}

export function ChronicleCard({
  chronicle,
  locale,
  readLabel,
  comingSoonLabel,
}: {
  chronicle: Chronicle;
  locale: Locale;
  readLabel: string;
  comingSoonLabel: string;
}) {
  const period = formatPeriod(chronicle.period, locale);

  if (!chronicle.published) {
    return (
      <div
        aria-disabled="true"
        className="flex flex-col overflow-hidden rounded-md border border-ssj-line bg-ssj-paper opacity-60"
      >
        <div className="relative aspect-[4/3] w-full bg-ssj-navy-panel/20">
          <CardImage chronicle={chronicle} locale={locale} />
        </div>
        <div className="flex flex-1 flex-col gap-2 p-6">
          <span className="text-xs font-bold tracking-[0.15em] text-ssj-gold">
            {period}
          </span>
          <h3 className="font-display text-lg font-bold text-ssj-ink">
            {chronicle.title[locale]}
          </h3>
          <p className="text-sm text-text-muted">{chronicle.intro[locale]}</p>
          <span className="mt-auto inline-block w-fit rounded-sm border border-ssj-line px-4 py-2 text-xs font-semibold uppercase tracking-wide text-text-muted">
            {comingSoonLabel}
          </span>
        </div>
      </div>
    );
  }

  return (
    <article className="flex flex-col overflow-hidden rounded-md border border-ssj-line bg-ssj-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-[4/3] w-full">
        <CardImage chronicle={chronicle} locale={locale} />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <span className="text-xs font-bold tracking-[0.15em] text-ssj-gold">
          {period}
        </span>
        <h3 className="font-display text-lg font-bold text-ssj-ink">
          {chronicle.title[locale]}
        </h3>
        <p className="text-sm text-text-muted">{chronicle.intro[locale]}</p>
        <Link
          href={`/${locale}/cronicas/${chronicle.slug}`}
          className="mt-auto inline-flex w-fit items-center gap-2 rounded-sm bg-ssj-gold px-4 py-2 text-xs font-semibold uppercase tracking-wide text-ssj-black transition-colors hover:bg-ssj-gold-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ssj-gold focus-visible:ring-offset-2"
        >
          {readLabel}
        </Link>
      </div>
    </article>
  );
}
