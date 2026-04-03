import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { IconBadge } from "./icon-badge";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  icon?: LucideIcon;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  icon,
}: SectionHeadingProps) {
  return (
    <div
      className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}
    >
      <div
        className={cn(
          "mb-4 flex items-center gap-3",
          align === "center" && "justify-center",
        )}
      >
        {icon ? <IconBadge icon={icon} size="sm" /> : null}
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--brand-red)]">
          {eyebrow}
        </p>
      </div>
      <h2 className="text-4xl font-semibold leading-[0.96] tracking-[-0.06em] text-[color:var(--foreground)] md:text-[3.4rem]">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-8 text-[color:var(--muted-foreground)] md:text-lg">
        {description}
      </p>
    </div>
  );
}
