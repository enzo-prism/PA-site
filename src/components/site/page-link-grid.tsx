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
            className="group flex h-full items-center justify-between gap-6 rounded-[1.5rem] border border-[color:var(--line)] bg-white px-5 py-5 transition-[border-color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-[color:var(--brand-red)]/18"
          >
            <div className="flex items-start gap-4">
              <IconBadge icon={getNavIcon(item.href)} size="sm" />
              <div>
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
