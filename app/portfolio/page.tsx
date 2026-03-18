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

// Domain-specific SVG visuals — one per project, in order
function ProjectPlaceholder({ index }: { index: number }) {
  if (index === 0) return (
    <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20">
      <path d="M40 8L62 20V44C62 58 52 68 40 73C28 68 18 58 18 44V20Z" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="1.5"/>
      <path d="M24 57A18 18 0 1 1 56 57" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.35" fill="none"/>
      <path d="M24 57A18 18 0 0 1 50 33" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <circle cx="40" cy="57" r="3" fill="white"/>
      <line x1="40" y1="54" x2="50" y2="34" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
  if (index === 1) return (
    <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20">
      <rect x="14" y="14" width="34" height="44" rx="3" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="1.5"/>
      <rect x="20" y="18" width="34" height="44" rx="3" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1.5"/>
      <line x1="22" y1="30" x2="38" y2="30" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <line x1="22" y1="37" x2="38" y2="37" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <line x1="22" y1="44" x2="31" y2="44" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="56" cy="56" r="8" stroke="white" strokeWidth="2" fill="none"/>
      <line x1="62" y1="62" x2="68" y2="68" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
  if (index === 2) return (
    <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20">
      <rect x="10" y="12" width="50" height="36" rx="7" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="1.5"/>
      <path d="M18 48L10 62L26 54" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M20 32L30 22L40 29L52 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="52" cy="16" r="3" fill="white"/>
    </svg>
  );
  if (index === 3) return (
    <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20">
      <rect x="13" y="13" width="15" height="15" rx="2" fill="white" fillOpacity="0.9"/>
      <rect x="32" y="13" width="15" height="15" rx="2" fill="white" fillOpacity="0.5"/>
      <rect x="51" y="13" width="15" height="15" rx="2" fill="white" fillOpacity="0.3"/>
      <rect x="13" y="32" width="15" height="15" rx="2" fill="white" fillOpacity="0.6"/>
      <rect x="32" y="32" width="15" height="15" rx="2" fill="white" fillOpacity="0.9"/>
      <rect x="51" y="32" width="15" height="15" rx="2" fill="white" fillOpacity="0.4"/>
      <rect x="13" y="51" width="15" height="15" rx="2" fill="white" fillOpacity="0.4"/>
      <rect x="32" y="51" width="15" height="15" rx="2" fill="white" fillOpacity="0.7"/>
      <rect x="51" y="51" width="15" height="15" rx="2" fill="white" fillOpacity="0.95"/>
    </svg>
  );
  if (index === 4) return (
    <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20">
      <line x1="16" y1="12" x2="16" y2="66" stroke="white" strokeWidth="1.5" strokeOpacity="0.4"/>
      <rect x="18" y="18" width="38" height="9" rx="2" fill="white" fillOpacity="0.9"/>
      <rect x="18" y="33" width="28" height="9" rx="2" fill="white" fillOpacity="0.7"/>
      <rect x="18" y="48" width="18" height="9" rx="2" fill="white" fillOpacity="0.5"/>
      <circle cx="56" cy="22" r="5" fill="white" fillOpacity="0.3" stroke="white" strokeWidth="1.5"/>
      <path d="M53 22.5L55.5 25L59 20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20">
      <path d="M6 55C11 55 13 25 22 25C31 25 31 55 40 55C49 55 49 38 58 38C67 38 67 46 74 46"
            stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <line x1="31" y1="16" x2="31" y2="64" stroke="white" strokeWidth="1" strokeDasharray="3 2" strokeOpacity="0.45"/>
      <line x1="58" y1="16" x2="58" y2="64" stroke="white" strokeWidth="1" strokeDasharray="3 2" strokeOpacity="0.45"/>
      <rect x="6" y="66" width="25" height="4" rx="1" fill="white" fillOpacity="0.35"/>
      <rect x="31" y="66" width="27" height="4" rx="1" fill="white" fillOpacity="0.65"/>
      <rect x="58" y="66" width="16" height="4" rx="1" fill="white" fillOpacity="0.45"/>
    </svg>
  );
}

// Gradient backgrounds for project cards
const gradients = [
  "from-indigo-100 to-violet-100",
  "from-sky-100 to-cyan-100",
  "from-emerald-100 to-teal-100",
  "from-amber-100 to-orange-100",
  "from-rose-100 to-pink-100",
  "from-violet-100 to-purple-100",
];

export default function PortfolioPage() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      {/* Coming soon banner */}
      <div className="mb-10 flex items-start gap-3 px-5 py-4 rounded-xl bg-amber-50 border border-amber-100 text-amber-800">
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-400">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0v-4.5zm0 7.5a.75.75 0 00-1.5 0v.5a.75.75 0 001.5 0v-.5z" clipRule="evenodd" />
        </svg>
        <p className="text-sm leading-relaxed">
          <span className="font-semibold">Projects in progress.</span>{" "}
          These are actively being built — write-ups, code, and demos will be linked here as they're completed.
        </p>
      </div>

      {/* Header */}
      <div className="mb-14">
        <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">Work</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h1>
        <p className="text-lg text-gray-500 max-w-xl">
          A selection of projects at the intersection of data, AI, and financial services.
        </p>
      </div>

      {/* Featured projects */}
      {featured.length > 0 && (
        <section className="mb-10">
          <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block flex-shrink-0" />
            Featured
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featured.map((project, i) => (
              <article
                key={project.title}
                className="group rounded-2xl border border-gray-200 overflow-hidden hover:border-accent/40 hover:shadow-md transition-all"
              >
                {/* Project image / placeholder */}
                <div
                  className={`h-44 bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center`}
                >
                  {project.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <ProjectPlaceholder index={i} />
                  )}
                </div>

                {/* Card body */}
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-accent/5 border border-accent/20 text-accent rounded-md text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
                      >
                        <ExternalLinkIcon /> Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
                      >
                        <GithubIcon /> Source
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Other projects */}
      {rest.length > 0 && (
        <section>
          <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block flex-shrink-0" />
            Other Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {rest.map((project, i) => (
              <article
                key={project.title}
                className="group p-6 rounded-2xl border border-gray-200 hover:border-accent/40 hover:bg-accent/5 transition-all"
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${
                      gradients[(featured.length + i) % gradients.length]
                    } flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-lg font-bold text-white/60 select-none">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live demo"
                        className="text-gray-400 hover:text-accent transition-colors"
                      >
                        <ExternalLinkIcon />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Source code"
                        className="text-gray-400 hover:text-accent transition-colors"
                      >
                        <GithubIcon />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="font-semibold text-gray-900 mb-1.5 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
