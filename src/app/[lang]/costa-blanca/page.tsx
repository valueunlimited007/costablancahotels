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

  // SEO-optimized titles per language
  const titles: Record<Locale, string> = {
    sv: 'Costa Blanca Hotels - Hitta & Boka Hotell i Spanien',
    en: 'Costa Blanca Hotels - Find & Book Hotels in Spain',
    de: 'Costa Blanca Hotels - Hotels in Spanien finden & buchen',
    no: 'Costa Blanca Hotels - Finn & Bestill Hoteller i Spania',
  };

  // SEO-optimized descriptions per language
  const descriptions: Record<Locale, string> = {
    sv: 'Upptäck Costa Blanca! Jämför och boka hotell i Benidorm, Alicante, Torrevieja och 15 andra destinationer. 300+ soldagar, fantastiska stränder.',
    en: 'Discover Costa Blanca! Compare and book hotels in Benidorm, Alicante, Torrevieja and 15 other destinations. 300+ sunny days, amazing beaches.',
    de: 'Entdecken Sie Costa Blanca! Vergleichen und buchen Sie Hotels in Benidorm, Alicante, Torrevieja und 15 weiteren Reisezielen. 300+ Sonnentage.',
    no: 'Oppdag Costa Blanca! Sammenlign og bestill hoteller i Benidorm, Alicante, Torrevieja og 15 andre destinasjoner. 300+ soldager, fantastiske strender.',
  };

  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `https://costablancahotels.com/${locale}/costa-blanca`,
      languages: {
        sv: '/sv/costa-blanca',
        en: '/en/costa-blanca',
        de: '/de/costa-blanca',
        no: '/no/costa-blanca',
        'x-default': '/sv/costa-blanca',
      },
    },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      url: `https://costablancahotels.com/${locale}/costa-blanca`,
      images: [
        {
          url: '/images/heroes/costa-blanca.webp',
          width: 1200,
          height: 630,
          alt: 'Costa Blanca - Spaniens soliga medelhavskust',
        },
      ],
      locale: locale === 'sv' ? 'sv_SE' : locale === 'de' ? 'de_DE' : locale === 'no' ? 'nb_NO' : 'en_GB',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale],
      description: descriptions[locale],
      images: ['/images/heroes/costa-blanca.webp'],
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
