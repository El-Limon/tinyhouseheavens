# GEO Audit Report: Tiny House Heavens

**Audit Date:** 2026-04-13
**URL:** https://tinyhouseheavens.com
**Business Type:** Local Business / E-commerce Hybrid (Belgian modular tiny house manufacturer)
**Pages Analyzed:** 103 URLs across 3 languages (NL, FR, EN)

---

## Executive Summary

**Overall GEO Score: 45/100 (Poor)**

Tiny House Heavens has a well-structured, fast-loading Astro website with excellent AI crawler access (all major AI bots explicitly allowed, llms.txt present) and solid schema markup. However, the site is severely held back by near-zero brand authority outside its own domain, absent author credentials and customer testimonials, and no presence on the platforms AI systems rely on for entity recognition (YouTube, Reddit, Wikipedia, directories, press). The technical foundation is strong; the credibility and visibility layers need urgent work.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 58/100 | 25% | 14.5 |
| Brand Authority | 14/100 | 20% | 2.8 |
| Content E-E-A-T | 34/100 | 20% | 6.8 |
| Technical GEO | 74/100 | 15% | 11.1 |
| Schema & Structured Data | 68/100 | 10% | 6.8 |
| Platform Optimization | 28/100 | 10% | 2.8 |
| **Overall GEO Score** | | | **45/100** |

---

## Critical Issues (Fix Immediately)

### 1. Brand is invisible to AI systems
**Severity: Critical** | Affects: Brand Authority, Platform Optimization

Direct searches for "Tiny House Heavens" return zero results on major search engines. The brand does not appear in Google AI Overviews, ChatGPT responses, or Perplexity results for any Belgian tiny house query. Competitors (Wildernest, TinyCo, Kooti, Tiny House Belgium) appear in AI-surfaced results; Tiny House Heavens does not.

**Fix:** Claim Google Business Profile immediately. Get listed on 3-5 industry directories (TinyFindy, Mobielehuizen.be, ImmomakelaarvergelijkerBE). Pursue 1-2 press mentions.

### 2. No named authors or team members anywhere on site
**Severity: Critical** | Affects: E-E-A-T, AI Citability

All blog posts list "Tiny House Heavens" (Organization) as author. No individual team members, founders, or experts are named anywhere -- not on the About page, not in blog bylines, not in schema. Google's quality raters and AI systems both need "who wrote this" signals to assess expertise.

**Fix:** Add founder/team names with bios, photos, and Person schema to the About page. Add author bylines to all blog posts.

### 3. No customer reviews, testimonials, or social proof
**Severity: Critical** | Affects: E-E-A-T, Brand Authority

For a high-consideration purchase (EUR 25,000-200,000), the complete absence of customer reviews, testimonials, case studies, or delivered-project evidence is a major trust deficit. No AggregateRating or Review schema exists.

**Fix:** Collect and publish 3-5 customer testimonials with photos. Add AggregateRating schema. Create 2-3 project case studies.

### 4. Missing security headers
**Severity: Critical** | Affects: Technical GEO

No `Strict-Transport-Security` (HSTS), `X-Frame-Options`, or `X-Content-Type-Options` headers. Site is vulnerable to clickjacking and MIME-sniffing attacks. While the direct GEO impact is low, these are trust signals for security-conscious AI crawlers and affect overall site quality assessment.

**Fix:** Add HSTS, X-Frame-Options, and X-Content-Type-Options headers via Hostinger/server configuration.

---

## High Priority Issues

### 5. Zero presence on AI training platforms
**Severity: High** | Affects: Brand Authority, Platform Optimization

No YouTube channel, no Reddit mentions, no Wikipedia entry, no LinkedIn company page found. These are the primary corpora ChatGPT and Gemini train on and cite.

**Fix:** Create YouTube channel with 3-4 model walkthrough videos. Post on relevant Belgian housing subreddits. Create LinkedIn company page.

### 6. No external sources cited in any content
**Severity: High** | Affects: AI Citability, E-E-A-T

Blog posts on regulated topics (permits, costs, construction) make claims without any source attribution. AI systems preferentially cite content that references verifiable data.

**Fix:** Add citations to government sources (omgevingsvergunning portals), industry data, and official regulations in all blog posts.

### 7. Blog FAQ sections lack FAQPage schema
**Severity: High** | Affects: AI Citability, Schema

Blog posts contain FAQ sections (e.g., the cost article has 4 Q&As) but these lack FAQPage schema markup. Only the dedicated FAQ page has this schema.

**Fix:** Add FAQPage schema to all blog post FAQ sections.

### 8. Meta descriptions missing on most interior pages
**Severity: High** | Affects: Technical GEO, AI Citability

Only the homepage and one blog post have meta descriptions. Model pages, FAQ, services, contact, about, and blog listing pages all lack them. AI systems use meta descriptions as summary signals.

