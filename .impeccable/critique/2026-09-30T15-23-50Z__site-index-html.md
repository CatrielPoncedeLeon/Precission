---
target: site/index.html
total_score: 22
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 2
target_identity: "file:C:\\Users\\Usuario\\Desktop\\Precission\\SUPERSECRETCODE\\site\\index.html"
target_fingerprint: "sha256:be314ec8fa2b15873d641a268c8bac7d2a9fd94259e071821e0052a48ad1d897"
target_path: "C:\\Users\\Usuario\\Desktop\\Precission\\SUPERSECRETCODE\\site\\index.html"
timestamp: 2026-09-30T15-23-50Z
slug: site-index-html
---
Method: dual-agent (A: design review · B: detector + browser)

## Design Health Score
| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of System Status | 2 | Form fakes "Enviando…" / "Recibimos tu mensaje" (main.js:262-273); nav has no Contacto link |
| 2 | Match System / Real World | 3 | ES title "Outsourcing development" in English; "GSuite" dated; "On & Off / shore" stat hard to parse |
| 3 | User Control and Freedom | 3 | Esc closes menu, "Enviar otro mensaje", anchors OK |
| 4 | Consistency and Standards | 3 | Only Portal has "Ver proyecto"; meeting CTA -> generic form; manifesto 5 serif accents vs One Ember Word Rule |
| 5 | Error Prevention | 2 | form.reset() wipes the lead's message after fake success |
| 6 | Recognition Rather Than Recall | 3 | Floating labels persist, nav persistent |
| 7 | Flexibility and Efficiency | n/a | Landing page, no repeat flows |
| 8 | Aesthetic and Minimalist Design | 3 | ~10 motion systems / 20 infinite animations, near the "overloaded" anti-reference |
| 9 | Error Recovery | 3 | Clear inline errors + focus; no aria-invalid/describedby/live region |
| 10 | Help and Documentation | n/a | Marketing landing; privacy linked |
| Total | | 22/32 (69%) | Acceptable (edge of Good) |

## Design Specificity Verdict
Visual layer authored (isotype assembly, ember palette, Projects paper sheet, real team photo); structure and copy category-standard agency landing. Positioning (closeness + tenure, proven own products) asserted more than shown.
Detector: 24 CLI findings / 19 runtime desktop. Real: low-contrast (#fff on #E04B26 4.0:1; #E04B26 on #F3E7DF 3.3:1; --text-faint 3.4:1 on form labels, form note, footer legal, card nums), 20 infinite animations, kicker-above-heading x5, gradient-text hero, dark glows, layout-transition on .field__error. False positives: buried-raster (grain), ai-color-palette cyan (Portal brand accent), design-system-radius (doc/code drift), overused-font (brand choice). No console errors, no horizontal overflow at 390px. Overlays ran headless only.

## Priority Issues
1. [P0] Contact form claims delivery that doesn't exist; resets user input. Fix: mailto/WhatsApp handoff with honest copy, or lead with direct channels; never reset on fake success. Command: /impeccable harden
2. [P1] Lorem ipsum / 00/00/2020 / N° 001000 placeholders visible in Portal Ciudadano mockup under "Soluciones reales". Fix: real content in mockups/source/, npm run mockups. Command: /impeccable polish
3. [P1] Proof shown, not substantiated; unbacked superlatives ("no pueden darse el lujo de fallar", "trazabilidad total", "organismos" with no public client). Fix: one factual line per project from team-supplied facts, founding year, soften claims; no invented metrics. Command: /impeccable clarify
4. [P2] Closeness not reachable at contact: no email, address, named person, response expectation; 7+ competing actions; meeting CTA -> generic form. Command: /impeccable clarify
5. [P2] Motion density (20 infinite animations) + --text-faint contrast fails AA + ghost isotype behind H1 on mobile + white on orange 4.0:1. Command: /impeccable quieter, then /impeccable audit

## Persona Red Flags
- Corporate IT lead: 3 logos (2 same group), no outcomes/dates; no email to forward; English service title; IAM has least proof.
- Jordan: "On & Off / shore" pun; IAM/PAM unglossed; no Contacto in desktop nav.
- Riley: fake success wipes data; phone accepts "------"; no-JS hides all .reveal content; no ARIA on errors.
- Casey: 11,855px scroll; orphaned "TI" in hero eyebrow; stacked floating buttons cover mockups.

## Minor Observations
- DESIGN.md documents a rotated orange marquee band that isn't in index.html; its CSS (styles.css:473-500) is dead.
- Manifesto 5 accent words (i18n.js:108).
- KineMobile copy in ad voice.
- Services don't link to related projects.
- Peach hero blob behind desktop nav pill lowers link contrast.
- Reduced motion handled well.

## Questions to Consider
1. Why does the longest dark stretch (Manifesto + Método + Pilares) go to adjectives instead of one real before/after?
2. What if Contact were written by the person who actually answers?
3. If only one ember effect could stay, which one?
