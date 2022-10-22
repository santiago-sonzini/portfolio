import React from 'react'
import Link from 'next/link'
const Button = ({children, href, classes}) => {
  return (
    <Link href={href}>
        <button className={`dark:bg-white text-violet-600  text-xl  w-40 h-16 rounded-xl hover border border-violet-600 hover:bg-gradient-to-br hover:from-violet-600 hover:to-violet-400 hover:border-white hover:scale-105   transition-all ease-in delay-100 m-7 font-extrabold  ${classes} items-center justify-center text-center p-2 hover:text-white`}>
        {children}
        </button>
    </Link>
  )
}

export default Button