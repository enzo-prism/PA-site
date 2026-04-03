import type { FlowStep } from "@/types/site";

import { Reveal } from "./reveal";

type StickyFlowProps = {
  eyebrow: string;
  title: string;
  description: string;
  steps: FlowStep[];
};

export function StickyFlow({
  eyebrow,
  title,
  description,
  steps,
}: StickyFlowProps) {
  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(280px,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
      <Reveal className="lg:sticky lg:top-28 lg:h-fit">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[color:var(--brand-red)]">
          {eyebrow}
        </p>
        <h2 className="mt-4 text-4xl font-semibold leading-[0.96] tracking-[-0.06em] text-[color:var(--foreground)] md:text-5xl">
          {title}
        </h2>
        <p className="mt-5 max-w-xl text-base leading-7 text-[color:var(--muted-foreground)] md:text-lg">
          {description}
        </p>
      </Reveal>
      <div className="space-y-6">
        {steps.map((step, index) => (
          <Reveal key={step.label} delay={index * 0.05}>
            <article className="rounded-[1.75rem] border border-[color:var(--line)]/80 bg-white/80 p-6 shadow-[0_18px_48px_-42px_rgba(15,23,42,0.35)] backdrop-blur">
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <span className="inline-flex w-fit rounded-full border border-[color:var(--brand-red)]/12 bg-[color:var(--brand-red)]/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--foreground)]">
                  {step.label}
                </span>
                <div className="max-w-2xl">
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--foreground)]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[color:var(--muted-foreground)]">
                    {step.description}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
