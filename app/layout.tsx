import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { profile } from "@/content/profile";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ogImages = profile.ogImage
  ? [{ url: profile.ogImage, width: 1200, height: 630, alt: profile.name }]
  : [];

export const metadata: Metadata = {
  // ── Titles ────────────────────────────────────────────────────
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.tagline,

  // ── Canonical base URL (required for absolute OG URLs) ────────
  metadataBase: new URL(profile.siteUrl),

  // ── Robots ────────────────────────────────────────────────────
  robots: { index: true, follow: true },

  // ── Authorship ────────────────────────────────────────────────
  authors: [{ name: profile.name }],

  // ── Open Graph (LinkedIn, Facebook, iMessage, Slack…) ─────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: profile.siteUrl,
    siteName: profile.name,
    title: `${profile.name} — ${profile.title}`,
    description: profile.tagline,
    images: ogImages,
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
