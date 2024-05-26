import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { FiFilter } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { useSelector } from "react-redux";
import { GrContact } from "react-icons/gr";
import { IoCloseOutline } from "react-icons/io5";

const Header = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const [mobileMenu, setMobileMenu] = useState(false);

  const data = {
    brand: {
      text: "Nexton",
      url: "/",
    },
    searchPlaceholder: "Search in products",
    menu: [
      {
        text: "Login",
        url: "/login",
        class: "",
        icon: <FiUser size={24} className="text-bodyTextColor " />,
      },
      {
        text: "Contact",
        url: "/contact",
        class: "",
        icon: <GrContact size={24} className="text-bodyTextColor " />,
      },
      {
        text: "Filter",
        url: "/filter",
        class: "",
        icon: <FiFilter size={24} className="text-bodyTextColor " />,
      },
      {
        text: "Cart",
        url: "/cart",
        class: "relative",
        icon: (
          <div>
            <LuShoppingCart size={24} className="text-bodyTextColor" />
            <span className="absolute -top-2 -right-2 bg-vibrantColor rounded-full text-white  w-[20px] h-[20px] flex items-center justify-center text-[12px]">
              {cartItems.length || 0}
            </span>
          </div>
        ),
      },
    ],
  };

  const handleMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleSearch = (event) => {
    if (event.key === "Enter" && event.target.value.trim() !== "") {
      navigate("/search/" + event.target.value);
    }
  };

  return (
    <div className="bg-defaultBackgroundColor py-6 border-b border-borderColor relative">
      <div
        className={`${mobileMenu === false && "hidden"} md:hidden absolute top-[85px] right-0 left-0 bg-primaryColor text-white z-50`}
      >
        <div className="container mx-auto px-10 md:px-0 py-10 flex flex-col items-center gap-5">
          {data.menu.map((item) => (
            <Link to={item.url} className="text-xl hover:text-vibrantColor">
              {item.text}
            </Link>
          ))}
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-between px-10 md:px-0">
        <div>
          <Link
            to={data.brand.url}
            className="uppercase text-primaryColor font-semibold text-3xl md:text-[34px]"
          >
            {data.brand.text}
          </Link>
        </div>
        <div className="text-bodyTextColor relative hidden md:inline-block">
          <CiSearch
            size={20}
            className="absolute top-[16px] left-[24px] text-bodyTextColor"
          />
          <input
            onKeyDown={(event) => handleSearch(event)}
            type="search"
            className="bg-grayBackgroundColor py-4 px-6 pl-14 text-bodyTextColor outline-none rounded-full w-[450px]"
            placeholder={data.searchPlaceholder}
          />
        </div>
        <div className="hidden md:flex items-center gap-5">
          {data.menu.map((item) => (
            <Link to={item.url} className={item.class}>
              {item.icon}
            </Link>
          ))}
        </div>
        <button
          onClick={() => handleMenuToggle()}
          className="cursor-pointer md:hidden"
        >
          {mobileMenu ? (
            <IoCloseOutline size={36} className="text-bodyTextColor" />
          ) : (
            <IoMenu size={36} className="text-bodyTextColor" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
