/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.discordapp.com', 'media.discordapp.net', 'localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'devfy.com.br',
        port: '',
        pathname: '/api/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'gtreqzctrqppqncegkpw.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
}

module.exports = nextConfig
