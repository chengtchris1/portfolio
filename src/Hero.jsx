import Hero3DCanvas from "./Hero3D.jsx";
import { Parallax } from "react-scroll-parallax";
import bg from "./assets/hero-bg2.avif";
const Hero = () => {
  return (
    <>
      <div
        className='hero h-fit sm:h-screen m-0 bg-cover bg-center bg-no-repeat flex items-center justify-center object-cover bg-black flex-col-reverse sm:flex-row mb-36'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0,0.1)), url(${bg})`,
        }}
      >
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left text-9xl z-0 text-white'>
          <Parallax speed={-20} opacity={[2, 0]} easing={"easeInOut"}>
            Hi.
            <br />
            I'm Chris.
          </Parallax>
        </div>

        <div className='h-screen w-screen z-1 cursor-move'>
          <Hero3DCanvas />
        </div>
      </div>
    </>
  );
};
export default Hero;
