/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
            port: '',
            pathname: '/u/**',
          },
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            port: '',
            pathname: '/a/**', 
          },
          {
            protocol: 'https',
            hostname: 'i.pravatar.cc',
            port: '',
            pathname: '/300/**', 
          }
        ],
      },
};

export default nextConfig;
