import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button({title='Get Started'}) {
  return (
    <div className='cursor-pointer px-4 py-2 bg-zinc-100 hover:bg-zinc-200 duration-200 text-black rounded-full flex items-center gap-5'>
        <span className='font-medium'>{title}</span>
        <IoIosReturnRight />
    </div>
  )
}

export default Button