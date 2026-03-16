---
title: "The Joy of Simple Code"
date: "2024-02-18"
excerpt: "Why the best code I've ever written was code I deleted, and how simplicity became my guiding principle as an engineer."
tags: ["Engineering", "Philosophy"]
---

The best pull request I ever merged deleted 400 lines of code and added 20.

It replaced a tangle of abstract factories, strategy patterns, and generic type parameters with a straightforward function that did exactly one thing. The tests still passed. The feature still worked. And for the first time in months, I could read the code without holding the entire mental model in my head.

That experience changed how I think about software.

## Complexity Is the Enemy

We're drawn to complexity. It feels like progress. More abstractions, more configurability, more future-proofing. But complexity has a compounding cost: every layer you add becomes something the next developer has to understand before they can change anything.

> "The purpose of abstraction is not to be vague, but to create a new semantic level in which one can be absolutely precise." — Dijkstra

The key word is *semantic level*. Abstractions should encode meaning, not just reduce repetition. When you abstract too early, you often encode the wrong thing — and it becomes load-bearing concrete before you realise your mistake.

## Simplicity Isn't Laziness

Simple code is hard to write. It requires you to understand the problem deeply enough to see the minimal solution. That's harder than reaching for a pattern.

A few things that help me:

**Start with the simplest thing that could possibly work.** Write the dumb version first. Inline everything. Get it working. Only then ask: what's the natural structure here?

**Delete code without mercy.** Every line is a liability. If it's not earning its place — if it handles a case that never actually occurs, or wraps an API that's never called — cut it.

**Favour readability over cleverness.** Code is read far more often than it's written. Optimise for the person who reads it at 2am when something is on fire. (That person is usually future you.)

## The Practical Test

When I'm reviewing code — mine or someone else's — I ask: *could I explain this to a sharp non-programmer in one sentence?*

If the answer is no, that's usually a signal to simplify, not document.

Documentation has its place. But a good explanation shouldn't be necessary for code that does a simple thing.

## In Closing

The joy of simple code is that it frees you. You spend less time deciphering and more time thinking about the actual problem. You make changes with confidence. You sleep better.

Write code that your future self will thank you for.
