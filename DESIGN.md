---
name: Precission
description: Warm-dark bilingual landing for Precission S.R.L., built around the orange-and-white interlocking isotype.
colors:
  precission-orange: "#E04B26"
  peach: "#F4B9A0"
  warm-black: "#0E0806"
  warm-black-raised: "#1A0D08"
  deep-brown: "#3A1509"
  rust-brown: "#5C2412"
  cream: "#F7EDE6"
  paper: "#F3E7DF"
  white: "#FFFFFF"
  text-dim: "rgba(247, 237, 230, .66)"
  text-faint: "rgba(247, 237, 230, .55)"
  hairline: "rgba(247, 237, 230, .1)"
  error-soft: "#FF9B7F"
  error-border: "#FF7A55"
  whatsapp-green: "#25D366"
  project-portal: "#1BA7D9"
  project-portal-soft: "#D6F1FA"
  project-argos: "#3FBF7F"
  project-argos-soft: "#DCF3E6"
  project-kine: "#E0107A"
  project-kine-soft: "#FADCEB"
typography:
  display:
    fontFamily: "Montserrat, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 6.6vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Montserrat, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2.2rem, 5vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Montserrat, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.3rem, 1.8vw, 1.6rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  accent:
    fontFamily: "inherit (Montserrat)"
    fontWeight: "inherit"
  lead:
    fontFamily: "Inter, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.05rem, 1.4vw, 1.2rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Inter, Segoe UI, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Montserrat, Segoe UI, system-ui, sans-serif"
    fontSize: ".78rem"
    fontWeight: 600
    letterSpacing: "0.18em"
  button:
    fontFamily: "Montserrat, Segoe UI, system-ui, sans-serif"
    fontSize: ".95rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.01em"
rounded:
  sm: "14px"
  md: "22px"
  lg: "28px"
  xl: "32px"
  sheet: "40px"
  pill: "999px"
spacing:
  gutter: "clamp(20px, 4vw, 48px)"
  container: "1240px"
  nav-height: "76px"
  grid-gap: "18px"
  section-y: "clamp(90px, 12vw, 160px)"
  section-head-gap: "clamp(48px, 6vw, 80px)"
components:
  button-primary:
    backgroundColor: "{colors.precission-orange}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "16px 28px"
  button-primary-hover:
    backgroundColor: "{colors.peach}"
    textColor: "{colors.warm-black}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "16px 28px"
  button-ghost-hover:
    textColor: "{colors.peach}"
  button-small:
    padding: "11px 20px"
  service-card:
    backgroundColor: "{colors.warm-black-raised}"
    rounded: "{rounded.md}"
    padding: "36px 32px 34px"
  service-card-feature:
    backgroundColor: "{colors.precission-orange}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
  project-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.warm-black}"
    rounded: "{rounded.xl}"
    padding: "clamp(28px, 4vw, 56px)"
  input-field:
    backgroundColor: "rgba(14, 8, 6, .45)"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "26px 18px 10px"
  chip-category:
    textColor: "{colors.warm-black}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  eyebrow:
    textColor: "{colors.peach}"
    typography: "{typography.label}"
  lang-toggle-active:
    backgroundColor: "{colors.precission-orange}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "7px 10px"
---

# Design System: Precission

## Overview

**Creative North Star: "Precision Under Ember Light"**

The system is engineering exactness lit by warm light. The interlocking isotype (a white and a Precission Orange arrow locking around a warm-black dot) sets the tone: two exact geometric forms meeting cleanly, on a dark ground that is never neutral. Heavy, tightly tracked Montserrat carries the precision. Granular orange-and-peach light carries the warmth: slow radial blobs, a fixed film-grain layer, glowing accents. Emphasis never changes the typeface: one phrase per headline shifts to peach, and the headline closes on a Precission Orange full stop, a small echo of the isotype's geometry.

Density is spacious and cinematic. Sections breathe (90–160px vertical padding), headlines are large, and each section has one clear focal point. The page lives almost entirely in the warm-black world, with one deliberate inversion: the Projects section rises as a paper-colored sheet with rounded top corners, so the real product work reads as the page's centerpiece.

Motion is part of the identity (the isotype assembling on load, line-by-line headline reveals, manifesto words lighting up on scroll) but it has to stay in service of the content. The confirmed anti-reference is an **overloaded, noisy** page: so many effects running at once that the content gets lost.

