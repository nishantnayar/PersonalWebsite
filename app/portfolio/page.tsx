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

// Gradient backgrounds for project image placeholders
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
      {/* Header */}
      <div className="mb-14">
        <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">Work</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h1>
        <p className="text-lg text-gray-500 max-w-xl">
          A selection of projects I&apos;ve designed, built, and shipped. From side projects to
          production apps.
        </p>
      </div>

      {/* Featured projects */}
      {featured.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
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
                    <span className="text-4xl font-bold text-white/50 select-none">
                      {project.title.charAt(0)}
                    </span>
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
                        className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-md text-xs font-medium"
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
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
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
