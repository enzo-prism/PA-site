"use client";

import { motion, useReducedMotion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Building2,
  CalendarDays,
  Handshake,
  ShieldCheck,
  Trophy,
  UserRound,
  Users,
} from "lucide-react";

import { cn } from "@/lib/utils";

type DiagramNodeProps = {
  icon: LucideIcon;
  label: string;
  detail?: string;
  className?: string;
  compact?: boolean;
  delay?: number;
};

function DiagramNode({
  icon: Icon,
  label,
  detail,
  className,
  compact = false,
  delay = 0,
}: DiagramNodeProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "absolute rounded-[1.4rem] border border-[color:var(--line)] bg-white/98 px-4 py-3 shadow-[0_16px_32px_-28px_rgba(15,23,42,0.2)]",
        compact ? "min-w-[9.5rem]" : "min-w-[11rem]",
        className,
      )}
      initial={reducedMotion ? { opacity: 1 } : { opacity: 0.74, y: 8 }}
      whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex size-8 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--surface-subtle)] text-[color:var(--brand-red)]">
          <Icon className="size-4" strokeWidth={1.8} />
        </span>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--foreground)]">
            {label}
          </p>
          {detail ? (
            <p className="mt-1 text-[11px] leading-5 text-[color:var(--muted-foreground)]">
              {detail}
            </p>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}

function RoadmapStageCard({
  step,
  icon: Icon,
  label,
  detail,
  className,
  delay = 0,
}: {
  step: string;
  icon: LucideIcon;
  label: string;
  detail: string;
  className?: string;
  delay?: number;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "absolute rounded-[1.55rem] border border-[color:var(--line)] bg-white/98 px-5 py-4 shadow-[0_18px_36px_-28px_rgba(15,23,42,0.22)]",
        className,
      )}
      initial={reducedMotion ? { opacity: 1 } : { opacity: 0.74, y: 8 }}
      whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-start gap-3">
        <span className="inline-flex min-w-[2.35rem] items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--surface-subtle)] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-red)]">
          {step}
        </span>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="inline-flex size-7 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--surface-subtle)] text-[color:var(--brand-red)]">
              <Icon className="size-3.5" strokeWidth={1.8} />
            </span>
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-[color:var(--foreground)]">
              {label}
            </p>
          </div>
          <p className="mt-2 text-[12px] leading-6 text-[color:var(--muted-foreground)]">
            {detail}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function AnimatedConnector({
  d,
  delay = 0,
}: {
  d: string;
  delay?: number;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <>
      <path
        d={d}
        fill="none"
        stroke="rgba(15,23,42,0.1)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        d={d}
        fill="none"
        stroke="rgba(37,99,235,0.82)"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={
          reducedMotion
            ? { pathLength: 1, opacity: 0.62 }
            : { pathLength: 0.18, opacity: 0.36 }
        }
        whileInView={
          reducedMotion
            ? { pathLength: 1, opacity: 0.62 }
            : { pathLength: 1, opacity: [0.46, 0.88, 0.46] }
        }
        viewport={{ once: true, amount: 0.3 }}
        transition={
          reducedMotion
            ? { duration: 0 }
            : {
                pathLength: { duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] },
                opacity: {
                  duration: 3.1,
                  delay: delay + 0.08,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }
        }
      />
    </>
  );
}

function CoreHalo({
  className,
  label,
  title,
  detail,
}: {
  className?: string;
  label: string;
  title: string;
  detail?: string;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "absolute flex items-center justify-center rounded-[2rem]",
        className,
      )}
    >
      <motion.div
        className="absolute inset-0 rounded-[2.1rem] bg-[color:var(--brand-red)]/7"
        animate={reducedMotion ? undefined : { scale: [1, 1.03, 1], opacity: [0.42, 0.7, 0.42] }}
        transition={{
          duration: 4.2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <div className="relative flex h-full w-full flex-col items-center justify-center rounded-[2rem] border border-[color:var(--line)] bg-white text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-red)]">
          {label}
        </p>
        <p className="mt-2 text-3xl font-semibold tracking-[-0.06em] text-[color:var(--foreground)]">
          {title}
        </p>
        {detail ? (
          <p className="mt-2 max-w-[11rem] text-xs leading-5 text-[color:var(--muted-foreground)]">
            {detail}
          </p>
        ) : null}
      </div>
    </div>
  );
}

function DiagramFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.8rem] border border-[color:var(--line)] bg-[color:var(--surface-subtle)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function HeroOrbit({ className }: { className?: string }) {
  return (
    <DiagramFrame className={cn("aspect-[1.16/1] w-full", className)}>
      <svg viewBox="0 0 620 440" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <rect
          x="18"
          y="18"
          width="584"
          height="404"
          rx="28"
          fill="white"
          stroke="rgba(15,23,42,0.08)"
          strokeWidth="1.5"
        />
        <AnimatedConnector d="M160 222C210 222 222 218 256 218" delay={0.05} />
        <AnimatedConnector d="M362 190C402 168 438 150 486 150" delay={0.3} />
        <AnimatedConnector d="M370 220H492" delay={0.55} />
        <AnimatedConnector d="M362 250C404 276 438 292 486 294" delay={0.8} />
        <path
          d="M276 218C276 174 312 138 356 138"
          fill="none"
          stroke="rgba(15,23,42,0.05)"
          strokeWidth="1.5"
          strokeDasharray="8 10"
        />
        <path
          d="M276 218C276 262 312 298 356 298"
          fill="none"
          stroke="rgba(15,23,42,0.05)"
          strokeWidth="1.5"
          strokeDasharray="8 10"
        />
      </svg>
      <DiagramNode
        className="left-[6%] top-[40%] w-[26%]"
        icon={CalendarDays}
        label="Official results"
        detail="From local, regional, and national meets"
        delay={0.08}
      />
      <CoreHalo
        className="left-[38%] top-[30%] h-[40%] w-[22%]"
        label="Core system"
        title="Verified data"
        detail="The single source of truth"
      />
      <DiagramNode
        className="right-[7%] top-[18%] w-[25%]"
        icon={UserRound}
        label="Athlete profiles"
        detail="PBs, SBs, and competition history"
        compact
        delay={0.2}
      />
      <DiagramNode
        className="right-[5%] top-[43%] w-[25%]"
        icon={Trophy}
        label="National rankings"
        detail="Every event, gender, and age group"
        compact
        delay={0.34}
      />
      <DiagramNode
        className="right-[7%] top-[68%] w-[25%]"
        icon={ShieldCheck}
        label="Trusted directory"
        detail="Clubs and coaches with recognition signals"
        compact
        delay={0.48}
      />
    </DiagramFrame>
  );
}

export function ResultsLoopDiagram({ className }: { className?: string }) {
  return (
    <DiagramFrame className={cn("aspect-[1.28/1] w-full", className)}>
      <svg viewBox="0 0 620 480" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <rect
          x="18"
          y="18"
          width="584"
          height="444"
          rx="28"
          fill="white"
          stroke="rgba(15,23,42,0.08)"
          strokeWidth="1.5"
        />
        <AnimatedConnector d="M198 138H420" delay={0.05} />
        <AnimatedConnector d="M452 170V310" delay={0.28} />
        <AnimatedConnector d="M420 342H198" delay={0.51} />
        <AnimatedConnector d="M166 310V170" delay={0.74} />
      </svg>
      <DiagramNode
        className="left-[9%] top-[12%] w-[27%]"
        icon={CalendarDays}
        label="Upload results"
        detail="CSV or Excel meet files"
        delay={0.08}
      />
      <DiagramNode
        className="right-[9%] top-[12%] w-[27%]"
        icon={BadgeCheck}
        label="Validate data"
        detail="Check athletes, events, and age groups"
        delay={0.22}
      />
      <DiagramNode
        className="right-[9%] bottom-[12%] w-[27%]"
        icon={UserRound}
        label="Update profiles"
        detail="Refresh records and rosters"
        delay={0.36}
      />
      <DiagramNode
        className="left-[9%] bottom-[12%] w-[27%]"
        icon={Trophy}
        label="Publish rankings"
        detail="Keep leaderboards current"
        delay={0.5}
      />
      <CoreHalo
        className="left-[35%] top-[31%] h-[38%] w-[30%]"
        label="Verified loop"
        title="One intake"
        detail="Every verified result updates the platform"
      />
    </DiagramFrame>
  );
}

export function EcosystemHubDiagram({ className }: { className?: string }) {
  return (
    <DiagramFrame className={cn("aspect-square w-full", className)}>
      <svg viewBox="0 0 520 520" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <rect
          x="18"
          y="18"
          width="484"
          height="484"
          rx="32"
          fill="white"
          stroke="rgba(15,23,42,0.08)"
          strokeWidth="1.5"
        />
        <AnimatedConnector d="M206 208C174 170 144 140 106 118" delay={0.05} />
        <AnimatedConnector d="M314 208C344 170 374 138 412 114" delay={0.25} />
        <AnimatedConnector d="M344 264H430" delay={0.45} />
        <AnimatedConnector d="M304 324C338 358 370 386 406 410" delay={0.65} />
        <AnimatedConnector d="M218 324C184 360 150 386 110 412" delay={0.85} />
      </svg>
      <CoreHalo
        className="left-[31%] top-[31%] h-[38%] w-[38%]"
        label="Shared layer"
        title="One trusted system"
        detail="Profiles, rankings, directory, and recognition"
      />
      <DiagramNode
        className="left-[6%] top-[10%] w-[24%]"
        icon={UserRound}
        label="Athletes"
        detail="Get seen"
        compact
        delay={0.08}
      />
      <DiagramNode
        className="right-[6%] top-[9%] w-[24%]"
        icon={BadgeCheck}
        label="Coaches"
        detail="Show credentials"
        compact
        delay={0.18}
      />
      <DiagramNode
        className="right-[3%] top-[42%] w-[24%]"
        icon={Building2}
        label="Clubs"
        detail="Verify programs"
        compact
        delay={0.28}
      />
      <DiagramNode
        className="right-[7%] bottom-[8%] w-[24%]"
        icon={Handshake}
        label="Sponsors"
        detail="Reach members"
        compact
        delay={0.38}
      />
      <DiagramNode
        className="left-[8%] bottom-[9%] w-[24%]"
        icon={ShieldCheck}
        label="Federation"
        detail="Run the sport"
        compact
        delay={0.48}
      />
    </DiagramFrame>
  );
}

export function RoadmapPathDiagram({ className }: { className?: string }) {
  const reducedMotion = useReducedMotion();

  return (
    <DiagramFrame className={cn("aspect-[1.34/0.92] w-full", className)}>
      <svg viewBox="0 0 620 420" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <rect
          x="18"
          y="18"
          width="584"
          height="384"
          rx="28"
          fill="white"
          stroke="rgba(15,23,42,0.08)"
          strokeWidth="1.5"
        />
        <path
          d="M120 238H500"
          fill="none"
          stroke="rgba(15,23,42,0.08)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <AnimatedConnector d="M120 238H290" delay={0.04} />
        <AnimatedConnector d="M290 238H500" delay={0.26} />
        <path
          d="M160 238V172"
          fill="none"
          stroke="rgba(15,23,42,0.08)"
          strokeWidth="1.75"
          strokeDasharray="5 8"
          strokeLinecap="round"
        />
        <path
          d="M310 238V158"
          fill="none"
          stroke="rgba(15,23,42,0.08)"
          strokeWidth="1.75"
          strokeDasharray="5 8"
          strokeLinecap="round"
        />
        <path
          d="M460 238V172"
          fill="none"
          stroke="rgba(15,23,42,0.08)"
          strokeWidth="1.75"
          strokeDasharray="5 8"
          strokeLinecap="round"
        />
        <path
          d="M160 238V292"
          fill="none"
          stroke="rgba(15,23,42,0.08)"
          strokeWidth="1.5"
          strokeDasharray="5 8"
          strokeLinecap="round"
        />
        <path
          d="M310 238V292"
          fill="none"
          stroke="rgba(15,23,42,0.08)"
          strokeWidth="1.5"
          strokeDasharray="5 8"
          strokeLinecap="round"
        />
        <path
          d="M460 238V292"
          fill="none"
          stroke="rgba(15,23,42,0.08)"
          strokeWidth="1.5"
          strokeDasharray="5 8"
          strokeLinecap="round"
        />
        {[160, 310, 460].map((cx, index) => (
          <g key={cx}>
            <motion.circle
              cx={cx}
              cy="238"
              r="22"
              fill="rgba(37,99,235,0.08)"
              initial={reducedMotion ? { opacity: 0.8, scale: 1 } : { opacity: 0.2, scale: 0.86 }}
              whileInView={
                reducedMotion ? { opacity: 0.8, scale: 1 } : { opacity: [0.34, 0.82, 0.34], scale: [0.96, 1.08, 0.96] }
              }
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 2.8,
                delay: 0.18 + index * 0.16,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <circle
              cx={cx}
              cy="238"
              r="9"
              fill="rgba(37,99,235,0.9)"
            />
          </g>
        ))}
      </svg>
      <RoadmapStageCard
        className="left-[8%] top-[12%] w-[28%]"
        step="01"
        icon={CalendarDays}
        label="Pilot"
        detail="Five provinces and field activation"
        delay={0.06}
      />
      <RoadmapStageCard
        className="left-[36%] top-[8%] w-[28%]"
        step="02"
        icon={Users}
        label="Scale"
        detail="Expand after proof"
        delay={0.18}
      />
      <RoadmapStageCard
        className="right-[8%] top-[12%] w-[28%]"
        step="03"
        icon={Handshake}
        label="Sustain"
        detail="Recurring member and club revenue"
        delay={0.3}
      />
      <div className="absolute bottom-[10%] left-[8%] right-[8%] grid gap-3 md:grid-cols-3">
        {[
          "Ground trust",
          "National growth",
          "Financial base",
        ].map((label, index) => (
          <motion.div
            key={label}
            className="rounded-full border border-[color:var(--line)] bg-[color:var(--surface-subtle)] px-4 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--foreground)]"
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0.74, y: 8 }}
            whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.42, delay: 0.38 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {label}
          </motion.div>
        ))}
      </div>
    </DiagramFrame>
  );
}

