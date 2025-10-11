import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Removed output: 'export' as it's incompatible with Image Optimization API
  // If you need static export, use `next build` instead of `next dev`
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
