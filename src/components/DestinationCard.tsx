import Link from 'next/link';
import Image from 'next/image';
import { Locale } from '@/lib/i18n';
import { Destination } from '@/data/destinations';
import { t } from '@/lib/translations';
import { getDestinationImage } from '@/lib/images';

interface DestinationCardProps {
  destination: Destination;
  locale: Locale;
}

export function DestinationCard({ destination, locale }: DestinationCardProps) {
  const trans = destination.translations[locale];
  const imageUrl = getDestinationImage(destination.slug);

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
      className="group block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="h-52 relative overflow-hidden">
        <Image
          src={imageUrl}
          alt={trans.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white drop-shadow-lg">{trans.name}</h3>
          {destination.featured && (
            <span className="inline-block mt-2 px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full">
              {t(locale, 'destinations.featured')}
            </span>
          )}
        </div>
      </div>

      <div className="p-5">
        <p className="text-gray-600 text-sm line-clamp-2 min-h-[40px]">
          {trans.shortDescription}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-primary font-semibold text-sm group-hover:text-primary-dark transition-colors">
            {t(locale, 'hotel.viewHotels')}
          </span>
          <div className="flex items-center text-primary">
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
            {isExternal && (
              <svg
                className="w-4 h-4 ml-1"
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
      </div>
    </Link>
  );
}
