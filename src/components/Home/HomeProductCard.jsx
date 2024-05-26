import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { AiOutlineShopping } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { cartToggle } from "../../redux/cartSlice";
import toast from "react-hot-toast";

const HomeProductCard = ({
  imageUrl,
  productName,
  category,
  price,
  rating,
  numReviews,
  productURL,
  categoryURL,
  discountedPrice,
  id,
}) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const handleAddCart = (item, className) => {
    dispatch(cartToggle(item));
    const isItemInCart = className.includes("text-white bg-bodyTextColor");
    if (isItemInCart) {
      toast.success("Ürün kaldırıldı");
    } else {
      toast.success("Ürün sepete eklendi");
    }
  };

  const isItemInCart = items && items.find((item) => item.id === id);
  const buttonClass = `absolute top-[12px] right-[12px] bg-white w-9 h-9 flex items-center justify-center rounded-full cursor-pointer text-bodyTextColor ${isItemInCart ? "text-white bg-bodyTextColor" : "bg-white"}`;

  return (
    <div className="relative">
      <button
        onClick={() =>
          handleAddCart(
            {
              imageUrl,
              productName,
              category,
              price,
              discountedPrice,
              id,
              productURL,
              categoryURL,
            },
            buttonClass
          )
        }
        className={buttonClass}
      >
        <AiOutlineShopping size={18} />
      </button>
      <Link
        to={productURL}
        className="bg-grayBackgroundColor h-[347px] rounded-2xl flex items-center justify-center mb-[20px] "
      >
        <img src={`/${imageUrl}`} alt={productName} className="w-64" />
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
