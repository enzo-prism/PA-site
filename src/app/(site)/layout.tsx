import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { navItems } from "@/content/site-content";
import { publicSiteConfig } from "@/lib/site-config";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteHeader
        navItems={navItems}
        dataRoomUrl={publicSiteConfig.dataRoomUrl}
      />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
