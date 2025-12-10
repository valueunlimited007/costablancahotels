'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Locale, locales, localeNames, localeFlags } from '@/lib/i18n';
import { t } from '@/lib/translations';

interface NavigationProps {
  locale: Locale;
}

export function Navigation({ locale }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const navItems = [
    { href: `/${locale}/costa-blanca`, label: t(locale, 'nav.destinations') },
    { href: `/${locale}/hotels`, label: t(locale, 'nav.hotels') },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href={`/${locale}/costa-blanca`}
              className="text-xl font-bold text-[var(--primary)]"
            >
              Costa Blanca Hotels
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-[var(--primary)] transition-colors"
              >
                {item.label}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-[var(--primary)]"
              >
                <span>{localeFlags[locale]}</span>
                <span>{localeNames[locale]}</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50">
                  {locales.map((lang) => (
                    <Link
                      key={lang}
                      href={`/${lang}/costa-blanca`}
                      className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setLangMenuOpen(false)}
                    >
                      <span>{localeFlags[lang]}</span>
                      <span>{localeNames[lang]}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-[var(--primary)]"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-[var(--primary)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t mt-4">
              <p className="text-sm text-gray-500 mb-2">Språk / Language</p>
              {locales.map((lang) => (
                <Link
                  key={lang}
                  href={`/${lang}/costa-blanca`}
                  className="flex items-center space-x-2 py-2 text-gray-700 hover:text-[var(--primary)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{localeFlags[lang]}</span>
                  <span>{localeNames[lang]}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
