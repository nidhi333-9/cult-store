module.exports = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com", "links.papareact.com"],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};
