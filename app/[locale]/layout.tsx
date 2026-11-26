import { notFound } from "next/navigation";
import { isLocale, locales, getDictionary } from "@/lib/i18n";
import { houseConfig } from "@/lib/site-config";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { SetHtmlLang } from "@/components/site/set-html-lang";
import { ScrollProgress } from "@/components/site/scroll-progress";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);

  return (
    <>
      <SetHtmlLang locale={locale} />
      <ScrollProgress />
      <SiteHeader
        locale={locale}
        house={houseConfig}
        mainSiteLabel={dict.mainSiteLabel}
        organizationName={dict.organizationName}
      />
      <main className="flex-1">{children}</main>
      <SiteFooter
        locale={locale}
        house={houseConfig}
        viewAllLabel={dict.viewAllChronicles}
        mainSiteLabel={dict.mainSiteLabel}
        organizationName={dict.organizationName}
        shareLabel={dict.shareLabel}
        shareCopiedLabel={dict.shareCopiedLabel}
        shareEmailLabel={dict.shareEmailLabel}
        shareEmailSubject={dict.shareEmailSubject}
        shareEmailBodyIntro={dict.shareEmailBodyIntro}
        shareInviteTitle={dict.shareInviteTitle}
        shareSubscribeText={
          houseConfig.subscriptionsEnabled
            ? dict.shareSubscribeText(`https://${houseConfig.domain}/en/subscribe`)
            : ""
        }
      />
    </>
  );
}
