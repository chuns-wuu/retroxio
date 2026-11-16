/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // The retrospective writer starts at step 0.
      { source: '/write', destination: '/write/0', permanent: false },
    ];
  },
};

export default nextConfig;
