"use client";

import { motion, useScroll, useSpring } from "framer-motion";

// Barra de progreso de lectura, sutil, fija arriba de todo.
// Pensada para las cronicas (contenido largo tipo long-form),
// no es un efecto decorativo generico: le da al lector una nocion
// de "cuanto falta" mientras scrollea la historia.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-ssj-gold"
      style={{ scaleX }}
    />
  );
}
