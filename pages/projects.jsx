import React, {useState} from 'react'
import Button from '../components/Button'
import ProjectCard from '../components/ProjectCard'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import mypic from '../public/delthy.png'

const Projects = () => {
  const [projects, setProjects] = useState([{url: "https://www.mycontrol.dev/", name: "Delthy",pic: mypic, tech: ['NextJs', "Prisma.io", "Express", "JWT", "TailwindCSS", "MySQL", "TypeScript"]},{url: "https://www.mycontrol.dev/",name: "Delthy",pic: mypic, tech: ['NextJs', "Prisma.io", "Express", "JWT", "TailwindCSS", "MySQL", "TypeScript"]}])

  return (
    <div className=" h-full w-full  flex items-center justify-center  dark:bg-[#1D1B26]">
        

        <main className=' h-screen w-2/3  '>
            <div className=' flex items-center '>
              <Button classes={'    w-16 h-16 '} href={'/'}><FiArrowLeft/></Button>
              <h1 className='text-white text-6xl m-20 font-extrabold underline underline-offset-4'>Projects:</h1>
            </div>
            <div className=' h-2/3 w-full   flex  flex-wrap  justify-center items-center'>

              <Button href={'/'}  classes={' flex  items-center text-bold w-12 h-12 m-0'} >
              <FiArrowLeft/>
              </Button>
            {
              projects.map((project, i)=>{
                return <ProjectCard key={i} project={project}/>
              })
            }
            <Button href={'/'}  classes={' flex  items-center text-bold w-12 h-12 m-0' } >
            <FiArrowRight/>
            </Button>
            </div>
        </main>
        
    </div>
  )
}

export default Projects