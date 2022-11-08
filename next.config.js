/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    locales: ['en', 'nl'],
    defaultLocale: 'nl',
    domains: [
      {
        domain: 'rolandbranten.com',
        defaultLocale: 'en',
        locales: ['en'],
      },
      {
        domain: 'rolandbranten.nl',
        defaultLocale: 'nl',
        locales: ['nl'],
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
