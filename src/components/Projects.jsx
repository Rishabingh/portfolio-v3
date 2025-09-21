'use client'
import ProjectCard from "./ProjectCard"
import {motion} from 'motion/react'
const Projects = () => {
  return (
    <div className="mx-auto my-10 lg:w-[65%]" id="projects">
      <h1 className='text-4xl font-bold mb-10 text-center font-poppins text-[#3b82f6]'>My Projects</h1>
    
      <div className="text-center text-xl tracking-widest leading-8 mb-10 text-wrap">
          I'm passionate about building robust and user-friendly web applications from the ground up. I enjoy turning complex problems into elegant digital solutions. Below are some of the projects I'm most proud of.
      </div>
      <div className="flex gap-8 justify-around">
        <motion.div
         initial={{
          opacity: 0,
          x: -200
        }}
        whileInView ={{
          opacity: 1,
          x: 0
        }}
        transition={{
          duration: 1,
          ease: "easeInOut"
        }}
        >
          <ProjectCard />
        </motion.div>
        <motion.div
         initial={{
          opacity: 0,
          y: 200
        }}
        whileInView ={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 2,
          ease: "easeInOut"
        }}
        >
          <ProjectCard />
        </motion.div>
        <motion.div
         initial={{
          opacity: 0,
          x: 200
        }}
        whileInView ={{
          opacity: 1,
          x: 0
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut"
        }}
        >
          <ProjectCard />
        </motion.div>

      </div>
    </div>
  )
}


export default Projects