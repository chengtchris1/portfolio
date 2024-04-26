import Hero from "./Hero.jsx";
import Navbar from "./Navbar.jsx";
import { useInView } from "react-intersection-observer";
import { Parallax } from "react-scroll-parallax";
import Portfolio from "./Portfolio.jsx";
import About from "./About.jsx";
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
      </Parallax>
      <Parallax speed={-10}>
        <About />
      </Parallax>
      <Portfolio />
      <Portfolio />
      <Portfolio />
    </div>
  );
}
export default App;
