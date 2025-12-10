# Task Plan: CostaBlancaHotels.com Rebuild

## Current Task
Bygga om costablancahotels.com med Next.js SSG - en multi-language affiliate reseguide för Costa Blanca-regionen.

## Projektöversikt
- **Mål:** Skapa en värdefull reseguide som genererar affiliate-intäkter via Hotels.com/CJ
- **Målgrupper:** Svenska, engelska, tyska och norska turister
- **Tech Stack:** Next.js 16, TypeScript, Tailwind CSS (ingen databas - statisk data)

---

## Fas 1: Projektgrundläggning
- [x] 1.1 Initiera Next.js 14 projekt med TypeScript och Tailwind CSS
- [x] 1.2 Skapa grundläggande mappstruktur (app/, lib/, components/, data/)
- [x] 1.3 Konfigurera .gitignore, .env.example
- [x] 1.4 Sätta upp Tailwind CSS konfiguration med Mediterranean design tokens

## Fas 2: Multi-Language Routing
- [x] 2.1 Skapa i18n-konfiguration (sv, en, de, no)
- [x] 2.2 Implementera [lang] dynamisk routing
- [x] 2.3 Skapa translations-struktur för UI-texter (4 språk)
- [x] 2.4 Implementera language switcher i Navigation

## Fas 3: Layout & Navigation
- [x] 3.1 Skapa RootLayout med metadata
- [x] 3.2 Bygga Navigation-komponent (responsiv, med språkväljare)
- [x] 3.3 Bygga Footer-komponent med destinations-länkar

## Fas 4: Hub-sida (Costa Blanca)
- [x] 4.1 Skapa /[lang]/costa-blanca hub-sida
- [x] 4.2 Bygga Hero-komponent med statistik
- [x] 4.3 Bygga DestinationsGrid-komponent (visa 18 destinationer)
- [x] 4.4 Statisk data för alla 18 destinationer (TypeScript)

## Fas 5: CJ Affiliate Integration
- [x] 5.1 Konfigurera CJ credentials (PID: 101611980, CID: 7427884)
- [x] 5.2 Skapa affiliate link generator med SubID tracking
- [x] 5.3 Konfigurera AIDs per region (sv, en, de, no)

---

## Nästa steg (ej påbörjat)
- [ ] Skapa destination-detaljsidor (/costa-blanca/[destination])
- [ ] Skapa hotellsidor med affiliate-knappar
- [ ] Implementera SEO (JSON-LD schema, hreflang, sitemap)
- [ ] Lägg till bilder för destinationer

---

## Progress Notes

### 2025-12-10 - Initial Setup Complete
- Initierade Next.js 16 projekt med TypeScript och Tailwind CSS
- Skapade multi-language routing med 4 språk (sv, en, de, no)
- Byggde Costa Blanca hub-sida med Hero och DestinationsGrid
- Skapade Navigation och Footer komponenter
- Lade till alla 18 destinationer med översättningar
- Konfigurerade CJ Affiliate integration med alla AIDs
- Svenska länkar för Benidorm, Javea, La Zenia pekar till .se-domäner
- Byggde projektet framgångsrikt
- Pushade till GitHub för Vercel-preview

---

## Review

### Changes Made
**Fas 1-5 genomförda:**
- Next.js 16 projekt med App Router
- Tailwind CSS med Mediterranean färgtema (cyan/turquoise + amber/gold)
- Multi-language routing för sv, en, de, no
- Costa Blanca hub-sida med Hero och 18 destinationer
- CJ Affiliate länkgenerering med SubID tracking
- Responsiv Navigation med språkväljare
- Footer med destinations-länkar

### Files Created
```
src/
├── app/
│   ├── [lang]/
│   │   ├── layout.tsx (language layout)
│   │   └── costa-blanca/
│   │       └── page.tsx (hub page)
│   ├── layout.tsx (root layout)
│   ├── page.tsx (redirect to /sv/costa-blanca)
│   └── globals.css (Tailwind + design tokens)
├── components/
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── DestinationCard.tsx
│   └── DestinationsGrid.tsx
├── data/
│   └── destinations.ts (18 destinations)
└── lib/
    ├── i18n.ts (language config)
    ├── translations.ts (UI strings)
    └── affiliate.ts (CJ link generator)
```

### Testing Done
- `npm run build` - framgångsrik SSG för alla 4 språkvarianter
- Statiska sidor genererade för /sv/, /en/, /de/, /no/costa-blanca

### CJ Affiliate Configuration
- **PID:** 101611980
- **CID:** 7427884
- **AIDs:**
  - sv: 5275614 (Hotels.com Sweden)
  - en: 5275597 (Hotels.com UK)
  - de: 5275606 (Hotels.com Germany)
  - no: 5275619 (Hotels.com Norway)

### Additional Notes
- Svenska destinationer Benidorm, Javea, La Zenia länkar till externa .se-sajter
- Ingen databas behövs - all data är statisk TypeScript
- Redo för Vercel deployment
