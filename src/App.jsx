import Hero from "./Hero.jsx";
import Navbar from "./Navbar.jsx";
import { Parallax } from "react-scroll-parallax";
import Portfolio from "./Portfolio.jsx";
import About from "./About.jsx";
import TechStack from "./TechStack.jsx";
import { useRef } from "react";
import "./App.css";

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const techStackRef = useRef(null);
  const portfolioRef = useRef(null);
  const scrollToSection = (ref) => {
    console.log("THEREF", ref);
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-screen bg-black font-sans">
      <div className="fixed left-0 top-0 z-30 w-full">
        <Navbar
          scrollToSection={scrollToSection}
          heroRef={heroRef}
          aboutRef={aboutRef}
          techStackRef={techStackRef}
          portfolioRef={portfolioRef}
        />
      </div>
      <div ref={heroRef}>
        <Parallax speed={-10}>
          <Hero />
          <div className="absolute inset-0 z-10 bg-transparent sm:hidden"></div>
        </Parallax>
      </div>
      <div ref={aboutRef}>
        <Parallax speed={-10}>
          <div className="mx-0 sm:mx-[8.5rem]">
            <About />
          </div>
        </Parallax>
      </div>
      <div ref={techStackRef}>
        <TechStack />
      </div>
      <div className="mt-1 flex flex-col pt-1" ref={portfolioRef}>
        <Portfolio />
      </div>
    </div>
  );
}
export default App;
