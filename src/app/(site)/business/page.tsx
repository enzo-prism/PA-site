import type { Metadata } from "next";

import { ContactCta } from "@/components/site/contact-cta";
import { BusinessFlywheelDiagram } from "@/components/site/concept-diagrams";
import { MediaFeature } from "@/components/site/media-feature";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  businessSignals,
  faqItems,
  mediaLibrary,
  pageConfigs,
  projectionAssumptions,
} from "@/content/site-content";
import { sectionIcons } from "@/lib/site-icons";
import { publicSiteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Business",
  description: pageConfigs.business.description,
};

export default function BusinessPage() {
  const page = pageConfigs.business;

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        intro={page.intro}
        highlight={page.highlight}
        actions={[
          { label: "Back to overview", href: "/" },
          {
            label: "Open app demo",
            href: publicSiteConfig.webAppDemoUrl,
            variant: "secondary",
            external: true,
          },
          { label: "Open roadmap", href: "/roadmap", variant: "ghost" },
        ]}
        panel={<BusinessFlywheelDiagram />}
        compact
      />
      <section className="section-rule section-pad mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Modeled foundation"
          title="The base case is simple"
          description="Small recurring fees fund the core. Sponsor participation adds upside after the network is real."
          icon={sectionIcons.finance}
        />
        <div className="mt-8 grid gap-4 sm:mt-10 xl:grid-cols-2">
          {projectionAssumptions.map((assumption) => (
            <article
              key={assumption.label}
              className="rounded-[1.35rem] border border-[color:var(--line)] bg-white p-4 sm:rounded-[1.5rem] sm:p-5"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-red)]">
                {assumption.label}
              </p>
              <p className="mt-3 text-[2rem] font-semibold tracking-[-0.05em] text-[color:var(--foreground)] sm:text-3xl">
                {assumption.value}
              </p>
              <p className="mt-3 text-sm leading-6 text-[color:var(--muted-foreground)] sm:leading-7">
                {assumption.note}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="section-rule section-pad mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(300px,1.12fr)] lg:items-start lg:gap-12">
          <div>
            <SectionHeading
              eyebrow="Investor posture"
              title="Clarity matters more than hype"
              description="The strongest story is disciplined: explain the baseline, label the assumptions, and keep sponsor upside separate."
              icon={sectionIcons.business}
            />
            <div className="mt-8 space-y-3">
              {businessSignals.map((signal) => (
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
            slot={mediaLibrary.businessAudio}
            mediaUrl={publicSiteConfig.businessAudioUrl}
          />
        </div>
      </section>
      <section className="section-rule section-pad mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(320px,1.18fr)] lg:items-start lg:gap-12">
          <div>
            <SectionHeading
              eyebrow="FAQ"
              title="A few quick answers"
              description="These are the questions the site should resolve before a live discussion starts."
              icon={sectionIcons.questions}
            />
          </div>
          <div className="rounded-[1.45rem] border border-[color:var(--line)] bg-white px-4 py-3 sm:rounded-[1.75rem] sm:px-6 sm:py-4">
            <Accordion type="single" collapsible>
              {faqItems.map((item) => (
                <AccordionItem key={item.question} value={item.question}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      <section className="section-tail mx-auto max-w-7xl">
        <ContactCta
          eyebrow="Close"
          title="Use the site to create alignment fast"
          description="It is built to give stakeholders and investors the same clear starting point before they open deeper materials."
          demoUrl={publicSiteConfig.webAppDemoUrl}
          dataRoomUrl={publicSiteConfig.dataRoomUrl}
        />
      </section>
    </>
  );
}
