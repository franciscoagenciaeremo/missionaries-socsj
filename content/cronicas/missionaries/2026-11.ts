import type { Chronicle } from "@/content/types";

/**
 * Noviembre 2026 · Thanksgiving.
 * Texto: Christopher James, literal (no se corrige ni se reescribe).
 * Título e intro de la tarjeta: tomados del texto. Sin frase debajo del
 * título, por pedido de Catalina (26/11/2026).
 *
 * Se publica sin fotos por pedido de Catalina (26/11/2026): el hero y la
 * tarjeta van sobre fondo azul de marca. Cuando lleguen las fotos: hero en
 * heroImage, y las fotos por casa en contentBlocks (un heading por casa +
 * imagePair) o en gallery.
 */
export const chronicle202611: Chronicle = {
  slug: "2026-11-thanksgiving",
  period: "2026-11",
  title: {
    en: "Keeping our American tradition alive with turkey, stuffing and gravy... And lots of it!",
  },
  intro: {
    en: "Our first monthly chronicle for all of our family back in the states.",
  },
  body: { en: [] },
  contentBlocks: [
    {
      type: "paragraph",
      text: {
        en: "Happy Thanksgiving or as some would say \"Happy Turkey Day\" to all of our family back in the states! It's a joy to send our first monthly chronicle to all of you as we are all scattered about the globe as seed is sown by the Sower! Some of us are in the UK, some in Europe, some in South America and for now on the East Coast!",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "We wanted to show a bit more of the fun and \"hidden\" or common life that we are experiencing so you can get a \"wee\" taste as they would say in Scotland. So look forward to next months edition. Thank you for your prayers, love and support as we seek to do the will of God as missionaries in the Saint John Society!",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "But for now enjoy seeing how we all are keeping our American tradition alive with turkey, stuffing and gravy... And lots of it!",
      },
    },
    { type: "paragraph", text: { en: "In Christ," } },
    { type: "paragraph", text: { en: "Christopher James" } },
  ],
  gallery: [],
  published: true,
};
