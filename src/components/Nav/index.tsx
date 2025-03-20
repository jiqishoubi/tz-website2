'use client'

import { primaryColor } from '@/utils/consts'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const linkList = [
  { href: '/', label: 'Home' },
  { href: '/archive', label: 'Archive' },
  { href: '/stack', label: 'Stack' },
  { href: '/about', label: 'About' },
]

function Logo() {
  const router = useRouter()
  return (
    <div
      className="inline-flex justify-center items-center font-bold text-[17px] cursor-pointer"
      onClick={() => {
        router.push('/')
      }}
    >
      <span>Tong</span>
      <span className="inline-flex items-center justify-center w-[45px] h-[45px] text-white rounded-[7px] ml-[5px]" style={{ backgroundColor: primaryColor }}>
        Zhou
      </span>
    </div>
  )
}

const Index: React.FC = () => {
  const pathname = usePathname()
  // console.log(`🚀 ~ pathname`, pathname)
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="w-[100px]">
        <Logo />
      </div>
      <div className="flex-1 flex justify-center">
        <div className="md:block flex">
          {linkList.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[17px] mx-[17px]"
              style={pathname === link.href ? { color: primaryColor, textDecoration: 'underline', textUnderlineOffset: '6px' } : {}}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="w-[100px]"></div>
      <div className="md:hidden">啦啦</div>
    </nav>
  )
}

export default Index
