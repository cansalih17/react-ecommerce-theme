import React from "react";
import { Link } from "react-router-dom";

const texts = {
  notFoundPage: "The page you are looking for cannot be found",
  goToHome: "Go home",
};

const NotFound = () => {
  return (
    <div className="py-96 p-4 text-center">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <span className="text-4xl mb-8 text-primaryColor font-semibold">
            {texts.notFoundPage}
          </span>
          <Link
            to="/"
            className="bg-primaryColor text-white py-3 px-5 rounded max-w-max"
          >
            {texts.goToHome}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
