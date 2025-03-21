'use client'

import { primaryColor } from '@/utils/consts'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Logo from '../Logo'
import Drawer from '@mui/material/Drawer'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'

const linkList = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/stack', label: 'Stack' },
  { href: '/about', label: 'About' },
]

const Index: React.FC = () => {
  const pathname = usePathname()
  // console.log(`🚀 ~ pathname`, pathname)
  const [open, setOpen] = useState(false)
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="w-[100px]">
        <Logo />
      </div>
      <div className="flex-1 flex justify-center">
        <div className="hidden md:flex">
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
      <div className="md:hidden">
        <div className="cursor-pointer flex items-center justify-center w-[35px] h-[35px] " style={{ border: '1px solid #bbb', borderRadius: 6 }} onClick={() => setOpen(true)}>
          <MenuOutlinedIcon />
        </div>
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <div className="w-2xs p-4">
            <div className="mb-7">
              <Logo />
            </div>
            {linkList.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-[17px] mx-[17px] my-4"
                style={pathname === link.href ? { color: primaryColor, textDecoration: 'underline', textUnderlineOffset: '6px' } : {}}
                onClick={() => {
                  setTimeout(() => {
                    setOpen(false)
                  }, 200)
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Drawer>
      </div>
    </nav>
  )
}

export default Index
