"use client";
import { motion } from "motion/react";

import { Github, Twitter, Linkedin, Mail } from "lucide-react"

const HeroApps = () => {
  return (
    <div className="flex gap-4 items-center justify-center">
      <motion.a
        href="https://github.com/rishabingh"
        target="_blank"
        rel="noopener noreferrer"
        initial={{
          opacity: 0,
          x: -20
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        transition={{
          duration: 1,
          ease: 'easeInOut'
        }}
      >
        <Github
          size={50}
          className="text-[#3b82f6] transition duration-300 border-2 border-[#3b82f6] rounded-full p-2 hover:bg-[#2563eb] hover:text-black"
        />
      </motion.a>
      <motion.a
        href="https://x.com/rishabsiingh"
        target="_blank"
        rel="noopener noreferrer"
        initial= {{
          opacity: 0,
          y: -20
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 1,
          ease: "easeInOut"
        }}
      >
        <Twitter
          size={50}
          className="text-[#3b82f6] transition duration-300 border-2 border-[#3b82f6] rounded-full p-2 hover:bg-[#2563eb] hover:text-black"
        />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/rishabsingh2/"
        target="_blank"
        rel="noopener noreferrer"
        initial = {{
          opacity: 0,
          x: 20
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        transition={{
          duration: 1,
          ease: "easeInOut"
        }}
      >
        <Linkedin
          size={50}
          className="text-[#3b82f6] transition duration-300 border-2 border-[#3b82f6] rounded-full p-2 hover:bg-[#2563eb] hover:text-black"
        />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/rishabsingh2/"
        target="_blank"
        rel="noopener noreferrer"
        initial = {{
          opacity: 0,
          x: 20
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        transition={{
          duration: 1,
          ease: "easeInOut"
        }}
      >
        <Mail
          size={50}
          className="text-[#3b82f6] transition duration-300 border-2 border-[#3b82f6] rounded-full p-2 hover:bg-[#2563eb] hover:text-black"
        />
      </motion.a>
    </div>
  );
};

export default HeroApps;
