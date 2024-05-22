/* eslint-disable quotes */
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "down-br.img.susercontent.com",
      },
      {
        protocol: "https",
        hostname: "img.ltwebstatic.com",
      },
      {
        protocol: "https",
        hostname: "imgnike-a.akamaihd.net",
      },
      {
        protocol: "https",
        hostname: "www.pngall.com",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
    ],
  },
};

export default nextConfig;
