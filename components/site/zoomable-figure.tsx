"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

/**
 * Foto intercalada en el cuerpo de una crónica, con bajada chica.
 * Al hacer clic se abre ampliada en un overlay; se cierra con clic,
 * con la X o con Escape.
 */
export function ZoomableFigure({
  src,
  alt,
  caption,
  closeLabel,
  objectPosition,
  inline = false,
  offsetLines,
}: {
  src: string;
  alt: string;
  caption: string;
  closeLabel: string;
  objectPosition?: string;
  /** true: sin float, ocupa el ancho de su celda (para fotos en fila). */
  inline?: boolean;
  /** Baja la foto flotante N renglones (solo desde sm). */
  offsetLines?: number;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <figure
      className={
        inline
          ? "flex flex-col gap-2"
          : "mb-6 flex flex-col gap-2 sm:float-right sm:mb-4 sm:ml-6 sm:mt-[var(--fig-offset,0px)] sm:w-56 sm:clear-right md:w-64"
      }
      style={
        offsetLines
          ? ({ "--fig-offset": `${offsetLines * 1.75}rem` } as CSSProperties)
          : undefined
      }
    >
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ssj-ink"
        aria-label={alt}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={
            inline
              ? "(min-width: 768px) 384px, (min-width: 640px) 50vw, 100vw"
              : "(min-width: 768px) 256px, (min-width: 640px) 224px, 100vw"
          }
          className="object-cover transition-transform duration-300 hover:scale-105"
          style={objectPosition ? { objectPosition } : undefined}
        />
      </button>
      {caption && (
        <figcaption className="text-sm text-text-muted">{caption}</figcaption>
      )}

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex cursor-zoom-out flex-col items-center justify-center gap-3 bg-black/85 p-4 sm:p-10"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={closeLabel}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl leading-none text-white hover:bg-white/20"
          >
            &times;
          </button>
          <div className="relative h-full max-h-[80vh] w-full max-w-5xl">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          {caption && (
            <p className="text-center text-sm text-white/80">{caption}</p>
          )}
        </div>
      )}
    </figure>
  );
}
