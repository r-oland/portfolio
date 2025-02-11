/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config) {
    // Add raw-loader for .glsl, .vert, .frag files
    config.module.rules.push({
      test: /\.(glsl|vert|frag)$/i,
      use: ['raw-loader'],
    });

    return config;
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
