import Image from "next/image"
import { Download, Github, Twitter, Linkedin } from "lucide-react"

const Hero = () => {
  return (
    <div className="flex lg:w-[60%] justify-self-center" id="home">
      <div className="flex flex-col gap-4 flex-1">
        <div className="text-lg font-semibold">Full Stack Web Developer</div>
        <div className="flex flex-col gap-4 font-poppins"><span className="text-8xl font-bold">Hello I'm</span><span className="text-8xl font-bold text-[#3b82f6]">Rishab Singh</span></div>
        <div className="leading-7 tracking-wide mt-8">
          full-stack developer based in Delhi, India. I specialize in building robust and scalable web applications. My expertise in modern JavaScript frameworks and backend technologies allows me to create seamless digital products.
        </div>

        <div className="mt-8 flex gap-6 items-center">
          <button className="bg-transparent text-[#3b82f6] border-2 border-[#3b82f6] px-6 py-3 rounded-4xl hover:bg-[#2563eb] hover:text-black transition duration-300 flex gap-2">Download Cv <Download size={20} /> </button>
          <div className="flex gap-4 items-center justify-center">
            <a 
              href="https://github.com/rishabingh" 
              target="_blank" 
              rel="noopener noreferrer"
             >
                <Github size={50} className="text-[#3b82f6] transition duration-300 border-2 border-[#3b82f6] rounded-full p-2 hover:bg-[#2563eb] hover:text-black"/>
             </a>
            <a 
              href="https://x.com/rishabsiingh" 
              target="_blank" 
              rel="noopener noreferrer"
             >
                <Twitter size={50} className="text-[#3b82f6] transition duration-300 border-2 border-[#3b82f6] rounded-full p-2 hover:bg-[#2563eb] hover:text-black"/>
             </a>
            <a 
              href="https://www.linkedin.com/in/rishabsingh2/" 
              target="_blank" 
              rel="noopener noreferrer"
             >
                <Linkedin size={50} className="text-[#3b82f6] transition duration-300 border-2 border-[#3b82f6] rounded-full p-2 hover:bg-[#2563eb] hover:text-black"/>
             </a>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Image
        src="/compressed-final.webp"
        width={400}
        height={400}
        alt="my-photo"
        className="rounded-full"
       />
      </div>
    </div>
  )
}

export default Hero