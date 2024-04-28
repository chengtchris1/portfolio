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
    <>
      <div className='flex flex-col items-center justify-center m-0 md:m-40'>
        <h1 className='text-6xl'>Projects:</h1>
        <h2 className='text-6xl'>Section coming soon!</h2>
        <h3 className='text-3xl'>
          For now, please see my projects on my{" "}
          <a
            className='underline text-blue-500 hover:text-blue-700'
            href='https://www.linkedin.com/in/chengtchris/'
          >
            Linkedin
          </a>
        </h3>
        {/*
    <PortfolioElement images={images} />
    <PortfolioElement images={images} />
    */}
      </div>
      <br />
    </>
  );
};
export default Portfolio;
