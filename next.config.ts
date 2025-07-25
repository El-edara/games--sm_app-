import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // domains: ["variety.com", "sm.ign.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "variety.com",
      },
      {
        protocol: "https",
        hostname: "sm.ign.com",
      },
    ],
  },

  /* config options here */
};

export default nextConfig;
