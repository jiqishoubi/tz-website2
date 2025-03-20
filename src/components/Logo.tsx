'use client'

import { primaryColor } from '@/utils/consts'
import { useRouter } from 'next/navigation'

export default function Logo() {
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
