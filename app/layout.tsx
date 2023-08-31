import SmoothScroll from 'global_components/SmoothScroll';
import CalculateAppHeight from 'global_components/Layout/CalculateAppHeight';
import 'styles/App.scss';
import { inter, zenAntique } from 'utils/font';

const title = 'Roland Branten';
// WARNING: description is english only right now
const description =
  'Creative developer based in Eindhoven, The Netherlands. Currently working as a freelancer who is enthusiastic about creating engaging and delightful digital experiences.';
const color = '#3F6C5B';
const colorLight = '#bdd3cc';
const domain = 'https://rolandbranten.nl';

export const metadata = {
  // prevent zoom in on input focus
  viewport:
    'width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no;user-scalable=0;',
  applicationName: title,
  manifest: '/manifest.json',
  appleWebApp: { capable: true, title, statusBarStyle: 'default' },
  formatDetection: { telephone: false },
  alternates: {
    languages: {
      en: 'https://rolandbranten.com',
      nl: 'https://rolandbranten.nl',
    },
  },
  themeColor: [
    { media: '(max-width: 767px)', color },
    { media: '(min-width: 768px)', color: colorLight },
  ],
  openGraph: {
    title,
    description,
    url: domain,
    siteName: title,
    images: [
      {
        url: `${domain}/apple-touch-icon.png`,
        width: 32,
        height: 32,
        alt: 'Roland Branten logo',
      },
    ],
    // locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title,
    description,
    creator: '@rolandbranten',
    site: domain,
    images: {
      url: `${domain}/android-chrome-192x192.png`,
      alt: 'Roland Branten logo',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CalculateAppHeight>
      <SmoothScroll>
        <html lang="en" className={`${inter.variable} ${zenAntique.variable}`}>
          <body>{children}</body>
        </html>
      </SmoothScroll>
    </CalculateAppHeight>
  );
}
