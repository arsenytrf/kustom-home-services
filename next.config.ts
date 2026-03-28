import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/kustom-home-services",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
