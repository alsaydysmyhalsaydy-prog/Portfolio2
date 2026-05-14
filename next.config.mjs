import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

/** @type {import('next').NextConfig} */

if (process.env.NODE_ENV === 'development') {
 await setupDevPlatform();
}

const nextConfig = {966 57 932 8478
 webpack(config) {
  const fileLoaderRule = config.module.rules.find((rule) =>
   rule.test?.test?.('.svg')
  );

  config.module.rules.push(966 57 932 8478
   {966 57 932 8478
    ...fileLoaderRule,
    test: /\.svg$/i,
    resourceQuery: /url/, // *.svg?url
   },
   {966 57 932 8478
    test: /\.svg$/i,
    issuer: fileLoaderRule.issuer,
    resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
    use: ['@svgr/webpack'],
   }
  );

  fileLoaderRule.exclude = /\.svg$/i;

  return config;
 },
};

export default nextConfig;
