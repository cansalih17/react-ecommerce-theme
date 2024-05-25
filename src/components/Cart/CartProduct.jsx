import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const CartProduct = ({ product }) => {
  const { title, category, price, oldPrice, imageUrl, productUrl } = product;

  return (
    <div className="flex mb-4 max-w-max relative">
      <div className="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center cursor-pointer hover:bg-grayBackgroundColor absolute lg:top-0 lg:-right-16 right-0 bottom-0">
        <IoCloseOutline size={20} />
      </div>
      <div className="mr-8 min-w-28">
        <Link
          to={productUrl}
          className="bg-grayBackgroundColor h-[150px] rounded-2xl flex items-center justify-center"
        >
          <img src={imageUrl} alt={title} className="w-32" />
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col xl:flex-row">
          <div className="flex flex-col xl:mr-24 mb-2 xl:mb-0">
            <Link
              to={productUrl}
              className="text-primaryColor font-semibold line-clamp-2 lg:line-clamp-1"
            >
              {title}
            </Link>
            <Link to={productUrl} className="text-sm text-bodyTextColor">
              {category}
            </Link>
          </div>
          <div className="flex flex-col">
            <span className="text-primaryColor font-semibold">${price}</span>
            {oldPrice && (
              <span className="text-sm text-bodyTextColor text-start xl:text-end line-through">
                ${oldPrice}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center mt-5">
          <button className="bg-grayBackgroundColor text-primaryColor py-1 px-3 rounded select-none">
            -
          </button>
          <input
            type="text"
            value="1"
            readOnly
            className="w-12 text-center mx-2 border border-borderColor rounded py-0.5"
          />
          <button className="bg-grayBackgroundColor text-primaryColor py-1 px-3 rounded select-none">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
