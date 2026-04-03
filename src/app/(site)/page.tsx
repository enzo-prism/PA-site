import type { Metadata } from "next";

import { ContactCta } from "@/components/site/contact-cta";
import {
  HeroOrbit,
  ResultsLoopDiagram,
  SimpleStakeGrid,
  conceptIcons,
} from "@/components/site/concept-diagrams";
import { MediaFeature } from "@/components/site/media-feature";
import { MetricBand } from "@/components/site/metric-band";
import { PageHero } from "@/components/site/page-hero";
import { PageLinkGrid } from "@/components/site/page-link-grid";
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
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        intro={page.intro}
        highlight={page.highlight}
        actions={[
          { label: "Explore the platform", href: "/platform" },
          {
            label: "Open app demo",
            href: publicSiteConfig.webAppDemoUrl,
            variant: "secondary",
            external: true,
          },
          { label: "Open the business case", href: "/business", variant: "ghost" },
        ]}
        panel={<HeroOrbit />}
      />
      <MetricBand metrics={overviewMetrics} />
      <section className="section-rule section-pad mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="In one glance"
          title="Three simple jobs"
          description="The platform is easiest to understand when it is reduced to three outcomes."
          icon={sectionIcons.overview}
        />
        <SimpleStakeGrid items={overviewConcepts} className="mt-10 xl:grid-cols-3" />
      </section>
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
