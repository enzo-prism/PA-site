import { getCalloutIcon } from "@/lib/site-icons";

import { IconBadge } from "./icon-badge";
import { Reveal } from "./reveal";

type CalloutStripProps = {
  items: string[];
};

export function CalloutStrip({ items }: CalloutStripProps) {
  return (
    <div className="overflow-hidden rounded-full border border-[color:var(--line)]/80 bg-white/65 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-6 md:px-10">
        {items.map((item, index) => (
          <Reveal key={item} delay={index * 0.03}>
            <div className="flex items-center gap-2 rounded-full border border-[color:var(--line)]/70 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--foreground)]/80">
              <IconBadge icon={getCalloutIcon(item)} size="sm" className="rounded-full" />
              <span>{item}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
