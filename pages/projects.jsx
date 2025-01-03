import React, { useState } from "react";

import Navbar from "../components/Navbar";
import PaginatedItems from "../components/Pagination";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      name: "Delthy",
      tech: [
        "NextJs",
        "Prisma.io",
        "TailwindCSS",
        "TypeScript",
      ],
      position: "Full Stack Developer",
      url: "https://www.delthy.xyz",
    },
    {
      name: "Delthy Learning",
      tech: [
        "NextJs",
        "Prisma.io",
        "TailwindCSS",
        "TypeScript",
      ],
      position: "Full Stack Developer",
      url: "https://learning.delthy.xyz",
    },
    {
      url: null,
      name: "NoCountry c-13",
      tech: [
        "NextJs",
        "Prisma.io",
        "NextAuth",
        "TailwindCSS",
        "PostgreSQL",
        "TypeScript",
      ],
      position: "FullStack Developer",
    },
    {
      url: null,
      name: "MyControl",
      tech: ["React", "CSS ", "JS"],
      position: "FullStack Developer",
    },
    {
      url: null,
      name: "Summarize",
      tech: [
        "NextJs",
        "Prisma.io",
        "OpenAI",
        "NextAuth",
        "TailwindCSS",
        "PostgreSQL",
        "TypeScript",
      ],
      position: "FullStack Developer",
    },
    
  ]);

  return (
    <>
      <Navbar />
      <div className=" h-screen lg:h-full w-full  flex items-center justify-center  bg-[#1D1B26]">
        <main className=" w-full h-screen md:w-2/3  bg-[#1D1B26]">
          <div className=" md:h-5/6 h-5/6  w-full   flex  flex-wrap  justify-center items-center bg-[#1D1B26] ">
            <PaginatedItems items={projects} itemsPerPage={2} />
          </div>
        </main>
      </div>
    </>
  );
};

export default Projects;
