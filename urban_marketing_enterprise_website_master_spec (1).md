# Urban Marketing Enterprise LLC — Website Master Specification

## 1. Project Overview

Build a premium urban marketing agency website for **Urban Marketing Enterprise LLC (UME)**.

The website must communicate:

- Urban intelligence
- Street-level marketing expertise
- Premium creative execution
- Editorial sophistication
- Measurable campaign outcomes
- A confident, contemporary agency personality

The website must **not** look like a generic corporate agency, SaaS template, startup landing page, or overly playful marketing site.

### Core Brand Positioning

> We Make Brands Own the City.

The brand voice should feel:

- Urban
- Premium
- Editorial
- Confident
- Direct
- Contemporary
- Street-aware
- Results-oriented

---


# 1A. Brand Identity Lock — CRITICAL

This project is exclusively for:

**Urban Marketing Enterprise LLC (UME)**

The brand identity, company name, content, navigation, visual direction,
and implementation must remain associated with **Urban Marketing Enterprise LLC**.

## Strict Brand-Name Guardrail

Do NOT use, reference, substitute, or introduce any unrelated brand/company
name anywhere in the website, source code, content, metadata, comments,
placeholder content, mockups, generated assets, or documentation.

In particular:

```text
URBAN MARKETING ENTERPRISE LLC
UME
```

are the only approved brand identifiers for this project.

Do NOT use:

```text
PropAdvert
PROPADVERTISEMENT
Any unrelated agency name
Any placeholder agency name
Any unrelated client/brand name as the website owner
```

Client/project names appearing inside approved case studies (for example,
Halston Leather Co., Aura Studios, and City Collective) are portfolio/case-study
content only and must never be treated as the website's own company identity.

### AI Development Guardrail

Before generating or modifying any content, verify that the project identity
is **Urban Marketing Enterprise LLC**.

If a prompt, generated asset, previous context, template, component, image,
or code snippet contains another agency/company name, replace it with the
approved UME identity unless that name is explicitly part of approved
case-study content.

Never carry branding from another project into this website.

# 2. Primary Technology Stack

Use the following stack unless a specific technical requirement makes a change necessary:

- React
- TypeScript
- Vite
- CSS / modern responsive CSS
- GSAP
- GSAP ScrollTrigger
- GSAP React integration via `useGSAP()`
- GSAP `matchMedia()` for responsive animations
- Git
- GitHub

### Optional

- Lenis may be evaluated for smooth scrolling **only if it materially improves the final user experience**.
- Do not add unnecessary dependencies.

### Deployment

Production hosting:

- Client's GoDaddy hosting
- Client's existing domain
- Static Vite production build

Production process:

```text
Antigravity
    ↓
React + TypeScript + Vite
    ↓
Local development
    ↓
QA
    ↓
npm run build
    ↓
dist/
    ↓
Upload dist contents to GoDaddy public hosting root
    ↓
Client domain
```

GitHub should remain the source of truth for the project source code.

---

# 3. Architecture

Use a **component/section-based architecture with separation of concerns**.

Do NOT force a full MVVM architecture for this marketing website.

Recommended structure:

```text
src/
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── components/
│   ├── Button/
│   ├── SectionEyebrow/
│   ├── Header/
│   ├── Footer/
│   └── shared reusable components
│
├── sections/
│   ├── Hero/
│   ├── BrandMarquee/
│   ├── WhatWeDo/
│   ├── SelectedWork/
│   ├── WhoWeAre/
│   ├── ClientWords/
│   └── FinalCTA/
│
├── pages/
│   ├── Home/
│   ├── About/
│   ├── Services/
│   ├── Work/
│   └── Contact/
│
├── hooks/
│   ├── animation hooks
│   ├── form hooks
│   └── reusable interaction hooks
│
├── services/
│   ├── contactService.ts
│   └── external integrations
│
├── data/
│   ├── site.ts
│   ├── services.ts
│   ├── projects.ts
│   └── testimonials.ts
│
├── types/
│   └── index.ts
│
├── utils/
│   └── reusable utilities
│
├── styles/
│   ├── globals.css
│   ├── variables.css
│   └── responsive.css
│
├── App.tsx
└── main.tsx
```

