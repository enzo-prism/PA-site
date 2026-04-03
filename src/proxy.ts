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
    return NextResponse.next();
  }

  const hasAccess =
    request.cookies.get(ACCESS_COOKIE_NAME)?.value === "granted";

  if (hasAccess) {
    return NextResponse.next();
  }

  const accessUrl = new URL("/access", request.url);
  const returnPath = `${request.nextUrl.pathname}${request.nextUrl.search}`;

  if (returnPath && returnPath !== "/") {
    accessUrl.searchParams.set("from", returnPath);
  }

  return NextResponse.redirect(accessUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
