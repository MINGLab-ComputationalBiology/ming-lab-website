import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "flex h-11 w-full rounded-md border border-border bg-paper px-3 text-base text-fg shadow-[var(--shadow-border)] outline-none transition-[box-shadow,border-color] duration-150 placeholder:text-muted focus-visible:ring-2 focus-visible:ring-ring md:text-sm",
        className,
      )}
      {...props}
    />
  );
}
