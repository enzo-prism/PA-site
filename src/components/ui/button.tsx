import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-red)]/22 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent [touch-action:manipulation]",
  {
    variants: {
      variant: {
        default:
          "bg-[color:var(--brand-navy)] px-5 py-3 text-[color:var(--brand-ivory)] hover:-translate-y-0.5 hover:bg-[#18253d]",
        secondary:
          "border border-[color:var(--line)] bg-white px-5 py-3 text-[color:var(--foreground)] hover:-translate-y-0.5 hover:border-[color:var(--brand-red)]/20",
        ghost:
          "px-0 py-0 text-[color:var(--foreground)] hover:text-[color:var(--brand-red)]",
      },
      size: {
        default: "h-11",
        sm: "h-9 px-4 text-xs uppercase tracking-[0.22em]",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
