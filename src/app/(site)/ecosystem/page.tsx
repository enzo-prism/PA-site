import type { Metadata } from "next";

import { ContactCta } from "@/components/site/contact-cta";
import {
  EcosystemHubDiagram,
  SimpleStakeGrid,
  conceptIcons,
} from "@/components/site/concept-diagrams";
import { MediaFeature } from "@/components/site/media-feature";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import {
  mediaLibrary,
  pageConfigs,
  stakeholderNarratives,
} from "@/content/site-content";
import { sectionIcons } from "@/lib/site-icons";
import { publicSiteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Ecosystem",
  description: pageConfigs.ecosystem.description,
};

const ecosystemConcepts = [
  {
    icon: conceptIcons.athlete,
    title: "Athletes",
    detail: stakeholderNarratives[0].primaryValue,
  },
  {
    icon: conceptIcons.trust,
    title: "Coaches",
    detail: stakeholderNarratives[1].primaryValue,
  },
  {
    icon: conceptIcons.programs,
    title: "Clubs",
    detail: stakeholderNarratives[2].primaryValue,
  },
  {
    icon: conceptIcons.sponsors,
    title: "Sponsors",
    detail: stakeholderNarratives[3].primaryValue,
  },
  {
    icon: conceptIcons.trust,
    title: "Governing bodies",
    detail: stakeholderNarratives[4].primaryValue,
  },
];

const ecosystemRules = [
  "Better visibility for athletes outside Manila",
  "Safer discovery for families and schools",
  "Clearer operating picture for institutions",
];

export default function EcosystemPage() {
  const page = pageConfigs.ecosystem;

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        intro={page.intro}
        highlight={page.highlight}
        actions={[
          { label: "See the roadmap", href: "/roadmap" },
          { label: "See the model", href: "/business", variant: "secondary" },
        ]}
        panel={<EcosystemHubDiagram />}
        compact
      />
      <section className="section-rule mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionHeading
          eyebrow="What changes"
          title="The same system unlocks different value for each group"
          description="That is why this is more than a rankings site. It is shared infrastructure."
          icon={sectionIcons.ecosystem}
        />
        <SimpleStakeGrid items={ecosystemConcepts} className="mt-10 xl:grid-cols-3" />
      </section>
      <section className="section-rule mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(300px,1.12fr)] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Why it matters"
              title="The platform creates a fairer view of the sport"
              description="It makes regional talent easier to see, trusted programs easier to find, and the whole system easier to manage."
              icon={sectionIcons.visibility}
            />
            <div className="mt-8 space-y-3">
              {ecosystemRules.map((rule) => (
                <div
                  key={rule}
                  className="rounded-full border border-[color:var(--line)] bg-white px-4 py-3 text-sm text-[color:var(--foreground)]"
                >
                  {rule}
                </div>
              ))}
            </div>
          </div>
          <MediaFeature
            slot={mediaLibrary.ecosystemAudio}
            mediaUrl={publicSiteConfig.ecosystemAudioUrl}
          />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <ContactCta
          eyebrow="Next"
          title="The rollout matters because trust must be built locally before it is scaled nationally"
          description="The next page shows how the project moves from pilot provinces to a lasting national standard."
          demoUrl={publicSiteConfig.webAppDemoUrl}
          dataRoomUrl={publicSiteConfig.dataRoomUrl}
        />
      </section>
    </>
  );
}
