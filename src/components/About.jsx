'use client'
import {motion} from 'motion/react'

const About = () => {
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
          <h2 className='text-[#3b82f6] font-poppins font-semibold my-7'>My Journey</h2>
          <span className='drop-shadow-lg font-medium'>
              Hello again! I'm Rishab, My journey into tech began during my studies in 11th Class, where I discovered the incredible power of turning a line of code into a functional, beautiful application that people can interact with. I'm driven by the challenge of solving complex problems and the satisfaction of seeing a project come to life. Currently Doing Bachelors in Computer Applications (BCA).
          </span>

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
          <h2 className='text-[#3b82f6] font-poppins font-semibold'>Beyond The Code</h2>
          When I'm not coding, you can usually find me exploring the latest in sci-fi literature or photographing the world around me.
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
           <div className='flex flex-wrap gap-2'>       
            <span className=' text-gray-50 bg-black px-2 py-1 rounded-md'>React</span>
            <span className=' text-gray-50 bg-black px-2 py-1 rounded-md'>Next.js</span>
            <span className=' text-gray-50 bg-black px-2 py-1 rounded-md'>Node.js</span>
            <span className=' text-gray-50 bg-black px-2 py-1 rounded-md'>Express.js</span>
            <span className=' text-gray-50 bg-black px-2 py-1 rounded-md'>MongoDB</span>
            <span className=' text-gray-50 bg-black px-2 py-1 rounded-md'>JavaScript (ES6+)</span>
            <span className=' text-gray-50 bg-black px-2 py-1 rounded-md'>CSS3</span>
            <span className=' text-gray-50 bg-black px-2 py-1 rounded-md'>Tailwind CSS</span>
            <span className=' text-gray-50 bg-black px-2 py-1 rounded-md'>Git & GitHub</span>
            <span className=' text-gray-50 bg-black px-2 py-1 rounded-md'>AWS</span>
            <span className=' text-gray-50 bg-black px-2 py-1 rounded-md'>...</span>
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
            "I'm currently open to new opportunities and collaborative projects where I can contribute, learn, and grow. If you have an idea you'd like to discuss or just want to connect, feel free to reach out!"
          </motion.div>

        </div>
    </div>
  )
}

export default About