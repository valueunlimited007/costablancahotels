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

  // Practical info pages for each language
  for (const locale of locales) {
    routes.push({
      url: `${BASE_URL}/${locale}/practical-info`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          sv: `${BASE_URL}/sv/practical-info`,
          en: `${BASE_URL}/en/practical-info`,
          de: `${BASE_URL}/de/practical-info`,
          no: `${BASE_URL}/no/practical-info`,
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
      const restaurantAlternates: Record<string, string> = {};
      const activitiesAlternates: Record<string, string> = {};

      for (const altLocale of localesForDestination) {
        alternateLanguages[altLocale] = `${BASE_URL}/${altLocale}/costa-blanca/${destination.slug}`;
        restaurantAlternates[altLocale] = `${BASE_URL}/${altLocale}/costa-blanca/${destination.slug}/restaurants`;
        activitiesAlternates[altLocale] = `${BASE_URL}/${altLocale}/costa-blanca/${destination.slug}/activities`;
      }

      // Main destination page
      routes.push({
        url: `${BASE_URL}/${locale}/costa-blanca/${destination.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: destination.featured ? 0.9 : 0.7,
        alternates: {
          languages: alternateLanguages,
        },
      });

      // Restaurant page for destination
      routes.push({
        url: `${BASE_URL}/${locale}/costa-blanca/${destination.slug}/restaurants`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.6,
        alternates: {
          languages: restaurantAlternates,
        },
      });

      // Activities page for destination
      routes.push({
        url: `${BASE_URL}/${locale}/costa-blanca/${destination.slug}/activities`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.6,
        alternates: {
          languages: activitiesAlternates,
        },
      });
    }
  }

  return routes;
}
