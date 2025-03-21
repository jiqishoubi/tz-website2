import React from 'react'
import Link from 'next/link'

const list = [
  {
    title: '小程序自定义导航栏相关尺寸',
    id: '20241119',
  },
]

const Index: React.FC = () => {
  return (
    <>
      blog
      <div>
        {list.map((item, index) => (
          <Link key={index} href={`/blog/${item.id}`}>
            {item.title}
          </Link>
        ))}
      </div>
      <div style={{ height: '800px' }}></div>
    </>
  )
}

export default Index
