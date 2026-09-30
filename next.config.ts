import type { NextConfig } from "next";

// Site 100% estático: `npm run build` gera a pasta `out/`, pronta para a Vercel.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
