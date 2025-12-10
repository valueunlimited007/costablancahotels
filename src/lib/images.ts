// Local image paths - add your images to /public/images/

// Destination card images (800x600 recommended)
export const destinationImages: Record<string, string> = {
  benidorm: '/images/destinations/benidorm.jpg',
  javea: '/images/destinations/javea.jpg',
  'la-zenia': '/images/destinations/la-zenia.jpg',
  alicante: '/images/destinations/alicante.jpg',
  calpe: '/images/destinations/calpe.jpg',
  altea: '/images/destinations/altea.jpg',
  torrevieja: '/images/destinations/torrevieja.jpg',
  denia: '/images/destinations/denia.jpg',
  albir: '/images/destinations/albir.jpg',
  benissa: '/images/destinations/benissa.jpg',
  'cabo-roig': '/images/destinations/cabo-roig.jpg',
  campoamor: '/images/destinations/campoamor.jpg',
  'ciudad-quesada': '/images/destinations/ciudad-quesada.jpg',
  'guardamar-del-segura': '/images/destinations/guardamar-del-segura.jpg',
  'la-manga': '/images/destinations/la-manga.jpg',
  'playa-flamenca': '/images/destinations/playa-flamenca.jpg',
  'santa-pola': '/images/destinations/santa-pola.jpg',
  villajoyosa: '/images/destinations/villajoyosa.jpg',
};

// Hero images (1920x1080 recommended)
export const heroImages = {
  costaBlanca: '/images/heroes/costa-blanca.jpg',
  benidorm: '/images/heroes/benidorm.jpg',
  javea: '/images/heroes/javea.jpg',
  laZenia: '/images/heroes/la-zenia.jpg',
  alicante: '/images/heroes/alicante.jpg',
  calpe: '/images/heroes/calpe.jpg',
  altea: '/images/heroes/altea.jpg',
  torrevieja: '/images/heroes/torrevieja.jpg',
};

// Placeholder image for missing images
const PLACEHOLDER = 'https://placehold.co/800x600/0891b2/white?text=Costa+Blanca';
const HERO_PLACEHOLDER = 'https://placehold.co/1920x1080/0891b2/white?text=Costa+Blanca';

export function getDestinationImage(slug: string): string {
  return destinationImages[slug] || PLACEHOLDER;
}

export function getHeroImage(destination?: string): string {
  if (!destination) return heroImages.costaBlanca || HERO_PLACEHOLDER;

  // Check for specific hero images first
  const heroKey = destination.replace(/-/g, '') as keyof typeof heroImages;
  if (destination === 'la-zenia' && heroImages.laZenia) return heroImages.laZenia;
  if (heroImages[heroKey as keyof typeof heroImages]) {
    return heroImages[heroKey as keyof typeof heroImages];
  }

  // Fall back to destination card image
  return destinationImages[destination] || HERO_PLACEHOLDER;
}
