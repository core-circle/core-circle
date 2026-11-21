//@ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@core-circle/ui',
    '@core-circle/icons',
    '@core-circle/theme',
  ],
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
