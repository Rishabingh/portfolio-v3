import AnimatedLogo from "./AnimatedLogo"
import Image from "next/image"
import HeroApp from "@/components/HeroApps"
import { Download } from "lucide-react"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:w-[60%] justify-self-center items-center md:gap-10 md:py-10 py-4 md:px-0 px-3" id="home">
      
      {/* Left Section */}
      <div className="flex flex-col gap-4 flex-1 text-center lg:text-left">
        <div className="text-lg font-semibold">Full Stack Web Developer</div>

        <div className="flex flex-col mg:gap-4 font-poppins">
          <span className="text-4xl lg:text-8xl font-bold">Hello I'm</span>
          <span className="text-4xl lg:text-8xl font-bold text-[#3b82f6]">
            <TextGenerateEffect words="Rishab Singh" />
          </span>
        </div>

        <div className="md:leading-7 tracking-wide md:mt-6 max-w-xl mx-auto lg:mx-0">
          I’m a full-stack developer based in Delhi,India. I like building web apps that are simple, fast, and easy to use.
          I work on both the frontend and backend, so I enjoy seeing a project come together from start to finish.
        </div>

        <div className="md:mt-8 flex flex-wrap justify-center lg:justify-start gap-6 items-center">
          <button className="bg-transparent text-[#3b82f6] border-2 border-[#3b82f6] px-6 py-3 rounded-3xl hover:bg-[#2563eb] hover:text-white transition duration-300 flex gap-2 items-center">
            Download CV <Download size={20} />
          </button>

          <HeroApp />
        </div>
      </div>

      {/* Right Section */}
          <div className="flex-1 flex justify-center items-center relative">
            <div className="relative aspect-square w-[300px] sm:w-[350px] md:w-[450px]">
              {/* Rotating Frame */}
              <AnimatedLogo className="absolute inset-0 w-full h-full" />

              {/* Profile Image */}
              <div className="absolute inset-0 flex justify-center items-center p-4">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/compressed-final.webp"
                    alt="my-photo"
                    fill
                    className="rounded-full object-cover scale-85"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Hero   // ✅ FIXED export
