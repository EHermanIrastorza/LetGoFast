import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "cdn.shopify.com",
      "www.diariomotor.com",
      "cdn.motor1.com",
      "cdn.autobild.es",
      "d62-a.sdn.cz",
      "festivalautomobile.com",
      "fotografias.lasexta.com",
      "pictures.porsche.com",
      "cdn-images.motor.es",
    ],
  },
  unoptimized: true,
};

export default nextConfig;