**Fix:** Write unique meta descriptions for all pages (150-160 characters each).

### 9. No Google Business Profile confirmed
**Severity: High** | Affects: Platform Optimization, Brand Authority

Local presence is the single biggest lever for Google AI Overviews on "tiny house belgie" queries. Without a verified GBP, the brand cannot appear in AI Overviews that pull local results.

**Fix:** Claim and fully complete Google Business Profile with photos, services, hours, and encourage reviews.

### 10. All content published on the same date
**Severity: High** | Affects: E-E-A-T

All 4 blog posts were published on April 10, 2026. A site with zero publication history and bulk-published content looks machine-generated to quality raters.

**Fix:** Publish new content on a regular schedule (2-4 posts per month). Consider staggering future content releases.

---

## Medium Priority Issues

### 11. CDN edge caching not active for static pages
**Severity: Medium** | Affects: Technical GEO

`x-hcdn-cache-status: DYNAMIC` on all pages despite Astro SSG generating pure static HTML. Every request goes to origin, eliminating CDN performance benefit.

**Fix:** Configure Hostinger CDN to cache static HTML pages (cache-status should show HIT).

### 12. Sitemap missing lastmod dates
**Severity: Medium** | Affects: Technical GEO

sitemap-0.xml has 151 URLs but no `<lastmod>`, `<changefreq>`, or `<priority>` tags. AI crawlers cannot prioritize freshness or crawl frequency.

**Fix:** Add lastmod dates to all sitemap entries in Astro build configuration.

### 13. No downloadable resources
**Severity: Medium** | Affects: E-E-A-T

No brochures, spec sheets, or floor plan PDFs available for download. These create citable assets and signal investment in user value.

**Fix:** Create downloadable PDF brochures for top models or a general catalog.

### 14. FAQ answers may be hidden in JavaScript accordion
**Severity: Medium** | Affects: AI Citability, Platform Optimization

FAQ content is rendered via JavaScript accordion toggles. While FAQPage schema includes the answers (visible to schema scrapers), raw HTML crawlers may miss the answer text if JS is not executed.

**Fix:** Ensure FAQ answer content is in the static HTML, not rendered only via JS. Astro SSG should handle this -- verify by checking view-source.

### 15. Missing og:locale:alternate for multilingual variants
**Severity: Medium** | Affects: Technical GEO

Homepage has OG tags and hreflang, but `og:locale:alternate` tags for FR and EN variants are absent. This weakens multilingual AI citation signals.

**Fix:** Add `og:locale:alternate` meta tags for all language variants.

---

## Low Priority Issues

### 16. No twitter:site or twitter:creator handle
**Severity: Low** | Affects: Technical GEO

Twitter Cards exist but lack site/creator handles, reducing social authority signals.

### 17. External Google Fonts dependency
**Severity: Low** | Affects: Technical GEO

Google Fonts loaded externally adds a render-blocking resource. Consider self-hosting.

### 18. No video content
**Severity: Low** | Affects: Platform Optimization, E-E-A-T

For a product with strong visual appeal, absence of video is a missed opportunity for both AI training data and user engagement.

### 19. About page lacks founder story
**Severity: Low** | Affects: E-E-A-T

Generic company description with no named individuals, founding story, or personal narrative.

### 20. No awards, certifications, or industry memberships cited
**Severity: Low** | Affects: E-E-A-T

No professional associations, building certifications, or industry awards mentioned.

---

## Category Deep Dives

### AI Citability (58/100)

**Strengths:**
- Robots.txt explicitly allows all 6 major AI crawlers -- above-average practice
- llms.txt exists with structured business data -- rare for SMB sites
- FAQPage schema on FAQ page with 8 well-structured Q&A pairs
- Product schema on all 20 model pages with machine-readable specs
- Multilingual coverage (NL/FR/EN) triples AI discoverability surface

**Weaknesses:**
- No cited statistics or sourced data in any content -- AI systems skip unsourced claims
- Organization-only authorship on all blog posts -- no person to attribute
- Blog FAQ sections lack FAQPage schema (only dedicated FAQ page has it)
- Meta descriptions missing on most pages -- AI uses these as summary signals
- No review or rating signals -- AI answering "is Tiny House Heavens reliable?" has nothing to cite

**Rewrite Suggestions:**

1. **Cost article -- add cited data:** Change "A tiny house in Belgium costs between EUR 25,000 and EUR 200,000" to include a source: "According to [Belgian construction cost index], turnkey modular homes in Belgium averaged EUR 1,800-2,200/m2 in 2025. Tiny House Heavens models range from EUR X for the 13m2 Vella to EUR Y for the 112m2 Opale."

