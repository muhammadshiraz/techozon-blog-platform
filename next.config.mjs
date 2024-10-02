/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ambcrypto.com",
        pathname: "/**", // This pattern allows images from any path on this domain
      },
    ],
  },
};

export default nextConfig;
