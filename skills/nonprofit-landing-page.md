# Skill: Premium Nonprofit Landing Page Audit + Refactor

Use this skill when working on a Hebrew RTL nonprofit landing page whose main goal is driving users to an external donation platform.

## Step 1 — Understand the intent
Before changing anything:
- read the design system,
- inspect the existing implementation,
- identify whether the current layout already supports the emotional narrative,
- avoid rebuilding from scratch unless the architecture is fundamentally broken.

## Step 2 — Audit the page
Review the page through these lenses:

### Narrative flow
Check whether the page moves naturally through:
1. emotional hook,
2. mission clarity,
3. evidence / trust,
4. concrete impact,
5. CTA.

### Visual fidelity
Check for violations of the design language:
- visible hard borders,
- generic card grids,
- overuse of shadows,
- weak hierarchy,
- inconsistent spacing,
- poor Hebrew typography,
- CTA inconsistency,
- insufficient premium feel.

### Conversion UX
Check:
- whether donate CTAs are repeated in the right places,
- whether CTA copy is consistent,
- whether trust signals appear before major asks,
- whether external donation behavior is clear,
- whether mobile CTA visibility is strong enough.

### Accessibility
Check:
- semantic landmarks,
- button/link semantics,
- keyboard focus states,
- contrast,
- alt text,
- reduced motion support,
- RTL correctness.

### Performance
Check:
- oversized imagery,
- unnecessary animations,
- too much client-side JS,
- layout instability,
- font loading impact.

## Step 3 — Refactor principles
When improving the page:

### Keep
- cinematic emotional tone,
- editorial whitespace,
- layered backgrounds,
- premium typography,
- documentary imagery,
- simple conversion flow.

### Improve
- section rhythm,
- trust-building clarity,
- CTA hierarchy,
- reusable styling structure,
- responsive polish,
- accessibility,
- semantic structure,
- external link behavior.

### Avoid
- app-like complexity,
- clutter,
- fake urgency widgets,
- marketing gimmicks,
- donation dark patterns,
- generic NGO visuals.

## Step 4 — CTA behavior
All donation CTA elements should:
- use one canonical external URL source,
- be easy to update globally,
- have consistent labels,
- support optional analytics tracking,
- be obviously actionable on mobile.

Suggested pattern:
- define a single `DONATION_URL`,
- optionally define `CONTACT_URL` / `WHATSAPP_URL`,
- reuse across navbar, hero, donation cards, sticky/mobile CTA, and final section.

## Step 5 — Output expectations
When completing a task:
1. briefly summarize the current issues,
2. explain your implementation plan,
3. implement the changes,
4. summarize the results in practical terms.

Always optimize for trust, clarity, elegance, and conversion.