# Repository Guidelines

## Project Structure & Module Organization

This repository is currently a small skill package. The main project content lives in [`html-slide-builder/SKILL.md`](/Users/tf-68/Documents/MIAI_Workshop/html-slide-builder/SKILL.md:1), which defines the workflow and technical rules for building static slide decks with plain HTML, CSS, and JavaScript. Add related reference material alongside that directory unless a broader repo layout is introduced later.

When expanding the skill, keep slide-deck artifacts grouped by purpose:
- `*.html` for the shell
- `*.css` for deck styling
- `*.js` for the `slides` array and render/navigation logic
- `DESIGN_GUIDELINE.md` for distilled content and design decisions

## Build, Test, and Development Commands

There is no package-based build system in this repository today. Prefer lightweight validation:

- `node --check script.js` validates deck JavaScript syntax.
- `node --check day2.js` is the expected pattern for per-deck checks.
- `rg --files html-slide-builder` quickly lists tracked skill files.

Do not add frameworks, bundlers, or package tooling unless the task explicitly requires them.

## Coding Style & Naming Conventions

Follow the conventions defined in `SKILL.md`:

- Use 2-space indentation in HTML, CSS, and JavaScript.
- Keep CSS class names `kebab-case`.
- Keep slide object keys concise and consistent, for example `type`, `section`, `title`, and `copy`.
- Keep HTML minimal; place slide content in JavaScript rather than hardcoded sections.

Write short, presentation-ready copy and prefer sentence-style slide titles.

## Testing Guidelines

Validation is currently manual and syntax-focused. After editing any deck script, run `node --check <deck-file>.js`. Also verify that HTML references the correct CSS and JS files, new slide types have matching renderer support, and dense slides remain readable on mobile.

## Commit & Pull Request Guidelines

Git history is not available in this workspace, so no repository-specific commit convention could be inferred. Use short, imperative commit subjects such as `Add workshop slide renderer` or `Refine mobile spacing rules`.

For pull requests, include:
- a brief summary of the content or workflow change
- the files affected
- validation performed, such as `node --check`
- screenshots when slide visuals or layout change

## Agent-Specific Notes

Before creating or editing slides, extract the important information from the source material first, then create `DESIGN_GUIDELINE.md`. Reuse existing slide types before adding new ones, and keep CSS and renderer updates in the same change.
