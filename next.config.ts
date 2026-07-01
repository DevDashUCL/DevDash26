import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/DevDash",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
