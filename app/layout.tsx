import type { Metadata } from "next";
import { Lora, DM_Sans, Playfair_Display, DM_Mono, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChromeGate from "@/components/ChromeGate";
import { profile } from "@/content/profile";
import { Analytics } from "@vercel/analytics/next";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
  weight: ["400", "500"],
});

// Industry design-system fonts — used by the redesigned homepage.
const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
  weight: ["400", "500", "700"],
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
  weight: ["400", "600"],
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
    <html lang="en" className={`${lora.variable} ${dmSans.variable} ${playfair.variable} ${dmMono.variable} ${barlow.variable} ${barlowCondensed.variable}`}>
      <body className="text-ink font-sans font-light antialiased">
        <ChromeGate>
          <Nav />
        </ChromeGate>
        <main>{children}</main>
        <ChromeGate>
          <Footer />
        </ChromeGate>
        <Analytics />
      </body>
    </html>
  );
}
