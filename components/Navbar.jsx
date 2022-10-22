import React from 'react'
import { useContext } from 'react';
import AppContext from '../context/state';
import Button from './Button';

const Navbar = () => {
    const value = useContext(AppContext);
    
  return (
    <nav className='  bg-[#1D1B26] flex  self-start justify-self-start justify-between'>
        <Button href={'/'} classes={'w-20 h-16'}>Home</Button>
        <select value={value.state.languageSelected} onChange={(e)=> value.setLanguageSelected(e.target.value)} className="  border border-violet-600 bg-transparent text-white  focus:outline-none appearance-none inline-block py-3 pl-3 pr-3 rounded leading-tight md:w-2/12 lg:w-1/12 w-1/4  m-8 font-bold h-16">
            <option value={'en'} className="pt-6">EN</option>
            <option value={'es'}>ES</option>
            
        </select>
    </nav>
  )
}

export default Navbar