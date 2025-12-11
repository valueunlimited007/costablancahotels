import { Locale } from '@/lib/i18n';

export interface TransportOption {
  id: string;
  type: 'airport' | 'bus' | 'train' | 'car' | 'taxi' | 'ferry';
  translations: {
    [key in Locale]: {
      title: string;
      description: string;
      tip?: string;
    };
  };
}

export interface NationalityTip {
  nationality: 'swedish' | 'british' | 'german' | 'norwegian' | 'general';
  translations: {
    [key in Locale]: {
      title: string;
      tips: string[];
    };
  };
}

export interface PracticalCategory {
  id: string;
  icon: string;
  translations: {
    [key in Locale]: {
      title: string;
      items: string[];
    };
  };
}

// Transport options for Costa Blanca
export const transportOptions: TransportOption[] = [
  {
    id: 'alicante-airport',
    type: 'airport',
    translations: {
      sv: {
        title: 'Alicante-Elche flygplats (ALC)',
        description: 'Huvudflygplatsen för Costa Blanca med direktflyg från Stockholm, Göteborg och Malmö. Ligger 10 km söder om Alicante stad.',
        tip: 'Boka flygplatstransfer i förväg för bästa pris, eller ta buss C-6 till centrum.',
      },
      en: {
        title: 'Alicante-Elche Airport (ALC)',
        description: 'The main airport for Costa Blanca with direct flights from most European cities. Located 10 km south of Alicante city.',
        tip: 'Book airport transfer in advance for best prices, or take bus C-6 to the city center.',
      },
      de: {
        title: 'Flughafen Alicante-Elche (ALC)',
        description: 'Der Hauptflughafen für die Costa Blanca mit Direktflügen aus den meisten europäischen Städten. 10 km südlich von Alicante Stadt.',
        tip: 'Buchen Sie den Flughafentransfer im Voraus für die besten Preise oder nehmen Sie den Bus C-6 ins Zentrum.',
      },
      no: {
        title: 'Alicante-Elche flyplass (ALC)',
        description: 'Hovedflyplassen for Costa Blanca med direktefly fra Oslo, Bergen og Stavanger. Ligger 10 km sør for Alicante by.',
        tip: 'Bestill flyplasstransport på forhånd for beste pris, eller ta buss C-6 til sentrum.',
      },
    },
  },
  {
    id: 'valencia-airport',
    type: 'airport',
    translations: {
      sv: {
        title: 'Valencia flygplats (VLC)',
        description: 'Alternativ flygplats för norra Costa Blanca (Denia, Jávea). Cirka 100 km norr om Benidorm.',
        tip: 'Bra alternativ för destinationer norr om Calpe. Hyr bil för enklaste transfer.',
      },
      en: {
        title: 'Valencia Airport (VLC)',
        description: 'Alternative airport for northern Costa Blanca (Denia, Jávea). About 100 km north of Benidorm.',
        tip: 'Good alternative for destinations north of Calpe. Rent a car for easiest transfer.',
      },
      de: {
        title: 'Flughafen Valencia (VLC)',
        description: 'Alternativer Flughafen für die nördliche Costa Blanca (Denia, Jávea). Etwa 100 km nördlich von Benidorm.',
        tip: 'Gute Alternative für Ziele nördlich von Calpe. Mieten Sie ein Auto für den einfachsten Transfer.',
      },
      no: {
        title: 'Valencia flyplass (VLC)',
        description: 'Alternativ flyplass for nordlige Costa Blanca (Denia, Jávea). Cirka 100 km nord for Benidorm.',
        tip: 'Godt alternativ for destinasjoner nord for Calpe. Lei bil for enkleste transport.',
      },
    },
  },
  {
    id: 'tram',
    type: 'train',
    translations: {
      sv: {
        title: 'TRAM Alicante (Spårvagn)',
        description: 'Modern spårvagnslinje som förbinder Alicante med Benidorm via kusten. Perfekt för att utforska kuststäderna.',
        tip: 'Köp T-10 kort för 10 resor till reducerat pris. Linjen går längs stranden med fantastisk utsikt.',
      },
      en: {
        title: 'TRAM Alicante (Light Rail)',
        description: 'Modern light rail connecting Alicante to Benidorm along the coast. Perfect for exploring coastal towns.',
        tip: 'Buy a T-10 card for 10 trips at reduced price. The line runs along the beach with amazing views.',
      },
      de: {
        title: 'TRAM Alicante (Straßenbahn)',
        description: 'Moderne Straßenbahn, die Alicante mit Benidorm entlang der Küste verbindet. Perfekt zum Erkunden der Küstenstädte.',
        tip: 'Kaufen Sie eine T-10-Karte für 10 Fahrten zum reduzierten Preis. Die Linie verläuft am Strand mit toller Aussicht.',
      },
      no: {
        title: 'TRAM Alicante (Trikk)',
        description: 'Moderne trikkelinje som forbinder Alicante med Benidorm langs kysten. Perfekt for å utforske kystbyene.',
        tip: 'Kjøp T-10 kort for 10 reiser til redusert pris. Linjen går langs stranden med fantastisk utsikt.',
      },
    },
  },
  {
    id: 'bus',
    type: 'bus',
    translations: {
      sv: {
        title: 'Bussnätverk (ALSA)',
        description: 'Omfattande bussnätverk som täcker hela Costa Blanca. ALSA är huvudoperatören med linjer mellan alla större städer.',
        tip: 'Boka långdistansbussar online på alsa.es för bättre priser. Lokalbussar kan betalas kontant.',
      },
      en: {
        title: 'Bus Network (ALSA)',
        description: 'Comprehensive bus network covering all of Costa Blanca. ALSA is the main operator with routes between all major cities.',
        tip: 'Book long-distance buses online at alsa.es for better prices. Local buses can be paid in cash.',
      },
      de: {
        title: 'Busnetz (ALSA)',
        description: 'Umfassendes Busnetz, das die gesamte Costa Blanca abdeckt. ALSA ist der Hauptbetreiber mit Linien zwischen allen größeren Städten.',
        tip: 'Buchen Sie Fernbusse online auf alsa.es für bessere Preise. Lokalbusse können bar bezahlt werden.',
      },
      no: {
        title: 'Bussnettverket (ALSA)',
        description: 'Omfattende bussnett som dekker hele Costa Blanca. ALSA er hovedoperatøren med ruter mellom alle større byer.',
        tip: 'Bestill langdistansebusser online på alsa.es for bedre priser. Lokalbusser kan betales kontant.',
      },
    },
  },
  {
    id: 'car-rental',
    type: 'car',
    translations: {
      sv: {
        title: 'Hyrbil',
        description: 'Det mest flexibla sättet att utforska Costa Blanca. Alla stora uthyrare finns på flygplatserna.',
        tip: 'Boka i förväg via jämförelsesajter. Full försäkring rekommenderas. Tänk på att spanska motorvägar ofta har vägtullar.',
      },
      en: {
        title: 'Car Rental',
        description: 'The most flexible way to explore Costa Blanca. All major rental companies are at the airports.',
        tip: 'Book in advance via comparison sites. Full insurance recommended. Note that Spanish motorways often have tolls.',
      },
      de: {
        title: 'Mietwagen',
        description: 'Die flexibelste Art, die Costa Blanca zu erkunden. Alle großen Vermieter sind an den Flughäfen.',
        tip: 'Buchen Sie im Voraus über Vergleichsseiten. Vollkasko empfohlen. Beachten Sie, dass spanische Autobahnen oft mautpflichtig sind.',
      },
      no: {
        title: 'Leiebil',
        description: 'Den mest fleksible måten å utforske Costa Blanca. Alle store utleiefirmaer finnes på flyplassene.',
        tip: 'Bestill på forhånd via sammenligningssider. Full forsikring anbefales. Merk at spanske motorveier ofte har bompenger.',
      },
    },
  },
  {
    id: 'taxi',
    type: 'taxi',
    translations: {
      sv: {
        title: 'Taxi & Transfer',
        description: 'Taxibilar finns i alla städer. Privata transfertjänster kan bokas för flygplatstransporter.',
        tip: 'Be alltid om att taxametern ska vara på. Uber fungerar i Alicante. Fast pris till flygplatsen kan förhandlas.',
      },
      en: {
        title: 'Taxi & Transfer',
        description: 'Taxis are available in all cities. Private transfer services can be booked for airport transfers.',
        tip: 'Always ask for the meter to be on. Uber works in Alicante. Fixed price to airport can be negotiated.',
      },
      de: {
        title: 'Taxi & Transfer',
        description: 'Taxis sind in allen Städten verfügbar. Private Transferdienste können für Flughafentransfers gebucht werden.',
        tip: 'Bitten Sie immer darum, das Taxameter einzuschalten. Uber funktioniert in Alicante. Festpreis zum Flughafen kann verhandelt werden.',
      },
      no: {
        title: 'Taxi & Transfer',
        description: 'Taxier finnes i alle byer. Private transfertjenester kan bestilles for flyplasstransport.',
        tip: 'Be alltid om at taksameteret skal være på. Uber fungerer i Alicante. Fast pris til flyplassen kan forhandles.',
      },
    },
  },
];

