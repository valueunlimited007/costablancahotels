import { Metadata } from 'next';
import Link from 'next/link';
import { locales, isValidLocale, type Locale } from '@/lib/i18n';
import { getAllDestinations, getFeaturedDestinations } from '@/data/destinations';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isValidLocale(lang) ? lang : 'sv';

  const titles: Record<Locale, string> = {
    sv: 'Sajtkarta',
    en: 'Sitemap',
    de: 'Seitenübersicht',
    no: 'Nettstedskart',
  };

  const descriptions: Record<Locale, string> = {
    sv: 'Komplett översikt över alla sidor på Costa Blanca Hotels',
    en: 'Complete overview of all pages on Costa Blanca Hotels',
    de: 'Vollständige Übersicht aller Seiten auf Costa Blanca Hotels',
    no: 'Komplett oversikt over alle sider på Costa Blanca Hotels',
  };

  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `https://costablancahotels.com/${locale}/sitemap`,
      languages: {
        sv: '/sv/sitemap',
        en: '/en/sitemap',
        de: '/de/sitemap',
        no: '/no/sitemap',
      },
    },
  };
}

export default async function SitemapPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isValidLocale(lang) ? lang : 'sv';

  const featuredDestinations = getFeaturedDestinations();
  const allDestinations = getAllDestinations();
  const secondaryDestinations = allDestinations.filter((d) => !d.featured);

  const titles: Record<Locale, { main: string; featured: string; all: string; pages: string }> = {
    sv: {
      main: 'Sajtkarta',
      featured: 'Populära destinationer',
      all: 'Alla destinationer',
      pages: 'Övriga sidor',
    },
    en: {
      main: 'Sitemap',
      featured: 'Featured Destinations',
      all: 'All Destinations',
      pages: 'Other Pages',
    },
    de: {
      main: 'Seitenübersicht',
      featured: 'Beliebte Reiseziele',
      all: 'Alle Reiseziele',
      pages: 'Weitere Seiten',
    },
    no: {
      main: 'Nettstedskart',
      featured: 'Populære destinasjoner',
      all: 'Alle destinasjoner',
      pages: 'Andre sider',
    },
  };

  const t = titles[locale];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">{t.main}</h1>

      {/* Main Pages */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
          {t.pages}
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href={`/${locale}/costa-blanca`}
              className="text-primary hover:text-primary-dark hover:underline"
            >
              Costa Blanca - {locale === 'sv' ? 'Startsida' : locale === 'de' ? 'Startseite' : 'Home'}
            </Link>
          </li>
        </ul>
      </section>

      {/* Featured Destinations */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
          {t.featured}
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {featuredDestinations.map((destination) => {
            // Skip destinations with external Swedish sites for Swedish locale
            if (locale === 'sv' && destination.externalSvSite) {
              return (
                <li key={destination.slug}>
                  <a
                    href={destination.externalSvSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark hover:underline inline-flex items-center"
                  >
                    {destination.translations[locale].name}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              );
            }

            return (
              <li key={destination.slug}>
                <Link
                  href={`/${locale}/costa-blanca/${destination.slug}`}
                  className="text-primary hover:text-primary-dark hover:underline"
                >
                  {destination.translations[locale].name}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* All Destinations */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
          {t.all}
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {secondaryDestinations.map((destination) => (
            <li key={destination.slug}>
              <Link
                href={`/${locale}/costa-blanca/${destination.slug}`}
                className="text-primary hover:text-primary-dark hover:underline"
              >
                {destination.translations[locale].name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Language versions */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
          {locale === 'sv' ? 'Språkversioner' : locale === 'de' ? 'Sprachversionen' : locale === 'no' ? 'Språkversjoner' : 'Language Versions'}
        </h2>
        <ul className="flex flex-wrap gap-4">
          <li>
            <Link href="/sv/costa-blanca" className="text-primary hover:underline">
              Svenska
            </Link>
          </li>
          <li>
            <Link href="/en/costa-blanca" className="text-primary hover:underline">
              English
            </Link>
          </li>
          <li>
            <Link href="/de/costa-blanca" className="text-primary hover:underline">
              Deutsch
            </Link>
          </li>
          <li>
            <Link href="/no/costa-blanca" className="text-primary hover:underline">
              Norsk
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
