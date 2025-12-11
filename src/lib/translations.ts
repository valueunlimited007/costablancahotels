import { Locale } from './i18n';

export type TranslationKey =
  | 'site.title'
  | 'site.description'
  | 'nav.home'
  | 'nav.destinations'
  | 'nav.hotels'
  | 'nav.practicalInfo'
  | 'nav.about'
  | 'nav.contact'
  | 'hero.title'
  | 'hero.subtitle'
  | 'hero.cta'
  | 'destinations.title'
  | 'destinations.subtitle'
  | 'destinations.viewAll'
  | 'destinations.featured'
  | 'hotel.bookNow'
  | 'hotel.viewHotels'
  | 'hotel.searchHotels'
  | 'hotel.perNight'
  | 'hotel.rating'
  | 'footer.rights'
  | 'footer.privacy'
  | 'footer.terms'
  | 'footer.cookies';

const translations: Record<Locale, Record<TranslationKey, string>> = {
  sv: {
    'site.title': 'Costa Blanca Hotels',
    'site.description': 'Din guide till Costa Blanca - Upptäck de bästa hotellen, stränderna och upplevelserna längs Spaniens soliga medelhavskust.',
    'nav.home': 'Hem',
    'nav.destinations': 'Destinationer',
    'nav.hotels': 'Hotell',
    'nav.practicalInfo': 'Praktisk info',
    'nav.about': 'Om oss',
    'nav.contact': 'Kontakt',
    'hero.title': 'Välkommen till Costa Blanca',
    'hero.subtitle': 'Upptäck Spaniens vackraste medelhavskust med över 300 soldagar om året',
    'hero.cta': 'Utforska destinationer',
    'destinations.title': 'Populära destinationer',
    'destinations.subtitle': 'Från livliga Benidorm till charmiga Altea - hitta din perfekta semester',
    'destinations.viewAll': 'Se alla destinationer',
    'destinations.featured': 'Utvald',
    'hotel.bookNow': 'Boka nu',
    'hotel.viewHotels': 'Se hotell',
    'hotel.searchHotels': 'Sök hotell',
    'hotel.perNight': '/natt',
    'hotel.rating': 'Betyg',
    'footer.rights': 'Alla rättigheter förbehållna',
    'footer.privacy': 'Integritetspolicy',
    'footer.terms': 'Villkor',
    'footer.cookies': 'Cookies',
  },
  en: {
    'site.title': 'Costa Blanca Hotels',
    'site.description': 'Your guide to Costa Blanca - Discover the best hotels, beaches, and experiences along Spain\'s sunny Mediterranean coast.',
    'nav.home': 'Home',
    'nav.destinations': 'Destinations',
    'nav.hotels': 'Hotels',
    'nav.practicalInfo': 'Practical Info',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.title': 'Welcome to Costa Blanca',
    'hero.subtitle': 'Discover Spain\'s most beautiful Mediterranean coast with over 300 days of sunshine',
    'hero.cta': 'Explore destinations',
    'destinations.title': 'Popular destinations',
    'destinations.subtitle': 'From vibrant Benidorm to charming Altea - find your perfect holiday',
    'destinations.viewAll': 'View all destinations',
    'destinations.featured': 'Featured',
    'hotel.bookNow': 'Book now',
    'hotel.viewHotels': 'View hotels',
    'hotel.searchHotels': 'Search hotels',
    'hotel.perNight': '/night',
    'hotel.rating': 'Rating',
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms',
    'footer.cookies': 'Cookies',
  },
  de: {
    'site.title': 'Costa Blanca Hotels',
    'site.description': 'Ihr Reiseführer für die Costa Blanca - Entdecken Sie die besten Hotels, Strände und Erlebnisse an Spaniens sonniger Mittelmeerküste.',
    'nav.home': 'Startseite',
    'nav.destinations': 'Reiseziele',
    'nav.hotels': 'Hotels',
    'nav.practicalInfo': 'Praktische Infos',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',
    'hero.title': 'Willkommen an der Costa Blanca',
    'hero.subtitle': 'Entdecken Sie Spaniens schönste Mittelmeerküste mit über 300 Sonnentagen',
    'hero.cta': 'Reiseziele erkunden',
    'destinations.title': 'Beliebte Reiseziele',
    'destinations.subtitle': 'Vom lebhaften Benidorm bis zum charmanten Altea - finden Sie Ihren perfekten Urlaub',
    'destinations.viewAll': 'Alle Reiseziele anzeigen',
    'destinations.featured': 'Empfohlen',
    'hotel.bookNow': 'Jetzt buchen',
    'hotel.viewHotels': 'Hotels anzeigen',
    'hotel.searchHotels': 'Hotels suchen',
    'hotel.perNight': '/Nacht',
    'hotel.rating': 'Bewertung',
    'footer.rights': 'Alle Rechte vorbehalten',
    'footer.privacy': 'Datenschutz',
    'footer.terms': 'AGB',
    'footer.cookies': 'Cookies',
  },
  no: {
    'site.title': 'Costa Blanca Hotels',
    'site.description': 'Din guide til Costa Blanca - Oppdag de beste hotellene, strendene og opplevelsene langs Spanias solfylte middelhavskyst.',
    'nav.home': 'Hjem',
    'nav.destinations': 'Destinasjoner',
    'nav.hotels': 'Hoteller',
    'nav.practicalInfo': 'Praktisk info',
    'nav.about': 'Om oss',
    'nav.contact': 'Kontakt',
    'hero.title': 'Velkommen til Costa Blanca',
    'hero.subtitle': 'Oppdag Spanias vakreste middelhavskyst med over 300 soldager',
    'hero.cta': 'Utforsk destinasjoner',
    'destinations.title': 'Populære destinasjoner',
    'destinations.subtitle': 'Fra livlige Benidorm til sjarmerende Altea - finn din perfekte ferie',
    'destinations.viewAll': 'Se alle destinasjoner',
    'destinations.featured': 'Utvalgt',
    'hotel.bookNow': 'Bestill nå',
    'hotel.viewHotels': 'Se hoteller',
    'hotel.searchHotels': 'Søk hoteller',
    'hotel.perNight': '/natt',
    'hotel.rating': 'Vurdering',
    'footer.rights': 'Alle rettigheter forbeholdt',
    'footer.privacy': 'Personvern',
    'footer.terms': 'Vilkår',
    'footer.cookies': 'Informasjonskapsler',
  },
};

export function t(locale: Locale, key: TranslationKey): string {
  return translations[locale][key] || translations.en[key] || key;
}

export function getTranslations(locale: Locale) {
  return translations[locale];
}
