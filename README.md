# Missionary Chronicles · Saint John Society (missionaries.socsj.org)

Crónica familiar mensual de los misioneros americanos de la Sociedad San Juan,
para sus familias en Estados Unidos. Principalmente fotos de las distintas
casas misioneras. Todo en inglés.

Copia del template de `scotland-socsj-org` (que a su vez copia `chile-socsj`):
mismo código de componentes y páginas, con dos diferencias:

- Solo inglés: `locales = ["en"]`, sin toggle de idioma ni ruta `/suscribirse`.
- `LocalizedText` tiene un solo campo (`en`), y `featured`/`secondary` son
  opcionales (las crónicas de este sitio son texto corto + fotos).

Lo propio de este sitio vive en `content/casas/missionaries.config.ts` y
`content/cronicas/missionaries/`.

Stack: Next.js (App Router) + TypeScript + Tailwind CSS v4 + componentes
estilo shadcn/ui + Framer Motion. Deploy en Netlify en cada push a `main`.

## Correr en local

```bash
npm install
npm run dev
```

`http://localhost:3000` redirige a `/en`.

## Cómo agregar una crónica

1. Crear `content/cronicas/missionaries/YYYY-MM.ts` con la forma del tipo
   `Chronicle` (`content/types.ts`). Para fotos por casa: un bloque
   `heading` con el nombre de la casa y uno o más `imagePair` en
   `contentBlocks`.
2. Importarla en `content/cronicas/missionaries/index.ts` y sumarla al
   principio de `missionariesChronicles`.
3. Fotos en `public/photos/`, a 1600 px de lado mayor.
4. Nunca se publica con texto de relleno ni sin fotos: `published: false`
   hasta tener todo.

## Pendientes antes de publicar

- Fotos de la crónica de noviembre 2026 (Thanksgiving).
- Sitio en Netlify y DNS de `missionaries.socsj.org`.
- Propiedad GA4 propia: cargar el ID en `ga4MeasurementId`. Vacío = no se
  carga Analytics.
- `NEXT_PUBLIC_SUBSCRIBE_ENDPOINT` en Netlify (ver `.env.example`). El form
  manda `casa: "missionaries"`. El mail sale por Mailchimp (cuenta de USA).
- `public/og-default.jpg` y `public/photos/cierre-mision.jpg` vienen de
  Escocia: confirmar si se reemplazan por fotos de misioneros.
