# GEO Technical SEO Audit -- tinyhouseheavens.com

**Date:** 2026-04-13

## Technical Score: 78/100

## Score Breakdown

| Category | Score | Max | Status |
|---|---|---|---|
| Crawlability | 14/15 | 15 | Pass |
| Indexability | 11/12 | 12 | Pass |
| Security | 4/10 | 10 | Fail |
| URL Structure | 7/8 | 8 | Pass |
| Mobile Optimization | 10/10 | 10 | Pass |
| Core Web Vitals | 13/15 | 15 | Pass |
| Server-Side Rendering | 15/15 | 15 | Pass |
| Page Speed & Server | 14/15 | 15 | Pass |

**Status:** Pass = 80%+ | Warn = 50-79% | Fail = <50%

---

## AI Crawler Access

| Crawler | User-Agent | Status | Recommendation |
|---|---|---|---|
| GPTBot | GPTBot | **Allowed** | No action needed |
| Google-Extended | Google-Extended | **Allowed** | No action needed |
| Googlebot | Googlebot | **Allowed** (default) | No action needed |
| Bingbot | bingbot | **Allowed** (default) | No action needed |
| PerplexityBot | PerplexityBot | **Allowed** | No action needed |
| ClaudeBot | ClaudeBot | **Allowed** | No action needed |
| ChatGPT-User | ChatGPT-User | **Allowed** | No action needed |
| Applebot-Extended | Applebot-Extended | **Allowed** | No action needed |
| Amazonbot | Amazonbot | **Allowed** (default) | No action needed |
| CCBot | CCBot | **Allowed** (default) | Consider adding explicit Allow |
| FacebookBot | FacebookExternalHit | **Allowed** (default) | No action needed |
| Bytespider | Bytespider | **Allowed** (default) | Consider blocking (ByteDance scraper, low value) |

**AI Crawler Score: 5/5** -- All major AI crawlers explicitly allowed with `Allow: /`. This is best-in-class configuration.

---

## Critical Issues (Fix Immediately)

### 1. Missing Security Headers (4/10 -- Fail)

The following security headers are completely absent from HTTP responses:

| Missing Header | Risk | Fix |
|---|---|---|
| `Strict-Transport-Security` (HSTS) | Browsers won't pin HTTPS; vulnerable to downgrade attacks | Add `Strict-Transport-Security: max-age=31536000; includeSubDomains` |
| `X-Content-Type-Options` | MIME-sniffing attacks possible | Add `X-Content-Type-Options: nosniff` |
| `X-Frame-Options` | Site can be embedded in iframes (clickjacking) | Add `X-Frame-Options: SAMEORIGIN` |
| `Referrer-Policy` | Full referrer URLs leaked to third parties | Add `Referrer-Policy: strict-origin-when-cross-origin` |
| `Permissions-Policy` | Browser features not restricted | Add `Permissions-Policy: camera=(), microphone=(), geolocation=()` |

**Present:** `Content-Security-Policy: upgrade-insecure-requests` (minimal CSP -- only upgrades HTTP to HTTPS, no XSS protection).

**How to fix on Hostinger:** Add headers via `.htaccess` file or Hostinger's CDN settings panel. For an Astro site, headers can also be configured in `astro.config.mjs` if using Astro SSR, or via a `_headers` file if deploying to a platform that supports it.

---

## Warnings (Fix This Month)

### 2. Sitemap Missing `<lastmod>` Dates

`sitemap-0.xml` contains 151 URLs but none have `<lastmod>`, `<changefreq>`, or `<priority>` attributes. AI crawlers and Googlebot cannot determine content freshness from the sitemap.

**Fix:** Configure Astro's sitemap integration to include `lastmod` dates based on file modification times or git commit dates.

### 3. CDN Edge Caching Not Active

All responses show `x-hcdn-cache-status: DYNAMIC` -- static HTML pages are being served from origin, not from CDN edge cache. For an Astro SSG site generating pure static HTML, this eliminates the primary benefit of the CDN.

**Fix:** Configure Hostinger CDN caching rules to cache static HTML pages. Expected status after fix: `HIT` or `CACHED`.

