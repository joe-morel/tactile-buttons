import { cn } from "@/lib/utils"

const links = [
  { href: "#preview", label: "Preview" },
  { href: "#installation", label: "Installation" },
  { href: "#usage", label: "Usage" },
  { href: "#cursor", label: "Cursor" },
  { href: "#examples", label: "Examples" },
  { href: "#classic", label: "Classic" },
  { href: "#tactile", label: "Tactile" },
  { href: "#dark", label: "Dark" },
  { href: "#soft", label: "Soft" },
  { href: "#size", label: "Size" },
  { href: "#source", label: "Full source" },
  { href: "#api", label: "API Reference" },
]

export function OnThisPage() {
  return (
    <nav
      aria-label="On this page"
      className="hidden xl:block"
    >
      <p className="mb-3 text-sm font-medium text-foreground">On this page</p>
      <ul className="space-y-2 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={cn(
                "text-muted-foreground transition-colors hover:text-foreground",
              )}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
