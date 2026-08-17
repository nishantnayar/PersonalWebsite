# Nishant Nayar

Personal site for a Lead Solutions Analyst at JPMorgan Chase who came to data science from finance, not computer science. Writing, projects, and chart craft at the intersection of data, technology, and business.

**Live:** [nishantnayar.dev](https://nishantnayar.dev)

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38BDF8)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000)](https://vercel.com/)

## Pages

| Route | What it is |
|---|---|
| `/` | Homepage: bio, three writing pillars, LinkedIn posts, CTA |
| `/blog` | Writing feed. Cards pull from `linkedInPosts` in `content/profile.ts` |
| `/portfolio` | Project cards from `content/portfolio.ts` |
| `/visualizations` | Storytelling with Data chart makeovers from `content/visualizations.ts` |

## Stack

Next.js 16 (App Router), React 18, TypeScript, Tailwind CSS 3, `@vercel/analytics`. Deployed on Vercel. Auto-deploys on every push to `main`.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # ESLint
```

## Updating content

Editable copy lives in `content/`. Do not hard-code personal data in components.

### Profile, bio, writing → `content/profile.ts`

Name, title, tagline, bio, stats, education, skills, social links, LinkedIn posts, SEO (`siteUrl`, `ogImage`). Fields are commented inline.

**Profile photo:** put the file in `public/images/` and set `avatarUrl` (currently `/images/photo.jpg`).

**Resume:** put a PDF in `public/` and set `resumeUrl`. Leave it `null` to hide the button.

**LinkedIn posts:** add objects to `linkedInPosts`. Order in the array is the order on the page. Set the array to `[]` to hide the cards.

### Projects → `content/portfolio.ts`

Copy an existing entry in the `projects` array. Fields:

- `title`, `description`, `bullets` (three one-liners on the card)
- `problem`, `solution`
- `status` — e.g. `"Live"`, `"Building now"`, `"Up next — Q3 2026"`
- `tags`, `liveUrl`, `githubUrl`, `imageUrl` (path under `/public/images/`, or `null`)
- `featured` — `true` for the larger card treatment

### Visualizations → `content/visualizations.ts`

Copy an existing entry. Newest first. Place the chart image in `public/images/` and set `imageUrl`. Optional: `challenge`, `sourceUrl`, `sourceLabel`, `date`.

## Project structure

```
├── app/
│   ├── page.tsx              # Homepage (own sidebar + footer)
│   ├── blog/page.tsx         # Writing
│   ├── portfolio/page.tsx    # Projects
│   └── visualizations/page.tsx
├── components/
│   ├── Nav.tsx               # Top nav (hidden on homepage)
│   ├── Footer.tsx            # Site footer (hidden on homepage)
│   └── ChromeGate.tsx        # Suppresses Nav/Footer on `/`
├── content/                  # Edit these to update the site
│   ├── profile.ts
│   ├── portfolio.ts
│   └── visualizations.ts
└── public/images/            # Photo, logos, chart images
```

The homepage supplies its own chrome. `ChromeGate` hides the shared Nav and Footer on `/` so the two layouts do not stack.

## Design

Homepage and inner pages use Barlow / Barlow Condensed with a navy accent (`#5980a6`). Tokens live on the homepage wrapper and in `app/globals.css` (`--ind-*` / `--color-*`). Tailwind tokens in `tailwind.config.ts` (forest `accent`, warm `paper`) remain available for older components.

## Deploy

Pushes to `main` deploy automatically on Vercel. Domain is set in `profile.siteUrl` (`https://nishantnayar.dev`). Update that field if the domain changes.
