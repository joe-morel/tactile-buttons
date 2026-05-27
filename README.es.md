# Tactile Buttons

Variantes de botón táctiles para [shadcn/ui](https://ui.shadcn.com). Cópialas en tu `button.tsx` — sombras sutiles, estilo clásico e interacción al presionar.

**Open Source. Listo para copiar y pegar.**

[English](./README.md) · **Español**

## Documentación

Ejecuta la demo en local para ver variantes, instalación y código completo:

```bash
git clone https://github.com/joe-morel/tactile-buttons.git
cd tactile-buttons
npm install
npm run dev
```

## Variantes

| Variante | Descripción |
| --- | --- |
| `classic` | Azul primario con brillo interior suave y press ligero |
| `tactile` | Sombra 3D apilada con click más profundo |
| `dark` | CTA oscuro de alto contraste |
| `soft` | Acción secundaria clara con borde |

Las variantes estándar de shadcn (`default`, `outline`, `secondary`, `ghost`, `destructive`, `link`) vienen en el componente completo de este repo.

## Instalación

### Con shadcn/ui

Requiere [shadcn init](https://ui.shadcn.com/docs/installation) antes. Un solo comando instala el `Button` táctil completo (reemplaza `components/ui/button.tsx`):

```bash
npx shadcn@latest add https://tactile-buttons.vercel.app/r/button.json
```

Si tu URL de Vercel o dominio propio es otro, usa `https://TU-DOMINIO/r/button.json` (misma ruta `/r/button.json`).

### Manual

```bash
npm install class-variance-authority clsx tailwind-merge radix-ui
```

Copia `src/components/ui/button.tsx` y `src/lib/utils.ts`, y ajusta los imports a tu proyecto (`@/`, `radix-ui` vs `@radix-ui/react-slot`).

## Uso

```tsx
import { Button } from "@/components/ui/button"

<Button variant="tactile">Click me</Button>
```

## Desarrollo

```bash
npm run dev
npm run build
npm run lint
```

## Agradecimientos

No está afiliado a Vercel ni a shadcn/ui. Construido sobre el patrón del Button de [shadcn/ui](https://ui.shadcn.com). Gracias a [@shadcn](https://github.com/shadcn).

## Autor

**Joe Morel** — [@joe-morel](https://github.com/joe-morel) · [@joe_morel](https://x.com/joe_morel) · [@joe.morel](https://www.threads.com/@joe.morel)

## Licencia

MIT
