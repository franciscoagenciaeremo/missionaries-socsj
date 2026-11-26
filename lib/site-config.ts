import { missionariesHouseConfig } from "@/content/casas/missionaries.config";
import { getAllChroniclesForIndex, getChronicleBySlug } from "@/content/cronicas/missionaries";

/** Punto único donde este proyecto queda "atado" a missionaries.socsj.org. */
export const houseConfig = missionariesHouseConfig;
export const chronicles = getAllChroniclesForIndex();
export const findChronicle = getChronicleBySlug;
