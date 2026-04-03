import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const metadataBase = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : undefined;

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Philippine Athletics App | Stakeholder Brief",
    template: "%s | Philippine Athletics App",
  },
  description:
    "Private stakeholder and investor brief for the Philippine Athletics App, a national single source of truth for athletics in the Philippines.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only fixed left-4 top-4 z-[100] rounded-full bg-[color:var(--brand-navy)] px-4 py-2 text-sm font-medium text-[color:var(--brand-ivory)] shadow-lg focus:not-sr-only focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-gold)]/70"
        >
          Skip to content
        </a>
        <div className="site-shell flex min-h-screen flex-col">{children}</div>
      </body>
    </html>
  );
}
