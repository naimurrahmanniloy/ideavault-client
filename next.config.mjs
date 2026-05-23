/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
//https://cdn.pixabay.com/photo/2017/07/12/06/01/seafood-feast-2495972_1280.jpg
export default nextConfig;
