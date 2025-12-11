# CLAUDE.md - AI Assistant Guide for Costa Blanca Hotels

## Vision & Mission

**Vision:** Bli den självklara resursen för europeiska resenärer som planerar semester till Costa Blanca.

**Mission:** Erbjuda den mest kompletta, lokala och språkanpassade guiden för Costa Blanca - från hotellbokning till restaurangtips, aktiviteter och praktisk information.

**Affärsmodell:** Affiliate-intäkter primärt via Hotels.com/CJ, med potential för framtida annonsintäkter.

---

## Claude Rules (MANDATORY)

**Dessa regler MÅSTE följas för ALLA uppgifter:**

1. **Planera först**: Tänk igenom problemet, läs relevanta filer i kodbasen, och skriv en plan i `tasks/todo.md`

2. **Skapa checkbar todo-lista**: Planen ska ha en lista med uppgifter som kan bockas av

3. **Få godkännande innan start**: Innan du börjar arbeta, stäm av med användaren för att verifiera planen

4. **Spåra framsteg**: Arbeta igenom uppgifterna och markera dem som klara allt eftersom

5. **Kommunicera ändringar**: Ge en kort förklaring av vad du ändrat i varje steg

6. **ENKELHET ÄR NYCKELN**: Gör varje uppgift och kodändring så enkel som möjligt. Undvik massiva eller komplexa ändringar. Varje ändring ska påverka så lite kod som möjligt.

7. **Dokumentera slutförande**: Lägg till en review-sektion i `tasks/todo.md` med en sammanfattning

8. **INGEN LATHET**: Var INTE lat. Om det finns en bugg, hitta GRUNDORSAKEN och fixa den. INGA temporära lösningar.

9. **MINIMAL PÅVERKAN**: Gör alla fixar så enkla som möjligt. De ska bara påverka nödvändig kod. Målet är att INTE introducera buggar.

10. **ALDRIG HITTA PÅ DATA**: Du får ALDRIG hitta på hotell, restauranger, aktiviteter, lägenheter eller andra boenden som inte finns på riktigt. All data MÅSTE vara verifierad och verklig. Fabricerad data förstör trovärdigheten. Vid osäkerhet - verifiera via webbsökning.

---

## Projektöversikt

**Costa Blanca Hotels** är en multi-language reseguide och hotellbokningsportal för Costa Blanca-regionen i Spanien.

### Målgrupper
| Språk | Marknad | Prioritet |
|-------|---------|-----------|
| Svenska (sv) | Sverige | HÖG |
| Engelska (en) | UK, International | HÖG |
| Tyska (de) | Tyskland, Österrike, Schweiz | HÖG |
| Norska (no) | Norge | HÖG |
| Finska (fi) | Finland | FRAMTIDA |
| Danska (dk) | Danmark | FRAMTIDA |
| Holländska (nl) | Nederländerna | FRAMTIDA |

### Konkurrensstrategi
- **TripAdvisor:** Vi är mer nischade och lokalt anpassade
- **Lokala sajter:** Vi har fler språk och bättre UX
- **Facebook-grupper:** Vi strukturerar deras kunskap till sökvänligt innehåll

---

## Tech Stack

| Komponent | Teknologi | Kommentar |
|-----------|-----------|-----------|
| Framework | Next.js 14 (App Router) | SSG för prestanda & SEO |
| Språk | TypeScript | Typsäkerhet |
| Styling | Tailwind CSS v3 | Utility-first |
| Deployment | Netlify | Enkel deploy, bra CDN |
| Domän | costablancahotels.com | Produktionsdomän |
| Analytics | Google Analytics 4 | (ej konfigurerat än) |
| SEO | Google Search Console | Konfigurerat |

### Affiliate-integration
- **Partner:** CJ Affiliate / Hotels.com
- **PID:** 101548506
- **AID:** 13920931
- **Tracking:** SubID-format: `{språk}_{destination}_{position}`

---

## Projektstruktur

```
costablancahotels/
├── public/
│   └── images/
│       ├── destinations/     # Bilder per destination
│       └── heroes/           # Hero-bilder
├── src/
│   ├── app/
│   │   ├── [lang]/           # Språk-routing
│   │   │   ├── costa-blanca/
│   │   │   │   ├── page.tsx          # Hub-sida
│   │   │   │   └── [destination]/
│   │   │   │       └── page.tsx      # Destinationssidor
│   │   │   └── layout.tsx
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Redirect → /sv/costa-blanca
│   │   └── globals.css
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── DestinationCard.tsx
│   │   └── DestinationsGrid.tsx
│   ├── data/
│   │   ├── destinations.ts        # 18 destinationer
│   │   └── destination-content.ts # Utökat innehåll
│   └── lib/
│       ├── i18n.ts           # Språkkonfiguration
│       ├── translations.ts   # UI-strängar
│       ├── affiliate.ts      # CJ länkgenerator
│       └── images.ts         # Bildhantering
├── tasks/
│   └── todo.md               # Projektplan & progress
├── CLAUDE.md                 # Denna fil
└── package.json
```

