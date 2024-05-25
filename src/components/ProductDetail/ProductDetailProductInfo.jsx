import React from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineShoppingBasket } from "react-icons/md";

const ProductDetailProductInfo = ({
  imageSrc,
  rating,
  price,
  oldPrice,
  sizes,
  count,
}) => {
  return (
    <>
      <div className="bg-grayBackgroundColor h-[680px] rounded-2xl flex items-center justify-center col-span-1 xl:col-span-2">
        <img src={imageSrc} alt="Product Image" className="w-96" />
      </div>
      <div className="border border-borderColor rounded-2xl p-8">
        <div className="flex justify-between mb-8">
          <div className="flex gap-2">
            <FaStar size={21} className="text-[#FBBF24]" />
            <span className="font-semibold text-bodyTextColor">{rating}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-primaryColor font-semibold text-2xl">
              ${price}
            </span>
            {oldPrice && (
              <span className="text-bodyTextColor text-sm text-end line-through">
                ${oldPrice}
              </span>
            )}
          </div>
        </div>
        <div className="mb-10">
          <span className="text-primaryColor font-semibold text-lg mb-3 inline-block">
            Size: {sizes.find((size) => size.selected).label}
          </span>
          <div className="grid grid-cols-5 gap-3">
            {sizes.map((size, index) => (
              <span
                key={index}
                className={`rounded-xl flex items-center justify-center py-2.5 ${
                  size.selected
                    ? "bg-vibrantColor text-white border-2 border-transparent"
                    : "bg-transparent font-semibold text-bodyTextColor border-2 border-borderColor cursor-pointer"
                } ${size.disabled ? "opacity-40 cursor-no-drop" : ""}`}
              >
                {size.label}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-gray-700 select-none inline-block">
              Count:
            </span>
            <input
              type="number"
              value={count}
              className="border border-borderColor px-3 py-3 w-24"
            />
          </div>
          <div>
            <button className="bg-primaryColor text-white py-4 px-4 xl:px-6 rounded-full flex items-center gap-2 text-sm xl:text-md ">
              <MdOutlineShoppingBasket size={20} />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailProductInfo;
