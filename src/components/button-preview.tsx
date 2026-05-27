import * as React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import componentCode from "@/components/ui/button.tsx?raw"

const usageCode = `<Button variant="classic">Classic</Button>
<Button variant="tactile">Tactile</Button>
<Button variant="dark">Dark</Button>
<Button variant="soft">Soft</Button>`

const smokeTestCode = `// Smoke test cases
<Button variant="classic" size="sm">Classic SM</Button>
<Button variant="classic">Classic Default</Button>
<Button variant="classic" size="lg">Classic LG</Button>

<Button variant="tactile" size="sm">Tactile SM</Button>
<Button variant="tactile">Tactile Default</Button>
<Button variant="tactile" size="lg">Tactile LG</Button>

<Button variant="dark">Dark</Button>
<Button variant="soft">Soft</Button>`

type TactileVariant = "classic" | "tactile" | "dark" | "soft"

const examples: {
  variant: TactileVariant
  title: string
  description: string
  label: string
  dotClass: string
}[] = [
  {
    variant: "classic",
    title: "classic",
    description:
      "Clean primary button with subtle inset light and soft press feedback.",
    label: "Classic",
    dotClass: "bg-blue-600",
  },
  {
    variant: "tactile",
    title: "tactile",
    description: "The signature variant with a deeper 3D click interaction.",
    label: "Tactile",
    dotClass: "bg-blue-700 shadow-[0_2px_0_rgba(30,64,175,0.95)]",
  },
  {
    variant: "dark",
    title: "dark",
    description:
      "Theme-primary dark version for strong CTAs and minimal interfaces.",
    label: "Dark",
    dotClass: "bg-slate-900",
  },
  {
    variant: "soft",
    title: "soft",
    description:
      "Light bordered option for secondary actions and quieter layouts.",
    label: "Soft",
    dotClass: "bg-white ring-1 ring-slate-200",
  },
]

function CopyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function CodeBlock({
  title,
  description,
  code,
  maxHeight = "max-h-[520px]",
}: {
  title: string
  description?: string
  code: string
  maxHeight?: string
}) {
  const [copied, setCopied] = React.useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1400)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-4 py-3">
        <div className="min-w-0">
          <h2 className="truncate text-sm font-medium text-slate-950">
            {title}
          </h2>
          {description ? (
            <p className="mt-0.5 truncate text-xs text-slate-500">
              {description}
            </p>
          ) : null}
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2.5 text-xs font-medium text-slate-600 shadow-sm transition-colors hover:bg-slate-50 hover:text-slate-950 active:translate-y-px"
        >
          {copied ? (
            <CheckIcon className="size-3.5" />
          ) : (
            <CopyIcon className="size-3.5" />
          )}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <div className="relative bg-slate-950">
        <pre
          className={cn(
            "overflow-x-auto overflow-y-auto p-4 text-sm leading-6 text-slate-100",
            maxHeight,
          )}
        >
          <code>{code}</code>
        </pre>
      </div>
    </section>
  )
}

function VariantCard({
  item,
}: {
  item: (typeof examples)[number]
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-base font-semibold tracking-[-0.03em] text-slate-950">
            {item.title}
          </h2>
          <p className="mt-1 text-sm leading-5 text-slate-500">
            {item.description}
          </p>
        </div>
        <div className={cn("mt-1 h-3 w-3 rounded-full", item.dotClass)} />
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
          <span className="text-sm text-slate-500">Default</span>
          <Button variant={item.variant}>{item.label}</Button>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
          <span className="text-sm text-slate-500">Small</span>
          <Button variant={item.variant} size="sm">
            Small
          </Button>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
          <span className="text-sm text-slate-500">Large</span>
          <Button variant={item.variant} size="lg">
            Large
          </Button>
        </div>
      </div>
    </section>
  )
}

export default function ButtonPreview() {
  return (
    <div className="min-h-screen bg-[#f6f8fb] p-8 text-slate-950">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-blue-600">
              Open Source Button Component
            </p>
            <h1 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">
              Tactile Buttons
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-600">
              Clean shadcn-style button variants with subtle shadows, classic
              styling, and tactile press interactions.
            </p>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600 shadow-sm">
            <span className="text-slate-400">by</span>
            <span className="font-medium text-slate-950">Joe Morel</span>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {examples.map((item) => (
            <VariantCard key={item.variant} item={item} />
          ))}
        </div>

        <CodeBlock
          title="src/components/ui/button.tsx"
          description="Copy and paste this over your shadcn/ui button component."
          code={componentCode}
        />

        <CodeBlock
          title="Usage"
          description="Use the variants like any shadcn/ui button."
          code={usageCode}
          maxHeight="max-h-[260px]"
        />

        <CodeBlock
          title="Smoke test cases"
          description="Quick examples to verify all custom variants and sizes render correctly."
          code={smokeTestCode}
          maxHeight="max-h-[320px]"
        />

        <footer className="border-t border-slate-200 pt-6 text-sm text-slate-500">
          Created by{" "}
          <span className="font-medium text-slate-800">Joe Morel</span>. Tactile
          Buttons is free to copy, customize, and use in your own projects.
        </footer>
      </div>
    </div>
  )
}