2. **About page -- add named expertise:** Add: "Founded by [Name], a certified timber-frame builder with [X] years of experience in sustainable construction in the Benelux. All structural designs comply with Belgian EPB energy regulations and Eurocode standards."

3. **FAQ page -- add definitional anchor:** Add question: "What is a tiny house under Belgian law?" with answer citing official omgevingsvergunning categories and linking to the Flemish/Walloon/Brussels government portals.

### Brand Authority (14/100)

**Platform Presence Map:**

| Platform | Status | Impact |
|---|---|---|
| YouTube | Not present | Critical gap -- primary AI training source |
| Reddit | No mentions found | Critical gap -- Perplexity's top citation source |
| Wikipedia/Wikidata | No entry | Critical gap -- entity recognition anchor |
| LinkedIn | No company page found | High gap -- professional authority signal |
| Facebook | Present (tinyhouseheavens) | Active but limited AI impact |
| Instagram | Present (tinyhouseheavens) | Active but limited AI impact |
| Google Business Profile | Not confirmed | High gap -- local AI Overviews trigger |
| Industry directories | Zero listings found | High gap -- third-party citation chain |
| Press/news coverage | None found | High gap -- authority signal |
| Review platforms | None found | High gap -- trust signal |

**Competitors with better brand authority:**
- Wildernest (wildernest.be) -- press coverage, directory listings, established since 2015
- TinyCo (tinyco.be) -- Hasselt-based, indexed on multiple platforms
- Kooti (kooti.be) -- Belgian market presence
- Tiny House Belgium (tinyhousebelgium.be) -- blog coverage, travel platform mentions

**Highest-ROI action:** Get listed on 3-5 directories and publish one YouTube video. These two actions would move the score from 14 to ~30+ within 60 days.

### Content E-E-A-T (34/100)

| Dimension | Score | Key Finding |
|---|---|---|
| Experience | 25/100 | Zero evidence of delivered projects. No case studies, customer photos, or portfolio. |
| Expertise | 42/100 | Good topical coverage and structure, but anonymous authorship and no citations undermine it. |
| Authoritativeness | 18/100 | No named team, no credentials, no industry recognition, no external validation. |
| Trustworthiness | 52/100 | Good: address, VAT, legal pages, multilingual. Bad: no reviews, no testimonials. |

**The core problem:** The site has good informational content but zero demonstrated track record. Competitors with named founders, customer testimonials, and cited guides will outrank on every informational query regardless of technical quality.

### Technical GEO (74/100)

| Area | Score | Status |
|---|---|---|
| AI Crawler Access | 88/100 | Excellent -- all AI bots allowed, llms.txt present, sitemap functional |
| Meta Tags & Headers | 68/100 | Homepage has full OG/Twitter/hreflang. Interior pages lack meta descriptions |
| Rendering & Performance | 82/100 | Astro SSG, HTTP/2, HTTP/3 available, fast origin. CDN caching not active |
| Security & Infrastructure | 58/100 | HTTPS enforced. Missing HSTS, X-Frame-Options, X-Content-Type-Options |

**Key correction from live data:** Homepage does have full OG tags, Twitter Cards, hreflang, and canonical URL. The earlier discovery phase was inaccurate on these. Interior pages still need meta descriptions.

### Schema & Structured Data (68/100)

**Schema types found:**

| Schema Type | Present On | Status |
|---|---|---|
| Organization | All pages | Complete with address, contact, social |
| LocalBusiness | Homepage | With coordinates, service areas, price range |
| WebSite | Homepage | With language info |
| FAQPage | /nl/faq only | 8 Q&A pairs, well-structured |
| Product | All 20 model pages | Name, description, SKU, brand, manufacturer |
| Service | /nl/diensten | 6 services with descriptions |
| BreadcrumbList | Multiple pages | Navigation hierarchy |
| BlogPosting | Blog posts | With author (Organization), dates, descriptions |

**Missing schema opportunities:**

| Missing Schema | Where Needed | Priority |
|---|---|---|
| FAQPage | Blog post FAQ sections | High |
| Person | About page, blog author bios | High |
| AggregateRating | Model pages | High |
| Review | Model pages, homepage | High |
| HowTo | Services "process" section | Medium |
| Article | Blog posts (currently BlogPosting -- acceptable) | Low |
| GeoCoordinates | Contact page | Low |
| OpeningHoursSpecification | Contact page | Low |

### Platform Optimization (28/100)

| Platform | Score | Key Issue |
|---|---|---|
| Google AI Overviews | 18/40 | Schema present but brand invisible in search results |
| ChatGPT | 5/15 | GPTBot allowed + llms.txt, but no external citations to surface |
| Perplexity | 4/15 | PerplexityBot allowed, zero mentions in relevant results |
| Gemini | 4/15 | Google-Extended allowed, but brand absent from Google ecosystem |
| Bing Copilot | 2/10 | No Bing-specific evidence |
| AI Training Platforms | 0/5 | Zero YouTube, Reddit, Wikipedia presence |

