/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portfolio",
  output: "export",  // Enables static exports
  reactStrictMode: true,
  images: {
    unoptimized: true,  // Disable the Image Optimization API
  },
};

export default nextConfig;
