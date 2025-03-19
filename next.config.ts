import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  // ...(process.env.NODE_ENV === 'production'
  //   ? {
  //       basePath: '/tz-website2',
  //       assetPrefix: '/tz-website2/',
  //     }
  //   : {}),
}

export default nextConfig
