# Task: Refactor the "נותנים מהנשמה" landing page into a production-ready premium donation landing page

## Context
You have:
- `DESIGN.md` — the design system and art direction,
- `code.html` — the current page implementation.

Use them as the source of truth.

## Objective
Refactor the existing landing page so it fully aligns with the design system and feels production-ready.

This is a landing page whose donation flow redirects users to an external donation website.

## Deliverables
Produce:
1. a concise audit of the current implementation,
2. a refactored, production-quality implementation,
3. a short summary of what changed and why.

## Required outcomes
The improved page must:
- remain Hebrew and RTL,
- feel premium, cinematic, and editorial,
- increase trust and clarity,
- improve mobile responsiveness,
- improve accessibility,
- improve CTA consistency,
- support an external donation URL cleanly.

## Implementation requirements
- Read and follow `DESIGN.md`.
- Reuse and improve the existing structure from `code.html` unless there is a strong reason to change it.
- Remove visual patterns that conflict with the design system.
- Make spacing, hierarchy, and rhythm more intentional.
- Ensure all donate buttons use a single configurable external URL.
- Ensure all repeated CTA labels are consistent.
- Improve semantic HTML and accessibility.
- Keep the code clean and maintainable.
- Avoid unnecessary framework complexity.

## Specific things to check
Audit and improve:
- navbar clarity and sticky behavior,
- hero composition and CTA hierarchy,
- trust signals,
- donation amount cards,
- emotional storytelling sections,
- gallery rhythm,
- FAQ usability,
- final CTA strength,
- footer clarity,
- mobile CTA behavior,
- motion restraint,
- image treatment consistency,
- visual alignment with no-line / tonal-layering principles.

## Nice-to-have improvements
If useful, also add:
- a sticky mobile donate button,
- outbound click tracking hooks,
- better section IDs for navigation,
- clearer CTA microcopy,
- reusable utility classes or components,
- reduced-motion support.

## Constraints
- Do not invent legal or compliance claims.
- Do not turn this into a checkout flow.
- Do not add unnecessary libraries.
- Do not make it look like a generic SaaS landing page.
- Do not break RTL layout.

## Preferred execution style
Work like a senior designer-engineer:
- first identify the main problems,
- then make a focused plan,
- then implement decisively,
- then explain the result clearly.