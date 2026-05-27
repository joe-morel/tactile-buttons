import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex shrink-0 transform-gpu items-center justify-center gap-2 whitespace-nowrap rounded-md",
    "border border-transparent text-sm font-medium tracking-[-0.01em] antialiased",
    "transition-[color,background-color,border-color,box-shadow,transform] duration-150 ease-out",
    "outline-none select-none disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
    "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        outline:
          "border-border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        link: "text-primary underline-offset-4 hover:underline",
        classic:
          "border-blue-700/80 bg-blue-600 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.32),0_1px_2px_rgba(15,23,42,0.14)] hover:bg-blue-700 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_2px_4px_rgba(15,23,42,0.12)] active:translate-y-[2px] active:scale-[0.985] active:bg-blue-700 active:shadow-[inset_0_2px_4px_rgba(15,23,42,0.2)]",
        tactile:
          "border-blue-700/80 bg-blue-600 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.36),0_3px_0_rgb(30,64,175),0_5px_10px_rgba(15,23,42,0.14)] hover:-translate-y-px hover:bg-blue-700 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.36),0_4px_0_rgb(30,64,175),0_8px_14px_rgba(15,23,42,0.14)] active:translate-y-[3px] active:scale-[0.99] active:bg-blue-700 active:shadow-[inset_0_2px_5px_rgba(15,23,42,0.22),0_1px_0_rgb(30,64,175),0_2px_4px_rgba(15,23,42,0.1)]",
        dark:
          "border-slate-800 bg-slate-900 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_1px_2px_rgba(15,23,42,0.2)] hover:bg-slate-800 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_2px_4px_rgba(15,23,42,0.16)] active:translate-y-[2px] active:scale-[0.985] active:bg-slate-950 active:shadow-[inset_0_2px_5px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)]",
        soft:
          "border-slate-200/90 bg-white text-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_1px_2px_rgba(15,23,42,0.06)] hover:border-slate-300 hover:bg-slate-50 active:translate-y-px active:scale-[0.99] active:shadow-[inset_0_2px_4px_rgba(15,23,42,0.06)]",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    compoundVariants: [
      {
        variant: ["classic", "tactile", "dark", "soft"],
        class:
          "subpixel-antialiased [-webkit-tap-highlight-color:transparent] [text-shadow:0_1px_0_rgba(0,0,0,0.06)]",
      },
      {
        variant: ["tactile"],
        class: "will-change-transform",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
