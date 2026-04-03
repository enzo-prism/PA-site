import { getTimelineIcon } from "@/lib/site-icons";
import type { TimelineItem } from "@/types/site";

import { IconBadge } from "./icon-badge";
import { Reveal } from "./reveal";

type RoadmapTimelineProps = {
  items: TimelineItem[];
};

export function RoadmapTimeline({ items }: RoadmapTimelineProps) {
  return (
    <div className="grid gap-6 xl:grid-cols-3">
      {items.map((item, index) => (
        <Reveal key={item.phase} delay={index * 0.05}>
          <article className="relative overflow-hidden rounded-[2rem] border border-[color:var(--line)]/80 bg-white/82 p-6 shadow-[0_18px_40px_-36px_rgba(15,23,42,0.3)] backdrop-blur">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[color:var(--brand-red)] via-[color:var(--brand-gold)] to-[color:var(--brand-sea)]" />
            <div className="pt-5">
              <div className="flex items-center gap-3">
                <IconBadge icon={getTimelineIcon(item.phase)} size="sm" />
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-red)]">
                  {item.phase}
                </p>
              </div>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[color:var(--foreground)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">
                {item.window}
              </p>
              <p className="mt-5 text-base leading-7 text-[color:var(--muted-foreground)]">
                {item.summary}
              </p>
              <ul className="mt-6 space-y-3">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-6 text-[color:var(--foreground)]/90"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[color:var(--brand-gold)]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
