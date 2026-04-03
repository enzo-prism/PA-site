import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { getNavIcon } from "@/lib/site-icons";
import type { NavItem } from "@/types/site";

import { IconBadge } from "./icon-badge";
import { Reveal } from "./reveal";

type PageLinkGridProps = {
  items: NavItem[];
};

export function PageLinkGrid({ items }: PageLinkGridProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {items.map((item, index) => (
        <Reveal key={item.href} delay={index * 0.04}>
          <Link
            href={item.href}
            className="group flex h-full items-center justify-between gap-4 rounded-[1.35rem] border border-[color:var(--line)] bg-white px-4 py-4 transition-[border-color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-[color:var(--brand-red)]/18 sm:gap-6 sm:rounded-[1.5rem] sm:px-5 sm:py-5"
          >
            <div className="flex min-w-0 items-start gap-3 sm:gap-4">
              <IconBadge icon={getNavIcon(item.href)} size="sm" />
              <div className="min-w-0">
                <p className="text-base font-medium text-[color:var(--foreground)]">
                  {item.label}
                </p>
                <p className="mt-1 max-w-md text-sm leading-6 text-[color:var(--muted-foreground)]">
                  {item.summary}
                </p>
              </div>
            </div>
            <ArrowUpRight className="size-4 shrink-0 text-[color:var(--muted-foreground)] transition group-hover:text-[color:var(--foreground)]" />
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
