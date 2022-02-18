const withPWA = require('next-pwa')

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },
  productionBrowserSourceMaps: true,
  webpack: (config) => {
    return {
      ...config,
      devtool: process.env.NODE_ENV === 'production' ? 'hidden-source-map' : 'eval-source-map',
    }
  },
})

module.exports = nextConfig
