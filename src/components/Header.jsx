'use client'
import {Link as ScrollLink} from 'react-scroll'
import { Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
  // hero section
  // about me
  // skills 
  // projects 
  // contact 
  // exp/cert/education
  const [theme, setTheme] = useState("dark")
  return (
    <div className='fixed left-0 right-0 top-0'>
      <nav className='flex justify-around w-full p-8 items-center font-inter'>
        <ul className='flex gap-12 items-center'>
          <li>
            <Link
            href="/"
            >
              <Image
              src="/ready-logo.webp"
              alt="name logo"                                       
              priority                                   
              className="rounded-lg shadow-lg"
              width={80}
              height={80}
              placeholder="blur"
              blurDataURL="data:image/png;base64,..."
            />
            </Link>
          </li>
          <li><ScrollLink
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          activeClass='active'
          className="cursor-pointer"
          offset={-250}
          >
            Home
            </ScrollLink></li>

          <li><ScrollLink
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          activeClass='active'
          className="cursor-pointer"
          >
            About-Me
            </ScrollLink></li>

          <li><ScrollLink
          to="skills"
          spy={true}
          smooth={true}
          duration={500}
          activeClass='active'
          className="cursor-pointer"
          >
            Skills
            </ScrollLink></li>

          <li><ScrollLink
          to="projects"
          spy="true"
          smooth={true}
          duration={500}
          activeClass='active'
          className="cursor-pointer"
          >
            Projects
            </ScrollLink></li>
 
        </ul>
          
        <ul>
           <li>
             <button>
               {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
             </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header