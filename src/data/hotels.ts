import { Locale } from '@/lib/i18n';

export interface Hotel {
  // Unique identifier (slug-format)
  id: string;

  // Which destination this hotel belongs to
  destinationSlug: string;

  // Basic info
  name: string;
  stars: 1 | 2 | 3 | 4 | 5;

  // Rating from Hotels.com (0-10 scale)
  rating?: number;
  reviewCount?: number;

  // Price range (per night in EUR)
  priceRange: {
    min: number;
    max: number;
  };

  // Categorization
  categories: HotelCategory[];

  // Location
  location: {
    area?: string;  // e.g., "Levante Beach", "Old Town"
    distanceToBeach?: string;  // e.g., "50m", "2 min walk"
    distanceToCenter?: string;
  };

  // Amenities
  amenities: HotelAmenity[];

  // Images (we'll store paths, user uploads actual images)
  images: {
    main: string;  // Primary image path: /images/hotels/benidorm/hotel-name.jpg
    gallery?: string[];
  };

  // Source URL for reference (so user knows where to get images)
  sourceUrl: string;

  // Affiliate link will be generated
  hotelsComSearchQuery?: string;  // Custom search query for this hotel

  // Is this a featured/top pick?
  featured?: boolean;

  // Translations
  translations: {
    [key in Locale]: {
      description: string;
      shortDescription: string;
      highlights?: string[];  // Key selling points
      tip?: string;  // Insider tip
    };
  };
}

export type HotelCategory =
  | 'luxury'
  | 'boutique'
  | 'family'
  | 'adults-only'
  | 'all-inclusive'
  | 'budget'
  | 'beachfront'
  | 'city-center'
  | 'spa'
  | 'golf';

export type HotelAmenity =
  | 'pool'
  | 'spa'
  | 'gym'
  | 'restaurant'
  | 'bar'
  | 'wifi'
  | 'parking'
  | 'beach-access'
  | 'kids-club'
  | 'pet-friendly'
  | 'air-conditioning'
  | 'balcony'
  | 'sea-view'
  | 'breakfast-included';

// Category labels for UI
export const categoryLabels: Record<HotelCategory, Record<Locale, string>> = {
  luxury: { sv: 'Lyxhotell', en: 'Luxury', de: 'Luxushotel', no: 'Luksushotell' },
  boutique: { sv: 'Boutiquehotell', en: 'Boutique', de: 'Boutiquehotel', no: 'Boutiquehotell' },
  family: { sv: 'Familjevänligt', en: 'Family-friendly', de: 'Familienfreundlich', no: 'Familievennlig' },
  'adults-only': { sv: 'Endast vuxna', en: 'Adults only', de: 'Nur für Erwachsene', no: 'Kun voksne' },
  'all-inclusive': { sv: 'All inclusive', en: 'All-inclusive', de: 'All-inclusive', no: 'Alt inkludert' },
  budget: { sv: 'Budgetvänligt', en: 'Budget', de: 'Günstig', no: 'Budsjett' },
  beachfront: { sv: 'Strandläge', en: 'Beachfront', de: 'Strandlage', no: 'Strandfront' },
  'city-center': { sv: 'Centralt', en: 'City center', de: 'Stadtzentrum', no: 'Sentrum' },
  spa: { sv: 'Spa', en: 'Spa', de: 'Spa', no: 'Spa' },
  golf: { sv: 'Golf', en: 'Golf', de: 'Golf', no: 'Golf' },
};

// Amenity labels and icons
export const amenityLabels: Record<HotelAmenity, Record<Locale, string>> = {
  pool: { sv: 'Pool', en: 'Pool', de: 'Pool', no: 'Basseng' },
  spa: { sv: 'Spa', en: 'Spa', de: 'Spa', no: 'Spa' },
  gym: { sv: 'Gym', en: 'Gym', de: 'Fitnessraum', no: 'Treningssenter' },
  restaurant: { sv: 'Restaurang', en: 'Restaurant', de: 'Restaurant', no: 'Restaurant' },
  bar: { sv: 'Bar', en: 'Bar', de: 'Bar', no: 'Bar' },
  wifi: { sv: 'Gratis WiFi', en: 'Free WiFi', de: 'Kostenloses WLAN', no: 'Gratis WiFi' },
  parking: { sv: 'Parkering', en: 'Parking', de: 'Parkplatz', no: 'Parkering' },
  'beach-access': { sv: 'Strandtillgång', en: 'Beach access', de: 'Strandzugang', no: 'Strandtilgang' },
  'kids-club': { sv: 'Barnklubb', en: 'Kids club', de: 'Kinderclub', no: 'Barneklubb' },
  'pet-friendly': { sv: 'Husdjur tillåtna', en: 'Pet-friendly', de: 'Haustierfreundlich', no: 'Dyrevennlig' },
  'air-conditioning': { sv: 'AC', en: 'A/C', de: 'Klimaanlage', no: 'AC' },
  balcony: { sv: 'Balkong', en: 'Balcony', de: 'Balkon', no: 'Balkong' },
  'sea-view': { sv: 'Havsutsikt', en: 'Sea view', de: 'Meerblick', no: 'Havutsikt' },
  'breakfast-included': { sv: 'Frukost ingår', en: 'Breakfast included', de: 'Frühstück inklusive', no: 'Frokost inkludert' },
};

