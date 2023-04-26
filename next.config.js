/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    remotePatterns: [
      {
        // SET PATTERN FOR YOUR FIREBASE IMAGE HOST
        protocol: 'https',
        hostname: '**.**.**',
      },
    ],
  },
  nextConfig: {
    reactStrictMode: true,
    swcMinify: true,
  },
  async headers() {
    return [
      {
        source: '/api/(.*)',
        headers: [
          { key: 'Acess-Control-Allow-Credentials', value: 'true' },
          {
            key: 'Access-Control-Allow-Origin',
            value: 'http:localhost:3000',
          },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,DELETE,PUT' },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination:
          'https://f25e-2c0f-f8f0-b94b-0-1858-70cf-7e48-6f49.eu.ngrok.io/:path*',
      },
    ];
  },
};
