import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // 为了让 GitHub Pages 正常显示
  basePath: '/tz-website2',
  assetPrefix: '/tz-website2/',
}

export default nextConfig
