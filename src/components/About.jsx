'use client'
import {motion} from 'motion/react'
import Image from 'next/image'
import {MoreHorizontal} from 'lucide-react'
import { Mail, Copy, LocateIcon, Book, Code } from 'lucide-react'
import { useState } from 'react'

const About = () => {

  const [copied, setCopied] = useState(false);
  const email = "rishabsiingh@outlook.com";

  const handleCopy = () => {
  navigator.clipboard.writeText(email);
  setCopied(true);
  setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className='lg:w-[65%] mx-auto my-10 text-gray-100 lg:px-0 px-5 flex flex-col justify-center items-center' id='about'>
      <h1 className='text-4xl font-bold mb-10 text-center font-poppins text-[#3b82f6]'>About Me</h1>
      <div className='flex gap-8 md:flex-row flex-col justify-center mx-auto'>
        <div className='flex-1 flex flex-col'>
          <span className='text-6xl font-poppins font-medium flex gap-3 flex-col'>Hello again, I am <span className='text-[#3b82f6]'>Rishab Singh</span></span>
          <ul className='my-4 text-gray-400 flex flex-col gap-4'>
            <li className='flex gap-1.5'> <LocateIcon /> Delhi, India</li>
            <li className='flex gap-1.5'> <Book /> Doing Bachelors In Computer Application</li>
            <li className='flex gap-1.5'> <Code />  Full Stack Developer</li>
          </ul>
            <span className='leading-8'>
              I’m a full-stack developer from Delhi who loves building web apps that are simple, fast, and easy to use. There's a special satisfaction in working on both the frontend and backend, watching a project come together from start to finish. Alongside my hands-on projects, I'm currently pursuing my Bachelor's in Computer Applications to deepen my understanding of the fundamentals.
            </span>
            <div className='flex gap-3 items-baseline-last'>
              <a href="mailto:rishabsiingh@outlook.com" className='flex gap-3 mt-4 bg-slate-800 text-sm p-2 rounded items-center hover:bg-slate-700 transition-all duration-300 ease-in-out'><Mail /> Get In Touch</a>
              <button className='px-2 py-2 text-white border border-[#3b82f6] hover:bg-[#3b82f6] hover:text-black rounded flex gap-1.5 transition-all duration-300 ease-in-out items-center justify-center'
              onClick={handleCopy}
              >
                <Copy size={20} /> {copied ? '✔ Copied' : 'Copy email'}
                </button>
            </div>
        </div>
        <div className='flex-1'>
          <h2 className='text-lg text-gray-400 font-medium'>Key Sktills</h2>
          <ul className='flex gap-3 mt-3 flex-wrap'>
            <li className='bg-slate-800 p-1 rounded'>React</li>
            <li className='bg-slate-800 p-1 rounded'>Type Script</li>
            <li className='bg-slate-800 p-1 rounded'>Next js</li>
            <li className='bg-slate-800 p-1 rounded'>Node js</li>
            <li className='bg-slate-800 p-1 rounded'>Express</li>
            <li className='bg-slate-800 p-1 rounded'>TailwindCSS</li>
            <li className='bg-slate-800 p-1 rounded'>Aws</li>
            <li className='bg-slate-800 p-1 rounded'>C++</li>
            <li className='bg-slate-800 p-1 rounded'>More...</li>
          </ul>

          <div className='mt-4 flex gap-4 flex-wrap'>
            <a href="#education" className='px-2 py-2 text-white border border-[#3b82f6] hover:bg-[#3b82f6] hover:text-black rounded flex gap-1.5 transition-all duration-300 ease-in-out items-center justify-center'>See My Education & Certificates</a>
            <a href="#projects" className='px-2 py-2 text-white border border-[#3b82f6] hover:bg-[#3b82f6] hover:text-black rounded flex gap-1.5 transition-all duration-300 ease-in-out items-center justify-center'>See My Projects</a>
            <a href="#skills" className='px-2 py-2 text-white border border-[#3b82f6] hover:bg-[#3b82f6] hover:text-black rounded flex gap-1.5 transition-all duration-300 ease-in-out items-center justify-center'>See All Skills</a>
          </div>
        </div>
        </div>
    </div>
  )
}

export default About