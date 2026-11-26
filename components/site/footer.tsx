import Link from "next/link";
import type { HouseConfig } from "@/content/casas/types";
import type { Locale } from "@/lib/i18n";
import { ShareButtons } from "@/components/site/share-buttons";

const linkClass =
  "text-sm font-semibold text-ssj-blue-light underline decoration-ssj-blue-light/60 underline-offset-4 transition-colors hover:text-ssj-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ssj-blue-light rounded-sm";

export function SiteFooter({
  locale,
  house,
  viewAllLabel,
  mainSiteLabel,
  organizationName,
  shareLabel,
  shareCopiedLabel,
  shareEmailLabel,
  shareEmailSubject,
  shareEmailBodyIntro,
  shareInviteTitle,
  shareSubscribeText,
}: {
  locale: Locale;
  house: HouseConfig;
  viewAllLabel: string;
  mainSiteLabel: string;
  organizationName: string;
  shareLabel: string;
  shareCopiedLabel: string;
  shareEmailLabel: string;
  shareEmailSubject: string;
  shareEmailBodyIntro: string;
  shareInviteTitle: string;
  shareSubscribeText: string;
}) {
  const mainSiteHref = "https://socsj.org/en";

  return (
    <footer className="border-t border-ssj-line bg-ssj-navy-deep px-6 py-10 text-ssj-white/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-ssj-white">
            {house.houseName[locale]} · {organizationName}
          </p>
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6">
            <Link href={`/${locale}`} className={linkClass}>
              {viewAllLabel}
            </Link>
            <a
              href={mainSiteHref}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              {mainSiteLabel}
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 border-l-4 border-ssj-gold-soft bg-ssj-gold-soft/5 px-5 py-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-sm text-ssj-gold-soft">{shareInviteTitle}</p>
          <ShareButtons
            shareLabel={shareLabel}
            copiedLabel={shareCopiedLabel}
            emailLabel={shareEmailLabel}
            emailSubject={shareEmailSubject}
            emailBodyIntro={shareEmailBodyIntro}
            subscribeText={shareSubscribeText}
          />
        </div>
      </div>
    </footer>
  );
}
