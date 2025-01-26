/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    mongodb_uri:
      "mongodb+srv://gdskaran:lovemeloveme@cluster0.e0fzt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    lucia_secret:
      "8f2e6402f93a8683c3fce4e4b92facb7fefd01c7c1715087946569e7feb5a82e",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindui.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "thehouseofrare.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.adidas.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static.nike.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lp2.hm.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "1000logos.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.designrush.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "image.hm.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static.helioswatchstore.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn3.iconfinder.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
