import Image from "next/image";
import type { ChronicleImage } from "@/content/types";
import type { Locale } from "@/lib/i18n";

export function Gallery({
  images,
  locale,
}: {
  images: ChronicleImage[];
  locale: Locale;
}) {
  if (images.length === 0) return null;

  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-3">
        {images.map((image) => (
          <div
            key={image.src}
            className="relative aspect-square overflow-hidden rounded-md"
          >
            <Image
              src={image.src}
              alt={image.alt[locale]}
              fill
              sizes="(min-width: 640px) 33vw, 100vw"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
