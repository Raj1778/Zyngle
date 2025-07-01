import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Skip ESLint errors during `next build`
  },
};

export default nextConfig;
