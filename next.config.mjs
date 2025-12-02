/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  redirects: async () => {
    return [
      {
        source: '/dashboard',
        destination: 'https://tutor.skillrevo.com/dashboard',
        permanent: true,
      },
    ];
  },
  reactCompiler: true,
};

export default nextConfig;
