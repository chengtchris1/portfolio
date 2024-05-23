import React from "react";
import PortfolioElement from "./PortfolioElement";
import ProductOverview from "./assets/ProductOverview.gif";
import RelatedItems from "./assets/RelatedItems.gif";
import Reviews from "./assets/Reviews.gif";
import LandingPage from "./assets/landingPageGif.gif";
import Carousel from "./assets/Carousel.gif";
const portfolioItems = [
  {
    images: [LandingPage, Carousel],
    title: "Project 2",
    summary: "Placeholder 2",
    key: "2",
  },
  {
    images: [ProductOverview, RelatedItems, Reviews],
    title: "Project Atelier",
    summary:
      "A full-stack landing page for an e-commerce site with 5 million+ products consisting of three distinct sections.",
    key: "1",
  },
];

const Portfolio = () => {
  return (
    <div className="m-10 flex flex-col text-center md:m-40 md:mt-20">
      <h1 className="text-6xl text-white">Portfolio</h1>
      {portfolioItems.map((item) => (
        <PortfolioElement items={item} key={item.key} />
      ))}
    </div>
  );
};
export default Portfolio;
