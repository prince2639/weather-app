export default {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3000/:path*', // Forward to NestJS backend
      },
    ];
  },
};
