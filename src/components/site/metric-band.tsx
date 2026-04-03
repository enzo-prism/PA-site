import type { MetricStat } from "@/types/site";
import { getMetricIcon } from "@/lib/site-icons";

import { IconBadge } from "./icon-badge";
import { Reveal } from "./reveal";

type MetricBandProps = {
  metrics: MetricStat[];
};

export function MetricBand({ metrics }: MetricBandProps) {
  return (
    <section className="section-rule">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 sm:px-6 sm:py-10 md:grid-cols-2 md:px-10 xl:grid-cols-4">
        {metrics.map((metric, index) => (
          <Reveal key={metric.label} delay={index * 0.04}>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <IconBadge icon={getMetricIcon(metric.label)} size="sm" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[color:var(--muted-foreground)]">
                  {metric.label}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-[2.4rem] font-semibold leading-none tabular-nums tracking-[-0.06em] text-[color:var(--foreground)] sm:text-4xl">
                  {metric.value}
                </p>
                {metric.emphasis === "forecast" ? (
                  <span className="rounded-full border border-[color:var(--brand-red)]/16 bg-[color:var(--brand-red)]/6 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[color:var(--foreground)]">
                    Forecast
                  </span>
                ) : null}
              </div>
              <p className="max-w-xs text-sm leading-6 text-[color:var(--muted-foreground)] sm:leading-7">
                {metric.context}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
