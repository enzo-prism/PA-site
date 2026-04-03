import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ContactCta } from "@/components/site/contact-cta";
import {
  HeroFocusDiagram,
  ResultsLoopDiagram,
  SimpleStakeGrid,
  conceptIcons,
} from "@/components/site/concept-diagrams";
import { MediaFeature } from "@/components/site/media-feature";
import { MetricBand } from "@/components/site/metric-band";
import { PageLinkGrid } from "@/components/site/page-link-grid";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import {
  mediaLibrary,
  navItems,
  overviewMetrics,
  pageConfigs,
} from "@/content/site-content";
import { sectionIcons } from "@/lib/site-icons";
import { publicSiteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Overview",
  description: pageConfigs.overview.description,
};

const overviewConcepts = [
  {
    icon: conceptIcons.athlete,
    title: "See talent",
    detail: "Athletes get one verified record that can travel across the country.",
  },
  {
    icon: conceptIcons.rankings,
    title: "Run rankings",
    detail: "Official meet results refresh national leaderboards automatically.",
  },
  {
    icon: conceptIcons.trust,
    title: "Trust programs",
    detail: "Clubs and coaches show visible recognition and safety signals.",
  },
];

const loopLabels = [
  "Upload official results",
  "Validate athlete data",
  "Refresh profiles",
  "Publish rankings",
];

export default function OverviewPage() {
  const page = pageConfigs.overview;

  return (
    <>
      <section className="mx-auto flex min-h-[calc(100svh-4.75rem)] max-w-7xl flex-col justify-center px-5 pb-14 pt-12 sm:px-6 sm:pb-18 sm:pt-16 md:px-10 md:pb-22 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(360px,0.98fr)] lg:items-center xl:gap-18">
          <Reveal className="max-w-[33rem]" y={18}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[color:var(--brand-red)]">
              {page.eyebrow}
            </p>
            <h1 className="mt-5 max-w-[10ch] text-[clamp(3.35rem,8vw,6.6rem)] font-semibold leading-[0.92] tracking-[-0.085em] text-[color:var(--foreground)]">
              {page.title}
            </h1>
            <p className="mt-5 max-w-[30rem] text-[15px] leading-7 text-[color:var(--muted-foreground)] sm:text-lg sm:leading-8">
              {page.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button asChild size="lg">
                <Link href="/platform">
                  Explore the platform
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Link
                href={publicSiteConfig.webAppDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--foreground)] transition-colors hover:text-[color:var(--brand-red)]"
              >
                Open app demo
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal className="w-full lg:max-w-[39rem] lg:justify-self-end" delay={0.08} y={18}>
            <HeroFocusDiagram />
          </Reveal>
        </div>
      </section>
      <section className="section-rule section-pad mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="In one glance"
          title="Three simple jobs"
          description="The platform only has to do three things well."
          icon={sectionIcons.overview}
        />
        <SimpleStakeGrid items={overviewConcepts} className="mt-10 xl:grid-cols-3" />
      </section>
      <MetricBand metrics={overviewMetrics} />
      <section className="section-rule section-pad mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(300px,1.05fr)] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="How it works"
              title="One verified results loop powers the whole system"
              description="Everything starts with official meet results. Once the data is clean, the rest of the platform stays clear."
              icon={sectionIcons.operatingLoop}
            />
            <div className="mt-8 space-y-3">
              {loopLabels.map((label, index) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-full border border-[color:var(--line)] bg-white px-4 py-3"
                >
                  <span className="inline-flex size-8 items-center justify-center rounded-full bg-[color:var(--surface-subtle)] text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-red)]">
                    {index + 1}
                  </span>
                  <span className="text-sm text-[color:var(--foreground)]">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <ResultsLoopDiagram />
        </div>
      </section>
      <section className="section-rule section-pad mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(300px,0.95fr)] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Start anywhere"
              title="The brief is split into four short ideas"
              description="Each page answers one question, so stakeholders do not have to decode a long presentation."
              icon={sectionIcons.platform}
            />
            <div className="mt-10">
              <PageLinkGrid items={navItems.filter((item) => item.href !== "/")} />
            </div>
          </div>
          <MediaFeature
            slot={mediaLibrary.overviewVideo}
            mediaUrl={publicSiteConfig.overviewVideoUrl}
            posterUrl={publicSiteConfig.overviewVideoPosterUrl}
          />
        </div>
      </section>
      <section className="section-tail mx-auto max-w-7xl">
        <ContactCta
          eyebrow="Next step"
          title="Share this first. Open deeper materials second."
          description="The site is meant to make the project obvious before a live walkthrough ever starts."
          demoUrl={publicSiteConfig.webAppDemoUrl}
          dataRoomUrl={publicSiteConfig.dataRoomUrl}
        />
      </section>
    </>
  );
}
