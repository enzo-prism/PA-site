"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getNavIcon } from "@/lib/site-icons";
import type { NavItem } from "@/types/site";
import { cn } from "@/lib/utils";

import { IconBadge } from "./icon-badge";

type SiteHeaderProps = {
  navItems: NavItem[];
  dataRoomUrl?: string;
};

export function SiteHeader({ navItems, dataRoomUrl }: SiteHeaderProps) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--line)] bg-white/88 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:h-[4.1rem] sm:px-6 md:gap-6 md:px-10">
        <Link href="/" className="min-w-0">
          <span className="block text-[11px] font-semibold uppercase tracking-[0.34em] text-[color:var(--brand-red)]">
            Philippine Athletics
          </span>
          <span className="block truncate text-lg font-semibold leading-none tracking-[-0.05em] text-[color:var(--foreground)]">
            Stakeholder Brief
          </span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "inline-flex items-center gap-2 text-sm font-medium transition-colors",
                  active
                    ? "text-[color:var(--foreground)]"
                    : "text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)]",
                )}
              >
                <span className="hidden xl:inline-flex">
                  <IconBadge
                    icon={getNavIcon(item.href)}
                    size="sm"
                    className="size-8 rounded-full border-transparent bg-transparent text-current shadow-none"
                  />
                </span>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          {dataRoomUrl ? (
            <Button asChild variant="secondary">
              <Link href={dataRoomUrl} target="_blank" rel="noreferrer">
                Full deck
              </Link>
            </Button>
          ) : null}
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">
            Private share
          </span>
        </div>
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line)] bg-white text-[color:var(--foreground)] transition-[background-color,border-color,color] duration-200 ease-out [touch-action:manipulation] hover:border-[color:var(--brand-red)]/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-red)]/24"
                aria-label="Open navigation"
              >
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Philippine Athletics</SheetTitle>
                <SheetDescription>
                  Private stakeholder and investor brief
                </SheetDescription>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-2xl border px-4 py-4",
                      pathname === item.href
                        ? "border-[color:var(--brand-red)]/14 bg-[color:var(--brand-red)]/5"
                        : "border-[color:var(--line)] bg-white",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <IconBadge icon={getNavIcon(item.href)} size="sm" />
                      <p className="text-sm font-medium text-[color:var(--foreground)]">
                        {item.label}
                      </p>
                    </div>
                    <p className="mt-1 text-sm leading-6 text-[color:var(--muted-foreground)]">
                      {item.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
