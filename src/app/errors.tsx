"use client"
import React from 'react'

interface Props{
     error:Error
}
export default function errors({error}:Props) {
  return (
    <div>
        <h1> something went wrong</h1>
        <p>{error.message}</p>
    </div>
  )
}
