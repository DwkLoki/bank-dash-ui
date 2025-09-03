// next.config.js
import svgr from "next-plugin-svgr";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default svgr(nextConfig);