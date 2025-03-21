import Image from 'next/image'
import React from 'react'
export default function Logo() {
  return (
    <div>
        <Image src="/logo.jpg" alt="logo image" width={200} height={200} quality={50}></Image>
    </div>
  )
}
