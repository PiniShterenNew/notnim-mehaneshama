# Project Context

## Brand
"נותנים מהנשמה" is an Israeli charitable organization.
The brand should feel:
- human,
- dignified,
- emotionally warm,
- trustworthy,
- editorial rather than templated.

## Primary Objective
This site is a landing page, not the donation platform itself.

The donation process happens on an external website.
Therefore this landing page must focus on:
- trust building,
- emotional storytelling,
- clarity,
- outbound conversion.

## Audience
Primary audiences:
- warm traffic from WhatsApp/social campaigns,
- mobile-first visitors,
- Hebrew-speaking donors in Israel,
- people deciding emotionally within seconds whether they trust the organization enough to donate.

Secondary audiences:
- people looking for legitimacy and proof of impact,
- returning donors,
- families / supporters / community members.

## Core UX Outcome
A visitor should quickly understand:
1. who the organization helps,
2. why the need is urgent right now,
3. why this organization is credible,
4. what clicking “donate” will achieve.

## Current Page Structure
The current implementation already follows a long-form emotional landing model with these sections:
- opening emotional intro screen,
- main hero,
- emotional reality / story block,
- video block,
- who we help,
- donation meaning / donation amounts,
- activity gallery,
- trust/about section,
- testimonials,
- FAQ,
- final CTA.

This structure is generally correct and should be improved rather than reinvented unless there is a strong reason.

## Content Tone
Tone should be:
- direct,
- emotionally strong,
- dignified,
- non-sensational,
- Hebrew-first,
- suitable for a nonprofit audience in Israel.

Avoid:
- hype,
- startup jargon,
- overly corporate language,
- manipulative guilt language,
- generic stock-marketing phrasing.

## Functional Constraints
- Donation buttons must go to an external donation URL.
- Consider making the URL configurable via a single constant or variable.
- Optional: support analytics event tracking for outbound donation clicks.
- Optional: support external links for phone / WhatsApp / contact.

## Technical Preference
Because this is a landing page with external donation flow:
- prefer static-first implementation,
- optimize for performance,
- avoid unnecessary runtime JavaScript,
- prioritize responsive polish and trust signals.

## Success Criteria
The page succeeds if it:
- feels premium and emotionally convincing,
- performs well on mobile,
- clearly communicates impact,
- builds trust quickly,
- increases outbound donation clicks.