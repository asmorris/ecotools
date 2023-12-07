/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      'utfs.io',
      'images.unsplash.com',
      'localhost',
      'lh3.googleusercontent.com',
      'oaidalleapiprodscus.blob.core.windows.net'
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'graphql-tag/loader',
        },
      ],
    });
    
    return config;
  },
};

module.exports = nextConfig
