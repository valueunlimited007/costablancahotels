import { Locale } from '@/lib/i18n';

export interface Rental {
  // Unique identifier (slug-format)
  id: string;

  // Which destination this rental belongs to
  destinationSlug: string;

  // Basic info
  name: string;
  type: RentalType;

  // Rating from VRBO (0-5 scale)
  rating?: number;
  reviewCount?: number;

  // Capacity
  bedrooms: number;
  bathrooms: number;
  sleeps: number;

  // Price range (per night in EUR)
  priceRange: {
    min: number;
    max: number;
  };

  // Categorization
  categories: RentalCategory[];

  // Location
  location: {
    area?: string;  // e.g., "Levante Beach", "Old Town"
    distanceToBeach?: string;
    distanceToCenter?: string;
  };

  // Amenities
  amenities: RentalAmenity[];

  // Images
  images: {
    main: string;
    gallery?: string[];
  };

  // Source URL for reference
  sourceUrl: string;

  // VRBO property ID (for direct linking)
  vrboPropertyId?: string;

  // Is this a featured/top pick?
  featured?: boolean;

  // Translations
  translations: {
    [key in Locale]: {
      description: string;
      shortDescription: string;
      highlights?: string[];
      tip?: string;
    };
  };
}

export type RentalType =
  | 'apartment'
  | 'villa'
  | 'penthouse'
  | 'townhouse'
  | 'studio'
  | 'house';

export type RentalCategory =
  | 'luxury'
  | 'family'
  | 'romantic'
  | 'beachfront'
  | 'pool'
  | 'city-center'
  | 'budget'
  | 'pet-friendly'
  | 'sea-view';

export type RentalAmenity =
  | 'private-pool'
  | 'shared-pool'
  | 'wifi'
  | 'parking'
  | 'air-conditioning'
  | 'washing-machine'
  | 'dishwasher'
  | 'kitchen'
  | 'balcony'
  | 'terrace'
  | 'sea-view'
  | 'bbq'
  | 'pet-friendly'
  | 'beach-access'
  | 'gym'
  | 'elevator';

// Type labels for UI
export const rentalTypeLabels: Record<RentalType, Record<Locale, string>> = {
  apartment: { sv: 'Lägenhet', en: 'Apartment', de: 'Ferienwohnung', no: 'Leilighet' },
  villa: { sv: 'Villa', en: 'Villa', de: 'Villa', no: 'Villa' },
  penthouse: { sv: 'Takvåning', en: 'Penthouse', de: 'Penthouse', no: 'Toppleilighet' },
  townhouse: { sv: 'Radhus', en: 'Townhouse', de: 'Reihenhaus', no: 'Rekkehus' },
  studio: { sv: 'Studio', en: 'Studio', de: 'Studio', no: 'Studio' },
  house: { sv: 'Hus', en: 'House', de: 'Haus', no: 'Hus' },
};

// Category labels for UI
export const rentalCategoryLabels: Record<RentalCategory, Record<Locale, string>> = {
  luxury: { sv: 'Lyx', en: 'Luxury', de: 'Luxus', no: 'Luksus' },
  family: { sv: 'Familjevänligt', en: 'Family-friendly', de: 'Familienfreundlich', no: 'Familievennlig' },
  romantic: { sv: 'Romantisk', en: 'Romantic', de: 'Romantisch', no: 'Romantisk' },
  beachfront: { sv: 'Strandläge', en: 'Beachfront', de: 'Strandlage', no: 'Strandfront' },
  pool: { sv: 'Med pool', en: 'With pool', de: 'Mit Pool', no: 'Med basseng' },
  'city-center': { sv: 'Centralt', en: 'City center', de: 'Stadtzentrum', no: 'Sentrum' },
  budget: { sv: 'Budget', en: 'Budget', de: 'Günstig', no: 'Budsjett' },
  'pet-friendly': { sv: 'Husdjur tillåtna', en: 'Pet-friendly', de: 'Haustierfreundlich', no: 'Dyrevennlig' },
  'sea-view': { sv: 'Havsutsikt', en: 'Sea view', de: 'Meerblick', no: 'Havutsikt' },
};

