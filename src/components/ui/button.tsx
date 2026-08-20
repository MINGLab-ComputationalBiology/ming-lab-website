import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium tracking-[0.04em] transition-[color,background-color,transform,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-accent text-accent-fg hover:bg-accent-hover",
        secondary:
          "bg-paper text-fg shadow-[var(--shadow-border)] hover:bg-surface",
        outline:
          "border border-border bg-transparent text-fg hover:bg-surface",
        ghost: "text-fg hover:bg-surface",
        inverse: "bg-ink-fg text-ink hover:bg-paper",
        ghostInk: "text-ink-fg hover:bg-ink-line",
        outlineInk:
          "border border-ink-fg/35 bg-transparent text-ink-fg hover:bg-ink-fg hover:text-ink",
        link: "text-accent underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 rounded-sm px-5",
        sm: "h-9 rounded-sm px-3",
        lg: "h-12 rounded-sm px-7",
        icon: "size-11 rounded-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { buttonVariants };
