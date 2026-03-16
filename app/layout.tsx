import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
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
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.tagline,
  metadataBase: new URL(profile.siteUrl),
  robots: { index: true, follow: true },
  authors: [{ name: profile.name }],
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
      <body className="bg-white">
        <Sidebar />
        {/* Offset content by sidebar width on desktop; add top padding on mobile for hamburger */}
        <div className="lg:pl-64 min-h-screen flex flex-col">
          <main className="flex-1 pt-16 lg:pt-0">{children}</main>
        </div>
      </body>
    </html>
  );
}
