import React from "react";
import PortfolioElement from "./PortfolioElement";
import ProductOverview from "./assets/ProductOverview.gif";
import RelatedItems from "./assets/RelatedItems.gif";
import Reviews from "./assets/Reviews.gif";
import LandingPage from "./assets/landingPageGif.gif";
import Carousel from "./assets/Carousel.gif";
import AnonifyPL from "./assets/AnonifyPL.png";
import AnonifyLanding from "./assets/AnonifyLanding.png";
const portfolioItems = [
  {
    images: [AnonifyPL, AnonifyLanding],
    title: "Anonify",
    summary:
      "Anonify is a passion project designed to streamline the creation of collaborative playlists. Users can create shareable links and anonymously add songs, which live update between users on different devices. This serves two main purposes: making playlist creation easier for large groups and allowing individuals to contribute without feeling self-conscious. Further, users can upvote/downvote songs, and the playlist will reorder in real-time.",
    key: "3",
  },
  {
    images: [LandingPage, Carousel],
    title: "Manor Match",
    summary:
      "ManorMatch is a full-stack application designed to seamlessly connect discerning clients with exclusive, high-end services and bespoke experiences. The platform offers an intuitive interface that enhances user engagement, with a robust filtering system allowing clients to easily find services that meet their exacting standards.",
    key: "2",
  },
  {
    images: [ProductOverview, RelatedItems, Reviews],
    title: "Atelier E-commerce",
    summary:
      "Atelier is an extensive e-commerce platform, consisting of a distinct front-end and back-end component. ",
    key: "1",
  },
];

const Portfolio = () => {
  return (
    <div className="m-10 flex flex-col text-center md:m-40 md:mt-20">
      <h1 className="text-6xl text-white">Portfolio</h1>
      <br />
      {portfolioItems.map((item, i) => {
        return (
          <>
            <PortfolioElement items={item} key={item.key} />{" "}
            {i !== portfolioItems.length - 1 && (
              <>
                <br />
              </>
            )}
          </>
        );
      })}
    </div>
  );
};
export default Portfolio;
