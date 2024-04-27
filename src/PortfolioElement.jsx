import { useState } from "react";

function PortfolioElement({ images }) {
  const [startX, setStartX] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNext = () => {
    setActiveSlide((prevSlide) =>
      prevSlide < images.length - 1 ? prevSlide + 1 : 0
    );
  };

  const handlePrev = () => {
    setActiveSlide((prevSlide) =>
      prevSlide > 0 ? prevSlide - 1 : images.length - 1
    );
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    const endX = e.touches[0].clientX;
    const diffX = startX - endX;

    if (Math.abs(diffX) > 50) {
      // Swipe threshold
      if (diffX > 0) {
        // Swipe left, go to next slide
        handleNext();
      } else {
        // Swipe right, go to previous slide
        handlePrev();
      }

      setStartX(endX);
    }
  };

  return (
    <>
      <div className='carousel w-full overflow-hidden relative'>
        <div
          className='carousel-inner flex transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {images.map((image, index) => (
            <div className='carousel-item w-full' key={index}>
              <img src={image} className='w-full' />
            </div>
          ))}
        </div>
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <button onClick={handlePrev} className='btn btn-circle'>
            ❮
          </button>
          <button onClick={handleNext} className='btn btn-circle'>
            ❯
          </button>
        </div>
      </div>
      <div className='flex justify-center w-full py-2 gap-2'>
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
}

export default PortfolioElement;
