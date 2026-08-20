import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "flex min-h-32 w-full rounded-md border border-border bg-paper px-3 py-2.5 text-base text-fg shadow-[var(--shadow-border)] outline-none transition-[box-shadow] duration-150 placeholder:text-muted focus-visible:ring-2 focus-visible:ring-ring md:text-sm",
        className,
      )}
      {...props}
    />
  );
}
