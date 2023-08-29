'use client';

import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import HomeSection from "./sections/Home";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import SectionGradientBg from "./components/SectionGradientBg";
import Footer from "./sections/Footer";
import { useEffect } from "react";
import { handleMoveIndicator } from "./helpers/handleMoveIndicator";
import { useRouter } from 'next/navigation';

export default function Home() {

  const router = useRouter();

  const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

  const handleScroll = async () => {

    const sections = document.querySelectorAll(".section");
    const formatedSections = Array.from(sections as NodeListOf<HTMLElement>);
    const windowYOffset = window.scrollY + 80;

    const activeSection = formatedSections.find(e => (e.offsetTop + e.offsetHeight >= windowYOffset));

    if (activeSection) {
      const sectionId = activeSection.id;
      const sectionOffsetTop = activeSection.offsetTop;

      // await delay(200);

      // if (('#' + sectionId) !== window.location.hash) router.push('#' + sectionId);

      const navLinkElement = document.getElementById(`link-` + sectionId);
      handleMoveIndicator(navLinkElement as HTMLAnchorElement, false)
    }


  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="flex flex-col flex-1 relative">
      <Navbar />
      <div className="flex flex-1 flex-col w-4/5 mx-auto">
        <HomeSection />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Footer />
      <SectionGradientBg />
    </div>
  )
}
