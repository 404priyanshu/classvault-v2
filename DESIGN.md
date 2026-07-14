---
name: ClassVault
description: The university register — deep green, marigold stamps, and ledger typography for a study platform built on trust.
colors:
  green-deep: "#0c2b21"
  green: "#143f30"
  green-soft: "#1d5340"
  green-ledger: "#2f6b53"
  white: "#ffffff"
  off-white: "#f7f7f5"
  field-line: "#e4e5e1"
  ink: "#161a17"
  ink-body: "#363c38"
  ink-muted: "#566058"
  ivory: "#f4f1e4"
  marigold: "#f5a623"
  marigold-deep: "#9a6207"
  marigold-wash: "#fdf0d7"
typography:
  display:
    fontFamily: "Young Serif, Georgia, serif"
    fontSize: "clamp(2.8rem, 6.5vw, 4.9rem)"
    fontWeight: 400
    lineHeight: 1.04
  headline:
    fontFamily: "Young Serif, Georgia, serif"
    fontSize: "clamp(2.1rem, 4.5vw, 3.4rem)"
    fontWeight: 400
    lineHeight: 1.08
  title:
    fontFamily: "Young Serif, Georgia, serif"
    fontSize: "clamp(1.25rem, 2vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.2
  body:
    fontFamily: "Schibsted Grotesk, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Schibsted Grotesk, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    letterSpacing: "0.08em"
rounded:
  btn: "8px"
  panel: "10px"
  card: "12px"
spacing:
  section-y: "clamp(5rem, 8vw, 8rem)"
  card-pad: "1.75rem"
  shell-max: "1240px"
components:
  button-primary:
    backgroundColor: "{colors.marigold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.btn}"
    padding: "0 1.75rem"
    height: "3.25rem"
  button-secondary:
    backgroundColor: "{colors.green-deep}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.btn}"
    padding: "0 1.75rem"
    height: "3.25rem"
  card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
  card-green:
    backgroundColor: "{colors.green}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.card}"
---

# Design System: ClassVault

## 1. Overview

**Creative North Star: "The University Register"**

ClassVault's surfaces behave like the institutional ledger where things are recorded, stamped, and verified — the physical object that makes trust legible. Deep bottle-green fields ruled with faint ledger lines carry the brand's authority (the quiet of a library desk lamp at 11pm, not a startup pitch); true-neutral off-white pages carry the reading. Verification isn't asserted in copy — it's stamped, in marigold ink, slightly rotated, textured like a real rubber stamp. Notes appear as numbered register entries with inked star ratings.

The system explicitly rejects the generic SaaS landing (gradient heroes, metric blocks, identical card grids), ed-tech cliché (graduation caps, chalkboard props, primary-color play), social-app energy (streaks, FOMO), sterile gray note-tool minimalism — and, as of this identity, the cream-paper editorial-serif lane it replaced.

**Key Characteristics:**
- Committed color: bottle green carries ~40-50% of the page; marigold is the only accent
- Young Serif display — chunky 1970s-schoolbook warmth, one weight, never bolded
- The rubber stamp as the brand's autograph for verification states
- Ledger grammar: ruled lines, entry numbers, register tables, index tabs
- Honest voice: mechanics shown as proof; no fabricated numbers anywhere

## 2. Colors

A committed strategy: green is the institution, off-white is the page, marigold is the ink that certifies.

