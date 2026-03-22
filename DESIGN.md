# Design System Specification: Editorial Compassion

This design system is a bespoke visual framework crafted for "נותנים מהנשמה." It is designed to bridge the gap between high-end editorial aesthetics and deep human empathy. By moving away from "template" structures, this system prioritizes organic flow, spaciousness, and a premium tactile feel that honors the nonprofit's mission.

---

## 1. Overview & Creative North Star

**Creative North Star: "The Embracing Canvas"**
The system is built on the concept of an "Embrace"—inspired by the circular, cradling forms of the organization's logo. Unlike rigid corporate grids, this system uses **intentional asymmetry** and **organic layering** to create a digital experience that feels curated and alive.

**Editorial Integrity:**
We break the "standard website" look by using exaggerated typography scales, allowing images to bleed off-canvas, and utilizing generous white space (negative space) as a core functional element rather than an afterthought. The layout should feel like a high-end philanthropic lookbook: authoritative yet profoundly accessible.

---

## 2. Colors & Surface Philosophy

The palette transitions from a warm, human foundation to vibrant, caring accents.

| Role | Token | Hex | Usage |
| :--- | :--- | :--- | :--- |
| **Background** | `surface` | `#fbf9f4` | The warm, off-white "fine paper" base for all pages. |
| **Primary** | `primary` | `#215487` | Caring medium blue. Used for authoritative moments and trust. |
| **Secondary** | `secondary` | `#006972` | Light cyan. Used for supportive elements and calm. |
| **Accent** | `tertiary` | `#932568` | Warm pink-magenta. Used for emotional emphasis and "soul." |
| **Text** | `on-surface` | `#1b1c19` | Deep navy/charcoal for maximum readability and prestige. |

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Section boundaries must be established through:
1. **Background Color Shifts:** Transitioning from `surface` to `surface-container-low`.
2. **Negative Space:** Using large increments from the spacing scale (e.g., `16` or `20`) to separate content.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Depth is achieved by "stacking" container tiers:
*   **Base:** `surface` (#fbf9f4)
*   **Nesting Level 1:** `surface-container-low` (#f5f3ee) for large content blocks.
*   **Nesting Level 2:** `surface-container-lowest` (#ffffff) for prominent cards or floating elements.

### The Glass & Gradient Rule
To ensure a signature feel, use **Glassmorphism** for floating headers or navigation. Apply semi-transparent surface colors with a `backdrop-blur`. 
*   **Signature Textures:** Use subtle linear gradients for primary CTAs, transitioning from `primary` (#215487) to `primary-container` (#3e6da1) at a 135° angle to add "visual soul."

---

## 3. Typography

The typography is RTL-first, focusing on the elegance of Hebrew letterforms.

*   **Display (notoSerif):** High-contrast, elegant, and impactful. Used for "hero" emotional statements.
    *   `display-lg`: 3.5rem (The campaign "hook")
*   **Headlines (notoSerif):** Authoritative and strong.
    *   `headline-lg`: 2rem (Section titles)
*   **Body (manrope):** Modern, clean, and highly legible. Manrope’s geometric nature balances the serif's traditional feel.
    *   `body-lg`: 1rem / Leading: 1.6 (Generous line height for editorial feel)
*   **Labels (manrope):** Small-caps or increased letter-spacing for a sophisticated, technical touch on metadata.

---

## 4. Elevation & Depth

We eschew "flat" design in favor of **Tonal Layering**.

*   **The Layering Principle:** Avoid shadows where background shifts suffice. A `surface-container-lowest` card on a `surface-container-low` background creates a "soft lift" that feels premium and integrated.
*   **Ambient Shadows:** When a float is required (e.g., a donation modal), use a shadow with a 24px–48px blur at 4%-6% opacity. The shadow color should be a tinted navy (`on-surface` at 5% alpha), never pure black.
*   **The "Ghost Border" Fallback:** If a container needs more definition, use a "Ghost Border": `outline-variant` at 15% opacity. High-contrast outlines are strictly forbidden.
*   **Organic Shapes:** Inspired by the logo, use the `xl` (1.5rem) or `full` roundedness scale for buttons and organic image masks.

---

## 5. Components

### Buttons (The "Soul" Action)
*   **Primary:** Gradient fill (`primary` to `primary-container`), `full` roundedness. Large horizontal padding (`spacing-6`).
*   **Secondary:** Ghost style. No background, `outline-variant` (20% opacity) border, `primary` text.

### Cards & Lists
*   **Rule:** No divider lines. 
*   **Implementation:** Separate list items with `spacing-4` vertical gaps. Use a subtle `surface-container-low` background on hover to indicate interactivity.
*   **Asymmetrical Cards:** Images in cards should use the "curved divider" logic—one corner (top-right for RTL) should have a significantly larger radius than the others to mimic the logo's flow.

### Organic Dividers
Instead of a straight line, use the **Signature Curved Divider**: a subtle, low-frequency SVG wave that separates major narrative sections, mirroring the "hands" in the logo.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical layouts. If an image is on the right, let the text on the left breathe with a large offset.
*   **Do** prioritize RTL flow. The "eye-path" should start with a strong Serif headline on the right, leading into spacious body text on the left.
*   **Do** use the `tertiary` (pink-magenta) sparingly—only for moments of deep human connection or critical CTAs.

### Don't:
*   **Don't** use 100% black text. Always use `on-surface` (#1b1c19) to maintain the premium, soft feel.
*   **Don't** use standard 4-column grids for everything. Break the grid. Let images overlap containers to create depth.
*   **Don't** use tight spacing. If in doubt, double the whitespace. This is a system for "soul," not "data density."
*   **Don't** use sharp 90-degree corners. The minimum radius should be `md` (0.75rem).

---

## 7. Spacing Reference
*   **Editorial Gap:** `16` (5.5rem) or `20` (7rem) between major sections.
*   **Content Grouping:** `4` (1.4rem) or `6` (2rem) for related items.
*   **Micro-spacing:** `1.5` (0.5rem) for label-to-input relationships.