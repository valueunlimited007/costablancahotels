// Unsplash API integration for destination images
const UNSPLASH_ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY || '3-LihaBRFW802POVEhd1tHHV_nriTEy0UD85TD40bRM';

// Pre-defined Unsplash image IDs for Costa Blanca destinations
// Using specific images that match each destination
export const destinationImages: Record<string, { id: string; url: string; photographer: string }> = {
  benidorm: {
    id: 'rChFUMwAe7E',
    url: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80',
    photographer: 'Unsplash',
  },
  javea: {
    id: 'Nyvq2juw4_o',
    url: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
    photographer: 'Unsplash',
  },
  'la-zenia': {
    id: 'KMn4VEeEPR8',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    photographer: 'Unsplash',
  },
  alicante: {
    id: 'hpTH5b6mo2s',
    url: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80',
    photographer: 'Unsplash',
  },
  calpe: {
    id: '1rBg5YSi00c',
    url: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80',
    photographer: 'Unsplash',
  },
  altea: {
    id: 'oXo6IvDnkqc',
    url: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800&q=80',
    photographer: 'Unsplash',
  },
  torrevieja: {
    id: 'Siuwr3uCir0',
    url: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=800&q=80',
    photographer: 'Unsplash',
  },
  denia: {
    id: '2TLREZi7BUg',
    url: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80',
    photographer: 'Unsplash',
  },
  // Secondary destinations - generic Mediterranean/beach images
  albir: {
    id: 'default-beach-1',
    url: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80',
    photographer: 'Unsplash',
  },
  benissa: {
    id: 'default-coast-1',
    url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80',
    photographer: 'Unsplash',
  },
  'cabo-roig': {
    id: 'default-beach-2',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    photographer: 'Unsplash',
  },
  campoamor: {
    id: 'default-golf',
    url: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80',
    photographer: 'Unsplash',
  },
  'ciudad-quesada': {
    id: 'default-spain-1',
    url: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?w=800&q=80',
    photographer: 'Unsplash',
  },
  'guardamar-del-segura': {
    id: 'default-dunes',
    url: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=800&q=80',
    photographer: 'Unsplash',
  },
  'la-manga': {
    id: 'default-lagoon',
    url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    photographer: 'Unsplash',
  },
  'playa-flamenca': {
    id: 'default-beach-3',
    url: 'https://images.unsplash.com/photo-1520942702018-0862200e6873?w=800&q=80',
    photographer: 'Unsplash',
  },
  'santa-pola': {
    id: 'default-fishing',
    url: 'https://images.unsplash.com/photo-1545579133-99bb5ab189bd?w=800&q=80',
    photographer: 'Unsplash',
  },
  villajoyosa: {
    id: 'default-colorful',
    url: 'https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?w=800&q=80',
    photographer: 'Unsplash',
  },
};

// Hero image for Costa Blanca hub
export const heroImage = {
  url: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1920&q=80',
  photographer: 'Unsplash',
};

export function getDestinationImage(slug: string): string {
  return destinationImages[slug]?.url || destinationImages['albir'].url;
}

// Function to fetch image from Unsplash API (for future dynamic use)
export async function fetchUnsplashImage(query: string): Promise<string> {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1`,
      {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        },
      }
    );
    const data = await response.json();
    return data.results[0]?.urls?.regular || heroImage.url;
  } catch (error) {
    console.error('Failed to fetch Unsplash image:', error);
    return heroImage.url;
  }
}
