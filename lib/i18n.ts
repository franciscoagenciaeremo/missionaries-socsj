/**
 * missionaries.socsj.org es solo en inglés: es para las familias de los
 * misioneros americanos. Se mantiene el segmento /en en las rutas para que
 * el código siga alineado con el template de chile-socsj y scotland-socsj-org.
 */
export const locales = ["en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

type Dictionary = {
  chronicleEyebrow: (period: string) => string;
  subscribeTitle: string;
  subscribeText: string;
  subscribeEmailPlaceholder: string;
  subscribeButton: string;
  subscribeSuccess: string;
  subscribeError: string;
  ctaReceiveNext: string;
  featuredLabel: string;
  fullChronicleLabel: string;
  indexEyebrow: string;
  indexTitle: string;
  indexSubtitle: string;
  readChronicle: string;
  comingSoon: string;
  viewAllChronicles: string;
  backToIndex: string;
  closeLabel: string;
  mainSiteLabel: string;
  shareLabel: string;
  shareCopiedLabel: string;
  shareEmailLabel: string;
  shareEmailSubject: string;
  shareEmailBodyIntro: string;
  shareInviteTitle: string;
  inviteEyebrow: string;
  inviteTitle: string;
  inviteText: string;
  organizationName: string;
  shareSubscribeText: (url: string) => string;
  /** Nota al pie de la crónica. Vacía: los textos se escriben en inglés. */
  translationDisclaimer: string;
  /** Texto del índice cuando todavía no hay crónicas. */
  emptyIndex: string;
};

const en: Dictionary = {
  chronicleEyebrow: (period) => `CHRONICLE · ${period}`,
  subscribeTitle: "Get the next chronicles",
  subscribeText:
    "You'll be among the first to know as soon as a new chronicle is published.",
  subscribeEmailPlaceholder: "Your email address",
  subscribeButton: "Subscribe",
  subscribeSuccess: "Done! You're now subscribed.",
  subscribeError: "We couldn't process your subscription. Please try again.",
  ctaReceiveNext: "I want to receive the next chronicles",
  featuredLabel: "THE HIGHLIGHT",
  fullChronicleLabel: "THE FULL CHRONICLE",
  indexEyebrow: "2026",
  indexTitle: "Chronicle index",
  indexSubtitle:
    "News from our missionaries around the world for their families back home, month by month.",
  readChronicle: "Read chronicle",
  comingSoon: "Coming soon",
  viewAllChronicles: "View all chronicles",
  backToIndex: "Chronicle index",
  closeLabel: "Close",
  mainSiteLabel: "Saint John Society website",
  shareLabel: "Share",
  shareCopiedLabel: "Link copied!",
  shareEmailLabel: "Invite by email",
  shareEmailSubject: "A Saint John Society chronicle I wanted to share",
  shareEmailBodyIntro:
    "I wanted to share this chronicle from the Saint John Society missionaries:",
  shareInviteTitle: "Enjoyed this chronicle? Share it with someone.",
  inviteEyebrow: "Invitation",
  inviteTitle: "Join the Saint John Society missionary chronicles",
  inviteText:
    "Someone invited you to follow the news from our missionaries. Leave your email and we will let you know every time we publish a new chronicle.",
  organizationName: "Saint John Society",
  shareSubscribeText: (url) =>
    `Use the link below to subscribe and get the next chronicle as soon as it is published: ${url}`,
  translationDisclaimer: "",
  emptyIndex: "The first chronicle is coming soon.",
};

export const dictionaries: Record<Locale, Dictionary> = { en };

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

/** Formatea "2026-11" como "NOVEMBER 2026". */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function formatPeriod(period: string, locale: Locale): string {
  const [year, month] = period.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, 1));
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
  return formatter.format(date).toUpperCase();
}
