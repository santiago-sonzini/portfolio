
import TypingComponent from '../components/TypingComponent'
import Button from '../components/Button';


export default function Home() {
  return (
    <main className=" h-screen w-full flex-col flex items-center justify-center  dark:bg-[#1D1B26] absolute">
      <TypingComponent/>
      <p className='  text-lg md:text-xl m-12 text-center spacing tracking-wide font-semibold md:font-bold text-white' >
          Hello!, I am a web developer specialized on the backend / data scientist .
          <br />
          I am based on Argentina, and currently working for <a className=' text-violet-600 font-extrabold underline underline-offset-2' href="https://www.mycontrol.dev/">Mycontrol</a>
          <br />
          Learning Web3 and crypto technologies 
          <br />
          And studyng Artificial Inteligence and Robotics at <a className=' text-violet-600 font-extrabold underline underline-offset-2' href="https://21.edu.ar/"> Siglo 21 University </a>
          
          
        </p>
      <div className=' h-1/6 w-1/2 flex items-center justify-center font-extrabold'>
        
        <Button href={'projects'}>Projects</Button>
        <Button href={'contact'}>Contact</Button>
      </div>
    </main>
  )
}
