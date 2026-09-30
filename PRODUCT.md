# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: IT and operations leads at medium and large companies (insurance, health, industry; e.g. the Sancor Seguros group, CCU). They arrive to evaluate a software partner for a custom build, a mobile app, IAM/PAM work or team outsourcing, and they need to decide whether Precission is credible and reachable enough to start a conversation.

Other audiences (government bodies behind Portal Ciudadano, foreign outsourcing buyers reading the EN version) exist but have not been confirmed as primary; design for the corporate lead first.

## Product Purpose

The public landing site for Precission S.R.L., an IT company with 20+ years in the market, based in Santa Fe, Argentina. It presents five service lines (custom software development, consulting, mobile apps, full identity and access lifecycle management over Active Directory, SAP and Google Workspace, and on-shore/off-shore outsourcing), shows real projects and clients, and turns qualified visitors into contacts through the form, WhatsApp or a meeting request.

Success means a corporate lead leaves convinced enough to write or book a meeting.

## Positioning

Two claims the site stands on:

1. **Closeness and tenure.** Over 20 years building IT solutions, with a team clients know in person, working from the Parque Tecnológico del Litoral Centro (Edificio TICs) in Santa Fe. The partner answers, commits and stays close after go-live.
2. **Proven products of its own.** Precission designs, builds and runs products in daily production use: Portal Ciudadano (GovTech / smart cities), Argos (security-workforce web panel + mobile app) and KineMobile (occupational rehabilitation app). That is proof of delivery, not a promise.

Security expertise (IAM/PAM) is a real service line and supports both claims, but it is not the lead differentiator.

## Operating Context

- Visitors come in cold (search, referral, a link shared before a meeting) and skim for services, proof and a way to make contact.
- Contact paths: contact form, direct WhatsApp (+54 9 342 4624067) and "coordinate a meeting".
- Bilingual: Spanish (es-AR, default, voseo register) and English, switched by the visitor or `?lang=en`. All copy lives in `site/js/i18n.js`.

## Capabilities and Constraints

- Static site (HTML + CSS + vanilla JS, no build step) served by nginx in Docker; `npm start` runs a local dev server on :8080.
- Every visible string must go through the i18n dictionary (`data-i18n`, `data-i18n-attr`, `data-i18n-list`) with ES and EN values.
- Project mockups are generated from `mockups/source/` by `npm run mockups` (puppeteer), not hand-edited.
- **Open decision:** the contact form is front-end only (validation + success state). Where leads go (email, CRM, etc.) is undecided; see the `TODO` in `site/js/main.js`. Do not imply delivery infrastructure that doesn't exist.
- Privacy policy (`site/privacidad.html`) follows Ley 25.326; no ad or tracking cookies; Google Fonts is the only third-party request.

## Brand Commitments

- Legal name **Precission S.R.L.** (double "s" is intentional); wordplay on *precisión* ("Tecnología construida con precisión").
- Voice: direct, warm, confident, Argentine Spanish with voseo ("Contanos", "Hablemos"); no generic-software hype.
- Existing identity assets: isotype `site/img/favicon.svg`, OG image `site/img/og-image.jpg`.

## Evidence on Hand

- Client logos: Prevención ART (Sancor Seguros), CCU, Prevención Salud (Sancor Seguros): `site/img/clients/`.
- Projects with brand marks and device mockups: Portal Ciudadano, Argos, KineMobile: `site/img/projects/`.
- Real team photo at the Parque Tecnológico: `site/img/team/equipo-precission.jpg`.
- Stated facts: 20+ years, 5 specialty areas, on-/off-shore delivery.
- **Absent:** testimonials, quotes, case-study metrics, pricing, certifications. Never invent them.

## Product Principles

1. **Show, don't claim.** Real products, real clients and real people carry the credibility; adjectives don't.
2. **Always reachable.** A human contact path (form, WhatsApp, meeting) is never more than a glance away.
3. **Close, not corporate.** Speak like a team you'll actually meet, not a faceless vendor.
4. **Tenure as reassurance.** 20 years signals staying power and follow-through after launch, not being old-fashioned.
5. **Bilingual parity.** Any content change ships in both ES and EN.
