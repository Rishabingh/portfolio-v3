import ProjectCard from "./ProjectCard"

const Projects = () => {
  return (
    <div className="mx-auto my-10 lg:w-[65%]" id="projects">
      <h1 className='text-4xl font-bold mb-10 text-center font-poppins text-[#3b82f6]'>My Projects</h1>
    
      <div className="text-center text-xl tracking-widest leading-8 mb-10 text-wrap">
          I'm passionate about building robust and user-friendly web applications from the ground up. I enjoy turning complex problems into elegant digital solutions. Below are some of the projects I'm most proud of.
      </div>
      <div className="flex gap-8 justify-around">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}

export default Projects