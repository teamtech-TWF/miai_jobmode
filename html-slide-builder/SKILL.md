---
name: html-slide-builder
description: Build or update static HTML slide decks when the task is to create slides, add sections, restyle a deck, or generate a new presentation from outlines, notes, or workshop plans using a plain HTML/CSS/JavaScript slide architecture.
---

# HTML Slide Builder

Use this skill when the user wants to build, expand, or restyle a static slide deck built with plain HTML, CSS, and JavaScript.

This skill is for projects where slides are browser-based and rendered without frameworks.

## First rule

Before creating or editing slides, always extract the important information from the source material first.

That means:

- read the outline, notes, brief, or workshop plan
- identify the core sections
- identify the teaching goal or communication goal
- identify the must-keep phrases, deliverables, and actions
- compress long source material into slide-sized points

Do not start generating slides from vague assumptions when the project already contains source material.

After extracting the important information, create `DESIGN_GUIDELINE.md` before building the deck.

`DESIGN_GUIDELINE.md` should capture the distilled direction for the slides so the design and content stay aligned during implementation.

## Architecture pattern

Typical structure:

- One HTML shell file per deck
- One JavaScript file with a `slides` data array plus render/navigation logic
- One CSS file for the deck theme, or a shared CSS file when appropriate

Do not introduce frameworks, bundlers, or package tooling unless the user explicitly asks.

For reusable workshop decks, prefer runtime rendering from slide objects in JavaScript.

For bespoke keynote-style horizontal decks, a self-contained HTML file with inline CSS and a small amount of inline JS is acceptable when each slide needs highly custom layout.

In this repo, both patterns exist:

- `workshop-slides/index.html` shows the horizontal full-viewport slide pattern
- `workshop-slides/deck.js` plus `workshop-slides/styles.css` shows the reusable data-driven deck pattern

## Default workflow

1. Read the relevant outline, brief, notes, or workshop document first.
2. Pull out the important information before writing slides.
3. Create `DESIGN_GUIDELINE.md` from the distilled information.
4. Inspect the target deck's existing pattern before editing:
   - reusable JS-rendered deck
   - bespoke horizontal HTML deck
5. Reuse existing slide types or layout blocks when possible.
6. If a new slide type is necessary, update the renderer and matching CSS in the same change.
7. Keep the HTML file minimal when using the reusable pattern: shell, chrome, nav, template, script reference.
8. Put content in the JS `slides` array unless the deck is intentionally built as a bespoke horizontal HTML presentation.
9. Validate with `node --check` on the edited script file when JS is present.
10. Review mobile behavior carefully when slides become dense.

## Information extraction checklist

Before slide creation, identify:

- the audience
- the deck goal
- the section order
- the main concepts
- the workshop activities
- the required outputs or deliverables
- any phrases or statements that should stay verbatim or nearly verbatim
- what can be shortened or merged

If source material is messy, rewrite it into a clean slide plan first.

## DESIGN_GUIDELINE.md

After extracting the source material, create `DESIGN_GUIDELINE.md`.

This file should summarize the decisions that guide slide creation. Keep it concise and practical.

Typical contents:

- project or deck goal
- target audience
- core sections
- key messages
- workshop actions or deliverables
- tone of voice
- visual direction
- constraints
- what must not be lost during simplification

Example structure:

```md
# Design Guideline

## Goal
Explain the topic clearly and keep students engaged.

## Audience
Beginner or mixed-skill learners.

## Core Sections
- Opening
- Main concepts
- Workshop
- Reflection

## Key Messages
- Keep the strongest teaching points visible.
- Break complex ideas into short slides.

## Visual Direction
- Clear hierarchy
- Strong section breaks
- Mobile-safe spacing

## Constraints
- Avoid dense text blocks
- Reuse existing slide types where possible
```

Use `DESIGN_GUIDELINE.md` as the bridge between source material and implementation.

## HTML shell requirements

Each deck HTML file should usually include:

- page title
- linked CSS
- ambient/background layers if the deck uses them
- top chrome with current section
- progress bar
- `main#deck`
- bookmark rail
- previous/next navigation
- slide template
- script tag for the deck JS

