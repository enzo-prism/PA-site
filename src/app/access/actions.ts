"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import {
  ACCESS_COOKIE_NAME,
  getExpectedAccessCode,
} from "@/lib/site-config";

function withErrorRedirect(from: string | null) {
  const url = new URLSearchParams({ error: "1" });

  if (from) {
    url.set("from", from);
  }

  redirect(`/access?${url.toString()}`);
}

export async function unlockSite(formData: FormData) {
  const submittedCode = String(formData.get("code") ?? "").trim();
  const from = String(formData.get("from") ?? "").trim() || null;
  const expectedCode = getExpectedAccessCode();

  if (!submittedCode || !expectedCode || submittedCode !== expectedCode) {
    withErrorRedirect(from);
  }

  const cookieStore = await cookies();

  cookieStore.set(ACCESS_COOKIE_NAME, "granted", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12,
  });

  redirect(from || "/");
}