### Architecture Principles

1. Keep UI separate from data.
2. Keep API/external-service logic outside components.
3. Keep reusable components genuinely reusable.
4. Do not create unnecessary micro-components.
5. Keep each major homepage section modular.
6. Avoid putting the entire website into `App.tsx`.
7. Avoid giant components.
8. Avoid duplicate markup where data-driven rendering is appropriate.
9. Keep animation logic close to the component/section it controls.
10. Keep global design tokens centralized.

---

# 4. Global Typography System

## STRICT FONT RULE

Only these two font families are allowed anywhere in the website:

1. **Bebas Neue**
2. **Montserrat**

No third font is allowed.

This is a strict, non-negotiable requirement.

### Forbidden

Do not introduce:

- Inter
- Arial
- Helvetica
- Roboto
- Poppins
- System UI
- Browser/default font stacks
- Any other Google Font
- Any other display font
- Any icon font
- Any substitute font

This restriction applies to:

- Headings
- Body copy
- Navigation
- Buttons
- Labels
- Eyebrows
- Numbers
- Statistics
- Forms
- Inputs
- Placeholders
- Footer
- Header
- Modals
- Tooltips
- Error messages
- Loading states
- Mobile navigation
- Dynamically generated content

## Typography Rules

### Headings

Font:

**Bebas Neue**

All major headings and display headings must use Bebas Neue.

### Paragraphs / Body

Font:

**Montserrat Regular — 400**

All body copy and paragraph text should use Montserrat Regular.

### Section Eyebrows

Font:

**Montserrat Medium — 500**

Style:

- Uppercase
- Letter spacing
- Enclosed inside a compact rectangular chip/capsule
- Never displayed as open/plain text
- Content-width, not full-width
- Not clickable

### Buttons / UI Labels

Font:

**Montserrat Medium — 500**

### Service / Discipline Numbers

For numbers such as:

```text
01
02
03
04
```

use:

- Montserrat Medium — 500
- Square / near-square chip
- Never open/plain
- Consistent component treatment

### Statistics / Metrics

For numbers such as:

```text
10+
200+
98%
```

use:

- Montserrat Medium — 500
- Open/plain presentation
- No square chip
- No pill

---

# 5. Color System

The supplied homepage hero screenshot is the master visual reference.

The existing cream, black, burgundy and muted-gray visual language must be preserved throughout the entire website.

## Core Palette

Use centralized CSS variables/design tokens for the final exact values.

```text
Primary Background
→ Warm Cream / Off-White

Primary Text
→ Deep Black / Near-Black

Primary Accent
→ Deep Burgundy / Dark Red

Secondary Text
→ Muted Gray

Borders / Dividers
→ Subtle Warm Gray
```

### Strict Color Rule

Do not introduce unrelated colors.

Do not change the overall color theme between pages.

Do not introduce:

- Random blue
- Green
- Purple
- Orange
- Neon colors
- Unrelated gradients
- Additional accent colors

All hover states, cards, forms, navigation states, animation states and responsive variants must remain inside the established color system.

---

# 6. Visual Direction

## Urban Editorial Premium

The entire website should feel:

> Premium Urban + Street-Level + Editorial + Contemporary

### Desired Characteristics

- Premium urban agency aesthetic
- Street-level visual language
- Editorial typography
- City / architecture / street-culture influence
- Bold but controlled layouts
- Strong photography
- Asymmetrical compositions where appropriate
- Large typography
- Structured grids
- Subtle raw/industrial influence
- High contrast
- Cream + black + burgundy identity
- Sophisticated rather than flashy

### Avoid

- Generic corporate design
- SaaS-style layouts
- Excessive rounded cards
- Excessive glassmorphism
- Generic gradients
- Cartoon illustrations
- Excessive shadows
- Playful startup aesthetics
- Random colors
- Template-like layouts
- Overly decorative UI

Urban does not mean messy or deliberately grungy. The result must feel **refined urban**.

---

# 7. Responsive Design

## Mobile-First Is Mandatory

Design and implementation must begin with the mobile layout.

