import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Costa Blanca Hotels - Din guide till Costa Blanca',
    template: '%s | Costa Blanca Hotels',
  },
  description:
    'Upptäck de bästa hotellen, stränderna och upplevelserna längs Spaniens soliga medelhavskust.',
  keywords: [
    'Costa Blanca',
    'hotell',
    'Spanien',
    'semester',
    'Benidorm',
    'Alicante',
  ],
  authors: [{ name: 'Costa Blanca Hotels' }],
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    siteName: 'Costa Blanca Hotels',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