**Key Characteristics:**
- Warm-black ground (never pure #000, never cool gray) with orange and peach as the only light sources.
- One typeface for every headline: the accent phrase changes tone (peach on dark, orange on paper), never family or style, and the closing period is orange.
- Depth from layers of translucent dark glass, not from floating white cards.
- Pills and generous radii everywhere; no sharp corners on interactive elements.
- Film grain over the whole page, matching the brand piece.
- One light "sheet" section (Projects) that inverts the palette for emphasis.

## Colors

A warm, near-monochrome palette of blacks and browns, lit by one orange and its peach glow.

### Primary
- **Precission Orange** (#E04B26): The brand's signal color, taken from the isotype. Primary buttons, the active language pill, step indicators when active, nav underlines, the rotated marquee band, the feature service card, list markers and section numbers on the legal page. It is also the source hue of every glow and blob.

### Secondary
- **Peach** (#F4B9A0): Orange's light. Accent phrases in headlines on dark surfaces, the manifesto's accent word, eyebrows, icon strokes, floating-label focus color, the focus ring, link hover, and the fill-up color on primary button hover. Peach is how orange reads *as light* rather than *as signal*.

### Neutral
- **Warm Black** (#0E0806): The page ground and the main text color on light surfaces. Also the dot at the center of the isotype.
- **Warm Black Raised** (#1A0D08): Slightly lifted ground for alternating sections (team, contact, method end) and the success overlay.
- **Deep Brown** (#3A1509) and **Rust Brown** (#5C2412): Tonal depth inside gradients: service card fills, hero and contact corner glows. Rust Brown is also the eyebrow color on light surfaces.
- **Cream** (#F7EDE6): The main text color on dark surfaces, and the plate behind client logos.
- **Paper** (#F3E7DF): The background of the Projects sheet.
- **White** (#FFFFFF): Headline and button text on dark, the white arrow of the isotype, project card surfaces.
- **Text Dim / Text Faint / Hairline** (cream at 66% / 55% / 10%): Secondary copy, tertiary metadata and floating labels, and the 1px dividers and card borders respectively.

### Scoped accents
- **Project accents** (Portal Ciudadano #1BA7D9, Argos #3FBF7F, KineMobile #E0107A, each with a pale "soft" tint): Used only inside their own project card, for the category chip, the media panel gradient and the halo, so each product keeps its own brand. They are passed per card as the `--accent` and `--accent-soft` custom properties.
- **WhatsApp Green** (#25D366): Only on WhatsApp affordances (the floating button and the contact-list icon).
- **Error** (#FF9B7F text, #FF7A55 border): Form validation only. A warm coral, so errors stay inside the palette.

### Named Rules
**The Warm Ground Rule.** Every dark surface is a warm black or brown (#0E0806, #1A0D08, #3A1509, #5C2412, or cream-tinted transparency). Neutral grays and pure #000 never appear.

**The Signal-and-Glow Rule.** Orange marks action and state; peach marks accent and light. Don't use peach for a primary action, and don't use orange for body-level accents on dark surfaces.

**The Guest Color Rule.** Project, WhatsApp and error colors are guests. They appear only inside their own component and never leak into Precission's own UI.

## Typography

**Display Font:** Montserrat 500–800 (fallback Segoe UI, system-ui)
**Body Font:** Inter 400–600 (fallback Segoe UI, system-ui)

**Character:** A heavy, tightly tracked geometric sans carries both the precision and the voice; warmth comes from color, not from a second display face. Inter keeps long-form copy quiet and legible.

### Hierarchy
- **Display** (Montserrat 800, clamp(2.6rem → 6rem), line-height .98, -0.035em): The hero title only, set line by line with a staggered reveal.
- **Headline** (Montserrat 700–800, clamp(2.2rem → 4rem), 1.05, -0.02em): Section titles; the contact and legal titles run slightly larger (up to 4.2–4.8rem, weight 800).
- **Title** (Montserrat 700, clamp(1.3rem → 1.6rem)): Service cards, method steps (1.45rem), project names (up to 3.2rem, 800).
- **Lead** (Inter 400, clamp(1.05rem → 1.2rem), Text Dim): The opening paragraph under a major headline, max ~560px.
- **Body** (Inter 400, 16px, 1.6): Card and section copy in Text Dim, ~520px max. On the legal page: 1.02rem, line-height 1.75, 760px column.
- **Label** (Montserrat 600, .72–.8rem, 0.08–0.18em tracking, uppercase): Eyebrows, card numbers, category chips, "last updated" lines.
- **Accent** (same family, weight and size as its headline): The one emphasized phrase in a headline, tinted peach on dark and orange on paper, always a solid color. In running copy (the project descriptions) it is Inter 500 in the text color.
- **Stop** (the headline's final period, Precission Orange): Headlines that end in a period set it apart in orange, right after the accent phrase.

### Named Rules
**The One Ember Word Rule.** Each headline gets at most one accent phrase, and it usually lands at the end ("…con precisión."), followed by the orange stop. Accents change color only: no italic, no serif, no size bump. Two accents in one headline dilute both.

**The Balanced Line Rule.** Headings and eyebrows use `text-wrap: balance` and paragraphs `text-wrap: pretty`, so no title or lead ends on a single orphaned word. The only deliberate single-word line is the hero's "precisión.", which is set as its own line.

**The Readable Floor Rule.** Running copy never drops below 16px (1rem), and every text role, including metadata, labels and legal notes, holds at least 4.5:1 against its surface. Hierarchy between body and metadata comes from size and tone (Text Dim vs Text Faint), never from fading text below AA. Counters use tabular numerals so they do not jitter while counting.

**The Tight Display Rule.** Montserrat at headline sizes and above always takes negative tracking (-0.02em to -0.035em) and a line-height at or below 1.05. Loose display type breaks the precision.

## Layout

A single centered container (1240px max plus fluid gutters of clamp(20px, 4vw, 48px)) holds every section. The fixed nav is 76px tall (68px under 860px), and scroll padding matches it.

Sections stack full-bleed with vertical padding of clamp(90px, 12vw, 160px). Section heads cap at 820px, or split into a title on the left and an aside (~360px) on the right, aligned to the baseline.

- **Services:** a 6-column bento with an 18px gap. Cards span 2, 4 (large or feature) or 6 (wide), and collapse to 3/6 at ≤1024px and to full width at ≤560px.
- **Projects:** a vertical stack of sticky cards that pile up (each offset 18px further down) on desktop, and become ordinary stacked cards at ≤860px with the media on top.
- **Method:** a 4-step row joined by a progress line that fills as you scroll; it becomes 2 columns and then 1.
- **Contact:** two equal columns (pitch and form) that stack at ≤860px.

Breakpoints are 1080px (nav switches to the hamburger), 1024px, 860px and 560px. The page never scrolls horizontally, and decorative blobs are clipped by their sections.

## Elevation & Depth

Depth is built from **layers of dark glass**: translucent warm-black panels (roughly 42–96% opacity) with backdrop blur of 12–20px, stacked on a ground lit by orange blobs. Frosted glass carries the nav pill, the scrolled nav bar, the language switcher, the mobile menu, the form and the team badge. Hairline borders in cream at 8–15% define the glass edges. Shadows are only there to separate planes and are always very soft and pushed far down (large negative spread). The warm orange and peach glows on buttons are interaction feedback, not resting elevation.

### Shadow Vocabulary
- **Plane separation** (`0 40px 80px -40px rgba(0,0,0,.7)`, and the team photo's `0 50px 100px -50px rgba(0,0,0,.9)`): Lifts a glass panel or photo off the ground.
- **Sheet card** (`0 -1px 0 rgba(14,8,6,.04), 0 30px 80px -40px rgba(58,21,9,.45)`): Project cards on the paper sheet; a brown-tinted shadow, never gray.
- **Signal glow** (`0 10px 30px -10px rgba(224,75,38,.7)`, rising on hover to `0 18px 40px -12px rgba(244,185,160,.6)`): Primary buttons and the back-to-top button.
- **Logo plate** (`0 20px 40px -24px rgba(0,0,0,.8)`): Cream client-logo plates on dark.

### Named Rules
**The Glass-Not-Card Rule.** On dark surfaces, a container is warm-black glass with a hairline border. Opaque light cards appear only on the paper Projects sheet and as the client-logo plates.

**The Negative-Spread Rule.** Every shadow uses a negative spread about half its blur, so it pools beneath the element instead of haloing around it.

## Shapes

The form language is soft and fully rounded, echoing the isotype's rounded arrow ends.

- **Pills (999px):** every button, the nav link group, the language switcher and its buttons, tags, chips and the badges.
- **Circles:** icon buttons (the toggle, socials, back-to-top), step numbers and contact icons.
- **Containers:** rounded on a fixed scale of 14px (inputs, notices), 22px (cards, pillars, logo plates, the TOC), 28px (the form), 32px (project cards, the team photo) and 40px (the top corners of the Projects sheet). Each steps down one level on small screens.

The one deliberate break from the grid is the orange marquee band, rotated -1.2° so it slices across the page at the seam under the hero.

## Components

Warm and precise: every control responds with a small, exact lift (-2 to -4px) and a warm color shift, eased on `cubic-bezier(.22, 1, .36, 1)` over 0.3–0.6s.

### Buttons
- **Shape:** full pill (999px), Montserrat 600 at .95rem, padding 16px 28px (small: 11px 20px), with an optional trailing arrow icon that nudges 4px right on hover.
- **Primary:** Precission Orange with white text and the signal glow. On hover a peach fill rises from the bottom, the text turns warm black and the button lifts 2px.
- **Ghost:** transparent, with a 1px border in cream at 25%. On hover the border and text turn peach and the button lifts 2px.
- **Focus:** a 2px peach outline offset by 3px (global).

### Chips
- **Category chip (projects):** a pill in the project's soft tint, with a warm-black uppercase label.
- **Feature chips (projects):** a pill with a 1px warm-black-at-12% border, Inter 500 at .82rem.
- **Tags (feature service card):** a pill with a 1px white-at-40% border, a Montserrat label at .75rem.

### Cards / Containers
- **Service card:** 22px radius, a gradient from Deep Brown at 55% to Warm Black Raised at 90%, a hairline border and 36/32px padding. On hover a cursor-following orange radial glow appears, the border warms to peach at 35%, the card lifts 4px and its icon tilts -6°. Each card has a small tracked number ("01") above a peach line icon.
- **Feature service card:** the same shape, filled with an orange-to-deep-orange gradient and a peach corner glow, with white text.
- **Project card:** a white surface on the paper sheet, 32px radius, sticky-stacking, with a two-column layout (content and media). The media panel uses the project's accent tint and a soft halo, and the mockup scales up 4% on hover.
- **Pillar:** a hairline-bordered panel in cream at 2%, 22px radius, with an orange line icon.

### Inputs / Fields
- **Style:** floating label, 14px radius, warm-black glass (45%), a 1px cream-at-14% border, padding 26px 18px 10px.
- **Focus:** the border turns Precission Orange, the fill deepens to 70%, a 4px orange-at-18% ring appears, and the label shrinks to 76% and turns peach.
- **Error:** a coral border (#FF7A55) and an error line (#FF9B7F) that slides open below the field.

### Navigation
- **Desktop:** the brand (isotype and wordmark) sits on the left. On the right are the language pill and a glass pill holding the Montserrat 500 links plus a small primary CTA. Link hover draws a 2px orange underline from left to right. Once scrolled, the whole bar becomes warm-black glass and the inner pill dissolves.
- **Mobile (≤1080px):** a circular hamburger that morphs into an X opens a full-width glass panel of large Montserrat 700 links separated by hairlines.
- **Language switcher:** a pill segmented control; the active language is filled with Precission Orange.

### Signature: Isotype Assembly
The hero isotype's two arrows slide in from opposite corners and lock together, then the center dot scales in. It's framed by an outer orbit ring that turns very slowly (60s) carrying a small peach dot, and a dashed inner ring turning the other way (28s) with a glowing orange dot. With a fine pointer, the mark and the hero blobs follow the mouse with a gentle parallax. Clicking the logo replays the sequence. This is the system's defining motion. On mobile (≤860px) the isotype stays as a ghosted mark (20% opacity) behind the top-right of the headline.

### Signature: Ember Blobs and Grain
Large radial gradients (orange → peach → transparent) sit behind the hero, manifesto, contact and legal page. Only the two hero blobs (and the legal page blob) drift, and very slowly (48–56s in the hero, small translate and rotate); the manifesto and contact blobs are still light. A fixed, static SVG film-grain layer at 11% opacity covers everything. This is the ember light of the North Star.

### Named Rules
**The Motion Budget Rule.** At most five things loop on their own at any time: the two hero blobs, the two orbit rings and the client-logo marquee. Everything else moves once (entrance, reveal, the isotype assembly) or only in response to the visitor (hover, scroll-linked manifesto and steps line). Attention cues (the WhatsApp pulse, the scroll cue) play three times and stop.

## Do's and Don'ts

### Do:
- **Do** keep every dark surface warm (#0E0806 / #1A0D08 / browns); tint borders and transparencies with cream (247, 237, 230), never with white or gray.
- **Do** give each headline at most one accent phrase in the same Montserrat, peach on dark and orange on paper, and close it with the orange stop (`<span class="stop">.</span>` after the `<em>`).
- **Do** build dark containers as translucent warm-black glass with hairline borders and 12–20px backdrop blur.
- **Do** make interactive elements pill-shaped, with a 2–4px lift and a warm color shift on hover, eased on `cubic-bezier(.22, 1, .36, 1)`.
- **Do** keep project, WhatsApp and error colors scoped to their own components.
- **Do** honor `prefers-reduced-motion`: turn off drift, grain, marquee and reveal motion and show content in its final state.

### Don't:
- **Don't** bring back a serif or italic accent inside headlines; the user rejected it as a generic AI-landing tell. Emphasis is color plus the orange stop.
- **Don't** let the page become overloaded or noisy. New motion or effects must not compete with the existing blobs, grain and marquee for attention, and content always wins.
- **Don't** add infinite animations, scroll-linked scaling or pulsing glows beyond the hero; they break the Motion Budget Rule.
- **Don't** use pure black, neutral gray or cool shadows anywhere; shadows are black or brown-tinted with a large negative spread.
- **Don't** use peach for primary actions or orange for passive accents on dark surfaces.
- **Don't** introduce sharp corners on interactive elements or containers.
- **Don't** set Montserrat display sizes with positive tracking or line-height above 1.05.
