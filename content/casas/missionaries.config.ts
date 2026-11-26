import { ssjDefaultPalette, type HouseConfig } from "./types";

/**
 * Config de missionaries.socsj.org: crónica familiar de los misioneros
 * americanos de la Sociedad San Juan, para sus familias en Estados Unidos.
 * Único lugar donde se hardcodean datos propios de este sitio.
 *
 * Pendientes antes de publicar (ver README):
 * - ga4MeasurementId: vacío hasta crear la propiedad GA4 propia.
 */
export const missionariesHouseConfig: HouseConfig = {
  houseSlug: "missionaries",
  houseName: {
    en: "Missionary Chronicles",
  },
  location: {
    en: "Saint John Society missions",
  },
  domain: "missionaries.socsj.org",
  palette: ssjDefaultPalette,
  // Oculto por pedido de Catalina (26/11/2026) hasta definir la suscripción.
  subscriptionsEnabled: false,
  ga4MeasurementId: "",
  logo: {
    en: "/logos/CruzENG_Azul.svg",
    enWhite: "/logos/CruzENG_Blanco.svg",
  },
};
