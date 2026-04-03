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
          "mb-3 flex items-center gap-3 sm:mb-4",
          align === "center" && "justify-center",
        )}
      >
        {icon ? <IconBadge icon={icon} size="sm" /> : null}
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--brand-red)]">
          {eyebrow}
        </p>
      </div>
      <h2 className="text-[2.45rem] font-semibold leading-[0.98] tracking-[-0.065em] text-[color:var(--foreground)] sm:text-[2.9rem] md:text-[3.4rem]">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl text-[15px] leading-7 text-[color:var(--muted-foreground)] sm:mt-4 sm:text-base sm:leading-8 md:text-lg">
        {description}
      </p>
    </div>
  );
}
