/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                //https://imagedelivery.net
                protocol: "https",
                hostname: "imagedelivery.net",
            },
        ],
    },
};

export default nextConfig;
