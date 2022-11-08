/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en', 'nl'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'nl',
    domains: [
      {
        domain: 'rolandbranten.com',
        defaultLocale: 'en',
      },
      {
        domain: 'rolandbranten.nl',
        defaultLocale: 'nl',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/en/:path*/',
        destination: 'https://rolandbranten.com/:path*/',
        locale: false,
      },
      {
        source: '/nl/:path*/',
        destination: 'https://rolandbranten.nl/:path*/',
        locale: false,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/work',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/:slug',
        destination: '/',
        permanent: true,
      },
    ];
  },
};
