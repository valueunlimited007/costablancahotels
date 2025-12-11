# Costa Blanca Hotels - Projektplan & Vision

## Vision
Bli **den självklara resursen** för alla som planerar en resa till Costa Blanca. En sajt som kombinerar:
- **Hotellbokning** (affiliate via Hotels.com/CJ)
- **Lokal kunskap** (restauranger, aktiviteter, praktisk info)
- **Kulturell insikt** (högtider, event, lokala tips)
- **Språkanpassning** (sv, en, de, no + framtida fi, dk, nl)

**Affärsmodell:** Affiliate-provision från hotellbokningar + eventuellt framtida annonsintäkter.

---

## Nuvarande Status (Dec 2025)
- ✅ Next.js 14 med SSG
- ✅ 4 språk (sv, en, de, no)
- ✅ 18 destinationer med bilder
- ✅ CJ Affiliate integration (Hotels.com)
- ✅ Google Maps på destinationssidor
- ✅ Responsiv design
- ⏳ Deployment via Netlify (preview)
- ❌ Sitemap.xml (dynamisk)
- ❌ Blogg/nyheter
- ❌ Restauranger, aktiviteter
- ❌ SEO-optimering komplett

---

## Fas 1: Teknisk SEO-grund (Prioritet: HÖG)
> Mål: Google kan indexera och ranka alla sidor korrekt

- [ ] 1.1 Skapa dynamisk sitemap.xml (alla språk + destinationer)
- [ ] 1.2 Skapa robots.txt med sitemap-referens
- [ ] 1.3 Lägg till hreflang-taggar på alla sidor
- [ ] 1.4 Implementera kanoniska URLs
- [ ] 1.5 Optimera meta-titlar och beskrivningar per destination
- [ ] 1.6 Lägg till Schema.org (Organization, WebSite, BreadcrumbList)
- [ ] 1.7 Skapa HTML-sajtkarta (/sitemap) för användare
- [ ] 1.8 Konfigurera Google Analytics 4

---

## Fas 2: Innehållsstruktur (Prioritet: HÖG)
> Mål: Mer värdefull content = högre ranking

### 2.1 Destinationsinnehåll
- [ ] Utöka varje destination med:
  - [ ] Längre SEO-texter (500+ ord)
  - [ ] Väder/klimat-sektion
  - [ ] Transport/hur du tar dig dit
  - [ ] Bästa tiden att besöka
  - [ ] Unika FAQ per destination

### 2.2 Restauranger
- [ ] Skapa datastruktur för restauranger
- [ ] Restaurangsidor per destination
- [ ] Kategorier: Spanskt, Svenskt, Fine dining, Budget
- [ ] Schema.org Restaurant markup

### 2.3 Aktiviteter & Attraktioner
- [ ] Skapa datastruktur för aktiviteter
- [ ] Kategorier: Stränder, Natur, Kultur, Nöjen, Golf
- [ ] Attraktionssidor med praktisk info

### 2.4 Praktisk info (per målgrupp)
- [ ] Flygtips per land (SAS, Norwegian, Ryanair)
- [ ] Transfertjänster och taxi (anpassat per nationalitet)
- [ ] Hyrbil-tips
- [ ] Sjukvård och apotek
- [ ] Svenska kyrkan, brittiska pubar, etc.

---

## Fas 3: Blogg & Nyheter (Prioritet: MEDIUM)
> Mål: Färskt innehåll + long-tail keywords

- [ ] 3.1 Skapa blogg-infrastruktur (/[lang]/blog)
- [ ] 3.2 MDX-support för blogginlägg
- [ ] 3.3 Kategorier och taggar
- [ ] 3.4 RSS-feed per språk

### Innehållskalender (exempel)
- Veckovis: Tips från Facebook-grupper
- Högtider: Semana Santa, Midsommar för svenskar, Oktoberfest-resor för tyskar
- Säsong: "Bästa vinterdestinationer", "Sommarens stränder"
- Event: Flamencokvällar, lokala fiestas

---

## Fas 4: Intern länkning & UX (Prioritet: MEDIUM)
> Mål: Användare och Google hittar allt enkelt

- [ ] 4.1 Breadcrumbs på alla sidor
- [ ] 4.2 "Relaterade destinationer" på varje sida
- [ ] 4.3 "Nearby" baserat på koordinater
- [ ] 4.4 Cross-linking mellan restauranger/hotell/aktiviteter
- [ ] 4.5 Förbättrad Footer med alla kategorier
- [ ] 4.6 Sökfunktion (statisk, client-side)

---

## Fas 5: Konvertering & Affiliate (Prioritet: MEDIUM)
> Mål: Maximera klick till affiliate-partners

- [ ] 5.1 Förbättrade CTA-knappar (A/B-testade designs)
- [ ] 5.2 "Jämför hotellpriser" widget
- [ ] 5.3 Hotell-highlights per destination
- [ ] 5.4 "Populärt just nu" sektion
- [ ] 5.5 Exit-intent för hotellsökning

---

## Fas 6: Fler språk (Prioritet: LÅG - framtida)
> Mål: Bredda målgruppen

- [ ] 6.1 Finska (fi) - stor skandinavisk marknad
- [ ] 6.2 Danska (dk) - nära norska
- [ ] 6.3 Holländska (nl) - stor turistgrupp

---

## Tekniska detaljer

### Deployment
- **Plattform:** Netlify
- **Domän:** costablancahotels.com
- **Build:** Next.js SSG (Static Site Generation)

### Affiliate
- **Partner:** CJ Affiliate / Hotels.com
- **PID:** 101548506
- **AID:** 13920931
- **Tracking:** SubID med språk_destination_position

### SEO-verktyg
- Google Search Console: ✅ Konfigurerat
- Google Analytics 4: ❌ Ej konfigurerat
- Sitemap: ❌ Behöver skapas

---

## Progress Log

### 2025-12-11
- Fixat hero-bild till lokal costa-blanca.webp
- Fixat PostCSS för Tailwind v3
- Lagt till 18 lokala destinationsbilder
- Fixat Google Maps embed
- Fixat affiliate-länkar (korrekta CJ credentials)

### 2025-12-10
- Initial setup med Next.js 14
- Multi-language routing (sv, en, de, no)
- 18 destinationer med översättningar
- CJ Affiliate integration

---

## Nästa åtgärder (prioriterat)
1. **Sitemap.xml** - Kritiskt för indexering
2. **Robots.txt** - Behövs för crawlers
3. **Meta-optimering** - Unika titlar/beskrivningar
4. **Schema.org** - Rich snippets i Google
5. **Restauranger** - Mer content = mer trafik
