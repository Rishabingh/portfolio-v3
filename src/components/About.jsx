'use client'
import {motion} from 'motion/react'
import Image from 'next/image'
import {MoreHorizontal} from 'lucide-react'
import { Mail, Copy } from 'lucide-react'
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
    <div className='lg:w-[65%] mx-auto my-10' id='about'>
      <h1 className='text-4xl font-bold mb-10 text-center font-poppins text-[#3b82f6]'>About</h1>
      <div className='grid grid-cols-3 gird-rows-2 gap-4'>
        <motion.div 
        className='col-span-2 row-span-2 bg-slate-950 p-6 rounded-3xl text-lg tracking-widest leading-8 bg-cover ' 
        style={{backgroundImage: "url('/laptop-photo-bg.webp')", backgroundSize: 'cover', backgroundPosition: 'center'}}
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
            <h2 className="text-[#3b82f6] font-poppins font-semibold my-7">My Journey</h2>
            <ul className="drop-shadow-lg font-medium list-disc list-inside space-y-2">
              <li>Full-stack web developer and BCA student with a passion for clean, scalable applications.</li>
              <li>Started coding in 11th grade and discovered the thrill of turning ideas into interactive products.</li>
              <li>Enjoy solving complex problems and seeing projects come to life from concept to deployment.</li>
            </ul>
        </motion.div>

        <motion.div className='bg-slate-950 p-6 rounded-3xl text-lg tracking-widest leading-8'
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
          <h2 className="text-[#3b82f6] font-poppins font-semibold">Beyond The Code</h2>
          <ul className="drop-shadow-lg list-disc list-inside space-y-2">
            <li>Enjoy exploring new sci-fi books, stories & movies.</li>
            <li>Love capturing moments through photography.</li>
            <li>Always curious about creative ideas outside tech.</li>
          </ul>
        </motion.div>

        <motion.div 
        className='bg-slate-950 p-4 rounded-3xl tracking-widest leading-8 text-sm'
          initial={{
            opacity: 0,
            x: 200
          }}
          whileInView ={{
            opacity: 1.5,
            x: 0
          }}
          transition={{
            duration: 1,
            ease: "easeInOut"
          }}
        >

           <h2 className='text-[#3b82f6] font-poppins font-semibold text-lg'>Technologies</h2>
           <div className='flex flex-wrap mt-2'>       
            <ul className="flex flex-wrap gap-3 items-center">
              <li className="flex items-center gap-2 group">
                <Image 
                src="/react-logo.svg" alt="React" width={40} height={40}
                className="animate-spin group-hover:animate-none"
                />
              </li>
              <li className="flex items-center gap-2">
                <Image 
                src="/nextjs-logo.svg" alt="Next.js" width={40} height={40}
                className="bg-white rounded-md p-1"
                />
              </li>
              <li className="flex items-center gap-2">
                <Image 
                src="/js-logo.svg" alt="JavaScript" width={40} height={40}
                />
              </li>
              <li className="flex items-center gap-2">
                <Image 
                src="/tailwind-logo.svg" alt="Tailwind CSS" width={40} height={40}
                />
              </li>
             <li className="flex items-center gap-2">
                 <Image 
                 src="/node-logo.svg" alt="node" width={40} height={40}
                 />
               </li> 
             <li className="flex items-center gap-2">
                <Image 
                src="/mongodb-logo.svg" alt="MongoDB" width={40} height={40}
                />
              </li>   
              <li className="flex items-center gap-2">
                <Image 
                src="/express-logo.svg" alt="Express" width={40} height={40}
                className="bg-white rounded-md p-1"
                />
              </li> 
             <li className="flex items-center gap-2">
                  <Image 
                  src="/git-logo.svg" alt="Git" width={40} height={40}
                  />
                </li>
                <li className="flex items-center gap-2">
                  <Image 
                  src="/aws-logo.svg" alt="AWS" width={40} height={40}
                  className="bg-white rounded-md p-1"
                  />
                </li> 
                <li>
                  <MoreHorizontal />
                </li>                    
            </ul>
            </div>
         </motion.div>

      </div>
        <div className='mt-4'>

          <motion.div 
          className='bg-slate-950 p-6 rounded-3xl text-lg tracking-widest leading-8'
          initial={{
            opacity: 0,
            y: -200
          }}
          whileInView ={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut"
          }}
          >
            “I’m currently open to full-time roles, freelance gigs, and collaborative projects where I can contribute, learn, and grow. If you have an idea to discuss or just want to connect, feel free to reach out!
            <div className='flex gap-4 items-center'>
             <a href="mailto:rishabsiingh@outlook.com" className='flex gap-3 text-sm p-2 items-center hover:underline-offset-2 hover:underline'><Mail size={20} /> Email : rishabsiingh@outlook.com</a>
              <button
                className='flex gap-2 items-center px-2 py-1 rounded-2xl border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer'
                onClick={handleCopy}
              >
                <Copy size={20} /> {copied ? '✔ Copied' : 'Copy email'}
              </button>           
            </div> 
 
          </motion.div>

        </div>
    </div>
  )
}

export default About