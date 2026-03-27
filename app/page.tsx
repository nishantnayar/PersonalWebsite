import type { Metadata } from "next";
import Link from "next/link";
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

export default function HomePage() {
  const { stats, social } = profile;

  return (
    <div className="max-w-[680px] mx-auto px-8 pb-24">

      {/* ── Hero ─────────────────────────────────────────────── */}
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

      {/* ── About ────────────────────────────────────────────── */}
      <SectionDivider label="About" />

      <section className="mb-20">
        <p className="text-[16px] leading-[1.85] text-ink-mid mb-5">
          I lead robotics and automation at JPMorgan Chase&apos;s Commercial Bank.
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

      {/* ── What I write about ───────────────────────────────── */}
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

      {/* ── Background ───────────────────────────────────────── */}
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

      {/* ── Global Footprint ─────────────────────────────────── */}
      <SectionDivider label="Global Footprint" />

      <section className="mb-20">
        <p className="text-[13px] text-ink-light mb-5">
          Six cities across four continents
        </p>
        <WorldMapWrapper />
      </section>

      {/* ── Writing ──────────────────────────────────────────── */}
      <SectionDivider label="Writing" />

      <div className="mb-20">
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
            View projects
          </Link>
        </div>
      </div>

    </div>
  );
}
