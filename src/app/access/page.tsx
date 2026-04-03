import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { LockKeyhole } from "lucide-react";

import { HeroOrbit } from "@/components/site/concept-diagrams";
import { Input } from "@/components/ui/input";
import { siteMeta } from "@/content/site-content";
import {
  ACCESS_COOKIE_NAME,
  DEV_ACCESS_CODE,
} from "@/lib/site-config";
import { unlockSite } from "./actions";
import { SubmitButton } from "./submit-button";

export const metadata: Metadata = {
  title: "Access",
  description: "Private access gate for the Philippine Athletics stakeholder brief.",
};

export default async function AccessPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const query = await searchParams;
  const cookieStore = await cookies();

  if (cookieStore.get(ACCESS_COOKIE_NAME)?.value === "granted") {
    redirect("/");
  }

  const from =
    typeof query.from === "string" && query.from.startsWith("/")
      ? query.from
      : "/";
  const hasError = query.error === "1";

  return (
    <main
      id="main-content"
      className="relative flex min-h-screen items-center justify-center px-6 py-10 md:px-10"
    >
      <div className="grid w-full max-w-6xl gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
        <section className="rounded-[2rem] border border-[color:var(--line)] bg-white p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[color:var(--brand-red)]">
            Private share
          </p>
          <h1 className="mt-5 max-w-xl text-5xl font-semibold leading-[0.92] tracking-[-0.07em] text-[color:var(--foreground)] md:text-6xl">
            {siteMeta.name}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-[color:var(--muted-foreground)] md:text-lg">
            {siteMeta.summary}
          </p>
          <p className="mt-5 max-w-lg border-l border-[color:var(--brand-red)]/24 pl-4 text-sm leading-7 text-[color:var(--foreground)]/78">
            {siteMeta.thesis}
          </p>
          <div className="mt-8">
            <HeroOrbit className="mx-auto max-w-[34rem]" />
          </div>
        </section>
        <section className="flex flex-col justify-between rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-[color:var(--foreground)]">
              <LockKeyhole className="size-4 text-[color:var(--brand-red)]" />
              Access required
            </div>
            <h2 className="mt-6 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-[color:var(--foreground)]">
              Enter the share code
            </h2>
            <p className="mt-4 text-sm leading-7 text-[color:var(--muted-foreground)]">
              This brief is private and intended for stakeholder and investor review.
            </p>
          </div>
          <form action={unlockSite} className="mt-8 space-y-4">
            <input type="hidden" name="from" value={from} />
            <label
              htmlFor="share-code"
              className="block text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]"
            >
              Share code
            </label>
            <Input
              id="share-code"
              name="code"
              type="password"
              placeholder="Enter access code…"
              autoComplete="off"
              spellCheck={false}
              autoCapitalize="none"
              aria-describedby={hasError ? "share-code-error" : "share-code-help"}
              required
            />
            {hasError ? (
              <p
                id="share-code-error"
                aria-live="polite"
                className="text-sm text-[color:var(--brand-red)]"
              >
                That code didn’t match. Check the latest share code and try again.
              </p>
            ) : (
              <p
                id="share-code-help"
                className="text-sm text-[color:var(--muted-foreground)]"
              >
                Use the private code shared with you by the project team.
              </p>
            )}
            {process.env.NODE_ENV === "development" ? (
              <p className="text-xs leading-6 text-[color:var(--muted-foreground)]">
                Development fallback code:{" "}
                <span className="font-medium text-[color:var(--foreground)]">
                  {DEV_ACCESS_CODE}
                </span>
              </p>
            ) : null}
            <SubmitButton />
          </form>
        </section>
      </div>
    </main>
  );
}
