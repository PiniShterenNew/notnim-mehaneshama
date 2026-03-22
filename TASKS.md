# TASKS.md

## Objective
Refactor the "נותנים מהנשמה" Hebrew RTL nonprofit landing page into a premium, trustworthy, conversion-focused landing page aligned with the Living Archive design system, with all donation CTAs linking to a single configurable external donation URL.

---

## Audit Findings (against DESIGN.md)

### Critical violations fixed
- **No-line rule broken**: `border-2 border-primary` on donation cards, `ring-4 ring-primary-fixed`, `border-r` in stats, `border-b` in trust card → all removed; replaced with ambient shadows and tonal layering
- **RTL gradient bug**: hero used `bg-gradient-to-r from-background` (opaque LEFT, text RIGHT) → fixed to `bg-gradient-to-l from-background` (opaque RIGHT ✓)
- **Wrong tokens throughout**: navbar used `text-blue-800`, footer used `bg-slate-50 text-blue-900 text-slate-500` → all replaced with design system tokens
- **CTAs were `<button>` not `<a>`**: no external URL, no `DONATION_URL` constant → all CTAs are now `<a class="donate-link">` with DONATION_URL injected by JS
- **Missing alt text on gallery images**: only `data-alt` present → proper `alt` on every image
- **Inaccessible FAB**: `animate-pulse` + no label → replaced with accessible sticky mobile CTA bar
- **No mobile menu JS**: hamburger rendered but did nothing → fully functional with aria-expanded + icon toggle
- **Duplicate Material Symbols font load** → removed duplicate
- **No semantic structure**: missing `<main>`, `<header>` → added with aria-labels
- **No reduced-motion support** → `@media (prefers-reduced-motion: reduce)` added

### Minor issues fixed
- Typewriter animation (RTL caret on wrong side, distracting) → replaced with refined `fadeUp` animations
- `scale-105` layout shift on popular card → removed; elevation via ambient shadow instead
- Dead `dark:` variants throughout → removed entirely
- `shadow-2xl` on video → replaced with ambient shadow per spec
- Gallery grid had no explicit row heights → `grid-auto-rows: 220px` set
- CTA wording was inconsistent → unified to "לתרומה עכשיו" / "לתרומה בסכום זה" / "לתרומה מאובטחת עכשיו"

---

## Current Step
All tasks complete.

## Task Checklist
- [x] Audit current code against DESIGN.md and task requirements
- [x] Create/update TASKS.md with execution plan and status
- [x] Full implementation — all sub-tasks complete:
  - [x] Global structure: `<header>`, `<main>`, `<footer>`, section IDs, skip link
  - [x] Centralize DONATION_URL configuration (single JS constant at top of script)
  - [x] Navbar: design tokens, glassmorphism, working mobile menu, CTA as `<a>`
  - [x] Sticky mobile donate bar (replaces inaccessible pulsing FAB)
  - [x] Intro section: refined fade-up animations, dual CTA (donate + scroll to story)
  - [x] Hero section: RTL gradient fixed, CTA as `<a>`, design tokens, ambient shadow on CTA
  - [x] Emotional reality section: proper alt text, brand color-burn overlay
  - [x] Video section: accessible play button, ambient shadow, img-brand overlay
  - [x] Who we help cards: no hard borders, ambient shadow
  - [x] Donation cards: all hard borders removed, CTAs as `<a>`, consistent wording, featured card uses elevation only
  - [x] Gallery: proper alt text, brand overlay, explicit grid row heights
  - [x] Trust/about section: `inverse-surface` cinematic break, stats without divider, frosted trust card
  - [x] Testimonials: `<figure>/<blockquote>/<figcaption>` semantics
  - [x] FAQ: `bg-surface-container-lowest` cards, hover states, proper headings
  - [x] Final CTA: `<a>` links, consistent wording, correct token colors
  - [x] Footer: design tokens throughout (no more bg-slate-50), `pb-20` on mobile for sticky bar clearance
  - [x] Reduced-motion support
  - [x] Focus-visible states (3px primary outline)
  - [x] Remove duplicate font load
  - [x] Remove dead dark: variants
- [x] Final QA pass — no violations found

