const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  // fallback: false
})

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: true
})

module.exports = nextConfig
