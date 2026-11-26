import type { Metadata } from "next";
import { isLocale, getDictionary, locales } from "@/lib/i18n";
import { chronicles, houseConfig } from "@/lib/site-config";
import { notFound } from "next/navigation";
import { ChronicleCard } from "@/components/site/chronicle-card";
import { SubscribeBlock } from "@/components/site/subscribe-block";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  // El template del layout [locale] no aplica a su propia página: se arma acá.
  return { title: { absolute: `${dict.indexTitle} · ${dict.organizationName}` } };
}

export default async function ChroniclesIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <section className="px-6 pb-16 pt-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-4">
          <h1 className="font-display text-3xl font-extrabold text-ssj-ink sm:text-4xl">
            {dict.indexTitle}
          </h1>
          <p className="max-w-xl text-base text-text-muted sm:text-lg">
            {dict.indexSubtitle}
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        {chronicles.length === 0 ? (
          <p className="mx-auto max-w-6xl text-base text-text-muted">
            {dict.emptyIndex}
          </p>
        ) : (
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {chronicles.map((chronicle) => (
            <ChronicleCard
              key={chronicle.slug}
              chronicle={chronicle}
              locale={locale}
              readLabel={dict.readChronicle}
              comingSoonLabel={dict.comingSoon}
            />
          ))}
        </div>
        )}
      </section>

      {houseConfig.subscriptionsEnabled && (
        <SubscribeBlock
          title={dict.subscribeTitle}
          text={dict.subscribeText}
          placeholder={dict.subscribeEmailPlaceholder}
          buttonLabel={dict.subscribeButton}
          successMessage={dict.subscribeSuccess}
          errorMessage={dict.subscribeError}
          locale={locale}
          houseSlug={houseConfig.houseSlug}
        />
      )}
    </>
  );
}