// Tips specific to different nationalities
export const nationalityTips: NationalityTip[] = [
  {
    nationality: 'swedish',
    translations: {
      sv: {
        title: 'Tips för svenskar',
        tips: [
          'Systembolaget finns inte - vin och öl köps i vanliga mataffärer till betydligt lägre priser',
          'Siesta är verklig - många butiker stänger 14-17. Planera shopping därefter',
          'Spanjorer äter middag sent (21-23). Restauranger är ofta tomma före 20:30',
          'Svenska finns på många menyer i turistområden som Torrevieja och Benidorm',
          'Apoteket (Farmacia) säljer många receptfria läkemedel som kräver recept i Sverige',
          'Kontanter används fortfarande på många ställen - ha alltid med lite euro',
        ],
      },
      en: {
        title: 'Tips for Swedish visitors',
        tips: [
          'No state alcohol monopoly - wine and beer sold in regular supermarkets at much lower prices',
          'Siesta is real - many shops close 14-17. Plan shopping accordingly',
          'Spaniards eat dinner late (21-23). Restaurants are often empty before 20:30',
          'Swedish menus available in tourist areas like Torrevieja and Benidorm',
          'Pharmacies sell many over-the-counter medicines that require prescription in Sweden',
          'Cash is still used in many places - always carry some euros',
        ],
      },
      de: {
        title: 'Tipps für schwedische Besucher',
        tips: [
          'Kein staatliches Alkoholmonopol - Wein und Bier werden in normalen Supermärkten zu viel niedrigeren Preisen verkauft',
          'Siesta ist Realität - viele Geschäfte schließen 14-17 Uhr. Planen Sie Ihre Einkäufe entsprechend',
          'Spanier essen spät zu Abend (21-23). Restaurants sind vor 20:30 oft leer',
          'Schwedische Menüs in Touristengebieten wie Torrevieja und Benidorm verfügbar',
          'Apotheken verkaufen viele rezeptfreie Medikamente, die in Schweden verschreibungspflichtig sind',
          'Bargeld wird noch vielerorts verwendet - immer etwas Euro dabei haben',
        ],
      },
      no: {
        title: 'Tips for svenske besøkende',
        tips: [
          'Inget statlig alkoholmonopol - vin og øl selges i vanlige matbutikker til mye lavere priser',
          'Siesta er virkelig - mange butikker stenger 14-17. Planlegg shopping deretter',
          'Spanjolene spiser middag sent (21-23). Restauranter er ofte tomme før 20:30',
          'Svenske menyer tilgjengelig i turistområder som Torrevieja og Benidorm',
          'Apoteket selger mange reseptfrie medisiner som krever resept i Sverige',
          'Kontanter brukes fortsatt mange steder - ha alltid med litt euro',
        ],
      },
    },
  },
  {
    nationality: 'british',
    translations: {
      sv: {
        title: 'Tips för britter',
        tips: [
          'Efter Brexit behöver brittiska medborgare pass (inte ID-kort) och kan vistas max 90 dagar',
          'Engelska talas brett i turistområden - inget problem att klara sig utan spanska',
          'Full English breakfast finns på många ställen i Benidorm och Torrevieja',
          'Premier League visas på de flesta sportbarer',
          'Dricks ingår ofta i priset men 5-10% uppskattas för bra service',
          'Brittiska eluttag fungerar inte - ta med adapter',
        ],
      },
      en: {
        title: 'Tips for British visitors',
        tips: [
          'Post-Brexit: British citizens need passport (not ID card) and can stay max 90 days per 180 days',
          'English widely spoken in tourist areas - no problem getting by without Spanish',
          'Full English breakfast available in many places in Benidorm and Torrevieja',
          'Premier League shown at most sports bars',
          'Service charge often included but 5-10% tip appreciated for good service',
          'UK plugs don\'t work - bring an adapter',
        ],
      },
      de: {
        title: 'Tipps für britische Besucher',
        tips: [
          'Nach dem Brexit: Britische Staatsbürger brauchen Reisepass (kein Personalausweis) und können max. 90 Tage pro 180 Tage bleiben',
          'Englisch wird in Touristengebieten weit verbreitet gesprochen',
          'Full English Breakfast an vielen Orten in Benidorm und Torrevieja verfügbar',
          'Premier League in den meisten Sportbars gezeigt',
          'Servicegebühr oft inklusive, aber 5-10% Trinkgeld für guten Service geschätzt',
          'UK-Stecker funktionieren nicht - Adapter mitbringen',
        ],
      },
      no: {
        title: 'Tips for britiske besøkende',
        tips: [
          'Etter Brexit: Britiske statsborgere trenger pass (ikke ID-kort) og kan oppholde seg maks 90 dager per 180 dager',
          'Engelsk snakkes bredt i turistområder - ingen problem å klare seg uten spansk',
          'Full English breakfast tilgjengelig mange steder i Benidorm og Torrevieja',
          'Premier League vises på de fleste sportsbarer',
          'Servicegebyr ofte inkludert, men 5-10% tips settes pris på for god service',
          'Britiske støpsler fungerer ikke - ta med adapter',
        ],
      },
    },
  },
  {
    nationality: 'german',
    translations: {
      sv: {
        title: 'Tips för tyskar',
        tips: [
          'Tyska talas på många ställen, särskilt i La Zenia och Orihuela Costa',
          'Tyska tidningar och TV finns på de flesta hotell i turistområden',
          'Supermarkederna Lidl och Aldi finns i Spanien med delvis tyska produkter',
          'Deutsches Eck i flera orter serverar tysk mat och öl',
          'Kreditkort accepteras brett men ha alltid kontanter som backup',
          'Solen är stark - SPF 50 rekommenderas även för vana soldyrkare',
        ],
      },
      en: {
        title: 'Tips for German visitors',
        tips: [
          'German spoken in many places, especially in La Zenia and Orihuela Costa',
          'German newspapers and TV available at most hotels in tourist areas',
          'Lidl and Aldi supermarkets in Spain with some German products',
          'German restaurants (Deutsches Eck) in several towns serving German food and beer',
          'Credit cards widely accepted but always have cash as backup',
          'Sun is strong - SPF 50 recommended even for experienced sun-lovers',
        ],
      },
      de: {
        title: 'Tipps für deutsche Besucher',
        tips: [
          'Deutsch wird an vielen Orten gesprochen, besonders in La Zenia und Orihuela Costa',
          'Deutsche Zeitungen und TV in den meisten Hotels in Touristengebieten verfügbar',
          'Lidl und Aldi Supermärkte in Spanien mit einigen deutschen Produkten',
          'Deutsche Restaurants (Deutsches Eck) in mehreren Orten mit deutschem Essen und Bier',
          'Kreditkarten werden weitgehend akzeptiert, aber immer Bargeld als Backup dabei haben',
          'Die Sonne ist stark - LSF 50 empfohlen auch für erfahrene Sonnenanbeter',
        ],
      },
      no: {
        title: 'Tips for tyske besøkende',
        tips: [
          'Tysk snakkes mange steder, spesielt i La Zenia og Orihuela Costa',
          'Tyske aviser og TV tilgjengelig på de fleste hoteller i turistområder',
          'Lidl og Aldi supermarkeder i Spania med noen tyske produkter',
          'Tyske restauranter (Deutsches Eck) i flere byer som serverer tysk mat og øl',
          'Kredittkort aksepteres bredt, men ha alltid kontanter som backup',
          'Solen er sterk - SPF 50 anbefales selv for erfarne solentusiaster',
        ],
      },
    },
  },
  {
    nationality: 'norwegian',
    translations: {
      sv: {
        title: 'Tips för norrmän',
        tips: [
          'Liknande tips som för svenskar gäller - sen middag, siesta, billig alkohol',
          'Många norrmän i Alfaz del Pi, La Nucia och Albir - norska föreningar och kyrkor finns',
          'Norsk TV (NRK) kan ses via VPN eller på vissa skandinaviska barer',
          'Bankkort fungerar nästan överallt - Vipps fungerar inte',
          'Hälsovård: Beställ EU-sjukförsäkringskort innan resan för akutvård',
          'Prisnivån är betydligt lägre än i Norge - njut av restaurangbesök!',
        ],
      },
      en: {
        title: 'Tips for Norwegian visitors',
        tips: [
          'Similar tips as for Swedes apply - late dinner, siesta, cheap alcohol',
          'Many Norwegians in Alfaz del Pi, La Nucia and Albir - Norwegian associations and churches exist',
          'Norwegian TV (NRK) can be watched via VPN or at some Scandinavian bars',
          'Bank cards work almost everywhere - Vipps does not work',
          'Healthcare: Order EU health insurance card before travel for emergency care',
          'Price level significantly lower than Norway - enjoy dining out!',
        ],
      },
      de: {
        title: 'Tipps für norwegische Besucher',
        tips: [
          'Ähnliche Tipps wie für Schweden gelten - spätes Abendessen, Siesta, günstiger Alkohol',
          'Viele Norweger in Alfaz del Pi, La Nucia und Albir - norwegische Vereine und Kirchen vorhanden',
          'Norwegisches TV (NRK) über VPN oder in einigen skandinavischen Bars zu sehen',
          'Bankkarten funktionieren fast überall - Vipps funktioniert nicht',
          'Gesundheitswesen: EU-Krankenversicherungskarte vor der Reise bestellen für Notfallversorgung',
          'Preisniveau deutlich niedriger als in Norwegen - genießen Sie das Essen gehen!',
        ],
      },
      no: {
        title: 'Tips for nordmenn',
        tips: [
          'Lignende tips som for svensker gjelder - sen middag, siesta, billig alkohol',
          'Mange nordmenn i Alfaz del Pi, La Nucia og Albir - norske foreninger og kirker finnes',
          'Norsk TV (NRK) kan sees via VPN eller på noen skandinaviske barer',
          'Bankkort fungerer nesten overalt - Vipps fungerer ikke',
          'Helsevesen: Bestill EU-helseforsikringskort før reisen for akuttbehandling',
          'Prisnivået er betydelig lavere enn i Norge - nyt restaurantbesøk!',
        ],
      },
    },
  },
  {
    nationality: 'general',
    translations: {
      sv: {
        title: 'Allmänna tips',
        tips: [
          'Vattnett är drickbart men många föredrar flaskvatten för smakens skull',
          'Strandpromenaden (Paseo Marítimo) är perfekt för kvällspromenader',
          'Marknadsdagar varierar mellan städer - kolla lokala tider för loppisar',
          'Spanska helgdagar kan innebära stängda butiker - planera i förväg',
          'Gratis WiFi finns på de flesta caféer och restauranger',
          'Nödnummer i Spanien: 112 (gäller för alla nödsituationer)',
        ],
      },
      en: {
        title: 'General tips',
        tips: [
          'Tap water is drinkable but many prefer bottled water for taste',
          'The seafront promenade (Paseo Marítimo) is perfect for evening walks',
          'Market days vary between towns - check local times for flea markets',
          'Spanish public holidays may mean closed shops - plan ahead',
          'Free WiFi available at most cafes and restaurants',
          'Emergency number in Spain: 112 (works for all emergencies)',
        ],
      },
      de: {
        title: 'Allgemeine Tipps',
        tips: [
          'Leitungswasser ist trinkbar, aber viele bevorzugen Flaschenwasser wegen des Geschmacks',
          'Die Strandpromenade (Paseo Marítimo) ist perfekt für Abendspaziergänge',
          'Markttage variieren zwischen den Städten - lokale Zeiten für Flohmärkte prüfen',
          'Spanische Feiertage können geschlossene Geschäfte bedeuten - vorausplanen',
          'Kostenloses WLAN in den meisten Cafés und Restaurants verfügbar',
          'Notrufnummer in Spanien: 112 (gilt für alle Notfälle)',
        ],
      },
      no: {
        title: 'Generelle tips',
        tips: [
          'Springvann er drikkbart, men mange foretrekker flaskevann for smakens skyld',
          'Strandpromenaden (Paseo Marítimo) er perfekt for kveldsturer',
          'Markedsdager varierer mellom byer - sjekk lokale tider for loppemarkeder',
          'Spanske helligdager kan bety stengte butikker - planlegg på forhånd',
          'Gratis WiFi tilgjengelig på de fleste kafeer og restauranter',
          'Nødnummer i Spania: 112 (gjelder for alle nødssituasjoner)',
        ],
      },
    },
  },
];

