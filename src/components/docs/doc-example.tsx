import type { ReactNode } from "react"

import { CodeBlock } from "@/components/docs/code-block"
import type { DocCodeLanguage } from "@/lib/shiki"
import { cn } from "@/lib/utils"

export function DocExample({
  preview,
  code,
  language = "tsx",
  previewClassName,
  codeMaxHeight = "max-h-64",
}: {
  preview: ReactNode
  code: string
  language?: DocCodeLanguage
  previewClassName?: string
  codeMaxHeight?: string
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xs">
      <div
        className={cn(
          "flex min-h-[120px] flex-wrap items-center justify-center gap-3 border-b border-border bg-background p-6",
          previewClassName,
        )}
      >
        {preview}
      </div>

      <CodeBlock
        code={code}
        language={language}
        maxHeight={codeMaxHeight}
        className="rounded-none border-0 border-t border-border bg-muted/40"
      />
    </div>
  )
}
