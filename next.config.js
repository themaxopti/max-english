/** @type {import('next').NextConfig} */
/// <reference types="redux-persist" />
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    disableStaticImages: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}

module.exports = nextConfig