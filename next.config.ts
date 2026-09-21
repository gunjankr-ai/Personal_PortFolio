import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {},
  webpack: (config) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: [
        "**/node_modules/**",
        "**/.git/**",
        "**/System Volume Information/**",
        "D:/System Volume Information/**",
      ],
    };
    return config;
  },
};

export default nextConfig;