export function BusinessFlywheelDiagram({ className }: { className?: string }) {
  return (
    <DiagramFrame className={cn("aspect-square w-full", className)}>
      <svg viewBox="0 0 520 520" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <rect
          x="18"
          y="18"
          width="484"
          height="484"
          rx="32"
          fill="white"
          stroke="rgba(15,23,42,0.08)"
          strokeWidth="1.5"
        />
        <AnimatedConnector d="M168 146C212 110 308 110 352 146" delay={0.04} />
        <AnimatedConnector d="M382 196C394 248 366 328 314 366" delay={0.18} />
        <AnimatedConnector d="M206 366C152 330 126 252 140 198" delay={0.32} />
      </svg>
      <DiagramNode
        className="left-[17%] top-[12%] w-[24%]"
        icon={Users}
        label="Youth members"
        detail="Accessible annual base"
        compact
        delay={0.04}
      />
      <DiagramNode
        className="right-[12%] top-[31%] w-[24%]"
        icon={BadgeCheck}
        label="Club certification"
        detail="Recurring trust signal"
        compact
        delay={0.12}
      />
      <DiagramNode
        className="left-[17%] bottom-[12%] w-[24%]"
        icon={Handshake}
        label="Sponsor upside"
        detail="Private sector growth layer"
        compact
        delay={0.2}
      />
      <CoreHalo
        className="left-[32%] top-[31%] h-[38%] w-[36%]"
        label="Outcome"
        title="Self-sustaining"
        detail="A recurring operating base for the platform"
      />
    </DiagramFrame>
  );
}

export function SimpleStakeGrid({
  items,
  className,
}: {
  items: { icon: LucideIcon; title: string; detail: string }[];
  className?: string;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <div className={cn("grid gap-4 md:grid-cols-2 xl:grid-cols-3", className)}>
      {items.map((item, index) => {
        const Icon = item.icon ?? ShieldCheck;

        return (
          <motion.div
            key={item.title}
            className="rounded-[1.5rem] border border-[color:var(--line)] bg-white p-5"
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex size-10 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--surface-subtle)] text-[color:var(--brand-red)]">
              <Icon className="size-4" strokeWidth={1.8} />
            </span>
            <p className="mt-4 text-lg font-medium tracking-[-0.03em] text-[color:var(--foreground)]">
              {item.title}
            </p>
            <p className="mt-2 text-sm leading-7 text-[color:var(--muted-foreground)]">
              {item.detail}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}

export const conceptIcons = {
  athlete: UserRound,
  rankings: Trophy,
  clubs: Users,
  competitions: CalendarDays,
  trust: ShieldCheck,
  sponsors: Handshake,
  programs: Building2,
};
