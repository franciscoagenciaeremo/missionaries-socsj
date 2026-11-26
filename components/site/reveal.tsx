"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

// Reveal sutil al entrar en pantalla (fade-up corto). Usar con criterio
// en titulos/secciones puntuales, no en todos los elementos de la pagina
// -- la idea es acompanar la lectura, no que parezca una demo de animaciones.
export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
