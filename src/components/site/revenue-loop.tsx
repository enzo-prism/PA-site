import type { ProjectionAssumption } from "@/types/site";

import { Reveal } from "./reveal";

type RevenueLoopProps = {
  assumptions: ProjectionAssumption[];
};

const loopStages = [
  "Youth memberships create the base layer",
  "Club certification adds legitimacy and recurring revenue",
  "Verified participation makes sponsorship measurable",
  "Stronger funding improves field operations and adoption",
];

export function RevenueLoop({ assumptions }: RevenueLoopProps) {
  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
      <Reveal>
        <div className="rounded-[2rem] border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(246,249,253,0.74))] p-6 shadow-[0_28px_80px_-48px_rgba(15,23,42,0.34)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-red)]">
            Revenue loop
          </p>
          <div className="mt-8 grid gap-4">
            {loopStages.map((stage, index) => (
              <div
                key={stage}
                className="rounded-[1.5rem] border border-[color:var(--line)]/70 bg-[color:var(--surface)] px-5 py-5"
              >
                <p className="text-[11px] uppercase tracking-[0.26em] text-[color:var(--muted-foreground)]">
                  Step {index + 1}
                </p>
                <p className="mt-3 text-base leading-7 text-[color:var(--foreground)]">
                  {stage}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
      <div className="grid gap-4">
        {assumptions.map((assumption, index) => (
          <Reveal key={assumption.label} delay={index * 0.04}>
            <article className="rounded-[1.75rem] border border-[color:var(--line)]/80 bg-white/82 p-6 shadow-[0_16px_40px_-34px_rgba(15,23,42,0.3)]">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-red)]">
                  {assumption.label}
                </p>
                <p className="rounded-full border border-[color:var(--brand-red)]/12 bg-[color:var(--brand-red)]/6 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.26em] text-[color:var(--foreground)]">
                  Modeled assumption
                </p>
              </div>
              <p className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-[color:var(--foreground)]">
                {assumption.value}
              </p>
              <p className="mt-4 text-sm leading-7 text-[color:var(--muted-foreground)]">
                {assumption.note}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
