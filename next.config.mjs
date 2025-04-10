/** @type {import('next').NextConfig} */
//use all images from next/image
const nextConfig = {
  images:{
    remotePatterns:[
        
            {
                protocol: 'https',
                hostname: '**',
               
            }
        
    ]
}
};

export default nextConfig;
