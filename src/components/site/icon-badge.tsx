import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type IconBadgeProps = {
  icon: LucideIcon;
  tone?: "surface" | "soft" | "inverse";
  size?: "sm" | "md";
  className?: string;
};

export function IconBadge({
  icon: Icon,
  tone = "surface",
  size = "md",
  className,
}: IconBadgeProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full border",
        tone === "surface" &&
          "border-[color:var(--line)] bg-white text-[color:var(--brand-red)]",
        tone === "soft" &&
          "border-[color:var(--line)] bg-[color:var(--surface-subtle)] text-[color:var(--foreground)]",
        tone === "inverse" &&
          "border-white/14 bg-white/10 text-[color:var(--brand-ivory)]",
        size === "sm" ? "size-9" : "size-11",
        className,
      )}
    >
      <Icon
        aria-hidden="true"
        className={size === "sm" ? "size-4" : "size-5"}
        strokeWidth={1.8}
      />
    </span>
  );
}
