import React from 'react'
import Article from '@/articles/hello world.mdx'
import styles from './index.module.scss'

export function generateStaticParams() {
  return [{ id: '123' }, { id: '456' }, { id: '789' }] // 这里提前声明所有可能的动态 ID
}

const Index: React.FC = () => {
  return (
    <>
      <article className="prose">
        <Article />
      </article>

      <div className={styles.red}>这里是评论区</div>
    </>
  )
}

export default Index
