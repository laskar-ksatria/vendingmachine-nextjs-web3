/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    OWNER_ADDRESS: process.env.OWNER_ADDRESS,
    THIRDWEB_CLIENTID: process.env.THIRDWEB_CLIENTID,
  },
};

export default nextConfig;
