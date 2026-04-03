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
    <section className="section-rule rounded-[1.75rem] bg-[color:var(--surface-subtle)] px-5 py-7 sm:px-6 sm:py-8 md:rounded-[2rem] md:px-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--brand-red)]">
        {eyebrow}
      </p>
      <div className="mt-4 grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-8">
        <div>
          <h2 className="text-[2.45rem] font-semibold leading-[0.98] tracking-[-0.065em] text-[color:var(--foreground)] sm:text-[2.9rem] md:text-5xl">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-7 text-[color:var(--muted-foreground)] sm:mt-4 sm:text-base sm:leading-8 md:text-lg">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {demoUrl ? (
            <Button asChild size="lg" className="w-full justify-between sm:w-auto">
              <Link href={demoUrl} target="_blank" rel="noreferrer">
                Open app demo
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          ) : null}
          {dataRoomUrl ? (
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="w-full justify-between sm:w-auto"
            >
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
