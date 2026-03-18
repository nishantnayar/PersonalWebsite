import Parser from "rss-parser";
import { profile } from "@/content/profile";

export type MediumPost = {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  url: string;
};

/** Fetch and parse the Medium RSS feed for the profile's Medium account. */
export async function getMediumPosts(): Promise<MediumPost[]> {
  const mediumUrl = profile.social.medium;
  if (!mediumUrl) return [];

  // Extract @handle from URL (e.g. https://medium.com/@nishantnayar → nishantnayar)
  const handle = mediumUrl.split("medium.com/@")[1]?.split("/")[0];
  if (!handle) return [];

  const feedUrl = `https://medium.com/feed/@${handle}`;

  try {
    const parser = new Parser({ timeout: 8000 });
    const feed = await parser.parseURL(feedUrl);

    return feed.items.map((item) => ({
      title: item.title ?? "",
      date: item.pubDate
        ? new Date(item.pubDate).toISOString().split("T")[0]
        : "",
      excerpt: (() => {
        const raw = (item.content ?? item.contentSnippet ?? "");
        const text = raw.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
        return text.length > 0
          ? text.slice(0, 220).trimEnd() + (text.length > 220 ? "…" : "")
          : "Read on Medium →";
      })(),
      tags: (item.categories as string[] | undefined) ?? [],
      url: item.link ?? mediumUrl,
    }));
  } catch {
    // Silently fail — don't break the build if Medium is unreachable
    return [];
  }
}
