/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    locales: ['en', 'nl'],
    defaultLocale: 'nl',
    domains: [
      {
        domain: 'www.rolandbranten.com',
        defaultLocale: 'en',
      },
      {
        domain: 'www.rolandbranten.nl',
        defaultLocale: 'nl',
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
