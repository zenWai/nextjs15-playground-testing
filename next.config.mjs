/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/from-express-no-store",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
