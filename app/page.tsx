import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: profile.tagline,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.tagline,
    url: "/",
    type: "profile",
    firstName: profile.name.split(" ")[0],
    lastName: profile.name.split(" ").slice(1).join(" "),
  },
};

// Industry design-system tokens, scoped to the homepage wrapper so children
// can reference them via var() exactly as the imported design does.
const tokens = {
  "--color-bg": "#f2f2f3",
  "--color-text": "#1d1f20",
  "--color-accent": "#5980a6",
  "--color-accent-600": "#597ea3",
  "--color-accent-700": "#416180",
  "--color-accent-900": "#1d2d3d",
  "--color-divider": "color-mix(in srgb, #1d1f20 16%, transparent)",
  "--font-heading": "var(--font-barlow-condensed)",
  "--font-body": "var(--font-barlow)",
} as CSSProperties;

// Sidebar text is off-white (#f2f2f3) on dark navy; these mix helpers match
// the design's tiered opacities.
const light = (pct: number) => `color-mix(in srgb, #f2f2f3 ${pct}%, transparent)`;

const pillars = [
  { title: "Data to decisions", desc: "Insights into outcomes — and what gets in the way." },
  { title: "Tech to delivery", desc: "Shipping programs stakeholders actually use." },
  { title: "Bridge building", desc: "The unbudgeted work that decides everything else." },
];

const headingFont: CSSProperties = { fontFamily: "var(--font-heading)", fontWeight: 600 };

