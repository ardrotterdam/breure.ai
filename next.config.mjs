/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: import.meta.dirname,
  },
  async redirects() {
    return [
      {
        source: "/diensten",
        destination: "/maritieme-software",
        permanent: true,
      },
      {
        source: "/en/services",
        destination: "/en/maritime-software",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
