import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { ACCESS_COOKIE_NAME, getExpectedAccessCode } from "@/lib/site-config";

const PUBLIC_FILE = /\.[^/]+$/;

function isPublicPath(pathname: string) {
  return (
    pathname.startsWith("/access") ||
    pathname.startsWith("/_next") ||
    pathname === "/robots.txt" ||
    pathname === "/favicon.ico" ||
    PUBLIC_FILE.test(pathname)
  );
}

export function proxy(request: NextRequest) {
  const expectedCode = getExpectedAccessCode();

  if (!expectedCode || isPublicPath(request.nextUrl.pathname)) {
    const response = NextResponse.next();

    if (expectedCode) {
      response.headers.set("Cache-Control", "private, no-store, max-age=0");
    }

    return response;
  }

  const hasAccess =
    request.cookies.get(ACCESS_COOKIE_NAME)?.value === "granted";

  if (hasAccess) {
    const response = NextResponse.next();
    response.headers.set("Cache-Control", "private, no-store, max-age=0");
    return response;
  }

  const accessUrl = new URL("/access", request.url);
  const returnPath = `${request.nextUrl.pathname}${request.nextUrl.search}`;

  if (returnPath && returnPath !== "/") {
    accessUrl.searchParams.set("from", returnPath);
  }

  const response = NextResponse.redirect(accessUrl);
  response.headers.set("Cache-Control", "private, no-store, max-age=0");
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
