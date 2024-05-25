import React from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const heroContent = {
  startingPrice: "Starting from: $49.99",
  collectionTitle: "Exclusive collection for everyone",
  exploreButtonText: "Explore now",
  exploreButtonURL: "/filter",
};

const Hero = () => {
  return (
    <div className="w-full h-[600px] bg-[#f3f3f3] bg-hero-pattern bg-no-repeat bg-center flex items-center">
      <div className="container mx-auto flex flex-col *:mb-[24px] px-10 md:px-0">
        <span className="text-lg text-bodyTextColor font-medium">
          {heroContent.startingPrice}
        </span>
        <h3 className="text-primaryColor text-4xl md:text-[64px] font-semibold md:w-[632px] md:leading-[72px]">
          {heroContent.collectionTitle}
        </h3>
        <Link
          className="bg-primaryColor max-w-max text-white py-5 px-9 pr-6 rounded-full flex items-center"
          to={heroContent.exploreButtonURL}
        >
          {heroContent.exploreButtonText}
          <CiSearch size={24} className="text-white ml-3" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
