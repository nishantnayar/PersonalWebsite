import Parser from "rss-parser";
import { profile } from "@/content/profile";

export type MediumPost = {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  url: string;
};

// Manual excerpt overrides — keyed by lowercase title substring for resilience
const excerptOverrides: Record<string, string> = {
  "beyond correlation and cointegration":
    "Most pairs trading strategies stop at correlation. This piece explores how neural networks identify co-movement patterns that traditional cointegration tests miss.",
  "automate stock analysis with prefect":
    "A practical walkthrough of building an automated financial data pipeline — from ingesting price data to triggering analysis workflows on a schedule.",
  "time series forecasting models":
    "End-to-end guide to building a forecasting model with Prophet, tracking experiments with MLflow, and deploying as a Streamlit app.",
  "ai books":
    "A reading list of the books that shaped how I think about AI — from technical foundations to the business and ethics of building intelligent systems.",
};

function getExcerptOverride(title: string): string | null {
  const lower = title.toLowerCase();
  for (const [key, value] of Object.entries(excerptOverrides)) {
    if (lower.includes(key)) return value;
  }
  return null;
}

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
        const title = item.title ?? "";
        const override = getExcerptOverride(title);
        if (override) return override;
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
