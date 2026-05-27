import * as React from "react"

import { CodeBlock } from "@/components/docs/code-block"
import { CommandBlock } from "@/components/docs/command-block"
import { DocExample } from "@/components/docs/doc-example"
import { DocSection, DocSubsection } from "@/components/docs/doc-section"
import { GitHubStarCard } from "@/components/docs/github-star-card"
import { ShadcnCreditCard } from "@/components/docs/shadcn-credit-card"
import { OnThisPage } from "@/components/docs/on-this-page"
import { GitHubIcon, ThreadsIcon, XIcon } from "@/components/icons/social-icons"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import componentCode from "@/components/ui/button.tsx?raw"

const usageCode = `import { Button } from "@/components/ui/button"

<Button variant="tactile">Click me</Button>`

const BUTTON_REGISTRY_URL =
  "https://raw.githubusercontent.com/joe-morel/tactile-buttons/main/public/r/button.json"

const shadcnCommands = {
  pnpm: `pnpm dlx shadcn@latest add ${BUTTON_REGISTRY_URL}`,
  npm: `npx shadcn@latest add ${BUTTON_REGISTRY_URL}`,
  yarn: `yarn dlx shadcn@latest add ${BUTTON_REGISTRY_URL}`,
  bun: `bunx shadcn@latest add ${BUTTON_REGISTRY_URL}`,
} as const

const manualCommands = {
  pnpm:
    "pnpm add class-variance-authority clsx tailwind-merge @radix-ui/react-slot",
  npm: "npm install class-variance-authority clsx tailwind-merge @radix-ui/react-slot",
  yarn: "yarn add class-variance-authority clsx tailwind-merge @radix-ui/react-slot",
  bun: "bun add class-variance-authority clsx tailwind-merge @radix-ui/react-slot",
} as const

const cursorCode = `@layer base {
  button:not(:disabled),
  [role="button"]:not(:disabled) {
    cursor: pointer;
  }
}`

type TactileVariant = "classic" | "tactile" | "dark" | "soft"

const tactileExamples: {
  id: string
  variant: TactileVariant
  title: string
  description: string
  label: string
  code: string
}[] = [
  {
    id: "classic",
    variant: "classic",
    title: "Classic",
    description:
      "Clean primary button with subtle inset light and soft press feedback.",
    label: "Classic",
    code: `<Button variant="classic">Classic</Button>`,
  },
  {
    id: "tactile",
    variant: "tactile",
    title: "Tactile",
    description:
      "Signature variant with a deeper 3D stack shadow and press interaction.",
    label: "Tactile",
    code: `<Button variant="tactile">Tactile</Button>`,
  },
  {
    id: "dark",
    variant: "dark",
    title: "Dark",
    description: "High-contrast CTA for strong actions and minimal layouts.",
    label: "Dark",
    code: `<Button variant="dark">Dark</Button>`,
  },
  {
    id: "soft",
    variant: "soft",
    title: "Soft",
    description:
      "Light bordered option for secondary actions and quieter surfaces.",
    label: "Soft",
    code: `<Button variant="soft">Soft</Button>`,
  },
]

