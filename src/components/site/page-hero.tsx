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
  const renderAction = (action: HeroAction, mobile = false) => {
    const isGhost = (action.variant ?? "default") === "ghost";
    const buttonClassName = mobile
      ? isGhost
        ? "h-auto w-fit justify-start px-1 py-1 text-[15px]"
        : "w-full justify-between sm:w-auto"
      : undefined;

    return (
      <Button
        key={action.href + action.label + String(mobile)}
        asChild
        size="lg"
        variant={action.variant ?? "default"}
        className={buttonClassName}
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
    );
  };

  return (
    <section className="section-rule relative">
      <div
        className={cn(
          "mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-6 sm:py-14 md:gap-10 md:px-10 md:py-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(300px,1.05fr)] lg:items-center lg:gap-12 lg:py-20",
          compact && "py-10 sm:py-12 md:py-14 lg:py-16",
        )}
      >
        <div>
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[color:var(--brand-red)]">
              {eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.04}>
            <h1 className="mt-4 max-w-4xl text-[clamp(2.9rem,12vw,4.3rem)] font-semibold leading-[0.92] tracking-[-0.085em] text-[color:var(--foreground)] sm:text-[4.35rem] lg:text-[5rem]">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[color:var(--muted-foreground)] sm:text-base sm:leading-8 md:text-lg">
              {intro}
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 max-w-xl border-l border-[color:var(--brand-red)]/24 pl-4 text-sm leading-6 text-[color:var(--foreground)]/78 sm:leading-7">
              {highlight}
            </p>
          </Reveal>
          {actions.length > 0 ? (
            <Reveal delay={0.18}>
              <div className="mt-7 hidden flex-wrap items-center gap-3 lg:flex">
                {actions.map((action) => renderAction(action))}
              </div>
            </Reveal>
          ) : null}
          {actions.length > 0 ? (
            <Reveal delay={0.16} className="mt-7 lg:hidden">
              <div className="flex flex-col gap-3">
                {renderAction(actions[0], true)}
              </div>
            </Reveal>
          ) : null}
        </div>
        {panel ? (
          <Reveal delay={0.1}>
            <div className="mx-auto w-full max-w-[26rem] rounded-[1.55rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-3 sm:max-w-[30rem] sm:rounded-[1.7rem] sm:p-4 lg:max-w-none lg:rounded-[2rem] lg:p-6">
              {panel}
            </div>
          </Reveal>
        ) : null}
        {actions.length > 1 ? (
          <Reveal delay={0.2} className="lg:hidden">
            <div className="flex flex-col gap-3">
              {actions.slice(1).map((action) => renderAction(action, true))}
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
