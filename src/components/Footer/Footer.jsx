import React from "react";
import { Link } from "react-router-dom";
import footerData from "./footerData.json";

const Footer = () => {
  return (
    <div className="border-t border-borderColor px-10 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto py-16 gap-20">
        <div className="md:col-span-2 lg:col-span-1">
          <Link
            to="/"
            className="uppercase text-primaryColor font-semibold text-4xl"
          >
            {footerData.brand}
          </Link>
        </div>
        {footerData.sections.map((section, index) => (
          <div key={index} className="md:col-span-1">
            <h3 className="font-semibold text-primaryColor text-xl mb-[20px]">
              {section.title}
            </h3>
            <div className="flex flex-col gap-4">
              {section.links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  to={link.url}
                  className="text-bodyTextColor text-lg max-w-max"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="py-8 border-t border-borderColor">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <span className="mb-4 md:mb-0">
            {footerData.brand} eCommerce. © 2024
          </span>
          <Link to={footerData.paymentIconLinkUrl}>
            <img src={footerData.paymentIconUrl} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
