import { getDictionary, type Locale } from "@/lib/i18n";
import { houseConfig } from "@/lib/site-config";
import { SectionLabel } from "@/components/site/gold-rule";
import { SubscribeBlock } from "@/components/site/subscribe-block";

export function InviteContent({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <>
      <section className="px-6 pb-4 pt-24">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <SectionLabel align="center">{dict.inviteEyebrow}</SectionLabel>
          <h1 className="font-display text-3xl font-extrabold text-ssj-ink sm:text-4xl">
            {dict.inviteTitle}
          </h1>
          <p className="max-w-xl text-base text-text-muted sm:text-lg">
            {dict.inviteText}
          </p>
        </div>
      </section>

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
    </>
  );
}
