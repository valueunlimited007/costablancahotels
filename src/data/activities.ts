import { Locale } from '@/lib/i18n';

export type ActivityCategory =
  | 'beach'       // Beaches
  | 'nature'      // Nature & hiking
  | 'culture'     // Culture & history
  | 'family'      // Family activities
  | 'nightlife'   // Nightlife
  | 'sports'      // Sports & golf
  | 'shopping'    // Shopping
  | 'wellness';   // Spa & wellness

export interface Activity {
  id: string;
  destinationSlug: string;
  name: string;
  category: ActivityCategory;
  isFree: boolean;
  duration?: string; // e.g. "2-3 hours"
  coordinates?: {
    lat: number;
    lng: number;
  };
  website?: string;
  translations: {
    [key in Locale]: {
      description: string;
      highlights?: string[];
      tip?: string;
    };
  };
}

// Category translations and icons
export const activityCategories: Record<Locale, Record<ActivityCategory, { name: string; icon: string }>> = {
  sv: {
    beach: { name: 'Stränder', icon: '🏖️' },
    nature: { name: 'Natur & vandring', icon: '🥾' },
    culture: { name: 'Kultur & historia', icon: '🏛️' },
    family: { name: 'Familjeaktiviteter', icon: '👨‍👩‍👧‍👦' },
    nightlife: { name: 'Nattliv', icon: '🌙' },
    sports: { name: 'Sport & golf', icon: '⛳' },
    shopping: { name: 'Shopping', icon: '🛍️' },
    wellness: { name: 'Spa & wellness', icon: '💆' },
  },
  en: {
    beach: { name: 'Beaches', icon: '🏖️' },
    nature: { name: 'Nature & hiking', icon: '🥾' },
    culture: { name: 'Culture & history', icon: '🏛️' },
    family: { name: 'Family activities', icon: '👨‍👩‍👧‍👦' },
    nightlife: { name: 'Nightlife', icon: '🌙' },
    sports: { name: 'Sports & golf', icon: '⛳' },
    shopping: { name: 'Shopping', icon: '🛍️' },
    wellness: { name: 'Spa & wellness', icon: '💆' },
  },
  de: {
    beach: { name: 'Strände', icon: '🏖️' },
    nature: { name: 'Natur & Wandern', icon: '🥾' },
    culture: { name: 'Kultur & Geschichte', icon: '🏛️' },
    family: { name: 'Familienaktivitäten', icon: '👨‍👩‍👧‍👦' },
    nightlife: { name: 'Nachtleben', icon: '🌙' },
    sports: { name: 'Sport & Golf', icon: '⛳' },
    shopping: { name: 'Shopping', icon: '🛍️' },
    wellness: { name: 'Spa & Wellness', icon: '💆' },
  },
  no: {
    beach: { name: 'Strender', icon: '🏖️' },
    nature: { name: 'Natur & turer', icon: '🥾' },
    culture: { name: 'Kultur & historie', icon: '🏛️' },
    family: { name: 'Familieaktiviteter', icon: '👨‍👩‍👧‍👦' },
    nightlife: { name: 'Natteliv', icon: '🌙' },
    sports: { name: 'Sport & golf', icon: '⛳' },
    shopping: { name: 'Shopping', icon: '🛍️' },
    wellness: { name: 'Spa & velvære', icon: '💆' },
  },
};

