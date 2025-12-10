import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Locale, locales } from '@/lib/i18n';
import { t } from '@/lib/translations';
import { destinations, getDestination } from '@/data/destinations';
import { getHotelsSearchLink } from '@/lib/affiliate';
import { getHeroImage } from '@/lib/images';
import { getDestinationContent, DestinationContent as DestContent } from '@/data/destination-content';

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
      // Skip destinations with external Swedish sites for Swedish locale
      if (locale === 'sv' && dest.externalSvSite) {
        continue;
      }
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

  return {
    title: `${trans.name} - ${t(lang, 'nav.hotels')} | Costa Blanca Hotels`,
    description: trans.description,
    openGraph: {
      title: `${trans.name} - ${t(lang, 'nav.hotels')}`,
      description: trans.description,
      images: [getHeroImage(slug)],
    },
  };
}

export default async function DestinationPage({ params }: PageProps) {
  const { lang, destination: slug } = await params;
  const destination = getDestination(slug);

  if (!destination) {
    notFound();
  }

  // Redirect Swedish users to external sites for featured destinations
  if (lang === 'sv' && destination.externalSvSite) {
    notFound();
  }

  const trans = destination.translations[lang];
  const heroImage = getHeroImage(slug);
  const affiliateUrl = getHotelsSearchLink(lang, slug, 'destination-page');
  const destinationContent = getDestinationContent(slug);
  const contentTrans = destinationContent?.translations[lang];

  // Schema.org structured data
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: trans.name,
    description: trans.description,
    url: `https://costablancahotels.com/${lang}/costa-blanca/${slug}`,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: destination.coordinates.lat,
      longitude: destination.coordinates.lng,
    },
    containedInPlace: {
      '@type': 'Place',
      name: 'Costa Blanca',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Alicante',
        addressCountry: 'ES',
      },
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Costa Blanca',
        item: `https://costablancahotels.com/${lang}/costa-blanca`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: trans.name,
        item: `https://costablancahotels.com/${lang}/costa-blanca/${slug}`,
      },
    ],
  };

  // FAQ Schema (if FAQs exist)
  const faqSchema = contentTrans?.faqs && contentTrans.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: contentTrans.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={trans.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          {/* Breadcrumb */}
          <nav className="mb-4">
            <ol className="flex items-center space-x-2 text-sm text-white/80">
              <li>
                <Link href={`/${lang}/costa-blanca`} className="hover:text-white transition-colors">
                  Costa Blanca
                </Link>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-white font-medium">{trans.name}</span>
              </li>
            </ol>
          </nav>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            {trans.name}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            {trans.shortDescription}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Content Column */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {getAboutTitle(lang, trans.name)}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {trans.description}
                </p>

                {/* Extended content for featured destinations */}
                {destination.featured && (
                  <div className="mt-8">
                    <DestinationContent slug={slug} locale={lang} />
                  </div>
                )}
              </div>

              {/* Location Map Placeholder */}
              <div className="mt-12 bg-gray-100 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {getLocationTitle(lang)}
                </h3>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">
                    {trans.name}: {destination.coordinates.lat.toFixed(4)}°N, {Math.abs(destination.coordinates.lng).toFixed(4)}°{destination.coordinates.lng >= 0 ? 'E' : 'W'}
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Hotel Booking Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {getHotelCardTitle(lang, trans.name)}
                </h3>
                <p className="text-gray-600 mb-6">
                  {getHotelCardDescription(lang)}
                </p>
                <a
                  href={affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl"
                >
                  {t(lang, 'hotel.searchHotels')}
                  <svg
                    className="w-5 h-5 ml-2 inline"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>

                {/* Quick Facts */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    {getQuickFactsTitle(lang)}
                  </h4>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Costa Blanca, Alicante
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                      {getWeatherInfo(lang)}
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {getBestTimeInfo(lang)}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {getCtaTitle(lang, trans.name)}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {getCtaDescription(lang)}
          </p>
          <a
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition-all shadow-lg"
          >
            {t(lang, 'hotel.viewHotels')}
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

// Helper function for extended destination content
function DestinationContent({ slug, locale }: { slug: string; locale: Locale }) {
  const content = getDestinationContent(slug);
  const trans = content?.translations[locale];

  if (!trans) {
    return null;
  }

  return (
    <div className="space-y-12">
      {/* Long Description */}
      <div className="prose prose-lg max-w-none">
        {trans.longDescription.split('\n\n').map((paragraph, index) => (
          <p key={index} className="text-gray-700 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Best Time to Visit */}
      <div className="bg-amber-50 rounded-xl p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
          <svg className="w-6 h-6 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          {getBestTimeTitle(locale)}
        </h3>
        <p className="text-gray-700">{trans.bestTimeToVisit}</p>
      </div>

      {/* How to Get There */}
      <div className="bg-blue-50 rounded-xl p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
          <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
          {getHowToGetThereTitle(locale)}
        </h3>
        <p className="text-gray-700">{trans.howToGetThere}</p>
      </div>

      {/* Attractions */}
      {trans.attractions && trans.attractions.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">{getAttractionsTitle(locale)}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {trans.attractions.map((attraction, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <div className={`p-2 rounded-lg mr-4 ${getAttractionTypeColor(attraction.type)}`}>
                    {getAttractionIcon(attraction.type)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{attraction.name}</h4>
                    <p className="text-sm text-gray-600">{attraction.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Beaches */}
      {trans.beaches && trans.beaches.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{getBeachesTitle(locale)}</h3>
          <div className="flex flex-wrap gap-3">
            {trans.beaches.map((beach, index) => (
              <span key={index} className="inline-flex items-center px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
                {beach}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* FAQs */}
      {trans.faqs && trans.faqs.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">{getFaqTitle(locale)}</h3>
          <div className="space-y-4">
            {trans.faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-5">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-start">
                  <span className="text-primary mr-2">Q:</span>
                  {faq.question}
                </h4>
                <p className="text-gray-700 pl-6">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function getBestTimeTitle(locale: Locale): string {
  const titles: Record<Locale, string> = {
    sv: 'Bästa tiden att besöka',
    en: 'Best Time to Visit',
    de: 'Beste Reisezeit',
    no: 'Beste tid å besøke',
  };
  return titles[locale];
}

function getHowToGetThereTitle(locale: Locale): string {
  const titles: Record<Locale, string> = {
    sv: 'Hur tar du dig hit',
    en: 'How to Get There',
    de: 'Anreise',
    no: 'Hvordan komme dit',
  };
  return titles[locale];
}

function getAttractionsTitle(locale: Locale): string {
  const titles: Record<Locale, string> = {
    sv: 'Sevärdheter & Aktiviteter',
    en: 'Attractions & Activities',
    de: 'Sehenswürdigkeiten & Aktivitäten',
    no: 'Severdigheter & Aktiviteter',
  };
  return titles[locale];
}

function getBeachesTitle(locale: Locale): string {
  const titles: Record<Locale, string> = {
    sv: 'Stränder',
    en: 'Beaches',
    de: 'Strände',
    no: 'Strender',
  };
  return titles[locale];
}

function getFaqTitle(locale: Locale): string {
  const titles: Record<Locale, string> = {
    sv: 'Vanliga frågor',
    en: 'Frequently Asked Questions',
    de: 'Häufig gestellte Fragen',
    no: 'Ofte stilte spørsmål',
  };
  return titles[locale];
}

function getAttractionTypeColor(type: string): string {
  const colors: Record<string, string> = {
    beach: 'bg-cyan-100 text-cyan-600',
    nature: 'bg-green-100 text-green-600',
    culture: 'bg-purple-100 text-purple-600',
    entertainment: 'bg-pink-100 text-pink-600',
    shopping: 'bg-orange-100 text-orange-600',
  };
  return colors[type] || 'bg-gray-100 text-gray-600';
}

function getAttractionIcon(type: string): React.ReactNode {
  const icons: Record<string, React.ReactNode> = {
    beach: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
      </svg>
    ),
    nature: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    culture: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    entertainment: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    shopping: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  };
  return icons[type] || icons.culture;
}

// Localized helper functions
function getAboutTitle(locale: Locale, name: string): string {
  const titles: Record<Locale, string> = {
    sv: `Om ${name}`,
    en: `About ${name}`,
    de: `Über ${name}`,
    no: `Om ${name}`,
  };
  return titles[locale];
}

function getLocationTitle(locale: Locale): string {
  const titles: Record<Locale, string> = {
    sv: 'Läge',
    en: 'Location',
    de: 'Lage',
    no: 'Beliggenhet',
  };
  return titles[locale];
}

function getHotelCardTitle(locale: Locale, name: string): string {
  const titles: Record<Locale, string> = {
    sv: `Hotell i ${name}`,
    en: `Hotels in ${name}`,
    de: `Hotels in ${name}`,
    no: `Hoteller i ${name}`,
  };
  return titles[locale];
}

function getHotelCardDescription(locale: Locale): string {
  const descriptions: Record<Locale, string> = {
    sv: 'Hitta och jämför de bästa hotellen. Vi hjälper dig hitta perfekt boende för din semester.',
    en: 'Find and compare the best hotels. We help you find the perfect accommodation for your holiday.',
    de: 'Finden und vergleichen Sie die besten Hotels. Wir helfen Ihnen, die perfekte Unterkunft für Ihren Urlaub zu finden.',
    no: 'Finn og sammenlign de beste hotellene. Vi hjelper deg med å finne perfekt overnatting for ferien din.',
  };
  return descriptions[locale];
}

function getQuickFactsTitle(locale: Locale): string {
  const titles: Record<Locale, string> = {
    sv: 'Snabbfakta',
    en: 'Quick Facts',
    de: 'Kurzinfos',
    no: 'Hurtigfakta',
  };
  return titles[locale];
}

function getWeatherInfo(locale: Locale): string {
  const info: Record<Locale, string> = {
    sv: '300+ soldagar per år',
    en: '300+ sunny days per year',
    de: '300+ Sonnentage pro Jahr',
    no: '300+ soldager per år',
  };
  return info[locale];
}

function getBestTimeInfo(locale: Locale): string {
  const info: Record<Locale, string> = {
    sv: 'Bästa tid: April-Oktober',
    en: 'Best time: April-October',
    de: 'Beste Zeit: April-Oktober',
    no: 'Beste tid: April-Oktober',
  };
  return info[locale];
}

function getCtaTitle(locale: Locale, name: string): string {
  const titles: Record<Locale, string> = {
    sv: `Redo att boka din resa till ${name}?`,
    en: `Ready to book your trip to ${name}?`,
    de: `Bereit, Ihre Reise nach ${name} zu buchen?`,
    no: `Klar til å bestille reisen din til ${name}?`,
  };
  return titles[locale];
}

function getCtaDescription(locale: Locale): string {
  const descriptions: Record<Locale, string> = {
    sv: 'Jämför priser från hundratals hotell och hitta det perfekta boendet för din semester.',
    en: 'Compare prices from hundreds of hotels and find the perfect accommodation for your holiday.',
    de: 'Vergleichen Sie Preise von Hunderten von Hotels und finden Sie die perfekte Unterkunft für Ihren Urlaub.',
    no: 'Sammenlign priser fra hundrevis av hoteller og finn det perfekte overnattingsstedet for ferien din.',
  };
  return descriptions[locale];
}
