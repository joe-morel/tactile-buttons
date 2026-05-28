import * as React from "react"
import { Terminal } from "lucide-react"

import { CopyButton } from "@/components/docs/copy-button"
import { cn } from "@/lib/utils"

const packageManagers = ["npm", "pnpm", "yarn", "bun"] as const

type PackageManager = (typeof packageManagers)[number]

export function CommandBlock({
  commands,
}: {
  commands: Record<PackageManager, string>
}) {
  const [pm, setPm] = React.useState<PackageManager>("npm")
  const code = commands[pm]

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-muted/40">
      <div className="flex items-center justify-between gap-2 border-b border-border/80 px-2 py-1.5">
        <div className="flex min-w-0 flex-1 items-center gap-1">
          <span className="flex size-8 shrink-0 items-center justify-center text-muted-foreground">
            <Terminal className="size-4" aria-hidden="true" />
          </span>
          <div className="flex flex-wrap gap-0.5">
            {packageManagers.map((manager) => (
              <button
                key={manager}
                type="button"
                onClick={() => setPm(manager)}
                className={cn(
                  "rounded-md px-2.5 py-1 text-sm font-medium transition-colors",
                  pm === manager
                    ? "bg-background text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {manager}
              </button>
            ))}
          </div>
        </div>
        <CopyButton text={code} variant="code" className="shrink-0" />
      </div>

      <div className="overflow-x-auto px-4 py-3.5">
        <code className="break-all font-mono text-sm text-foreground">{code}</code>
      </div>
    </div>
  )
}
