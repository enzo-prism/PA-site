import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type HeroAction = {
  label: string;
  href: string;
  variant?: "default" | "secondary" | "ghost";
  external?: boolean;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  highlight: string;
  actions?: HeroAction[];
  panel?: React.ReactNode;
  compact?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  intro,
  highlight,
  actions = [],
  panel,
  compact = false,
}: PageHeroProps) {
  return (
    <section className="section-rule relative">
      <div
        className={cn(
          "mx-auto grid max-w-7xl gap-12 px-6 py-18 md:px-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(300px,1.05fr)] lg:items-center",
          compact && "py-16",
        )}
      >
        <div>
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[color:var(--brand-red)]">
              {eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.04}>
            <h1 className="mt-5 max-w-4xl text-[3.2rem] font-semibold leading-[0.92] tracking-[-0.08em] text-[color:var(--foreground)] sm:text-6xl lg:text-[5rem]">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[color:var(--muted-foreground)] md:text-lg">
              {intro}
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-xl border-l border-[color:var(--brand-red)]/24 pl-4 text-sm leading-7 text-[color:var(--foreground)]/78">
              {highlight}
            </p>
          </Reveal>
          {actions.length > 0 ? (
            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {actions.map((action) => (
                  <Button
                    key={action.href + action.label}
                    asChild
                    size="lg"
                    variant={action.variant ?? "default"}
                  >
                    {action.external ? (
                      <a href={action.href} target="_blank" rel="noreferrer">
                        {action.label}
                        <ArrowUpRight className="size-4" />
                      </a>
                    ) : (
                      <Link href={action.href}>
                        {action.label}
                        <ArrowRight className="size-4" />
                      </Link>
                    )}
                  </Button>
                ))}
              </div>
            </Reveal>
          ) : null}
        </div>
        {panel ? (
          <Reveal delay={0.1}>
            <div className="rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-4 md:p-6">
              {panel}
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