---

## SEO-strategi

### Prioriterade åtgärder
1. **Sitemap.xml** - Dynamisk, alla språk och destinationer
2. **Robots.txt** - Tillåt crawling, referera sitemap
3. **Hreflang** - Korrekt språklänkning
4. **Schema.org** - TouristDestination, Organization, BreadcrumbList
5. **Meta-optimering** - Unika titlar/beskrivningar per sida

### Innehållsstrategi
- **Destinationer:** 500+ ord per destination, unika FAQ
- **Restauranger:** Per destination, kategoriserade
- **Aktiviteter:** Stränder, natur, kultur, golf
- **Blogg:** Veckovisa uppdateringar, högtider, event
- **Praktisk info:** Flyg, transfer, hyrbil (anpassat per nationalitet)

### Intern länkning
- Breadcrumbs på alla sidor
- "Relaterade destinationer" baserat på närhet
- Cross-linking mellan innehållstyper
- Användar-sajtkarta (/sitemap)

---

## Kommandon

```bash
npm run dev          # Starta utvecklingsserver
npm run build        # Bygg för produktion (SSG)
npm run start        # Kör produktionsbygge lokalt
npm run lint         # Kör ESLint
```

---

## Kodkonventioner

### Filnamn
- Komponenter: `PascalCase.tsx` (Hero.tsx)
- Utilities: `camelCase.ts` (affiliate.ts)
- Data: `kebab-case.ts` (destinations.ts)

### Komponenter
- Funktionella komponenter med TypeScript
- Props-interface definierade ovanför komponenten
- Server Components som default, 'use client' endast vid behov

### Translations
- Alla UI-strängar i `translations.ts`
- Använd `t(locale, 'key')` för översättningar
- Lägg till nya nycklar i `TranslationKey` type

### Affiliate-länkar
- Använd `getHotelsSearchLink(locale, destination, position)`
- Position: 'hero', 'sidebar', 'cta', etc.
- Alla externa länkar: `target="_blank" rel="noopener noreferrer"`

---

## Deployment

### Netlify
- Push till GitHub-branch → automatisk preview
- Merge till main → deploy till produktion
- Domän: costablancahotels.com

### Miljövariabler (framtida)
```
NEXT_PUBLIC_GA_ID=        # Google Analytics 4
NEXT_PUBLIC_DOMAIN=       # costablancahotels.com
```

---

## Utvecklingsplan (faser)

### Fas 1: SEO-grund (PÅGÅENDE)
- Sitemap.xml, robots.txt
- Schema.org markup
- Meta-optimering
- Hreflang-taggar

### Fas 2: Innehåll
- Restauranger per destination
- Aktiviteter och attraktioner
- Praktisk info (flyg, transfer, etc.)

### Fas 3: Blogg
- MDX-stöd för blogginlägg
- Kategorier och taggar
- RSS-feed per språk
- Innehåll: högtider, event, lokala nyheter

### Fas 4: UX-förbättringar
- Sökfunktion (client-side)
- Relaterade destinationer
- Förbättrad navigation
- Breadcrumbs

### Fas 5: Fler språk (framtida)
- Finska (fi)
- Danska (dk)
- Holländska (nl)

---

## Viktiga resurser

- **Projektplan:** `tasks/todo.md`
- **GitHub:** https://github.com/valueunlimited007/costablancahotels
- **CJ Affiliate:** https://www.cj.com
- **Google Search Console:** https://search.google.com/search-console

---

## Changelog

### 2025-12-11
- Uppdaterade CLAUDE.md med komplett vision och strategi
- Skapade omfattande projektplan i tasks/todo.md
- Fixade hero-bild, PostCSS, affiliate-länkar
- Lade till 18 lokala destinationsbilder
- Implementerade Google Maps på destinationssidor

### 2025-12-10
- Initial setup med Next.js 14, TypeScript, Tailwind CSS
- Multi-language routing (sv, en, de, no)
- 18 destinationer med översättningar
- CJ Affiliate integration
