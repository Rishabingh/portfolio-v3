'use client'
import {Link as ScrollLink} from 'react-scroll'
import { Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useScroll from '@/hooks/useScroll';
const Header = () => {

  const [theme, setTheme] = useState("dark")
  const scrolled = useScroll(50)
  return (
    <div className='fixed left-0 right-0 top-0 z-40 hidden lg:block'>
      <nav className= {`flex justify-around w-full items-center font-inter transition-all duration-300 px-8 ${scrolled ? 'backdrop-blur-md bg-black/30 py-3' : 'bg-transparent py-8'}`}>
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
          className="cursor-pointer transition-colors duration-300"
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
          className="cursor-pointer transition-colors duration-300"
          offset={-180}
          >
            About-Me
            </ScrollLink></li>

          <li><ScrollLink
          to="skills"
          spy={true}
          smooth={true}
          duration={500}
          offset={-180}
          activeClass='active'
          className="cursor-pointer transition-colors duration-300"
          >
            Skills
            </ScrollLink></li>

          <li><ScrollLink
          to="projects"
          spy="true"
          smooth={true}
          duration={500}
          offset={-180}
          activeClass='active'
          className="cursor-pointer transition-colors duration-300"
          >
            Projects
            </ScrollLink></li>
            
          <li><ScrollLink
          to="contact"
          spy="true"
          smooth={true}
          duration={500}
          offset={-180}
          activeClass='active'
          className="cursor-pointer transition-colors duration-300"
          >
            Contact
            </ScrollLink></li>

          <li><ScrollLink
          to="education"
          spy="true"
          smooth={true}
          duration={500}
          offset={-180}
          activeClass='active'
          className="cursor-pointer transition-colors duration-300"
          >
            Education
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