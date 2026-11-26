/** Modelo de datos genérico para una crónica, reusable por cualquier casa. */

/** Este sitio es solo en inglés: un único campo por texto. */
export type LocalizedText = { en: string };

export type ChronicleImage = {
  src: string;
  alt: LocalizedText;
  /** Encuadre de la miniatura recortada (CSS object-position), ej. "top" para que no se corte una cabeza. Opcional, por defecto centrado. */
  objectPosition?: string;
};

export type ChronicleHighlight = {
  title: LocalizedText;
  text: LocalizedText;
  image: ChronicleImage;
};

/**
 * Bloque de contenido para el cuerpo "de flujo libre" de una crónica:
 * títulos, párrafos y fotos intercaladas (con pie de foto y el nombre del
 * archivo), en el orden en que aparecen.
 */
export type ChronicleContentBlock =
  | { type: "heading"; text: LocalizedText }
  | { type: "paragraph"; text: LocalizedText }
  | {
      type: "image";
      image: ChronicleImage;
      caption: LocalizedText;
      /** Nombre del archivo tal como llegó (se muestra en la bajada sin la extensión). */
      filename: LocalizedText;
      /** Opcional: baja la foto N renglones respecto del inicio del párrafo que acompaña (solo en pantallas anchas). */
      offsetLines?: number;
    }
  | {
      /** Dos fotos lado a lado a todo el ancho del texto, como corte entre secciones. */
      type: "imagePair";
      images: { image: ChronicleImage; caption: LocalizedText }[];
    };

export type Chronicle = {
  slug: string;
  /** "YYYY-MM" */
  period: string;
  title: LocalizedText;
  /** Frase debajo del título en el hero. Opcional. */
  quote?: LocalizedText;
  /** Cita de la fuente de la frase del hero, opcional, se muestra debajo de la frase. */
  quoteCitation?: LocalizedText;
  intro: LocalizedText;
  /** Foto de portada. Opcional: sin foto, el hero y la tarjeta van sobre fondo azul de marca. */
  heroImage?: ChronicleImage;
  /** Foto de la tarjeta en el índice y al compartir el link. Opcional: si falta, se usa heroImage. */
  cardImage?: ChronicleImage;
  /** Sección "lo más destacado" — foto grande + texto. */
  featured?: ChronicleHighlight;
  /** Bloque secundario, alternado (texto izq / foto der). */
  secondary?: ChronicleHighlight;
  /** Cuerpo largo de la crónica, un string por párrafo. */
  body: { en: string[] };
  /** Grilla de fotos al final de la crónica (en este sitio es lo principal). */
  gallery: ChronicleImage[];
  /**
   * Cuerpo "de flujo libre" opcional: si está presente, la página de la
   * crónica lo usa en vez de intro/featured/secondary/body.
   */
  contentBlocks?: ChronicleContentBlock[];
  /** true = ya publicada; false = tarjeta "próximamente" en el índice. */
  published: boolean;
};
