import React, {useState} from 'react'
import Button from '../components/Button'
import ProjectCard from '../components/ProjectCard'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Navbar from '../components/Navbar';

const Projects = () => {
  const [projects, setProjects] = useState([{url: "https://www.mycontrol.dev/", name: "MyControl", tech: ['React',  "CSS ", "JS"], position: 'Full Stack Dev'},{url: null,name: "Delthy", tech: ['NextJs', "Prisma.io", "Express", "JWT", "TailwindCSS", "MySQL", "TypeScript"], position: 'Backend Developer'}])

  return (

    <>
      <Navbar/>
      <div className=" h-screen lg:h-full w-full  flex items-center justify-center  dark:bg-[#1D1B26]">
        

        <main className=' w-full h-screen md:w-2/3  dark:bg-[#1D1B26]'>
            <div className=' flex items-center '>
              <h1 className='text-white text-5xl md:text-6xl  font-extrabold underline underline-offset-4'>Projects:</h1>
            </div>
            <div className=' md:h-2/3 h-5/6  w-full   flex  flex-wrap  justify-center items-center dark:bg-[#1D1B26] ' >

              <Button href={'/'}  classes={' lg:flex  items-center text-bold w-12 h-12 m-0  hidden '} >
              <FiArrowLeft className=''/>
              </Button>
            {
              projects.map((project, i)=>{
                return <ProjectCard key={i} project={project}/>
              })
            }
            <Button href={'/'}  classes={'hidden lg:flex   items-center text-bold w-12 h-12 m-0' } >
            <FiArrowRight/>
            </Button>
            </div>
        </main>
        
    </div>
    
    </>
  )
}

export default Projects