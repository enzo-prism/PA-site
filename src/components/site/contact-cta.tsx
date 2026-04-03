import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";

import { Button } from "@/components/ui/button";

type ContactCtaProps = {
  eyebrow: string;
  title: string;
  description: string;
  dataRoomUrl?: string;
  demoUrl?: string;
};

export function ContactCta({
  eyebrow,
  title,
  description,
  dataRoomUrl,
  demoUrl,
}: ContactCtaProps) {
  return (
    <section className="section-rule rounded-[2rem] bg-[color:var(--surface-subtle)] px-6 py-8 md:px-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--brand-red)]">
        {eyebrow}
      </p>
      <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div>
          <h2 className="text-4xl font-semibold leading-[0.96] tracking-[-0.06em] text-[color:var(--foreground)] md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[color:var(--muted-foreground)] md:text-lg">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {demoUrl ? (
            <Button asChild size="lg">
              <Link href={demoUrl} target="_blank" rel="noreferrer">
                Open app demo
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          ) : null}
          {dataRoomUrl ? (
            <Button asChild size="lg" variant="secondary">
              <Link href={dataRoomUrl} target="_blank" rel="noreferrer">
                <FileText className="size-4" />
                Full deck
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
