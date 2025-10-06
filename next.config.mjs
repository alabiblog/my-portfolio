/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify:true,
    experimental:{
        esmExternals:true
    },
     images:{
        remotePatterns: [
            {
                protocol:"https",
                hostname: "lh3.googleusercontent.com"
            }
        ]
    }
};

export default nextConfig;
