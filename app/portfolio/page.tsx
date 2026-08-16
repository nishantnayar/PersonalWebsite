import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import { projects } from "@/content/portfolio";
import { profile } from "@/content/profile";

const description = `A selection of projects designed and built by ${profile.name}, ${profile.title}.`;

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: `Projects | ${profile.name}`,
    description,
    url: "/portfolio",
    type: "website",
  },
};

const mutedText = "color-mix(in srgb, var(--color-text) 82%, transparent)";
const light = (pct: number) => `color-mix(in srgb, #f2f2f3 ${pct}%, transparent)`;

export default function ProjectsPage() {
  return (
    <div className="ind-page">
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 32px 80px" }}>
        {/* Header */}
        <section style={{ padding: "48px 0 40px", borderBottom: "1px solid var(--ind-divider)" }}>
          <span className="ind-kicker" style={{ margin: "0 0 12px" }}>Projects</span>
          <h1 className="ind-heading" style={{ fontSize: 42, textTransform: "uppercase", margin: 0, maxWidth: "22ch" }}>
            Work at the intersection of data and decisions
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.6, maxWidth: "64ch", margin: "20px 0 0", color: mutedText }}>
            Applied work on explainability, governance, and the translation problem between technical and business teams.
          </p>
        </section>

        {/* Project cards */}
        <section style={{ padding: "40px 0", display: "flex", flexDirection: "column", gap: 32 }}>
          {projects.map((project, i) => {
            const primary = project.liveUrl
              ? { href: project.liveUrl, label: "View live →" }
              : null;

            return (
              <div
                key={project.title}
                className="blueprint ind-split"
                style={{ position: "relative", display: "grid", gridTemplateColumns: "minmax(0,5fr) minmax(0,7fr)" }}
              >
                {/* Cover */}
                <div
                  className={project.imageUrl ? "duotone" : undefined}
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRight: "1px solid var(--ind-divider)",
                    minHeight: 280,
                    background: "var(--color-accent-900)",
                    display: "grid",
                    placeItems: project.imageUrl ? undefined : "center",
                  }}
                >
                  {project.imageUrl ? (
                    <Image src={project.imageUrl} alt={project.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, 450px" />
                  ) : (
                    <div style={{ textAlign: "center", padding: 24 }}>
                      <div className="ind-heading" style={{ fontSize: 48, color: "#f2f2f3", lineHeight: 1 }}>
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", marginTop: 8, color: light(60) }}>
                        Case study
                      </div>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div style={{ padding: 32 }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
                    {project.tags[0] && <span className="ind-tag ind-tag-accent">{project.tags[0]}</span>}
                    {project.status && <span className="ind-tag ind-tag-neutral">{project.status}</span>}
                  </div>
                  <h2 className="ind-heading" style={{ fontSize: 26, textTransform: "uppercase", margin: "0 0 12px" }}>
                    {project.title}
                  </h2>
                  <p style={{ fontSize: 15, lineHeight: 1.6, margin: "0 0 20px", color: mutedText }}>
                    {project.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
                    {primary && (
                      <a href={primary.href} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                        {primary.label}
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                        View code on GitHub →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* CTA */}
        <section style={{ padding: "8px 0 8px", textAlign: "center", borderTop: "1px solid var(--ind-divider)" }}>
          <p style={{ fontSize: 14, color: "color-mix(in srgb, var(--color-text) 70%, transparent)", margin: "24px 0 16px" }}>
            More case studies in progress.
          </p>
          {profile.social.github && (
            <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="ind-btn ind-btn-secondary">
              View code on GitHub →
            </a>
          )}
        </section>
      </div>
    </div>
  );
}

const linkStyle: CSSProperties = {
  fontSize: 14,
  fontWeight: 600,
  textDecoration: "none",
  color: "var(--color-accent-700)",
};
