import { Locale } from '@/lib/i18n';
import { Destination } from '@/data/destinations';
import { DestinationCard } from './DestinationCard';
import { t } from '@/lib/translations';

interface DestinationsGridProps {
  destinations: Destination[];
  locale: Locale;
  showTitle?: boolean;
}

export function DestinationsGrid({
  destinations,
  locale,
  showTitle = true,
}: DestinationsGridProps) {
  return (
    <section className="py-12 bg-[var(--muted)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">
              {t(locale, 'destinations.title')}
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              {t(locale, 'destinations.subtitle')}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.slug}
              destination={destination}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
