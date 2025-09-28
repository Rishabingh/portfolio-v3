import React from 'react'
import Image from 'next/image'
import { Globe, Github, Book } from 'lucide-react'
const ProjectCard = ({img, title, date, description, tags, demoLink, sourceLink, caseStudy}) => {
  return (
    <div className="rounded-2xl w-80 text-sm">
      <div className='relative rounded-t-2xl w-80 aspect-video overflow-hidden'>
        <Image
        src={img}
        alt="Project Image"
        fill
        className="rounded-t-2xl mb-4 object-cover object-center"
      />
      </div>
      <div className='border border-gray-600 px-1 py-2 rounded-b-2xl'>
      <h2 className="text-xl font-bold mb-2 mt-3 font-poppins">{title}</h2>
      <div className='text-base mb-4'>{date}</div>
      <div className='text-justify leading-7 tracking-wide text-gray-400'>
        {description}
      </div>
      <div className='flex gap-3 flex-wrap mt-4'>
        {tags.map((tag, index) => (
           <span key={index} className='bg-slate-800 rounded p-1'>{tag}</span>
        ))}
      </div>
      <div className='flex gap-x-6 gap-y-3 mt-6 flex-wrap'>
        <a href={demoLink} target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 text-[#3b82f6] hover:bg-[#3b82f6] hover:text-black border-[#3b82f6] border-2 rounded-xl px-2 py-1 w-fit'>
          <Globe size={16}/>
          Live Demo
        </a>
        <a href={sourceLink} target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 text-[#3b82f6] hover:bg-[#3b82f6] hover:text-black border-[#3b82f6] border-2 rounded-xl px-2 py-1 w-fit'>
          <Github size={16}/>
          Source
        </a>
        <a href={caseStudy} target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 text-[#3b82f6] hover:bg-[#3b82f6] hover:text-black border-[#3b82f6] border-2 rounded-xl px-2 py-1 w-fit'>
          <Book size={16}/>
          Case Study
        </a>
      </div>
      </div>
    </div>
  )
}

export default ProjectCard