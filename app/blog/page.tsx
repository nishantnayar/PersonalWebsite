import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/blog";
import { profile } from "@/content/profile";

const description = `Writing by ${profile.name} on code, design, and building things on the internet.`;

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

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <div className="mb-14">
        <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">Writing</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-lg text-gray-500">
          Thoughts on code, design, and building things on the internet.
        </p>
      </div>

      {/* Post list */}
      {posts.length === 0 ? (
        <div className="text-center py-24">
          <p className="text-gray-400 text-lg">No posts yet. Check back soon.</p>
          <p className="text-gray-300 text-sm mt-2">
            Add <code className="text-accent">.md</code> files to{" "}
            <code className="text-accent">content/blog/</code> to get started.
          </p>
        </div>
      ) : (
        <ol className="space-y-0">
          {posts.map((post, i) => (
            <li key={post.slug}>
              {i > 0 && <div className="border-t border-gray-100" />}
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8 py-8 hover:bg-gray-50 -mx-4 px-4 rounded-xl transition-colors"
              >
                {/* Date */}
                <time
                  dateTime={post.date}
                  className="flex-shrink-0 text-sm text-gray-400 sm:w-36 pt-0.5"
                >
                  {formatDate(post.date)}
                </time>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">
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

                {/* Arrow */}
                <div className="hidden sm:flex items-center self-center text-gray-300 group-hover:text-accent transition-colors">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
