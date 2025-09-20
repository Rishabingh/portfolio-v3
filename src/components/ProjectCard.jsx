import React from 'react'
import Image from 'next/image'
import { Globe } from 'lucide-react'
const ProjectCard = () => {
  return (
    <div className="rounded-2xl w-80 text-sm">
      <div className='relative rounded-t-2xl w-80 aspect-video overflow-hidden'>
        <Image
        src="/stripe-project-screenshot.webp"
        alt="Project Image"
        fill
        className="rounded-t-2xl mb-4 object-cover object-center"
      />
      </div>
      <div className='border border-gray-600 px-1 py-2 rounded-b-2xl'>
      <h2 className="text-xl font-bold mb-2 mt-3 font-poppins">Mangotar</h2>
      <div className='text-base mb-4'>Apr 2025 - Sept 2025</div>
      <div className='text-justify leading-7 tracking-wide text-gray-400'>
        This project was developed to explore serverless functions. I focused on creating a seamless user experience and writing clean, scalable code to build a modern and efficient application.
      </div>
      <div className='flex gap-3 flex-wrap mt-4'>
        <span className='bg-slate-800 rounded p-1'>Next.js</span>
        <span className='bg-slate-800 rounded p-1'>tailwindcss</span>
        <span className='bg-slate-800 rounded p-1'>Json Web Token</span>
        <span className='bg-slate-800 rounded p-1'>Multer</span>
        <span className='bg-slate-800 rounded p-1'>Mongodb & mongoose</span>
      </div>
      <div className='flex gap-x-6 gap-y-3 mt-6 flex-wrap'>
        <a href="https://mangotar.vercel.app/" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 text-[#3b82f6] hover:bg-[#3b82f6] hover:text-black border-[#3b82f6] border rounded-xl px-2 py-1 w-fit'>
          <Globe size={16}/>
          Live Demo
        </a>
        <a href="https://mangotar.vercel.app/" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 text-[#3b82f6] hover:bg-[#3b82f6] hover:text-black border-[#3b82f6] border rounded-xl px-2 py-1 w-fit'>
          <Globe size={16}/>
          Source
        </a>
        <a href="https://mangotar.vercel.app/" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 text-[#3b82f6] hover:bg-[#3b82f6] hover:text-black border-[#3b82f6] border rounded-xl px-2 py-1 w-fit'>
          <Globe size={16}/>
          Case Study
        </a>
      </div>
      </div>
    </div>
  )
}

export default ProjectCard