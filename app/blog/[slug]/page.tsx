import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/blog";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post) notFound();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      {/* Back link */}
      <div className="mb-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition-colors"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
          </svg>
          All posts
        </Link>
      </div>

      {/* Article header */}
      <header className="mb-12">
        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-accent/10 text-accent rounded-lg text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-sm text-gray-400">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
      </header>

      {/* Article divider */}
      <div className="border-t border-gray-100 mb-12" />

      {/* Article content */}
      <article
        className="prose-content max-w-2xl"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      {/* Footer nav */}
      <div className="mt-16 pt-8 border-t border-gray-100">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-accent transition-colors"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
          </svg>
          Back to all posts
        </Link>
      </div>
    </div>
  );
}
