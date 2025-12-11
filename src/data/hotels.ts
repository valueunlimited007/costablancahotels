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
      main: '/images/hotels/benidorm/hotel-asia-gardens.webp',
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
      main: '/images/hotels/benidorm/hotel-gran-bali.avif',
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
      main: '/images/hotels/benidorm/hotel-rh-princesa.avif',
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

  // BENIDORM - 5-star Boutique
  {
    id: 'hotel-villa-venecia',
    destinationSlug: 'benidorm',
    name: 'Hotel Villa Venecia Boutique Gourmet',
    stars: 5,
    rating: 8.6,
    reviewCount: 1245,
    priceRange: { min: 200, max: 380 },
    categories: ['luxury', 'boutique', 'adults-only'],
    location: {
      area: 'El Balcón (Old Town)',
      distanceToBeach: '100m',
      distanceToCenter: '0m (i gamla stan)',
    },
    amenities: ['pool', 'spa', 'restaurant', 'bar', 'wifi', 'air-conditioning', 'sea-view'],
    images: {
      main: '/images/hotels/benidorm/hotel-villa-venecia.jpg',
    },
    sourceUrl: 'https://www.booking.com/hotel/es/villa-venecia.html',
    hotelsComSearchQuery: 'Hotel Villa Venecia Benidorm',
    featured: true,
    translations: {
      sv: {
        description: 'Hotel Villa Venecia ligger på El Balcón, den ikoniska udden som skiljer Levante- och Poniente-stränderna åt. Detta boutiquehotell erbjuder fantastisk utsikt över havet och Sierra Gelada, med gourmetrestaurang och personlig service.',
        shortDescription: 'Exklusivt boutiquehotell med fantastisk utsikt från gamla stan',
        highlights: [
          'Unikt läge på El Balcón mellan två stränder',
          'Prisbelönt gourmetrestaurang',
          'Takpool med panoramautsikt',
          '10 minuters promenad till gamla stan',
        ],
        tip: 'Boka rum med havsutsikt mot solnedgången för magiska kvällar.',
      },
      en: {
        description: 'Hotel Villa Venecia is perched on El Balcón, the iconic promontory that splits the Levante and Poniente beaches. This boutique hotel offers stunning views of the sea and Sierra Gelada, with gourmet restaurant and personalized service.',
        shortDescription: 'Exclusive boutique hotel with stunning views from the Old Town',
        highlights: [
          'Unique location on El Balcón between two beaches',
          'Award-winning gourmet restaurant',
          'Rooftop pool with panoramic views',
          '10 minutes walk to Old Town',
        ],
        tip: 'Book a room with sunset sea view for magical evenings.',
      },
      de: {
        description: 'Das Hotel Villa Venecia thront auf El Balcón, dem ikonischen Vorgebirge, das die Strände Levante und Poniente trennt. Dieses Boutique-Hotel bietet atemberaubende Aussichten auf das Meer und die Sierra Gelada.',
        shortDescription: 'Exklusives Boutique-Hotel mit atemberaubender Aussicht aus der Altstadt',
        highlights: [
          'Einzigartige Lage auf El Balcón zwischen zwei Stränden',
          'Preisgekröntes Gourmet-Restaurant',
          'Dachpool mit Panoramablick',
          '10 Minuten zu Fuß zur Altstadt',
        ],
        tip: 'Buchen Sie ein Zimmer mit Meerblick zum Sonnenuntergang für magische Abende.',
      },
      no: {
        description: 'Hotel Villa Venecia ligger på El Balcón, den ikoniske odden som skiller Levante- og Poniente-strendene. Dette boutiquehotellet tilbyr fantastisk utsikt over havet og Sierra Gelada.',
        shortDescription: 'Eksklusivt boutiquehotell med fantastisk utsikt fra gamlebyen',
        highlights: [
          'Unik beliggenhet på El Balcón mellom to strender',
          'Prisbelønnet gourmetrestaurant',
          'Takbasseng med panoramautsikt',
          '10 minutters gange til gamlebyen',
        ],
        tip: 'Bestill rom med havutsikt mot solnedgangen for magiske kvelder.',
      },
    },
  },

  // BENIDORM - Resort with Golf
  {
    id: 'melia-villaitana',
    destinationSlug: 'benidorm',
    name: 'Meliá Villaitana',
    stars: 5,
    rating: 8.8,
    reviewCount: 4521,
    priceRange: { min: 150, max: 350 },
    categories: ['luxury', 'family', 'golf', 'spa'],
    location: {
      area: 'Terra Mítica',
      distanceToBeach: '3 km (shuttle)',
      distanceToCenter: '5 km',
    },
    amenities: ['pool', 'spa', 'gym', 'restaurant', 'bar', 'wifi', 'parking', 'kids-club', 'air-conditioning'],
    images: {
      main: '/images/hotels/benidorm/melia-villaitana.avif',
    },
    sourceUrl: 'https://www.melia.com/en/hotels/spain/benidorm/melia-villaitana',
    hotelsComSearchQuery: 'Melia Villaitana Benidorm',
    featured: true,
    translations: {
      sv: {
        description: 'Meliá Villaitana är en lyxig resort utformad som en traditionell spansk by med torg och gränder. Med två 18-håls golfbanor designade av Nicklaus Design, enorma poolområden och YHI Spa är det perfekt för både familjer och par.',
        shortDescription: 'Lyxresort med golfbanor och spansk bystil',
        highlights: [
          'Två 18-håls golfbanor (Nicklaus Design)',
          'Över 4000 kvm poolområde',
          'YHI Spa med hälsobehandlingar',
          'Barnklubb och familjeaktiviteter',
        ],
        tip: 'Perfekt för golfentusiaster - boka golfpaket för bästa pris.',
      },
      en: {
        description: 'Meliá Villaitana is a luxury resort designed like a traditional Spanish village with plazas and alleyways. With two 18-hole golf courses designed by Nicklaus Design, huge pool areas and YHI Spa, it\'s perfect for families and couples alike.',
        shortDescription: 'Luxury resort with golf courses and Spanish village style',
        highlights: [
          'Two 18-hole golf courses (Nicklaus Design)',
          'Over 4000 sqm pool area',
          'YHI Spa with wellness treatments',
          'Kids club and family activities',
        ],
        tip: 'Perfect for golf enthusiasts - book golf packages for best prices.',
      },
      de: {
        description: 'Das Meliá Villaitana ist ein Luxusresort, das wie ein traditionelles spanisches Dorf mit Plätzen und Gassen gestaltet ist. Mit zwei 18-Loch-Golfplätzen von Nicklaus Design und riesigen Poolbereichen.',
        shortDescription: 'Luxusresort mit Golfplätzen im spanischen Dorfstil',
        highlights: [
          'Zwei 18-Loch-Golfplätze (Nicklaus Design)',
          'Über 4000 qm Poolbereich',
          'YHI Spa mit Wellness-Behandlungen',
          'Kinderclub und Familienaktivitäten',
        ],
        tip: 'Perfekt für Golfenthusiasten - buchen Sie Golfpakete zum besten Preis.',
      },
      no: {
        description: 'Meliá Villaitana er et luksusresort designet som en tradisjonell spansk landsby med plazaer og smug. Med to 18-hulls golfbaner designet av Nicklaus Design, enorme bassengområder og YHI Spa.',
        shortDescription: 'Luksusresort med golfbaner og spansk landsbypreg',
        highlights: [
          'To 18-hulls golfbaner (Nicklaus Design)',
          'Over 4000 kvm bassengområde',
          'YHI Spa med velværebehandlinger',
          'Barneklubb og familieaktiviteter',
        ],
        tip: 'Perfekt for golfentusiaster - bestill golfpakker for beste priser.',
      },
    },
  },

  // BENIDORM - Modern Beachfront
  {
    id: 'barcelo-benidorm-beach',
    destinationSlug: 'benidorm',
    name: 'Barceló Benidorm Beach',
    stars: 4,
    rating: 8.5,
    reviewCount: 3876,
    priceRange: { min: 100, max: 250 },
    categories: ['beachfront', 'city-center'],
    location: {
      area: 'Levante Beach',
      distanceToBeach: '0m (strandpromenaden)',
      distanceToCenter: '300m',
    },
    amenities: ['pool', 'gym', 'restaurant', 'bar', 'wifi', 'beach-access', 'air-conditioning', 'sea-view'],
    images: {
      main: '/images/hotels/benidorm/barcelo-benidorm-beach.avif',
    },
    sourceUrl: 'https://www.barcelo.com/en-gb/barcelo-benidorm-beach/',
    hotelsComSearchQuery: 'Barcelo Benidorm Beach',
    featured: false,
    translations: {
      sv: {
        description: 'Barceló Benidorm Beach ligger direkt på Levante-promenaden efter en renovering för över 20 miljoner euro. Moderna rum med havsutsikt och den nya B-Heaven takterrassbaren med fantastiska vyer gör detta till ett toppval.',
        shortDescription: 'Nyrenoverat strandhotell på Levante-promenaden',
        highlights: [
          'Direkt på Levante-promenaden',
          'B-Heaven takterrassbar med utsikt',
          'Helt renoverat 2020',
          'Nära gamla stan och nattlivet',
        ],
        tip: 'Ta en drink på B-Heaven takterrassbaren vid solnedgången!',
      },
      en: {
        description: 'Barceló Benidorm Beach is located right on Levante promenade following a €20 million renovation. Modern rooms with sea views and the new B-Heaven rooftop bar with stunning views make this a top choice.',
        shortDescription: 'Newly renovated beach hotel on Levante promenade',
        highlights: [
          'Right on Levante promenade',
          'B-Heaven rooftop bar with views',
          'Fully renovated in 2020',
          'Close to Old Town and nightlife',
        ],
        tip: 'Have a drink at B-Heaven rooftop bar at sunset!',
      },
      de: {
        description: 'Das Barceló Benidorm Beach liegt direkt an der Levante-Promenade nach einer Renovierung für über 20 Millionen Euro. Moderne Zimmer mit Meerblick und die neue B-Heaven Dachterrassenbar.',
        shortDescription: 'Frisch renoviertes Strandhotel an der Levante-Promenade',
        highlights: [
          'Direkt an der Levante-Promenade',
          'B-Heaven Dachterrassenbar mit Aussicht',
          '2020 komplett renoviert',
          'Nahe Altstadt und Nachtleben',
        ],
        tip: 'Genießen Sie einen Drink in der B-Heaven Dachterrassenbar bei Sonnenuntergang!',
      },
      no: {
        description: 'Barceló Benidorm Beach ligger rett på Levante-promenaden etter en renovering for over 20 millioner euro. Moderne rom med havutsikt og den nye B-Heaven takterrassebaren.',
        shortDescription: 'Nyoppusset strandhotell på Levante-promenaden',
        highlights: [
          'Rett på Levante-promenaden',
          'B-Heaven takterrassebar med utsikt',
          'Helrenovert i 2020',
          'Nær gamlebyen og nattlivet',
        ],
        tip: 'Ta en drink på B-Heaven takterrassebaren ved solnedgang!',
      },
    },
  },

  // BENIDORM - Adults Only
  {
    id: 'hotel-don-pancho',
    destinationSlug: 'benidorm',
    name: 'Hotel Don Pancho - Adults Only',
    stars: 4,
    rating: 8.7,
    reviewCount: 2156,
    priceRange: { min: 80, max: 180 },
    categories: ['adults-only', 'beachfront'],
    location: {
      area: 'Levante Beach',
      distanceToBeach: '50m',
      distanceToCenter: '400m',
    },
    amenities: ['pool', 'gym', 'restaurant', 'bar', 'wifi', 'air-conditioning', 'sea-view', 'balcony'],
    images: {
      main: '/images/hotels/benidorm/hotel-don-pancho.jpg',
    },
    sourceUrl: 'https://www.tripadvisor.com/Hotel_Review-g187525-d264224-Reviews-Hotel_Don_Pancho-Benidorm.html',
    hotelsComSearchQuery: 'Hotel Don Pancho Benidorm',
    featured: false,
    translations: {
      sv: {
        description: 'Hotel Don Pancho är ett populärt endast-för-vuxna-hotell nära Playa de Levante. Med lugn atmosfär, takpool och havsutsikt från de flesta rum är det perfekt för par som vill ha strand och stadsliv.',
        shortDescription: 'Endast vuxna-hotell nära Levante-stranden',
        highlights: [
          'Endast för vuxna - lugn atmosfär',
          '50m till Levante-stranden',
          'Takpool med havsutsikt',
          'Nära restauranger och nattliv',
        ],
        tip: 'Boka rum på övre våningar för bästa utsikt över stranden.',
      },
      en: {
        description: 'Hotel Don Pancho is a popular adults-only hotel near Playa de Levante. With a peaceful atmosphere, rooftop pool and sea views from most rooms, it\'s perfect for couples seeking beach and city life.',
        shortDescription: 'Adults-only hotel near Levante Beach',
        highlights: [
          'Adults only - peaceful atmosphere',
          '50m to Levante Beach',
          'Rooftop pool with sea views',
          'Close to restaurants and nightlife',
        ],
        tip: 'Book rooms on upper floors for best beach views.',
      },
      de: {
        description: 'Das Hotel Don Pancho ist ein beliebtes Nur-Erwachsene-Hotel in der Nähe der Playa de Levante. Mit ruhiger Atmosphäre, Dachpool und Meerblick aus den meisten Zimmern.',
        shortDescription: 'Nur-Erwachsene-Hotel nahe Levante-Strand',
        highlights: [
          'Nur für Erwachsene - ruhige Atmosphäre',
          '50m zum Levante-Strand',
          'Dachpool mit Meerblick',
          'Nahe Restaurants und Nachtleben',
        ],
        tip: 'Buchen Sie Zimmer in oberen Etagen für beste Strandaussicht.',
      },
      no: {
        description: 'Hotel Don Pancho er et populært kun-for-voksne-hotell nær Playa de Levante. Med rolig atmosfære, takbasseng og havutsikt fra de fleste rom.',
        shortDescription: 'Kun voksne-hotell nær Levante-stranden',
        highlights: [
          'Kun for voksne - rolig atmosfære',
          '50m til Levante-stranden',
          'Takbasseng med havutsikt',
          'Nær restauranter og natteliv',
        ],
        tip: 'Bestill rom i øvre etasjer for best strandutsikt.',
      },
    },
  },

  // BENIDORM - Family Budget
  {
    id: 'sol-pelicanos-ocas',
    destinationSlug: 'benidorm',
    name: 'Sol Pelícanos Ocas',
    stars: 3,
    rating: 7.8,
    reviewCount: 6234,
    priceRange: { min: 50, max: 120 },
    categories: ['family', 'budget', 'all-inclusive'],
    location: {
      area: 'Levante Beach',
      distanceToBeach: '200m',
      distanceToCenter: '600m',
    },
    amenities: ['pool', 'restaurant', 'bar', 'wifi', 'kids-club', 'air-conditioning'],
    images: {
      main: '/images/hotels/benidorm/sol-pelicanos-ocas.avif',
    },
    sourceUrl: 'https://www.melia.com/en/hotels/spain/benidorm/sol-pelicanos-ocas',
    hotelsComSearchQuery: 'Sol Pelicanos Ocas Benidorm',
    featured: false,
    translations: {
      sv: {
        description: 'Sol Pelícanos Ocas är ett miljöcertifierat 3-stjärnigt hotell mitt i Benidorm, perfekt för familjer. Med lekplatser, spelrum, barnklubb och all-inclusive-alternativ är det ett prisvärt val för barnfamiljer.',
        shortDescription: 'Prisvärt familjehotell med barnklubb i centrala Benidorm',
        highlights: [
          'Barnklubb och lekplatser',
          'All-inclusive tillgängligt',
          'Miljöcertifierat hotell',
          'Centralt läge nära strand och butiker',
        ],
        tip: 'All-inclusive passar bäst för familjer med barn som äter ofta!',
      },
      en: {
        description: 'Sol Pelícanos Ocas is an eco-certified 3-star hotel in the heart of Benidorm, perfect for families. With playgrounds, games room, kids club and all-inclusive options, it\'s great value for families with children.',
        shortDescription: 'Affordable family hotel with kids club in central Benidorm',
        highlights: [
          'Kids club and playgrounds',
          'All-inclusive available',
          'Eco-certified hotel',
          'Central location near beach and shops',
        ],
        tip: 'All-inclusive works best for families with kids who eat often!',
      },
      de: {
        description: 'Das Sol Pelícanos Ocas ist ein umweltzertifiziertes 3-Sterne-Hotel im Herzen von Benidorm, perfekt für Familien. Mit Spielplätzen, Spielzimmer, Kinderclub und All-inclusive-Optionen.',
        shortDescription: 'Erschwingliches Familienhotel mit Kinderclub im Zentrum von Benidorm',
        highlights: [
          'Kinderclub und Spielplätze',
          'All-inclusive verfügbar',
          'Umweltzertifiziertes Hotel',
          'Zentrale Lage nahe Strand und Geschäften',
        ],
        tip: 'All-inclusive funktioniert am besten für Familien mit Kindern!',
      },
      no: {
        description: 'Sol Pelícanos Ocas er et miljøsertifisert 3-stjerners hotell midt i Benidorm, perfekt for familier. Med lekeplasser, spillrom, barneklubb og alt-inkludert-alternativer.',
        shortDescription: 'Rimelig familiehotell med barneklubb i sentrale Benidorm',
        highlights: [
          'Barneklubb og lekeplasser',
          'Alt inkludert tilgjengelig',
          'Miljøsertifisert hotell',
          'Sentral beliggenhet nær strand og butikker',
        ],
        tip: 'Alt inkludert fungerer best for familier med barn som spiser ofte!',
      },
    },
  },
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
