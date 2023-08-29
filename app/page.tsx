'use client';

import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import HomeSection from "./sections/Home";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import SectionGradientBg from "./components/SectionGradientBg";
import Footer from "./sections/Footer";
import { useEffect } from "react";
import useActiveLinkStore from "./hooks/useActiveLink";
import { navLinks } from "./mocks/navlinks";

export default function Home() {

  const { setActiveLink, setScrollOffset } = useActiveLinkStore((state) => state);

  const handleScroll = async () => {

    const windowYOffset = window.scrollY;
    setScrollOffset(windowYOffset);

    const sections = document.querySelectorAll(".section");
    const formatedSections = Array.from(sections as NodeListOf<HTMLElement>);

    const activeSection = formatedSections.find(e => (e.offsetTop + e.offsetHeight >= windowYOffset + 80));

    if (activeSection) {
      const sectionId = activeSection.id;

      const navLink = navLinks.find(e => e.label.toLowerCase() === sectionId) || navLinks[0];
      const navLinkElement = document.getElementById(`link-` + sectionId);

      setActiveLink(
        {
          ...navLink,
          width: `${navLinkElement?.offsetWidth || 59}px`,
          translateX: `${navLinkElement?.offsetLeft || 0}px`,
        });
    }

  };

  useEffect(() => {
    setScrollOffset(window.scrollY);
  }, [])

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
