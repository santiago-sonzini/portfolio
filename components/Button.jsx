import React from 'react'
import Link from 'next/link'
const Button = ({children, href, classes}) => {
  return (
    <Link href={href}>
        <button className={`dark:bg-white text-violet-600  text-xl  w-40 h-16 rounded-xl hover border border-violet-600 hover:text-white hover:bg-gradient-to-br hover:from-violet-600 hover:to-violet-400 hover:border-white hover:scale-105   transition-all ease-in delay-100 m-7 font-extrabold  ${classes}flex items-center justify-center text-center`}>
        {children}
        </button>
    </Link>
  )
}

export default Button