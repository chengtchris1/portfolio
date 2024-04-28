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
    threshold: 0,
  });
  return (
    <div className="w-screen bg-black font-sans">
      <div className="fixed left-0 top-0 z-30 w-full">
        <Navbar />
      </div>
      <Parallax speed={-10}>
        <Hero />
        <div className="absolute inset-0 z-10 bg-transparent sm:hidden"></div>
      </Parallax>
      <Parallax speed={-10} opacity={[3, 0]} easing={"easeInOut"}>
        <div className="mx-0 sm:mx-[8.5rem]">
          <About />
        </div>
      </Parallax>
      <Parallax speed={0} opacity={[3, 0]} easing={"easeInOut"}>
        <br /> <br />
        <div className="mx-10 mb-1 mt-12 flex items-center justify-center text-left text-white sm:text-center">
          <h2 className="text-6xl">Some technologies I've used...</h2>
        </div>
      </Parallax>
      <Parallax speed={15}>
        <TechStack />
      </Parallax>
      <Portfolio />
    </div>
  );
}
export default App;
