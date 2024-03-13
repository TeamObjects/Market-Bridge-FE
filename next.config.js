/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: (() => {
      const domains = [];
      for (let i = 0; i < 49; i++) {
        domains.push(`thumbnail${i}.coupangcdn.com`);
      }
      return domains;
    })(),
  },
};

module.exports = nextConfig;
