import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.hilltopglobalgroup.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'hilltopglobalgroup.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'hilltopglobalgroup.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
