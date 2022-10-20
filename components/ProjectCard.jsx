import React from 'react'
import Image from 'next/image'
import {BiLinkExternal} from 'react-icons/bi'
import { Link } from 'next/link';

const ProjectCard = ({project}) => {
    console.log('====================================');
    console.log(project);
    console.log('====================================');
  return (
    <div className=' w-1/3 h-4/5 p-4 bg-white m-5 rounded-md border border-violet-600 flex flex-col hover:translate-y-1.5 transition-all duration-300'>
        <span className=' border border-violet-600 rounded-md h-2/5   w-full'    >
        <Image
            src={project.pic}
            alt="Picture of the author"
            width="290px"
            height="150px"
            fill={true}
        />
        </span>
        
       <span className='flex items-center'>
        <a target="_blank" href={project.url} >
            <h3 className='  text-center  text-violet-600 font-extrabold text-3xl m-2 hover:underline transition-all duration-500 ' >{project.name} </h3>
        </a>
       {project.url ? <BiLinkExternal className=' text-violet-600 text-center font-extrabold text-2xl hover:underline transition-all duration-500 '/> : null}
       </span>
        <h4 className=' m-2 text-center  text-violet-600 font-normal text-lg '>({'Senior Backend Engenieer'})</h4>
        <div className=' flex flex-wrap items-center justify-center m-1'>
        {
            project.tech.map((item, i)=>{
                return <span key={i}  className=' m-1 text-white border bg-violet-600 font-bold p-1 px-2 rounded-md hover:scale-105 transition-all duration-150 hover:bg-white hover:text-violet-600  hover:border-violet-600'>{item}</span>
            })
        }
        </div>
    </div>
  )
}

export default ProjectCard