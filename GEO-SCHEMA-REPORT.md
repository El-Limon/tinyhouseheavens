# GEO Schema & Structured Data Report -- tinyhouseheavens.com

**Date:** 2026-04-13

## Schema Score: 62/100

| Criterion | Score | Max | Notes |
|---|---|---|---|
| Organization/Person schema | 10/15 | 15 | Present, good detail, missing @id, foundingDate, founder, knowsAbout |
| sameAs links | 3/15 | 15 | Only 2 platforms (Facebook, Instagram). Need 5+ for GEO |
| Article schema with author | 5/10 | 10 | BlogPosting present, but author is Organization not Person |
| Business-type-specific schema | 10/10 | 10 | Product, Service, LocalBusiness all present and complete |
| WebSite + SearchAction | 3/5 | 5 | WebSite present, missing SearchAction |
| BreadcrumbList on inner pages | 5/5 | 5 | Present on all inner pages checked |
| JSON-LD format | 5/5 | 5 | All schemas use JSON-LD exclusively |
| Server-rendered | 10/10 | 10 | All JSON-LD in static HTML `<head>` (Astro SSG) |
| speakable property | 0/5 | 5 | Not present on any page |
| Valid JSON + valid types | 8/10 | 10 | Valid JSON, valid types. Minor: logo should be ImageObject, not string |
| knowsAbout property | 0/5 | 5 | Missing on Organization schema |
| No deprecated schemas | 3/5 | 5 | FAQPage schema present (restricted since Aug 2023, still useful for AI) |

---

## Detected Schemas

| Page | Schema Type | Format | Status | Issues |
|---|---|---|---|---|
| Homepage (all langs) | Organization | JSON-LD | Valid | Missing @id, foundingDate, founder, knowsAbout. Logo is string not ImageObject |
| Homepage (all langs) | LocalBusiness | JSON-LD | Valid | Missing openingHoursSpecification, aggregateRating |
| Homepage (all langs) | WebSite | JSON-LD | Valid | Missing SearchAction |
| /en/faq/ | FAQPage | JSON-LD | Valid | 8 Q&As properly structured |
| /en/faq/ | BreadcrumbList | JSON-LD | Valid | Correct hierarchy |
| /en/models/evoke/ | Product | JSON-LD | Valid | Missing offers (price), aggregateRating, review |
| /en/models/evoke/ | BreadcrumbList | JSON-LD | Valid | Correct hierarchy |
| /en/services/ | Service (x6) | JSON-LD | Valid | 6 individual Service schemas, each with provider and areaServed |
| /en/services/ | BreadcrumbList | JSON-LD | Valid | Correct hierarchy |
| /en/blog/[post] | BlogPosting | JSON-LD | Valid | Author is Organization, not Person. Has datePublished, dateModified |
| /en/blog/[post] | BreadcrumbList | JSON-LD | Valid | Correct hierarchy |

---

## Validation Results

### Organization Schema (All Pages)
| Property | Status | Value |
|---|---|---|
| @type | Pass | "Organization" |
| name | Pass | "Tiny House Heavens" |
| url | Pass | "https://tinyhouseheavens.com" |
| logo | Warn | String URL (should be ImageObject with width/height) |
| description | Pass | Present, localized per language |
| address | Pass | Full PostalAddress with street, city, postal, country |
| contactPoint | Pass | Sales contact with phone, email, 3 languages |
| sameAs | Warn | Only 2 links (Facebook, Instagram) -- needs 5+ |
| @id | Missing | No @id for cross-referencing |
| foundingDate | Missing | Not set |
| founder | Missing | Not set -- no Person schema anywhere |
| knowsAbout | Missing | Not set -- strong GEO signal |
| numberOfEmployees | Missing | Not set |

### LocalBusiness Schema (Homepage)
| Property | Status | Value |
|---|---|---|
| @type | Pass | "LocalBusiness" |
| @id | Pass | "https://tinyhouseheavens.com/#localbusiness" |
| geo | Pass | GeoCoordinates (51.0717, 4.5283) |
| areaServed | Pass | Belgium, Netherlands, Luxembourg |
| priceRange | Pass | "EUR EUR EUR" |
| telephone | Pass | "+32465600263" |
| email | Pass | "info@tinyhouseheavens.com" |
| address | Pass | Full PostalAddress with region |
| openingHoursSpecification | Missing | No hours specified |
| aggregateRating | Missing | No ratings |
| review | Missing | No reviews |
| hasMap | Missing | No Google Maps link |

