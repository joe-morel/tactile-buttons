import * as React from "react"
import { Check, Copy } from "lucide-react"

import { cn } from "@/lib/utils"

export function CopyButton({
  text,
  className,
  variant = "default",
}: {
  text: string
  className?: string
  variant?: "default" | "code"
}) {
  const [copied, setCopied] = React.useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1400)
    } catch {
      setCopied(false)
    }
  }

  if (variant === "code") {
    return (
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? "Copied" : "Copy code"}
        className={cn(
          "inline-flex size-8 items-center justify-center rounded-md border border-transparent bg-background/90 text-muted-foreground shadow-sm ring-1 ring-border/50 transition-colors hover:border-border hover:bg-muted hover:text-foreground",
          className,
        )}
      >
        {copied ? (
          <Check className="size-4 text-foreground" />
        ) : (
          <Copy className="size-4" />
        )}
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-background px-2.5 text-xs font-medium text-muted-foreground shadow-xs transition-colors hover:bg-muted hover:text-foreground",
        className,
      )}
    >
      {copied ? <Check className="size-3.5 text-emerald-600" /> : <Copy className="size-3.5" />}
      {copied ? "Copied" : "Copy"}
    </button>
  )
}
