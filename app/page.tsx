
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SectionGradientBg from "./components/SectionGradientBg";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 relative">
      <Navbar />
      <div className="flex flex-1 flex-col w-4/5 mx-auto">
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <SectionGradientBg />
    </div>
  )
}
