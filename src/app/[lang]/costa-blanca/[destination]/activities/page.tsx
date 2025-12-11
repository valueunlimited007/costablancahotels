import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Locale, locales } from '@/lib/i18n';
import { destinations, getDestination } from '@/data/destinations';
import { getActivitiesByDestination, activityCategories, Activity } from '@/data/activities';

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
    sv: `Aktiviteter i ${trans.name} - Saker att göra`,
    en: `Things to Do in ${trans.name} - Activities & Attractions`,
    de: `Aktivitäten in ${trans.name} - Sehenswürdigkeiten`,
    no: `Aktiviteter i ${trans.name} - Ting å gjøre`,
  };

  const descriptions: Record<Locale, string> = {
    sv: `Upptäck de bästa aktiviteterna i ${trans.name}. Stränder, sevärdheter, natur och nöjen för hela familjen.`,
    en: `Discover the best things to do in ${trans.name}. Beaches, attractions, nature and entertainment for the whole family.`,
    de: `Entdecken Sie die besten Aktivitäten in ${trans.name}. Strände, Sehenswürdigkeiten, Natur und Unterhaltung für die ganze Familie.`,
    no: `Oppdag de beste aktivitetene i ${trans.name}. Strender, severdigheter, natur og underholdning for hele familien.`,
  };

  return {
    title: titles[lang],
    description: descriptions[lang],
    alternates: {
      canonical: `https://costablancahotels.com/${lang}/costa-blanca/${slug}/activities`,
      languages: {
        sv: `/sv/costa-blanca/${slug}/activities`,
        en: `/en/costa-blanca/${slug}/activities`,
        de: `/de/costa-blanca/${slug}/activities`,
        no: `/no/costa-blanca/${slug}/activities`,
      },
    },
  };
}

function ActivityCard({ activity, locale }: { activity: Activity; locale: Locale }) {
  const trans = activity.translations[locale];
  const categoryInfo = activityCategories[locale][activity.category];

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <span className="text-2xl mr-2">{categoryInfo.icon}</span>
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              {categoryInfo.name}
            </span>
          </div>
          {activity.isFree ? (
            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
              {locale === 'sv' ? 'Gratis' : locale === 'de' ? 'Kostenlos' : locale === 'no' ? 'Gratis' : 'Free'}
            </span>
          ) : (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
              {locale === 'sv' ? 'Inträde' : locale === 'de' ? 'Eintritt' : locale === 'no' ? 'Inngang' : 'Entry fee'}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.name}</h3>

        {activity.duration && (
          <p className="text-sm text-gray-500 mb-3">
            <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {activity.duration}
          </p>
        )}

        <p className="text-gray-600 mb-4">{trans.description}</p>

        {trans.highlights && trans.highlights.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {trans.highlights.map((highlight, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        )}

        {trans.tip && (
          <div className="flex items-start bg-amber-50 rounded-lg p-3">
            <svg className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span className="text-sm text-amber-800">{trans.tip}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default async function ActivitiesPage({ params }: PageProps) {
  const { lang, destination: slug } = await params;
  const destination = getDestination(slug);

  if (!destination) {
    notFound();
  }

  if (lang === 'sv' && destination.externalSvSite) {
    notFound();
  }

  const trans = destination.translations[lang];
  const activities = getActivitiesByDestination(slug);

  const titles: Record<Locale, { main: string; noResults: string; back: string }> = {
    sv: {
      main: `Aktiviteter i ${trans.name}`,
      noResults: 'Vi håller på att lägga till aktiviteter för denna destination.',
      back: `Tillbaka till ${trans.name}`,
    },
    en: {
      main: `Things to Do in ${trans.name}`,
      noResults: 'We are adding activities for this destination.',
      back: `Back to ${trans.name}`,
    },
    de: {
      main: `Aktivitäten in ${trans.name}`,
      noResults: 'Wir fügen Aktivitäten für dieses Reiseziel hinzu.',
      back: `Zurück zu ${trans.name}`,
    },
    no: {
      main: `Aktiviteter i ${trans.name}`,
      noResults: 'Vi legger til aktiviteter for denne destinasjonen.',
      back: `Tilbake til ${trans.name}`,
    },
  };

  const t = titles[lang];

  // Schema.org
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: t.main,
    numberOfItems: activities.length,
    itemListElement: activities.map((a, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'TouristAttraction',
        name: a.name,
        description: a.translations[lang].description,
        isAccessibleForFree: a.isFree,
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
                {lang === 'sv' ? 'Aktiviteter' : lang === 'de' ? 'Aktivitäten' : lang === 'no' ? 'Aktiviteter' : 'Activities'}
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
              ? `Stränder, natur, kultur och nöjen - upptäck allt ${trans.name} har att erbjuda.`
              : lang === 'de'
                ? `Strände, Natur, Kultur und Unterhaltung - entdecken Sie alles, was ${trans.name} zu bieten hat.`
                : lang === 'no'
                  ? `Strender, natur, kultur og underholdning - oppdag alt ${trans.name} har å tilby.`
                  : `Beaches, nature, culture and entertainment - discover everything ${trans.name} has to offer.`}
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {activities.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activities.map((activity) => (
                <ActivityCard key={activity.id} activity={activity} locale={lang} />
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
