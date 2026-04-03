import { getAudienceIcon } from "@/lib/site-icons";
import type { StakeholderNarrative } from "@/types/site";

import { IconBadge } from "./icon-badge";
import { Reveal } from "./reveal";

type EcosystemMapProps = {
  items: StakeholderNarrative[];
};

export function EcosystemMap({ items }: EcosystemMapProps) {
  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] xl:items-center">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-[linear-gradient(145deg,#0f172a,#162742_58%,#1d4ed8_130%)] p-8 text-[color:var(--brand-ivory)] shadow-[0_24px_80px_-44px_rgba(15,23,42,0.6)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.24),transparent_30%),radial-gradient(circle_at_80%_22%,rgba(56,189,248,0.2),transparent_28%)]" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--brand-gold)]">
              Shared infrastructure
            </p>
            <div className="mt-12 grid grid-cols-2 gap-4 text-center sm:grid-cols-3">
              {["Athletes", "Coaches", "Clubs", "Sponsors", "PATAFA", "PSC / POC"].map(
                (item, index) => (
                  <div
                    key={item}
                    className={
                      index === 2
                        ? "col-span-2 row-span-2 flex min-h-44 items-center justify-center rounded-[2rem] border border-white/12 bg-white/10 px-6 py-8 text-left sm:col-span-1"
                        : "rounded-[1.5rem] border border-white/12 bg-white/8 px-4 py-5 text-xs uppercase tracking-[0.24em] text-white/78"
                    }
                  >
                    {index === 2 ? (
                      <div>
                        <div className="flex items-center gap-3">
                          <IconBadge
                            icon={getAudienceIcon("Governing bodies")}
                            size="sm"
                            tone="inverse"
                          />
                          <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--brand-gold)]">
                            Core platform
                          </p>
                        </div>
                        <p className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.05em] text-white">
                          Verified data creates the level playing field.
                        </p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-3">
                        <IconBadge
                          icon={getAudienceIcon(
                            item === "PATAFA" || item === "PSC / POC"
                              ? "Governing bodies"
                              : item,
                          )}
                          size="sm"
                          tone="inverse"
                        />
                        <span>{item}</span>
                      </div>
                    )}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </Reveal>
      <div className="grid gap-px overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--line)]/50">
        {items.map((item, index) => (
          <Reveal key={item.audience} delay={index * 0.05}>
            <div className="bg-white/80 p-6">
              <div className="flex items-center gap-3">
                <IconBadge icon={getAudienceIcon(item.audience)} size="sm" />
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[color:var(--brand-red)]">
                  {item.audience}
                </p>
              </div>
              <h3 className="mt-4 text-xl font-medium text-[color:var(--foreground)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted-foreground)]">
                {item.primaryValue}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
