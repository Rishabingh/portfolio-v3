'use client'
import {motion} from 'motion/react'
const Education = () => {
  return (
    <div className="mx-auto my-10 lg:w-[65%]" id="education">
      <h1 className='text-4xl font-bold mb-10 text-center font-poppins text-[#3b82f6]'>Education</h1>
      
        <div className='flex gap-14 flex-col w-full relative lg:w-[80%] mx-auto'>

          <div className="left justify-start flex w-full">

            <div className='border max-w-md border-gray-500 p-5 relative before:content-[""] before:absolute before:top-5 before:-right-12 before:w-12 before:h-0.5 before:bg-blue-400'
            
            >
              <div className='text-4xl'>2024-2027</div>

              <div className='mt-4 text-2xl'>Bachelors In Computer Application(BCA)</div>

              <div className='h-1 w-full bg-blue-400 mt-1' />

              <div className='mt-2 text-gray-300'>
                Indira Gandhi National Open Universtity, Delhi
              </div>

              <div className='text-gray-300 mt-4 leading-8'>
                Did bachelors in computer application to solidify my knowledge in computers and programming and understand the fundamentals of computer science.
              </div>
              <div className='text-xl font-bold mt-4'>Relevant courswork </div>
                <ul className="list-disc list-inside mt-2 text-gray-400 flex flex-col gap-2.5">
                    <li>Data Structures & Algorithms</li>
                    <li>Database Management (DBMS)</li>
                    <li>Object-Oriented Programming (OOP)</li>
                    <li>Computer Networks</li>
                </ul>
            </div>

          </div>

           <div className='absolute left-1/2 top-0 h-full w-1 bg-gray-700' />

          <div className="right justify-end flex w-full">
            <div className='border relative border-gray-500 p-5 max-w-md before:content-[""] before:absolute before:top-5 before:-left-12 before:w-12 before:h-0.5 before:bg-blue-400'>
              <div className='text-4xl'>2025</div>

              <div className='mt-4 text-2xl'>Full Stack Web Development Course</div>

              <div className='h-1 w-full bg-blue-400 mt-1' />

              <div className='mt-2 text-gray-300'>
                Hitesh Choudhary - Udemy
              </div>

              <div className='text-gray-300 mt-4 leading-8'>
                Did a full stack web Development course and learn a lot of things from it.
              </div>
              <div className='text-xl font-bold mt-4'>Relevant courswork</div>
                <ul className="list-disc list-inside mt-2 text-gray-400 flex flex-col gap-2.5">
                    <li>Html, Css, Js</li>
                    <li>NodeJs, ExpressJs, MongodDb, Mysql, PostgressSQL</li>
                    <li>React, Nextjs, TailwindCSS, Deployment, Docker</li>
                    <li>User Authentication through jsonWebToken, File Handling through Multer</li>
                    <li>Built multiple full stack projects</li>
                </ul>
            </div>
          </div>

            <div className="left justify-start flex w-full">

            <div className='border max-w-md border-gray-500 p-5 relative before:content-[""] before:absolute before:top-5 before:-right-12 before:w-12 before:h-0.5 before:bg-blue-400'
            
            >
              <div className='text-4xl'>2023-2024</div>

              <div className='mt-4 text-2xl'>12th Class, Higher Secodary School</div>

              <div className='h-1 w-full bg-blue-400 mt-1' />

              <div className='mt-2 text-gray-300'>
                Government Boys Senior Secondary School(CBSE), Delhi
              </div>

              <div className='text-gray-300 mt-4 leading-8'>
                Did my higer Secondary school with physics, chemistry and math.
              </div>
              <div className='text-xl font-bold mt-4'>Relevant courswork </div>
                <ul className="list-disc list-inside mt-2 text-gray-400 flex flex-col gap-2.5">
                    <li>Math</li>
                    <li>English</li>
                </ul>
            </div>
            
          </div>

            <div className="right justify-end flex w-full">

            <div className='border max-w-md border-gray-500 p-5 relative before:content-[""] before:absolute before:top-5 before:-left-12 before:w-12 before:h-0.5 before:bg-blue-400'
            
            >
              <div className='text-4xl'>2022-2023</div>

              <div className='mt-4 text-2xl'>10th Class, Secodary School</div>

              <div className='h-1 w-full bg-blue-400 mt-1' />

              <div className='mt-2 text-gray-300'>
                Government Boys Senior Secondary School(CBSE), Delhi
              </div>

              <div className='text-gray-300 mt-4 leading-8'>
                Did my higer Secondary school with Science, Math, English, Hindi, Social Studies, Sanskrit.
              </div>
              <div className='text-xl font-bold mt-4'>Relevant courswork </div>
                <ul className="list-disc list-inside mt-2 text-gray-400 flex flex-col gap-2.5">
                    <li>Math</li>
                    <li>English</li>
                </ul>
            </div>
            
          </div>

        </div>

    </div>
  )
}

export default Education