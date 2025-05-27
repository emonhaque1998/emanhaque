import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["img.clerk.com"], // 👈 allow Clerk images
  },
};

export default nextConfig;
