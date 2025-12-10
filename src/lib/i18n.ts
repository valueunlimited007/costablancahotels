export const locales = ['sv', 'en', 'de', 'no'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'sv';

export const localeNames: Record<Locale, string> = {
  sv: 'Svenska',
  en: 'English',
  de: 'Deutsch',
  no: 'Norsk',
};

export const localeFlags: Record<Locale, string> = {
  sv: '🇸🇪',
  en: '🇬🇧',
  de: '🇩🇪',
  no: '🇳🇴',
};

// Hotels.com domains per language
export const hotelsComDomains: Record<Locale, string> = {
  sv: 'sv.hotels.com',
  en: 'uk.hotels.com',
  de: 'de.hotels.com',
  no: 'no.hotels.com',
};

// CJ Affiliate AIDs per region
export const cjAffiliateAids: Record<Locale, string> = {
  sv: '5275614',  // Hotels.com Sweden
  en: '5275597',  // Hotels.com UK
  de: '5275606',  // Hotels.com Germany, Austria & Switzerland
  no: '5275619',  // Hotels.com Norway
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getLocaleFromPath(path: string): Locale {
  const segments = path.split('/').filter(Boolean);
  const firstSegment = segments[0];

  if (firstSegment && isValidLocale(firstSegment)) {
    return firstSegment;
  }

  return defaultLocale;
}
