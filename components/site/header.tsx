import Image from "next/image";
import Link from "next/link";
import type { HouseConfig } from "@/content/casas/types";
import type { Locale } from "@/lib/i18n";

export function SiteHeader({
  locale,
  house,
  mainSiteLabel,
  organizationName,
}: {
  locale: Locale;
  house: HouseConfig;
  mainSiteLabel: string;
  organizationName: string;
}) {
  const logoSrc = house.logo.en;
  const mainSiteHref = "https://socsj.org/en";

  return (
    <header className="sticky top-0 z-40 border-b border-ssj-line bg-ssj-white/95 backdrop-blur supports-[backdrop-filter]:bg-ssj-white/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ssj-gold rounded-sm"
        >
          <Image
            src={logoSrc}
            alt={organizationName}
            width={36}
            height={36}
            priority
          />
          <span className="font-display text-sm font-bold uppercase tracking-[0.12em] text-ssj-blue sm:text-base">
            {house.houseName[locale]}
          </span>
        </Link>
        <a
          href={mainSiteHref}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden text-xs font-semibold uppercase tracking-[0.1em] text-ssj-blue-accent underline decoration-ssj-blue-accent/50 underline-offset-4 transition-colors hover:text-ssj-blue sm:inline"
        >
          {mainSiteLabel}
        </a>
      </div>
    </header>
  );
}