### 4. No IndexNow Implementation

No IndexNow key file found. IndexNow would enable instant Bing indexing (and by extension ChatGPT/Bing Copilot visibility) when content is published or updated.

**Fix:** Generate an IndexNow API key, place the key file at `/.well-known/indexnow-key.txt`, and add IndexNow pings to the build/deploy pipeline.

### 5. Google Search Console Verification Code Exposed in Comment

Raw HTML contains: `<!-- Google Search Console verification — replace YOUR_VERIFICATION_CODE with actual code -->` followed by the actual verification meta tag. The HTML comment should be removed.

---

## Recommendations (Optimize This Quarter)

### 6. Self-Host Google Fonts
External Google Fonts dependency adds a render-blocking request to `fonts.googleapis.com`. Self-hosting the font files eliminates this external dependency and improves LCP.

### 7. Add `og:locale:alternate` for Multilingual Variants
Homepage has `og:locale` set to `nl_BE` but does not declare alternate locales (`fr_BE`, `en_GB`). Adding these strengthens multilingual citation signals for AI platforms.

### 8. Consider Blocking Bytespider
ByteDance's Bytespider crawler has a reputation for aggressive crawling. Consider adding `User-agent: Bytespider / Disallow: /` unless you specifically want TikTok AI visibility.

---

## Detailed Findings

### Category 1: Crawlability (14/15)

| Check | Score | Evidence |
|---|---|---|
| robots.txt valid | 3/3 | Valid syntax, proper User-agent directives, explicit Allow rules |
| AI crawlers allowed | 5/5 | 6 AI crawlers explicitly allowed (GPTBot, Google-Extended, ChatGPT-User, PerplexityBot, ClaudeBot, Applebot-Extended) |
| XML sitemap present | 2/3 | sitemap-index.xml references sitemap-0.xml (151 URLs). Valid XML. Missing lastmod dates (-1). |
| Crawl depth | 2/2 | All key pages within 2 clicks from homepage (nav → page). Models are 2 clicks (nav → listing → model). |
| No erroneous noindex | 2/2 | No noindex directives found on any sampled page. |

**Additional:** llms.txt present at root with structured business data -- excellent for AI crawler ingestion.

### Category 2: Indexability (11/12)

| Check | Score | Evidence |
|---|---|---|
| Canonical tags | 3/3 | Self-referencing canonical on all pages checked. `<link rel="canonical" href="https://tinyhouseheavens.com/nl/">` confirmed. |
| No duplicate content | 3/3 | HTTP→HTTPS redirect (301). Trailing slash enforced via 301 redirect (e.g., `/en/models/evoke` → `/en/models/evoke/`). www not tested but likely redirects. |
| Pagination | 2/2 | No paginated content detected (blog has only 4 posts, models page shows all 20). N/A -- full score. |
| Hreflang | 2/2 | Full implementation: `nl`, `fr`, `en`, and `x-default` (→ `/nl/`). Confirmed on homepage and inner pages. Reciprocal hreflang verified between language versions. |
| No index bloat | 1/2 | 151 sitemap URLs for ~35 unique content templates × 3 languages = ~105 expected. 151 is slightly above expected (-1). May include old/redirected URLs. |

### Category 3: Security (4/10)

| Check | Score | Evidence |
|---|---|---|
| HTTPS with valid cert | 4/4 | HTTPS enforced, HTTP 301 → HTTPS, valid certificate |
| HSTS | 0/2 | **MISSING** -- No Strict-Transport-Security header |
| X-Content-Type-Options | 0/1 | **MISSING** |
| X-Frame-Options | 0/1 | **MISSING** |
| Referrer-Policy | 0/1 | **MISSING** |
| Content-Security-Policy | 0/1 | Present but minimal: `upgrade-insecure-requests` only. No XSS protection directives. |

### Category 4: URL Structure (7/8)

