/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '5e96b21a-1279-467d-ae4e-1fcd10981949.lovableproject.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
