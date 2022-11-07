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
        http: true,
      },
      {
        domain: 'rolandbranten.nl',
        defaultLocale: 'nl',
        http: true,
      },
    ],
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
