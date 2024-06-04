import Hero from "./Hero.jsx";
import Navbar from "./Navbar.jsx";
import { Parallax } from "react-scroll-parallax";
import Portfolio from "./Portfolio.jsx";
import About from "./About.jsx";
import TechStack from "./TechStack.jsx";
import { useRef } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const techStackRef = useRef(null);
  const portfolioRef = useRef(null);
  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-screen min-h-full h-fit bg-black opacity-100 font-sans text-white">
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
          <div className="mx-0 lg:mx-[8.5rem]">
            <About />
          </div>
        </Parallax>
      </div>
      <br />
      <br />
      <div ref={techStackRef}>
        <TechStack />
      </div>
      <div ref={portfolioRef}>
        <Parallax speed={8}>
          <Portfolio />
        </Parallax>
      </div>
    </div>
  );
}
export default App;
