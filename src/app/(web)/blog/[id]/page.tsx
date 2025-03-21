import React from 'react'
import styles from './index.module.scss'

export function generateStaticParams() {
  return [{ id: '20241119' }]
}

const Index: React.FC<{
  params: Promise<{ id: string }>
}> = async (props) => {
  // console.log(`🚀 ~ props`, props)
  const { id } = await props.params
  // console.log(`🚀 ~ id`, id)
  // 获取../../../../articles/${id}/下的md
  const { default: content } = await import(`../../../../articles/${id}/index.md`)
  // console.log(`🚀 ~ content`, content)
  const Component = content
  return (
    <section className="max-w-2xl mx-auto my-10">
      <article className="prose">
        <div style={{ overflow: 'hidden' }}>
          <Component />
        </div>
      </article>

      <div className={styles.red}>这里是评论区</div>
    </section>
  )
}

export default Index
