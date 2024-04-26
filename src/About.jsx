import { Parallax } from "react-scroll-parallax";
import { useEffect, useRef, useState } from "react";
const About = () => {
  const [parallaxEnabled, setParallaxEnabled] = useState(true);
  const parallaxRef = useRef();

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 650) {
        setParallaxEnabled(false);
        if (parallaxRef.current) {
          parallaxRef.current.controller.updateElementPosition(
            parallaxRef.current
          );
        }
      } else {
        setParallaxEnabled(true);
      }
    };
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);
  return (
    <>
      <div className='flex w-full h-auto flex-row justify-center items-center'>
        <figure>
          <div className='rounded-full bg-opacity-50 bg-gradient-to-br from-blue-500 to-green-500 p-0 w-52 h-52 overflow-clip'>
            <Parallax
              ref={parallaxRef}
              disabled={!parallaxEnabled}
              speed={10}
              //translateX={[0, -3, "easeInOut"]}
            >
              <img className=' w-52 p-0' src='src/assets/portrait.png' />
            </Parallax>
          </div>
        </figure>
        <div className=' flex flex-col text-white m-10'>
          <div className=''>
            <Parallax speed={10}>
              <h1 className='text-6xl'>About</h1>
            </Parallax>
          </div>
          <Parallax disabled={!parallaxEnabled} speed={10}>
            <div>
              <p className='text-2xl w-96'>
                I'm a fullstack developer with a passion for creating beautiful
                applications. I specialize in React, Node.js, and Three.js. I'm
                currently looking for a full-time position. Feel free to reach
                out to me at
              </p>
            </div>
          </Parallax>
        </div>
      </div>
    </>
  );
};
export default About;
