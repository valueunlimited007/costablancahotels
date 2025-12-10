import Link from 'next/link';
import { Locale } from '@/lib/i18n';
import { t } from '@/lib/translations';

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Costa Blanca Hotels
            </h3>
            <p className="text-sm">
              {t(locale, 'site.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              {t(locale, 'nav.destinations')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/costa-blanca/benidorm`} className="hover:text-white transition-colors">
                  Benidorm
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/costa-blanca/javea`} className="hover:text-white transition-colors">
                  Jávea
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/costa-blanca/alicante`} className="hover:text-white transition-colors">
                  Alicante
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/costa-blanca/torrevieja`} className="hover:text-white transition-colors">
                  Torrevieja
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Information
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/privacy`} className="hover:text-white transition-colors">
                  {t(locale, 'footer.privacy')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/terms`} className="hover:text-white transition-colors">
                  {t(locale, 'footer.terms')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/cookies`} className="hover:text-white transition-colors">
                  {t(locale, 'footer.cookies')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>
            &copy; {currentYear} Costa Blanca Hotels. {t(locale, 'footer.rights')}.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            Affiliate disclosure: We may earn commission from Hotels.com bookings.
          </p>
        </div>
      </div>
    </footer>
  );
}