// Practical categories for quick reference
export const practicalCategories: PracticalCategory[] = [
  {
    id: 'money',
    icon: '💶',
    translations: {
      sv: {
        title: 'Pengar & Betalning',
        items: [
          'Valuta: Euro (€)',
          'Kort accepteras brett - Visa/Mastercard bäst',
          'Bankomater (Cajeros) finns överallt',
          'Undvik växlingskontor på flygplatsen - dålig kurs',
          'Kontanter bra att ha för småköp och marknader',
        ],
      },
      en: {
        title: 'Money & Payment',
        items: [
          'Currency: Euro (€)',
          'Cards widely accepted - Visa/Mastercard best',
          'ATMs (Cajeros) available everywhere',
          'Avoid airport exchange offices - poor rates',
          'Cash good to have for small purchases and markets',
        ],
      },
      de: {
        title: 'Geld & Zahlung',
        items: [
          'Währung: Euro (€)',
          'Karten weitgehend akzeptiert - Visa/Mastercard am besten',
          'Geldautomaten (Cajeros) überall verfügbar',
          'Wechselstuben am Flughafen vermeiden - schlechte Kurse',
          'Bargeld gut für kleine Einkäufe und Märkte',
        ],
      },
      no: {
        title: 'Penger & Betaling',
        items: [
          'Valuta: Euro (€)',
          'Kort aksepteres bredt - Visa/Mastercard best',
          'Minibanker (Cajeros) finnes overalt',
          'Unngå vekslingskontor på flyplassen - dårlig kurs',
          'Kontanter bra å ha for småkjøp og markeder',
        ],
      },
    },
  },
  {
    id: 'health',
    icon: '🏥',
    translations: {
      sv: {
        title: 'Hälsa & Säkerhet',
        items: [
          'EU-sjukförsäkringskort ger rätt till akutvård',
          'Reseförsäkring rekommenderas starkt',
          'Apotek (Farmacia) - grönt kors - öppet till sent',
          'Akutmottagning: Urgencias',
          'Nödnummer: 112',
          'Använd solskydd - UV-index ofta 8-10+',
        ],
      },
      en: {
        title: 'Health & Safety',
        items: [
          'EHIC/GHIC gives access to emergency healthcare',
          'Travel insurance strongly recommended',
          'Pharmacy (Farmacia) - green cross - open late',
          'Emergency room: Urgencias',
          'Emergency number: 112',
          'Use sunscreen - UV index often 8-10+',
        ],
      },
      de: {
        title: 'Gesundheit & Sicherheit',
        items: [
          'EU-Krankenversicherungskarte gibt Zugang zu Notfallversorgung',
          'Reiseversicherung dringend empfohlen',
          'Apotheke (Farmacia) - grünes Kreuz - lange geöffnet',
          'Notaufnahme: Urgencias',
          'Notrufnummer: 112',
          'Sonnenschutz verwenden - UV-Index oft 8-10+',
        ],
      },
      no: {
        title: 'Helse & Sikkerhet',
        items: [
          'EU-helseforsikringskort gir tilgang til akutthjelp',
          'Reiseforsikring anbefales sterkt',
          'Apotek (Farmacia) - grønt kors - åpent sent',
          'Akuttmottak: Urgencias',
          'Nødnummer: 112',
          'Bruk solkrem - UV-indeks ofte 8-10+',
        ],
      },
    },
  },
  {
    id: 'communication',
    icon: '📱',
    translations: {
      sv: {
        title: 'Kommunikation',
        items: [
          'EU-roaming: Använd din svenska data utan extra kostnad',
          'Gratis WiFi vanligt på hotell, caféer och restauranger',
          'Spanska SIM-kort finns i kiosker om du behöver mer data',
          'WhatsApp används brett i Spanien för kommunikation',
        ],
      },
      en: {
        title: 'Communication',
        items: [
          'EU roaming: Use your home data without extra cost (EU citizens)',
          'Free WiFi common at hotels, cafes and restaurants',
          'Spanish SIM cards available in shops if you need more data',
          'WhatsApp widely used in Spain for communication',
        ],
      },
      de: {
        title: 'Kommunikation',
        items: [
          'EU-Roaming: Nutzen Sie Ihre deutschen Daten ohne Zusatzkosten',
          'Kostenloses WLAN üblich in Hotels, Cafés und Restaurants',
          'Spanische SIM-Karten in Geschäften erhältlich wenn mehr Daten benötigt',
          'WhatsApp wird in Spanien häufig zur Kommunikation genutzt',
        ],
      },
      no: {
        title: 'Kommunikasjon',
        items: [
          'EU-roaming: Bruk norske data uten ekstra kostnad',
          'Gratis WiFi vanlig på hoteller, kafeer og restauranter',
          'Spanske SIM-kort tilgjengelig i butikker om du trenger mer data',
          'WhatsApp brukes mye i Spania for kommunikasjon',
        ],
      },
    },
  },
  {
    id: 'climate',
    icon: '☀️',
    translations: {
      sv: {
        title: 'Klimat & Väder',
        items: [
          'Medelhavsklimat: Varma somrar, milda vintrar',
          '300+ soldagar per år',
          'Sommar (jun-sep): 25-35°C, lite regn',
          'Vinter (dec-feb): 10-18°C, enstaka regn',
          'Havstemperatur: 15°C (vinter) till 26°C (sommar)',
          'Bästa tid: April-juni och september-oktober',
        ],
      },
      en: {
        title: 'Climate & Weather',
        items: [
          'Mediterranean climate: Hot summers, mild winters',
          '300+ sunny days per year',
          'Summer (Jun-Sep): 25-35°C, little rain',
          'Winter (Dec-Feb): 10-18°C, occasional rain',
          'Sea temperature: 15°C (winter) to 26°C (summer)',
          'Best time: April-June and September-October',
        ],
      },
      de: {
        title: 'Klima & Wetter',
        items: [
          'Mittelmeerklima: Heiße Sommer, milde Winter',
          '300+ Sonnentage pro Jahr',
          'Sommer (Jun-Sep): 25-35°C, wenig Regen',
          'Winter (Dez-Feb): 10-18°C, gelegentlich Regen',
          'Meerestemperatur: 15°C (Winter) bis 26°C (Sommer)',
          'Beste Zeit: April-Juni und September-Oktober',
        ],
      },
      no: {
        title: 'Klima & Vær',
        items: [
          'Middelhavsklima: Varme somre, milde vintre',
          '300+ soldager per år',
          'Sommer (jun-sep): 25-35°C, lite regn',
          'Vinter (des-feb): 10-18°C, sporadisk regn',
          'Havtemperatur: 15°C (vinter) til 26°C (sommer)',
          'Beste tid: April-juni og september-oktober',
        ],
      },
    },
  },
];