function InstallTabs() {
  const [tab, setTab] = React.useState<"shadcn" | "manual">("shadcn")

  return (
    <div className="space-y-4">
      <div className="inline-flex rounded-lg border border-border bg-muted p-1">
        <button
          type="button"
          onClick={() => setTab("shadcn")}
          className={cn(
            "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
            tab === "shadcn"
              ? "bg-background text-foreground shadow-xs"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          With shadcn/ui
        </button>
        <button
          type="button"
          onClick={() => setTab("manual")}
          className={cn(
            "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
            tab === "manual"
              ? "bg-background text-foreground shadow-xs"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          Manual
        </button>
      </div>

      {tab === "shadcn" ? (
        <CommandBlock commands={shadcnCommands} />
      ) : (
        <CommandBlock commands={manualCommands} />
      )}

      <p className="text-sm text-muted-foreground">
        {tab === "shadcn"
          ? "Requires shadcn init and @/lib/utils. Replaces components/ui/button.tsx with the full tactile Button (standard + classic, tactile, dark, soft variants). Back up custom changes first."
          : "Copy button.tsx and lib/utils.ts from this repository."}
      </p>
    </div>
  )
}

function ApiTable() {
  const rows = [
    {
      prop: "variant",
      type: '"default" | "outline" | "secondary" | "ghost" | "destructive" | "link" | "classic" | "tactile" | "dark" | "soft"',
      default: '"default"',
    },
    {
      prop: "size",
      type: '"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"',
      default: '"default"',
    },
    {
      prop: "asChild",
      type: "boolean",
      default: "false",
    },
  ]

  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full min-w-[520px] text-left text-sm">
        <thead className="border-b border-border bg-muted/50">
          <tr>
            <th className="px-4 py-3 font-medium text-foreground">Prop</th>
            <th className="px-4 py-3 font-medium text-foreground">Type</th>
            <th className="px-4 py-3 font-medium text-foreground">Default</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((row) => (
            <tr key={row.prop}>
              <td className="px-4 py-3 font-mono text-[13px] text-foreground">
                {row.prop}
              </td>
              <td className="px-4 py-3 font-mono text-[13px] text-muted-foreground">
                {row.type}
              </td>
              <td className="px-4 py-3 font-mono text-[13px] text-muted-foreground">
                {row.default}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function FullSourceBlock() {
  return (
    <CodeBlock
      code={componentCode}
      language="tsx"
      maxHeight="max-h-[480px]"
    />
  )
}

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/joe-morel",
    icon: GitHubIcon,
  },
  {
    label: "X",
    href: "https://x.com/joe_morel",
    icon: XIcon,
  },
  {
    label: "Threads",
    href: "https://www.threads.com/@joe.morel",
    icon: ThreadsIcon,
  },
] as const

function DocsFooter() {
  return (
    <footer className="border-t border-border pt-8">
      <div className="flex flex-col items-center gap-3 text-center text-sm text-muted-foreground">
        <p>
          Created by{" "}
          <span className="font-medium text-foreground">Joe Morel</span>
        </p>
        <nav
          className="flex items-center justify-center gap-2"
          aria-label="Social links"
        >
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Icon className="size-4" />
              </a>
            )
          })}
        </nav>
      </div>
    </footer>
  )
}

export default function ButtonDocsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold tracking-tight">Tactile Buttons</span>
            <span className="text-muted-foreground">/</span>
            <span className="text-muted-foreground">Button</span>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-10 xl:grid-cols-[minmax(0,1fr)_200px]">
        <main className="min-w-0 max-w-3xl space-y-10">
          <div className="space-y-3">
            <p className="text-sm font-medium text-muted-foreground">
              Components
            </p>
            <h1 className="text-3xl font-bold tracking-tight">Button</h1>
            <p className="text-base leading-7 text-muted-foreground">
              Tactile button variants for shadcn/ui — subtle shadows, classic
              styling, and press interactions. Copy the variants into your
              existing{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">
                button.tsx
              </code>
              .
            </p>
          </div>

          <section id="preview" className="scroll-mt-20 space-y-4">
            <DocExample
              preview={
                <>
                  <Button variant="classic">Classic</Button>
                  <Button variant="tactile">Tactile</Button>
                  <Button variant="dark">Dark</Button>
                  <Button variant="soft">Soft</Button>
                </>
              }
              code={`<Button variant="classic">Classic</Button>
<Button variant="tactile">Tactile</Button>
<Button variant="dark">Dark</Button>
<Button variant="soft">Soft</Button>`}
              codeMaxHeight="max-h-40"
            />
          </section>

          <DocSection
            id="installation"
            title="Installation"
            description="Use shadcn/ui if you already have it. Otherwise install the dependencies and copy the component."
          >
            <InstallTabs />
          </DocSection>

          <DocSection
            id="usage"
            title="Usage"
            description="Import the button and pick a tactile variant."
          >
            <DocExample
              preview={<Button variant="tactile">Click me</Button>}
              code={usageCode}
              language="tsx"
              codeMaxHeight="max-h-40"
            />
          </DocSection>

          <DocSection
            id="cursor"
            title="Cursor"
            description="Tailwind v4 may use cursor: default on buttons. Add this to your CSS if you want pointer on hover."
          >
            <div className="rounded-lg border border-border bg-muted/30 px-4 py-3 text-sm text-muted-foreground">
              See{" "}
              <a
                href="https://ui.shadcn.com/docs/components/radix/button#cursor"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                shadcn Button docs
              </a>{" "}
              for details.
            </div>
            <DocExample
              preview={
                <Button variant="classic" className="cursor-pointer">
                  Hover me
                </Button>
              }
              code={cursorCode}
              language="css"
              codeMaxHeight="max-h-48"
            />
          </DocSection>

          <DocSection
            id="examples"
            title="Examples"
            description="Tactile variants work with the same size prop as shadcn/ui."
          >
            <div className="space-y-10">
              {tactileExamples.map((item) => (
                <DocSubsection
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                >
                  <DocExample
                    preview={
                      <Button variant={item.variant}>{item.label}</Button>
                    }
                    code={item.code}
                    codeMaxHeight="max-h-24"
                  />
                </DocSubsection>
              ))}

              <DocSubsection
                id="size"
                title="Size"
                description="Use the size prop to change the button dimensions."
              >
                <DocExample
                  preview={
                    <>
                      <Button variant="tactile" size="sm">
                        Small
                      </Button>
                      <Button variant="tactile">Default</Button>
                      <Button variant="tactile" size="lg">
                        Large
                      </Button>
                    </>
                  }
                  code={`<Button variant="tactile" size="sm">Small</Button>
<Button variant="tactile">Default</Button>
<Button variant="tactile" size="lg">Large</Button>`}
                  codeMaxHeight="max-h-32"
                />
              </DocSubsection>
            </div>
          </DocSection>

          <DocSection
            id="source"
            title="Full source"
            description="Complete button component from this repository."
          >
            <FullSourceBlock />
          </DocSection>

          <DocSection
            id="api"
            title="API Reference"
            description="Extends the shadcn/ui Button API with tactile variants."
            className="border-b-0 pb-8"
          >
            <ApiTable />
          </DocSection>

          <DocsFooter />
        </main>

        <aside className="sticky top-10 flex h-fit flex-col gap-6">
          <OnThisPage />
          <GitHubStarCard />
          <ShadcnCreditCard />
        </aside>
      </div>
    </div>
  )
}
