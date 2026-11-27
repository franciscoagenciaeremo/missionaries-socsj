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
  // Carta de Christopher James y luego una sección por casa (título, texto
  // de la casa tal como llegó, par de fotos). Roma no va en
  // esta crónica (pedido de Catalina, 27/11/2026).
  contentBlocks: [
    {
      type: "paragraph",
      text: {
        en: "Happy Thanksgiving or as some would say \"Happy Turkey Day\" to all of our family back in the states! It's a joy to send our first monthly chronicle to all of you as we are all **scattered about the globe as seed is sown by the Sower!** Some of us are in the UK, some in Europe, some in South America and for now on the East Coast!",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "We wanted to show a bit more of the fun and \"hidden\" or common life that we are experiencing so you can get a \"wee\" taste as they would say in Scotland. So look forward to next months edition. **Thank you for your prayers, love and support** as we seek to do the will of God as missionaries in the Saint John Society!",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "But for now enjoy seeing how we all are keeping our American tradition alive with turkey, stuffing and gravy... **And lots of it!**",
      },
    },
    { type: "paragraph", text: { en: "In Christ," } },
    { type: "paragraph", text: { en: "Christopher James" } },
    { type: "heading", text: { en: "Stirling, Scotland" } },
    {
      type: "paragraph",
      text: {
        en: "We celebrated thanksgiving **to the annoyance of the Brits**, with the Volunteer missionaries and students! Fr. Ivan, Fr. Federico, Fr. Hermogenes, Christopher and John.",
      },
    },
    {
      type: "imagePair",
      images: [
        {
          image: { src: "/photos/2026-11-stirling-2.jpg", alt: { en: "Thanksgiving dinner in Stirling with the Volunteer missionaries and students" } },
          caption: { en: "" },
        },
        {
          image: { src: "/photos/2026-11-stirling-1.jpg", alt: { en: "The Thanksgiving table in Stirling" } },
          caption: { en: "" },
        },
      ],
    },
    { type: "heading", text: { en: "Serrezuela, Argentina" } },
    {
      type: "paragraph",
      text: {
        en: "Beyond the experience! A benefactor hosted us to celebrate Thanksgiving. With prior instructions and help from Joseph, the results exceeded expectations. At the table, **we took turns sharing what we were grateful to God for this year.**",
      },
    },
    {
      type: "imagePair",
      images: [
        {
          image: { src: "/photos/2026-11-serrezuela-1.jpg", alt: { en: "The missionaries in Serrezuela with the Thanksgiving turkey" } },
          caption: { en: "" },
        },
        {
          image: { src: "/photos/2026-11-serrezuela-2.jpg", alt: { en: "Thanksgiving dinner in Serrezuela" } },
          caption: { en: "" },
        },
      ],
    },
    { type: "paragraph", text: { en: "Best regards." } },
    { type: "paragraph", text: { en: "Fr. Juan Ignacio" } },
    { type: "heading", text: { en: "Washington, DC" } },
    {
      type: "imagePair",
      images: [
        {
          image: { src: "/photos/2026-11-washington-1.jpg", alt: { en: "The Thanksgiving turkey in Washington, DC" }, objectPosition: "top" },
          caption: { en: "" },
        },
        {
          image: { src: "/photos/2026-11-washington-2.jpg", alt: { en: "Thanksgiving dinner in Washington, DC" } },
          caption: { en: "" },
        },
      ],
    },
    {
      type: "imagePair",
      images: [
        {
          image: { src: "/photos/2026-11-washington-3.jpg", alt: { en: "Thanksgiving dinner in Washington, DC" } },
          caption: { en: "" },
        },
        {
          image: { src: "/photos/2026-11-washington-4.jpg", alt: { en: "Thanksgiving dinner in Washington, DC" } },
          caption: { en: "" },
        },
      ],
    },
    { type: "heading", text: { en: "Pilar, Argentina" } },
    {
      type: "paragraph",
      text: {
        en: "Greetings from the philosophers in Buenos Aires! It was an international thanksgiving with 3 argentinians, 2 uruguayans, 1 italian, and **the sole american in charge of cooking.**",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "It was also a momento to celebrate because as we are in the midst of finals season, we had just taken our Ethics final, which was an oral exam and lasted 3 hours in total, but it went well for all 5 of us!",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "It was an Argentinian-American Thanksgiving: due to the lack of turkeys in Argentina we had milanesa + the american classics: mashed potatoes, creamed corn, glazed carrots, cranberry sauce, and a homemade stuffing and for dessert pumpkin pie! We took part in the tradition of going around the table and sharing one thing we are thankful for. It was a great moment to spend time together and share about God's blessing in this past year",
      },
    },
    {
      type: "imagePair",
      images: [
        {
          image: { src: "/photos/2026-11-pilar-1.jpg", alt: { en: "The philosophers in Buenos Aires at the Thanksgiving table" } },
          caption: { en: "" },
        },
      ],
    },
    { type: "paragraph", text: { en: "An Argentinian greeting to all," } },
    { type: "paragraph", text: { en: "Reed" } },
  ],
  gallery: [],
  published: true,
};
