import React from "react";
import PortfolioElement from "./PortfolioElement";
const images = [
  "https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg",
  "https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg",
  "https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg",
  "https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg",
];
const Portfolio = () => {
  return (
    <div className='flex flex-col m-10 md:m-40'>
      <h1 className='text-6xl text-white'>Portfolio</h1>
      <PortfolioElement images={images} />
      <PortfolioElement images={images} />
    </div>
  );
};
export default Portfolio;
