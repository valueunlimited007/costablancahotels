import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Locale, locales } from '@/lib/i18n';
import { destinations, getDestination } from '@/data/destinations';
import { getRestaurantsByDestination, categoryNames, Restaurant } from '@/data/restaurants';

interface PageProps {
  params: Promise<{
    lang: Locale;
    destination: string;
  }>;
}

export async function generateStaticParams() {
  const params: { lang: Locale; destination: string }[] = [];

  for (const locale of locales) {
    for (const dest of destinations) {
      if (locale === 'sv' && dest.externalSvSite) continue;
      params.push({ lang: locale, destination: dest.slug });
    }
  }

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, destination: slug } = await params;
  const destination = getDestination(slug);

  if (!destination) {
    return { title: 'Not Found' };
  }

  const trans = destination.translations[lang];

  const titles: Record<Locale, string> = {
    sv: `Restauranger i ${trans.name} - Var ska man äta?`,
    en: `Restaurants in ${trans.name} - Where to Eat`,
    de: `Restaurants in ${trans.name} - Wo essen?`,
    no: `Restauranter i ${trans.name} - Hvor spise?`,
  };

  const descriptions: Record<Locale, string> = {
    sv: `Upptäck de bästa restaurangerna i ${trans.name}. Tapas, fisk, fine dining och budgetvänliga alternativ.`,
    en: `Discover the best restaurants in ${trans.name}. Tapas, seafood, fine dining and budget-friendly options.`,
    de: `Entdecken Sie die besten Restaurants in ${trans.name}. Tapas, Meeresfrüchte, Fine Dining und preiswerte Optionen.`,
    no: `Oppdag de beste restaurantene i ${trans.name}. Tapas, sjømat, fine dining og budsjettvennlige alternativer.`,
  };

  return {
    title: titles[lang],
    description: descriptions[lang],
    alternates: {
      canonical: `https://costablancahotels.com/${lang}/costa-blanca/${slug}/restaurants`,
      languages: {
        sv: `/sv/costa-blanca/${slug}/restaurants`,
        en: `/en/costa-blanca/${slug}/restaurants`,
        de: `/de/costa-blanca/${slug}/restaurants`,
        no: `/no/costa-blanca/${slug}/restaurants`,
      },
    },
  };
}

function PriceRange({ level }: { level: 1 | 2 | 3 }) {
  return (
    <span className="text-gray-600">
      {'€'.repeat(level)}
      <span className="text-gray-300">{'€'.repeat(3 - level)}</span>
    </span>
  );
}

function StarRating({ rating }: { rating?: number }) {
  if (!rating) return null;

  return (
    <div className="flex items-center">
      <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
      </svg>
      <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
    </div>
  );
}

function RestaurantCard({ restaurant, locale }: { restaurant: Restaurant; locale: Locale }) {
  const trans = restaurant.translations[locale];
  const categoryName = categoryNames[locale][restaurant.category];

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{restaurant.name}</h3>
          <PriceRange level={restaurant.priceRange} />
        </div>

        <div className="flex items-center gap-3 mb-3">
          <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
            {categoryName}
          </span>
          <StarRating rating={restaurant.rating} />
        </div>

        <p className="text-gray-600 mb-4">{trans.description}</p>

        {trans.specialty && (
          <div className="mb-3">
            <span className="text-sm font-medium text-gray-700">
              {locale === 'sv' ? 'Specialitet: ' : locale === 'de' ? 'Spezialität: ' : locale === 'no' ? 'Spesialitet: ' : 'Specialty: '}
            </span>
            <span className="text-sm text-gray-600">{trans.specialty}</span>
          </div>
        )}

        {trans.tip && (
          <div className="flex items-start bg-amber-50 rounded-lg p-3">
            <svg className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm text-amber-800">{trans.tip}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default async function RestaurantsPage({ params }: PageProps) {
  const { lang, destination: slug } = await params;
  const destination = getDestination(slug);

  if (!destination) {
    notFound();
  }

  if (lang === 'sv' && destination.externalSvSite) {
    notFound();
  }

  const trans = destination.translations[lang];
  const restaurants = getRestaurantsByDestination(slug);

  const titles: Record<Locale, { main: string; noResults: string; back: string }> = {
    sv: {
      main: `Restauranger i ${trans.name}`,
      noResults: 'Vi håller på att lägga till restauranger för denna destination.',
      back: `Tillbaka till ${trans.name}`,
    },
    en: {
      main: `Restaurants in ${trans.name}`,
      noResults: 'We are adding restaurants for this destination.',
      back: `Back to ${trans.name}`,
    },
    de: {
      main: `Restaurants in ${trans.name}`,
      noResults: 'Wir fügen Restaurants für dieses Reiseziel hinzu.',
      back: `Zurück zu ${trans.name}`,
    },
    no: {
      main: `Restauranter i ${trans.name}`,
      noResults: 'Vi legger til restauranter for denne destinasjonen.',
      back: `Tilbake til ${trans.name}`,
    },
  };

  const t = titles[lang];

  // Schema.org for restaurants
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: t.main,
    numberOfItems: restaurants.length,
    itemListElement: restaurants.map((r, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Restaurant',
        name: r.name,
        description: r.translations[lang].description,
        priceRange: '€'.repeat(r.priceRange),
        aggregateRating: r.rating
          ? {
              '@type': 'AggregateRating',
              ratingValue: r.rating,
              bestRating: 5,
            }
          : undefined,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href={`/${lang}/costa-blanca`} className="text-gray-500 hover:text-primary">
                  Costa Blanca
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href={`/${lang}/costa-blanca/${slug}`} className="text-gray-500 hover:text-primary">
                  {trans.name}
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium">
                {lang === 'sv' ? 'Restauranger' : lang === 'de' ? 'Restaurants' : lang === 'no' ? 'Restauranter' : 'Restaurants'}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="py-12 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.main}</h1>
          <p className="text-xl text-gray-600">
            {lang === 'sv'
              ? `Upptäck var du ska äta i ${trans.name} - från lokala tapas till fine dining.`
              : lang === 'de'
                ? `Entdecken Sie, wo Sie in ${trans.name} essen können - von lokalen Tapas bis Fine Dining.`
                : lang === 'no'
                  ? `Oppdag hvor du skal spise i ${trans.name} - fra lokale tapas til fine dining.`
                  : `Discover where to eat in ${trans.name} - from local tapas to fine dining.`}
          </p>
        </div>
      </section>

      {/* Restaurant Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {restaurants.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} locale={lang} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <p className="text-gray-500">{t.noResults}</p>
            </div>
          )}
        </div>
      </section>

      {/* Back Link */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Link
            href={`/${lang}/costa-blanca/${slug}`}
            className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t.back}
          </Link>
        </div>
      </section>
    </>
  );
}
