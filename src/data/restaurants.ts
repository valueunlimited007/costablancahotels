import { Locale } from '@/lib/i18n';

export type RestaurantCategory =
  | 'spanish'      // Traditional Spanish
  | 'seafood'      // Seafood & fish
  | 'international'// International cuisine
  | 'nordic'       // Scandinavian
  | 'tapas'        // Tapas bars
  | 'fine-dining'  // Fine dining
  | 'budget'       // Budget-friendly
  | 'beach'        // Beach restaurants
  | 'family';      // Family-friendly

export interface Restaurant {
  id: string;
  destinationSlug: string;
  name: string;
  category: RestaurantCategory;
  priceRange: 1 | 2 | 3; // € | €€ | €€€
  rating?: number; // 1-5
  coordinates?: {
    lat: number;
    lng: number;
  };
  website?: string;
  phone?: string;
  translations: {
    [key in Locale]: {
      description: string;
      specialty?: string;
      tip?: string;
    };
  };
}

// Category translations
export const categoryNames: Record<Locale, Record<RestaurantCategory, string>> = {
  sv: {
    spanish: 'Spansk mat',
    seafood: 'Fisk & skaldjur',
    international: 'Internationellt',
    nordic: 'Skandinaviskt',
    tapas: 'Tapas',
    'fine-dining': 'Fine dining',
    budget: 'Budgetvänligt',
    beach: 'Strandrestaurang',
    family: 'Familjevänligt',
  },
  en: {
    spanish: 'Spanish cuisine',
    seafood: 'Seafood',
    international: 'International',
    nordic: 'Nordic',
    tapas: 'Tapas',
    'fine-dining': 'Fine dining',
    budget: 'Budget-friendly',
    beach: 'Beach restaurant',
    family: 'Family-friendly',
  },
  de: {
    spanish: 'Spanische Küche',
    seafood: 'Meeresfrüchte',
    international: 'International',
    nordic: 'Skandinavisch',
    tapas: 'Tapas',
    'fine-dining': 'Fine Dining',
    budget: 'Preiswert',
    beach: 'Strandrestaurant',
    family: 'Familienfreundlich',
  },
  no: {
    spanish: 'Spansk mat',
    seafood: 'Sjømat',
    international: 'Internasjonalt',
    nordic: 'Skandinavisk',
    tapas: 'Tapas',
    'fine-dining': 'Fine dining',
    budget: 'Budsjettvennlig',
    beach: 'Strandrestaurant',
    family: 'Familievennlig',
  },
};

