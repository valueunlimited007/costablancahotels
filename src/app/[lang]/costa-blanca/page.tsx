import { Metadata } from 'next';
import { locales, isValidLocale, type Locale } from '@/lib/i18n';
import { t } from '@/lib/translations';
import { getFeaturedDestinations, getAllDestinations } from '@/data/destinations';
import { Hero } from '@/components/Hero';
import { DestinationsGrid } from '@/components/DestinationsGrid';

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

  return {
    title: t(locale, 'site.title'),
    description: t(locale, 'site.description'),
    alternates: {
      canonical: `https://costablancahotels.com/${locale}/costa-blanca`,
      languages: {
        'sv': '/sv/costa-blanca',
        'en': '/en/costa-blanca',
        'de': '/de/costa-blanca',
        'no': '/no/costa-blanca',
        'x-default': '/sv/costa-blanca',
      },
    },
  };
}

export default async function CostaBlancaPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isValidLocale(lang) ? lang : 'sv';

  const featuredDestinations = getFeaturedDestinations();
  const allDestinations = getAllDestinations();

  return (
    <>
      <Hero locale={locale} />

      {/* Featured Destinations */}
      <section id="destinations">
        <DestinationsGrid
          destinations={featuredDestinations}
          locale={locale}
          showTitle={true}
        />
      </section>

      {/* All Destinations */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {t(locale, 'destinations.viewAll')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allDestinations
              .filter((d) => !d.featured)
              .map((destination) => {
                const trans = destination.translations[locale];
                return (
                  <a
                    key={destination.slug}
                    href={`/${locale}/costa-blanca/${destination.slug}`}
                    className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-[var(--primary-light)]/20 rounded-full flex items-center justify-center mr-4">
                      <svg
                        className="w-6 h-6 text-[var(--primary)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {trans.name}
                      </h3>
                      <p className="text-sm text-gray-500 line-clamp-1">
                        {trans.shortDescription}
                      </p>
                    </div>
                  </a>
                );
              })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--primary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            {locale === 'sv'
              ? 'Redo att boka din semester?'
              : 'Ready to book your holiday?'}
          </h2>
          <p className="mt-4 text-lg text-white/90">
            {locale === 'sv'
              ? 'Hitta det perfekta hotellet för din Costa Blanca-semester'
              : 'Find the perfect hotel for your Costa Blanca holiday'}
          </p>
          <a
            href={`/${locale}/hotels`}
            className="mt-8 inline-flex items-center px-8 py-4 bg-white text-[var(--primary)] font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            {t(locale, 'hotel.viewHotels')}
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
