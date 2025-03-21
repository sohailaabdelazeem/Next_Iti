
import React from 'react'
import Link from "next/link";

interface Props {
    name:string,
    path:string
}
export default function NavLink({name,path}:Props) {
    
  return (
    <div>
        <Link href={path} className="relative z-10 -mb-px flex items-center
                       border-b-2 border-transparent pt-px text-sm font-medium
                        text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800"
         aria-expanded="false">{name}</Link>
    </div>
  )
}
