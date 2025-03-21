"use client"
import React, { useState } from 'react'

export default function CounterCart() {
    const [count,setCount]=useState(0)
  return (
    <div>
         <button onClick={()=>setCount(count+1)} className='p-3  m-3 bg-indigo-500 text-white hover:bg-fuchsia-500  rounded'>Add To Cart {count}</button>
    </div>
  )
}
