import type { Metadata } from "next";
import "./globals.css";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageTransition } from "@/components/page-transition";
import { ScrollToHash } from "@/components/scroll-to-hash";

export const metadata: Metadata = {
  title: "Konstanta Education",
  description: "Konstanta Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SiteHeader />
        <ScrollToHash />
        <PageTransition>{children}</PageTransition>
        <SiteFooter />
      </body>
    </html>
  );
}
