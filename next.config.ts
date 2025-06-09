import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["img.clerk.com", "khwne18547.ufs.sh"], // 👈 allow Clerk images
  },
};

export default nextConfig;