## Assumptions
- `DONATION_URL` placeholder set to `'https://example.com/donate'` — **must be replaced before launch**
- Title retained as "קמפיין פסח תשפ"ד" — campaign-specific, update per future campaigns
- About section stats (10+ years, 50,000+ baskets) preserved as-is — not invented
- Section 46 tax credit claim preserved — exists in original content

## Phase 3 — Evergreen Generic Donation Page (2026-03-22)
- [x] Update head/meta tags: title, description, OG, Twitter (remove Passover)
- [x] Update OG/social image to volunteer group photo (attachments/4c114341...)
- [x] Update LCP preload to volunteer group photo
- [x] Navbar: replace text brand with logo image (attachments/37b770e2...)
- [x] Intro section: replace Passover hook with approved evergreen copy
- [x] Hero section: replace stock image with volunteer group photo; replace Passover headline/copy
- [x] Stories section: replace stock photo + Passover text with founder story (נחמן ישי ונחמן פרץ)
- [x] Video section: replace fake placeholder with Google Drive iframe embed
- [x] Who-we-help: remove Passover seasonal references from subtitle and card copy
- [x] Donate section: remove all donation amounts (₪52, ₪180, ₪360); replace with impact-driven CTA
- [x] Gallery: replace all 4 stock images with volunteer group photo showcase
- [x] Remove impact stats section entirely (unverified stats)
- [x] About section: remove unverified stats (10+, 50,000+); update text to match approved copy
- [x] Remove invented testimonials section (WhatsApp screenshots are the real proof)
- [x] Update WhatsApp testimonials subtitle (remove "השנה" seasonal wording)
- [x] FAQ: remove "לפסח" from physical donation answer; added 4th FAQ item
- [x] Final CTA: replaced stock image + Passover headline with approved closing copy + dark surface
- [x] Footer: replace text brand with logo image (white inverted)
- [x] JS: update DONATION_URL to meshulam.co.il canonical URL
- [x] JS: update WhatsApp share text (remove Passover reference, evergreen copy)
- [x] JS: remove stale video keyboard handler (replaced by iframe)

## Phase 2 — Enhancements (2026-03-22)
- [x] Social meta tags: OG + Twitter Card for WhatsApp/Facebook link previews
- [x] Scroll-reveal: IntersectionObserver fades section content up on viewport enter (respects reduced-motion)
- [x] Performance: `rel="preload"` on LCP hero image, `loading="lazy" decoding="async"` on all other images
- [x] Smooth scroll + `scroll-padding-top: 76px` so fixed nav doesn't obscure anchor targets
- [x] WhatsApp share button in final CTA (pre-fills share message with DONATION_URL dynamically)
- [x] Campaign impact stats bar (50,000+ baskets, 10+ years, 500+ volunteers, 100% to field) with count-up animation
- [x] Social icons in footer (WhatsApp, Facebook, Instagram) — WhatsApp links to share URL

## Completed Log
- 2026-03-22: Full audit completed. 14 critical issues + 7 minor issues identified.
- 2026-03-22: TASKS.md created with detailed execution plan.
- 2026-03-22: Full refactored `code.html` written — all 19 tasks completed.
- 2026-03-22: QA pass — zero design violations, all alt text present, DONATION_URL centralized.
- 2026-03-22: Phase 2 — 6 enhancement tasks completed.
- 2026-03-22: Phase 3 — Evergreen generic donation page. All 21 tasks completed.
  - Removed: all Passover/seasonal text, all 6 stock AI-generated images, donation amounts, unverified stats, invented testimonials
  - Added: approved volunteer group photo (hero + stories + gallery), updated logo (navbar + footer), Google Drive video iframe, founder story (נחמן ישי ונחמן פרץ), 3 impact CTA cards (no amounts), 4th FAQ item
  - Updated: DONATION_URL → meshulam.co.il, WhatsApp share text, OG/Twitter meta, LCP preload
- 2026-03-22: Phase 4 — Vite migration. Moved from CDN Tailwind to Vite + Tailwind v3 + PostCSS build system. Created index.html, src/style.css, src/main.js, vite.config.js, tailwind.config.js, postcss.config.js. Full evergreen audit passed — zero violations.

## Phase 4 — Vite Migration + Final Evergreen Verification (2026-03-22)

### Objective
Migrate the static CDN-based `code.html` to a proper Vite + Tailwind v3 + PostCSS build system, while verifying that all evergreen content from Phase 3 is fully preserved.

