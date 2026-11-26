import type { Chronicle } from "@/content/types";
import { chronicle202611 } from "./2026-11";

/**
 * Crónicas de los misioneros, de la más reciente a la más antigua.
 * Para agregar una: crear "YYYY-MM.ts" con la forma de
 * content/types.ts#Chronicle, importarla acá y sumarla al principio.
 * Nunca se publica con texto de relleno: si falta el texto real o las
 * fotos, queda con published: false.
 */
export const missionariesChronicles: Chronicle[] = [chronicle202611];

export function getPublishedChronicles(): Chronicle[] {
  return missionariesChronicles.filter((c) => c.published);
}

export function getAllChroniclesForIndex(): Chronicle[] {
  return missionariesChronicles;
}

export function getChronicleBySlug(slug: string): Chronicle | undefined {
  return missionariesChronicles.find((c) => c.slug === slug);
}
