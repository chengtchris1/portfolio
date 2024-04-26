import Hero3DCanvas from "./Hero3D.jsx";
const Hero = () => {
  return (
    <>
      <div
        className='hero h-fit sm:h-screen m-0 bg-cover bg-center bg-no-repeat flex items-center justify-center object-cover bg-black flex-col sm:flex-row'
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0,0.1)), url(src/assets/hero-bg2.avif)",
        }}
      >
        <div className='flex-col-reverse md:flex-row object-contain lg:ml-48 flex justify-center items-center'>
          <div className='flex-auto flex items-end justify-end sm:backdrop-brightness-[6] mt-20'>
            <div className='text-6xl text-white px-20 p-10'>
              Hi. <br /> I'm Chris.
            </div>
          </div>
        </div>
        <div className='h-full w-full pt-0 sm:w-1/2 sm:pt-10'>
          <Hero3DCanvas />
        </div>
      </div>
    </>
  );
};
export default Hero;
