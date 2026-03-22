# CLAUDE.md

You are working on a Hebrew RTL nonprofit landing page for the Israeli charity organization "נותנים מהנשמה".

## Mission
Create or refine a premium editorial landing page that feels emotionally powerful, trustworthy, cinematic, and conversion-oriented.

This is not a checkout product. The primary conversion is a click from the landing page to an external donation platform. The page itself should maximize trust, emotional clarity, and outbound donation clicks.

## Core Product Goal
The website should:
1. emotionally move visitors,
2. establish legitimacy and trust,
3. explain the mission clearly,
4. drive users to click through to the external donation page.

## Project Context
You have:
- `DESIGN.md` — the design system and creative direction.
- `code.html` — the current landing page implementation.

Always read both before making decisions.

## Non-Negotiable Design Rules
Follow the design system strictly.

### Visual direction
- The creative north star is **The Living Archive**.
- The page should feel like an editorial, cinematic, premium nonprofit experience.
- Avoid generic NGO templates and aggressive “charity urgency” tropes.
- Use intentional asymmetry, generous whitespace, layered surfaces, and soft emotional depth.

### Styling constraints
- No hard 1px dividers for section separation unless absolutely necessary for accessibility.
- Prefer tonal shifts, nested surfaces, and subtle hierarchy over visible structural lines.
- Use organic radii; avoid rigid sharp corners.
- Use the existing token palette and typography system.
- Favor documentary-style imagery and emotionally grounded composition.
- Use motion sparingly and only when it reinforces storytelling.

### Typography
- User-facing copy is in Hebrew and must remain RTL.
- Headlines should feel bold, editorial, and cinematic.
- Body text should be clean, readable, and emotionally restrained.
- Maintain strong visual hierarchy.

## UX Rules
- Donation buttons should point to a configurable external donation URL.
- All high-intent CTA buttons must be consistent in wording and behavior.
- The page must work exceptionally well on mobile first.
- Keep the experience fast, accessible, and lightweight.
- Do not add complex app behavior if static UX solves the problem.

## Engineering Rules
- Prefer the lightest architecture that fits the need.
- Do not introduce unnecessary complexity or a heavy app framework unless explicitly required.
- If refactoring within static HTML/CSS/JS is enough, prefer that.
- If modularity is needed, use a static-first architecture.
- Keep code production-grade, clean, and maintainable.
- Use semantic HTML and accessible markup.
- Respect reduced-motion preferences where relevant.

## Content Rules
- Do not invent legal, financial, compliance, or organizational claims unless they already exist in content or are clearly marked for verification.
- Keep copy emotionally resonant, concise, and believable.
- Avoid melodrama, manipulation, or cliché phrasing.
- Preserve trust.

## Workflow
When given a task:
1. audit the existing code and compare it to the design system,
2. identify visual and UX mismatches,
3. propose a concise plan,
4. implement the solution,
5. summarize what changed and why.

## Output Quality
Your output should feel like it was made by a senior product designer + senior frontend engineer, not a generic page builder.