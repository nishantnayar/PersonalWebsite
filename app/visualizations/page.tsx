import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import { visualizations } from "@/content/visualizations";
import { profile } from "@/content/profile";

const description = `Data visualization craft — Storytelling with Data makeovers and chart exercises by ${profile.name}.`;

export const metadata: Metadata = {
  title: "Visualizations",
  description,
  alternates: { canonical: "/visualizations" },
  openGraph: {
    title: `Visualizations | ${profile.name}`,
    description,
    url: "/visualizations",
    type: "website",
  },
};

const mutedText = "color-mix(in srgb, var(--color-text) 82%, transparent)";
const light = (pct: number) => `color-mix(in srgb, #f2f2f3 ${pct}%, transparent)`;

const linkStyle: CSSProperties = {
  fontSize: 14,
  fontWeight: 600,
  textDecoration: "none",
  color: "var(--color-accent-700)",
};

export default function VisualizationsPage() {
  return (
    <div className="ind-page">
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 32px 80px" }}>
        {/* Header */}
        <section style={{ padding: "48px 0 40px", borderBottom: "1px solid var(--ind-divider)" }}>
          <span className="ind-kicker" style={{ margin: "0 0 12px" }}>Visualizations</span>
          <h1 className="ind-heading" style={{ fontSize: 42, textTransform: "uppercase", margin: 0, maxWidth: "22ch" }}>
            Making charts say the one thing that matters
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.6, maxWidth: "64ch", margin: "20px 0 0", color: mutedText }}>
            Ongoing practice from the{" "}
            <strong style={{ fontWeight: 600 }}>Storytelling with Data</strong> community — makeovers and exercises
            where the goal is not a prettier chart, but a clearer decision.
          </p>
        </section>

        {/* Gallery */}
        <section className="viz-grid" style={{ padding: "40px 0" }}>
          {visualizations.map((viz, i) => (
            <figure key={viz.title} className="blueprint" style={{ margin: 0, display: "flex", flexDirection: "column" }}>
              {/* Image — charts render uncropped on a light ground (no duotone tint) */}
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  aspectRatio: "16 / 10",
                  background: viz.imageUrl ? "#ffffff" : "var(--color-accent-900)",
                  borderBottom: "1px solid var(--ind-divider)",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                {viz.imageUrl ? (
                  <Image
                    src={viz.imageUrl}
                    alt={viz.title}
                    fill
                    className="object-contain"
                    style={{ padding: 12 }}
                    sizes="(max-width: 720px) 100vw, 1040px"
                    priority={i === 0}
                  />
                ) : (
                  <div style={{ textAlign: "center", padding: 24 }}>
                    <div className="ind-heading" style={{ fontSize: 44, color: "#f2f2f3", lineHeight: 1 }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", marginTop: 8, color: light(60) }}>
                      Chart
                    </div>
                  </div>
                )}
              </div>

              {/* Caption */}
              <figcaption style={{ padding: 24, display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {viz.tools.map((tool) => (
                    <span key={tool} className="ind-tag ind-tag-neutral">{tool}</span>
                  ))}
                  {viz.date && (
                    <span className="ind-tag ind-tag-outline" style={{ marginLeft: "auto" }}>{viz.date}</span>
                  )}
                </div>
                {viz.challenge && (
                  <span className="ind-kicker" style={{ fontSize: 12 }}>{viz.challenge}</span>
                )}
                <h2 className="ind-heading" style={{ fontSize: 22, textTransform: "uppercase", margin: 0 }}>
                  {viz.title}
                </h2>
                <p style={{ fontSize: 15, lineHeight: 1.6, margin: 0, color: mutedText, flex: 1 }}>
                  {viz.takeaway}
                </p>
                {viz.sourceUrl && (
                  <a href={viz.sourceUrl} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    {viz.sourceLabel ?? "View source"} →
                  </a>
                )}
              </figcaption>
            </figure>
          ))}
        </section>
      </div>
    </div>
  );
}
