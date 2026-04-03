import { Play, Volume2 } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { MediaSlot } from "@/types/site";

type MediaFeatureProps = {
  slot: MediaSlot;
  mediaUrl?: string;
  posterUrl?: string;
};

export function MediaFeature({
  slot,
  mediaUrl,
  posterUrl,
}: MediaFeatureProps) {
  const hasAsset = Boolean(mediaUrl);

  return (
    <div className="grid gap-6 rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.9fr)]">
      <div className="overflow-hidden rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--surface-subtle)]">
        {slot.kind === "video" && hasAsset ? (
          <video
            className="h-full min-h-[260px] w-full object-cover"
            controls
            preload="metadata"
            poster={posterUrl}
          >
            <source src={mediaUrl} />
          </video>
        ) : null}
        {slot.kind === "audio" && hasAsset ? (
          <div className="flex min-h-[260px] flex-col justify-between p-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--brand-red)]">
                Audio narration
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[color:var(--foreground)]">
                {slot.title}
              </h3>
            </div>
            <audio className="mt-8 w-full" controls preload="metadata">
              <source src={mediaUrl} />
            </audio>
          </div>
        ) : null}
        {!hasAsset ? (
          <div className="flex min-h-[260px] flex-col justify-between p-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--foreground)]">
                {slot.kind === "video" ? (
                  <Play className="size-3 text-[color:var(--brand-red)]" />
                ) : (
                  <Volume2 className="size-3 text-[color:var(--brand-red)]" />
                )}
                {slot.kind === "video" ? "Video placeholder" : "Audio placeholder"}
              </div>
              <h3 className="mt-6 max-w-md text-3xl font-semibold leading-tight tracking-[-0.05em] text-[color:var(--foreground)]">
                {slot.title}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-[color:var(--muted-foreground)]">
                {slot.caption}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Easy to share", "Easy to narrate", "Easy to replace"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[color:var(--line)] bg-white px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </div>
      <div className="flex flex-col justify-between gap-6">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-red)]">
            {slot.kind === "video" ? "Explainer slot" : "Narration slot"}
          </p>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[color:var(--foreground)]">
            {slot.title}
          </h3>
          <p className="mt-4 text-base leading-7 text-[color:var(--muted-foreground)]">
            {slot.summary}
          </p>
        </div>
        <div className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--surface-subtle)] p-5">
          <div className="flex items-center justify-between gap-4">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">
              Runtime
            </p>
            <p className="text-sm font-medium text-[color:var(--foreground)]">
              {slot.duration}
            </p>
          </div>
          <div className="mt-3 flex items-center justify-between gap-4">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">
              Status
            </p>
            <p className="rounded-full border border-[color:var(--line)] bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[color:var(--foreground)]">
              {slot.status === "ready" ? "Ready" : "Placeholder"}
            </p>
          </div>
          <Accordion type="single" collapsible className="mt-5">
            <AccordionItem value="transcript">
              <AccordionTrigger>Transcript preview</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3">
                  {slot.transcript.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
