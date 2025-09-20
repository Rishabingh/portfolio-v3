import React from 'react'

const Education = () => {
  return (
    <div className="mx-auto my-10 lg:w-[65%]" id="projects">
      <h1 className='text-4xl font-bold mb-10 text-center font-poppins text-[#3b82f6]'>Education</h1>
      <div className='grid grid-cols-3 grid-rows-2 gap-4'>
         <div className='bg-slate-950 p-3 rounded-3xl col-span-2 row-span-2 ' >
            <h3 className="text-xl font-bold text-blue-400 mb-4">University Degree</h3>
              <div className="space-y-3 text-gray-300">
                <p>
                  <strong>Degree:</strong> Bachelor of Computer Applications (BCA)
                </p>
                <p>
                  <strong>Institution:</strong> Indira Gandhi National Open University (IGNOU), Delhi
                </p>
                <p>
                  <strong>Date:</strong> 2024 - 2027 (Expected Graduation)
                </p>
                <div>
                  <strong>Relevant Coursework:</strong>
                  <ul className="list-disc list-inside mt-2 text-gray-400">
                    <li>Data Structures & Algorithms</li>
                    <li>Database Management (DBMS)</li>
                    <li>Object-Oriented Programming (OOP)</li>
                    <li>Computer Networks</li>
                  </ul>
                </div>
              </div>
         </div>

         <div className='bg-slate-950 p-3 rounded-3xl bg-center bg-cover text-shadow-md text-shadow-black' style={{backgroundImage: 'url(/book-shelf-Edited.webp'}}>
            <h3 className="text-xl font-bold text-blue-400 mb-4">Higher Secondary Education</h3>
            <div className="space-y-3 text-gray-300">
              <p>
                <strong>Degree:</strong> Senior Secondary (Class XII)
              </p>
              <p>
                <strong>Institution:</strong> Govt. Boys Senior Secondary School, Badarpur
              </p>
              <p>
                <strong>Board:</strong> CBSE
              </p>
              <p>
                <strong>Graduation:</strong> 2024
              </p>
              <p>
                <strong>Stream:</strong> Science (PCM)
              </p>
            </div>
         </div>

         <div className='bg-slate-950 p-3 rounded-3xl'>
            <h3 className="text-xl font-bold text-blue-400 mb-4">Certifications</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <p>The Complete 2023 Web Development Bootcamp</p>
                <span className="text-sm text-gray-400">- Dr. Angela Yu, Udemy</span>
              </div>
              <div>
                <p>The Complete JavaScript Course 2023: From Zero to Expert!</p>
                <span className="text-sm text-gray-400">- Jonas Schmedtmann, Udemy</span>
              </div>
            </div>

         </div>
      </div>


    </div>
  )
}

export default Education