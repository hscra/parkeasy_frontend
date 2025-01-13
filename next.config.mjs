/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
        SERVER_DOMAIN: "http://localhost:8080",
        ENV: "dev",
        // ENV: "prod",
    },
};

export default nextConfig;
