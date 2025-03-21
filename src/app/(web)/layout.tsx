import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // 比minHeight长一点 主要让滚动条显示出来 防止布局抖动
    // 600px 和 100vh 选一个最大的
    <main
      className="max-w-[1300px] mx-auto min-h-[max(600px,calc(100vh+30px))] flex flex-col"
      // style={{ minHeight: 'calc(100vh + 30px)' }}
    >
      <Nav />
      <div className="flex-1">{children}</div>
      <Footer />
    </main>
  )
}
