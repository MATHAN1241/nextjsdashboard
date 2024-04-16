/** @type {import('next').NextConfig} */
const nextConfig = {
  
      images: {
        domains: ['localhost'], // Add localhost to the list of allowed domains for images
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '3000',
            pathname: '/**',
          },
        ],
      },
};


  

export default nextConfig;
