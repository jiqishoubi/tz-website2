import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  reactStrictMode: false, // 关闭react严格模式
  eslint: {
    ignoreDuringBuilds: true, // 构建时忽略eslint
  },
  typescript: {
    ignoreBuildErrors: true, // 构建时忽略typescript错误
  },
  output: 'export', // 静态导出 为了部署到 github pages
  images: {
    unoptimized: true, // 处理github pages图片不显示问题
  },
  // ...(process.env.NODE_ENV === 'production'
  //   ? {
  //       basePath: '/tz-website2',
  //       assetPrefix: '/tz-website2/',
  //     }
  //   : {}),
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'], // 增加md和mdx
  // sassOptions: {},
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.(md|mdx)$/, // nextjs 默认mdx，md支持要加上
})

export default withMDX(nextConfig)
