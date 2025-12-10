import { Locale, hotelsComDomains, cjAffiliateAids } from './i18n';

const CJ_PID = process.env.NEXT_PUBLIC_CJ_PID || '101611980';
const CJ_CID = process.env.NEXT_PUBLIC_CJ_CID || '7427884';

interface AffiliateParams {
  locale: Locale;
  destination?: string;
  hotelSlug?: string;
  position?: string;
  searchQuery?: string;
}

/**
 * Generate a CJ Affiliate tracking link for Hotels.com
 *
 * SubID format: site:costablancahotels|lang:sv|dest:benidorm|pos:hero
 */
export function generateHotelsComLink(params: AffiliateParams): string {
  const { locale, destination, hotelSlug, position, searchQuery } = params;

  const aid = cjAffiliateAids[locale];
  const domain = hotelsComDomains[locale];

  // Build SubID for tracking
  const subIdParts = [
    'site:costablancahotels',
    `lang:${locale}`,
  ];

  if (destination) {
    subIdParts.push(`dest:${destination}`);
  }

  if (hotelSlug) {
    subIdParts.push(`hotel:${hotelSlug}`);
  }

  if (position) {
    subIdParts.push(`pos:${position}`);
  }

  const subId = subIdParts.join('|');

  // Build the destination URL on Hotels.com
  let destinationUrl = `https://${domain}`;

  if (searchQuery) {
    // Search URL
    destinationUrl += `/search.do?q-destination=${encodeURIComponent(searchQuery)}&q-check-in=&q-check-out=&q-rooms=1&q-room-0-adults=2&q-room-0-children=0`;
  } else if (destination) {
    // Destination search
    const destinationName = destination.replace(/-/g, ' ');
    destinationUrl += `/search.do?q-destination=${encodeURIComponent(destinationName + ', Spain')}&q-check-in=&q-check-out=&q-rooms=1&q-room-0-adults=2&q-room-0-children=0`;
  }

  // Build CJ tracking URL
  const cjUrl = new URL('https://www.anrdoezrs.net/links/' + CJ_PID + '/type/dlg/' + aid);
  cjUrl.searchParams.set('sid', subId);
  cjUrl.searchParams.set('url', destinationUrl);

  return cjUrl.toString();
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
