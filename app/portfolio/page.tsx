import type { Metadata } from "next";
import { projects } from "@/content/portfolio";
import { profile } from "@/content/profile";

const description = `A selection of projects designed and built by ${profile.name}, ${profile.title}.`;

export const metadata: Metadata = {
  title: "Portfolio",
  description,
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: `Portfolio | ${profile.name}`,
    description,
    url: "/portfolio",
    type: "website",
  },
};

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
      <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
      <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ProjectIcon({ index }: { index: number }) {
  if (index === 0) return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7z"/>
      <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none"/>
      <line x1="12" y1="16" x2="15" y2="10"/>
    </svg>
  );
  if (index === 1) return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <rect x="4" y="4" width="10" height="13" rx="1.5"/>
      <rect x="6" y="6" width="10" height="13" rx="1.5" strokeOpacity={0.5}/>
      <line x1="7" y1="9" x2="12" y2="9"/>
      <line x1="7" y1="12" x2="12" y2="12"/>
      <circle cx="17" cy="17" r="3"/>
      <line x1="19.5" y1="19.5" x2="22" y2="22"/>
    </svg>
  );
  if (index === 2) return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <rect x="2" y="4" width="16" height="11" rx="2"/>
      <path d="M5 20l3-5H2z" fill="currentColor" stroke="none" opacity={0.7}/>
      <path d="M6 9.5l3-3 3 2 4-4"/>
      <circle cx="16" cy="4.5" r="1.2" fill="currentColor" stroke="none"/>
    </svg>
  );
  if (index === 3) return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <rect x="3" y="3" width="5" height="5" rx="1" fill="white" fillOpacity={0.9}/>
      <rect x="10" y="3" width="5" height="5" rx="1" fill="white" fillOpacity={0.5}/>
      <rect x="17" y="3" width="5" height="5" rx="1" fill="white" fillOpacity={0.25}/>
      <rect x="3" y="10" width="5" height="5" rx="1" fill="white" fillOpacity={0.55}/>
      <rect x="10" y="10" width="5" height="5" rx="1" fill="white" fillOpacity={0.9}/>
      <rect x="17" y="10" width="5" height="5" rx="1" fill="white" fillOpacity={0.35}/>
      <rect x="3" y="17" width="5" height="5" rx="1" fill="white" fillOpacity={0.35}/>
      <rect x="10" y="17" width="5" height="5" rx="1" fill="white" fillOpacity={0.65}/>
      <rect x="17" y="17" width="5" height="5" rx="1" fill="white" fillOpacity={1}/>
    </svg>
  );
  if (index === 4) return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <line x1="5" y1="3" x2="5" y2="21" strokeOpacity={0.4}/>
      <rect x="6" y="5" width="11" height="3.5" rx="1"/>
      <rect x="6" y="10.5" width="8" height="3.5" rx="1" strokeOpacity={0.7}/>
      <rect x="6" y="16" width="5" height="3.5" rx="1" strokeOpacity={0.45}/>
      <path d="M18 7l1 1 1.5-1.5" strokeWidth={1.25}/>
    </svg>
  );
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" className="w-6 h-6">
      <path d="M3 16c2-2 3-7 6-7s4 8 7 8 4-4 5-5"/>
      <line x1="10" y1="3" x2="10" y2="20" strokeDasharray="3 2" strokeOpacity={0.4}/>
      <line x1="17" y1="3" x2="17" y2="20" strokeDasharray="3 2" strokeOpacity={0.4}/>
    </svg>
  );
}

function StatusBadge({ status }: { status?: string }) {
  if (!status) return null;
  if (status === "Live")
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-white/20 text-white border border-white/30">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        Live
      </span>
    );
  if (status === "Complete")
    return <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-white/20 text-white border border-white/30">Complete</span>;
  return <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-white/10 text-white/70 border border-white/15">{status}</span>;
}

export default function PortfolioPage() {
  return (
    <div className="max-w-[900px] mx-auto px-8 py-16">
      {/* Banner */}
      <div className="mb-10 flex items-start gap-3 px-5 py-4 rounded border border-ink/10 bg-paper-warm text-ink-mid">
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 flex-shrink-0 mt-0.5 text-ink-light">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0v-4.5zm0 7.5a.75.75 0 00-1.5 0v.5a.75.75 0 001.5 0v-.5z" clipRule="evenodd" />
        </svg>
        <p className="text-[13px] font-light leading-relaxed">
          Each project starts with a business question, not a model.{" "}
          <span className="font-medium text-ink">The GitHub repo is the evidence, not the headline.</span>
        </p>
      </div>

      {/* Header */}
      <div className="mb-14">
        <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-accent mb-4">Work</p>
        <h1 className="font-serif text-[36px] font-normal text-ink mb-4 tracking-[-0.01em]">Portfolio</h1>
        <p className="text-[16px] font-light leading-[1.75] text-ink-mid max-w-xl">
          A selection of projects at the intersection of data, AI, and financial services.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <article
            key={project.title}
            className="group flex flex-col rounded overflow-hidden border border-ink/10 hover:shadow-lg hover:border-ink/20 transition-all"
          >
            {/* Dark header */}
            <div className="bg-ink px-5 py-5">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center text-white flex-shrink-0">
                  <ProjectIcon index={i} />
                </div>
                <StatusBadge status={project.status} />
              </div>
              <h3 className="font-medium text-white text-[14px] leading-snug">
                {project.title}
              </h3>
            </div>

            {/* Body */}
            <div className="flex flex-col flex-1 p-5 bg-paper">
              <div className="space-y-4 mb-5 flex-1">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-ink-light mb-1.5">The Problem</p>
                  <p className="text-[13px] font-light text-ink-mid leading-relaxed italic">{project.problem}</p>
                </div>
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-ink-light mb-1.5">The Solution</p>
                  <p className="text-[13px] font-light text-ink-mid leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 bg-paper-warm border border-ink/10 text-ink-mid rounded text-[11px] font-normal">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              {(project.githubUrl || project.liveUrl) && (
                <div className="flex items-center gap-4 pt-3 border-t border-ink/8">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[12px] font-medium text-ink-light hover:text-ink transition-colors">
                      <GithubIcon /> Source
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[12px] font-medium text-accent hover:text-accent-hover transition-colors">
                      <ExternalLinkIcon /> Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="mt-16 pt-8 border-t border-ink/10 text-center">
        <p className="text-[14px] font-light text-ink-mid">
          I write about the thinking behind this work on{" "}
          <a
            href={profile.social.linkedin ?? "https://linkedin.com/in/nishantnayar"}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent border-b border-accent/40 hover:border-accent transition-colors"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </div>
  );
}
