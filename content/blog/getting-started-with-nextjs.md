---
title: "Getting Started with Next.js 14 App Router"
date: "2024-03-10"
excerpt: "A practical guide to building your first app with Next.js 14's App Router, covering layouts, server components, and data fetching patterns."
tags: ["Next.js", "React", "Web Dev"]
---

Next.js 14 introduced a more powerful and intuitive way to build React applications with the App Router. After working with it for several months, here's what I've learned and what trips people up.

## Why App Router?

The App Router is a fundamental shift from the old `pages/` directory. It embraces React Server Components by default, which means components that don't need interactivity stay on the server — sending less JavaScript to the browser.

The result: faster initial page loads, better SEO, and simpler data fetching.

## Layouts Are Composable

One of my favourite features is nested layouts. You can have a root layout wrapping your whole app, and then section-specific layouts layered on top:

```tsx
// app/dashboard/layout.tsx
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
```

This layout wraps every page inside `/dashboard` without re-rendering on navigation.

## Data Fetching Is Much Simpler

Forget `getServerSideProps`. In Server Components, you can just `await` data directly in the component:

```tsx
// app/posts/page.tsx
async function PostsPage() {
  const posts = await fetch('https://api.example.com/posts').then(r => r.json());

  return (
    <ul>
      {posts.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  );
}
```

Next.js handles caching, deduplication, and revalidation behind the scenes.

## One Gotcha: Client Components

If you need `useState`, `useEffect`, or browser APIs, you need a Client Component. Just add `"use client"` at the top of the file:

```tsx
"use client";

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
```

The key insight: keep Client Components as **leaf nodes** in your tree. Server Components can import Client Components, but not the other way around.

## Wrapping Up

The App Router has a learning curve but the mental model clicks once you internalize the Server vs. Client Component distinction. Start small — migrate one page at a time — and you'll be comfortable in no time.
