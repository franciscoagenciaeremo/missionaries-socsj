import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, getDictionary, locales, formatPeriod } from "@/lib/i18n";
import { chronicles, findChronicle, houseConfig } from "@/lib/site-config";
import { ChronicleHero } from "@/components/site/chronicle-hero";
import { HighlightSection } from "@/components/site/highlight-section";
import { Gallery } from "@/components/site/gallery";
import { SectionLabel } from "@/components/site/gold-rule";
import { SubscribeBlock } from "@/components/site/subscribe-block";
import { Reveal } from "@/components/site/reveal";
import { MissionQuote } from "@/components/site/mission-quote";
import { ZoomableFigure } from "@/components/site/zoomable-figure";

const EMAIL_PATTERN = /([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g;
const BOLD_PATTERN = /\*\*([^*]+)\*\*/g;
const ITALIC_PATTERN = /\*([^*]+)\*/g;

/** Convierte las direcciones de mail de un tramo de texto en links mailto clickeables. */
function linkifyEmails(text: string, keyPrefix: string) {
  return text.split(EMAIL_PATTERN).map((part, i) =>
    i % 2 === 1 ? (
      <a
        key={`${keyPrefix}-${i}`}
        href={`mailto:${part}`}
        className="underline underline-offset-2 hover:text-ssj-ink"
      >
        {part}
      </a>
    ) : (
      part
    )
  );
}

/** Itálica (*entre asteriscos*) y mails clickeables dentro de un tramo. */
function renderItalic(text: string, keyPrefix: string) {
  return text.split(ITALIC_PATTERN).map((part, i) =>
    i % 2 === 1 ? (
      <em key={`${keyPrefix}-em-${i}`}>{linkifyEmails(part, `${keyPrefix}-em-${i}`)}</em>
    ) : (
      linkifyEmails(part, `${keyPrefix}-t-${i}`)
    )
  );
}

/**
 * Texto de párrafo con formato mínimo: **entre dobles asteriscos** va en
 * negrita, *entre asteriscos* va en itálica (palabras en latín u otro
 * idioma) y los mails son clickeables.
 */
function renderInline(text: string) {
  return text.split(BOLD_PATTERN).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={`b-${i}`} className="font-bold">
        {renderItalic(part, `b-${i}`)}
      </strong>
    ) : (
      renderItalic(part, `p-${i}`)
    )
  );
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    chronicles
      .filter((c) => c.published)
      .map((c) => ({ locale, slug: c.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const chronicle = findChronicle(slug);
  if (!chronicle) return {};
  const shareImage = chronicle.cardImage ?? chronicle.heroImage;
  return {
    title: chronicle.title[locale],
    description: chronicle.intro[locale],
    openGraph: {
      title: chronicle.title[locale],
      description: chronicle.intro[locale],
      type: "article",
      ...(shareImage && {
        images: [{ url: shareImage.src, alt: shareImage.alt[locale] }],
      }),
    },
  };
}

export default async function ChroniclePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const chronicle = findChronicle(slug);
  if (!chronicle || !chronicle.published) notFound();

  const dict = getDictionary(locale);
  const period = formatPeriod(chronicle.period, locale);
  const bodyParagraphs = chronicle.body[locale];
  const blocks = chronicle.contentBlocks;

  return (
    <>
      <ChronicleHero
        eyebrow={dict.chronicleEyebrow(period)}
        title={chronicle.title[locale]}
        quote={chronicle.quote?.[locale]}
        quoteCitation={chronicle.quoteCitation?.[locale]}
        ctaLabel={houseConfig.subscriptionsEnabled ? dict.ctaReceiveNext : undefined}
        imageSrc={chronicle.heroImage?.src}
        imageAlt={chronicle.heroImage?.alt[locale]}
      />

      {blocks ? (
        <section className="px-6 py-20">
          <div className="mx-auto max-w-3xl flow-root space-y-8">
            {(() => {
              let sawFirstParagraph = false;
              return blocks.map((block, index) => {
                if (block.type === "heading") {
                  return (
                    <Reveal key={index} className="clear-both">
                      <h2 className="font-display text-2xl font-extrabold text-ssj-ink sm:text-3xl">
                        {block.text[locale]}
                      </h2>
                    </Reveal>
                  );
                }
                if (block.type === "paragraph") {
                  const isFirst = !sawFirstParagraph;
                  sawFirstParagraph = true;
                  return (
                    <p
                      key={index}
                      className={
                        isFirst
                          ? "drop-cap text-lg leading-relaxed text-ssj-black sm:text-xl"
                          : "text-lg leading-relaxed text-ssj-black sm:text-xl"
                      }
                    >
                      {renderInline(block.text[locale])}
                    </p>
                  );
                }
                if (block.type === "imagePair") {
                  return (
                    <div
                      key={index}
                      className="clear-both grid grid-cols-1 gap-4 sm:grid-cols-2"
                    >
                      {block.images.map((item, i) => (
                        <ZoomableFigure
                          key={i}
                          inline
                          src={item.image.src}
                          alt={item.image.alt[locale]}
                          caption={item.caption[locale]}
                          closeLabel={dict.closeLabel}
                          objectPosition={item.image.objectPosition}
                        />
                      ))}
                    </div>
                  );
                }
                const captionText = [
                  block.caption[locale],
                  block.filename[locale].replace(/\.[^./]+$/, ""),
                ]
                  .filter(Boolean)
                  .join(" · ");
                return (
                  <ZoomableFigure
                    key={index}
                    src={block.image.src}
                    alt={block.image.alt[locale]}
                    caption={captionText}
                    closeLabel={dict.closeLabel}
                    objectPosition={block.image.objectPosition}
                    offsetLines={block.offsetLines}
                  />
                );
              });
            })()}
            {dict.translationDisclaimer && (
              <p className="text-sm italic text-text-muted">
                {dict.translationDisclaimer}
              </p>
            )}
          </div>
        </section>
      ) : (
        <>
          <section className="px-6 py-16">
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-ssj-ink sm:text-xl">
              {chronicle.intro[locale]}
            </p>
          </section>

          {chronicle.featured && (
            <HighlightSection
              highlight={chronicle.featured}
              locale={locale}
              label={dict.featuredLabel}
              tinted
            />
          )}

          {chronicle.secondary && (
            <HighlightSection
              highlight={chronicle.secondary}
              locale={locale}
              reverse
              dark
            />
          )}

          <section className="px-6 py-20">
            <div className="mx-auto flex max-w-3xl flex-col gap-8">
              <Reveal>
                <SectionLabel>{dict.fullChronicleLabel}</SectionLabel>
              </Reveal>
              <div className="flex flex-col gap-6">
                {bodyParagraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className={
                      index === 0
                        ? "drop-cap text-lg leading-relaxed text-ssj-black sm:text-xl"
                        : "text-lg leading-relaxed text-ssj-black sm:text-xl"
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              {dict.translationDisclaimer && (
                <p className="text-sm italic text-text-muted">
                  {dict.translationDisclaimer}
                </p>
              )}
            </div>
          </section>
        </>
      )}

      <Gallery images={chronicle.gallery} locale={locale} />

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

      <MissionQuote locale={locale} />
    </>
  );
}
