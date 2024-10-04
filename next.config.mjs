// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      BASE_URL: process.env.BASE_URL,
      BEARER_TOKEN: process.env.BEARER_TOKEN,
    },
  };
  
  export default nextConfig;
  