Do not build desktop first and patch mobile afterward.

The desktop experience must be a progressive enhancement of the mobile experience.

### Mobile Requirements

- Content should be centrally aligned where appropriate.
- Headings and supporting content should remain visually balanced.
- CTA buttons should remain horizontally arranged when the available width allows.
- Do not unnecessarily stack buttons vertically.
- Images must scale naturally.
- No horizontal overflow.
- Typography must scale fluidly.
- Spacing must adapt fluidly.
- Cards must reflow naturally.

### Important

Not every section must be centered blindly.

Editorial layouts may remain left-aligned when that produces better readability. The core requirement is a **mobile-first, intentional, balanced layout**.

---

# 8. Fluid Responsive Behavior

The website must not visually jump between screen sizes.

It should transition naturally across:

- Small mobile
- Large mobile
- Tablet
- Laptop
- Desktop
- Large desktop

### Rules

- Prefer fluid CSS.
- Use `clamp()`.
- Use `min()`.
- Use `max()`.
- Use `minmax()`.
- Use Flexbox.
- Use CSS Grid.
- Use intrinsic sizing.
- Use responsive containers.
- Use media queries only when a genuine structural change is required.
- Avoid excessive breakpoint-specific overrides.
- Avoid fixed heights that cause clipping.
- Avoid fixed positioning solely to match a screenshot.
- Test intermediate viewport widths, not only common device widths.

The website must look intentional at widths between predefined breakpoints.

---

# 9. Animation & Motion System

## Primary Animation Engine

Use:

- GSAP
- GSAP ScrollTrigger
- `useGSAP()`
- GSAP `matchMedia()`

GSAP is the primary animation engine.

### CSS

Use CSS for:

- Simple hover transitions
- Color transitions
- Basic transform transitions
- Basic UI state transitions

### Lenis

Lenis is optional.

Only introduce Lenis if smooth scrolling materially improves the final experience.

Do not add it merely because it is trendy.

---

# 10. Animation Direction

The website should feel animated but refined.

The animation philosophy:

```text
Elegant
↓
Controlled
↓
Cinematic
↓
Purposeful
↓
Subtle
```

Avoid:

- Excessive bouncing
- Random spinning
- Overly playful motion
- Everything moving simultaneously
- Constant heavy parallax
- Animation that blocks content

## Hero Animation

Recommended sequence:

```text
Header
↓
Eyebrow
↓
Headline line reveal
↓
Supporting headline
↓
Description
↓
CTA buttons
↓
Hero image reveal
↓
12 cities card
```

Hero image may use a subtle scale/reveal treatment.

## Brand Marquee

Implement an infinite smooth marquee for brand names.

It should loop continuously without visible jumps.

## What We Do

Use controlled scroll choreography:

- Section heading reveal
- Divider line animation
- Discipline numbers stagger
- Service titles reveal
- Descriptions reveal

## Selected Work

Use GSAP ScrollTrigger for:

- Image reveals
- Subtle image scaling
- Editorial movement
- Staggered case-study content
- Optional subtle parallax

Do not over-animate the section.

## Who We Are

Use subtle content reveals.

Statistics may use tasteful count-up animations:

```text
0 → 10+
0 → 200+
0 → 98%
```

## Client Words

Animate:

- Quote mark
- Quote
- Attribution

Use subtle staggered reveals.

## Final CTA

Use a strong but refined entrance for the burgundy CTA section.

Potentially:

```text
Section reveal
↓
Heading
↓
Supporting copy
↓
CTA
```

---

# 11. Animation Performance Rules

Premium visual quality must not make the website heavy.

Prefer:

- `transform`
- `opacity`

Avoid unnecessarily animating:

- Width
- Height
- Top
- Left
- Margin
- Padding

Animations must:

- Not block interaction
- Not delay content visibility
- Respect `prefers-reduced-motion`
- Be lighter on mobile where appropriate
- Avoid excessive continuous GPU-heavy animations

GSAP should be used intentionally.

---

# 12. Performance Requirements

## Primary Target

Target an initial usable page experience of approximately **7 seconds or less under reasonable real-world conditions**.

