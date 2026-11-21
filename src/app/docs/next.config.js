//@ts-check

const { composePlugins, withNx } = require('@nx/next');

const isGhPages = process.env.DEPLOY_TARGET === 'gh-pages';

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {},
  output: isGhPages ? 'export' : undefined,
  basePath: isGhPages ? '/core-circle' : '',
  assetPrefix: isGhPages ? '/core-circle/' : undefined,
  images: {
    unoptimized: true,
  },
  transpilePackages: ['@core-circle/ui', '@core-circle/icons', '@core-circle/theme'],
  typescript: {
    ignoreBuildErrors: true,
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
