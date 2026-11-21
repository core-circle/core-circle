//@ts-check

const isGhPages = process.env.DEPLOY_TARGET === 'gh-pages';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isGhPages ? 'export' : undefined,
  basePath: isGhPages ? '/core-circle' : '',
  images: {
    unoptimized: true,
  },
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
