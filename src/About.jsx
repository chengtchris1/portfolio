import { Parallax } from "react-scroll-parallax";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import portrait from "./assets/portrait.png";
const About = () => {
  const [parallaxEnabled, setParallaxEnabled] = useState(true);
  const parallaxRef = useRef();

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  let isMobile = window.innerWidth < 768;
  useEffect(() => {
    const checkScroll = () => {
      //if mobile make scrollY = 800, if not mobile make it

      let scrollY = isMobile ? 475 : 700;
      if (window.scrollY > scrollY) {
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
      <div className='flex w-full h-auto flex-col sm:flex-row justify-center items-center'>
        <figure>
          <div className='rounded-full bg-opacity-50 bg-gradient-to-br from-blue-500 to-green-500 p-0 w-52 h-52 overflow-clip'>
            <Parallax
              ref={parallaxRef}
              disabled={!parallaxEnabled}
              speed={10}
              easing={"easeInOut"}
              //translateX={[0, -3, "easeInOut"]}
            >
              <img className='p-0 rounded-full' src={portrait} />
            </Parallax>
          </div>
        </figure>
        <div className=' flex flex-col text-white m-10'>
          <div className=''>
            <h1 className='text-6xl'>About</h1>
          </div>
          <Parallax disabled={!parallaxEnabled || isMobile} speed={10}>
            <div
              className={`flex flex-wrap text-2xl break-words transition-opacity duration-500 ${
                inView ? "opacity-100" : "opacity-0"
              }`}
              ref={ref}
            >
              My journey in coding began in elementary school where I created
              VBS scripts to do various tasks with my computer (such as opening
              the CD drive)—igniting a passion that has stayed with me
              throughout my career. I realized my heart is in software
              engineering. I noticed the tasks I enjoyed the most involved
              tinkering and playing with cool applications with little
              oversight. In my previous career, I leveraged cutting-edge cools
              such as PowerAutomate and UI Path: tools which my higher-ups had
              little experience with. Recently, I've been given the opportunity
              to work on various projects which have me hone my craft as a
              software engineer.
            </div>
          </Parallax>
        </div>
      </div>
    </>
  );
};
export default About;
