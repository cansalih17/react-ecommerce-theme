import React from "react";
import { BsStars } from "react-icons/bs";

const ProductDetailDescription = (props) => {
  return (
    <div className="flex flex-col gap-12">
      {props.data.description.features.map((section, index) => (
        <div key={index}>
          <h3 className="text-primaryColor text-3xl font-semibold mb-4">
            {section.title}
          </h3>
          <p className="text-bodyTextColor">{section.content}</p>
        </div>
      ))}
      <div>
        <h3 className="text-primaryColor text-3xl font-semibold mb-4">
          Keywords
        </h3>
        <div className="flex flex-wrap gap-3">
          {props.data.tags.map((keyword, index) => (
            <span
              key={index}
              className="border border-borderColor rounded-full py-2 px-3 text-bodyTextColor text-sm flex items-center gap-2"
            >
              <BsStars size={18} />
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailDescription;
