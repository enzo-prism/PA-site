import type {
  FlowStep,
  MediaSlot,
  MetricStat,
  NavItem,
  PageConfig,
  PlatformPillar,
  ProjectionAssumption,
  SiteMeta,
  StakeholderNarrative,
  TimelineItem,
} from "@/types/site";

export const siteMeta: SiteMeta = {
  name: "Philippine Athletics App",
  workingName: "Philippine Athletics",
  thesis: "See talent. Trust programs. Grow the sport.",
  summary:
    "One verified system for athlete records, rankings, clubs, coaches, and competitions.",
  privateLabel: "Private stakeholder and investor brief",
};

export const navItems: NavItem[] = [
  { href: "/", label: "Overview", summary: "What it is." },
  { href: "/platform", label: "Platform", summary: "How it works." },
  { href: "/ecosystem", label: "Ecosystem", summary: "Who it helps." },
  { href: "/roadmap", label: "Roadmap", summary: "How it rolls out." },
  { href: "/business", label: "Business", summary: "Why it can sustain itself." },
];

export const pageConfigs: Record<string, PageConfig> = {
  overview: {
    slug: "/",
    title: "Verified athletics data for the Philippines",
    eyebrow: "Private brief",
    intro: "One national source of truth for results, profiles, rankings, and trust.",
    description:
      "Overview of the Philippine Athletics App, the digital single source of truth for athletics in the Philippines.",
    highlight: "Built so talent from any province can be seen.",
  },
  platform: {
    slug: "/platform",
    title: "One meet upload powers the whole platform",
    eyebrow: "Platform",
    intro: "Every official result feeds the same loop.",
    description:
      "Platform view covering athlete passports, rankings, directory, competition management, and trust verification.",
    highlight: "Simple input. Verified output.",
  },
  ecosystem: {
    slug: "/ecosystem",
    title: "One data layer. Five clear wins.",
    eyebrow: "Ecosystem",
    intro: "Athletes, coaches, clubs, sponsors, and federations all get value from the same verified system.",
    description:
      "How Philippine Athletics creates value across athletes, coaches, clubs, sponsors, and governing bodies.",
    highlight: "Trust gets stronger when everyone uses the same source.",
  },
  roadmap: {
    slug: "/roadmap",
    title: "Pilot first. Scale second. Sustain third.",
    eyebrow: "Roadmap",
    intro: "The rollout starts on the ground, not just on the screen.",
    description:
      "Three-phase launch plan covering pilot provinces, national scaling, and financial independence.",
    highlight: "Field trust comes before national standardization.",
  },
  business: {
    slug: "/business",
    title: "Small annual fees build the base. Sponsors add upside.",
    eyebrow: "Business",
    intro: "The model is designed to fund the system without depending only on grants.",
    description:
      "Revenue model, assumptions, and investor-facing sustainability narrative for Philippine Athletics.",
    highlight: "Forecasts are modeled, not presented as booked revenue.",
  },
};

export const overviewMetrics: MetricStat[] = [
  {
    label: "Phase 1 youth target",
    value: "230k",
    context: "Target youth members in the first rollout.",
  },
  {
    label: "Certified clubs and coaches",
    value: "2,500–3,000",
    context: "Addressable network for verified programs and staff.",
  },
  {
    label: "Pilot implementation footprint",
    value: "5 provinces",
    context: "Initial activation across the country.",
  },
  {
    label: "Modeled annual baseline",
    value: "$2.3M–$3M",
    context: "Projected from memberships and certifications.",
    emphasis: "forecast",
  },
];

export const platformPillars: PlatformPillar[] = [
  {
    title: "Athlete passport",
    summary: "A verified digital athletic resume.",
    detail: "PBs, SBs, and meet history live in one trusted profile.",
  },
  {
    title: "National rankings engine",
    summary: "Automatic leaderboards by event, gender, and age group.",
    detail: "Rankings refresh from official results, not informal lists.",
  },
  {
    title: "Club and coach directory",
    summary: "A searchable map of legitimate programs.",
    detail: "Profiles show rosters, certifications, and SafeSport status.",
  },
  {
    title: "Competition operations",
    summary: "A single path from meet files to public results.",
    detail: "Uploads, validation, and publishing happen in one workflow.",
  },
];

export const resultsFlow: FlowStep[] = [
  { label: "01", title: "Upload", description: "CSV or Excel meet files enter one intake portal." },
  { label: "02", title: "Validate", description: "Athletes, events, and age groups are checked and mapped." },
  { label: "03", title: "Update", description: "Profiles, rosters, and history refresh automatically." },
  { label: "04", title: "Publish", description: "Rankings and trust signals stay current." },
];

