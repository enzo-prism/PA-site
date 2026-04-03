import type { Metadata } from "next";

import { ContactCta } from "@/components/site/contact-cta";
import {
  ResultsLoopDiagram,
  SimpleStakeGrid,
  conceptIcons,
} from "@/components/site/concept-diagrams";
import { MediaFeature } from "@/components/site/media-feature";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import {
  mediaLibrary,
  pageConfigs,
  platformPillars,
} from "@/content/site-content";
import { sectionIcons } from "@/lib/site-icons";
import { publicSiteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Platform",
  description: pageConfigs.platform.description,
};

const trustSignals = [
  "PATAFA recognition",
  "SafeSport status",
  "Verified roster",
];

const platformConcepts = [
  {
    icon: conceptIcons.athlete,
    title: platformPillars[0].title,
    detail: platformPillars[0].detail,
  },
  {
    icon: conceptIcons.rankings,
    title: platformPillars[1].title,
    detail: platformPillars[1].detail,
  },
  {
    icon: conceptIcons.clubs,
    title: platformPillars[2].title,
    detail: platformPillars[2].detail,
  },
  {
    icon: conceptIcons.competitions,
    title: platformPillars[3].title,
    detail: platformPillars[3].detail,
  },
];

export default function PlatformPage() {
  const page = pageConfigs.platform;

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        intro={page.intro}
        highlight={page.highlight}
        actions={[
          { label: "Who it helps", href: "/ecosystem" },
          {
            label: "Open app demo",
            href: publicSiteConfig.webAppDemoUrl,
            variant: "secondary",
            external: true,
          },
          { label: "How it rolls out", href: "/roadmap", variant: "ghost" },
        ]}
        panel={<ResultsLoopDiagram className="border-0 bg-transparent p-0" />}
        compact
      />
      <section className="section-rule mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionHeading
          eyebrow="What people actually use"
          title="Four outputs. One source."
          description="The product stays simple because every feature comes from the same verified input."
          icon={sectionIcons.platform}
        />
        <SimpleStakeGrid items={platformConcepts} className="mt-10 xl:grid-cols-2" />
      </section>
      <section className="section-rule mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(300px,1.08fr)] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Trust layer"
              title="Recognition should be easy to scan"
              description="Families, athletes, and institutions should be able to tell quickly which programs are legitimate."
              icon={sectionIcons.trust}
            />
            <div className="mt-8 space-y-3">
              {trustSignals.map((signal) => (
                <div
                  key={signal}
                  className="rounded-full border border-[color:var(--line)] bg-white px-4 py-3 text-sm text-[color:var(--foreground)]"
                >
                  {signal}
                </div>
              ))}
            </div>
          </div>
          <MediaFeature
            slot={mediaLibrary.platformAudio}
            mediaUrl={publicSiteConfig.platformAudioUrl}
          />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <ContactCta
          eyebrow="Keep going"
          title="The platform only matters if the ecosystem understands why to join it"
          description="The next page shows how the same system creates a different win for each stakeholder."
          demoUrl={publicSiteConfig.webAppDemoUrl}
          dataRoomUrl={publicSiteConfig.dataRoomUrl}
        />
      </section>
    </>
  );
}