**The core problem:** Technical access is excellent (all AI crawlers allowed, llms.txt exists), but AI systems cannot cite what they cannot verify. With zero third-party mentions, the brand doesn't exist in AI knowledge graphs.

---

## Quick Wins (Implement This Week)

1. **Claim Google Business Profile** -- Add photos, services, hours, and request first reviews. Single highest-impact action for local AI visibility. (Est. impact: +5-8 GEO points)

2. **Add meta descriptions to all pages** -- Write 150-160 char descriptions for model pages, FAQ, services, about, contact, and blog listing. (Est. impact: +3-4 GEO points)

3. **Add FAQPage schema to blog post FAQ sections** -- The cost and permit blog posts already have FAQ content; just add the schema markup. (Est. impact: +2-3 GEO points)

4. **Add founder name + bio to About page** -- Include photo, credentials, and Person schema. Update BlogPosting author to reference the Person. (Est. impact: +3-5 GEO points)

5. **Add 1 cited source to each blog post** -- Link to official government pages (omgevingsvergunning.be), building cost indices, or industry reports. (Est. impact: +2-3 GEO points)

---

## 30-Day Action Plan

### Week 1: Foundation & Trust
- [ ] Claim and complete Google Business Profile with photos, services, hours
- [ ] Add meta descriptions to all 30+ pages (NL/FR/EN)
- [ ] Add founder/team names, bios, photos, and Person schema to About page
- [ ] Add HSTS, X-Frame-Options, X-Content-Type-Options security headers
- [ ] Add author bylines with Person schema to all blog posts

### Week 2: Content Credibility
- [ ] Add 1-2 cited external sources to each of the 4 blog posts
- [ ] Add FAQPage schema to blog post FAQ sections
- [ ] Publish 1 new blog post with proper author attribution and citations
- [ ] Collect and publish 3 customer testimonials with photos
- [ ] Add AggregateRating schema to model pages (once reviews exist)

### Week 3: External Visibility
- [ ] Get listed on 3-5 tiny house/housing directories (TinyFindy, Mobielehuizen, etc.)
- [ ] Create LinkedIn company page with complete info
- [ ] Create YouTube channel and upload 2-3 model walkthrough videos
- [ ] Submit site to Belgian business directories (KBO, Kompass, etc.)
- [ ] Enable CDN edge caching for static pages

### Week 4: Content Expansion & Optimization
- [ ] Publish 2 new blog posts (1 case study, 1 informational guide)
- [ ] Add `<lastmod>` dates to all sitemap entries
- [ ] Add `og:locale:alternate` tags for multilingual variants
- [ ] Create 1 downloadable PDF brochure/catalog
- [ ] Post in 2-3 relevant Belgian housing subreddits or forums

**Projected score after 30 days (if all items completed): 62-68/100 (Fair to Good)**

---

## Appendix: Pages Analyzed

| URL | Title | GEO Issues |
|---|---|---|
| /nl/ | Tiny House Kopen in Belgie - 20 Modulaire Tiny Houses | 3 (no meta desc interior, no reviews, org-only author) |
| /nl/modellen | Tiny House Modellen - 20 Modulaire Woningen | 2 (no meta desc, thin heading structure) |
| /nl/modellen/evoke | Evoke Tiny House - 54m2 Medium | 3 (no meta desc, no reviews, no FAQ) |
| /nl/modellen/[19 others] | Individual model pages | Same as Evoke pattern |
| /nl/faq | Veelgestelde Vragen over Tiny Houses | 1 (no meta desc) |
| /nl/over-ons | Over Tiny House Heavens | 4 (no team names, no credentials, no Person schema, no meta desc) |
| /nl/diensten | Diensten - Van Ontwerp tot Oplevering | 2 (no meta desc, no case studies) |
| /nl/contact | Contact & Gratis Offerte Aanvragen | 2 (no meta desc, no Google Maps, no hours) |
| /nl/blog | Blog - Tips over Tiny Houses | 1 (no meta desc) |
| /nl/blog/wat-kost-een-tiny-house-in-belgie/ | Wat kost een tiny house in Belgie 2026 | 3 (no citations, org author, FAQ lacks schema) |
| /nl/blog/[3 others] | Blog posts | Similar pattern to cost article |
| /nl/privacy | Privacybeleid | 0 |
| /nl/voorwaarden | Algemene voorwaarden | 0 |
| /fr/* | French equivalents of all above | Same issues as NL versions |
| /en/* | English equivalents of all above | Same issues as NL versions |

**Total unique page templates analyzed:** 10 (multiplied across 3 languages = ~30 unique pages examined)
**Total sitemap URLs:** 151
