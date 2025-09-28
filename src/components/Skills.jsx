'use client'
import Image from "next/image"
import {motion} from 'motion/react'

const Skills = () => {
  return (
    <div className='lg:w-[65%] mx-auto my-10 overflow-x-hidden' id='skills'>
        <h1 className='text-4xl font-bold mb-10 text-center font-poppins text-[#3b82f6]'>Skills</h1>
        <div className='grid lg:grid-cols-3 gap-8 md:grid-cols-2 grid-cols-1 md:px-0 px-4'>

          <motion.div className="frontend-development bg-slate-950 p-4 rounded-3xl text-base gap-4 flex flex-col"
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
            <h2 className="text-[#3b82f6] font-poppins font-semibold text-lg">Frontend Development</h2>
            <ul className="flex flex-wrap gap-4 flex-col">
              <li className="flex items-center gap-2 group">
                <Image 
                src="/react-logo.svg" alt="React" width={40} height={40}
                className="animate-spin group-hover:animate-none"
                />
                <span>React</span>
              </li>
              <li className="flex items-center gap-2">
                <Image 
                src="/nextjs-logo.svg" alt="Next.js" width={40} height={40}
                className="bg-white rounded-md p-1"
                />
                <span>Next.js</span>
              </li>
              <li className="flex items-center gap-2">
                <Image 
                src="/js-logo.svg" alt="JavaScript" width={40} height={40}
                />
                <span>JavaScript</span>
              </li>
              <li className="flex items-center gap-2">
                <Image 
                src="/html-logo.svg" alt="HTML" width={40} height={40}
                />
                <span>HTML</span>
              </li>
              <li className="flex items-center gap-2">
                <Image 
                src="/css-logo.svg" alt="CSS" width={40} height={40}
                />
                <span>CSS</span>
              </li>
              <li className="flex items-center gap-2">
                <Image 
                src="/tailwind-logo.svg" alt="Tailwind CSS" width={40} height={40}
                />
                <span>Tailwind CSS</span>
              </li>
            </ul>
          </motion.div>

          <motion.div className="backend-development bg-slate-950 p-4 rounded-3xl text-base gap-4 flex flex-col"
          initial={{
          opacity: 0,
          y: 200
        }}
        whileInView ={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 1,
          ease: "easeInOut"
        }}
          >
            <h2 className="text-[#3b82f6] font-poppins font-semibold text-lg">Backend & Database</h2>
            <ul className="flex flex-wrap gap-4 flex-col">
              <li className="flex items-center gap-2">
                <Image 
                src="/node-logo.svg" alt="node" width={40} height={40}
                />
                <span>Node.js</span>
              </li>
              <li className="flex items-center gap-2">
                <Image 
                src="/nextjs-logo.svg" alt="Next.js" width={40} height={40}
                className="bg-white rounded-md p-1"
                />
                <span>Next.js</span>
              </li>
              <li className="flex items-center gap-2">
                <Image 
                src="/mongodb-logo.svg" alt="MongoDB" width={40} height={40}
                />
                <span>MongoDB</span>
              </li>
              <li className="flex items-center gap-2">
                <Image 
                src="/express-logo.svg" alt="Express" width={40} height={40}
                className="bg-white rounded-md p-1"
                />
                <span>Express</span>
              </li>
              <li className="flex items-center gap-2">
                <Image 
                src="/img-logo.svg" alt="multer" width={40} height={40}
                className="bg-white rounded-md p-1"
                />
                <span>Multer</span>
              </li>
              <li className="flex items-center gap-2">
                <Image 
                src="/json-logo.svg" alt="jsonwebtoken" width={40} height={40}
                className="bg-white rounded-md p-1"
                />
                <span>JsonWebToken</span>
              </li>
            </ul>
          </motion.div>

          <motion.div className="tools-and-platforms bg-slate-950 p-4 rounded-3xl text-base gap-4 flex flex-col"
          initial={{
          opacity: 0,
          x: 200
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
            <h2 className="text-[#3b82f6] font-poppins font-semibold text-lg">Tools & Platforms</h2>
            <ul className="flex flex-wrap justify-around">
              <div className="flex flex-col gap-4">
                <li className="flex items-center gap-2">
                  <Image 
                  src="/git-logo.svg" alt="Git" width={40} height={40}
                  />
                  <span>Git</span>
                </li>
                <li className="flex items-center gap-2">
                  <Image 
                  src="/github-logo.svg" alt="GitHub" width={40} height={40}
                  />
                  <span>GitHub</span> 
                </li>
                <li className="flex items-center gap-2">
                  <Image 
                  src="/aws-logo.svg" alt="AWS" width={40} height={40}
                  className="bg-white rounded-md p-1"
                  />
                  <span>AWS</span>
                </li>
                <li className="flex items-center gap-2">
                  <Image 
                  src="/vercel-logo.svg" alt="Vercel" width={40} height={40}
                  className="bg-white rounded-md p-1"
                  />
                  <span>Vercel</span>
                </li>
                <li className="flex items-center gap-2">
                  <Image 
                  src="/cloudinary-logo.svg" alt="Cloudinary" width={40} height={40}
                  />
                  <span>Cloudinary</span>
                </li>
                <li className="flex items-center gap-2">
                  <Image 
                  src="/ubuntu-logo.svg" alt="Ubuntu" width={40} height={40}
                  />
                  <span>Ubuntu</span>
                </li>
          
              </div>

              <div className="flex flex-col gap-4">
                  <li className="flex items-center gap-2">
                    <Image 
                    src="/nginx-logo.svg" alt="Nginx" width={40} height={40}
                    />
                    <span>Nginx</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Image 
                    src="/postman-logo.svg" alt="Postman" width={40} height={40}
                    />
                    <span>Postman</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Image 
                    src="/docker-logo.svg" alt="Docker" width={40} height={40}
                    />
                    <span>Docker</span>
                  </li>
              </div>
    
            </ul>
          </motion.div>


        </div>
    </div>
  )
}

export default Skills