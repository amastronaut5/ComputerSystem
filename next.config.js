/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ['img.youtube.com'] },
  experimental: { mdxRs: true },
};
module.exports = nextConfig;