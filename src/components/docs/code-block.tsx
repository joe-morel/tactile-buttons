import * as React from "react"

import { CopyButton } from "@/components/docs/copy-button"
import {
  getHighlighter,
  resolveLanguage,
  type DocCodeLanguage,
} from "@/lib/shiki"
import { cn } from "@/lib/utils"

function LineNumbers({
  count,
  className,
}: {
  count: number
  className?: string
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex flex-col border-r border-border/80 bg-muted/50 px-3 py-4 text-right font-mono text-[13px] leading-6 text-muted-foreground/60 select-none",
        className,
      )}
    >
      {Array.from({ length: count }, (_, index) => (
        <span key={index}>{index + 1}</span>
      ))}
    </div>
  )
}

export function CodeBlock({
  code,
  language = "tsx",
  title,
  description,
  maxHeight,
  showLineNumbers = true,
  className,
}: {
  code: string
  language?: DocCodeLanguage
  title?: string
  description?: string
  maxHeight?: string
  showLineNumbers?: boolean
  className?: string
}) {
  const [html, setHtml] = React.useState<string>("")
  const lang = resolveLanguage(language)
  const lineCount = code.split("\n").length
  const useLineNumbers = showLineNumbers && lineCount > 1

  React.useEffect(() => {
    let active = true

    getHighlighter()
      .then((highlighter) =>
        highlighter.codeToHtml(code, {
          lang,
          theme: "github-light",
        }),
      )
      .then((highlighted) => {
        if (active) setHtml(highlighted)
      })

    return () => {
      active = false
    }
  }, [code, lang])

  const hasHeader = Boolean(title ?? description)

  return (
    <div
      className={cn(
        "group/code relative overflow-hidden rounded-xl border border-border bg-muted/40",
        className,
      )}
    >
      {hasHeader ? (
        <div className="flex items-start justify-between gap-3 border-b border-border/80 px-4 py-2.5">
          <div className="min-w-0 space-y-0.5">
            {title ? (
              <p className="truncate text-sm font-medium text-foreground">
                {title}
              </p>
            ) : null}
            {description ? (
              <p className="truncate text-xs text-muted-foreground">
                {description}
              </p>
            ) : null}
          </div>
          <CopyButton text={code} variant="code" />
        </div>
      ) : (
        <div className="absolute top-2.5 right-3 z-10">
          <CopyButton text={code} variant="code" />
        </div>
      )}

      <div
        className={cn(
          "code-scroll shiki-docs flex overflow-y-auto overflow-x-auto",
          !hasHeader && "pt-2",
          maxHeight,
        )}
      >
        {useLineNumbers ? (
          <LineNumbers count={lineCount} className="shrink-0" />
        ) : null}
        <div
          className={cn(
            "min-w-0 flex-1",
            "[&_pre]:m-0 [&_pre]:overflow-visible [&_pre]:bg-transparent [&_pre]:p-4",
            "[&_code]:font-mono [&_code]:text-[13px] [&_code]:leading-6",
            !useLineNumbers && !hasHeader && "pr-10",
          )}
        >
          {html ? (
            <div dangerouslySetInnerHTML={{ __html: html }} />
          ) : (
            <pre className="p-4 font-mono text-[13px] leading-6 text-muted-foreground">
              <code>{code}</code>
            </pre>
          )}
        </div>
      </div>
    </div>
  )
}
