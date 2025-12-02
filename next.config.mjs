/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["192.168.29.124"],

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
