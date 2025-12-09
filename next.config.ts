import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Generate folder-style routes (about/index.html) so clean URLs work on static hosting
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};

export default nextConfig;
