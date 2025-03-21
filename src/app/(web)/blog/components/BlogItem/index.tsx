import React from 'react'
import Link from 'next/link'
import { id2DateStr } from '@/utils/utils'

const Index: React.FC<{
  item: {
    title: string
    id: string
  }
}> = (props) => {
  const { item } = props
  return (
    <Link href={`/blog/${item.id}`} className="block my-4">
      <h2 className="font-bold text-3xl mb-1">{item.title}</h2>
      <p className="text-gray-500">{id2DateStr(item.id)}</p>
    </Link>
  )
}

export default Index
