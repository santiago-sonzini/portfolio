import React, {useState} from 'react'
import Button from '../components/Button';
import {FiArrowLeft} from 'react-icons/fi'


export default function Contact  () {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    

        
    

  return (
    <main className=" h-screen w-full flex-col flex items-center justify-center  dark:bg-[#1D1B26]">
        <Button classes={'self-start justify-self-start w-20 h-16 flex'} href={'/'}><FiArrowLeft/></Button>
        <h1 className=' text-4xl font-extrabold'>Contact Form</h1>
        <p className=' mt-8 text-center font-bold'> Hi again!, <br /> if you would like to work with me or make a job offer, <br /> just send me a message on this form. <br /> We will workout the details, <b className=' text-violet-600'>code comes first.</b> </p>
        <form onSubmit={(e)=>{
                e.preventDefault()
                window.alert("Function not Avalible")

            }} action="submit" className=' h-1/2 md:w-1/2  m-12 flex flex-col items-center justify-center'>
            <div className=' flex md:flex-row items-center justify-center flex-col w-full'>
            <input value={name} onChange={(e)=>{
                setName(e.target.value)
                }} type="text" placeholder='Name' className=' p-4 m-1 md:w-2/5 w-5/6 bg-transparent border border-violet-600 rounded-md focus:outline-none focus:border-2 text-white  text-center'/>
            <input value={lastName} onChange={(e)=>setLastName(e.target.value)} type="text" placeholder='Last Name' className='  md:w-2/5 w-5/6 p-4 m-1 bg-transparent border border-violet-600 rounded-md focus:outline-none focus:border-2 text-white  text-center'/>
            </div>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email' className=' p-4  md:w-4/5 w-5/6 m-2 bg-transparent border border-violet-600 rounded-md focus:outline-none focus:border-2 text-white  text-center'/>
            <textarea value={message} onChange={(e)=>{setMessage(e.target.value)}} type="email" placeholder='Message' className=' resize-none p-4 h-1/3  md:w-4/5 w-5/6 m-1 bg-transparent border border-violet-600 rounded-md focus:outline-none focus:border-2 text-white  text-center'/>
            <button  onClick={(e)=>{
                e.preventDefault()
                window.alert("Function not Avalible")

            }}  type='submit' className=' dark:bg-white text-violet-600  text-xl  w-36 h-14 rounded-xl hover border border-violet-600 hover:text-white hover:bg-gradient-to-br hover:from-violet-600 hover:to-violet-400 hover:border-white hover:scale-105   transition-all ease-in delay-100 m-7 font-extrabold'>
                Send
            </button>

        </form>
        
       
        
    </main>
  )
}