// ============================================
// BENIDORM HOTELS - Curated Selection
// ============================================
//
// IMAGE GUIDE FOR USER:
// Download images from sourceUrl and save to:
// /public/images/hotels/benidorm/[hotel-id].jpg
//
// Example: /public/images/hotels/benidorm/hotel-asia-gardens.jpg
// ============================================

export const hotels: Hotel[] = [
  // BENIDORM - Luxury
  {
    id: 'hotel-asia-gardens',
    destinationSlug: 'benidorm',
    name: 'Asia Gardens Hotel & Thai Spa',
    stars: 5,
    rating: 9.2,
    reviewCount: 2847,
    priceRange: { min: 180, max: 450 },
    categories: ['luxury', 'spa', 'adults-only'],
    location: {
      area: 'Terra Mítica',
      distanceToBeach: '5 km (shuttle)',
      distanceToCenter: '8 km',
    },
    amenities: ['pool', 'spa', 'gym', 'restaurant', 'bar', 'wifi', 'parking', 'air-conditioning'],
    images: {
      main: '/images/hotels/benidorm/hotel-asia-gardens.jpg',
    },
    sourceUrl: 'https://www.hotels.com/ho227917/asia-gardens-hotel-thai-spa-a-royal-hideaway-hotel-benidorm-spain/',
    hotelsComSearchQuery: 'Asia Gardens Hotel',
    featured: true,
    translations: {
      sv: {
        description: 'Asia Gardens är ett exklusivt 5-stjärnigt hotell inspirerat av sydostasiatisk arkitektur. Med ett prisbelönt Thai Spa, sju pooler och tropiska trädgårdar erbjuder hotellet en unik retreat nära Benidorm. Perfekt för par som söker lyx och avkoppling.',
        shortDescription: 'Exklusivt 5-stjärnigt resort med Thai Spa och tropiska trädgårdar',
        highlights: [
          'Prisbelönt Thai Spa med autentiska behandlingar',
          '7 pooler inklusive infinity pool',
          'Flera restauranger med asiatisk och internationell mat',
          'Gratis shuttle till Levante-stranden',
        ],
        tip: 'Boka spa-paketet i förväg - det är ofta fullbokat!',
      },
      en: {
        description: 'Asia Gardens is an exclusive 5-star hotel inspired by Southeast Asian architecture. With an award-winning Thai Spa, seven pools and tropical gardens, the hotel offers a unique retreat near Benidorm. Perfect for couples seeking luxury and relaxation.',
        shortDescription: 'Exclusive 5-star resort with Thai Spa and tropical gardens',
        highlights: [
          'Award-winning Thai Spa with authentic treatments',
          '7 pools including infinity pool',
          'Multiple restaurants with Asian and international cuisine',
          'Free shuttle to Levante Beach',
        ],
        tip: 'Book the spa package in advance - it often sells out!',
      },
      de: {
        description: 'Das Asia Gardens ist ein exklusives 5-Sterne-Hotel, inspiriert von südostasiatischer Architektur. Mit einem preisgekrönten Thai Spa, sieben Pools und tropischen Gärten bietet das Hotel einen einzigartigen Rückzugsort in der Nähe von Benidorm.',
        shortDescription: 'Exklusives 5-Sterne-Resort mit Thai Spa und tropischen Gärten',
        highlights: [
          'Preisgekröntes Thai Spa mit authentischen Behandlungen',
          '7 Pools inklusive Infinity-Pool',
          'Mehrere Restaurants mit asiatischer und internationaler Küche',
          'Kostenloser Shuttle zum Levante-Strand',
        ],
        tip: 'Buchen Sie das Spa-Paket im Voraus - es ist oft ausgebucht!',
      },
      no: {
        description: 'Asia Gardens er et eksklusivt 5-stjerners hotell inspirert av sørøstasiatisk arkitektur. Med et prisbelønnet Thai Spa, syv bassenger og tropiske hager tilbyr hotellet en unik retreat nær Benidorm.',
        shortDescription: 'Eksklusivt 5-stjerners resort med Thai Spa og tropiske hager',
        highlights: [
          'Prisbelønnet Thai Spa med autentiske behandlinger',
          '7 bassenger inkludert infinity-basseng',
          'Flere restauranter med asiatisk og internasjonal mat',
          'Gratis shuttle til Levante-stranden',
        ],
        tip: 'Bestill spa-pakken på forhånd - den er ofte utsolgt!',
      },
    },
  },

  // BENIDORM - Beachfront Family
  {
    id: 'hotel-gran-bali',
    destinationSlug: 'benidorm',
    name: 'Gran Hotel Bali',
    stars: 4,
    rating: 8.4,
    reviewCount: 5621,
    priceRange: { min: 90, max: 220 },
    categories: ['family', 'beachfront', 'all-inclusive'],
    location: {
      area: 'Poniente Beach',
      distanceToBeach: '0m (direkt strandtillgång)',
      distanceToCenter: '1.5 km',
    },
    amenities: ['pool', 'gym', 'restaurant', 'bar', 'wifi', 'parking', 'beach-access', 'kids-club', 'air-conditioning'],
    images: {
      main: '/images/hotels/benidorm/hotel-gran-bali.jpg',
    },
    sourceUrl: 'https://www.hotels.com/ho114329/gran-hotel-bali-benidorm-spain/',
    hotelsComSearchQuery: 'Gran Hotel Bali Benidorm',
    featured: true,
    translations: {
      sv: {
        description: 'Gran Hotel Bali är Europas högsta hotell med 52 våningar och fantastisk utsikt över Medelhavet. Beläget direkt vid Poniente-stranden är det perfekt för familjer med all-inclusive-alternativ, barnklubb och flera pooler.',
        shortDescription: 'Europas högsta hotell med direkt strandtillgång',
        highlights: [
          'Europas högsta hotell - 52 våningar',
          'Direkt tillgång till Poniente-stranden',
          'All-inclusive tillgängligt',
          'Barnklubb och familjeaktiviteter',
        ],
        tip: 'Välj ett rum på de övre våningarna för bästa utsikt!',
      },
      en: {
        description: 'Gran Hotel Bali is Europe\'s tallest hotel with 52 floors and stunning Mediterranean views. Located directly on Poniente Beach, it\'s perfect for families with all-inclusive options, kids club and multiple pools.',
        shortDescription: 'Europe\'s tallest hotel with direct beach access',
        highlights: [
          'Europe\'s tallest hotel - 52 floors',
          'Direct access to Poniente Beach',
          'All-inclusive available',
          'Kids club and family activities',
        ],
        tip: 'Choose a room on the upper floors for the best views!',
      },
      de: {
        description: 'Das Gran Hotel Bali ist Europas höchstes Hotel mit 52 Stockwerken und atemberaubendem Mittelmeerblick. Direkt am Poniente-Strand gelegen, ist es perfekt für Familien mit All-inclusive-Optionen, Kinderclub und mehreren Pools.',
        shortDescription: 'Europas höchstes Hotel mit direktem Strandzugang',
        highlights: [
          'Europas höchstes Hotel - 52 Stockwerke',
          'Direkter Zugang zum Poniente-Strand',
          'All-inclusive verfügbar',
          'Kinderclub und Familienaktivitäten',
        ],
        tip: 'Wählen Sie ein Zimmer in den oberen Etagen für die beste Aussicht!',
      },
      no: {
        description: 'Gran Hotel Bali er Europas høyeste hotell med 52 etasjer og fantastisk utsikt over Middelhavet. Ligger direkte ved Poniente-stranden, perfekt for familier med alt-inkludert-alternativer, barneklubb og flere bassenger.',
        shortDescription: 'Europas høyeste hotell med direkte strandtilgang',
        highlights: [
          'Europas høyeste hotell - 52 etasjer',
          'Direkte tilgang til Poniente-stranden',
          'Alt inkludert tilgjengelig',
          'Barneklubb og familieaktiviteter',
        ],
        tip: 'Velg et rom i de øvre etasjene for best utsikt!',
      },
    },
  },

  // BENIDORM - Budget-friendly
  {
    id: 'hotel-rh-princesa',
    destinationSlug: 'benidorm',
    name: 'Hotel RH Princesa',
    stars: 4,
    rating: 8.6,
    reviewCount: 3214,
    priceRange: { min: 65, max: 150 },
    categories: ['family', 'beachfront', 'budget'],
    location: {
      area: 'Levante Beach',
      distanceToBeach: '50m',
      distanceToCenter: '500m',
    },
    amenities: ['pool', 'restaurant', 'bar', 'wifi', 'air-conditioning', 'balcony'],
    images: {
      main: '/images/hotels/benidorm/hotel-rh-princesa.jpg',
    },
    sourceUrl: 'https://www.hotels.com/ho185639/hotel-rh-princesa-benidorm-spain/',
    hotelsComSearchQuery: 'Hotel RH Princesa Benidorm',
    featured: false,
    translations: {
      sv: {
        description: 'Hotel RH Princesa erbjuder utmärkt läge bara 50 meter från Levante-stranden till ett bra pris. Moderna rum, takterrasspool och nära alla bekvämligheter gör det till ett populärt val för familjer.',
        shortDescription: 'Utmärkt läge nära Levante-stranden till bra pris',
        highlights: [
          'Endast 50m från Levante-stranden',
          'Takterrasspool med utsikt',
          'Centralt läge nära restauranger och butiker',
          'Bra värde för pengarna',
        ],
        tip: 'Fråga efter rum med havsutsikt - det kostar bara lite extra.',
      },
      en: {
        description: 'Hotel RH Princesa offers an excellent location just 50 meters from Levante Beach at a great price. Modern rooms, rooftop pool and proximity to all amenities make it a popular choice for families.',
        shortDescription: 'Excellent location near Levante Beach at great value',
        highlights: [
          'Just 50m from Levante Beach',
          'Rooftop pool with views',
          'Central location near restaurants and shops',
          'Great value for money',
        ],
        tip: 'Ask for a room with sea view - it costs only a little extra.',
      },
      de: {
        description: 'Das Hotel RH Princesa bietet eine ausgezeichnete Lage nur 50 Meter vom Levante-Strand zu einem guten Preis. Moderne Zimmer, Dachterrassenpool und Nähe zu allen Annehmlichkeiten machen es zu einer beliebten Wahl.',
        shortDescription: 'Ausgezeichnete Lage nahe Levante-Strand zum guten Preis',
        highlights: [
          'Nur 50m vom Levante-Strand',
          'Dachterrassenpool mit Aussicht',
          'Zentrale Lage nahe Restaurants und Geschäften',
          'Gutes Preis-Leistungs-Verhältnis',
        ],
        tip: 'Fragen Sie nach einem Zimmer mit Meerblick - es kostet nur wenig extra.',
      },
      no: {
        description: 'Hotel RH Princesa tilbyr utmerket beliggenhet bare 50 meter fra Levante-stranden til en god pris. Moderne rom, takterrassebasseng og nærhet til alle fasiliteter gjør det til et populært valg.',
        shortDescription: 'Utmerket beliggenhet nær Levante-stranden til god pris',
        highlights: [
          'Bare 50m fra Levante-stranden',
          'Takterrassebasseng med utsikt',
          'Sentral beliggenhet nær restauranter og butikker',
          'God verdi for pengene',
        ],
        tip: 'Spør om rom med havutsikt - det koster bare litt ekstra.',
      },
    },
  },

  // Add placeholder for more hotels - I'll add these as we go
  // The user can add more by following this structure
];

// Helper functions
export function getHotelsByDestination(destinationSlug: string): Hotel[] {
  return hotels.filter(h => h.destinationSlug === destinationSlug);
}

export function getHotelById(id: string): Hotel | undefined {
  return hotels.find(h => h.id === id);
}

export function getFeaturedHotels(destinationSlug: string): Hotel[] {
  return hotels.filter(h => h.destinationSlug === destinationSlug && h.featured);
}

export function getHotelsByCategory(destinationSlug: string, category: HotelCategory): Hotel[] {
  return hotels.filter(h => h.destinationSlug === destinationSlug && h.categories.includes(category));
}
