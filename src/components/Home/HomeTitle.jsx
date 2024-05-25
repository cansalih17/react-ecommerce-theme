import React from "react";

const HomeTitle = ({ mainTitle, subTitle }) => {
  return (
    <h3 className="font-semibold text-4xl text-primaryColor mb-10 px-10 md:px-0">
      {mainTitle} <span className="text-[#6B7280]">{subTitle}</span>
    </h3>
  );
};

export default HomeTitle;
