import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";

const ProductDetailProductInfo = ({
  imageSrc,
  rating,
  price,
  discountedPrice,
  productName,
  category,
  productURL,
  categoryURL,
  id,
}) => {
  const [size, setSize] = useState();
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();

  const [sizeArr, setSizeArr] = useState([
    { label: "S", selected: true, disabled: false },
    { label: "M", selected: false, disabled: false },
    { label: "L", selected: false, disabled: false },
    { label: "XL", selected: false, disabled: false },
    { label: "2X", selected: false, disabled: true },
  ]);

  const handleSizeClick = (label, disabled, idx) => {
    if (!disabled) {
      const updatedSizes = sizeArr;
      updatedSizes.forEach((element, index) => {
        if (index === idx) {
          element.selected = true;
        } else {
          element.selected = false;
        }
      });
      setSizeArr(updatedSizes);
      setSize(label);
    }
  };

  const handleCountChange = (e) => {
    if (e.target.value >= 1) {
      setCount(e.target.value);
    }
  };

  const handleAddCart = (item) => {
    dispatch(addItemToCart(item));
    toast.success("Product added to your cart");
  };

  return (
    <>
      <div className="bg-grayBackgroundColor h-[680px] rounded-2xl flex items-center justify-center col-span-1 xl:col-span-2">
        <img src={`/${imageSrc}`} alt="Product Image" className="w-96" />
      </div>
      <div className="border border-borderColor rounded-2xl p-8">
        <div className="mb-5">
          <h3 className="text-primaryColor text-xl font-semibold">
            {productName}
          </h3>
          <span className="text-sm text-bodyTextColor">{category}</span>
        </div>
        <div className="flex justify-between mb-8">
          <div className="flex gap-2">
            <FaStar size={21} className="text-[#FBBF24]" />
            <span className="font-semibold text-bodyTextColor">{rating}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-primaryColor font-semibold text-2xl">
              ${price}
            </span>
            {discountedPrice && (
              <span className="text-bodyTextColor text-sm text-end line-through">
                ${discountedPrice}
              </span>
            )}
          </div>
        </div>
        <div className="mb-10">
          <span className="text-primaryColor font-semibold text-lg mb-3 inline-block">
            Size: {size}
          </span>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {sizeArr.map((size, index) => (
              <button
                onClick={() =>
                  handleSizeClick(size.label, size.disabled, index)
                }
                key={index}
                className={`rounded-xl flex items-center justify-center py-2.5 ${
                  size.selected
                    ? "bg-vibrantColor text-white border-2 border-transparent"
                    : "bg-transparent font-semibold text-bodyTextColor border-2 border-borderColor "
                } ${size.disabled ? "opacity-40 cursor-no-drop" : "cursor-pointer"}`}
              >
                {size.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-gray-700 select-none inline-block">
              Count:
            </span>
            <input
              type="number"
              onChange={(e) => handleCountChange(e)}
              value={count}
              className="border border-borderColor px-3 py-3 w-24"
            />
          </div>
          <div>
            <button
              onClick={() =>
                handleAddCart({
                  imageUrl: imageSrc,
                  productName,
                  category,
                  price,
                  discountedPrice,
                  id,
                  productURL,
                  categoryURL,
                  quantity: count,
                })
              }
              className="bg-primaryColor text-white py-4 px-4 xl:px-6 rounded-full flex items-center gap-2 text-sm xl:text-md "
            >
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
