import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
        <div 
          className="min-h-screen w-full bg-cover bg-center bg-no-repeat text-gray-50 lg:pt-48 flex flex-col items-center font-inter bg-black" 
          style={{ backgroundImage: "url('/tim-oun-jY_W5x74GTs-unsplash.webp')" }}>
          <Header />
          <Hero />

          
        </div>

        <div className="">
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Education />
          <Footer />
        </div>
    </>

  );
}
