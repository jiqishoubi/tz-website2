import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: false, // 关闭react严格模式
  eslint: {
    ignoreDuringBuilds: true, // 构建时忽略eslint
  },
  typescript: {
    ignoreBuildErrors: true, // 构建时忽略typescript错误
  },
  output: 'export', // 静态导出
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
