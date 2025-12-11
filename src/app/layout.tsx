import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://costablancahotels.com'),
  title: {
    default: 'Costa Blanca Hotels - Din guide till Costa Blanca',
    template: '%s | Costa Blanca Hotels',
  },
  description:
    'Upptäck de bästa hotellen, stränderna och upplevelserna längs Spaniens soliga medelhavskust. 18 destinationer, 4 språk.',
  keywords: [
    'Costa Blanca',
    'hotell',
    'Spanien',
    'semester',
    'Benidorm',
    'Alicante',
    'Torrevieja',
    'stränder',
    'medelhavet',
  ],
  authors: [{ name: 'Costa Blanca Hotels' }],
  creator: 'Costa Blanca Hotels',
  publisher: 'Costa Blanca Hotels',
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    alternateLocale: ['en_GB', 'de_DE', 'nb_NO'],
    siteName: 'Costa Blanca Hotels',
    images: [
      {
        url: '/images/heroes/costa-blanca.webp',
        width: 1200,
        height: 630,
        alt: 'Costa Blanca - Spaniens soliga medelhavskust',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Schema.org structured data for the website
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Costa Blanca Hotels',
  url: 'https://costablancahotels.com',
  logo: 'https://costablancahotels.com/images/heroes/costa-blanca.webp',
  description: 'Din guide till Costa Blanca - hotell, restauranger och upplevelser',
  sameAs: [],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Costa Blanca Hotels',
  url: 'https://costablancahotels.com',
  description: 'Upptäck de bästa hotellen och upplevelserna längs Costa Blanca',
  inLanguage: ['sv', 'en', 'de', 'no'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