### Product Schema (Model Pages)
| Property | Status | Value |
|---|---|---|
| @type | Pass | "Product" |
| name | Pass | "Tiny House Evoke" |
| description | Pass | Full model description |
| image | Pass | Array of 5+ images |
| brand | Check | Present (needs verification of full block) |
| sku | Check | Present (needs verification) |
| offers | Missing | No price/availability -- critical for Product schema |
| aggregateRating | Missing | No ratings |
| review | Missing | No reviews |
| category | Missing | Not set |
| material | Missing | Not set (could add: "timber frame, steel undercarriage") |

### BlogPosting Schema (Blog Posts)
| Property | Status | Value |
|---|---|---|
| @type | Pass | "BlogPosting" |
| headline | Pass | Present |
| description | Pass | Present |
| image | Pass | OG image |
| datePublished | Pass | ISO 8601 format |
| dateModified | Pass | Same as published (expected for new content) |
| author | Warn | Organization, not Person -- weak E-E-A-T signal |
| publisher | Pass | Organization with logo |
| mainEntityOfPage | Pass | WebPage with @id |
| inLanguage | Pass | "en-GB" |
| speakable | Missing | Not present |
| wordCount | Missing | Not set |
| articleSection | Missing | Not set |

### FAQPage Schema (FAQ Page)
| Property | Status | Value |
|---|---|---|
| @type | Pass | "FAQPage" |
| mainEntity | Pass | Array of 8 Question objects |
| Question.name | Pass | All 8 questions have names |
| Question.acceptedAnswer | Pass | All 8 have Answer objects with text |

### Service Schema (Services Page)
| Property | Status | Value |
|---|---|---|
| @type | Pass | "Service" (6 instances) |
| name | Pass | All 6 services named |
| description | Pass | All 6 have descriptions |
| provider | Pass | LocalBusiness reference |
| areaServed | Pass | Belgium |

---

## sameAs Audit

| Platform | URL | Status | Priority |
|---|---|---|---|
| Wikipedia | Not found | **Missing** | Critical for entity recognition |
| Wikidata | Not found | **Missing** | Critical for machine-readable entity |
| LinkedIn | Not found | **Missing** | High -- professional authority |
| YouTube | Not found | **Missing** | High -- AI training data source |
| Facebook | https://www.facebook.com/tinyhouseheavens | **Present** | -- |
| Instagram | https://www.instagram.com/tinyhouseheavens | **Present** | -- |
| Twitter/X | Not found | **Missing** | Medium |
| Google Business Profile | Not found | **Missing** | High for local business |
| Crunchbase | Not applicable | -- | Low |
| GitHub | Not applicable | -- | Low |
| Belgian business directories | Not found | **Missing** | Medium |

**Current sameAs links: 2** (Facebook, Instagram)
**Recommended minimum: 5**
**Impact:** AI systems use sameAs to build entity graphs. With only 2 social links, the entity graph is extremely thin. Adding LinkedIn, YouTube, and a Google Business Profile URL would triple the entity signals.

---

## Missing Recommended Schemas

| Schema | Where Needed | Priority | Impact |
|---|---|---|---|
| Person (founder/expert) | About page, blog author | **Critical** | E-E-A-T author identity for AI citation |
| FAQPage | Blog posts with FAQ sections | **High** | 3 blog posts have FAQ content without schema |
| AggregateRating | Product pages, LocalBusiness | **High** | Trust signal for AI "best X" queries |
| Review | Product pages, homepage | **High** | Social proof for AI recommendations |
| HowTo | Services "process" section | Medium | Step-by-step format AI can extract |
| SearchAction | Homepage WebSite schema | Medium | Sitelinks search box in Google |
| OpeningHoursSpecification | LocalBusiness | Medium | Local search completeness |
| speakable | Blog posts, FAQ | Medium | Voice/AI assistant citation signal |
| knowsAbout | Organization | Medium | Topic expertise signal |
| Offer | Product pages | Medium | Price signal (even if "contact for pricing") |

---

## Generated JSON-LD Code

