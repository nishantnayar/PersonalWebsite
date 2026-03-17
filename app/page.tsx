import type { Metadata } from "next";
import Link from "next/link";
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

export default function AboutPage() {
  const { name, tagline, bio, skills, social, resumeUrl } = profile;
  const paragraphs = bio.split("\n\n").map((p) => p.trim()).filter(Boolean);

  return (
    <div className="max-w-3xl mx-auto px-8 md:px-12 py-16 md:py-20">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="mb-16">
        <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">
          Hello, I&apos;m {name.split(" ")[0]}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          {tagline}
        </h1>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent-hover transition-colors shadow-sm shadow-accent/25"
          >
            View My Work
          </Link>
          {resumeUrl && (
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Download Resume
            </a>
          )}
          {social.email && (
            <a
              href={`mailto:${social.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Get in Touch
            </a>
          )}
        </div>
      </section>

      <div className="mb-16 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* ── Bio ──────────────────────────────────────────────── */}
      <section className="mb-16">
        <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block flex-shrink-0" />
          About Me
        </h2>
        <div className="space-y-4 max-w-2xl">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-gray-600 leading-relaxed text-[1.05rem]">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* ── Skills ───────────────────────────────────────────── */}
      {skills.length > 0 && (
        <section className="mb-16">
          <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block flex-shrink-0" />
            Skills & Technologies
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 bg-accent/5 border border-accent/20 text-accent rounded-lg text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* ── Quick nav ────────────────────────────────────────── */}
      <div className="grid sm:grid-cols-2 gap-4">
        <Link
          href="/portfolio"
          className="group p-6 rounded-2xl border border-gray-200 hover:border-accent/40 hover:bg-accent/5 transition-all"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Explore</p>
          <p className="text-lg font-semibold text-gray-900 group-hover:text-accent transition-colors">
            Portfolio →
          </p>
          <p className="text-sm text-gray-500 mt-1">Projects I&apos;ve designed and built</p>
        </Link>
        <Link
          href="/blog"
          className="group p-6 rounded-2xl border border-gray-200 hover:border-accent/40 hover:bg-accent/5 transition-all"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Read</p>
          <p className="text-lg font-semibold text-gray-900 group-hover:text-accent transition-colors">
            Blog →
          </p>
          <p className="text-sm text-gray-500 mt-1">Writing on code, design, and craft</p>
        </Link>
      </div>

    </div>
  );
}
