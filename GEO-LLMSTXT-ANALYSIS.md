# llms.txt Analysis: tinyhouseheavens.com

**Analysis Date:** 2026-04-13
**llms.txt Status:** Found at https://tinyhouseheavens.com/llms.txt (HTTP 200)
**llms-full.txt Status:** Not Found (HTTP 404)

---

## Overall llms.txt Score: 72/100

| Dimension | Score |
|---|---|
| Completeness | 68/100 |
| Accuracy | 82/100 |
| Usefulness | 65/100 |

---

## Format Validation

| Element | Status | Notes |
|---|---|---|
| H1 Title | **Pass** | "# Tiny House Heavens" -- matches brand name |
| Description blockquote | **Pass** | Present, clear, factual. 199 chars -- just under 200 limit. Accurately describes business. |
| H2 Sections | **Pass** | 6 sections found (Company Info, What We Offer, Models, Construction Quality, Key Pages + subsections) |
| Page entries | **Warn** | 8 page entries in Key Pages section. Below the recommended 10-30. |
| URL validity | **Pass** | All 8 URLs appear valid (same domain, consistent structure) |
| Entry descriptions | **Fail** | Key Pages section has URLs but NO descriptions after the colon. Just labels. |
| Key Facts | **Partial** | Company info section has contact details but missing founding date, founder name, number of employees, number of projects delivered |
| Contact section | **Pass** | Contact info embedded in Company Info section (phone, email, address, VAT) |

---

## Detailed Assessment

### Completeness (68/100)

**What's covered well:**
- All 18 models listed with building area and living area specs
- Three finishing levels described with specific features
- Six services listed
- Construction quality specs (insulation thicknesses, materials)
- Contact information complete (address, phone, email, VAT)
- Multilingual site links (NL, FR, EN)

**What's missing:**
- **Blog posts not included** -- 4 blog posts covering cost, permits, buying guide, and finishing levels are high-value content for AI citation but absent from llms.txt
- **No founding date or founder information** -- AI systems frequently need "when was X founded?" data
- **No pricing guidance** -- even a range (EUR 25,000-200,000) would help AI answer cost queries accurately
- **Model count discrepancy** -- llms.txt says "18 unique models" but the website shows 20 models. Several models appear to be missing (Evoke 54m2, Elyra 62.5m2, Opale 112m2, Aurum 167m2, Calix)
- **No service area detail** -- says "Benelux" but doesn't specify Belgium, Netherlands, Luxembourg explicitly in Key Facts
- **No FAQ content** -- the 8 FAQ Q&As are not summarized here

### Accuracy (82/100)

**Accurate elements:**
- Business name, address, phone, email, VAT all match website
- Construction specifications (insulation, materials) match website content
- Finishing level descriptions accurately reflect website content
- Languages listed correctly (Dutch, French, English)

**Inaccuracies found:**
- **Model count: "18 unique models" but website shows 20** -- discrepancy suggests llms.txt is outdated or was created before all models were added
- **Model specs may be outdated** -- the Evoke model is listed as 22.44m2 building area in llms.txt but appears as 54m2 on the website. This suggests the "Entry Models" Evoke and the actual Evoke model page describe different versions, or the llms.txt data is stale.
- **Category organization differs from website** -- Website categorizes models as Instap/Klein/Medium/Groot/Speciaal. llms.txt uses Entry/Small/Medium/Large/Special with different size breakpoints.

### Usefulness (65/100)

**Strengths:**
- An AI system reading only this file would understand: what the company does, where it's located, what products it offers, construction methods, and finishing options
- The model listing with specs is particularly useful for AI systems answering comparison queries
- Construction quality section provides specific technical data

**Weaknesses:**
- **Key Pages section has no descriptions** -- just `Home: URL` format instead of `[Home](URL): Description of page content`. This means AI systems know the pages exist but not what information each contains
- **No blog content referenced** -- the blog posts answer high-intent queries (cost, permits) that AI systems are frequently asked. Omitting them means AI crawlers using llms.txt won't be directed to this valuable content
- **Not formatted per spec** -- the page entries should use Markdown link format `- [Title](URL): Description` not `- Label: URL`. Current format may not be parsed correctly by automated llms.txt readers
- **Missing llms-full.txt** -- an extended version with more detail would provide deeper AI comprehension

---

## Missing Pages

These important pages were found on the site but not in llms.txt:

