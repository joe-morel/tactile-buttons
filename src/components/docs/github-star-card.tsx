import { Star } from "lucide-react"

import { GitHubIcon } from "@/components/icons/social-icons"
import { cn } from "@/lib/utils"

const REPO_URL = "https://github.com/joe-morel/tactile-buttons"

export function GitHubStarCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "hidden rounded-xl border border-border bg-card p-4 shadow-xs xl:block",
        className,
      )}
    >
      <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-muted">
        <Star className="size-4 fill-amber-400 text-amber-500" aria-hidden="true" />
      </div>
      <p className="text-sm font-medium text-foreground">Using Tactile Buttons?</p>
      <p className="mt-1 text-sm leading-5 text-muted-foreground">
        If this helped your project, a star on GitHub means a lot.
      </p>
      <a
        href={REPO_URL}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm font-medium text-foreground shadow-xs transition-colors hover:bg-muted"
      >
        <GitHubIcon className="size-4" />
        Star on GitHub
      </a>
    </div>
  )
}
