/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // Optional: skips build failure due to lint errors
  },
}
module.exports = nextConfig

