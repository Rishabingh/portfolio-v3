const Education = () => {
  return (
    <div className="mx-auto my-10 lg:w-[65%] md:px-0 px-4" id="education">
      <h1 className="text-4xl font-bold mb-10 text-center font-poppins text-[#3b82f6]">
        Education
      </h1>

      <div className="flex gap-14 flex-col w-full relative lg:w-[80%] mx-auto px-4 before:bg-gray-700 before:content-[''] before:absolute before:top-0 before:bottom-0 lg:before:left-1/2 before:w-1 before:transform lg:before:translate-x-1/2 before:left-4">



        <div className="relative lg:w-1/2 p-4 left-0 border border-gray-500 rounded-2xl
         lg:-mx-3 mx-8 
         before:bg-blue-500 before:content-[''] before:absolute before:top-5 before:w-4 before:h-4 before:rounded-full
         before:transform 
         before:-left-10 lg:before:left-auto lg:before:-right-6">
          <div className="text-4xl">2024-2027</div>

          <div className="mt-4 text-2xl">
            Bachelors In Computer Application(BCA)
          </div>

          <div className="h-1 w-full bg-blue-400 mt-1" />

          <div className="mt-2 text-gray-300">
            Indira Gandhi National Open Universtity, Delhi
          </div>

          <div className="text-gray-300 mt-4 leading-8">
            Did bachelors in computer application to solidify my knowledge in
            computers and programming and understand the fundamentals of
            computer science.
          </div>
          <div className="text-xl font-bold mt-4">Relevant courswork </div>
          <ul className="list-disc list-inside mt-2 text-gray-400 flex flex-col gap-2.5">
            <li>Data Structures & Algorithms</li>
            <li>Database Management (DBMS)</li>
            <li>Object-Oriented Programming (OOP)</li>
            <li>Computer Networks</li>
          </ul>
        </div>

        <div className="relative lg:w-1/2 p-4 left-0 lg:left-1/2 border-gray-500 rounded-2xl border lg:mx-5 mx-8 before:bg-blue-500 before:content-[''] before:absolute before:top-5 before:w-4 before:h-4 before:rounded-full before:transform lg:before:-left-6 before:-left-10">
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

        <div className="relative lg:w-1/2 p-4 left-0 border border-gray-500 rounded-2xl
         lg:-mx-3 mx-8 
         before:bg-blue-500 before:content-[''] before:absolute before:top-5 before:w-4 before:h-4 before:rounded-full
         before:transform 
         before:-left-10 lg:before:left-auto lg:before:-right-6">
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
    </div>
  );
};

export default Education;
