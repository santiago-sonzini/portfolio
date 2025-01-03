
import TypingComponent from '../components/TypingComponent'
import Button from '../components/Button';
import { useContext } from "react";
import AppContext from '../context/state';
import Navbar from '../components/Navbar';
import {GrProjects} from 'react-icons/gr'
import { AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'

export default function Home() {

  const value = useContext(AppContext);


  let {languages} = value.state
  
  return (
    <>
    
    <div className=' h-screen bg-[#1D1B26] '>
   
    <Navbar/>
    <main className=" h-4/5 w-full flex-col flex items-center justify-center  bg-[#1D1B26] absolute">
      
      <TypingComponent />
      <p className='  text-lg md:text-xl m-12 text-center spacing tracking-wide font-semibold md:font-bold text-white' >
          {languages.home[0]}
          <br />
          {languages.home[1].intro}          
          
        </p>
      <div className=' h-1/6 w-1/2 flex items-center justify-center font-extrabold'>
        
        <Button classes={' flex items-center group-hover:text-white'} href={'projects'}>
          {languages.home[2].buttons[0]} 
          <AiOutlineFundProjectionScreen className=' text-violet-600 m-2 hover:text-white '/>
        </Button>
        {/* <Button classes={' flex items-center group-hover:text-white'} href={'contact'}>
          {languages.home[3].buttons[1]} 
          <AiOutlineUser className=' text-violet-600 m-2  hover:text-white'/>
        </Button> */}
      </div>
    </main>
    </div>
    </>
  )
}
