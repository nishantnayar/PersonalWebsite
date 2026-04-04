import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { profile } from "@/content/profile";
import WorldMapWrapper from "@/components/WorldMapWrapper";

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

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <div className="flex-1 h-px bg-ink/10" />
      <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-ink-light">
        {label}
      </span>
      <div className="flex-1 h-px bg-ink/10" />
    </div>
  );
}

const pillars = [
  {
    title: "Data to decisions",
    desc: "How data science insights turn into outcomes that actually change how a business operates — and what usually gets in the way.",
  },
  {
    title: "Tech to delivery",
    desc: "What it takes to ship complex technical programs — from the first stakeholder meeting to the moment the tool is actually used.",
  },
  {
    title: "Bridge building",
    desc: "Translating between engineers, product, finance, and business. The part of the work nobody budgets for — and the part that determines whether any of the other work matters.",
  },
];

function ProfileSidebar() {
  const { name, title, location, avatarUrl, currently, education, skills, social } = profile;

  const socialLinks = [
    { href: social.linkedin, label: "LinkedIn" },
    { href: social.github, label: "GitHub" },
    { href: (social as Record<string, string | null>).medium ?? null, label: "Medium" },
    { href: social.email ? `mailto:${social.email}` : null, label: "Email" },
  ].filter((l) => l.href);

  return (
    <aside className="w-[260px] flex-shrink-0">
      <div className="sticky top-8 space-y-6">

        {/* Identity card */}
        <div className="border border-ink/10 rounded-sm p-5 bg-paper">
          {avatarUrl && (
            <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-accent/20 mb-4">
              <Image
                src={avatarUrl}
                alt={name}
                fill
                className="object-cover object-top"
                sizes="64px"
                priority
              />
            </div>
          )}
          <p className="font-medium text-[15px] text-ink leading-snug mb-0.5">{name}</p>
          <p className="text-[12px] text-ink-light leading-snug mb-2">{title}</p>
          {location && (
            <p className="text-[11px] text-ink-light">{location}</p>
          )}

          {/* Currently */}
          {currently && (
            <div className="mt-4 pt-4 border-t border-ink/10">
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-ink-light">Now</p>
              </div>
              <p className="text-[11px] font-light text-ink-mid leading-[1.6]">{currently}</p>
            </div>
          )}
        </div>

        {/* Education */}
        <div className="border border-ink/10 rounded-sm p-5 bg-paper">
          <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-ink-light mb-4">Education</p>
          <div className="space-y-4">
            {education.map((ed) => (
              <div key={ed.institution} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded overflow-hidden flex-shrink-0 bg-paper-warm border border-ink/10 flex items-center justify-center">
                  {ed.logoUrl ? (
                    <Image
                      src={ed.logoUrl}
                      alt={ed.abbreviation}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  ) : (
                    <span
                      className="text-[9px] font-semibold text-white"
                      style={{ backgroundColor: ed.color }}
                    >
                      {ed.abbreviation}
                    </span>
                  )}
                </div>
                <div>
                  <p className="text-[11px] font-medium text-ink leading-snug">{ed.degree}</p>
                  <p className="text-[10px] text-ink-light">{ed.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="border border-ink/10 rounded-sm p-5 bg-paper">
          <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-ink-light mb-3">Skills</p>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 bg-paper-warm border border-ink/10 text-ink-mid rounded-sm text-[10px] font-normal"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Connect */}
        {socialLinks.length > 0 && (
          <div className="border border-ink/10 rounded-sm p-5 bg-paper">
            <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-ink-light mb-3">Connect</p>
            <div className="space-y-2">
              {socialLinks.map(({ href, label }) => (
                <a
                  key={label}
                  href={href!}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="block text-[12px] text-ink-light hover:text-accent transition-colors"
                >
                  {label} →
                </a>
              ))}
            </div>
          </div>
        )}

      </div>
    </aside>
  );
}

export default function HomePage() {
  const { stats, social } = profile;

  return (
    <div className="max-w-[1060px] mx-auto px-8 pb-24">
      <div className="flex gap-12 items-start">

        {/* ── Main column ──────────────────────────────────────── */}
        <div className="flex-1 min-w-0">

          {/* ── Hero ───────────────────────────────────────────── */}
          <section className="mt-16 mb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-accent">
                Data · Technology · Business
              </span>
              <span className="inline-block w-8 h-px bg-accent flex-shrink-0" />
            </div>

            <h1 className="font-serif text-[clamp(26px,5vw,40px)] font-normal leading-[1.25] text-ink mb-7 tracking-[-0.01em]">
              Most people in data science<br />
              came from computer science.<br />
              <em className="italic text-ink-mid">I came from finance.</em>
            </h1>

            <p className="text-[17px] font-light leading-[1.75] text-ink-mid max-w-[520px] mb-8">
              That difference changed everything about how I approach a problem.
              I spent 10 years sitting between technical teams and business teams —
              learning{" "}
              <strong className="font-medium text-ink">
                what gets lost in translation, and how to close the gap.
              </strong>
            </p>

            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.08em] text-accent border-b border-accent pb-[2px] hover:gap-4 transition-all"
              >
                Follow on LinkedIn →
              </a>
            )}
          </section>

          {/* ── About ──────────────────────────────────────────── */}
          <SectionDivider label="About" />

          <section className="mb-20">
            <p className="text-[16px] leading-[1.85] text-ink-mid mb-5">
              I am a Lead Solutions Analyst at JPMorgan Chase.
              Before this, I spent a decade moving between investment banking, asset management,
              and commercial banking — across Bangalore, Tokyo, London, New York, Boston, and Chicago.
            </p>

            <blockquote className="border-l-2 border-accent pl-6 py-1 my-10">
              <p className="font-serif text-[18px] italic leading-[1.55] text-ink">
                I know what the business is actually asking for before the first line of code gets written.
              </p>
            </blockquote>

            <p className="text-[16px] leading-[1.85] text-ink-mid mb-5">
              Most data scientists learn their craft in one direction: start with a model, work toward a business.
              I learned it from the other end. Finance first.{" "}
              <strong className="font-medium text-ink">
                That means I learned to frame problems before solving them
              </strong>{" "}
              — which turns out to be the part most projects get wrong.
            </p>

            <p className="text-[16px] leading-[1.85] text-ink-mid">
              My job at JPMorgan Chase is to take complex technical programs and make them land.
              That means translating between engineers, data scientists, and the people who sign off on the work.
              I write about what I keep seeing in that space.
            </p>
          </section>

          {/* ── What I write about ─────────────────────────────── */}
          <SectionDivider label="What I write about" />

          <section className="mb-20">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="grid grid-cols-[48px_1fr] gap-x-6 py-7 border-b border-ink/10 first:border-t first:border-ink/10"
              >
                <span className="font-serif text-[13px] italic text-ink-light pt-[2px]">
                  0{i + 1}.
                </span>
                <div>
                  <p className="text-[15px] font-medium text-ink mb-2 tracking-[0.01em]">{p.title}</p>
                  <p className="text-[14px] font-light leading-[1.7] text-ink-mid">{p.desc}</p>
                </div>
              </div>
            ))}
          </section>

          {/* ── Background ─────────────────────────────────────── */}
          <SectionDivider label="Background" />

          {stats && stats.length > 0 && (
            <div className="bg-paper-warm rounded-sm p-8 grid grid-cols-2 gap-x-8 gap-y-7 mb-20">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="font-serif text-[28px] font-normal text-ink leading-none mb-1.5">
                    {value}
                  </p>
                  <p className="text-[12px] font-normal text-ink-light leading-[1.5]">{label}</p>
                </div>
              ))}
            </div>
          )}

          {/* ── Global Footprint ───────────────────────────────── */}
          <SectionDivider label="Global Footprint" />

          <section className="mb-20">
            <p className="text-[13px] text-ink-light mb-5">
              Six cities across four continents
            </p>
            <WorldMapWrapper />
          </section>

          {/* ── Writing ────────────────────────────────────────── */}
          <SectionDivider label="Writing" />

          <div className="mb-20">
            {social.linkedin && (
              <>
                <a
                  href="https://www.linkedin.com/posts/activity-7442903183473065985-561u"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-ink/10 rounded-sm p-6 mb-4 hover:bg-paper-warm transition-colors"
                >
                  <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-ink-light mb-3">
                    Most read · March 2026
                  </p>
                  <p className="font-serif text-[17px] leading-[1.5] text-ink mb-3">
                    Most people in data science came from computer science. I came from finance.
                  </p>
                  <p className="text-[14px] font-light leading-[1.7] text-ink-mid mb-4">
                    That difference changed everything about how I approach a problem — and why I ended up doing work most data scientists never touch.
                  </p>
                  <p className="text-[12px] font-medium uppercase tracking-[0.07em] text-accent">
                    Read on LinkedIn →
                  </p>
                </a>

                <a
                  href="https://www.linkedin.com/posts/activity-7444715132573880321-Up-M"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-ink/10 rounded-sm p-6 mb-6 hover:bg-paper-warm transition-colors"
                >
                  <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-ink-light mb-3">
                    Recent · April 2026
                  </p>
                  <p className="font-serif text-[17px] leading-[1.5] text-ink mb-3">
                    What is the actual question you are trying to answer?
                  </p>
                  <p className="text-[14px] font-light leading-[1.7] text-ink-mid mb-4">
                    Most data projects fail before the first line of code. Not because of the model. Because nobody stopped to agree on the question.
                  </p>
                  <p className="text-[12px] font-medium uppercase tracking-[0.07em] text-accent">
                    Read on LinkedIn →
                  </p>
                </a>
              </>
            )}

            <p className="text-[16px] font-light leading-[1.8] text-ink-mid mb-6">
              I write on LinkedIn about the patterns I keep seeing at the intersection of data, technology,
              and business.{" "}
              <strong className="font-medium text-ink">
                If you are early in your career trying to figure out how these fields fit together,
                or a senior professional who has felt the translation problem yourself,
              </strong>{" "}
              the writing is for you.
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.06em] bg-accent text-paper px-[22px] py-[11px] rounded-sm hover:opacity-85 transition-opacity"
                >
                  Read on LinkedIn →
                </a>
              )}
              <Link
                href="/portfolio"
                className="text-[13px] font-normal text-ink-light border-b border-ink/15 pb-[1px] hover:text-ink transition-colors"
              >
                View projects →
              </Link>
            </div>
          </div>

          {/* ── Open to conversations ──────────────────────────── */}
          <section className="border border-ink/10 rounded-sm p-8 text-center">
            <p className="font-serif text-[20px] font-normal text-ink mb-3 leading-snug">
              Open to conversations.
            </p>
            <p className="text-[14px] font-light text-ink-mid leading-[1.75] max-w-[400px] mx-auto mb-6">
              If you work at the intersection of data and business — or are trying to figure out how to get there —
              reach out. Always happy to think through a problem.
            </p>
            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.08em] bg-accent text-paper px-[22px] py-[11px] rounded-sm hover:opacity-85 transition-opacity"
              >
                Connect on LinkedIn →
              </a>
            )}
          </section>

        </div>

        {/* ── Right sidebar (desktop only) ─────────────────────── */}
        <div className="hidden lg:block">
          <ProfileSidebar />
        </div>

      </div>
    </div>
  );
}
