import { Locale, hotelsComDomains } from './i18n';

// CJ Affiliate credentials from database export
const CJ_PID = '101548506';
const CJ_AID = '13920931';

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
