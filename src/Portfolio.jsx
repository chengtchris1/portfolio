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
      <div className="m-0 flex flex-col justify-center text-white sm:items-center md:m-40">
        <h1 className="mx-10 text-6xl sm:mx-0">Projects:</h1>
        <h2 className="mx-10 text-6xl sm:mx-0">Section coming soon!</h2>
        <h3 className="mx-10 text-3xl sm:mx-0">
          For now, please see my projects on my{" "}
          <a
            className="text-blue-500 underline hover:text-blue-700"
            href="https://www.linkedin.com/in/chengtchris/"
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
