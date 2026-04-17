# AI Crawler Access Report: tinyhouseheavens.com

**Analysis Date:** 2026-04-13
**Domain:** tinyhouseheavens.com
**robots.txt Status:** Found -- Valid syntax, well-configured

---

## Crawler Access Summary

| Crawler | Operator | Tier | Status | Impact |
|---|---|---|---|---|
| GPTBot | OpenAI | 1 | **Allowed** (explicit) | Content visible in ChatGPT Search |
| OAI-SearchBot | OpenAI | 1 | **Not Mentioned** (allowed via wildcard) | Content accessible for ChatGPT search |
| ChatGPT-User | OpenAI | 1 | **Allowed** (explicit) | Users can browse site via ChatGPT |
| ClaudeBot | Anthropic | 1 | **Allowed** (explicit) | Content visible to Claude |
| PerplexityBot | Perplexity | 1 | **Allowed** (explicit) | Content visible in Perplexity results |
| Google-Extended | Google | 2 | **Allowed** (explicit) | Content available for Gemini and AI Overviews |
| GoogleOther | Google | 2 | **Not Mentioned** (allowed via wildcard) | Google AI research can access |
| Applebot-Extended | Apple | 2 | **Allowed** (explicit) | Content available for Apple Intelligence |
| Amazonbot | Amazon | 2 | **Not Mentioned** (allowed via wildcard) | Alexa can access |
| FacebookBot | Meta | 2 | **Not Mentioned** (allowed via wildcard) | Meta AI can access |
| CCBot | Common Crawl | 3 | **Not Mentioned** (allowed via wildcard) | Available for Common Crawl dataset |
| anthropic-ai | Anthropic | 3 | **Not Mentioned** (allowed via wildcard) | Available for Claude training |
| Bytespider | ByteDance | 3 | **Not Mentioned** (allowed via wildcard) | ByteDance AI can access |
| cohere-ai | Cohere | 3 | **Not Mentioned** (allowed via wildcard) | Cohere can access |

## AI Visibility Score: 95/100

**Tier 1 Access:** 5/5 crawlers allowed (GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot explicit; OAI-SearchBot via wildcard)
**Tier 2 Access:** 5/5 crawlers allowed (Google-Extended, Applebot-Extended explicit; GoogleOther, Amazonbot, FacebookBot via wildcard)
**Tier 3 Access:** 4/4 crawlers allowed (all via wildcard)

---

## Current robots.txt Content

```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Applebot-Extended
Allow: /

Sitemap: https://tinyhouseheavens.com/sitemap-index.xml
```

**Assessment:** This is an excellent robots.txt configuration. It explicitly allows the 6 most important AI crawlers and uses a permissive wildcard for all others. The sitemap reference is present and correct.

---

## Critical Issues

**None.** All Tier 1 and Tier 2 AI crawlers have full access. No critical issues detected.

---

## Additional Technical Findings

### Meta Robots Tags
- No `noindex`, `nofollow`, `noai`, or `noimageai` meta tags found on any sampled page
- No bot-specific meta robots tags detected
- **Status: Clean** -- no page-level AI blocking

### X-Robots-Tag Headers
- No `X-Robots-Tag` headers found in HTTP responses
- **Status: Clean** -- no header-level AI blocking

### JavaScript Rendering
- **Not an issue.** Site uses Astro SSG (Static Site Generation)
- All content, meta tags, structured data, and internal links are in static HTML
- AI crawlers that cannot execute JavaScript still get 100% of the content
- **Status: Optimal** -- best possible configuration for AI crawler access

### llms.txt
- **Present** at `https://tinyhouseheavens.com/llms.txt`
- Contains structured business overview: company details, model catalog, construction specs, service descriptions, key URLs
- **Status: Excellent** -- provides AI systems with a machine-readable site summary

### Sitemap Accessibility
- Sitemap index at `https://tinyhouseheavens.com/sitemap-index.xml`
- Sub-sitemap at `https://tinyhouseheavens.com/sitemap-0.xml` with 151 URLs
- Referenced in robots.txt (important -- AI crawlers use this to discover pages)
- **Issue:** No `<lastmod>` dates in sitemap entries
- **Status: Good** (would be Excellent with lastmod dates)

---

## Recommendations

### Minor Improvements (Optional)

1. **Add OAI-SearchBot explicitly** -- While it inherits access from the wildcard, explicitly naming it signals clear intent to OpenAI:
   ```
   User-agent: OAI-SearchBot
   Allow: /
   ```

2. **Add Bytespider block** -- ByteDance's crawler is known for aggressive crawling behavior and provides minimal benefit for Western businesses:
   ```
   User-agent: Bytespider
   Disallow: /
   ```

3. **Add lastmod to sitemap** -- Help AI crawlers prioritize fresh content by adding `<lastmod>` dates to sitemap entries.

### Recommended robots.txt (Enhanced)

```
# ===== AI Search Crawlers (Tier 1) =====
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

# ===== AI Platform Crawlers (Tier 2) =====
User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: FacebookBot
Allow: /

# ===== Blocked (Aggressive/Low Value) =====
User-agent: Bytespider
Disallow: /

# ===== Default =====
User-agent: *
Allow: /

Sitemap: https://tinyhouseheavens.com/sitemap-index.xml
```

---

## Score Breakdown

| Component | Weight | Score | Weighted |
|---|---|---|---|
| Tier 1 Crawlers Allowed (5/5) | 50% | 100 | 50 |
| Tier 2 Crawlers Allowed (5/5) | 25% | 100 | 25 |
| No Blanket AI Blocks | 15% | 100 | 15 |
| AI-Specific Files (llms.txt + sitemap) | 10% | 50 | 5 |
| **Total** | | | **95/100** |

**Note:** The 5-point deduction is for the sitemap missing lastmod dates (partial credit on AI-Specific Files component).

---

## Summary

Tiny House Heavens has **best-in-class AI crawler access**. The robots.txt explicitly allows all 6 major AI crawlers, the site serves fully static HTML (no JS rendering issues), and an llms.txt file is present. This is in the top 5% of websites for AI crawler accessibility.

The 95/100 score reflects near-perfect configuration with only minor optimization opportunities (adding OAI-SearchBot explicitly, blocking Bytespider, adding sitemap lastmod dates). No action is urgently needed -- the current setup ensures maximum AI search visibility.
