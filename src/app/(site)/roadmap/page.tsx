import type { Metadata } from "next";

import { ContactCta } from "@/components/site/contact-cta";
import { RoadmapPathDiagram } from "@/components/site/concept-diagrams";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { pageConfigs, rolloutTimeline } from "@/content/site-content";
import { sectionIcons } from "@/lib/site-icons";
import { publicSiteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Roadmap",
  description: pageConfigs.roadmap.description,
};

const playbook = [
  "Meet local leaders face to face",
  "Run clinics and school activation",
  "Start registration and results flow",
];

export default function RoadmapPage() {
  const page = pageConfigs.roadmap;

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        intro={page.intro}
        highlight={page.highlight}
        actions={[
          { label: "Review the model", href: "/business" },
          { label: "Back to overview", href: "/", variant: "secondary" },
        ]}
        panel={<RoadmapPathDiagram />}
        compact
      />
      <section className="section-rule mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionHeading
          eyebrow="Three phases"
          title="The rollout gets bigger only after it gets trusted"
          description="The sequence is intentional: prove the model in the field, then widen the network, then let the revenue base mature."
          icon={sectionIcons.roadmap}
        />
        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {rolloutTimeline.map((item) => (
            <article
              key={item.phase}
              className="rounded-[1.75rem] border border-[color:var(--line)] bg-white p-6"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-red)]">
                {item.phase}
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[color:var(--foreground)]">
                {item.title}
              </h3>
              <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">
                {item.window}
              </p>
              <p className="mt-4 text-sm leading-7 text-[color:var(--muted-foreground)]">
                {item.summary}
              </p>
              <div className="mt-6 space-y-3">
                {item.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-full border border-[color:var(--line)] bg-[color:var(--surface-subtle)] px-4 py-3 text-sm text-[color:var(--foreground)]"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section-rule mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(280px,1.1fr)] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Pilot playbook"
              title="The first version succeeds on the ground"
              description="The pilot phase is as much about local trust and repetition as it is about software."
              icon={sectionIcons.operatingLoop}
            />
          </div>
          <div className="space-y-3">
            {playbook.map((item) => (
              <div
                key={item}
                className="rounded-full border border-[color:var(--line)] bg-white px-4 py-3 text-sm text-[color:var(--foreground)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <ContactCta
          eyebrow="From rollout to funding"
          title="The business case only works if the field plan actually builds the network"
          description="The next page shows how member growth, certification, and sponsor upside connect."
          demoUrl={publicSiteConfig.webAppDemoUrl}
          dataRoomUrl={publicSiteConfig.dataRoomUrl}
        />
      </section>
    </>
  );
}
