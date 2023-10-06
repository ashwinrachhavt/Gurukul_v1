/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  },
  // Add this function to rewrite requests
  async rewrites() {
    return [
      // Rewrite requests from /api/assignments to the xano API endpoint
      {
        source: '/api/assignments',
        destination: 'https://x8ki-letl-twmt.n7.xano.io/api:VB5qx6PF/assignments',
      },
      // Rewrite requests from /api/auth/me to the xano API endpoint
      {
        source: '/api/auth/me',
        destination: 'https://x8ki-letl-twmt.n7.xano.io/api:VB5qx6PF/auth/me',
      },
      // Rewrite requests from /api/courses to the xano API endpoint
      {
        source: '/api/courses',
        destination: 'https://x8ki-letl-twmt.n7.xano.io/api:VB5qx6PF/courses',
      },
      // Rewrite requests from /api/enrollments to the xano API endpoint
      {
        source: '/api/enrollments',
        destination: 'https://x8ki-letl-twmt.n7.xano.io/api:VB5qx6PF/enrollments',
      },
      // Rewrite requests from /api/user to the xano API endpoint
      {
        source: '/api/user',
        destination: 'https://x8ki-letl-twmt.n7.xano.io/api:VB5qx6PF/user',
      },
      // Rewrite requests from /api/lcdb to the xano API endpoint
      {
        source: '/api/lcdb',
        destination: 'https://x8ki-letl-twmt.n7.xano.io/api:m3qoN9RM/lcdb',
      },
      {
        source: '/api/auth/login',
        destination: 'https://x8ki-letl-twmt.n7.xano.io/api:VB5qx6PF/auth/login',
      },
    ]
  },
}

module.exports = nextConfig