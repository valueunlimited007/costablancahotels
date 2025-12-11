// Local destination images

// Destination card images
export const destinationImages: Record<string, string> = {
  // Featured destinations
  benidorm: '/images/destinations/benidorm.jpg',
  javea: '/images/destinations/javea.jpg',
  'la-zenia': '/images/destinations/la-zenia.jpg',
  alicante: '/images/destinations/alicante.png',
  calpe: '/images/destinations/calpe.jpg',
  altea: '/images/destinations/altea.webp',
  torrevieja: '/images/destinations/torrevieja.webp',
  denia: '/images/destinations/denia.png',

  // Secondary destinations
  albir: '/images/destinations/albir.webp',
  benissa: '/images/destinations/benissa.jpg',
  'cabo-roig': '/images/destinations/cabo-roig.jpg',
  campoamor: '/images/destinations/campoamor.jpg',
  'ciudad-quesada': '/images/destinations/ciudad-quesada.jpg',
  'guardamar-del-segura': '/images/destinations/guardamar-del-segura.jpg',
  'la-manga': '/images/destinations/la-manga.jpg',
  'playa-flamenca': '/images/destinations/playa-flamenca.webp',
  'santa-pola': '/images/destinations/santa-pola.jpg',
  villajoyosa: '/images/destinations/villajoyosa.jpg',
};

// Hero images
export const heroImages = {
  costaBlanca: '/images/heroes/costa-blanca.webp',
  benidorm: '/images/destinations/benidorm.jpg',
  javea: '/images/destinations/javea.jpg',
  laZenia: '/images/destinations/la-zenia.jpg',
  alicante: '/images/destinations/alicante.png',
  calpe: '/images/destinations/calpe.jpg',
  altea: '/images/destinations/altea.webp',
  torrevieja: '/images/destinations/torrevieja.webp',
  denia: '/images/destinations/denia.png',
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