Exact load time cannot be guaranteed across every device/network, so performance must also be evaluated through real performance metrics.

## Performance Priorities

- Fast initial render
- Strong LCP
- Low JavaScript execution cost
- Optimized images
- Minimal third-party scripts
- Efficient GSAP animations
- Minimal layout shift
- Efficient font loading
- Lazy loading below-the-fold media
- Proper caching
- Code splitting where useful

---

# 13. Image Optimization

The website is photography-heavy, so images must be treated as a primary performance concern.

Preferred:

- AVIF
- WebP

Requirements:

- Compress images
- Use correct dimensions
- Use responsive image sources where appropriate
- Use `srcset` where beneficial
- Lazy-load below-the-fold images
- Do not lazy-load the primary hero/LCP image
- Never upload unnecessarily huge raw images
- Preserve visual quality while reducing file size

---

# 14. JavaScript & Dependencies

Keep the website lightweight.

Do not add large libraries for small features.

Avoid unnecessary third-party dependencies.

GSAP should be used where motion adds meaningful value.

Do not add multiple overlapping animation libraries.

---

# 15. Third-Party Scripts

Third-party integrations must not unnecessarily block initial rendering.

Potential examples:

- Analytics
- Chat
- Newsletter
- Tracking
- Maps
- Social embeds

Load non-critical third-party functionality responsibly.

---

# 16. Homepage Sitemap & Content

The homepage consists of the following sequence:

```text
Header
↓
Hero
↓
Brand Marquee
↓
What We Do
↓
Selected Work
↓
Who We Are
↓
Client Words
↓
Final CTA
↓
Footer
```

---

# 17. Global Header

## Logo

Do NOT use the UME square icon/mark.

Use text-only branding:

```text
URBAN MARKETING
ENTERPRISE LLC
```

## Navigation

Exact order:

1. HOME
2. ABOUT US
3. SERVICES
4. WORK
5. CONTACT

## CTA

```text
BOOK A CALL
```

### Header Requirements

Desktop:

```text
Text Logo
    ↓
Navigation
    ↓
BOOK A CALL
```

Mobile:

```text
Text Logo
    +
Menu / Navigation control
```

Mobile navigation should be intentionally designed and animated using GSAP.

---

# 18. Homepage Hero

## Eyebrow

```text
URBAN GROWTH AGENCY · EST. 2014
```

This should be displayed inside the global eyebrow chip treatment.

## Main Heading

```text
We Make Brands
Own the City.
```

## Supporting Headline

```text
Street-smart strategy and premium creative for brands that refuse to be background noise in the markets that matter most.
```

## Description

```text
From Brooklyn to the South Side, we build campaigns that move on the block and convert in the cart — brand strategy, paid media, social and live activations under one roof.
```

## Primary CTA

```text
START YOUR CAMPAIGN
```

## Secondary CTA

```text
SEE THE WORK
```

## Visual

Large urban city photograph with:

- Dark/warm treatment
- Premium editorial composition
- City/street atmosphere

## Campaign Footprint Card

```text
12 cities
ACTIVE CAMPAIGN
FOOTPRINT
```

---

# 19. Brand Marquee

## Label

```text
TRUSTED BY 50+ URBAN BRANDS
```

## Brands

```text
HALSTON
AURA STUDIOS
CITY COLLECTIVE
NORTHBOUND
RIVET & ROW
```

### Behavior

- Full-width dark strip
- Continuous horizontal marquee
- Smooth infinite loop
- No visible jump at loop point
- Brand names visually muted compared with the introductory label

---

# 20. What We Do

## Eyebrow

```text
WHAT WE DO
```

## Heading

```text
Four disciplines, one street-level point of view.
```

## Discipline 01

### Number

```text
01
```

Displayed inside a square/near-square chip.

### Title

```text
Brand Strategy
```

### Description

```text
Positioning, narrative and identity systems built from real neighborhood insight — not national averages.
```

### Services

```text
Market & culture research
Positioning platform
Identity systems
```

---

## Discipline 02

### Number

```text
02
```

### Title

```text
Digital Marketing
```

### Description

