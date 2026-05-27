import { createHighlighter } from "shiki/bundle/web"

type Highlighter = Awaited<ReturnType<typeof createHighlighter>>

let highlighterPromise: Promise<Highlighter> | null = null

export function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ["github-light"],
      langs: ["tsx", "typescript", "shell", "css"],
    })
  }
  return highlighterPromise
}

export type DocCodeLanguage = "tsx" | "typescript" | "shell" | "css" | "bash"

export function resolveLanguage(language: DocCodeLanguage) {
  return language === "bash" ? "shell" : language
}