// Amenity labels for UI
export const rentalAmenityLabels: Record<RentalAmenity, Record<Locale, string>> = {
  'private-pool': { sv: 'Privat pool', en: 'Private pool', de: 'Privater Pool', no: 'Privat basseng' },
  'shared-pool': { sv: 'Delad pool', en: 'Shared pool', de: 'Gemeinschaftspool', no: 'Felles basseng' },
  wifi: { sv: 'WiFi', en: 'WiFi', de: 'WLAN', no: 'WiFi' },
  parking: { sv: 'Parkering', en: 'Parking', de: 'Parkplatz', no: 'Parkering' },
  'air-conditioning': { sv: 'AC', en: 'A/C', de: 'Klimaanlage', no: 'AC' },
  'washing-machine': { sv: 'Tvättmaskin', en: 'Washing machine', de: 'Waschmaschine', no: 'Vaskemaskin' },
  dishwasher: { sv: 'Diskmaskin', en: 'Dishwasher', de: 'Geschirrspüler', no: 'Oppvaskmaskin' },
  kitchen: { sv: 'Fullt kök', en: 'Full kitchen', de: 'Vollküche', no: 'Fullt kjøkken' },
  balcony: { sv: 'Balkong', en: 'Balcony', de: 'Balkon', no: 'Balkong' },
  terrace: { sv: 'Terrass', en: 'Terrace', de: 'Terrasse', no: 'Terrasse' },
  'sea-view': { sv: 'Havsutsikt', en: 'Sea view', de: 'Meerblick', no: 'Havutsikt' },
  bbq: { sv: 'Grill', en: 'BBQ', de: 'Grill', no: 'Grill' },
  'pet-friendly': { sv: 'Husdjur OK', en: 'Pet-friendly', de: 'Haustiere OK', no: 'Dyr tillatt' },
  'beach-access': { sv: 'Strandtillgång', en: 'Beach access', de: 'Strandzugang', no: 'Strandtilgang' },
  gym: { sv: 'Gym', en: 'Gym', de: 'Fitnessstudio', no: 'Treningssenter' },
  elevator: { sv: 'Hiss', en: 'Elevator', de: 'Aufzug', no: 'Heis' },
};

// ============================================
// BENIDORM RENTALS - Curated Selection
// ============================================
//
// IMAGE GUIDE FOR USER:
// Download images from sourceUrl and save to:
// /public/images/rentals/benidorm/[rental-id].jpg
//
// Example: /public/images/rentals/benidorm/luxury-villa-levante.jpg
// ============================================

