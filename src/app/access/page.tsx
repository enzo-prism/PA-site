import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { Input } from "@/components/ui/input";
import {
  ACCESS_COOKIE_NAME,
  DEV_ACCESS_CODE,
} from "@/lib/site-config";
import { unlockSite } from "./actions";
import { SubmitButton } from "./submit-button";

export const metadata: Metadata = {
  title: "Access",
  description: "Private access.",
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
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-10"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.075),transparent_68%)]" />
        <div className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[color:var(--line)]/60" />
      </div>

      <section className="relative w-full max-w-sm">
        <div className="mb-8 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[color:var(--muted-foreground)]">
            Philippine Athletics
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.07em] text-[color:var(--foreground)] sm:text-5xl">
            Enter password
          </h1>
          <p className="mt-3 text-sm text-[color:var(--muted-foreground)]">
            Private brief.
          </p>
        </div>

        <form action={unlockSite} className="space-y-3">
          <input type="hidden" name="from" value={from} />

          <label htmlFor="share-code" className="sr-only">
            Password
          </label>
          <Input
            id="share-code"
            name="code"
            type="password"
            placeholder="Password"
            autoComplete="off"
            spellCheck={false}
            autoCapitalize="none"
            autoFocus
            aria-describedby={hasError ? "share-code-error" : undefined}
            className="h-14 rounded-full bg-white/92 px-5 text-base shadow-[0_18px_40px_rgba(15,23,42,0.06)]"
            required
          />

          {hasError ? (
            <p
              id="share-code-error"
              aria-live="polite"
              className="px-1 text-sm text-[color:var(--brand-red)]"
            >
              Wrong password.
            </p>
          ) : null}

          {process.env.NODE_ENV === "development" ? (
            <p className="px-1 text-xs text-[color:var(--muted-foreground)]">
              Dev code: {DEV_ACCESS_CODE}
            </p>
          ) : null}

          <SubmitButton />
        </form>
      </section>
    </main>
  );
}
