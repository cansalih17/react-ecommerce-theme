import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateCartItemQuantity } from "../../redux/cartSlice";

const CartProduct = ({ product, onClick }) => {
  const {
    productName,
    category,
    price,
    discountedPrice,
    imageUrl,
    productURL,
    categoryURL,
    quantity,
    id,
  } = product;

  const dispatch = useDispatch();

  const handleUpdate = (id, newQuantity) => {
    dispatch(updateCartItemQuantity({ id: id, quantity: newQuantity }));
  };

  return (
    <div className="flex mb-4 relative">
      <div className="mr-8 min-w-28">
        <Link
          to={productURL}
          className="bg-grayBackgroundColor h-[150px] rounded-2xl flex items-center justify-center"
        >
          <img src={imageUrl} alt={productName} className="w-32" />
        </Link>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-col xl:flex-row justify-between">
          <div className="flex flex-col mb-2 xl:mb-0">
            <Link
              to={productURL}
              className="text-primaryColor font-semibold line-clamp-2 lg:line-clamp-1"
            >
              {productName}
            </Link>
            <Link to={categoryURL} className="text-sm text-bodyTextColor">
              {category}
            </Link>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col">
              <span className="text-primaryColor font-semibold">${price}</span>
              {discountedPrice && (
                <span className="text-sm text-bodyTextColor text-start xl:text-end line-through">
                  ${discountedPrice}
                </span>
              )}
            </div>
            <button
              onClick={onClick}
              className="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center cursor-pointer hover:bg-grayBackgroundColor"
            >
              <IoCloseOutline size={20} />
            </button>
          </div>
        </div>
        <div className="flex items-center mt-5">
          <button
            onClick={() => {
              handleUpdate(id, Number(quantity) - 1);
            }}
            disabled={quantity === 1}
            className="bg-grayBackgroundColor text-primaryColor py-1 px-3 rounded select-none"
          >
            -
          </button>
          <input
            type="text"
            value={quantity}
            readOnly
            className="w-12 text-center mx-2 border border-borderColor rounded py-0.5"
          />
          <button
            onClick={() => {
              handleUpdate(id, Number(quantity) + 1);
            }}
            className="bg-grayBackgroundColor text-primaryColor py-1 px-3 rounded select-none"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
