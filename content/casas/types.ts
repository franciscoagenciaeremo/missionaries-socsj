/** Tipos genéricos de la config de una "casa" de la Sociedad San Juan. */

export type LocalePalette = {
  blue: string;
  navyDeep: string;
  navyPanel: string;
  blueMid: string;
  blueAccent: string;
  ink: string;
  gold: string;
  goldSoft: string;
  black: string;
  white: string;
  paper: string;
  celeste: string;
  blueLight: string;
  line: string;
  textMuted: string;
};

export const ssjDefaultPalette: LocalePalette = {
  blue: "#002856",
  navyDeep: "#051a3d",
  navyPanel: "#142f5a",
  blueMid: "#2e4e83",
  blueAccent: "#386ea1",
  ink: "#2a364a",
  gold: "#b57422",
  goldSoft: "#ac8760",
  black: "#000000",
  white: "#ffffff",
  paper: "#f5f6f8",
  celeste: "#eef7ff",
  blueLight: "#68a2b9",
  line: "#d6dcec",
  textMuted: "#55607a",
};

export type HouseConfig = {
  /** Slug único del sitio, usado internamente (no visible en URL). Va como "casa" en el form de suscripción. */
  houseSlug: string;
  /** Nombre público, tal como aparece en header/footer. */
  houseName: { en: string };
  /** Texto corto de ubicación. */
  location: { en: string };
  /** Subdominio de producción. */
  domain: string;
  /** Responsable a cargo, si se quiere mostrar. */
  priestName?: string;
  /** Paleta de marca. Por default la paleta institucional de SSJ. */
  palette: LocalePalette;
  /** ID de medición de GA4 (G-XXXX). Vacío = el sitio no carga Analytics. */
  ga4MeasurementId: string;
  /** Logo (paths dentro de /public). */
  logo: {
    en: string;
    enWhite: string;
  };
};
