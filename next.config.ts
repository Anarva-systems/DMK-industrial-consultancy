import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
    appIsrStatus: false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