export const rentals: Rental[] = [
  // BENIDORM - Beachfront Apartments
  {
    id: 'levante-beachfront-5th-floor',
    destinationSlug: 'benidorm',
    name: '5th Floor Beachfront Apartment - Levante',
    type: 'apartment',
    rating: 4.6,
    reviewCount: 45,
    bedrooms: 3,
    bathrooms: 2,
    sleeps: 6,
    priceRange: { min: 120, max: 200 },
    categories: ['beachfront', 'sea-view', 'family'],
    location: {
      area: 'Levante Beach',
      distanceToBeach: '0m (strandfront)',
      distanceToCenter: '500m',
    },
    amenities: ['wifi', 'air-conditioning', 'kitchen', 'balcony', 'sea-view', 'washing-machine', 'elevator'],
    images: {
      main: '/images/rentals/benidorm/levante-beachfront-5th-floor.avif',
    },
    sourceUrl: 'https://www.vrbo.com/en-gb/p8345939',
    vrboPropertyId: '8345939',
    featured: true,
    translations: {
      sv: {
        description: 'Spektakulär lägenhet på 5:e våningen med fantastisk utsikt över Levante-stranden och Benidorm Island. Tre sovrum och två badrum gör den perfekt för familjer eller vänner. Balkong med havsutsikt där du kan njuta av soluppgångar.',
        shortDescription: 'Strandfront-lägenhet med panoramautsikt över Levante',
        highlights: [
          'Direkt strandläge på Levante',
          'Fantastisk utsikt mot Benidorm Island',
          'Rymlig balkong med havsutsikt',
          'Nära restauranger och nattliv',
        ],
        tip: 'Perfekt för att se soluppgången över havet från balkongen!',
      },
      en: {
        description: 'Spectacular 5th floor apartment with stunning views over Levante Beach and Benidorm Island. Three bedrooms and two bathrooms make it perfect for families or friends. Balcony with sea views where you can enjoy sunrises.',
        shortDescription: 'Beachfront apartment with panoramic views over Levante',
        highlights: [
          'Direct beachfront location on Levante',
          'Fantastic views towards Benidorm Island',
          'Spacious balcony with sea views',
          'Close to restaurants and nightlife',
        ],
        tip: 'Perfect for watching the sunrise over the sea from the balcony!',
      },
      de: {
        description: 'Spektakuläre Wohnung im 5. Stock mit atemberaubendem Blick über den Levante-Strand und die Insel Benidorm. Drei Schlafzimmer und zwei Badezimmer machen sie perfekt für Familien oder Freunde.',
        shortDescription: 'Strandwohnung mit Panoramablick über Levante',
        highlights: [
          'Direkte Strandlage am Levante',
          'Fantastischer Blick auf die Insel Benidorm',
          'Geräumiger Balkon mit Meerblick',
          'Nahe Restaurants und Nachtleben',
        ],
        tip: 'Perfekt um den Sonnenaufgang über dem Meer vom Balkon zu beobachten!',
      },
      no: {
        description: 'Spektakulær leilighet i 5. etasje med fantastisk utsikt over Levante-stranden og Benidorm Island. Tre soverom og to bad gjør den perfekt for familier eller venner.',
        shortDescription: 'Strandfront-leilighet med panoramautsikt over Levante',
        highlights: [
          'Direkte strandfront på Levante',
          'Fantastisk utsikt mot Benidorm Island',
          'Romslig balkong med havutsikt',
          'Nær restauranter og natteliv',
        ],
        tip: 'Perfekt for å se soloppgangen over havet fra balkongen!',
      },
    },
  },

  // BENIDORM - Family Apartment near Levante
  {
    id: 'levante-family-3bed-40m',
    destinationSlug: 'benidorm',
    name: 'Beautiful 3-Bedroom Apartment - 40m from Levante',
    type: 'apartment',
    rating: 4.8,
    reviewCount: 62,
    bedrooms: 3,
    bathrooms: 2,
    sleeps: 6,
    priceRange: { min: 100, max: 180 },
    categories: ['beachfront', 'family'],
    location: {
      area: 'Levante Beach',
      distanceToBeach: '40m',
      distanceToCenter: '400m',
    },
    amenities: ['wifi', 'air-conditioning', 'kitchen', 'balcony', 'washing-machine', 'dishwasher', 'parking', 'elevator'],
    images: {
      main: '/images/rentals/benidorm/levante-family-3bed-40m.jpg',
    },
    sourceUrl: 'https://www.vrbo.com/6249795ha',
    vrboPropertyId: '6249795',
    featured: true,
    translations: {
      sv: {
        description: 'Vacker och välutrustad 3-rumslägenhet bara 40 meter från Levante-stranden. Perfekt för familjer med fullt utrustat kök, tvättmaskin och parkering. Gäster beskriver den som "allt du behöver hemifrån".',
        shortDescription: 'Familjevänlig lägenhet 40m från Levante med parkering',
        highlights: [
          'Endast 40m till stranden',
          'Parkering för hyrbil ingår',
          'Fullt utrustat kök',
          'Bästa läget i Benidorm enligt recensioner',
        ],
        tip: 'Boka i förväg - denna lägenhet är mycket populär!',
      },
      en: {
        description: 'Beautiful and well-equipped 3-bedroom apartment just 40 meters from Levante Beach. Perfect for families with fully equipped kitchen, washing machine and parking. Guests describe it as "everything you need from home".',
        shortDescription: 'Family-friendly apartment 40m from Levante with parking',
        highlights: [
          'Only 40m to the beach',
          'Parking for rental car included',
          'Fully equipped kitchen',
          'Best location in Benidorm according to reviews',
        ],
        tip: 'Book in advance - this apartment is very popular!',
      },
      de: {
        description: 'Schöne und gut ausgestattete 3-Zimmer-Wohnung nur 40 Meter vom Levante-Strand entfernt. Perfekt für Familien mit voll ausgestatteter Küche, Waschmaschine und Parkplatz.',
        shortDescription: 'Familienfreundliche Wohnung 40m vom Levante mit Parkplatz',
        highlights: [
          'Nur 40m zum Strand',
          'Parkplatz für Mietwagen inklusive',
          'Voll ausgestattete Küche',
          'Beste Lage in Benidorm laut Bewertungen',
        ],
        tip: 'Buchen Sie im Voraus - diese Wohnung ist sehr beliebt!',
      },
      no: {
        description: 'Vakker og velutstyrt 3-romsleilighet bare 40 meter fra Levante-stranden. Perfekt for familier med fullt utstyrt kjøkken, vaskemaskin og parkering.',
        shortDescription: 'Familievennlig leilighet 40m fra Levante med parkering',
        highlights: [
          'Kun 40m til stranden',
          'Parkering for leiebil inkludert',
          'Fullt utstyrt kjøkken',
          'Beste beliggenhet i Benidorm ifølge anmeldelser',
        ],
        tip: 'Bestill i forveien - denne leiligheten er veldig populær!',
      },
    },
  },

  // BENIDORM - Luxury 1-Bedroom near Levante
  {
    id: 'levante-luxury-1bed',
    destinationSlug: 'benidorm',
    name: 'Luxury 1-Bedroom Apartment near Levante',
    type: 'apartment',
    rating: 4.9,
    reviewCount: 51,
    bedrooms: 1,
    bathrooms: 1,
    sleeps: 6,
    priceRange: { min: 80, max: 140 },
    categories: ['luxury', 'romantic', 'city-center'],
    location: {
      area: 'Levante Beach',
      distanceToBeach: '300m (4 min promenad)',
      distanceToCenter: '200m',
    },
    amenities: ['wifi', 'air-conditioning', 'kitchen', 'balcony', 'washing-machine', 'elevator'],
    images: {
      main: '/images/rentals/benidorm/levante-luxury-1bed.avif',
    },
    sourceUrl: 'https://www.vrbo.com/en-gb/p11178051',
    vrboPropertyId: '11178051',
    featured: false,
    translations: {
      sv: {
        description: 'Modern och lyxig 1-rumslägenhet i hjärtat av Benidorm, bara 4 minuters promenad från Levante-stranden. Med 40 av 51 recensioner som ger betyget "Utmärkt" är detta ett säkert val för par.',
        shortDescription: 'Lyxig lägenhet för par nära Levante',
        highlights: [
          '4 min promenad till Levante-stranden',
          'Exceptionellt betyg (40/51 utmärkt)',
          'Modern inredning',
          'Perfekt för par',
        ],
        tip: 'Idealisk för romantisk weekend eller kortare vistelse.',
      },
      en: {
        description: 'Modern and luxurious 1-bedroom apartment in the heart of Benidorm, just 4 minutes walk from Levante Beach. With 40 out of 51 reviews rating it "Excellent", this is a safe choice for couples.',
        shortDescription: 'Luxury apartment for couples near Levante',
        highlights: [
          '4 min walk to Levante Beach',
          'Exceptional rating (40/51 excellent)',
          'Modern interior design',
          'Perfect for couples',
        ],
        tip: 'Ideal for a romantic weekend or shorter stay.',
      },
      de: {
        description: 'Moderne und luxuriöse 1-Zimmer-Wohnung im Herzen von Benidorm, nur 4 Gehminuten vom Levante-Strand entfernt. Mit 40 von 51 Bewertungen als "Ausgezeichnet" ist dies eine sichere Wahl für Paare.',
        shortDescription: 'Luxuswohnung für Paare nahe Levante',
        highlights: [
          '4 min Fußweg zum Levante-Strand',
          'Außergewöhnliche Bewertung (40/51 ausgezeichnet)',
          'Modernes Innendesign',
          'Perfekt für Paare',
        ],
        tip: 'Ideal für ein romantisches Wochenende oder kürzeren Aufenthalt.',
      },
      no: {
        description: 'Moderne og luksuriøs 1-romsleilighet i hjertet av Benidorm, bare 4 minutters gange fra Levante-stranden. Med 40 av 51 anmeldelser som gir "Utmerket", er dette et trygt valg for par.',
        shortDescription: 'Luksusleilighet for par nær Levante',
        highlights: [
          '4 min gange til Levante-stranden',
          'Eksepsjonell vurdering (40/51 utmerket)',
          'Moderne interiørdesign',
          'Perfekt for par',
        ],
        tip: 'Ideell for romantisk helg eller kortere opphold.',
      },
    },
  },

  // BENIDORM - Poniente Luxury Apartment
  {
    id: 'poniente-luxury-quiet',
    destinationSlug: 'benidorm',
    name: 'Luxury Apartment - Quiet Playa Poniente',
    type: 'apartment',
    rating: 4.5,
    reviewCount: 38,
    bedrooms: 2,
    bathrooms: 1,
    sleeps: 4,
    priceRange: { min: 90, max: 160 },
    categories: ['luxury', 'beachfront', 'romantic'],
    location: {
      area: 'Poniente Beach',
      distanceToBeach: '100m',
      distanceToCenter: '1.5 km',
    },
    amenities: ['wifi', 'air-conditioning', 'kitchen', 'balcony', 'sea-view', 'washing-machine', 'shared-pool'],
    images: {
      main: '/images/rentals/benidorm/poniente-luxury-quiet.avif',
    },
    sourceUrl: 'https://www.vrbo.com/2599191ha',
    vrboPropertyId: '2599191',
    featured: false,
    translations: {
      sv: {
        description: 'Lyxig lägenhet i lugna delen av Poniente, bara 100m från stranden. Super-AC för varma sommardagar och nära Sierra Helada naturreservat. Perfekt för par som vill undvika turistmassorna.',
        shortDescription: 'Lugn lyxlägenhet nära Poniente-stranden',
        highlights: [
          'Lugnt läge vid Poniente',
          '100m till stranden',
          'Super-AC för varma dagar',
          'Nära Sierra Helada naturpark',
        ],
        tip: 'Poniente är lugnare än Levante - perfekt för avkoppling.',
      },
      en: {
        description: 'Luxury apartment in the quiet part of Poniente, just 100m from the beach. Super A/C for hot summer days and close to Sierra Helada nature reserve. Perfect for couples wanting to avoid tourist crowds.',
        shortDescription: 'Quiet luxury apartment near Poniente Beach',
        highlights: [
          'Quiet location at Poniente',
          '100m to the beach',
          'Super A/C for hot days',
          'Near Sierra Helada nature park',
        ],
        tip: 'Poniente is quieter than Levante - perfect for relaxation.',
      },
      de: {
        description: 'Luxuswohnung im ruhigen Teil von Poniente, nur 100m vom Strand entfernt. Super-Klimaanlage für heiße Sommertage und nahe dem Naturreservat Sierra Helada.',
        shortDescription: 'Ruhige Luxuswohnung nahe Poniente-Strand',
        highlights: [
          'Ruhige Lage am Poniente',
          '100m zum Strand',
          'Super-Klimaanlage für heiße Tage',
          'Nahe Naturpark Sierra Helada',
        ],
        tip: 'Poniente ist ruhiger als Levante - perfekt zum Entspannen.',
      },
      no: {
        description: 'Luksusleilighet i den rolige delen av Poniente, bare 100m fra stranden. Super-AC for varme sommerdager og nær naturreservatet Sierra Helada.',
        shortDescription: 'Rolig luksusleilighet nær Poniente-stranden',
        highlights: [
          'Rolig beliggenhet ved Poniente',
          '100m til stranden',
          'Super-AC for varme dager',
          'Nær naturpark Sierra Helada',
        ],
        tip: 'Poniente er roligere enn Levante - perfekt for avslapping.',
      },
    },
  },

  // BENIDORM - Poniente Family with Entertainment
  {
    id: 'poniente-3bed-entertainment',
    destinationSlug: 'benidorm',
    name: 'Poniente 3-Bed with Gym, Games & Cinema Room',
    type: 'apartment',
    rating: 4.7,
    reviewCount: 56,
    bedrooms: 3,
    bathrooms: 2,
    sleeps: 8,
    priceRange: { min: 150, max: 280 },
    categories: ['family', 'luxury', 'sea-view'],
    location: {
      area: 'Poniente Beach',
      distanceToBeach: '200m (10 min promenad)',
      distanceToCenter: '2 km',
    },
    amenities: ['wifi', 'air-conditioning', 'kitchen', 'terrace', 'sea-view', 'gym', 'washing-machine', 'parking'],
    images: {
      main: '/images/rentals/benidorm/poniente-3bed-entertainment.avif',
    },
    sourceUrl: 'https://www.vrbo.com/en-gb/p6947893',
    vrboPropertyId: '6947893',
    featured: true,
    translations: {
      sv: {
        description: 'Fantastisk familjelägenhet med 3 sovrum och havsutsikt. Byggnaden har gym, spelrum och biosal! Perfekt för familjer med barn eller tonåringar som vill ha underhållning utöver stranden.',
        shortDescription: 'Familjelägenhet med gym, spelrum och biosalong',
        highlights: [
          'Gym, spelrum och biosal i byggnaden',
          'Havsutsikt från lägenheten',
          'Solig terrass',
          'Plats för 8 personer',
        ],
        tip: 'Bra val för familjer med äldre barn som vill ha mer att göra.',
      },
      en: {
        description: 'Fantastic family apartment with 3 bedrooms and sea views. The building has gym, games room and cinema room! Perfect for families with children or teenagers wanting entertainment beyond the beach.',
        shortDescription: 'Family apartment with gym, games room and cinema',
        highlights: [
          'Gym, games room and cinema in the building',
          'Sea views from the apartment',
          'Sunny terrace',
          'Sleeps 8 people',
        ],
        tip: 'Great choice for families with older kids who want more to do.',
      },
      de: {
        description: 'Fantastische Familienwohnung mit 3 Schlafzimmern und Meerblick. Das Gebäude hat Fitnessstudio, Spielzimmer und Kinosaal! Perfekt für Familien mit Kindern oder Teenagern.',
        shortDescription: 'Familienwohnung mit Fitnessstudio, Spielzimmer und Kino',
        highlights: [
          'Fitnessstudio, Spielzimmer und Kino im Gebäude',
          'Meerblick von der Wohnung',
          'Sonnige Terrasse',
          'Platz für 8 Personen',
        ],
        tip: 'Gute Wahl für Familien mit älteren Kindern, die mehr Unterhaltung wünschen.',
      },
      no: {
        description: 'Fantastisk familieleilighet med 3 soverom og havutsikt. Bygget har treningssenter, spillrom og kinosal! Perfekt for familier med barn eller tenåringer.',
        shortDescription: 'Familieleilighet med gym, spillrom og kino',
        highlights: [
          'Gym, spillrom og kino i bygget',
          'Havutsikt fra leiligheten',
          'Solrik terrasse',
          'Plass til 8 personer',
        ],
        tip: 'Godt valg for familier med eldre barn som ønsker mer å gjøre.',
      },
    },
  },

  // BENIDORM - Villa with Private Pool (Family)
  {
    id: 'villa-chalet-private-pool',
    destinationSlug: 'benidorm',
    name: 'Villa ChaletBenidorm - Private Pool',
    type: 'villa',
    rating: 5.0,
    reviewCount: 8,
    bedrooms: 7,
    bathrooms: 3,
    sleeps: 16,
    priceRange: { min: 350, max: 600 },
    categories: ['luxury', 'family', 'pool'],
    location: {
      area: 'Poniente',
      distanceToBeach: '2 km',
      distanceToCenter: '3 km',
    },
    amenities: ['private-pool', 'wifi', 'air-conditioning', 'kitchen', 'terrace', 'bbq', 'parking', 'washing-machine'],
    images: {
      main: '/images/rentals/benidorm/villa-chalet-private-pool.jpg',
    },
    sourceUrl: 'https://www.vrbo.com/en-gb/p1843954',
    vrboPropertyId: '1843954',
    featured: true,
    translations: {
      sv: {
        description: 'Fantastisk villa med 7 sovrum och privat pool nära Poniente-stranden. Med 250 kvm boyta och stor trädgård är det perfekt för stora familjer eller vängrupper. Betyg 10/10 från alla gäster!',
        shortDescription: 'Stor villa med privat pool för upp till 16 gäster',
        highlights: [
          'Privat pool och stor trädgård',
          '7 sovrum - perfekt för storgrupper',
          '10/10 betyg från alla gäster',
          'Grillplats och parkering',
        ],
        tip: 'Perfekt för flera familjer som reser tillsammans.',
      },
      en: {
        description: 'Fantastic villa with 7 bedrooms and private pool near Poniente Beach. With 250 sqm living space and large garden, it\'s perfect for large families or friend groups. Rated 10/10 by all guests!',
        shortDescription: 'Large villa with private pool for up to 16 guests',
        highlights: [
          'Private pool and large garden',
          '7 bedrooms - perfect for large groups',
          '10/10 rating from all guests',
          'BBQ area and parking',
        ],
        tip: 'Perfect for multiple families traveling together.',
      },
      de: {
        description: 'Fantastische Villa mit 7 Schlafzimmern und privatem Pool in der Nähe des Poniente-Strandes. Mit 250 qm Wohnfläche und großem Garten perfekt für große Familien oder Freundesgruppen.',
        shortDescription: 'Große Villa mit privatem Pool für bis zu 16 Gäste',
        highlights: [
          'Privater Pool und großer Garten',
          '7 Schlafzimmer - perfekt für große Gruppen',
          '10/10 Bewertung von allen Gästen',
          'Grillbereich und Parkplatz',
        ],
        tip: 'Perfekt für mehrere Familien, die zusammen reisen.',
      },
      no: {
        description: 'Fantastisk villa med 7 soverom og privat basseng nær Poniente-stranden. Med 250 kvm boflate og stor hage, perfekt for store familier eller vennegrupper.',
        shortDescription: 'Stor villa med privat basseng for opptil 16 gjester',
        highlights: [
          'Privat basseng og stor hage',
          '7 soverom - perfekt for store grupper',
          '10/10 vurdering fra alle gjester',
          'Grillområde og parkering',
        ],
        tip: 'Perfekt for flere familier som reiser sammen.',
      },
    },
  },

  // BENIDORM - Large Villa with Bar & Jacuzzi
  {
    id: 'villa-luxury-25-jacuzzi',
    destinationSlug: 'benidorm',
    name: 'Spacious Luxury Villa - Sleeps 25 with Jacuzzi & Bar',
    type: 'villa',
    rating: 4.9,
    reviewCount: 69,
    bedrooms: 8,
    bathrooms: 5,
    sleeps: 25,
    priceRange: { min: 500, max: 900 },
    categories: ['luxury', 'pool', 'family'],
    location: {
      area: 'Rural Benidorm',
      distanceToBeach: '5 km',
      distanceToCenter: '6 km',
    },
    amenities: ['private-pool', 'wifi', 'air-conditioning', 'kitchen', 'terrace', 'bbq', 'parking'],
    images: {
      main: '/images/rentals/benidorm/villa-luxury-25-jacuzzi.avif',
    },
    sourceUrl: 'https://www.vrbo.com/8090176ha',
    vrboPropertyId: '8090176',
    featured: true,
    translations: {
      sv: {
        description: 'Spektakulär lyxvilla för upp till 25 gäster med privat pool, jacuzzi, bastu och till och med en utebar med sangria och öl på fat! Nära Sierra Helada naturpark och Algar-vattenfallen.',
        shortDescription: 'Lyxvilla för 25 gäster med pool, jacuzzi och bar',
        highlights: [
          'Utebar med sangria och öl på fat',
          'Jacuzzi och bastu vid poolen',
          '63/69 recensioner ger utmärkt',
          'Nära naturpark och vattenfall',
        ],
        tip: 'Perfekt för bröllop, födelsedagsfester eller större gruppresor.',
      },
      en: {
        description: 'Spectacular luxury villa for up to 25 guests with private pool, jacuzzi, sauna and even an outdoor bar with sangria and beer on tap! Near Sierra Helada nature park and Algar Waterfalls.',
        shortDescription: 'Luxury villa for 25 guests with pool, jacuzzi and bar',
        highlights: [
          'Outdoor bar with sangria and beer on tap',
          'Jacuzzi and sauna by the pool',
          '63/69 reviews rate it excellent',
          'Near nature park and waterfalls',
        ],
        tip: 'Perfect for weddings, birthday parties or larger group trips.',
      },
      de: {
        description: 'Spektakuläre Luxusvilla für bis zu 25 Gäste mit privatem Pool, Jacuzzi, Sauna und sogar einer Außenbar mit Sangria und Bier vom Fass!',
        shortDescription: 'Luxusvilla für 25 Gäste mit Pool, Jacuzzi und Bar',
        highlights: [
          'Außenbar mit Sangria und Bier vom Fass',
          'Jacuzzi und Sauna am Pool',
          '63/69 Bewertungen geben ausgezeichnet',
          'Nahe Naturpark und Wasserfälle',
        ],
        tip: 'Perfekt für Hochzeiten, Geburtstagsfeiern oder größere Gruppenreisen.',
      },
      no: {
        description: 'Spektakulær luksusvilla for opptil 25 gjester med privat basseng, jacuzzi, badstue og til og med en utebar med sangria og øl på fat!',
        shortDescription: 'Luksusvilla for 25 gjester med basseng, jacuzzi og bar',
        highlights: [
          'Utebar med sangria og øl på fat',
          'Jacuzzi og badstue ved bassenget',
          '63/69 anmeldelser gir utmerket',
          'Nær naturpark og fossefall',
        ],
        tip: 'Perfekt for bryllup, bursdagsfester eller større gruppereiser.',
      },
    },
  },

  // BENIDORM - Budget Apartment near Poniente
  {
    id: 'poniente-budget-apartment',
    destinationSlug: 'benidorm',
    name: 'Cozy Apartment Close to Poniente Beach',
    type: 'apartment',
    rating: 4.4,
    reviewCount: 29,
    bedrooms: 2,
    bathrooms: 1,
    sleeps: 4,
    priceRange: { min: 60, max: 100 },
    categories: ['budget', 'beachfront'],
    location: {
      area: 'Poniente Beach',
      distanceToBeach: '300m',
      distanceToCenter: '2 km',
    },
    amenities: ['wifi', 'air-conditioning', 'kitchen', 'balcony', 'washing-machine', 'elevator'],
    images: {
      main: '/images/rentals/benidorm/poniente-budget-apartment.avif',
    },
    sourceUrl: 'https://www.vrbo.com/6202006ha',
    vrboPropertyId: '6202006',
    featured: false,
    translations: {
      sv: {
        description: 'Mysig och prisvärd 2-rumslägenhet nära Poniente-stranden. Perfekt för par eller liten familj som vill ha bra boende utan att spräcka budgeten. Fullt kök och AC ingår.',
        shortDescription: 'Prisvärd lägenhet nära Poniente för budgetmedvetna',
        highlights: [
          'Prisvärt alternativ',
          '300m till Poniente-stranden',
          'Fullt utrustat kök',
          'AC och WiFi ingår',
        ],
        tip: 'Bästa budgetalternativet nära Poniente!',
      },
      en: {
        description: 'Cozy and affordable 2-bedroom apartment near Poniente Beach. Perfect for couples or small families who want good accommodation without breaking the budget. Full kitchen and A/C included.',
        shortDescription: 'Affordable apartment near Poniente for budget-conscious travelers',
        highlights: [
          'Affordable option',
          '300m to Poniente Beach',
          'Fully equipped kitchen',
          'A/C and WiFi included',
        ],
        tip: 'Best budget option near Poniente!',
      },
      de: {
        description: 'Gemütliche und erschwingliche 2-Zimmer-Wohnung nahe dem Poniente-Strand. Perfekt für Paare oder kleine Familien, die gute Unterkunft ohne Budgetsprengung wünschen.',
        shortDescription: 'Erschwingliche Wohnung nahe Poniente für Budgetbewusste',
        highlights: [
          'Erschwingliche Option',
          '300m zum Poniente-Strand',
          'Voll ausgestattete Küche',
          'Klimaanlage und WLAN inklusive',
        ],
        tip: 'Beste Budget-Option nahe Poniente!',
      },
      no: {
        description: 'Koselig og rimelig 2-romsleilighet nær Poniente-stranden. Perfekt for par eller liten familie som ønsker god overnatting uten å sprenge budsjettet.',
        shortDescription: 'Rimelig leilighet nær Poniente for budsjettbevisste',
        highlights: [
          'Rimelig alternativ',
          '300m til Poniente-stranden',
          'Fullt utstyrt kjøkken',
          'AC og WiFi inkludert',
        ],
        tip: 'Beste budsjett-alternativ nær Poniente!',
      },
    },
  },
];

// Helper functions
export function getRentalsByDestination(destinationSlug: string): Rental[] {
  return rentals.filter(r => r.destinationSlug === destinationSlug);
}

export function getRentalById(id: string): Rental | undefined {
  return rentals.find(r => r.id === id);
}

export function getFeaturedRentals(destinationSlug: string): Rental[] {
  return rentals.filter(r => r.destinationSlug === destinationSlug && r.featured);
}

export function getRentalsByCategory(destinationSlug: string, category: RentalCategory): Rental[] {
  return rentals.filter(r => r.destinationSlug === destinationSlug && r.categories.includes(category));
}

export function getRentalsByType(destinationSlug: string, type: RentalType): Rental[] {
  return rentals.filter(r => r.destinationSlug === destinationSlug && r.type === type);
}
