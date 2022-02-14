const withPWA = require('next-pwa')

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  // reactStrictMode: true,
  // images: {
  //   loader: 'akamai',
  //   path: '/',
  // },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },
})

module.exports = nextConfig
