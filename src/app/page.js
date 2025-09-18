import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import About from "@/components/About";

export default function Home() {
  return (
    <>
        <div 
          className="min-h-screen w-full bg-cover bg-center bg-no-repeat text-gray-50 pt-48 flex flex-col items-center font-inter" 
          style={{ backgroundImage: "url('/tim-oun-jY_W5x74GTs-unsplash.webp')" }}>
          <Header />
          <Hero />
        </div>

        <div className="">
          <About />
        </div>
    </>

  );
}
