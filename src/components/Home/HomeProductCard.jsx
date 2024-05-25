import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { AiOutlineShopping } from "react-icons/ai";

const HomeProductCard = ({
  imageUrl,
  productName,
  category,
  price,
  rating,
  numReviews,
  productURL,
  categoryURL,
}) => {
  return (
    <div className="relative">
      <div className="absolute top-[12px] right-[12px] bg-white w-9 h-9 flex items-center justify-center rounded-full cursor-pointer text-bodyTextColor hover:bg-gray-400 hover:text-white duration-300">
        <AiOutlineShopping size={18} />
      </div>
      <Link
        to={productURL}
        className="bg-grayBackgroundColor h-[347px] rounded-2xl flex items-center justify-center mb-[20px] "
      >
        <img src={imageUrl} alt={productName} className="w-64" />
      </Link>
      <div className="flex items-center justify-between mb-[15px]">
        <div className="flex flex-col">
          <Link
            to={productURL}
            className="text-primaryColor font-semibold line-clamp-1"
          >
            {productName}
          </Link>
          <Link to={categoryURL} className="text-sm text-bodyTextColor">
            {category}
          </Link>
        </div>
        <div className="flex flex-col">
          <span className="text-primaryColor font-semibold">${price}</span>
          <span className="text-bodyTextColor text-sm text-end line-through">
            ${price}
          </span>
        </div>
      </div>
      <div className="flex gap-1">
        <FaStar size={20} className="text-[#FBBF24]" />
        <span className="text-bodyTextColor">
          {rating} ({numReviews})
        </span>
      </div>
    </div>
  );
};

export default HomeProductCard;