### Primary
- **Bottle Green** (#0c2b21): the brand field — hero, rooms, final CTA, footer, primary-on-light buttons. Raised surfaces on it use **Ledger Green** (#143f30) with **Green Soft** (#1d5340) borders; **Green Ledger** (#2f6b53) draws rules and green stamps on white.
- **Marigold** (#f5a623): the certifying ink — stamps, stars, primary CTAs, highlights on green. On light backgrounds, small text uses **Marigold Ink** (#9a6207), darkened to hold ≥4.5:1 on off-white.

### Neutral
- **Off-White** (#f7f7f5): the reading field. Deliberately chroma-neutral — not cream, not paper-warm. **White** (#ffffff) for cards; **Field Line** (#e4e5e1) for rules.
- **Ink** (#161a17) headings · **Ink Body** (#363c38) prose · **Ink Muted** (#566058) supporting text, the lightest color permitted for running text on light fields.
- **Ivory** (#f4f1e4): text on green, stepped to 72% (muted) and 60% (faint, captions only).

### Named Rules
**The Certifying Ink Rule.** Marigold means something was verified, rated, or is the primary action. It never decorates. If marigold appears on an element, the element is making a trust claim or asking for the click.

**The Two Fields Rule.** Every section sits on bottle green or off-white/white. No third background, no tints-as-sections, no gradients.

## 3. Typography

**Display Font:** Young Serif (with Georgia fallback)
**Body Font:** Schibsted Grotesk (with Arial fallback)

**Character:** A chunky 1970s-schoolbook serif that feels like a well-made textbook cover — warm, sturdy, slightly bookish — paired with a newspaper-commissioned grotesk that is exact without being cold. Contrast comes from the axis (old-style serif vs modern grotesk), not from weight tricks.

### Hierarchy
- **Display** (400, clamp(2.8rem, 6.5vw, 4.9rem), 1.04): hero headline only.
- **Headline** (400, clamp(2.1rem, 4.5vw, 3.4rem), 1.08): section headings. Plain statements — no italic games, no eyebrow kickers above them.
- **Title** (400, 1.25–1.65rem): card headings, plan names, FAQ questions, register entry numbers.
- **Body** (400, 15–18px, 1.75): Schibsted Grotesk, ≤62ch measure, Ink Body default; Ink Muted only for supporting text.
- **Label** (700, 11–12px, +0.08em, uppercase): sparse structural labels (ledger headers, index tabs, stamps). Bold grotesk, never mono.

### Named Rules
**The One Weight Rule.** Young Serif ships only 400. Hierarchy comes from size and color; never synthesize bold or italic on the serif.

**The No Eyebrow Rule.** Sections open with the headline itself. Uppercase labels live inside artifacts (ledger headers, tabs, stamps) where a real register would print them — never floated above headings as section grammar.

## 4. Elevation

Mostly flat, like printed matter. Light cards get a hairline border plus a soft, tight shadow (`0 1px 2px` + `0 12px 32px -18px`) — a sheet on a desk, not a floating panel. Green cards on green fields sit deeper, with a single large soft shadow. Depth never signals interactivity; borders and color do.

### Shadow Vocabulary
- **Sheet** (`0 1px 2px rgba(22,26,23,0.05), 0 12px 32px -18px rgba(22,26,23,0.22)`): `.card` on light fields.
- **Slab** (`0 24px 48px -20px rgba(0,0,0,0.5)`): `.card-green` on green fields.
- **Button press** (`0 2px 0` hard under-shadow): primary buttons carry a 2px hard shadow that collapses on `:active`, giving a physical press.

### Named Rules
**The Printed Matter Rule.** If an element could plausibly be printed in a ledger, it gets no shadow. Shadows are reserved for the few true cards.

## 5. Components

Elements press like good stationery hardware: hard under-shadow buttons that physically depress, stamps that thump in, rows that read as entries.

### Buttons
- **Shape:** 8px radius, 52px tall (40px in the header).
- **Primary (`.btn-marigold`):** marigold fill, ink text, 2px hard under-shadow; hover lightens to #ffb84a; active collapses the shadow and translates down 2px.
- **Secondary (`.btn-green`):** bottle green fill, ivory text, same press physics.
- **Outline (`.btn-outline-ivory` / `.btn-outline-ink`):** 1.5px border, transparent fill, for tertiary actions on each field.
- Focus: 2px marigold outline on green fields, green outline on light fields (`.focus-ring`).

### The Stamp (signature component)
`.stamp`: 2.5px solid border in the ink color, 7px radius, 11px 800-weight tracked uppercase, rotated −3°, distressed with an SVG turbulence mask so the ink breaks like a real rubber stamp. Variants: marigold (on green), green-ledger (on white), ink. Entrance: `stamp-in` — scales from 1.6 down to a settle, like being pressed. Use for verification and status moments only (The Certifying Ink Rule).

### Register rows / Ledger tables
Numbered entries (`entry № 042` in Young Serif), hairline `field-line` separators, star ratings inked in marigold, the featured row washed in `marigold-wash`. Headers are bold uppercase labels on a hairline rule.

### Index tabs
`.index-tab`: a small file-folder tab overlapping a card's top edge (8px top radii, no bottom border), white or marigold. Used to name an artifact the way a real file tab would.

### Cards / Containers
12px radius; white with hairline border on light fields, ledger-green with green-soft border on green fields. Internal structure divided by hairline rules, ledger-style.

### Inputs
10px radius, hairline border, off-white fill inside white cards. Focus via `.focus-ring`.

### Navigation
Bottle-green header, ivory links with a 2px marigold underline that draws in from the left (hover + IntersectionObserver-driven active state). Sticky; gains a soft shadow after 10px of scroll. Mobile: full-width green panel with 15px semibold links.

## 6. Do's and Don'ts

### Do:
- **Do** commit to the green: hero, rooms, final CTA, and footer sit on Bottle Green (#0c2b21). Hedging the drench with white padding sections around every green one weakens the voice.
- **Do** reserve marigold for trust claims and primary actions (The Certifying Ink Rule).
- **Do** keep running text at Ink Body (#363c38) on light and Ivory-muted (72%) on green; captions never lighter than Ink Muted (#566058) / Ivory-faint (60%).
- **Do** mark every product mockup "Product preview — sample data" — sample numbers live only inside clearly-labeled vignettes, never as page claims (PRODUCT.md: honest until proven).
- **Do** ship a `prefers-reduced-motion` alternative for every animation, including the stamp entrance and scroll reveals.
- **Do** design at 375px first.

### Don't:
- **Don't** build "generic SaaS landing" furniture: gradient heroes, hero-metric stat rows, identical icon-heading-text card grids (PRODUCT.md anti-reference, verbatim).
- **Don't** use "ed-tech cliché" imagery: graduation caps, chalkboards, childlike primary-color play — and no chalk textures on the green (PRODUCT.md anti-reference).
- **Don't** add "social/engagement app" mechanics: streaks, likes, FOMO countdowns, fake urgency (PRODUCT.md anti-reference).
- **Don't** drift into "sterile note tool" gray minimalism — the green field, the stamp, or the ledger grammar must be present on every screen (PRODUCT.md anti-reference).
- **Don't** fabricate proof: no invented user counts, university totals, partner marquees, or aspirational stats anywhere (PRODUCT.md: honest until proven).
- **Don't** revert to the cream/paper editorial-serif lane (Instrument Serif, mono eyebrows, tape/stickers) — that identity was retired deliberately.
- **Don't** use gradient text, side-stripe borders, glassmorphism, or repeated uppercase eyebrows above section headings (The No Eyebrow Rule).
- **Don't** put a stamp on anything that isn't a verification, status, or certification moment. A decorative stamp devalues every real one.