// Page translations
export const practicalPageTranslations = {
  sv: {
    title: 'Praktisk information',
    subtitle: 'Allt du behöver veta för din resa till Costa Blanca',
    transport: 'Transport & Resor',
    transportSubtitle: 'Hur du tar dig till och runt Costa Blanca',
    tipsTitle: 'Tips för resenärer',
    tipsSubtitle: 'Nationspecifika tips och allmänna råd',
    quickInfo: 'Snabbfakta',
    backToHome: 'Tillbaka till startsidan',
  },
  en: {
    title: 'Practical Information',
    subtitle: 'Everything you need to know for your trip to Costa Blanca',
    transport: 'Transport & Travel',
    transportSubtitle: 'How to get to and around Costa Blanca',
    tipsTitle: 'Tips for Travelers',
    tipsSubtitle: 'Nationality-specific tips and general advice',
    quickInfo: 'Quick Facts',
    backToHome: 'Back to home',
  },
  de: {
    title: 'Praktische Informationen',
    subtitle: 'Alles, was Sie für Ihre Reise an die Costa Blanca wissen müssen',
    transport: 'Transport & Reisen',
    transportSubtitle: 'Wie Sie zur und um die Costa Blanca kommen',
    tipsTitle: 'Tipps für Reisende',
    tipsSubtitle: 'Nationalitätsspezifische Tipps und allgemeine Ratschläge',
    quickInfo: 'Schnelle Fakten',
    backToHome: 'Zurück zur Startseite',
  },
  no: {
    title: 'Praktisk informasjon',
    subtitle: 'Alt du trenger å vite for din reise til Costa Blanca',
    transport: 'Transport & Reiser',
    transportSubtitle: 'Hvordan du kommer til og rundt Costa Blanca',
    tipsTitle: 'Tips for reisende',
    tipsSubtitle: 'Nasjonalitetsspesifikke tips og generelle råd',
    quickInfo: 'Rask fakta',
    backToHome: 'Tilbake til startsiden',
  },
};
