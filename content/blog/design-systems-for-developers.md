---
title: "Design Systems for Developers Who Don't Have a Designer"
date: "2024-01-05"
excerpt: "How to build a consistent, professional-looking UI without a full-time designer using a handful of fundamental principles."
tags: ["Design", "CSS", "UI"]
---

Most developers I know — myself included — reach for a component library when they need to build a UI. Nothing wrong with that. But understanding the underlying principles means you can make better decisions about when to follow the library, when to extend it, and when to roll your own.

Here are the principles that have helped me most.

## The 8-Point Grid

Set all spacing values — margin, padding, gap, width — to multiples of 8px (or 4px for finer control). That's it. No more picking arbitrary values like 13px or 22px.

This single constraint creates visual rhythm across your interface without you having to think about it. In Tailwind, every spacing unit is 4px, so sticking to even numbers (`p-4`, `gap-8`, `mt-12`) keeps you on the grid naturally.

## Type Scale

Pick a type scale and stick to it. A useful starting point:

| Label | Size |
|-------|------|
| xs    | 12px |
| sm    | 14px |
| base  | 16px |
| lg    | 18px |
| xl    | 20px |
| 2xl   | 24px |
| 3xl   | 30px |
| 4xl   | 36px |

Don't use sizes outside this scale. Consistency matters more than pixel-perfect sizing.

## Colour: Less Is More

Limit yourself to:
- 1 brand/accent colour (+ lighter and darker variants)
- Neutrals (gray scale for text, borders, backgrounds)
- Semantic colours: red for error, green for success, yellow for warning

This is all you need. Every additional colour you add is another decision someone has to make about when to use it.

## White Space Is Not Empty

The instinct when something looks "off" is to add more elements. More often, the fix is more space. Generous padding around cards, sections, and content makes a layout feel premium and intentional. Cramped spacing feels cheap.

When in doubt, add more vertical rhythm between sections.

## Consistency Over Perfection

A design system's real value isn't any individual choice — it's that *all the choices are the same*. One button style. One card style. One input style. Used consistently everywhere.

Inconsistency is what makes amateur UIs feel amateurish. You don't need to be Dieter Rams. You just need to be consistent.

## Starting Point

If you want a practical starting point: pick a clean sans-serif (Inter is excellent and free), set your font size to 16px, use an 8pt grid, choose one accent colour from Tailwind's palette, and use the default gray scale for everything else.

That's a solid foundation for any product.
