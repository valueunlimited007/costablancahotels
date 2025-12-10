# Task Plan: CostaBlancaHotels.com Rebuild

## Current Task
Bygga om costablancahotels.com med Next.js SSG - en multi-language affiliate reseguide för Costa Blanca-regionen.

## Projektöversikt
- **Mål:** Skapa en värdefull reseguide som genererar affiliate-intäkter via Hotels.com/CJ
- **Målgrupper:** Svenska, engelska, tyska och norska turister
- **Tech Stack:** Next.js 14+ (App Router), Tailwind CSS, TypeScript, Supabase

---

## Fas 1: Projektgrundläggning
- [ ] 1.1 Initiera Next.js 14 projekt med TypeScript och Tailwind CSS
- [ ] 1.2 Skapa grundläggande mappstruktur (app/, lib/, components/, types/)
- [ ] 1.3 Konfigurera .gitignore, .env.example
- [ ] 1.4 Sätta upp Tailwind CSS konfiguration med design tokens

## Fas 2: Multi-Language Routing
- [ ] 2.1 Skapa i18n-konfiguration (sv, en, de, no)
- [ ] 2.2 Implementera [lang] dynamisk routing
- [ ] 2.3 Skapa translations-struktur för UI-texter
- [ ] 2.4 Implementera language switcher utility

## Fas 3: Layout & Navigation
- [ ] 3.1 Skapa RootLayout med metadata
- [ ] 3.2 Bygga Navigation-komponent (responsiv, med språkväljare)
- [ ] 3.3 Bygga Footer-komponent
- [ ] 3.4 Skapa grundläggande page layout

## Fas 4: Hub-sida (Costa Blanca)
- [ ] 4.1 Skapa /costa-blanca hub-sida
- [ ] 4.2 Bygga Hero-komponent
- [ ] 4.3 Bygga DestinationsGrid-komponent (visa 18 destinationer)
- [ ] 4.4 Statisk data för destinationer (JSON-fil som start)

## Fas 5: Destination Detaljsidor
- [ ] 5.1 Skapa dynamisk /costa-blanca/[destination] route
- [ ] 5.2 Bygga DestinationHero-komponent
- [ ] 5.3 Bygga "Varför besöka"-sektion
- [ ] 5.4 Bygga HotelPreview-komponent (3 hotell)
- [ ] 5.5 Implementera generateStaticParams för SSG

## Fas 6: Hotellsidor med Affiliate-länkar
- [ ] 6.1 Skapa /costa-blanca/[destination]/hotels route
- [ ] 6.2 Bygga HotelCard-komponent med affiliate-knapp
- [ ] 6.3 Implementera CJ affiliate-länkgenerering (SubID tracking)
- [ ] 6.4 Statisk hotelldata för 3 featured destinationer

## Fas 7: SEO Grunder
- [ ] 7.1 Implementera dynamiska meta-taggar per sida
- [ ] 7.2 Skapa JSON-LD schema generators (TouristDestination, LodgingBusiness)
- [ ] 7.3 Implementera hreflang-taggar för multi-language
- [ ] 7.4 Skapa sitemap.xml generator

## Fas 8: MVP Polish
- [ ] 8.1 Responsiv design-justering
- [ ] 8.2 Optimera bilder med next/image
- [ ] 8.3 Lighthouse-test och optimering
- [ ] 8.4 Grundläggande felhantering (404-sida, etc.)

---

## Framtida Faser (efter MVP)
- Supabase-integration (ersätt statisk data)
- Restauranger & Aktiviteter-sidor
- Väder-widget integration
- FAQ-sektioner med schema
- Newsletter-signup
- Tyska & Norska översättningar
- Resterande 15 destinationer
- Adtraction affiliate-integration

---

## MVP Scope (Fas 1-8)
**Sidor:**
- Costa Blanca hub (sv + en)
- 3 destination-sidor: Benidorm, Javea, La Zenia (sv + en)
- Hotellsidor för dessa 3 destinationer med affiliate-länkar

**Features:**
- Responsiv navigation med språkväljare
- Hero-sektioner
- DestinationsGrid
- HotelCards med CJ affiliate-länkar
- Grundläggande SEO (meta, schema, sitemap, hreflang)

---

## Progress Notes
*Väntar på godkännande av plan*

---

## Review
### Changes Made
*To be filled after completion*

### Files Modified
*To be filled after completion*

### Testing Done
*To be filled after completion*

### Additional Notes
*To be filled after completion*
