/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  output: "export",
  distDir: "dist",
};

module.exports = nextConfig;
