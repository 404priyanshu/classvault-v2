# Sakana Fugu Inspired Landing Page Design Reference

Source inspected: https://sakana.ai/fugu/  
Inspection date: 2026-06-22  
Purpose: document the visual system, layout, content structure, and implementation patterns of the Sakana Fugu landing page so a similar but original site can be built for another project.

## Design Summary

The page is a restrained technical product landing page with the tone of a research paper made interactive. It avoids glossy SaaS tropes and relies on white space, thin lines, careful typography, technical diagrams, tables, and short product claims. The design feels precise, academic, and premium without being decorative.

The strongest visual signals are:

- White background with alternating very pale grey sections.
- Black and grey typography with a single red accent.
- Large quiet hero with a bold product name and lots of empty space.
- Thin bordered grids instead of rounded marketing cards.
- Monospace labels, section markers, numbers, and table headers.
- Static diagrams and muted looping videos as proof, not decoration.
- Bilingual-ready structure, with English and Japanese typography handled carefully.

## Visual Language

Use a minimal palette:

| Role | Value | Usage |
| --- | --- | --- |
| Primary text | `#111827` | Headings, dark buttons, important copy |
| Body text | `#6b7280` | Paragraphs and explanatory text |
| Light text | `#9ca3af` | Notes, secondary metadata, disabled copy |
| Accent | `#e10600` | Section labels, numbers, active nav state |
| Border | `#e5e7eb` | Header line, cards, grids, dividers |
| Section tint | `#fafbfc` | Alternating background bands |
| CTA hover | `#1f2937` | Dark button hover state |

Avoid gradients, illustrated backgrounds, dense color blocks, oversized shadows, or playful iconography. The page should look engineered and intentional.

## Typography

Observed font stack:

```css
:root {
  --accent: #e10600;
  --font-en: "Poppins", "Noto Sans JP", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-jp: "Noto Sans JP", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}
```

Recommended Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Noto+Sans+JP:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Typography scale:

| Element | Size | Weight | Line height | Letter spacing |
| --- | --- | --- | --- | --- |
| Body | `16px` | `400` | `1.5` | normal |
| Hero title | `clamp(42px, 5.6vw, 72px)` | `500` | `1.02` | `-0.03em` |
| Mobile hero title | `clamp(40px, 12vw, 52px)` | `500` | `1.02` | `-0.03em` |
| Section heading | `clamp(26px, 3vw, 36px)` | `700` | `1.4` | normal |
| Card heading | `16px` | `600` | `1.5` | normal |
| Research card heading | `18px` | `600` | `1.5` | normal |
| Paragraph | `16px` | `400` | `1.85-1.95` | normal |
| Small paragraph | `13.5px` | `400` | `1.8-1.85` | normal |
| Section label | `12px` mono | `400` | normal | `0.14em` |
| Number labels | `12-13px` mono | `400` | normal | `0.06em` |
| Table text | `13.5px` mono | `400` | normal | normal |

The typography is not heavy. Even the hero title uses medium weight, which keeps the page elegant rather than loud.

## Page Structure

Recommended section order:

1. Sticky header
2. Hero
3. Product explanation
4. Architecture diagram
5. Feature grid
6. Research or technology proof
7. Product modes or use cases
8. Quantitative results
9. Qualitative demos
10. User voices
11. Pricing
12. FAQ
13. Final CTA
14. Footer

This order works because the page moves from promise, to explanation, to proof, to commercial detail, to conversion.

## Layout System

Use a global max width of `1280px`:

```css
.wrap {
  max-width: 1280px;
  margin: 0 auto;
}
```

Desktop sections should use generous vertical spacing:

```css
.section {
  padding: clamp(64px, 9vw, 128px) clamp(20px, 4vw, 48px);
}

.section.alt {
  background: #fafbfc;
}
```

Mobile sections:

```css
@media (max-width: 760px) {
  .section {
    padding: 48px clamp(16px, 4vw, 20px);
  }
}
```

Most content sections use a two-column grid on desktop: a narrow left rail for the section label and a wide content column.