```text
Paid media engineered around zip codes, transit lines and storefront foot traffic, measured to revenue.
```

### Services

```text
Geo-targeted paid media
SEO & local search
Conversion tracking
```

---

## Discipline 03

### Number

```text
03
```

### Title

```text
Social Campaigns
```

### Description

```text
Editorial content and creator partnerships that speak the language of the block, at the pace of the feed.
```

### Services

```text
Creator casting
Always-on content
Community management
```

---

## Discipline 04

### Number

```text
04
```

### Title

```text
Urban Activations
```

### Description

```text
Pop-ups, murals, block takeovers and launch nights that turn a street corner into earned media.
```

### Services

```text
Pop-up production
OOH & murals
Launch events
```

---

# 21. Selected Work

## Eyebrow

```text
SELECTED WORK
```

## Heading

```text
Campaigns the city couldn't ignore.
```

## CTA

```text
REQUEST FULL CASE STUDIES
```

## Case Study 01

### Client / Location

```text
HALSTON LEATHER CO. · CHICAGO
```

### Campaign

```text
The Burgundy Edit
```

### Result

```text
+312% direct-to-store traffic in eight weeks
```

### Visual Direction

Large featured fashion/lifestyle urban campaign image.

---

## Case Study 02

### Client / Location

```text
AURA STUDIOS · BROOKLYN
```

### Campaign

```text
Opening Night Takeover
```

### Result

```text
4,100 RSVPs · 11M organic impressions
```

---

## Case Study 03

### Client / Location

```text
CITY COLLECTIVE · ATLANTA
```

### Campaign

```text
Rebrand & Rollout
```

### Result

```text
Category share up 18 points in one year
```

### Layout

Use an asymmetrical editorial/masonry-style case study composition.

Build reusable case-study components rather than hard-coding each project.

---

# 22. Who We Are

## Eyebrow

```text
WHO WE ARE
```

## Heading

```text
Built in the city, for the brands that live in it.
```

## Paragraph 01

```text
Urban Marketing Enterprise LLC started in 2014 with a single mural and a local retailer nobody was covering. A decade later we run integrated campaigns for national brands across twelve metros — with the same rule we started with: if it doesn't work on the block, it doesn't ship.
```

## Paragraph 02

```text
Our team blends brand strategists, media buyers, producers and neighborhood operators. One room, one plan, one number we're accountable to.
```

## CTA

```text
MEET THE TEAM
```

## Statistics

### Stat 01

```text
10+
YEARS IN MARKET
```

### Stat 02

```text
200+
CAMPAIGNS SHIPPED
```

### Stat 03

```text
98%
CLIENT RETENTION
```

### Stat Rule

These are open/plain statistics.

Do NOT place them inside square chips.

---

# 23. Client Words

## Eyebrow

```text
CLIENT WORD
```

## Testimonial 01

### Quote

```text
They understood our neighborhood better than we did. Six weeks in, we had a line outside a store nobody could find in March.
```

### Attribution

```text
DEJA WHITFIELD — FOUNDER, HALSTON LEATHER CO.
```

## Testimonial 02

### Quote

```text
Most agencies send a deck. UME sent a crew, a plan and a number they were willing to be held to.
```

### Attribution

```text
MARCUS OYELARAN — CMO, AURA STUDIOS
```

### Visual Direction

- Cream background
- Two-column editorial layout on desktop
- Responsive stacked layout on mobile
- Thin horizontal dividers
- Large burgundy quotation marks
- Large editorial quote typography
- Small uppercase attribution

---

# 24. Final CTA

## Heading

```text
Ready to own your market?
```

## Supporting Copy

```text
Tell us the city and the target. We'll come back with a plan, a timeline and the number we're aiming at — no retainer talk until you've seen it.
```

## CTA

```text
START YOUR CAMPAIGN
```

### Visual Direction

- Full-width deep burgundy section
- Cream typography
- Large editorial heading
- CTA aligned to the right on desktop
- Responsive centered treatment where appropriate on mobile

---

# 25. Global Footer

## Logo

Text-only.

Do NOT use the UME square icon.

```text
URBAN MARKETING
ENTERPRISE LLC
```