export const activities: Activity[] = [
  // BENIDORM
  {
    id: 'playa-levante',
    destinationSlug: 'benidorm',
    name: 'Playa de Levante',
    category: 'beach',
    isFree: true,
    translations: {
      sv: {
        description: 'Benidorms mest kända strand med gyllene sand och kristallklart vatten. Blå flagg-strand med alla faciliteter.',
        highlights: ['2 km lång sandstrand', 'Blå flagg', 'Strandrestauranger', 'Vattensport'],
        tip: 'Kom tidigt på morgonen för bästa platsen under högsäsong.',
      },
      en: {
        description: 'Benidorm\'s most famous beach with golden sand and crystal clear water. Blue Flag beach with all facilities.',
        highlights: ['2 km sandy beach', 'Blue Flag', 'Beach restaurants', 'Water sports'],
        tip: 'Arrive early in the morning for the best spot during high season.',
      },
      de: {
        description: 'Benidorms berühmtester Strand mit goldenem Sand und kristallklarem Wasser. Blauer Flagge Strand mit allen Einrichtungen.',
        highlights: ['2 km Sandstrand', 'Blaue Flagge', 'Strandrestaurants', 'Wassersport'],
        tip: 'Kommen Sie früh morgens für den besten Platz in der Hochsaison.',
      },
      no: {
        description: 'Benidorms mest kjente strand med gyllent sand og krystallklart vann. Blått flagg-strand med alle fasiliteter.',
        highlights: ['2 km sandstrand', 'Blått flagg', 'Strandrestauranter', 'Vannsport'],
        tip: 'Kom tidlig på morgenen for beste plass i høysesongen.',
      },
    },
  },
  {
    id: 'terra-mitica',
    destinationSlug: 'benidorm',
    name: 'Terra Mítica',
    category: 'family',
    isFree: false,
    duration: 'Heldag',
    translations: {
      sv: {
        description: 'Stort temapark med berg-och-dalbanor och shower baserade på antika civilisationer.',
        highlights: ['Berg-och-dalbanor', 'Shower', 'Poolområde', 'Restauranger'],
        tip: 'Köp biljetter online för rabatt. Undvik helger för kortare köer.',
      },
      en: {
        description: 'Large theme park with roller coasters and shows based on ancient civilizations.',
        highlights: ['Roller coasters', 'Shows', 'Pool area', 'Restaurants'],
        tip: 'Buy tickets online for discount. Avoid weekends for shorter queues.',
      },
      de: {
        description: 'Großer Themenpark mit Achterbahnen und Shows basierend auf antiken Zivilisationen.',
        highlights: ['Achterbahnen', 'Shows', 'Poolbereich', 'Restaurants'],
        tip: 'Tickets online kaufen für Rabatt. Wochenenden meiden für kürzere Wartezeiten.',
      },
      no: {
        description: 'Stor fornøyelsespark med berg-og-dalbaner og show basert på antikke sivilisasjoner.',
        highlights: ['Berg-og-dalbaner', 'Show', 'Bassengområde', 'Restauranter'],
        tip: 'Kjøp billetter online for rabatt. Unngå helger for kortere køer.',
      },
    },
  },
  {
    id: 'benidorm-old-town',
    destinationSlug: 'benidorm',
    name: 'Casco Antiguo (Gamla stan)',
    category: 'culture',
    isFree: true,
    duration: '2-3 timmar',
    translations: {
      sv: {
        description: 'Benidorms charmiga gamla stadsdel med vita hus, tapasrestauranger och utsiktsplatsen Balcón del Mediterráneo.',
        highlights: ['Balcón del Mediterráneo', 'Sant Jaume kyrka', 'Tapasrestauranger'],
        tip: 'Besök vid solnedgång för fantastisk utsikt från Balcón del Mediterráneo.',
      },
      en: {
        description: 'Benidorm\'s charming old town with white houses, tapas restaurants and the Balcón del Mediterráneo viewpoint.',
        highlights: ['Balcón del Mediterráneo', 'Sant Jaume Church', 'Tapas restaurants'],
        tip: 'Visit at sunset for amazing views from Balcón del Mediterráneo.',
      },
      de: {
        description: 'Benidorms charmante Altstadt mit weißen Häusern, Tapas-Restaurants und dem Aussichtspunkt Balcón del Mediterráneo.',
        highlights: ['Balcón del Mediterráneo', 'Sant Jaume Kirche', 'Tapas-Restaurants'],
        tip: 'Besuchen Sie bei Sonnenuntergang für fantastische Aussicht vom Balcón del Mediterráneo.',
      },
      no: {
        description: 'Benidorms sjarmerende gamleby med hvite hus, tapasrestauranter og utsiktspunktet Balcón del Mediterráneo.',
        highlights: ['Balcón del Mediterráneo', 'Sant Jaume kirke', 'Tapasrestauranter'],
        tip: 'Besøk ved solnedgang for fantastisk utsikt fra Balcón del Mediterráneo.',
      },
    },
  },

  // ALICANTE
  {
    id: 'castillo-santa-barbara',
    destinationSlug: 'alicante',
    name: 'Castillo de Santa Bárbara',
    category: 'culture',
    isFree: true,
    duration: '2-3 timmar',
    translations: {
      sv: {
        description: 'Medeltida fästning på Monte Benacantil med spektakulär utsikt över staden och havet. En av Spaniens största medeltida fästningar.',
        highlights: ['Panoramautsikt', 'Museum', 'Gratis inträde', 'Hiss från stranden'],
        tip: 'Ta hissen (avgift) från Postiguet-stranden för att undvika vandringen uppför.',
      },
      en: {
        description: 'Medieval fortress on Monte Benacantil with spectacular views over the city and sea. One of Spain\'s largest medieval fortresses.',
        highlights: ['Panoramic views', 'Museum', 'Free entry', 'Lift from beach'],
        tip: 'Take the lift (fee) from Postiguet beach to avoid the climb.',
      },
      de: {
        description: 'Mittelalterliche Festung auf dem Monte Benacantil mit spektakulärer Aussicht über Stadt und Meer. Eine der größten mittelalterlichen Festungen Spaniens.',
        highlights: ['Panoramablick', 'Museum', 'Freier Eintritt', 'Aufzug vom Strand'],
        tip: 'Nehmen Sie den Aufzug (gebührenpflichtig) vom Postiguet-Strand, um den Aufstieg zu vermeiden.',
      },
      no: {
        description: 'Middelalderborg på Monte Benacantil med spektakulær utsikt over byen og havet. En av Spanias største middelalderborger.',
        highlights: ['Panoramautsikt', 'Museum', 'Gratis inngang', 'Heis fra stranden'],
        tip: 'Ta heisen (avgift) fra Postiguet-stranden for å unngå klatringen.',
      },
    },
  },
  {
    id: 'explanada-espana',
    destinationSlug: 'alicante',
    name: 'Explanada de España',
    category: 'culture',
    isFree: true,
    duration: '1 timme',
    translations: {
      sv: {
        description: 'Alicantes ikoniska strandpromenad med karakteristiskt mönstrat marmorgolv. Perfekt för en kvällspromenad.',
        highlights: ['6,6 miljoner marmorplattor', 'Palmlunder', 'Terrasscaféer'],
        tip: 'Gå hela vägen och njut av kvällsstämningen med gatumusiker och konstnärer.',
      },
      en: {
        description: 'Alicante\'s iconic seafront promenade with characteristic patterned marble floor. Perfect for an evening stroll.',
        highlights: ['6.6 million marble tiles', 'Palm trees', 'Terrace cafes'],
        tip: 'Walk the entire length and enjoy the evening atmosphere with street musicians and artists.',
      },
      de: {
        description: 'Alicantes ikonische Strandpromenade mit charakteristischem Marmorboden-Muster. Perfekt für einen Abendspaziergang.',
        highlights: ['6,6 Millionen Marmorplatten', 'Palmen', 'Terrassencafés'],
        tip: 'Gehen Sie die gesamte Länge und genießen Sie die Abendstimmung mit Straßenmusikern und Künstlern.',
      },
      no: {
        description: 'Alicantes ikoniske strandpromenade med karakteristisk mønstret marmorgulv. Perfekt for en kveldstur.',
        highlights: ['6,6 millioner marmorfliser', 'Palmealléer', 'Uteserveringer'],
        tip: 'Gå hele veien og nyt kveldstemningen med gatemusikanter og kunstnere.',
      },
    },
  },

  // TORREVIEJA
  {
    id: 'laguna-rosa',
    destinationSlug: 'torrevieja',
    name: 'Laguna Rosa (Rosa saltsjön)',
    category: 'nature',
    isFree: true,
    duration: '1-2 timmar',
    translations: {
      sv: {
        description: 'Unik rosa saltsjö som får sin färg från alger. Ett av Costa Blancas mest fotograferade motiv.',
        highlights: ['Unik rosa färg', 'Flamingos', 'Fotomöjligheter', 'Saltproduktion'],
        tip: 'Bäst vid solnedgång när den rosa färgen intensifieras. Bada inte - saltet skadar huden.',
      },
      en: {
        description: 'Unique pink salt lake that gets its color from algae. One of Costa Blanca\'s most photographed sights.',
        highlights: ['Unique pink color', 'Flamingos', 'Photo opportunities', 'Salt production'],
        tip: 'Best at sunset when the pink color intensifies. Don\'t swim - the salt damages skin.',
      },
      de: {
        description: 'Einzigartiger rosa Salzsee, der seine Farbe von Algen erhält. Eines der meistfotografierten Motive der Costa Blanca.',
        highlights: ['Einzigartige rosa Farbe', 'Flamingos', 'Fotomöglichkeiten', 'Salzproduktion'],
        tip: 'Am besten bei Sonnenuntergang, wenn die rosa Farbe intensiver wird. Nicht schwimmen - das Salz schädigt die Haut.',
      },
      no: {
        description: 'Unik rosa saltsjø som får fargen sin fra alger. Et av Costa Blancas mest fotograferte motiver.',
        highlights: ['Unik rosa farge', 'Flamingoer', 'Fotomuligheter', 'Saltproduksjon'],
        tip: 'Best ved solnedgang når den rosa fargen intensiveres. Ikke bad - saltet skader huden.',
      },
    },
  },

  // CALPE
  {
    id: 'penon-ifach',
    destinationSlug: 'calpe',
    name: 'Peñón de Ifach',
    category: 'nature',
    isFree: true,
    duration: '3-4 timmar',
    translations: {
      sv: {
        description: 'Ikonisk klippa som reser sig 332 meter ur havet. Naturreservat med vandringsled till toppen.',
        highlights: ['332 meter hög', 'Naturreservat', 'Vandring till toppen', 'Spektakulär utsikt'],
        tip: 'Vandringen kräver bra kondition. Ta med vatten och bra skor. Boka tid online (begränsat antal besökare).',
      },
      en: {
        description: 'Iconic rock rising 332 meters from the sea. Nature reserve with hiking trail to the summit.',
        highlights: ['332 meters high', 'Nature reserve', 'Summit hike', 'Spectacular views'],
        tip: 'The hike requires good fitness. Bring water and good shoes. Book time slot online (limited visitors).',
      },
      de: {
        description: 'Ikonischer Felsen, der 332 Meter aus dem Meer ragt. Naturreservat mit Wanderweg zum Gipfel.',
        highlights: ['332 Meter hoch', 'Naturreservat', 'Gipfelwanderung', 'Spektakuläre Aussicht'],
        tip: 'Die Wanderung erfordert gute Fitness. Wasser und gute Schuhe mitnehmen. Zeitfenster online buchen (begrenzte Besucherzahl).',
      },
      no: {
        description: 'Ikonisk klippe som reiser seg 332 meter fra havet. Naturreservat med tursti til toppen.',
        highlights: ['332 meter høy', 'Naturreservat', 'Topptur', 'Spektakulær utsikt'],
        tip: 'Turen krever god kondisjon. Ta med vann og gode sko. Bestill tid online (begrenset antall besøkende).',
      },
    },
  },

  // LA ZENIA
  {
    id: 'la-zenia-boulevard',
    destinationSlug: 'la-zenia',
    name: 'La Zenia Boulevard',
    category: 'shopping',
    isFree: true,
    translations: {
      sv: {
        description: 'Costa Blancas största köpcentrum med över 150 butiker, restauranger och bio.',
        highlights: ['150+ butiker', 'Restauranger', 'Bio', 'Gratis parkering'],
        tip: 'Onsdagar är ofta mindre folkrika. Kolla efter säsongsreor.',
      },
      en: {
        description: 'Costa Blanca\'s largest shopping centre with over 150 shops, restaurants and cinema.',
        highlights: ['150+ shops', 'Restaurants', 'Cinema', 'Free parking'],
        tip: 'Wednesdays are often less crowded. Check for seasonal sales.',
      },
      de: {
        description: 'Costa Blancas größtes Einkaufszentrum mit über 150 Geschäften, Restaurants und Kino.',
        highlights: ['150+ Geschäfte', 'Restaurants', 'Kino', 'Kostenlose Parkplätze'],
        tip: 'Mittwochs ist oft weniger los. Achten Sie auf Saisonschlussverkäufe.',
      },
      no: {
        description: 'Costa Blancas største kjøpesenter med over 150 butikker, restauranter og kino.',
        highlights: ['150+ butikker', 'Restauranter', 'Kino', 'Gratis parkering'],
        tip: 'Onsdager er ofte mindre folksomt. Se etter sesongsalg.',
      },
    },
  },
];

// Helper functions
export function getActivitiesByDestination(destinationSlug: string): Activity[] {
  return activities.filter((a) => a.destinationSlug === destinationSlug);
}

export function getActivitiesByCategory(category: ActivityCategory): Activity[] {
  return activities.filter((a) => a.category === category);
}

export function getActivity(id: string): Activity | undefined {
  return activities.find((a) => a.id === id);
}

export function getDestinationsWithActivities(): string[] {
  return [...new Set(activities.map((a) => a.destinationSlug))];
}
