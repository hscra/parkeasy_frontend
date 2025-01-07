/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
        SERVER_DOMAIN: "http://localhost:8080",
    },
};

export default nextConfig;