Keep the HTML shell simple. The JS should populate the slides.

## Horizontal presentation pattern

When building a horizontal slide deck like `workshop-slides/index.html`, use these rules:

- The deck container should be a horizontal flex row.
- Use `overflow-x: auto`, `overflow-y: hidden`, `scroll-behavior: smooth`, and `scroll-snap-type: x mandatory`.
- Each slide should use `width: 100vw`, `min-width: 100vw`, `height: 100vh`, and `scroll-snap-align: start`.
- Keep `html` and `body` locked to the viewport so the experience behaves like slides, not a long webpage.
- Provide at least two navigation methods:
  - arrow buttons or previous/next controls
  - keyboard navigation
- Prefer adding progress dots, slide counters, or bookmarks so viewers can always see their place.
- On smaller screens, allow vertical scrolling inside a slide if content would otherwise become unreadable.

Horizontal decks should feel paced and room-friendly. Avoid layouts that depend on freeform page scrolling to make sense.

## JavaScript deck requirements

The JS file should usually contain:

- `const slides = [...]`
- DOM references
- small render helpers
- slide markup builder by `type`
- bookmark rendering
- progress/current slide updates
- hash navigation
- keyboard and touch navigation

Prefer slide objects like:

```js
{
  type: "statement",
  section: "Opening",
  eyebrow: "Core Idea",
  title: "Good UI guides attention.",
  copy: "Interface design should tell users what matters first."
}
```

## Common slide types in this repo

Common existing types in projects like this include:

- `hero`
- `section`
- `statement`
- `list`
- `cards`
- `compare`
- `metrics`
- `prompt`
- `workshop`
- `resources`
- `quote`
- `code`

Prefer reusing an existing type before inventing a new one.

## Content rules

- Keep titles short and presentation-ready.
- Use sentence-style titles.
- Group content into sections with clear teaching progression.
- Favor scannable slides over dense paragraphs.
- For workshop decks, make actions explicit: what students do, what output they produce, and why it matters.
- If the user provides an outline, convert it into slide-sized chunks instead of copying long prose directly.
- Pull the strongest information out of the source before deciding slide count.
- If one source section is too long, split it into multiple clearer slides instead of overpacking one slide.

## Styling rules

- Preserve the project's static-deck architecture.
- Use 2-space indentation.
- Keep CSS class names kebab-case.
- If a deck needs its own look, create a deck-specific CSS file.
- If only small changes are needed, reuse the existing CSS pattern.
- For horizontal decks, build styling around viewport-filling slides, structured grids, and persistent navigation controls.
- Mobile readability matters more than rigid full-screen slide snapping when content is long.

## Mobile and overflow rules

Dense slides can break mobile scrolling. Check:

- title sizes
- card density
- list length
- padding on small screens
- scroll snap behavior on narrow viewports

If slides are long on mobile, prefer:

- smaller typography
- tighter card spacing
- natural-height slides
- vertical overflow inside the current slide before disabling the horizontal deck pattern entirely

## Validation

After editing a deck JS file, run:

```sh
node --check <deck-file>.js
```

Examples:

```sh
node --check script.js
node --check day2.js
node --check day3.js
```

Also confirm:

- HTML references the correct CSS and JS files
- any new slide type has matching renderer support
- CSS and JS stay in sync
- slide density is still readable on mobile

## When creating a new deck

For a new deck, create:

- `<name>.html`
- `<name>.js`
- optionally `<name>.css`

Start from the existing deck shell pattern rather than inventing a new structure.

If the request is explicitly for a horizontal presentation, start from `workshop-slides/index.html` unless the target deck already uses the reusable JS renderer.

## Do not

- do not add React, Vue, or build tooling
- do not hardcode whole slides directly into HTML unless the deck is intentionally a bespoke horizontal presentation
- do not add a new slide type without renderer support
- do not skip source review before slide generation
- do not skip `DESIGN_GUIDELINE.md` after extracting the important information
- do not ignore mobile overflow on long workshop slides
- do not skip `node --check`
