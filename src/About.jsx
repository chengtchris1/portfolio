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

      let scrollY = isMobile ? 600 : 700;
      if (window.scrollY > scrollY) {
        setParallaxEnabled(false);
        if (parallaxRef.current) {
          parallaxRef.current.controller.updateElementPosition(
            parallaxRef.current,
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
      <div className="flex h-auto w-full flex-col items-center justify-center lg:flex-row">
        <figure>
          <div className="h-52 w-52 overflow-clip rounded-full bg-opacity-50 bg-gradient-to-br from-blue-500 to-green-500 p-0">
            <Parallax
              ref={parallaxRef}
              disabled={!parallaxEnabled}
              speed={10}
              easing={"easeInOut"}
              //translateX={[0, -3, "easeInOut"]}
            >
              <img className="rounded-full p-0" src={portrait} />
            </Parallax>
          </div>
        </figure>
        <div className=" m-10 flex flex-col text-white">
          <div className="">
            <h1 className="text-6xl">About</h1>
          </div>
          <Parallax disabled={!parallaxEnabled || isMobile} speed={10}>
            <div
              className={`flex flex-wrap break-words text-2xl transition-opacity duration-500 ${
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
