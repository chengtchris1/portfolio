import React from "react";
import PortfolioElement from "./PortfolioElement";
const Portfolio = () => {
  return (
    <div className='flex flex-col md:flex-row justify-evenly items-center bg-black'>
      <PortfolioElement />
    </div>
  );
};
export default Portfolio;
