import React from 'react'
import Logo from '../Logo'
import Link from 'next/link'

const socialList = [
  { href: 'https://github.com/jiqishoubi', label: 'Github' },
  { href: 'https://www.npmjs.com/~jiqishoubi', label: 'NPM' },
  { href: 'https://juejin.cn/user/4037062427162589/posts', label: '掘金' },
]

const Index: React.FC = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="p-4 mt-6">
      <div className="flex items-start justify-between">
        <Logo />
        <div className="pt-1">
          <h4 className="font-semibold mb-2">Social</h4>
          {socialList.map((social, i) => (
            <Link key={i} href={social.href} target="_blank" className="block text-[13px] text-gray-500 py-3">
              {social.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-[13px] text-gray-500 border-t border-gray-200 pt-4 mt-4">
        <span>© {year} Tong Zhou. All rights reserved.</span>
        <Link href={'/privacy'} target="_blank">
          Terms Privacy
        </Link>
      </div>
    </footer>
  )
}

export default Index
