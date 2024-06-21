/** @type {import('next').NextConfig} */
const nextConfig = {
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
