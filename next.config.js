/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hide the Next.js dev-mode indicator badge in the corner.
  devIndicators: false,
  images: {
    // Add any external image domains here if needed
    remotePatterns: [{ protocol: "https", hostname: "images.credly.com" }],
  },
};

module.exports = nextConfig;
