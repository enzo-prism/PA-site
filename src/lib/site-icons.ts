import {
  BadgeCheck,
  Building2,
  CalendarDays,
  Compass,
  Handshake,
  IdCard,
  Landmark,
  LayoutGrid,
  MapPinned,
  Network,
  Route,
  ShieldCheck,
  Sprout,
  Target,
  Telescope,
  TrendingUp,
  Trophy,
  UserRound,
  Users,
  Waypoints,
  type LucideIcon,
} from "lucide-react";

export const sectionIcons = {
  overview: Compass,
  platform: LayoutGrid,
  ecosystem: Network,
  roadmap: Route,
  business: TrendingUp,
  operatingLoop: Waypoints,
  visibility: Telescope,
  trust: ShieldCheck,
  finance: TrendingUp,
  questions: BadgeCheck,
} satisfies Record<string, LucideIcon>;

export function getNavIcon(href: string): LucideIcon {
  switch (href) {
    case "/":
      return Compass;
    case "/platform":
      return LayoutGrid;
    case "/ecosystem":
      return Network;
    case "/roadmap":
      return Route;
    case "/business":
      return TrendingUp;
    default:
      return Compass;
  }
}

export function getMetricIcon(label: string): LucideIcon {
  if (label.includes("Phase 1")) return Target;
  if (label.includes("Certified clubs")) return BadgeCheck;
  if (label.includes("Pilot implementation")) return MapPinned;
  if (label.includes("Modeled annual")) return TrendingUp;
  return Compass;
}

export function getPlatformIcon(title: string): LucideIcon {
  if (title.includes("Athlete")) return IdCard;
  if (title.includes("Rankings")) return Trophy;
  if (title.includes("Club") || title.includes("coach")) return Users;
  if (title.includes("Competition")) return CalendarDays;
  return LayoutGrid;
}

export function getAudienceIcon(audience: string): LucideIcon {
  switch (audience) {
    case "Athletes":
      return UserRound;
    case "Coaches":
      return BadgeCheck;
    case "Clubs":
      return Building2;
    case "Sponsors":
      return Handshake;
    case "Governing bodies":
      return Landmark;
    default:
      return Network;
  }
}

export function getTimelineIcon(phase: string): LucideIcon {
  switch (phase) {
    case "Phase 1":
      return Sprout;
    case "Phase 2":
      return Waypoints;
    case "Phase 3":
      return TrendingUp;
    default:
      return Route;
  }
}

export function getCalloutIcon(item: string): LucideIcon {
  const value = item.toLowerCase();

  if (value.includes("passport")) return IdCard;
  if (value.includes("rank")) return Trophy;
  if (value.includes("safesport") || value.includes("trust")) return ShieldCheck;
  if (value.includes("pipeline") || value.includes("school")) return Telescope;
  if (value.includes("field") || value.includes("lgu")) return MapPinned;
  if (value.includes("registration")) return BadgeCheck;
  if (value.includes("national") || value.includes("scaling")) return Waypoints;
  if (value.includes("business") || value.includes("funding")) return TrendingUp;
  return LayoutGrid;
}
