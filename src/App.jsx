import Hero from "./Hero.jsx";
import Navbar from "./Navbar.jsx";
import { useInView } from "react-intersection-observer";
import { Parallax } from "react-scroll-parallax";
import Portfolio from "./Portfolio.jsx";
import About from "./About.jsx";
import TechStack from "./TechStack.jsx";
import "./App.css";

function App() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <div className='w-screen font-sans bg-black'>
      <div className='fixed w-full top-0 left-0 z-30'>
        <Navbar />
      </div>
      <Parallax speed={-10}>
        <Hero />
        <div className='sm:hidden absolute inset-0 bg-transparent z-10'></div>
      </Parallax>
      <Parallax speed={-10}>
        <div className='mx-0 sm:mx-[8.5rem]'>
          <About />
        </div>
      </Parallax>
      <br /> <br />
      <TechStack />
      <Portfolio />
    </div>
  );
}
export default App;