### 1. Person Schema (Founder) -- Add to About Page

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://tinyhouseheavens.com/#founder",
  "name": "[Founder Name]",
  "jobTitle": "[Title, e.g., Founder & Lead Designer]",
  "url": "https://tinyhouseheavens.com/en/about-us/",
  "image": "https://tinyhouseheavens.com/images/team/[founder-photo].webp",
  "worksFor": {
    "@type": "Organization",
    "@id": "https://tinyhouseheavens.com/#organization"
  },
  "knowsAbout": [
    "Modular tiny house construction",
    "Timber frame building",
    "Sustainable housing in Belgium",
    "Belgian building permits",
    "Energy-efficient home design"
  ],
  "sameAs": [
    "https://www.linkedin.com/in/[founder-linkedin]"
  ]
}
```

### 2. Enhanced Organization Schema -- Replace Current

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://tinyhouseheavens.com/#organization",
  "name": "Tiny House Heavens",
  "url": "https://tinyhouseheavens.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://tinyhouseheavens.com/images/brand/logo.svg",
    "width": 200,
    "height": 50
  },
  "description": "Belgian modular tiny house manufacturer offering 20 models from 13m² to 112m², built with steel undercarriage and timber frame construction in Sint-Katelijne-Waver.",
  "foundingDate": "[YYYY-MM-DD]",
  "founder": {
    "@type": "Person",
    "@id": "https://tinyhouseheavens.com/#founder"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Fort 15",
    "addressLocality": "Sint-Katelijne-Waver",
    "postalCode": "2860",
    "addressRegion": "Antwerpen",
    "addressCountry": "BE"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+32465600263",
    "email": "info@tinyhouseheavens.com",
    "contactType": "sales",
    "availableLanguage": ["Dutch", "French", "English"]
  },
  "areaServed": [
    {"@type": "Country", "name": "Belgium"},
    {"@type": "Country", "name": "Netherlands"},
    {"@type": "Country", "name": "Luxembourg"}
  ],
  "knowsAbout": [
    "Modular tiny house construction",
    "Timber frame and steel undercarriage building",
    "Sustainable and energy-efficient housing",
    "Belgian building permits and regulations",
    "Turnkey tiny house delivery",
    "Tiny house interior design"
  ],
  "sameAs": [
    "https://www.facebook.com/tinyhouseheavens",
    "https://www.instagram.com/tinyhouseheavens",
    "https://www.linkedin.com/company/tiny-house-heavens",
    "https://www.youtube.com/@tinyhouseheavens",
    "[Google Business Profile URL]"
  ]
}
```

### 3. FAQPage Schema for Blog Posts -- Add to Each Blog Post with FAQ Content

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[FAQ question from blog post]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Full answer text]"
      }
    }
  ]
}
```

### 4. Enhanced BlogPosting with Person Author -- Replace Current

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "[Post Title]",
  "description": "[Meta description]",
  "image": "[Image URL]",
  "datePublished": "[ISO date]",
  "dateModified": "[ISO date]",
  "author": {
    "@type": "Person",
    "@id": "https://tinyhouseheavens.com/#founder",
    "name": "[Founder Name]"
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://tinyhouseheavens.com/#organization",
    "name": "Tiny House Heavens",
    "logo": {
      "@type": "ImageObject",
      "url": "https://tinyhouseheavens.com/images/brand/logo.svg"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "[Page URL]"
  },
  "inLanguage": "[lang code]",
  "wordCount": "[number]",
  "articleSection": "Tiny Houses",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".blog-summary", ".key-takeaways"]
  }
}
```

### 5. Product with Offer -- Enhance Current Product Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Tiny House Evoke",
  "description": "[description]",
  "image": ["[image URLs]"],
  "brand": {
    "@type": "Brand",
    "name": "Tiny House Heavens"
  },
  "manufacturer": {
    "@type": "Organization",
    "@id": "https://tinyhouseheavens.com/#organization"
  },
  "sku": "evoke",
  "category": "Modular Tiny Houses",
  "material": "Timber frame on steel undercarriage, 150-200mm insulation",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock",
    "url": "https://tinyhouseheavens.com/en/contact/",
    "description": "Contact for pricing. Available in House Kit, Basic, and Optima finishing levels."
  }
}
```

### 6. WebSite with SearchAction -- Add to Homepage

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Tiny House Heavens",
  "url": "https://tinyhouseheavens.com",
  "inLanguage": ["nl", "fr", "en"],
  "publisher": {
    "@type": "Organization",
    "@id": "https://tinyhouseheavens.com/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://tinyhouseheavens.com/en/models/?search={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

---

## Implementation Notes

1. **Where to place JSON-LD:** All schemas go in `<head>` section. Astro SSG already renders them server-side -- continue this pattern.
2. **Use @id references:** Link schemas together using `@id` (e.g., Organization @id referenced by BlogPosting publisher, Product manufacturer, Service provider).
3. **Test with:** Google Rich Results Test (https://search.google.com/test/rich-results) and Schema.org Validator (https://validator.schema.org/).
4. **Priority order for implementation:**
   1. Add Person schema for founder (highest E-E-A-T impact)
   2. Update Organization with @id, knowsAbout, founder reference
   3. Update BlogPosting author from Organization to Person
   4. Add FAQPage schema to blog posts with FAQ sections
   5. Add Offer/AggregateOffer to Product schema
   6. Add speakable to BlogPosting and FAQPage
   7. Expand sameAs as new platform profiles are created
