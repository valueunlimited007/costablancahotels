import { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n';
import { getAllDestinations } from '@/data/destinations';

const BASE_URL = 'https://costablancahotels.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const destinations = getAllDestinations();
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [];

  // Hub pages for each language
  for (const locale of locales) {
    routes.push({
      url: `${BASE_URL}/${locale}/costa-blanca`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          sv: `${BASE_URL}/sv/costa-blanca`,
          en: `${BASE_URL}/en/costa-blanca`,
          de: `${BASE_URL}/de/costa-blanca`,
          no: `${BASE_URL}/no/costa-blanca`,
        },
      },
    });
  }

  // Destination pages for each language
  for (const destination of destinations) {
    // Skip destinations with external Swedish sites for Swedish locale
    const localesForDestination = destination.externalSvSite
      ? locales.filter((l) => l !== 'sv')
      : locales;

    for (const locale of localesForDestination) {
      const alternateLanguages: Record<string, string> = {};

      for (const altLocale of localesForDestination) {
        alternateLanguages[altLocale] = `${BASE_URL}/${altLocale}/costa-blanca/${destination.slug}`;
      }

      routes.push({
        url: `${BASE_URL}/${locale}/costa-blanca/${destination.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: destination.featured ? 0.9 : 0.7,
        alternates: {
          languages: alternateLanguages,
        },
      });
    }
  }

  return routes;
}
