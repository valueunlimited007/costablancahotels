// Image URLs from Lovable project
const LOVABLE_BASE_URL = 'https://5e96b21a-1279-467d-ae4e-1fcd10981949.lovableproject.com';

// Destination card images
export const destinationImages: Record<string, string> = {
  benidorm: `${LOVABLE_BASE_URL}/destinations/benidorm.jpg`,
  javea: `${LOVABLE_BASE_URL}/destinations/javea.jpg`,
  'la-zenia': `${LOVABLE_BASE_URL}/destinations/lazenia.jpg`,
  alicante: `${LOVABLE_BASE_URL}/destinations/alicante.webp`,
  calpe: `${LOVABLE_BASE_URL}/destinations/calpe.jpg`,
  altea: `${LOVABLE_BASE_URL}/destinations/altea.webp`,
  torrevieja: `${LOVABLE_BASE_URL}/destinations/torrevieja.webp`,
  denia: `${LOVABLE_BASE_URL}/destinations/denia.png`,
  albir: `${LOVABLE_BASE_URL}/destinations/albir.webp`,
  benissa: `${LOVABLE_BASE_URL}/destinations/benissa.jpg`,
  'cabo-roig': `${LOVABLE_BASE_URL}/destinations/cabo-roig.jpg`,
  campoamor: `${LOVABLE_BASE_URL}/destinations/campoamor.jpg`,
  'ciudad-quesada': `${LOVABLE_BASE_URL}/destinations/ciudad-quesada.jpg`,
  'guardamar-del-segura': `${LOVABLE_BASE_URL}/destinations/guardamar-del-segura.jpg`,
  'la-manga': `${LOVABLE_BASE_URL}/destinations/la-manga.jpg`,
  'playa-flamenca': `${LOVABLE_BASE_URL}/destinations/playa-flamenca.webp`,
  'santa-pola': `${LOVABLE_BASE_URL}/destinations/santa-pola.jpg`,
  villajoyosa: `${LOVABLE_BASE_URL}/destinations/villajoyosa.jpg`,
};

// Hero images
export const heroImages = {
  costaBlanca: `${LOVABLE_BASE_URL}/src/assets/costa-blanca-hero.webp`,
  benidorm: `${LOVABLE_BASE_URL}/src/assets/benidorm-hero.jpg`,
  javea: `${LOVABLE_BASE_URL}/src/assets/javea-hero.jpg`,
  laZenia: `${LOVABLE_BASE_URL}/src/assets/lazenia-hero.jpg`,
};

// Benidorm attraction images
export const benidormImages = {
  hero: `${LOVABLE_BASE_URL}/src/assets/benidorm-hero.jpg`,
  oldTown: `${LOVABLE_BASE_URL}/assets/benidorm/old-town.jpg`,
  playaLevante: `${LOVABLE_BASE_URL}/assets/benidorm/playa-levante.jpg`,
  playaPoniente: `${LOVABLE_BASE_URL}/assets/benidorm/playa-poniente.jpg`,
  balconMediterraneo: `${LOVABLE_BASE_URL}/assets/benidorm/balcon-mediterraneo.jpg`,
  terraMitica: `${LOVABLE_BASE_URL}/assets/benidorm/terra-mitica.jpg`,
  aqualandia: `${LOVABLE_BASE_URL}/assets/benidorm/aqualandia.jpg`,
  mundomar: `${LOVABLE_BASE_URL}/assets/benidorm/mundomar.jpg`,
  terraNatura: `${LOVABLE_BASE_URL}/assets/benidorm/terra-natura.jpg`,
  market: `${LOVABLE_BASE_URL}/assets/benidorm/market.jpg`,
  cableCar: `${LOVABLE_BASE_URL}/assets/benidorm/cable-car.jpg`,
};

// Javea attraction images
export const javeaImages = {
  hero: `${LOVABLE_BASE_URL}/src/assets/javea-hero.jpg`,
  playaArenal: `${LOVABLE_BASE_URL}/assets/javea/playa-del-arenal.jpg`,
  granadella: `${LOVABLE_BASE_URL}/assets/javea/playa-la-granadella.jpg`,
  caboSanAntonio: `${LOVABLE_BASE_URL}/assets/javea/cabo-san-antonio.jpg`,
  covaTallada: `${LOVABLE_BASE_URL}/assets/javea/la-cova-tallada.jpg`,
  faro: `${LOVABLE_BASE_URL}/assets/javea/faro-de-cabo-de-la-nao.jpg`,
  portixol: `${LOVABLE_BASE_URL}/assets/javea/cala-de-portixol.jpg`,
};

// La Zenia attraction images
export const laZeniaImages = {
  hero: `${LOVABLE_BASE_URL}/src/assets/lazenia-hero.jpg`,
  playaLaZenia: `${LOVABLE_BASE_URL}/assets/la-zenia/playa-la-zenia.jpg`,
  zeniaBoulevard: `${LOVABLE_BASE_URL}/assets/la-zenia/zenia-boulevard.jpg`,
  aquopolis: `${LOVABLE_BASE_URL}/assets/la-zenia/aquopolis.jpg`,
  marinaCaboRoig: `${LOVABLE_BASE_URL}/assets/la-zenia/marina-cabo-roig.jpg`,
  lasSalinas: `${LOVABLE_BASE_URL}/assets/la-zenia/las-salinas.jpg`,
};

export function getDestinationImage(slug: string): string {
  return destinationImages[slug] || destinationImages['benidorm'];
}

export function getHeroImage(destination?: string): string {
  if (!destination) return heroImages.costaBlanca;

  switch (destination) {
    case 'benidorm':
      return heroImages.benidorm;
    case 'javea':
      return heroImages.javea;
    case 'la-zenia':
      return heroImages.laZenia;
    default:
      return destinationImages[destination] || heroImages.costaBlanca;
  }
}
