/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
        SERVER_DOMAIN: "http://localhost:8080",
        ENV: "dev",
        // ENV: "prod",
        JWT_TOKEN: "secret",
        SESSION_COOKIE_LIFESPAN: `${60 * 60 * 24 * 7}`, // 1 week
    },
};

export default nextConfig;
