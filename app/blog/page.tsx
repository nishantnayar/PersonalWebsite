import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/blog";
import { getMediumPosts } from "@/lib/medium";
import { profile } from "@/content/profile";

const description = `Writing by ${profile.name} on data, AI, and financial services.`;

export const metadata: Metadata = {
  title: "Blog",
  description,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `Blog | ${profile.name}`,
    description,
    url: "/blog",
    type: "website",
  },
};

type UnifiedPost = {
  key: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  href: string;
  isExternal: boolean;
};

export default async function BlogPage() {
  const localPosts: UnifiedPost[] = getAllPosts().map((p) => ({
    key: `local-${p.slug}`,
    title: p.title,
    date: p.date,
    excerpt: p.excerpt,
    tags: p.tags,
    href: `/blog/${p.slug}`,
    isExternal: false,
  }));

  const mediumPosts: UnifiedPost[] = (await getMediumPosts()).map((p) => ({
    key: `medium-${p.url}`,
    title: p.title,
    date: p.date,
    excerpt: p.excerpt,
    tags: p.tags,
    href: p.url,
    isExternal: true,
  }));

  // Deduplicate: skip Medium posts that are already cross-posted locally
  const localTitlesNorm = new Set(
    localPosts.map((p) => p.title.toLowerCase().trim())
  );
  const uniqueMediumPosts = mediumPosts.filter(
    (p) => !localTitlesNorm.has(p.title.toLowerCase().trim())
  );

  const allPosts = [...localPosts, ...uniqueMediumPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Group by year for the timeline
  const postsByYear: Record<string, UnifiedPost[]> = {};
  for (const post of allPosts) {
    const year = post.date.split("-")[0];
    if (!postsByYear[year]) postsByYear[year] = [];
    postsByYear[year].push(post);
  }
  const years = Object.keys(postsByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <div className="mb-14">
        <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">Writing</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-lg text-gray-500">
          Thoughts on data, AI, and building things at the intersection of finance and technology.
        </p>
      </div>

      {/* Timeline */}
      {allPosts.length === 0 ? (
        <div className="text-center py-24">
          <p className="text-gray-400 text-lg">No posts yet. Check back soon.</p>
        </div>
      ) : (
        <div className="relative">
          {/* Vertical rail */}
          <div className="absolute left-3 top-5 bottom-0 w-px bg-gradient-to-b from-accent via-gray-200 to-transparent" />

          {years.map((year, yi) => (
            <div key={year} className={yi > 0 ? "mt-10" : ""}>

              {/* Year node */}
              <div className="relative flex items-center gap-4 mb-6">
                <div className="w-6 h-6 rounded-full bg-accent flex-shrink-0 z-10 shadow shadow-accent/30 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <span className="text-sm font-bold text-accent uppercase tracking-[0.12em]">
                  {year}
                </span>
              </div>

              {/* Posts */}
              <div className="space-y-1">
                {postsByYear[year].map((post) => {
                  const inner = (
                    <div className="group relative flex items-start gap-4 pl-10 pr-3 py-4 rounded-xl hover:bg-gray-50 transition-colors">
                      {/* Post dot */}
                      <div className="absolute left-[7px] top-[22px] w-2.5 h-2.5 rounded-full border-2 border-gray-300 bg-white group-hover:border-accent group-hover:bg-accent/20 transition-colors z-10" />

                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline flex-wrap gap-x-2 gap-y-0.5 mb-1">
                          <h2 className="font-semibold text-gray-900 group-hover:text-accent transition-colors leading-snug">
                            {post.title}
                          </h2>
                          {post.isExternal && (
                            <span className="flex-shrink-0 px-1.5 py-0.5 bg-gray-100 text-gray-400 rounded text-[10px] font-medium uppercase tracking-wide">
                              Medium
                            </span>
                          )}
                        </div>
                        <time
                          dateTime={post.date}
                          className="text-xs text-gray-400 mb-2 block"
                        >
                          {formatDate(post.date)}
                        </time>
                        <p className="text-sm text-gray-500 leading-relaxed mb-3">
                          {post.excerpt}
                        </p>
                        {post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 bg-accent/5 border border-accent/20 text-accent rounded-md text-xs font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 flex-shrink-0 mt-1 self-center text-gray-300 group-hover:text-accent transition-colors"
                      >
                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                      </svg>
                    </div>
                  );

                  return post.isExternal ? (
                    <a
                      key={post.key}
                      href={post.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {inner}
                    </a>
                  ) : (
                    <Link key={post.key} href={post.href} className="block">
                      {inner}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
