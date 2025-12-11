import Link from 'next/link';
import Image from 'next/image';
import { Locale } from '@/lib/i18n';
import { t } from '@/lib/translations';

interface HeroProps {
  locale: Locale;
}

export function Hero({ locale }: HeroProps) {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/heroes/costa-blanca.webp"
          alt="Costa Blanca beach"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-2 bg-amber-500 text-white text-sm font-semibold rounded-full mb-6">
            {locale === 'sv' ? 'Spaniens soligaste kust' : "Spain's sunniest coast"}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
            {t(locale, 'hero.title')}
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-white/90 leading-relaxed">
            {t(locale, 'hero.subtitle')}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={`/${locale}/costa-blanca#destinations`}
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl"
            >
              {t(locale, 'hero.cta')}
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
            </Link>
            <Link
              href={`/${locale}/hotels`}
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-full hover:bg-white/20 transition-all"
            >
              {t(locale, 'nav.hotels')}
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
          {[
            { value: '300+', label: locale === 'sv' ? 'Soldagar per år' : 'Sunny days/year' },
            { value: '200km', label: locale === 'sv' ? 'Kustlinje' : 'Coastline' },
            { value: '18', label: locale === 'sv' ? 'Destinationer' : 'Destinations' },
            { value: '1000+', label: locale === 'sv' ? 'Hotell' : 'Hotels' },
          ].map((stat) => (
            <div key={stat.label} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl sm:text-4xl font-bold text-amber-400">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
