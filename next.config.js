/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        remotePatterns: [
            {
                hostname: "etheirystechdev.com",
                protocol: "https",
            },
        ],
    },
};

module.exports = nextConfig;
