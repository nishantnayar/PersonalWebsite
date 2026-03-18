import type { Metadata } from "next";
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

export default function AboutPage() {
  const { name, tagline, bio, skills, social, resumeUrl, stats, currently, education } = profile;
  const paragraphs = bio.split("\n\n").map((p) => p.trim()).filter(Boolean);

  return (
    <div className="max-w-3xl mx-auto px-8 md:px-12 py-16 md:py-20">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="mb-16 relative">
        {/* Subtle background glow */}
        <div className="absolute -top-8 -right-8 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />

        <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">
          Hello, I&apos;m {name.split(" ")[0]}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          {tagline}
        </h1>
        <p className="text-base text-gray-500 leading-relaxed mb-8">
          Lead Solutions Analyst &amp; Technical Program Manager · Data Science · Financial Services · Writing about the gap between tech and business.
        </p>
        <div className="flex flex-wrap gap-3 mb-10">
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

        {/* Stats strip */}
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-3 gap-3">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="p-4 rounded-xl bg-gray-50 border border-gray-100 text-center"
              >
                <p className="text-xl font-bold text-gray-900">{value}</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-snug">{label}</p>
              </div>
            ))}
          </div>
        )}

        {/* CTA strip */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 px-5 py-4 rounded-xl bg-accent/5 border border-accent/15">
          <p className="flex-1 text-sm text-gray-600 leading-relaxed">
            <span className="font-semibold text-gray-900">Open to conversations</span>{" "}
            about data strategy, program delivery, and XAI in financial services.
          </p>
          <div className="flex items-center gap-2 flex-shrink-0">
            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent-hover transition-colors"
              >
                Connect on LinkedIn
              </a>
            )}
            {social.email && (
              <a
                href={`mailto:${social.email}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 border border-gray-200 text-gray-600 rounded-lg text-sm font-medium hover:border-gray-300 hover:bg-white transition-colors"
              >
                Email
              </a>
            )}
          </div>
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

      {/* ── Education ────────────────────────────────────────── */}
      {education && education.length > 0 && (
        <section className="mb-16">
          <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block flex-shrink-0" />
            Education
          </h2>
          <div className="space-y-4">
            {education.map((ed) => (
              <div
                key={ed.institution}
                className="flex items-center gap-5 p-5 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm transition-all"
              >
                {/* Logo or color badge */}
                <div
                  className="relative flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden flex items-center justify-center shadow-sm"
                  style={{ backgroundColor: ed.logoUrl ? "transparent" : ed.color }}
                >
                  {ed.logoUrl ? (
                    <Image
                      src={ed.logoUrl}
                      alt={ed.institution}
                      fill
                      className="object-contain p-1"
                      sizes="56px"
                    />
                  ) : (
                    <span className="text-white font-bold text-xs tracking-tight text-center px-1 leading-tight">
                      {ed.abbreviation}
                    </span>
                  )}
                </div>

                {/* Degree details */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 leading-snug">{ed.degree}</p>
                  <p className="text-sm font-medium mt-0.5" style={{ color: ed.color }}>
                    {ed.institution}
                  </p>
                  {ed.location && (
                    <p className="text-xs text-gray-400 mt-0.5">{ed.location}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

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
          className="group p-6 rounded-2xl border border-gray-200 hover:border-accent/40 hover:bg-accent/5 hover:shadow-sm transition-all"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Explore</p>
          <p className="text-lg font-semibold text-gray-900 group-hover:text-accent transition-colors">
            Portfolio →
          </p>
          <p className="text-sm text-gray-500 mt-1">Projects I&apos;ve designed and built</p>
        </Link>
        <Link
          href="/blog"
          className="group p-6 rounded-2xl border border-gray-200 hover:border-accent/40 hover:bg-accent/5 hover:shadow-sm transition-all"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Read</p>
          <p className="text-lg font-semibold text-gray-900 group-hover:text-accent transition-colors">
            Blog →
          </p>
          <p className="text-sm text-gray-500 mt-1">Writing on data, AI, and craft</p>
        </Link>
      </div>

    </div>
  );
}