## Description

```text
Urban Marketing Enterprise LLC — brand strategy, media and activations for brands competing where it's loudest.
```

## Agency

```text
AGENCY

Services
Work
About
Careers
```

## Contact

```text
CONTACT

312 W Monroe St, Chicago, IL
hello@urbanmarketingenterprise.com
(312) 555-0148
```

## The City Memo

### Heading

```text
THE CITY MEMO
```

### Description

```text
Monthly field notes on urban brand growth. No fluff.
```

### Email Placeholder

```text
you@brand.com
```

### CTA

```text
JOIN
```

## Social Links

```text
INSTAGRAM
LINKEDIN
TIKTOK
```

## Bottom Bar

```text
© 2026 Urban Marketing Enterprise LLC
```

Links:

```text
Privacy
Terms
```

---

# 26. Future Pages

The following primary pages should be developed:

```text
/
├── Home
│
├── /about
│   └── About Us
│
├── /services
│   └── Services
│
├── /work
│   └── Selected Work / Case Studies
│
└── /contact
    └── Contact / Start Your Campaign
```

The user has explicitly requested that the **Homepage hero content and established brand language become the foundation for the remaining pages**.

Do not invent a disconnected brand voice for secondary pages.

Expand and reorganize the established messaging into richer page-level content.

---

# 27. About Page Direction

Use the Homepage's "Who We Are" positioning as the foundation.

Core messaging:

- Built in the city
- Founded in 2014
- Started with a mural and local retailer
- Integrated campaigns
- Twelve metros
- Brand strategists
- Media buyers
- Producers
- Neighborhood operators
- One room, one plan, one number

Potential sections:

```text
About Hero
↓
Our Story
↓
Our Approach
↓
Our Team
↓
Our Numbers
↓
Why Urban Intelligence Matters
↓
CTA
```

Do not introduce a different visual identity.

---

# 28. Services Page Direction

Use the four homepage disciplines as the primary service categories:

```text
01 Brand Strategy
02 Digital Marketing
03 Social Campaigns
04 Urban Activations
```

Expand each discipline using the existing descriptions and listed services.

Potential structure:

```text
Services Hero
↓
Four Disciplines
↓
Detailed Service Breakdown
↓
Approach / Process
↓
Selected Results
↓
CTA
```

Service numbering must use the square number-chip treatment.

---

# 29. Work Page Direction

Use the Selected Work content as the foundation.

Primary projects:

```text
The Burgundy Edit
Opening Night Takeover
Rebrand & Rollout
```

The Work page should provide a richer case-study experience than the homepage.

Potential structure:

```text
Work Hero
↓
Featured Case Studies
↓
Campaign Results
↓
Additional Work
↓
Case Study CTA
```

Use the same editorial urban photography language.

---

# 30. Contact Page Direction

The Contact page should build from:

```text
Ready to own your market?
```

and:

```text
Tell us the city and the target. We'll come back with a plan,
a timeline and the number we're aiming at — no retainer talk
until you've seen it.
```

Potential form fields:

```text
Name
Email
Company
City / Market
Campaign Objective
Budget / Investment Range
Message
```

The form should remain visually minimal and premium.

Do not introduce unnecessary fields.

CTA language should remain consistent with:

```text
START YOUR CAMPAIGN
```

---

# 31. Content Architecture

Content should not be unnecessarily hard-coded inside large UI components.

Use structured data where practical.

Example:

```ts
export const services = [
  {
    number: "01",
    title: "Brand Strategy",
    description: "...",
    items: [
      "Market & culture research",
      "Positioning platform",
      "Identity systems"
    ]
  }
];
```

Similarly:

```ts
export const projects = [];
export const testimonials = [];
export const navigation = [];
```

This allows content changes without restructuring UI components.

---

# 32. Reusable Components

Create reusable components for:

```text
Header
Footer
SectionEyebrow
PrimaryButton
SecondaryButton
ServiceCard
ServiceNumberChip
CaseStudyCard
Statistic
Testimonial
Marquee
ContactForm
```

Do not duplicate identical UI patterns.

---

