import Link from 'next/link';
import { Locale } from '@/lib/i18n';
import { Destination } from '@/data/destinations';
import { t } from '@/lib/translations';

interface DestinationCardProps {
  destination: Destination;
  locale: Locale;
}

export function DestinationCard({ destination, locale }: DestinationCardProps) {
  const trans = destination.translations[locale];

  // For Swedish locale, link to external .se sites for featured destinations
  const href =
    locale === 'sv' && destination.externalSvSite
      ? destination.externalSvSite
      : `/${locale}/costa-blanca/${destination.slug}`;

  const isExternal = locale === 'sv' && destination.externalSvSite;

  return (
    <Link
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      {/* Placeholder image - gradient based on destination */}
      <div className="h-48 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] relative">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white">{trans.name}</h3>
          {destination.featured && (
            <span className="inline-block mt-1 px-2 py-0.5 bg-[var(--secondary)] text-white text-xs rounded">
              {t(locale, 'destinations.featured')}
            </span>
          )}
        </div>
      </div>

      <div className="p-4">
        <p className="text-gray-600 text-sm line-clamp-2">
          {trans.shortDescription}
        </p>
        <div className="mt-4 flex items-center text-[var(--primary)] font-medium text-sm">
          <span>{t(locale, 'hotel.viewHotels')}</span>
          <svg
            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          {isExternal && (
            <svg
              className="w-3 h-3 ml-1"
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
          )}
        </div>
      </div>
    </Link>
  );
}
