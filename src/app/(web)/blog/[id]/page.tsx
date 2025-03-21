import React from 'react'
import Article from '@/articles/hello world.mdx'

export function generateStaticParams() {
  return [{ id: '123' }, { id: '456' }, { id: '789' }] // 这里提前声明所有可能的动态 ID
}

const Index: React.FC = () => {
  return (
    <>
      <Article />
    </>
  )
}

export default Index
