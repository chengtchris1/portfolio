import Hero3DCanvas from "./Hero3D.jsx";
import { Parallax } from "react-scroll-parallax";
import bg from "./assets/hero-bg2.avif";
const Hero = () => {
  return (
    <>
      <div
        className="hero m-0 mb-36 flex h-fit flex-col-reverse items-center justify-center bg-black bg-cover bg-center bg-no-repeat object-cover sm:h-screen sm:flex-row"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0,0.1)), url(${bg})`,
        }}
      >
        <div className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 transform text-left text-9xl text-white">
          <Parallax speed={-20} opacity={[2, 0]} easing={"easeInOut"}>
            Hi.
            <br />
            I'm Chris.
          </Parallax>
        </div>

        <div className="z-1 h-screen w-screen cursor-move">
          <Hero3DCanvas />
        </div>
      </div>
    </>
  );
};
export default Hero;
