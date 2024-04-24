/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    OWNER_ADDRESS: process.env.OWNER_ADDRESS,
    THIRDWEB_CLIENTID: process.env.THIRDWEB_CLIENTID,
    CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS,
  },
};

export default nextConfig;
