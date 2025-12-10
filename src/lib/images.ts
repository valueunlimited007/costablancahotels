// Working image URLs from Unsplash (free to use)

// Destination card images (800x600)
export const destinationImages: Record<string, string> = {
  // Featured destinations
  benidorm: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80', // Benidorm skyline
  javea: 'https://images.unsplash.com/photo-1562883676-8c7feb83f09b?w=800&q=80', // Mediterranean cove
  'la-zenia': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80', // Beach
  alicante: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80', // Alicante castle
  calpe: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80', // Calpe rock
  altea: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80', // White village
  torrevieja: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=800&q=80', // Salt lake pink
  denia: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80', // Beach castle

  // Secondary destinations
  albir: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80', // Lighthouse coast
  benissa: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?w=800&q=80', // Hidden cove
  'cabo-roig': 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80', // Rocky beach
  campoamor: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80', // Golf course
  'ciudad-quesada': 'https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?w=800&q=80', // Residential area
  'guardamar-del-segura': 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80', // Pine forest beach
  'la-manga': 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800&q=80', // Sandbar
  'playa-flamenca': 'https://images.unsplash.com/photo-1520942702018-0862200e6873?w=800&q=80', // Family beach
  'santa-pola': 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=800&q=80', // Fishing boats
  villajoyosa: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', // Colorful houses
};

// Hero images (1920x1080)
export const heroImages = {
  costaBlanca: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1920&q=80',
  benidorm: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1920&q=80',
  javea: 'https://images.unsplash.com/photo-1562883676-8c7feb83f09b?w=1920&q=80',
  laZenia: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80',
  alicante: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1920&q=80',
  calpe: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1920&q=80',
  altea: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1920&q=80',
  torrevieja: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1920&q=80',
  denia: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=80',
};

export function getDestinationImage(slug: string): string {
  return destinationImages[slug] || destinationImages['benidorm'];
}

export function getHeroImage(destination?: string): string {
  if (!destination) return heroImages.costaBlanca;

  // Check for specific hero images
  switch (destination) {
    case 'benidorm':
      return heroImages.benidorm;
    case 'javea':
      return heroImages.javea;
    case 'la-zenia':
      return heroImages.laZenia;
    case 'alicante':
      return heroImages.alicante;
    case 'calpe':
      return heroImages.calpe;
    case 'altea':
      return heroImages.altea;
    case 'torrevieja':
      return heroImages.torrevieja;
    case 'denia':
      return heroImages.denia;
    default:
      // Fall back to destination card image
      return destinationImages[destination] || heroImages.costaBlanca;
  }
}
