import 'styles/App.scss';
import { inter, zenAntique } from 'utils/font';
import { getMetaDescription } from 'utils/getMetaDescription';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { Viewport } from 'next';
import ClientWrapper from './layout/ClientWrapper';

const color = '#3F6C5B';
const colorLight = '#bdd3cc';

export const viewport: Viewport = {
  // prevent zoom in on input focus
  width: 'device-width',
  height: 'device-height',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(max-width: 767px)', color },
    { media: '(min-width: 768px)', color: colorLight },
  ],
};

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: 'en' | 'nl' };
}) {
  const title = 'Roland Branten';
  const domain = `https://rolandbranten.${lang === 'en' ? 'com' : 'nl'}`;
  const description = getMetaDescription(lang);

  return {
    applicationName: title,
    manifest: '/manifest.json',
    appleWebApp: { capable: true, title, statusBarStyle: 'default' },
    formatDetection: { telephone: false },
    metadataBase: new URL(domain),
    alternates: {
      languages: {
        en: 'https://rolandbranten.com',
        nl: 'https://rolandbranten.nl',
      },
    },
    openGraph: {
      title,
      description,
      url: domain,
      siteName: title,
      images: [
        {
          url: `${domain}/logo/apple-touch-icon.png`,
          width: 32,
          height: 32,
          alt: 'Roland Branten logo',
        },
      ],
      locale: lang,
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title,
      description,
      creator: '@rolandbranten',
      site: domain,
      images: {
        url: `${domain}/logo/android-chrome-192x192.png`,
        alt: 'Roland Branten logo',
      },
    },
  };
}

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: 'en' | 'nl' };
}) {
  return (
    <ClientWrapper lang={lang}>
      <html lang={lang} className={`${inter.variable} ${zenAntique.variable}`}>
        <body>
          {children}
          <SpeedInsights />
          <Analytics />
        </body>
      </html>
    </ClientWrapper>
  );
}