```css
.section-grid {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 200px minmax(0, 1fr);
  gap: clamp(28px, 4vw, 56px);
}

.section-aside {
  position: sticky;
  top: 120px;
  align-self: start;
}

@media (max-width: 760px) {
  .section-grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 22px;
  }

  .section-aside {
    position: static;
    margin-bottom: 16px;
  }
}
```

## Header

The header is sticky, compact, and border-based.

Behavior:

- Sticky at top.
- White background at page top.
- On scroll, becomes translucent with blur and subtle shadow.
- On mobile, collapses into hamburger navigation.
- Mobile header height is about `44px`.

Suggested CSS:

```css
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
  transition: transform .25s ease, background .2s ease, box-shadow .2s ease;
}

.site-header[data-scrolled="true"] {
  background: rgba(255, 255, 255, .7);
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 24px rgba(15, 23, 42, .06);
}

.site-header__inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 clamp(20px, 4vw, 48px);
  min-height: clamp(64px, 6vw, 104px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

@media (max-width: 760px) {
  .site-header__inner {
    min-height: 44px;
  }
}
```

Navigation links should use JetBrains Mono, `12px`, slight tracking, grey by default, red when active.

## Hero

The hero is deliberately sparse. It does not need a complex illustration. It needs a strong name, a precise claim, whitespace, and one primary visual asset.

Desktop layout:

- Section top padding: `clamp(56px, 8vw, 104px)`.
- Two flexible columns: text and media.
- Gap: `clamp(32px, 5vw, 72px)`.
- Hero title margin top: `22px`.
- Body copy max width: around `520px`.
- CTA buttons appear inline below the copy.

Mobile layout:

- Hero padding: `24px 16-20px 0`.
- Hero grid stacks into one column.
- Inline hero buttons are hidden.
- A fixed bottom CTA bar appears instead.
- Hero lead text becomes `13.5px` with `1.6` line-height.

Suggested mobile CTA:

```css
.mobile-cta {
  display: none;
}

@media (max-width: 760px) {
  .mobile-cta {
    display: block;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 55;
    background: rgba(255, 255, 255, .95);
    backdrop-filter: blur(10px);
    border-top: 1px solid #e5e7eb;
    padding: 14px 16px calc(14px + env(safe-area-inset-bottom));
  }

  .mobile-cta__button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: #111827;
    color: #fff;
    font-family: var(--font-jp);
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    border-radius: 10px;
  }
}
```

## Buttons

Buttons are simple rectangles, not pill-shaped. Primary buttons are dark; secondary buttons are white with a grey border.

```css
.button {
  display: inline-flex;
  align-items: center;
  height: 46px;
  padding: 0 22px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid transparent;
  cursor: pointer;
}

.button.dark {
  background: #111827;
  color: #fff;
}

.button.dark:hover {
  background: #1f2937;
}

.button.ghost {
  background: #fff;
  color: #111827;
  border-color: #d1d5db;
}
```

## Section Labels

Each major section has a small red mono label and a short red underline.

```css
.section-label {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: .14em;
  color: var(--accent);
}

.section-label-bar {
  width: 28px;
  height: 2px;
  background: var(--accent);
  margin-top: 10px;
}
```

This creates the research-document feeling and gives long pages clear orientation.

## Feature Grid

The feature grid is one of the most reusable patterns.

Observed behavior:

- Outer grid has `1px` border.
- Cells are separated by `1px` grey gaps.
- Cells are white.
- Internal padding is `26px 24px`.
- No rounded corners.
- No shadow.
- Numbers are red mono labels.
- One intentionally empty pale cell can be used to preserve geometry.

```css
.cells {
  display: grid;
  gap: 1px;
  background: #e5e7eb;
  border: 1px solid #e5e7eb;
  margin-top: clamp(32px, 4vw, 48px);
}

.cells.three {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.cell {
  background: #fff;
  padding: 26px 24px;
}

.cell__number {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--accent);
  letter-spacing: .06em;
}

.cell__title {
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin-top: 14px;
  line-height: 1.5;
}

.cell__body {
  margin: 10px 0 0;
  font-size: 13.5px;
  line-height: 1.85;
  color: #6b7280;
}
```

## Research / Proof Cards

Use horizontal bordered cards for research papers, case studies, or technical foundations.

Pattern:

- Wrapper border: `1px solid #e5e7eb`.
- Each item uses flex wrap.
- Gap: `clamp(20px, 3vw, 40px)`.
- Padding: `clamp(20px, 3vw, 32px)`.
- Image column has its own border and white background.
- Text column has a small mono badge, title, body, and external link.

This component should feel like a citation block, not a marketing card.

## Tables and Results

Quantitative sections use tables and charts. Tables are horizontally scrollable on mobile.

```css
.table-wrap {
  margin-top: 24px;
  overflow-x: auto;
  border: 1px solid #e5e7eb;
}

.results-table {
  border-collapse: collapse;
  width: 100%;
  min-width: 760px;
}

@media (max-width: 760px) {
  .results-table {
    min-width: 560px;
  }
}

.results-table thead tr {
  background: #111827;
}

.results-table th {
  padding: 14px 18px;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: .03em;
  color: #e5e7eb;
  text-align: center;
  white-space: nowrap;
}

.results-table td {
  padding: 13px 14px;
  font-family: var(--font-mono);
  font-size: 13.5px;
  color: #374151;
  text-align: center;
  white-space: nowrap;
}

.results-table tbody tr:nth-child(odd) {
  background: #f8fafc;
}
```

## Qualitative Demos

The inspected page uses a carousel-like qualitative results area with multiple videos. For a similar project, use:

- One large video or media area at a time.
- Demo captions in short technical labels.
- Previous/next controls as simple arrow buttons.
- Dot indicators with active state.
- Muted videos, `object-fit: cover`, and `loop`.

Observed media pattern:

- Hero video: autoplay, muted, looped.
- Demo videos: muted and looped, activated by carousel state.
- Video blocks use clean rectangular framing.

## User Voices

Testimonials are not card tiles. They are rows.

```css
.voice-row {
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 20px;
  padding: 28px 0;
  border-bottom: 1px solid #e5e7eb;
}

.voice-row__number {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--accent);
}

.voice-row__role {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: .06em;
  color: #9ca3af;
}

.voice-row__title {
  font-size: 15px;
  font-weight: 600;
  color: #111827;
  margin-top: 8px;
}

.voice-row__quote {
  margin: 10px 0 0;
  font-size: 14px;
  line-height: 1.9;
  color: #374151;
  max-width: 760px;
}

@media (max-width: 760px) {
  .voice-row {
    grid-template-columns: 32px 1fr;
    gap: 12px;
  }
}
```

## Pricing

Pricing uses bordered article blocks rather than colorful plan cards.

```css
.plan {
  border: 1px solid #e5e7eb;
  background: #fff;
  padding: clamp(22px, 3vw, 32px);
}

.plan + .plan {
  margin-top: 24px;
}

.plan__head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e5e7eb;
}

.plan__title {
  font-size: 18px;
  font-weight: 700;
  color: #111827;
}

.plan__desc {
  margin: 14px 0 0;
  font-size: 13.5px;
  line-height: 1.8;
  color: #6b7280;
}
```

Nested price cells can use a `1px` grid, similar to the feature grid. Large prices use JetBrains Mono, around `30px`, weight `600`.

## FAQ

FAQ rows are accordion items with strong borders.

```css
.faqs {
  border-top: 1px solid #111827;
}

.faq {
  border-bottom: 1px solid #e5e7eb;
}

.faq__button {
  width: 100%;
  display: grid;
  grid-template-columns: 48px 1fr 28px;
  gap: 16px;
  align-items: center;
  padding: 22px 4px;
  background: transparent;
  border: 0;
  cursor: pointer;
  text-align: left;
}

.faq__number {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--accent);
}

.faq__question {
  font-size: clamp(15px, 1.4vw, 17px);
  font-weight: 600;
  color: #111827;
  line-height: 1.5;
}
```

## Footer

The footer returns to a calm white background with top border. Desktop uses a two-column grid: logo and copyright on the left, links on the right. Mobile stacks logo, links, and copyright.

