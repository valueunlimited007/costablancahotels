import { Metadata } from 'next';
import Link from 'next/link';
import { Locale, locales } from '@/lib/i18n';
import {
  transportOptions,
  nationalityTips,
  practicalCategories,
  practicalPageTranslations,
} from '@/data/practical-info';

interface PageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;

  const titles: Record<Locale, string> = {
    sv: 'Praktisk information - Costa Blanca reseguide',
    en: 'Practical Information - Costa Blanca Travel Guide',
    de: 'Praktische Informationen - Costa Blanca Reiseführer',
    no: 'Praktisk informasjon - Costa Blanca reiseguide',
  };

  const descriptions: Record<Locale, string> = {
    sv: 'Allt du behöver veta om Costa Blanca: transport, flyg, tips för svenskar, hälsa, pengar och kommunikation.',
    en: 'Everything you need to know about Costa Blanca: transport, flights, tips for travelers, health, money and communication.',
    de: 'Alles, was Sie über die Costa Blanca wissen müssen: Transport, Flüge, Tipps für Reisende, Gesundheit, Geld und Kommunikation.',
    no: 'Alt du trenger å vite om Costa Blanca: transport, fly, tips for nordmenn, helse, penger og kommunikasjon.',
  };

  return {
    title: titles[lang],
    description: descriptions[lang],
    alternates: {
      canonical: `https://costablancahotels.com/${lang}/practical-info`,
      languages: {
        sv: '/sv/practical-info',
        en: '/en/practical-info',
        de: '/de/practical-info',
        no: '/no/practical-info',
      },
    },
  };
}

function TransportIcon({ type }: { type: string }) {
  const icons: Record<string, string> = {
    airport: '✈️',
    bus: '🚌',
    train: '🚃',
    car: '🚗',
    taxi: '🚕',
    ferry: '⛴️',
  };
  return <span className="text-2xl">{icons[type] || '🚃'}</span>;
}

export default async function PracticalInfoPage({ params }: PageProps) {
  const { lang } = await params;
  const t = practicalPageTranslations[lang];

  // Determine which nationality tip to highlight based on language
  const highlightedNationality = lang === 'sv' ? 'swedish' : lang === 'de' ? 'german' : lang === 'no' ? 'norwegian' : 'british';

  // Schema.org FAQPage for SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: lang === 'sv' ? 'Hur tar jag mig till Costa Blanca?' : 'How do I get to Costa Blanca?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: lang === 'sv'
            ? 'De flesta flyger till Alicante-Elche flygplats (ALC) som har direktflyg från de flesta europeiska städer. Valencia flygplats är ett alternativ för norra Costa Blanca.'
            : 'Most visitors fly to Alicante-Elche Airport (ALC) which has direct flights from most European cities. Valencia Airport is an alternative for northern Costa Blanca.',
        },
      },
      {
        '@type': 'Question',
        name: lang === 'sv' ? 'Behöver jag hyra bil i Costa Blanca?' : 'Do I need to rent a car in Costa Blanca?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: lang === 'sv'
            ? 'Hyrbil är det mest flexibla alternativet men inte nödvändigt. TRAM-spårvagnen förbinder Alicante med Benidorm och bussnätverket täcker hela regionen.'
            : 'A rental car is the most flexible option but not essential. The TRAM light rail connects Alicante to Benidorm and the bus network covers the entire region.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
              <li className="text-gray-900 font-medium">{t.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="py-12 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h1>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>
      </section>

      {/* Quick Facts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{t.quickInfo}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practicalCategories.map((category) => {
              const catTrans = category.translations[lang];
              return (
                <div key={category.id} className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{category.icon}</span>
                    <h3 className="text-lg font-bold text-gray-900">{catTrans.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {catTrans.items.map((item, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Transport Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.transport}</h2>
          <p className="text-gray-600 mb-8">{t.transportSubtitle}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {transportOptions.map((transport) => {
              const transTrans = transport.translations[lang];
              return (
                <div key={transport.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <TransportIcon type={transport.type} />
                      <h3 className="ml-3 text-lg font-bold text-gray-900">{transTrans.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{transTrans.description}</p>
                    {transTrans.tip && (
                      <div className="flex items-start bg-amber-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <span className="text-sm text-amber-800">{transTrans.tip}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nationality Tips Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.tipsTitle}</h2>
          <p className="text-gray-600 mb-8">{t.tipsSubtitle}</p>

          <div className="space-y-6">
            {/* Highlighted nationality first */}
            {nationalityTips
              .sort((a, b) => {
                if (a.nationality === highlightedNationality) return -1;
                if (b.nationality === highlightedNationality) return 1;
                if (a.nationality === 'general') return 1;
                if (b.nationality === 'general') return -1;
                return 0;
              })
              .map((tip) => {
                const tipTrans = tip.translations[lang];
                const isHighlighted = tip.nationality === highlightedNationality;

                return (
                  <div
                    key={tip.nationality}
                    className={`bg-white rounded-xl shadow-md overflow-hidden ${isHighlighted ? 'ring-2 ring-primary' : ''}`}
                  >
                    <div className={`p-6 ${isHighlighted ? 'bg-primary/5' : ''}`}>
                      <div className="flex items-center mb-4">
                        <span className="text-2xl mr-3">
                          {tip.nationality === 'swedish' ? '🇸🇪' :
                           tip.nationality === 'british' ? '🇬🇧' :
                           tip.nationality === 'german' ? '🇩🇪' :
                           tip.nationality === 'norwegian' ? '🇳🇴' : '🌍'}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900">{tipTrans.title}</h3>
                        {isHighlighted && (
                          <span className="ml-3 px-2 py-1 bg-primary text-white text-xs font-medium rounded">
                            {lang === 'sv' ? 'För dig!' : lang === 'de' ? 'Für Sie!' : lang === 'no' ? 'For deg!' : 'For you!'}
                          </span>
                        )}
                      </div>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {tipTrans.tips.map((tipText, index) => (
                          <li key={index} className="flex items-start text-gray-600">
                            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {tipText}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Link
            href={`/${lang}/costa-blanca`}
            className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t.backToHome}
          </Link>
        </div>
      </section>
    </>
  );
}
