import React from 'react'
import articles from '@/articles'
import BlogItem from './components/BlogItem'

const Index: React.FC = () => {
  return (
    <section className="max-w-2xl mx-auto my-10">
      {articles.map((item, index) => {
        return <BlogItem key={item.id} item={item} />
      })}
    </section>
  )
}

export default Index
