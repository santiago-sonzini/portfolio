
import TypingComponent from '../components/TypingComponent'
import Button from '../components/Button';
import { useContext } from "react";
import AppContext from '../context/state';
import Navbar from '../components/Navbar';


export default function Home() {

  const value = useContext(AppContext);


  let {languages} = value.state
  console.log('====================================');
  console.log(languages);
  console.log('====================================');
  return (
    <>
    
    <div className=' h-screen dark:bg-[#1D1B26] '>
    <Navbar/>
    <main className=" h-4/5 w-full flex-col flex items-center justify-center  dark:bg-[#1D1B26] absolute">
      
      <TypingComponent />
      <p className='  text-lg md:text-xl m-12 text-center spacing tracking-wide font-semibold md:font-bold text-white' >
          {languages.home[0]}
          <br />
          {languages.home[1].intro}

          <a className=' text-violet-600 font-extrabold underline underline-offset-2' href={languages.home[1].link}>{languages.home[1].value}</a>
          <br />
          {languages.home[2]}

          <br />
          {languages.home[3].intro}

           <a className=' text-violet-600 font-extrabold underline underline-offset-2' href={languages.home[3].link}> {languages.home[3].value} </a>
          
          
        </p>
      <div className=' h-1/6 w-1/2 flex items-center justify-center font-extrabold'>
        
        <Button href={'projects'}>{languages.home[4].buttons[0]}</Button>
        <Button href={'contact'}>{languages.home[4].buttons[1]}</Button>
      </div>
    </main>
    </div>
    </>
  )
}
