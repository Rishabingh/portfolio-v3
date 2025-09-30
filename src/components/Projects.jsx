'use client'
import ProjectCard from "./ProjectCard"
import {motion} from 'motion/react'
const Projects = () => {
  return (
    <div className="mx-auto my-10 lg:w-[65%] lg:px-0 px-4 overflow-x-hidden overflow-y-hidden flex flex-col" id="projects">
      <h1 className='text-4xl font-bold mb-10 text-center font-poppins text-[#3b82f6]'>My Projects</h1>
    
      <div className="text-center text-xl tracking-widest leading-8 mb-10 text-wrap">
          I'm passionate about building robust and user-friendly web applications from the ground up. I enjoy turning complex problems into elegant digital solutions. Below are some of the projects I'm most proud of.
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mx-auto justify-center items-center">
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
          <ProjectCard
          img={"/tictactoe-project-screenshot.webp"}
          title={"Tic-Tac-Toe"}
          date={"August 2025 - August 2025"}
          description={"A simple Tic Tac Toe game, its a dual player game you can enjoy with your friends it have robust score system and reset game option its a very light weight game."}
          tags={['JavaScript', 'Css', 'Html', 'emoji']}
          demoLink={'https://rishab-tic-tac-toe.netlify.app/'}
          sourceLink={'https://github.com/Rishabingh/tic-tac-toe'}
          caseStudy={'#'}
          />
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
          <ProjectCard
          img={"/movie-project-screenshot.webp"}
          title={"Movie Search Project"}
          date={"December 2024 - December 2024"}
          description={"A simple Movie Search Project, Beautifully Using the omdb api for getting movie data and using search query to get more details about movie on next page."}
          tags={['JavaScript', 'Tailwindcss', 'OmdbApi']}
          demoLink={'https://rishab-movie-search-project.netlify.app/'}
          sourceLink={'https://github.com/Rishabingh/new-movie-search'}
          caseStudy={'#'}
          />
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
          <ProjectCard
          img={"/rockpaperscissor-project-screenshot.webp"}
          title={"rock paper scissor"}
          date={"November 2024 - November 2024"}
          description={"A simple rock paper scissor game, which you can play with computer, save your score safely in local storage and have visual feedbacks for immersive experience"}
          tags={['JavaScript', 'Css', 'Html', 'emoji']}
          demoLink={'https://rishabrockpaperscissors.netlify.app/'}
          sourceLink={'https://github.com/Rishabingh/Rock-paper-scissors'}
          caseStudy={'#'}
          />
        </motion.div>

      </div>
    </div>
  )
}


export default Projects