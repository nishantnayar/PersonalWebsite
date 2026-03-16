# Personal Website

A clean, minimal personal branding website built with **Next.js 14** and **Tailwind CSS**. Includes an About page, Portfolio, and Blog. Ready to deploy to Vercel in minutes.

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

---

## How to Update Your Content

You don't need to touch any complex code. All content lives in easy-to-edit files:

### Personal Info & Bio → `content/profile.ts`

Edit this file to update:
- Your name, title, and tagline
- Bio paragraphs
- Location
- Skills list
- Social media links
- Profile photo (see instructions in the file)

### Portfolio Projects → `content/portfolio.ts`

Each project is an object in the array. Copy/paste an existing entry to add a new one. Fields:
- `title` — Project name
- `description` — 1–2 sentence summary
- `tags` — Tech stack badges
- `liveUrl` — Link to live site (or `null`)
- `githubUrl` — Link to repo (or `null`)
- `imageUrl` — Screenshot path under `/public/images/` (or `null` for placeholder)
- `featured` — Set to `true` to display it larger at the top

### Blog Posts → `content/blog/`

Each post is a **Markdown** (`.md`) file. To add a new post:

1. Create a new file: `content/blog/my-post-title.md`
2. Add the frontmatter at the top:

```markdown
---
title: "Your Post Title"
date: "2024-04-01"
excerpt: "One sentence summary shown on the blog listing page."
tags: ["Tag1", "Tag2"]
---

Your content goes here. Standard Markdown is supported.
```

3. The filename (without `.md`) becomes the URL slug: `/blog/my-post-title`

### Profile Photo

Place your photo at `public/images/photo.jpg` and update `avatarUrl` in `content/profile.ts`:

```ts
avatarUrl: "/images/photo.jpg",
```

### Resume / CV

Place your PDF at `public/resume.pdf` and `resumeUrl` in `content/profile.ts` is already pointing to it. Set it to `null` to hide the button.

---

## Project Structure

```
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # About / Home page
│   ├── portfolio/
│   │   └── page.tsx      # Portfolio page
│   └── blog/
│       ├── page.tsx      # Blog listing page
│       └── [slug]/
│           └── page.tsx  # Individual blog post
├── components/
│   ├── Nav.tsx           # Navigation bar
│   └── Footer.tsx        # Footer with social links
├── content/              # ✏️  Edit these to update your site
│   ├── profile.ts        # Your name, bio, skills, social links
│   ├── portfolio.ts      # Your projects
│   └── blog/             # Your blog posts (.md files)
├── lib/
│   └── blog.ts           # Blog post reading utilities
└── public/               # Static assets (images, resume PDF)
```

---

## Deploying to Vercel

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel will auto-detect Next.js — click **Deploy**

Your site will be live in under a minute. Every push to `main` triggers an automatic redeploy.

---

## Customising the Design

- **Accent colour** — Change `accent` in `tailwind.config.ts`
- **Font** — Change the `Inter` import in `app/layout.tsx` to any Google Font
- **Navigation links** — Edit `navLinks` in `components/Nav.tsx`
