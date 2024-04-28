import { useState } from "react";

const PortfolioElement = ({ images }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrev = () => {
    setActiveSlide((prevSlide) =>
      prevSlide > 0 ? prevSlide - 1 : images.length - 1,
    );
  };

  const handleNext = () => {
    setActiveSlide((prevSlide) =>
      prevSlide < images.length - 1 ? prevSlide + 1 : 0,
    );
  };

  return (
    <>
      <div className="carousel relative w-full overflow-hidden">
        <div
          className="carousel-inner flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div className="carousel-item w-full" key={index}>
              <img src={image} className="w-full" />
            </div>
          ))}
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button onClick={handlePrev} className="btn btn-circle">
            ❮
          </button>
          <button onClick={handleNext} className="btn btn-circle">
            ❯
          </button>
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        {images.map((_, index) => (
          <button
            onClick={() => setActiveSlide(index)}
            className={`btn btn-xs ${
              index === activeSlide ? "bg-gray-900" : "bg-gray-300"
            }`}
            key={index}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default PortfolioElement;
