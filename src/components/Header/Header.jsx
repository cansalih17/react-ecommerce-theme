import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { FiFilter } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const data = {
    brand: {
      text: "Nexton",
      url: "/",
    },
    searchPlaceholder: "Search in products",
    userIconUrl: "/login",
    filterIconUrl: "/filter",
    cartIconUrl: "/cart",
  };

  const { brand, searchPlaceholder, userIconUrl, filterIconUrl, cartIconUrl } =
    data;

  const handleSearch = (event) => {
    if (event.key === "Enter" && event.target.value.trim() !== "") {
      navigate("/search/" + event.target.value);
    }
  };

  return (
    <div className="bg-defaultBackgroundColor py-6 border-b border-borderColor">
      <div className="container mx-auto flex items-center justify-between px-10 md:px-0">
        <div>
          <Link
            to={brand.url}
            className="uppercase text-primaryColor font-semibold text-3xl md:text-[34px]"
          >
            {brand.text}
          </Link>
        </div>
        <div className="text-bodyTextColor relative hidden md:inline-block">
          <CiSearch
            size={20}
            className="absolute top-[16px] left-[24px] text-bodyTextColor"
          />
          <input
            onKeyDown={(event) => handleSearch(event)}
            type="text"
            className="bg-grayBackgroundColor py-4 px-6 pl-14 text-bodyTextColor outline-none rounded-full w-[450px]"
            placeholder={searchPlaceholder}
          />
        </div>
        <div className="flex items-center gap-5">
          <Link to={userIconUrl}>
            <FiUser size={24} className="text-bodyTextColor " />
          </Link>
          <Link to={filterIconUrl}>
            <FiFilter size={24} className="text-bodyTextColor " />
          </Link>
          <Link to={cartIconUrl} className="relative">
            <LuShoppingCart size={24} className="text-bodyTextColor" />
            <span className="absolute -top-2 -right-2 bg-vibrantColor rounded-full text-white  w-[20px] h-[20px] flex items-center justify-center text-[12px]">
              {cartItems.length || 0}
            </span>
          </Link>
          {/*
          
          mobil menü isternirse bulunsun
          <div className="cursor-pointer">
            <IoMenu size={26} className="text-bodyTextColor" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