### Tasks
- [x] Create `package.json` with vite, tailwindcss, postcss, autoprefixer
- [x] Create `vite.config.js` (publicDir: 'public')
- [x] Create `tailwind.config.js` — all custom color tokens, fontFamily, borderRadius from inline config
- [x] Create `postcss.config.js`
- [x] Create `src/style.css` — @tailwind directives + all custom CSS (nav-glass, img-brand, donation-card, fade-*, reveal, reduced-motion)
- [x] Create `src/main.js` — all JS including DONATION_URL constant, donate-link injection, mobile nav, sticky CTA, WhatsApp share, scroll-reveal
- [x] Create `index.html` — clean entry point: no CDN script, no inline tailwind config, no inline style/script blocks
- [x] Copy `attachments/` → `public/attachments/` so images are served at `/attachments/...`
- [x] Run `npm install` — 90 packages, 0 vulnerabilities
- [x] Audit `index.html` and `code.html` for any remaining Passover/seasonal content → none found
- [x] Audit for donation amounts (₪) → none found
- [x] Audit for unverified stats (50,000+, 10+, 500+) → none found
- [x] Audit for non-approved media → only approved assets in use
- [x] Confirm DONATION_URL = meshulam.co.il in both `code.html` (line 1037) and `src/main.js` (line 5)
- [x] Confirm WhatsApp share text is evergreen (no Passover wording)
- [x] Confirm Google Drive video uses `/preview` embed format (not raw `/view` link)

### Approved assets in use
| Asset | Path | Used in |
|-------|------|---------|
| Volunteer group photo | `attachments/4c114341-9fbf-4410-973b-109c43d55c51.jpeg` | Hero bg, Stories section, Gallery section, OG/Twitter meta, LCP preload |
| Logo | `attachments/37b770e2-0c93-455e-aad1-3e6b7319997d.jpeg` | Navbar (color), Footer (white-inverted) |
| WhatsApp screenshot 1 | `attachments/IMG_8327.jpeg` | Testimonials grid |
| WhatsApp screenshot 2 | `attachments/IMG_8328.jpeg` | Testimonials grid |
| WhatsApp screenshot 3 | `attachments/IMG_8329.jpeg` | Testimonials grid |
| WhatsApp screenshot 4 | `attachments/IMG_8330.jpeg` | Testimonials grid |
| Google Drive video | `https://drive.google.com/file/d/1AuUyl6J7ssj8SnQtlyh74vghPPmZEaN6/preview` | Video section iframe |

### Donation URL centralization
- **`code.html`**: `const DONATION_URL` at line 1037 in inline `<script>` — injected into all `.donate-link` elements at runtime
- **`src/main.js`**: `const DONATION_URL` at line 5 — same pattern for Vite build
- URL: `https://meshulam.co.il/quick_payment?b=d3ad476e504e90ec2b464f7536101942`

### CTA wording chosen
Primary: **"לתרומה עכשיו"** — used consistently across navbar, hero, intro, donate section, about section, final CTA, and mobile sticky bar.

### Content replacements confirmed (Phase 3, verified in Phase 4 audit)
- **Replaced**: All Passover/seasonal text (פסח, חג, ליל הסדר, seasonal framing)
- **Replaced**: Donation amounts (₪52, ₪180, ₪360) → impact-driven cards with no amounts
- **Replaced**: Stock/AI-generated images → approved volunteer group photo + WhatsApp screenshots
- **Replaced**: Unverified stats (50,000+ baskets, 10+ years, 500+ volunteers) → removed entirely
- **Replaced**: Placeholder video → Google Drive iframe in `/preview` format
- **Replaced**: Invented testimonials → real WhatsApp gratitude screenshots
- **Updated**: OG/Twitter meta — evergreen, no seasonal wording; volunteer group photo as share image

## Blocked / Open Questions
- **Deployment**: OG/Twitter `og:image` uses root-relative path `/attachments/...` — must be updated to an absolute URL (e.g. `https://notnim-mehaneshama.co.il/attachments/...`) before production deploy for social sharing to work
- **Contact/WhatsApp URL**: `#contact` scrolls to footer; update social icon hrefs if real contact URLs are provided
- **Social links**: Facebook and Instagram footer icons link to `#` — update with real profile URLs
