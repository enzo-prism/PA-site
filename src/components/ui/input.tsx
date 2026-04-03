import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-12 w-full rounded-2xl border border-[color:var(--line)] bg-white px-4 py-3 text-sm text-[color:var(--foreground)] outline-none transition-[border-color,box-shadow,background-color] duration-200 ease-out placeholder:text-[color:var(--muted-foreground)] focus-visible:border-[color:var(--brand-red)]/28 focus-visible:ring-2 focus-visible:ring-[color:var(--brand-red)]/14",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
