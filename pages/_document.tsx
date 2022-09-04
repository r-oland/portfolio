// Components==============
import Document, { Head, Html, Main, NextScript } from 'next/document';
// =========================

const title = 'Roland Branten';
const description = 'Eindhoven based Frontend Developer';
const color = '#3F6C5B';
const colorLight = '#bdd3cc';
const domain = 'https://rolandbranten.nl';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap"
            rel="stylesheet"
          />
          <meta name="application-name" content={title} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={title} />
          <meta name="description" content={description} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-config" content="/logo/browserconfig.xml" />
          <meta name="msapplication-TileColor" content={color} />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" media="(max-width: 767px)" content={color} />
          <meta
            name="theme-color"
            media="(min-width: 768px)"
            content={colorLight}
          />
          <link rel="apple-touch-icon" href="/logo/apple-touch-icon.png" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/logo/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/logo/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="mask-icon"
            href="/logo/safari-pinned-tab.svg"
            color={color}
          />
          <link rel="icon" href="/favicon.ico" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content={domain} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta
            name="twitter:image"
            content={`${domain}/logo/android-chrome-192x192.png`}
          />
          <meta name="twitter:creator" content="@rolandbranten" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:site_name" content={title} />
          <meta property="og:url" content={domain} />
          <meta
            property="og:image"
            content={`${domain}/logo/apple-touch-icon.png`}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