```css
.footer {
  background: #fff;
  padding: 48px clamp(20px, 4vw, 48px);
  border-top: 1px solid #e5e7eb;
}

.footer__inner {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr minmax(0, 500px);
  grid-template-areas:
    "logo links"
    "copy links";
  column-gap: 64px;
  row-gap: 24px;
  min-height: 280px;
}

@media (max-width: 760px) {
  .footer {
    padding-bottom: 96px;
  }

  .footer__inner {
    grid-template-columns: 1fr;
    grid-template-areas:
      "logo"
      "links"
      "copy";
    min-height: 0;
  }
}
```

## Content Language

The content tone is concise, technical, and proof-driven.

Use:

- Direct product name as the hero heading.
- One crisp value proposition.
- Concrete technical nouns: API, model, benchmark, workflow, latency, reliability.
- Research and benchmark proof before pricing.
- Short role-based testimonials instead of emotional marketing quotes.
- Clear limitation notes where relevant.

Avoid:

- Generic hype such as "revolutionary" or "seamless".
- Long paragraphs in cards.
- Casual emojis or playful illustrations.
- Overexplaining how the interface works.

If bilingual support is needed, ship both languages in the markup and toggle visibility with a root class such as `.lang-ja`. Keep the Latin product name in the Latin font even inside Japanese copy.

## Interaction Model

The observed page uses lightweight vanilla JavaScript for:

- Smooth scroll navigation.
- Scroll spy active nav state.
- Header scroll state and mobile hide/show.
- Mobile menu open/close.
- Language selection persisted in `localStorage`.
- Qualitative results carousel.
- FAQ accordion.
- Video activation and warning handling.

Keep interactions small and predictable. This design does not need heavy animation.

## Observed Stack

The page appears to be a static site:

- HTML document served as `text/html`.
- Hosted by GitHub infrastructure, based on response headers.
- One linked CSS file: `/assets/css/fugu_lp.css`.
- One custom JS file: `/assets/fugu_lp/fugu_lp.js`.
- Google Fonts for Poppins, Noto Sans JP, and JetBrains Mono.
- CSS output includes Tailwind-like reset/utilities plus custom page CSS.
- No canonical runtime markers for Next.js, Nuxt, React hydration, Vue, Svelte, WordPress, or jQuery were visible.

For a similar build, a static HTML/CSS/JS site, Astro, Eleventy, Vite, or a minimal Next.js static export would all fit. The important part is not the framework; it is the restraint of the layout and CSS.

## Implementation Checklist

- Use a static or mostly static landing page.
- Define typography variables first.
- Build section rails before content details.
- Alternate white and `#fafbfc` section backgrounds.
- Use `1px` borders and square cells.
- Keep border radius low: `0-10px`, only CTA gets `10px` on mobile.
- Use one red accent consistently.
- Put proof sections before pricing.
- Use mono labels and numbering for structure.
- Add a sticky mobile bottom CTA.
- Keep all media rectangular and directly relevant.
- Avoid copying Sakana assets, copy, model names, diagrams, or research claims.

## Starter CSS Skeleton

```css
:root {
  --accent: #e10600;
  --text: #111827;
  --muted: #6b7280;
  --muted-light: #9ca3af;
  --border: #e5e7eb;
  --section: #fafbfc;
  --font-en: "Poppins", "Noto Sans JP", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-jp: "Noto Sans JP", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: var(--font-en);
  color: var(--text);
  background: #fff;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  overflow-x: clip;
}

.wrap {
  max-width: 1280px;
  margin: 0 auto;
}

.section {
  padding: clamp(64px, 9vw, 128px) clamp(20px, 4vw, 48px);
}

.section.alt {
  background: var(--section);
}

.h1 {
  margin: 22px 0 0;
  font-weight: 500;
  font-size: clamp(42px, 5.6vw, 72px);
  line-height: 1.02;
  letter-spacing: -0.03em;
}

.h2 {
  margin: 0;
  font-size: clamp(26px, 3vw, 36px);
  font-weight: 700;
  line-height: 1.4;
}

.lead {
  margin: 20px 0 0;
  font-size: 16px;
  line-height: 1.95;
  color: var(--muted);
  max-width: 680px;
}

.mono-label {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: .14em;
  color: var(--accent);
}

@media (max-width: 760px) {
  .section {
    padding: 48px clamp(16px, 4vw, 20px);
  }

  .h1 {
    font-size: clamp(40px, 12vw, 52px);
  }
}
```

