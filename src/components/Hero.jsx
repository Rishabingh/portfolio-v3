import AnimatedLogo from "./AnimatedLogo"
import Image from "next/image"
import HeroApp from '@/components/HeroApps'
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

          <HeroApp />

        </div>
      </div>
      <div className="flex-1 flex justify-center items-center relative">
 
        <Image
        src="/compressed-final.webp"
        width={400}
        height={400}
        alt="my-photo"
        className="rounded-full"
       />

       <AnimatedLogo 
       className = 'absolute top-0 w-full h-full scale-90'
      />
      </div>
    </div>
  )
}

export default Hero