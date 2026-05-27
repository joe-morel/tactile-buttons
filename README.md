# Tactile Buttons

Tactile button variants for [shadcn/ui](https://ui.shadcn.com). Copy them into your existing `button.tsx` — subtle shadows, classic styling, and press interactions.

**Open Source. Copy-paste friendly.**

**English** · [Español](./README.es.md)

## Documentation

Run the demo locally to preview variants, installation, and full source:

```bash
git clone https://github.com/joe-morel/tactile-buttons.git
cd tactile-buttons
npm install
npm run dev
```

## Variants

| Variant | Description |
| --- | --- |
| `classic` | Blue primary with soft inset highlight and light press |
| `tactile` | 3D stack shadow with a deeper click interaction |
| `dark` | High-contrast dark CTA |
| `soft` | Light bordered secondary action |

Standard shadcn variants (`default`, `outline`, `secondary`, `ghost`, `destructive`, `link`) ship with the full component in this repo.

## Installation

### With shadcn/ui

```bash
npx shadcn@latest add button
```

Add the `classic`, `tactile`, `dark`, and `soft` entries to `variants.variant` in `button.tsx`. See [`src/components/ui/button.tsx`](./src/components/ui/button.tsx).

### Manual

```bash
npm install class-variance-authority clsx tailwind-merge radix-ui
```

Copy `src/components/ui/button.tsx` and `src/lib/utils.ts`, then match imports to your project (`@/`, `radix-ui` vs `@radix-ui/react-slot`).

## Usage

```tsx
import { Button } from "@/components/ui/button"

<Button variant="tactile">Click me</Button>
```

## Development

```bash
npm run dev
npm run build
npm run lint
```

## Acknowledgments

Not affiliated with Vercel or shadcn/ui. Built on the [shadcn/ui](https://ui.shadcn.com) Button pattern. Thanks to [@shadcn](https://github.com/shadcn).

## Author

**Joe Morel** — [@joe-morel](https://github.com/joe-morel) · [@joe_morel](https://x.com/joe_morel) · [@joe.morel](https://www.threads.com/@joe.morel)

## License

MIT
