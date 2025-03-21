import UpdateProfile from '@/components/UpdateProfile'
import React from 'react'

export default function page() {
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Update Your user  profile
      </h2>
      <p className='text-lg mb-8 text-primary-200'>
        Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Harum veritatis tempore, nulla nemo animi a distinctio?
      </p>
      <UpdateProfile/>
      
    </div>
  )
}
