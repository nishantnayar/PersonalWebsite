import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/blog";
import { profile } from "@/content/profile";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const url = `/blog/${slug}`;
  const ogImages = profile.ogImage
    ? [{ url: profile.ogImage, width: 1200, height: 630, alt: post.title }]
    : [];

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    authors: [{ name: profile.name }],
    openGraph: {
      title: `${post.title} | ${profile.name}`,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      authors: [profile.name],
      tags: post.tags,
      images: ogImages,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const words = post.contentHtml.replace(/<[^>]*>/g, "").split(/\s+/).filter(Boolean).length;
  const readTime = Math.max(1, Math.ceil(words / 200));

  return (
    <>
      {/* Hero */}
      <div className="max-w-[860px] mx-auto px-8 md:px-12 pt-14 pb-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-[#7a6e64] hover:text-ink transition-colors mb-10"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
            <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
          </svg>
          All posts
        </Link>

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-7">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] font-medium tracking-[0.16em] uppercase text-[#b85c38] border border-[#b85c38] px-2.5 py-1 rounded-[2px]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h1 className="font-display text-[clamp(2.2rem,5vw,3.4rem)] font-bold leading-[1.15] tracking-[-0.01em] text-ink mb-5">
          {post.title}
        </h1>

        <div className="flex items-center gap-5 font-mono text-[12px] text-[#7a6e64] tracking-[0.08em]">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="opacity-40">·</span>
          <span>{readTime} min read</span>
        </div>
      </div>

      {/* Article */}
      <article
        className="max-w-[680px] mx-auto px-8 md:px-12 pb-32 blog-prose"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </>
  );
}