1. **Blog: Tiny House Costs in Belgium** (https://tinyhouseheavens.com/en/blog/how-much-does-a-tiny-house-cost-in-belgium/) -- Covers price ranges EUR 25,000-200,000, cost factors, additional expenses. This answers one of the most common AI queries about tiny houses in Belgium.

2. **Blog: Permits Complete Guide** (https://tinyhouseheavens.com/en/blog/tiny-house-permits-belgium-complete-guide/) -- Covers permits by region (Flanders, Wallonia, Brussels), application process, timelines. High-value regulatory content.

3. **Blog: Buying Guide** (https://tinyhouseheavens.com/en/blog/buying-a-tiny-house-in-belgium-guide/) -- 8-step buyer guide covering location, permits, modular vs. wheels, finishing, builder selection.

4. **Blog: Finishing Level Guide** (https://tinyhouseheavens.com/en/blog/house-kit-basic-optima-which-finishing-level/) -- Detailed comparison of the three finishing levels.

5. **Individual model pages** -- The specific URLs for each model (e.g., /en/models/evoke/) are not listed, only model names with specs. Including the top 5 most popular model page URLs would help AI systems link to the right pages.

---

## Improvement Recommendations

1. **Fix Key Pages format** -- Use proper Markdown link syntax with descriptions: `- [Page Title](URL): Description of what this page covers.`

2. **Add blog posts** -- Include all 4 blog posts with descriptions. These are the most citable content on the site.

3. **Correct model count and specs** -- Update to reflect current 20 models with accurate specifications.

4. **Add founding date and pricing range** -- Essential facts AI systems need to answer common queries.

5. **Add a "Blog" or "Resources" section** -- Separate from the product catalog.

6. **Create llms-full.txt** -- Extended version with individual model page URLs, FAQ content summaries, and more detailed descriptions.

---

## Suggested Updated llms.txt

```markdown
# Tiny House Heavens

> Belgian modular tiny house manufacturer in Sint-Katelijne-Waver. 20 models from 13m2 to 112m2 with three finishing levels (House Kit, Basic, Optima). Serving Belgium, Netherlands, and Luxembourg.

## Key Pages

- [Home](https://tinyhouseheavens.com/en/): Overview of Tiny House Heavens with featured models, construction process, and finishing level comparison.
- [All Models](https://tinyhouseheavens.com/en/models/): Complete catalog of 20 modular tiny house models from 13m2 to 112m2, filterable by category.
- [Services](https://tinyhouseheavens.com/en/services/): Six services from design consultation through delivery, installation, and aftercare.
- [About Us](https://tinyhouseheavens.com/en/about-us/): Company mission, values, construction methods, and location details.
- [FAQ](https://tinyhouseheavens.com/en/faq/): 8 common questions about modular tiny houses, delivery times, permits, costs, and energy efficiency.
- [Contact](https://tinyhouseheavens.com/en/contact/): Quote request form, phone, email, and address.

## Blog

- [Tiny House Costs in Belgium 2026](https://tinyhouseheavens.com/en/blog/how-much-does-a-tiny-house-cost-in-belgium/): Price ranges from EUR 25,000 to EUR 200,000 by size category, cost factors, additional expenses, and comparison to traditional housing.
- [Permits Complete Guide](https://tinyhouseheavens.com/en/blog/tiny-house-permits-belgium-complete-guide/): Regional permit requirements for Flanders, Wallonia, and Brussels. Application process and timelines (30-120 days).
- [Buying Guide](https://tinyhouseheavens.com/en/blog/buying-a-tiny-house-in-belgium-guide/): 8-step guide covering location, zoning, modular vs. on-wheels, finishing levels, build quality, costs, and builder selection.
- [Finishing Level Guide](https://tinyhouseheavens.com/en/blog/house-kit-basic-optima-which-finishing-level/): Detailed comparison of House Kit, Basic, and Optima finishing with features, pros/cons, and pricing guidance.

## Popular Models

- [Evoke](https://tinyhouseheavens.com/en/models/evoke/): 54m2 medium model with 42.6m2 living space, gable roof, separate bedroom, kitchen-living area. Most popular mid-range model.
- [Elyra](https://tinyhouseheavens.com/en/models/elyra/): 62.5m2 large model with 47.6m2 living space.
- [Opale](https://tinyhouseheavens.com/en/models/opale/): 112.2m2 large model with 90.1m2 living space. Largest standard model.
- [Ophir](https://tinyhouseheavens.com/en/models/ophir/): 91.8m2 special model with 78.4m2 living space, 2 bedrooms, 3 layout variants. Flagship model.
- [Baby](https://tinyhouseheavens.com/en/models/baby/): 22.4m2 small model with 16.5m2 living space and 29.4m2 terrace. Entry-level.

## Products Overview

20 modular tiny house models in five categories:
- **Instap (Entry)**: 13-17m2 living area, ideal for studios and starter homes
- **Klein (Small)**: 20-28m2 living area, compact homes and guest houses
- **Medium**: 32-42m2 living area, full-featured single-person or couple homes
- **Groot (Large)**: 45-90m2 living area, family homes with multiple rooms
- **Speciaal (Special)**: Custom configurations and flagship models

### Finishing Levels
1. **House Kit**: Structural shell for self-builders -- timber frame, 150-200mm insulation, OSB subfloor, wind/vapour barrier
2. **Basic**: Fully finished -- exterior facade, metal roofing, gutters, interior cladding, cement bathroom floor
3. **Optima**: Turnkey premium -- pine/metal facade, ceramic bathroom, electric underfloor heating, 50L boiler, Ventilation D system, full lighting

### Construction
- Steel undercarriage for transport and structural support
- Timber-frame (houtskelet) walls
- 200mm insulation in floor and ceiling, 150mm in walls
- Wind and vapour barrier membranes
- OSB structural panels
- Built in workshop, transported to site

## Key Facts

- Location: Fort 15, 2860 Sint-Katelijne-Waver, Belgium (Antwerp province)
- Models: 20 unique designs from 13m2 to 112m2
- Finishing: Three levels (House Kit, Basic, Optima)
- Price range: EUR 25,000 to EUR 200,000 depending on size and finishing
- Service area: Belgium, Netherlands, Luxembourg
- Languages: Dutch, French, English
- VAT: BE0403.670.250

## Contact

- Website: https://tinyhouseheavens.com
- Email: info@tinyhouseheavens.com
- Phone: +32 465 600 263
- Address: Fort 15, 2860 Sint-Katelijne-Waver, Belgium
- Dutch site: https://tinyhouseheavens.com/nl/
- French site: https://tinyhouseheavens.com/fr/
- English site: https://tinyhouseheavens.com/en/
```

---

## Update Frequency Recommendation

**Monthly** -- The site has an active blog (4 posts in April 2026) and may add new models. Update llms.txt whenever:
- A new blog post is published
- A new model is added or removed
- Pricing or specifications change
- Contact information changes
