import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "billeder.bilinfo.net",
      "cdn.autohaus.de",
      "cdn.autoproyecto.com",
      "cdn.ferrari.com",
      "cdn.motor1.com",
      "cdn.shopify.com",
      "granturismo.dk",
      "img.classistatic.de",
      "www.diariomotor.com",
    ],
  },
  unoptimized: true,
};

export default nextConfig;
