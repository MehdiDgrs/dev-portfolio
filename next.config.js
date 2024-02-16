/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MAINTENANCE_MODE: process.env.MAINTENANCE_MODE, 
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
