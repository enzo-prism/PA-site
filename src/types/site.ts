export type SiteMeta = {
  name: string;
  workingName: string;
  thesis: string;
  summary: string;
  privateLabel: string;
};

export type PageConfig = {
  slug: string;
  title: string;
  eyebrow: string;
  intro: string;
  description: string;
  highlight: string;
};

export type MediaSlot = {
  id: string;
  kind: "video" | "audio";
  title: string;
  summary: string;
  duration: string;
  status: "placeholder" | "ready";
  posterLabel: string;
  caption: string;
  transcript: string[];
};

export type MetricStat = {
  label: string;
  value: string;
  context: string;
  emphasis?: "fact" | "forecast";
};

export type StakeholderNarrative = {
  audience: string;
  title: string;
  primaryValue: string;
  detail: string;
  proof: string;
};

export type TimelineItem = {
  phase: string;
  window: string;
  title: string;
  summary: string;
  highlights: string[];
};

export type ProjectionAssumption = {
  label: string;
  value: string;
  note: string;
};

export type NavItem = {
  href: string;
  label: string;
  summary: string;
};

export type FlowStep = {
  label: string;
  title: string;
  description: string;
};

export type PlatformPillar = {
  title: string;
  summary: string;
  detail: string;
};
