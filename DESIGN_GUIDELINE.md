# Design Guideline

## Goal

Build workshop decks as horizontal, full-viewport presentations that feel like a guided room narrative rather than a long scrolling document.

## Audience

Internal facilitators, strategy teams, and client-side workshop participants who need to follow a story slide by slide in a room setting.

## Core Structure

- One idea per horizontal slide.
- Full-screen sections arranged left to right.
- Clear opening, comparison, framework, activity, and decision slides.
- A visible navigation system so the audience always knows where they are.

## Key Messages

- The deck should present a guided sequence, not a freeform webpage.
- Each slide should land as a complete frame with a clear headline and one supporting structure.
- Horizontal movement should reinforce pacing and progression.
- Dense workshop information must still be scannable within one viewport.

## Visual Direction

Use the current `workshop-slides/index.html` approach as the baseline:

- light background with soft radial color washes
- bold navy headlines with blue-cyan accents
- glass or soft-card surfaces over a clean ambient backdrop
- strong contrast between slide headline, supporting copy, and structured content blocks
- fixed navigation controls that stay outside the slide canvas

## Horizontal Deck Rules

- The main deck container should use horizontal flex layout with `overflow-x: auto`.
- Slides should use `width: 100vw`, `min-width: 100vw`, and `height: 100vh`.
- Use `scroll-snap-type: x mandatory` on the deck and `scroll-snap-align: start` on each slide.
- Keep `html` and `body` locked to the viewport and prevent page-level scrolling.
- Use left/right arrows, keyboard navigation, and dot or bookmark controls together.
- On tablet and mobile, preserve horizontal navigation but allow vertical overflow inside an individual slide when content runs long.

## Slide Composition Rules

- Structure each slide with three zones when possible: topbar, main content, footer.
- Keep the main content area on a grid so hero, compare, card, table, and workshop layouts remain aligned.
- Favor short headline plus one strong visual structure:
  - card grid
  - comparison columns
  - process flow
  - agenda stack
  - decision table
- Avoid slides that require the audience to read long paragraphs before understanding the point.

## Content Rules

- Keep titles short, direct, and presentation-ready.
- Use sentence-style titles.
- Lead with the takeaway, then support it with cards, lists, or comparisons.
- Keep workshop actions explicit: what the room should validate, decide, or capture.
- If a topic needs more than one dense block, split it into another horizontal slide instead of overpacking one frame.

## Implementation Notes

- `workshop-slides/index.html` is the current reference for the horizontal pattern.
- For highly bespoke decks, a self-contained HTML file with inline CSS and small inline JS is acceptable.
- For reusable workshop decks, keep using the split architecture of HTML shell, CSS theme, and JS content/render logic.
- When a horizontal deck uses custom layouts per slide, static slide sections are acceptable if that is simpler than forcing everything through one generic renderer.

## Responsive Rules

- Collapse multi-column grids on narrower screens.
- Hide large decorative elements before reducing content clarity.
- Allow `.slide` to scroll vertically on small screens instead of shrinking content until it becomes unreadable.
- Keep controls touch-friendly and visible without covering important slide content.

## Constraints

- Preserve the horizontal presentation feel.
- Do not let decorative styling overpower workshop clarity.
- Do not rely on one huge slide to carry multiple decisions.
- Keep navigation, slide count, and room orientation obvious at all times.