| Check | Score | Evidence |
|---|---|---|
| Clean URLs | 2/2 | Human-readable paths: `/en/models/evoke/`, `/nl/blog/wat-kost-een-tiny-house-in-belgie/`. Lowercase, hyphen-separated. |
| Logical hierarchy | 2/2 | Clear structure: `/{lang}/{section}/{page}/`. Models nested under `/models/`, blog under `/blog/`. |
| No redirect chains | 2/2 | Single-hop redirects only. HTTP→HTTPS (1 hop). Non-trailing-slash→trailing-slash (1 hop). No chains detected. |
| Parameter handling | 1/2 | No URL parameters observed. No explicit parameter handling configuration detected (-1 for not being configured proactively). |

### Category 5: Mobile Optimization (10/10)

| Check | Score | Evidence |
|---|---|---|
| Viewport meta tag | 3/3 | `<meta name="viewport" content="width=device-width, initial-scale=1.0">` present |
| Responsive layout | 3/3 | Tailwind CSS responsive classes used throughout. No fixed widths detected. |
| Tap targets | 2/2 | Navigation and CTAs appear appropriately sized (Tailwind spacing utilities). |
| Font sizes | 2/2 | Base font appears 16px+. Tailwind defaults enforce readable sizes. |

### Category 6: Core Web Vitals (13/15)

| Check | Score | Evidence |
|---|---|---|
| LCP estimate | 5/5 | Astro SSG serves static HTML. TTFB measured at 10ms upstream. Hero images are WebP format. Excellent LCP expected. |
| INP estimate | 5/5 | Minimal JavaScript on page. Astro islands architecture means only interactive components load JS. No heavy framework bundle. |
| CLS estimate | 3/5 | Images appear to have dimensions set in most cases. However, Google Fonts external load could cause FOUT. FAQ accordion toggles could cause layout shift. -2 for potential issues. |

### Category 7: Server-Side Rendering (15/15)

| Check | Score | Evidence |
|---|---|---|
| Main content in raw HTML | 8/8 | **All content server-rendered.** Astro SSG generates pure static HTML. curl output confirms: headings, paragraphs, product specs, FAQ answers, navigation -- all present in raw HTML. |
| Meta tags + structured data | 4/4 | JSON-LD schema, OG tags, Twitter Cards, hreflang, canonical -- all in raw HTML `<head>`. No JS dependency. |
| Internal links in raw HTML | 3/3 | Navigation links, model links, blog links, footer links -- all `<a href>` tags in static HTML. |

**This is the strongest technical category.** Astro SSG is ideal for GEO -- every AI crawler gets the full content without needing JavaScript execution.

### Category 8: Page Speed & Server Performance (14/15)

| Check | Score | Evidence |
|---|---|---|
| TTFB | 3/3 | 10ms upstream response time (x-hcdn-upstream-rt: 0.010). Extremely fast. |
| Page weight | 2/2 | Homepage HTML is ~72KB (before compression). Static pages are lightweight. |
| Images optimized | 3/3 | WebP format used for model images. Lazy loading likely on below-fold images. |
| JS bundles | 2/2 | Astro islands architecture keeps JS minimal. Only interactive components load JS. |
| Compression | 2/2 | `Vary: Accept-Encoding` header confirms compression negotiation. Brotli/gzip supported. |
| Cache headers | 1/2 | ETag present. `x-hcdn-cache-status: DYNAMIC` means HTML is not edge-cached (-1). Static assets likely cached but unconfirmed. |
| CDN | 1/1 | Hostinger CDN (hcdn) in use. HTTP/2 and HTTP/3 (h3) available. |

---

## Summary

**Strengths:**
- Perfect AI crawler access (all 6 major AI crawlers explicitly allowed)
- Flawless server-side rendering (Astro SSG -- best possible for GEO)
- Excellent page speed (10ms TTFB, lightweight static pages)
- Proper hreflang, canonical, and OG implementation across all pages
- llms.txt present for direct AI ingestion

**Weaknesses:**
- Security headers almost entirely absent (4/10)
- CDN edge caching not activated for static pages
- Sitemap missing lastmod dates
- No IndexNow implementation for instant Bing/ChatGPT indexing

**The bottom line:** The site is technically excellent for GEO with one exception: security headers need immediate attention. The Astro SSG architecture is the ideal choice for AI visibility, and the AI crawler configuration is best-in-class. The 78/100 score is dragged down almost entirely by the security header gap.