# 33. Section Eyebrow Component

All section eyebrows must use a single reusable component.

Example:

```tsx
<SectionEyebrow>
  WHAT WE DO
</SectionEyebrow>
```

Rules:

- Montserrat
- Weight 500
- Uppercase
- Rectangular chip/capsule
- Compact
- Content-width
- Not clickable

---

# 34. Service Number Chip

Example:

```tsx
<ServiceNumberChip number="01" />
```

Rules:

- Montserrat Medium
- Square/near-square
- `01`, `02`, `03`, `04`
- Not used for statistics

---

# 35. SEO

SEO should be considered from the beginning.

Every major page should have:

- Unique title
- Unique meta description
- Correct H1
- Logical H2/H3 hierarchy
- Semantic HTML
- Descriptive image alt text
- Internal linking
- Canonical URL
- Open Graph metadata
- Twitter/social metadata where appropriate
- `robots.txt`
- `sitemap.xml`

Do not fake SEO expertise or add meaningless keyword stuffing.

---

# 36. Accessibility

Requirements:

- Semantic HTML
- Proper heading hierarchy
- Keyboard navigation
- Visible focus states
- Accessible form labels
- Appropriate contrast
- Alt text
- Buttons must be actual buttons
- Links must be actual links
- Navigation must be keyboard accessible
- Respect `prefers-reduced-motion`

Animations must never prevent access to content.

---

# 37. Forms & Integrations

The contact form requires an actual submission mechanism.

Do not assume React alone sends email.

Potential implementation options should be evaluated based on the client's hosting and requirements.

Never expose private API keys in client-side React code.

Use environment variables for secrets where applicable.

Example:

```text
.env
.env.local
```

These must never be committed to GitHub.

---

# 38. Git & Source Control

Use Git from the beginning.

Recommended workflow:

```text
Antigravity
↓
Local development
↓
Git commit
↓
GitHub
↓
Build
↓
Deployment
```

Recommended `.gitignore`:

```text
node_modules/
dist/
.env
.env.local
.DS_Store
```

Do not commit:

- `node_modules`
- Production secrets
- API keys
- Passwords

---

# 39. GoDaddy Deployment

For a static React/Vite site:

```bash
npm run build
```

This generates:

```text
dist/
```

The contents of `dist/` should be deployed to the client's production document root, typically the appropriate `public_html` directory on cPanel hosting.

Do not treat `dist` as the source project.

The source project must remain preserved in GitHub.

### Important

If React Router is used, configure the hosting environment appropriately so direct navigation to client-side routes does not incorrectly return a 404.

---

# 40. Client Handover

Final handover should include:

```text
Source Code
↓
GitHub repository
↓
Production build
↓
Deployment documentation
↓
Asset archive
↓
Configuration notes
```

Do not store GoDaddy passwords in the repository.

Client credentials must never be placed inside:

- README
- source files
- `.env` committed to Git
- screenshots
- documentation

---

# 41. QA Checklist

Before final deployment test:

## Responsive

- 320px
- 360px
- 375px
- 390px
- 414px
- 768px
- 1024px
- 1280px
- 1440px
- Large desktop

Also test intermediate widths.

## Brand Identity

- Confirm the website name is Urban Marketing Enterprise LLC
- Confirm the logo is text-only: URBAN MARKETING / ENTERPRISE LLC
- Search the production source for accidental unrelated brand names
- Search generated content/assets for accidental unrelated agency branding
- Confirm no PropAdvert or other unrelated project branding remains

## Functional

- Navigation
- Mobile menu
- All internal links
- CTA buttons
- Contact form
- Newsletter form
- Social links
- Case-study links
- Privacy
- Terms

## Visual

- Correct fonts everywhere
- Correct color palette
- Correct typography hierarchy
- Eyebrows enclosed
- Service numbers enclosed
- Statistics open
- Text-only logo
- Correct CTA styling
- No accidental third font
- No random colors

## Performance

- Image optimization
- Hero image loading
- Lazy loading
- JavaScript bundle
- GSAP performance
- Layout shift
- Mobile performance
- No unnecessary third-party scripts

## Accessibility

