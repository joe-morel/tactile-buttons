import { cn } from "@/lib/utils"

const SHADCN_GITHUB = "https://github.com/shadcn"
const SHADCN_DOCS = "https://ui.shadcn.com"
const SHADCN_AVATAR = "https://github.com/shadcn.png"

export function ShadcnCreditCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "hidden rounded-xl border border-border bg-card p-4 shadow-xs xl:block",
        className,
      )}
    >
      <p className="text-sm font-medium text-foreground">Thanks to shadcn</p>
      <p className="mt-1 text-sm leading-5 text-muted-foreground">
        Tactile Buttons builds on the{" "}
        <a
          href={SHADCN_DOCS}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-foreground underline-offset-4 hover:underline"
        >
          shadcn/ui
        </a>{" "}
        Button pattern.
      </p>

      <a
        href={SHADCN_GITHUB}
        target="_blank"
        rel="noreferrer"
        className="mt-4 flex flex-col items-center gap-2 rounded-lg py-2 transition-colors hover:bg-muted/60"
        aria-label="shadcn on GitHub"
      >
        <img
          src={SHADCN_AVATAR}
          alt=""
          width={48}
          height={48}
          className="size-12 rounded-full border border-border bg-muted object-cover shadow-xs"
        />
        <span className="text-sm font-medium text-foreground">@shadcn</span>
        <span className="text-xs text-muted-foreground">github.com/shadcn</span>
      </a>
    </div>
  )
}
