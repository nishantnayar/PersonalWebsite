// ============================================================
//  EDIT THIS FILE TO UPDATE YOUR DATA VISUALIZATIONS
// ============================================================
//
//  These are craft pieces — Storytelling with Data (SWD) style
//  makeovers and chart exercises. Each entry has:
//    title       - Short name for the chart / exercise
//    takeaway    - One line: what the chart shows or what the
//                  makeover fixed (the "so what")
//    tools       - Tools used (shown as small tags)
//    imageUrl    - Final chart image, placed in /public/images/
//                  set to null to show a numbered placeholder
//    sourceUrl   - Optional link (SWD challenge, writeup, notebook)
//    sourceLabel - Link text, e.g. "SWD challenge" or "Read the writeup"
//    date        - Optional "Month YYYY" for ordering context
// ============================================================

export type Visualization = {
  title: string;
  challenge?: string; // e.g. the SWD monthly challenge name
  takeaway: string;
  tools: string[];
  imageUrl: string | null;
  sourceUrl?: string | null;
  sourceLabel?: string;
  date?: string;
};

// Newest first.
export const visualizations: Visualization[] = [
  {
    title: "CPI Contributions Waterfall — July 2026",
    challenge: "SWD Aug 2026 · Whip up a waterfall",
    takeaway:
      "A waterfall reframes the CPI report around the one thing that mattered: a sharp energy drop that offset broad price increases and held All Items to +0.1%. Bars are weighted by contribution, so the reader sees which categories actually moved the index, not just which rose.",
    tools: ["Python", "Waterfall", "CPI Data"],
    imageUrl: "/images/cpi_waterfall_jul_2026.png",
    sourceUrl: "https://community.storytellingwithdata.com/challenges/aug-2026-whip-up-a-waterfall",
    sourceLabel: "View the SWD challenge",
    date: "August 2026",
  },
];
