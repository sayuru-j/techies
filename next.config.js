/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "assets.popsy.co",
      },
      {
        protocol: "https",
        hostname: "cdn.thewirecutter.com",
      },
    ],
  },
};

module.exports = nextConfig;