export const stakeholderNarratives: StakeholderNarrative[] = [
  {
    audience: "Athletes",
    title: "Get seen from anywhere",
    primaryValue: "Verified results travel farther than geography.",
    detail: "Athletes outside Manila become visible to recruiters and national coaches.",
    proof: "Profiles, PBs, SBs, and rankings in one record.",
  },
  {
    audience: "Coaches",
    title: "Be recognized clearly",
    primaryValue: "Coaches gain visible credentials and safer program signals.",
    detail: "Recognition, SafeSport status, and rosters make legitimacy easy to scan.",
    proof: "Coach profile plus certification layer.",
  },
  {
    audience: "Clubs",
    title: "Operate like real programs",
    primaryValue: "Clubs move from informal groups to trusted organizations.",
    detail: "Verified rosters and certification make club quality easier to understand.",
    proof: "Club pages with trust badges and athletes.",
  },
  {
    audience: "Sponsors",
    title: "Reach a real athletics community",
    primaryValue: "Sponsors get measurable access to a structured audience.",
    detail: "The story shifts from charity to accountable, targeted reach.",
    proof: "Members, clubs, and event-linked visibility.",
  },
  {
    audience: "Governing bodies",
    title: "Run the sport from one source",
    primaryValue: "Institutions get a shared operational layer instead of fragmented records.",
    detail: "Results, badges, and directories become easier to manage and trust.",
    proof: "Central intake, rankings governance, and recognition signals.",
  },
];

export const rolloutTimeline: TimelineItem[] = [
  {
    phase: "Phase 1",
    window: "Immediate",
    title: "Pilot",
    summary: "Launch in five provinces with field teams, clinics, and local coordination.",
    highlights: [
      "Fund travel, Wi-Fi, and local activation.",
      "Build face-to-face trust with schools and LGUs.",
      "Register youth members and establish results flow.",
    ],
  },
  {
    phase: "Phase 2",
    window: "After proof",
    title: "Scale",
    summary: "Use pilot traction to attract more regions and open the system wider.",
    highlights: [
      "Expand beyond pilot provinces.",
      "Open to adult athletes and existing clubs.",
      "Standardize results intake nationally.",
    ],
  },
  {
    phase: "Phase 3",
    window: "Long-term",
    title: "Sustain",
    summary: "Turn participation and certification into a recurring operating base.",
    highlights: [
      "Introduce youth memberships.",
      "Roll out annual club certification.",
      "Add sponsor and partner upside.",
    ],
  },
];

export const projectionAssumptions: ProjectionAssumption[] = [
  {
    label: "Youth membership",
    value: "~$5/year",
    note: "Designed to stay accessible while still building annual revenue at scale.",
  },
  {
    label: "Club certification",
    value: "$600–$1,000/year",
    note: "Reflects legitimacy, visibility, and trust signaling for formal programs.",
  },
  {
    label: "Annual baseline",
    value: "$2.3M–$3M",
    note: "Modeled from membership and certification assumptions. This is forecast, not booked revenue.",
  },
  {
    label: "Sponsor upside",
    value: "Additional layer",
    note: "Private sector support sits on top of the core member and club engine.",
  },
];

export const mediaLibrary: Record<string, MediaSlot> = {
  overviewVideo: {
    id: "overviewVideo",
    kind: "video",
    title: "Why this platform matters",
    summary: "A short visual explainer for stakeholders who need the big picture fast.",
    duration: "02:20",
    status: "placeholder",
    posterLabel: "Overview video placeholder",
    caption: "Swap this for the polished stakeholder video once it is ready.",
    transcript: [
      "Philippine Athletics creates one verified source for results, rankings, and trust.",
      "That gives athletes visibility, clubs legitimacy, and institutions better coordination.",
      "The goal is a fairer and more professional athletics system.",
    ],
  },
  platformAudio: {
    id: "platformAudio",
    kind: "audio",
    title: "How the results loop works",
    summary: "A narrated walkthrough of the intake, validation, and publishing loop.",
    duration: "01:45",
    status: "placeholder",
    posterLabel: "Audio narration placeholder",
    caption: "Ideal for a quick walkthrough of the data engine.",
    transcript: [
      "Every official result enters one structured intake portal.",
      "The system validates and maps the data before anything goes public.",
      "That is what keeps profiles and rankings trustworthy.",
    ],
  },
  ecosystemAudio: {
    id: "ecosystemAudio",
    kind: "audio",
    title: "Who wins from the platform",
    summary: "A quick narrative on why the same data layer helps the whole ecosystem.",
    duration: "01:30",
    status: "placeholder",
    posterLabel: "Ecosystem audio placeholder",
    caption: "Useful for a short stakeholder voiceover.",
    transcript: [
      "Athletes get visibility.",
      "Coaches and clubs get trust signals.",
      "Sponsors and federations get a clearer system to support.",
    ],
  },
  businessAudio: {
    id: "businessAudio",
    kind: "audio",
    title: "Why the model can sustain itself",
    summary: "A short explanation of the recurring base and sponsor upside.",
    duration: "01:20",
    status: "placeholder",
    posterLabel: "Business audio placeholder",
    caption: "A simple founder-style explanation of the business logic.",
    transcript: [
      "The model is built around accessible memberships and annual certification.",
      "That creates a recurring baseline before sponsor revenue is added.",
      "The goal is infrastructure that can keep operating and improving.",
    ],
  },
};

export const businessSignals = [
  "Forecasts are clearly labeled.",
  "The system is framed as infrastructure.",
  "Sponsor value is measurable, not charitable.",
];

export const faqItems = [
  {
    question: "Why start with youth first?",
    answer:
      "Because the grassroots layer creates the deepest long-term value and the largest verified member base.",
  },
  {
    question: "Are the revenue figures current?",
    answer:
      "No. They are modeled projections based on the membership and certification assumptions described in the materials.",
  },
  {
    question: "What makes the platform defensible?",
    answer:
      "Verified data, institutional trust, and network effects across athletes, clubs, coaches, and governing bodies.",
  },
];
