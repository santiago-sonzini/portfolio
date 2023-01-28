import React from 'react'
import { useContext } from 'react';
import AppContext from '../context/state';
import Button from './Button';
import {AiFillHome} from 'react-icons/ai'
import {IoLanguage} from 'react-icons/io5'

const Navbar = () => {
    const value = useContext(AppContext);
    
  return (
    <nav className='  bg-[#1D1B26] flex  self-start justify-self-start justify-between  w-full'>
        <Button href={'/'} classes={'w-20 h-16 flex items-center'}><AiFillHome/></Button>
        <div className=' w-full flex items-center justify-end'>
        
        <select value={value.state.languageSelected} onChange={(e)=> value.setLanguageSelected(e.target.value)} className="  border-4 shadow-violet-700 shadow-md  border-violet-600 bg-transparent text-white  focus:outline-none appearance-none inline-block py-3 pl-3 pr-3 rounded-md leading-tight md:w-2/12 lg:w-1/12 w-1/4  m-4 font-bold h-16">
            <option value={'en'} className="pt-6">EN</option>
            <option value={'es'}>ES</option>
            
        </select>
        </div>
    </nav>
  )
}

export default Navbar