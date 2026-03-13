/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co', // Domain sementara untuk contoh gambar
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc', // Contoh jika nanti kamu upload ke postimages
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com', // Contoh jika nanti kamu upload ke Imgur
      }
    ],
    dangerouslyAllowSVG: true, // Wajib di-true jika menggunakan placehold.co
  },
};

export default nextConfig;