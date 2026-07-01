import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/DevDash26" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
