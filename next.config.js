/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      domains: [
         'photo-zmp3.zmdcdn.me',
         'photo-resize-zmp3.zmdcdn.me',
         'zmp3-static.zmdcdn.me',
         'i.gifer.com',
         'photo-playlist-zmp3.zmdcdn.me',
         'zjs.zmdcdn.me',
         'api-ecom.duthanhduoc.com',
         'media.tenor.com'
      ],
      formats: ['image/webp'],
      minimumCacheTTL: 60
   },
   swcMinify: false
}

module.exports = nextConfig