export default function HomePage() {
  const { name, title, location, avatarUrl, stats, skills, social, linkedInPosts, currently, education } = profile;

  const footerLinks = [
    { href: social.github, label: "GitHub" },
    { href: (social as Record<string, string | null>).medium ?? null, label: "Medium" },
    { href: social.email ? `mailto:${social.email}` : null, label: "Email" },
  ].filter((l): l is { href: string; label: string } => Boolean(l.href));

  return (
    <div
      className="home-grid"
      style={{
        ...tokens,
        background: "var(--color-bg)",
        color: "var(--color-text)",
        fontFamily: "var(--font-body)",
      }}
    >
      {/* ── Sidebar ─────────────────────────────────────────────── */}
      <aside
        className="home-aside"
        style={{
          background: "var(--color-accent-900)",
          color: "#f2f2f3",
          padding: "36px 28px",
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        {avatarUrl && (
          <div style={{ position: "relative", width: "100%", paddingBottom: "100%", height: 0, overflow: "hidden", flex: "none" }}>
            <Image src={avatarUrl} alt={name} fill className="object-cover object-top" sizes="340px" priority />
          </div>
        )}

        <div>
          <h1 style={{ ...headingFont, fontSize: 26, textTransform: "uppercase", margin: "0 0 4px", color: "#f2f2f3" }}>
            {name}
          </h1>
          <p style={{ fontSize: 13, margin: 0, color: light(75) }}>{title}</p>
          {location && (
            <p style={{ fontSize: 12, margin: "6px 0 0", letterSpacing: ".06em", textTransform: "uppercase", color: light(60) }}>
              {location}
            </p>
          )}
        </div>

        <nav style={{ display: "flex", gap: 16, fontSize: 13 }}>
          <Link href="/blog" style={{ color: "#f2f2f3" }}>Writing</Link>
          <Link href="/portfolio" style={{ color: "#f2f2f3" }}>Projects</Link>
          <Link href="/visualizations" style={{ color: "#f2f2f3" }}>Visualizations</Link>
          {social.linkedin && (
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "#f2f2f3" }}>
              Connect
            </a>
          )}
        </nav>

        <hr style={{ height: 1, border: 0, background: light(20), margin: 0 }} />

        {stats && stats.length > 0 && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div style={{ ...headingFont, fontSize: 24, color: "#f2f2f3" }}>{value}</div>
                <div style={{ fontSize: 11, color: light(70), marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </div>
        )}

        {skills.length > 0 && (
          <>
            <hr style={{ height: 1, border: 0, background: light(20), margin: 0 }} />
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    fontSize: 11,
                    letterSpacing: ".02em",
                    padding: "3px 10px",
                    border: `1px solid ${light(40)}`,
                    color: "#f2f2f3",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </>
        )}

        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 8 }}>
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...headingFont,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                fontSize: 14,
                padding: "9px 15px",
                background: "var(--color-accent)",
                color: "var(--color-bg)",
                border: "1px solid var(--color-accent)",
                textDecoration: "none",
              }}
            >
              Connect on LinkedIn
            </a>
          )}
          {footerLinks.length > 0 && (
            <div style={{ display: "flex", gap: 14, fontSize: 12, color: light(75) }}>
              {footerLinks.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{ color: "inherit" }}
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </div>
      </aside>

      {/* ── Main column ─────────────────────────────────────────── */}
      <div className="home-main" style={{ padding: "56px 56px 32px", maxWidth: 900 }}>
        <span style={{ display: "block", fontSize: 13, letterSpacing: ".08em", textTransform: "uppercase", fontWeight: 600, color: "var(--color-accent-700)", margin: "0 0 10px" }}>
          Data · Technology · Business
        </span>
        <h2 className="home-hero" style={{ ...headingFont, fontSize: 44, lineHeight: 1.15, textTransform: "uppercase", margin: "0 0 18px" }}>
          Most people in data science came from computer science.{" "}
          <em style={{ fontStyle: "italic", color: "var(--color-accent-700)" }}>I came from finance.</em>
        </h2>
        <p style={{ fontSize: 16.5, lineHeight: 1.6, maxWidth: "62ch", margin: "0 0 36px", color: "color-mix(in srgb, var(--color-text) 82%, transparent)" }}>
          That difference changed everything about how I approach a problem. I spent 10 years sitting between technical teams and business teams — learning{" "}
          <em style={{ fontStyle: "italic", color: "var(--color-accent-700)" }}>what gets lost in translation, and how to close the gap.</em>
        </p>

        <hr style={{ height: 1, border: 0, background: "var(--color-divider)", margin: "0 0 28px" }} />
        <p style={{ fontSize: 15.5, lineHeight: 1.6, margin: "0 0 16px" }}>
          I am a Lead Solutions Analyst at JPMorgan Chase. Before this, I spent a decade moving between investment banking, asset management, and commercial banking — across Bangalore, Tokyo, London, New York, Boston, and Chicago.
        </p>
        <blockquote style={{ ...headingFont, fontSize: 21, lineHeight: 1.4, margin: "22px 0", paddingLeft: 16, borderLeft: "2px solid var(--color-accent)", color: "var(--color-accent-700)" }}>
          &ldquo;I know what the business is actually asking for before the first line of code gets written.&rdquo;
        </blockquote>
        <p style={{ fontSize: 15.5, lineHeight: 1.6, margin: "0 0 16px" }}>
          Most data scientists learn their craft in one direction: start with a model, work toward a business. I learned it from the other end. Finance first.{" "}
          <em style={{ fontStyle: "italic", color: "var(--color-accent-700)" }}>That means I learned to frame problems before solving them</em> — which turns out to be the part most projects get wrong.
        </p>
        <p style={{ fontSize: 15.5, lineHeight: 1.6, margin: "0 0 36px" }}>
          My job at JPMorgan Chase is to take complex technical programs and make them land — translating between engineers, data scientists, and the people who sign off on the work. I write about what I keep seeing in that space.
        </p>

        {currently && (
          <>
            <span style={{ display: "block", fontSize: 13, letterSpacing: ".08em", textTransform: "uppercase", fontWeight: 600, color: "var(--color-accent-700)", margin: "0 0 14px" }}>
              Now
            </span>
            <p style={{ fontSize: 15, lineHeight: 1.6, margin: "0 0 36px", color: "color-mix(in srgb, var(--color-text) 82%, transparent)" }}>
              {currently}
            </p>
          </>
        )}

        {education.length > 0 && (
          <>
            <span style={{ display: "block", fontSize: 13, letterSpacing: ".08em", textTransform: "uppercase", fontWeight: 600, color: "var(--color-accent-700)", margin: "0 0 14px" }}>
              Education
            </span>
            <div style={{ display: "flex", flexDirection: "column", marginBottom: 40 }}>
              {education.map((edu, i) => (
                <div
                  key={edu.degree}
                  style={{
                    display: "flex",
                    gap: 20,
                    alignItems: "center",
                    padding: "16px 0",
                    borderBottom: i < education.length - 1 ? "1px solid var(--color-divider)" : undefined,
                  }}
                >
                  {edu.logoUrl ? (
                    <Image src={edu.logoUrl} alt={edu.institution} width={56} height={56} style={{ flex: "none", objectFit: "contain" }} />
                  ) : (
                    <div style={{ ...headingFont, width: 56, height: 56, flex: "none", display: "grid", placeItems: "center", background: edu.color, color: "#fff", fontSize: 15 }}>
                      {edu.abbreviation}
                    </div>
                  )}
                  <div>
                    <div style={{ ...headingFont, fontSize: 18, textTransform: "uppercase" }}>{edu.degree}</div>
                    <div style={{ fontSize: 14, color: "color-mix(in srgb, var(--color-text) 78%, transparent)", marginTop: 2 }}>{edu.institution}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        <span style={{ display: "block", fontSize: 13, letterSpacing: ".08em", textTransform: "uppercase", fontWeight: 600, color: "var(--color-accent-700)", margin: "0 0 14px" }}>
          What I write about
        </span>
        <div className="home-pillars" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 40 }}>
          {pillars.map((p) => (
            <div key={p.title} style={{ padding: 18 }}>
              <h3 style={{ ...headingFont, fontSize: 16, textTransform: "uppercase", margin: "0 0 6px" }}>{p.title}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.5, margin: 0, color: "color-mix(in srgb, var(--color-text) 78%, transparent)" }}>{p.desc}</p>
            </div>
          ))}
        </div>

        {linkedInPosts.length > 0 && (
          <>
            <span style={{ display: "block", fontSize: 13, letterSpacing: ".08em", textTransform: "uppercase", fontWeight: 600, color: "var(--color-accent-700)", margin: "0 0 14px" }}>
              Writing
            </span>
            <div className="home-writing" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 44 }}>
              {linkedInPosts.map((post) => (
                <div key={post.url} style={{ display: "flex", flexDirection: "column", gap: 7, padding: 18, border: "1px solid var(--color-divider)" }}>
                  <div style={{ fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--color-accent)" }}>{post.label}</div>
                  <div style={{ ...headingFont, fontSize: 16, lineHeight: 1.2 }}>{post.title}</div>
                  <a href={post.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13.5, fontWeight: 600, textDecoration: "none", color: "var(--color-accent-700)", marginTop: "auto" }}>
                    Read on LinkedIn →
                  </a>
                </div>
              ))}
            </div>
          </>
        )}

        <section style={{ padding: "8px 0 32px", borderTop: "1px solid var(--color-divider)" }}>
          <h3 style={{ ...headingFont, fontSize: 24, textTransform: "uppercase", margin: "28px 0 8px" }}>Open to conversations</h3>
          <p style={{ fontSize: 15, lineHeight: 1.6, maxWidth: "60ch", margin: "0 0 20px", color: "color-mix(in srgb, var(--color-text) 82%, transparent)" }}>
            If you work at the intersection of data and business — or are trying to figure out how to get there — reach out. Always happy to think through a problem.
          </p>
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...headingFont,
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 14,
                padding: "9px 15px",
                background: "var(--color-accent)",
                color: "var(--color-bg)",
                border: "1px solid var(--color-accent)",
                textDecoration: "none",
              }}
            >
              Connect on LinkedIn →
            </a>
          )}
        </section>

        <footer style={{ padding: "20px 0", borderTop: "1px solid var(--color-divider)", fontSize: 12.5, color: "color-mix(in srgb, var(--color-text) 70%, transparent)" }}>
          © {new Date().getFullYear()} {name}
        </footer>
      </div>
    </div>
  );
}
