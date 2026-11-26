"use client";

import { useEffect } from "react";

/** Sincroniza <html lang="..."> con el locale de la ruta actual. */
export function SetHtmlLang({ locale }: { locale: string }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return null;
}