// Sample restaurants for featured destinations
export const restaurants: Restaurant[] = [
  // BENIDORM
  {
    id: 'la-cava-aragonesa',
    destinationSlug: 'benidorm',
    name: 'La Cava Aragonesa',
    category: 'tapas',
    priceRange: 2,
    rating: 4.5,
    translations: {
      sv: {
        description: 'Klassisk tapasbar i gamla stan med autentisk spansk atmosfär och utmärkta viner.',
        specialty: 'Jamón ibérico och manchego',
        tip: 'Boka bord i förväg, speciellt på helger.',
      },
      en: {
        description: 'Classic tapas bar in the old town with authentic Spanish atmosphere and excellent wines.',
        specialty: 'Jamón ibérico and manchego',
        tip: 'Book a table in advance, especially on weekends.',
      },
      de: {
        description: 'Klassische Tapas-Bar in der Altstadt mit authentischer spanischer Atmosphäre und ausgezeichneten Weinen.',
        specialty: 'Jamón ibérico und Manchego',
        tip: 'Reservieren Sie im Voraus, besonders am Wochenende.',
      },
      no: {
        description: 'Klassisk tapasbar i gamlebyen med autentisk spansk atmosfære og utmerkede viner.',
        specialty: 'Jamón ibérico og manchego',
        tip: 'Bestill bord på forhånd, spesielt i helgene.',
      },
    },
  },
  {
    id: 'ulia-benidorm',
    destinationSlug: 'benidorm',
    name: 'Ulía',
    category: 'fine-dining',
    priceRange: 3,
    rating: 4.8,
    translations: {
      sv: {
        description: 'Michelinrestaurang med kreativ medelhavskök och fantastisk utsikt över havet.',
        specialty: 'Smakmeny med lokala råvaror',
        tip: 'Perfekt för speciella tillfällen. Boka flera veckor i förväg.',
      },
      en: {
        description: 'Michelin restaurant with creative Mediterranean cuisine and fantastic sea views.',
        specialty: 'Tasting menu with local ingredients',
        tip: 'Perfect for special occasions. Book several weeks in advance.',
      },
      de: {
        description: 'Michelin-Restaurant mit kreativer mediterraner Küche und fantastischem Meerblick.',
        specialty: 'Degustationsmenü mit lokalen Zutaten',
        tip: 'Perfekt für besondere Anlässe. Mehrere Wochen im Voraus buchen.',
      },
      no: {
        description: 'Michelin-restaurant med kreativt middelhavsmat og fantastisk havutsikt.',
        specialty: 'Smaksmeny med lokale råvarer',
        tip: 'Perfekt for spesielle anledninger. Bestill flere uker i forveien.',
      },
    },
  },
  {
    id: 'casa-toni-benidorm',
    destinationSlug: 'benidorm',
    name: 'Casa Toni',
    category: 'spanish',
    priceRange: 2,
    rating: 4.3,
    translations: {
      sv: {
        description: 'Familjeägt sedan 1972. Känd för sina paellas och grillade fiskar.',
        specialty: 'Paella valenciana',
        tip: 'Beställ paella minst 30 minuter i förväg.',
      },
      en: {
        description: 'Family-owned since 1972. Known for its paellas and grilled fish.',
        specialty: 'Paella valenciana',
        tip: 'Order paella at least 30 minutes in advance.',
      },
      de: {
        description: 'Familiengeführt seit 1972. Bekannt für Paellas und gegrillten Fisch.',
        specialty: 'Paella Valenciana',
        tip: 'Paella mindestens 30 Minuten im Voraus bestellen.',
      },
      no: {
        description: 'Familieeid siden 1972. Kjent for sine paellaer og grillet fisk.',
        specialty: 'Paella valenciana',
        tip: 'Bestill paella minst 30 minutter på forhånd.',
      },
    },
  },

  // ALICANTE
  {
    id: 'monastrell-alicante',
    destinationSlug: 'alicante',
    name: 'Monastrell',
    category: 'fine-dining',
    priceRange: 3,
    rating: 4.9,
    translations: {
      sv: {
        description: 'Michelin-stjärnig restaurang av kocken María José San Román, känd för sin saffranskök.',
        specialty: 'Arroz a banda med saffran',
        tip: 'Prova deras berömda saffransmeny.',
      },
      en: {
        description: 'Michelin-starred restaurant by chef María José San Román, known for saffron cuisine.',
        specialty: 'Arroz a banda with saffron',
        tip: 'Try their famous saffron menu.',
      },
      de: {
        description: 'Michelin-Stern-Restaurant von Köchin María José San Román, bekannt für Safran-Küche.',
        specialty: 'Arroz a banda mit Safran',
        tip: 'Probieren Sie das berühmte Safran-Menü.',
      },
      no: {
        description: 'Michelin-restaurant av kokken María José San Román, kjent for safranmat.',
        specialty: 'Arroz a banda med safran',
        tip: 'Prøv deres berømte safranmeny.',
      },
    },
  },
  {
    id: 'el-portal-alicante',
    destinationSlug: 'alicante',
    name: 'El Portal Taberna & Wines',
    category: 'tapas',
    priceRange: 2,
    rating: 4.6,
    translations: {
      sv: {
        description: 'Modern tapasbar i hjärtat av Alicante med lokala viner och kreativa rätter.',
        specialty: 'Koketter och lokala ostar',
        tip: 'Perfekt för en kväll med vänner.',
      },
      en: {
        description: 'Modern tapas bar in the heart of Alicante with local wines and creative dishes.',
        specialty: 'Croquettes and local cheeses',
        tip: 'Perfect for an evening with friends.',
      },
      de: {
        description: 'Moderne Tapas-Bar im Herzen von Alicante mit lokalen Weinen und kreativen Gerichten.',
        specialty: 'Kroketten und lokaler Käse',
        tip: 'Perfekt für einen Abend mit Freunden.',
      },
      no: {
        description: 'Moderne tapasbar i hjertet av Alicante med lokale viner og kreative retter.',
        specialty: 'Kroketter og lokale oster',
        tip: 'Perfekt for en kveld med venner.',
      },
    },
  },

  // TORREVIEJA
  {
    id: 'miramar-torrevieja',
    destinationSlug: 'torrevieja',
    name: 'Restaurante Miramar',
    category: 'seafood',
    priceRange: 2,
    rating: 4.4,
    translations: {
      sv: {
        description: 'Havsutsikt och färsk fisk direkt från hamnen. En lokal favorit sedan 1985.',
        specialty: 'Caldero (lokal fiskgryta)',
        tip: 'Be om dagens fångst.',
      },
      en: {
        description: 'Sea views and fresh fish straight from the harbour. A local favourite since 1985.',
        specialty: 'Caldero (local fish stew)',
        tip: 'Ask for the catch of the day.',
      },
      de: {
        description: 'Meerblick und frischer Fisch direkt aus dem Hafen. Ein lokaler Favorit seit 1985.',
        specialty: 'Caldero (lokaler Fischeintopf)',
        tip: 'Fragen Sie nach dem Fang des Tages.',
      },
      no: {
        description: 'Havutsikt og fersk fisk rett fra havnen. En lokal favoritt siden 1985.',
        specialty: 'Caldero (lokal fiskegryte)',
        tip: 'Spør om dagens fangst.',
      },
    },
  },
  {
    id: 'cabo-roig-chiringuito',
    destinationSlug: 'torrevieja',
    name: 'Chiringuito Cabo Roig',
    category: 'beach',
    priceRange: 2,
    rating: 4.2,
    translations: {
      sv: {
        description: 'Avslappnad strandbar med fantastisk läge och god mat med fötterna i sanden.',
        specialty: 'Grillad fisk och sangria',
        tip: 'Kom tidigt för bästa plats vid solnedgången.',
      },
      en: {
        description: 'Relaxed beach bar with fantastic location and good food with your feet in the sand.',
        specialty: 'Grilled fish and sangria',
        tip: 'Come early for the best sunset spot.',
      },
      de: {
        description: 'Entspannte Strandbar mit fantastischer Lage und gutem Essen mit den Füßen im Sand.',
        specialty: 'Gegrillter Fisch und Sangria',
        tip: 'Kommen Sie früh für den besten Sonnenuntergangsplatz.',
      },
      no: {
        description: 'Avslappet strandbar med fantastisk beliggenhet og god mat med føttene i sanden.',
        specialty: 'Grillet fisk og sangria',
        tip: 'Kom tidlig for beste plass ved solnedgang.',
      },
    },
  },

  // ALTEA
  {
    id: 'la-costera-altea',
    destinationSlug: 'altea',
    name: 'La Costera',
    category: 'spanish',
    priceRange: 2,
    rating: 4.5,
    translations: {
      sv: {
        description: 'Charmig restaurang i Alteas gamla stad med terrass och utsikt över havet.',
        specialty: 'Arroz del senyoret',
        tip: 'Sitta ute på terrassen vid solnedgång.',
      },
      en: {
        description: 'Charming restaurant in Altea old town with terrace and sea views.',
        specialty: 'Arroz del senyoret',
        tip: 'Sit on the terrace at sunset.',
      },
      de: {
        description: 'Charmantes Restaurant in Alteas Altstadt mit Terrasse und Meerblick.',
        specialty: 'Arroz del senyoret',
        tip: 'Sitzen Sie bei Sonnenuntergang auf der Terrasse.',
      },
      no: {
        description: 'Sjarmerende restaurant i Alteas gamleby med terrasse og havutsikt.',
        specialty: 'Arroz del senyoret',
        tip: 'Sitt ute på terrassen ved solnedgang.',
      },
    },
  },

  // CALPE
  {
    id: 'audrey-s-calpe',
    destinationSlug: 'calpe',
    name: "Audrey's by Rafa Soler",
    category: 'fine-dining',
    priceRange: 3,
    rating: 4.7,
    translations: {
      sv: {
        description: 'Elegant restaurang med utsikt över Peñón de Ifach och kreativ medelhavskök.',
        specialty: 'Arroz meloso med havskräfta',
        tip: 'Boka bord vid fönstret för bästa utsikt.',
      },
      en: {
        description: 'Elegant restaurant with views of Peñón de Ifach and creative Mediterranean cuisine.',
        specialty: 'Arroz meloso with Norway lobster',
        tip: 'Book a window table for the best view.',
      },
      de: {
        description: 'Elegantes Restaurant mit Blick auf Peñón de Ifach und kreativer mediterraner Küche.',
        specialty: 'Arroz meloso mit Kaisergranat',
        tip: 'Buchen Sie einen Fensterplatz für die beste Aussicht.',
      },
      no: {
        description: 'Elegant restaurant med utsikt over Peñón de Ifach og kreativt middelhavsmat.',
        specialty: 'Arroz meloso med sjøkreps',
        tip: 'Bestill vindusplass for beste utsikt.',
      },
    },
  },

  // DENIA
  {
    id: 'quique-dacosta-denia',
    destinationSlug: 'denia',
    name: 'Quique Dacosta',
    category: 'fine-dining',
    priceRange: 3,
    rating: 5.0,
    translations: {
      sv: {
        description: 'Tre Michelin-stjärnor! En av Spaniens bästa restauranger med innovativ kök.',
        specialty: 'Avantgarde-smakmeny',
        tip: 'Boka månader i förväg. En upplevelse för livet.',
      },
      en: {
        description: 'Three Michelin stars! One of Spain\'s best restaurants with innovative cuisine.',
        specialty: 'Avant-garde tasting menu',
        tip: 'Book months in advance. A once-in-a-lifetime experience.',
      },
      de: {
        description: 'Drei Michelin-Sterne! Eines der besten Restaurants Spaniens mit innovativer Küche.',
        specialty: 'Avantgarde-Degustationsmenü',
        tip: 'Monate im Voraus buchen. Ein Erlebnis fürs Leben.',
      },
      no: {
        description: 'Tre Michelin-stjerner! En av Spanias beste restauranter med innovativ mat.',
        specialty: 'Avantgarde smaksmeny',
        tip: 'Bestill måneder i forveien. En opplevelse for livet.',
      },
    },
  },
  {
    id: 'el-pegoli-denia',
    destinationSlug: 'denia',
    name: 'El Pegolí',
    category: 'seafood',
    priceRange: 2,
    rating: 4.4,
    translations: {
      sv: {
        description: 'Enkel fiskerestaurang vid hamnen med dagens fångst.',
        specialty: 'Gamba roja de Dénia',
        tip: 'Den röda räkan från Dénia är en delikatess - prova den!',
      },
      en: {
        description: 'Simple fish restaurant by the harbour with the day\'s catch.',
        specialty: 'Gamba roja de Dénia',
        tip: 'The red prawn from Dénia is a delicacy - try it!',
      },
      de: {
        description: 'Einfaches Fischrestaurant am Hafen mit dem Fang des Tages.',
        specialty: 'Gamba roja de Dénia',
        tip: 'Die rote Garnele aus Dénia ist eine Delikatesse - probieren Sie sie!',
      },
      no: {
        description: 'Enkel fiskerestaurant ved havnen med dagens fangst.',
        specialty: 'Gamba roja de Dénia',
        tip: 'Den røde reken fra Dénia er en delikatesse - prøv den!',
      },
    },
  },
];

// Helper functions
export function getRestaurantsByDestination(destinationSlug: string): Restaurant[] {
  return restaurants.filter((r) => r.destinationSlug === destinationSlug);
}

export function getRestaurantsByCategory(category: RestaurantCategory): Restaurant[] {
  return restaurants.filter((r) => r.category === category);
}

export function getRestaurant(id: string): Restaurant | undefined {
  return restaurants.find((r) => r.id === id);
}

export function getDestinationsWithRestaurants(): string[] {
  return [...new Set(restaurants.map((r) => r.destinationSlug))];
}
