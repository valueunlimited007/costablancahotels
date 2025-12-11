import { Locale, hotelsComDomains } from './i18n';

// CJ Affiliate credentials from database export
const CJ_PID = '101548506';
const CJ_AID = '13920931';

// VRBO Advertiser IDs per region (from CJ)
const vrboAdvertiserIds: Record<string, string> = {
  spain: '4453383',    // VRBO Spain - for searches in Spain
  nordics: '4912245',  // VRBO Nordics - for Nordic visitors
  uk: '2691614',       // VRBO UK
};

// VRBO domains per locale
const vrboDomains: Record<Locale, string> = {
  sv: 'www.vrbo.com/sv-se',  // Swedish interface
  en: 'www.vrbo.com/en-gb',  // English UK
  de: 'www.vrbo.com/de-de',  // German
  no: 'www.vrbo.com/no-no',  // Norwegian
};

// Map locale to VRBO advertiser
const vrboLocaleToAdvertiser: Record<Locale, string> = {
  sv: vrboAdvertiserIds.nordics,
  no: vrboAdvertiserIds.nordics,
  en: vrboAdvertiserIds.uk,
  de: vrboAdvertiserIds.spain,
};

interface AffiliateParams {
  locale: Locale;
  destination?: string;
  hotelSlug?: string;
  position?: string;
  searchQuery?: string;
}

/**
 * Generate a CJ Affiliate tracking link for Hotels.com
 * Format: https://www.anrdoezrs.net/click-{pid}-{aid}?url={encoded_url}&sid={subid}
 */
export function generateHotelsComLink(params: AffiliateParams): string {
  const { locale, destination, position, searchQuery } = params;

  const domain = hotelsComDomains[locale];

  // Build SubID for tracking: {language}_{destination}_{source}
  const subIdParts: string[] = [locale];
  if (destination) {
    subIdParts.push(destination.replace(/-/g, ''));
  }
  if (position) {
    subIdParts.push(position);
  }
  const subId = subIdParts.join('_');

  // Build the destination URL on Hotels.com
  let destinationUrl = `https://${domain}`;

  if (searchQuery) {
    destinationUrl += `/Hotel-Search?destination=${encodeURIComponent(searchQuery)}`;
  } else if (destination) {
    const destinationName = destination.replace(/-/g, ' ');
    // Capitalize first letter of each word
    const formattedName = destinationName
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    destinationUrl += `/Hotel-Search?destination=${encodeURIComponent(formattedName)}`;
  }

  // Build CJ tracking URL using click format
  const encodedUrl = encodeURIComponent(destinationUrl);
  const cjUrl = `https://www.anrdoezrs.net/click-${CJ_PID}-${CJ_AID}?url=${encodedUrl}&sid=${subId}`;

  return cjUrl;
}

/**
 * Generate a simple Hotels.com search link for a destination
 */
export function getHotelsSearchLink(locale: Locale, destination: string, position?: string): string {
  return generateHotelsComLink({
    locale,
    destination,
    position: position || 'card',
  });
}

/**
 * Generate a CJ Affiliate tracking link for VRBO
 * VRBO offers vacation rentals - apartments, villas, houses
 */
export function generateVrboLink(params: AffiliateParams): string {
  const { locale, destination, position } = params;

  const advertiserId = vrboLocaleToAdvertiser[locale];
  const domain = vrboDomains[locale];

  // Build SubID for tracking
  const subIdParts: string[] = [locale, 'vrbo'];
  if (destination) {
    subIdParts.push(destination.replace(/-/g, ''));
  }
  if (position) {
    subIdParts.push(position);
  }
  const subId = subIdParts.join('_');

  // Build the destination URL on VRBO - use simple format
  let destinationUrl = `https://${domain}`;

  if (destination) {
    // Format: benidorm-valencian-community-spain
    const searchSlug = `${destination}-valencian-community-spain`;
    destinationUrl += `/search/keywords:${searchSlug}`;
  } else {
    destinationUrl += `/search/keywords:costa-blanca-spain`;
  }

  // Build CJ tracking URL - don't double-encode
  const cjUrl = `https://www.anrdoezrs.net/click-${CJ_PID}-${advertiserId}?url=${encodeURIComponent(destinationUrl)}&sid=${subId}`;

  return cjUrl;
}

/**
 * Generate a simple VRBO search link for a destination
 */
export function getVrboSearchLink(locale: Locale, destination: string, position?: string): string {
  return generateVrboLink({
    locale,
    destination,
    position: position || 'card',
  });
}
