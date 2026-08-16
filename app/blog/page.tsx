import type { Metadata } from "next";
import { profile } from "@/content/profile";

const description = `Writing by ${profile.name} on data, technology, and business.`;

export const metadata: Metadata = {
  title: "Writing",
  description,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `Writing | ${profile.name}`,
    description,
    url: "/blog",
    type: "website",
  },
};

const mutedText = "color-mix(in srgb, var(--color-text) 82%, transparent)";

// Labels look like "Most read · March 2026" or just "April 2026" — split the
// status from the date so each becomes its own tag, matching the design.
function splitLabel(label: string): { status: string | null; date: string } {
  const parts = label.split("·").map((s) => s.trim());
  if (parts.length >= 2) return { status: parts[0], date: parts.slice(1).join(" · ") };
  return { status: null, date: parts[0] };
}

export default function WritingPage() {
  const { linkedInPosts, social } = profile;

  return (
    <div className="ind-page">
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 32px 80px" }}>
        {/* Header */}
        <section style={{ padding: "48px 0 40px", borderBottom: "1px solid var(--ind-divider)" }}>
          <span className="ind-kicker" style={{ margin: "0 0 12px" }}>Writing</span>
          <h1 className="ind-heading" style={{ fontSize: 42, textTransform: "uppercase", margin: 0, maxWidth: "22ch" }}>
            Where data, technology, and business meet
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.6, maxWidth: "64ch", margin: "20px 0 0", color: mutedText }}>
            I write on LinkedIn about the patterns I keep seeing at the intersection of data, technology, and business.{" "}
            <strong style={{ fontWeight: 600 }}>
              If you are early in your career trying to figure out how these fields fit together, or a senior professional
              who has felt the translation problem yourself,
            </strong>{" "}
            the writing is for you.
          </p>
        </section>

        {/* Post cards */}
        <section style={{ padding: "40px 0", display: "flex", flexDirection: "column", gap: 24 }}>
          {linkedInPosts.map((post, i) => {
            const { status, date } = splitLabel(post.label);
            return (
              <div key={post.url} className="blueprint" style={{ position: "relative", padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {status && (
                    <span className={`ind-tag ${i === 0 ? "ind-tag-accent" : "ind-tag-outline"}`}>{status}</span>
                  )}
                  <span className="ind-tag ind-tag-neutral">{date}</span>
                </div>
                <div className="ind-heading" style={{ fontSize: 24, lineHeight: 1.2 }}>{post.title}</div>
                <p style={{ fontSize: 15.5, lineHeight: 1.6, maxWidth: "70ch", margin: 0, color: mutedText }}>{post.blurb}</p>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 14, fontWeight: 600, textDecoration: "none", color: "var(--color-accent-700)" }}
                >
                  Read on LinkedIn →
                </a>
              </div>
            );
          })}
        </section>

        {/* CTA */}
        <section style={{ padding: "16px 0 8px", textAlign: "center", borderTop: "1px solid var(--ind-divider)" }}>
          <p style={{ fontSize: 14, color: "color-mix(in srgb, var(--color-text) 70%, transparent)", margin: "24px 0 16px" }}>
            More posts published regularly on LinkedIn.
          </p>
          {social.linkedin && (
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="ind-btn ind-btn-primary">
              Follow on LinkedIn →
            </a>
          )}
        </section>
      </div>
    </div>
  );
}