- Keyboard navigation
- Focus states
- Alt text
- Form labels
- Heading hierarchy
- Reduced motion

---

# 42. Antigravity Development Guardrails

The following rules are mandatory during AI-assisted development.

```text
ROLE

Act as a senior frontend engineer, UI engineer, animation engineer,
performance engineer, and accessibility-conscious web developer.

OBJECTIVE

Build a premium urban marketing agency website for Urban Marketing
Enterprise LLC using React, TypeScript, Vite, GSAP, and modern responsive CSS.

The website must feel premium, urban, editorial, contemporary, fast,
responsive, and highly polished.

SOPs

1. Read the existing project structure before modifying files.
2. Reuse existing components before creating duplicates.
3. Keep sections modular.
4. Keep content separate from UI where practical.
5. Keep animation logic modular.
6. Use GSAP for intentional animation and ScrollTrigger for scroll-based
   experiences.
7. Use useGSAP() for React animation lifecycle management.
8. Use GSAP matchMedia() for responsive animation behavior.
9. Build mobile-first.
10. Test intermediate viewport sizes.
11. Optimize images before adding them.
12. Keep the production bundle lightweight.
13. Run build checks after major changes.
14. Preserve the established design system.
15. Preserve the established content and tone.

GUARDRAILS

1. ONLY Bebas Neue and Montserrat are allowed.
2. Never introduce another font.
3. Headings MUST use Bebas Neue.
4. Body text MUST use Montserrat Regular.
5. Eyebrows MUST use Montserrat Medium and a rectangular chip.
6. Service/category numbers MUST use Montserrat Medium and a square chip.
7. Statistics MUST remain open/plain and use Montserrat Medium.
8. Never introduce unrelated colors.
9. Preserve cream, black, burgundy, and muted-gray visual language.
10. Do not introduce random gradients.
11. Do not use excessive rounded cards.
12. Do not use generic SaaS styling.
13. Do not make the site visually noisy.
14. Do not over-animate.
15. Never sacrifice performance for animation.
16. Prevent horizontal overflow.
17. Never expose private API keys.
18. Never commit secrets.
19. Never replace source architecture with one giant component.
20. Never modify unrelated components unnecessarily.

RESPONSIVE RULES

1. Mobile-first.
2. Design mobile before desktop.
3. Use fluid typography.
4. Use fluid spacing.
5. Use responsive containers.
6. Keep CTA buttons horizontal where space allows.
7. Avoid unnecessary breakpoint jumps.
8. Test widths between breakpoints.
9. Use media queries only for genuine structural changes.
10. Do not patch desktop layouts with excessive mobile overrides.

PERFORMANCE RULES

1. Target an initial usable experience within approximately 7 seconds under
   reasonable real-world conditions.
2. Optimize LCP.
3. Optimize hero images.
4. Use AVIF/WebP where appropriate.
5. Lazy-load below-the-fold imagery.
6. Do not lazy-load the main hero/LCP image.
7. Avoid unnecessary dependencies.
8. Prefer transform and opacity for animation.
9. Reduce animation complexity on mobile where appropriate.
10. Respect prefers-reduced-motion.

DESIGN RULES

1. The design must feel urban and editorial.
2. Use strong photography.
3. Use asymmetry where appropriate.
4. Use bold typography.
5. Maintain generous but intentional whitespace.
6. Keep layouts sophisticated.
7. Do not imitate a generic template.
8. Do not add visual elements simply because they are trendy.

BEFORE COMPLETING A TASK

Check:

- Fonts
- Colors
- Responsive behavior
- Overflow
- Animation
- Accessibility
- Performance
- Component reuse
- Build success

Do not declare a task complete merely because the page visually renders.
```

---

# 43. Final Creative Principle

The website should feel like a **real premium urban creative agency**, not an AI-generated template.

The experience should combine:

```text
Urban intelligence
+
Editorial design
+
Premium typography
+
Strong photography
+
Purposeful GSAP motion
+
Fluid responsive behavior
+
Fast performance
+
Clear conversion paths
```

The final result should communicate the same central idea established by the homepage:

> **We Make Brands Own the City.**
