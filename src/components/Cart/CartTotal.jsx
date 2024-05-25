import React from "react";
import { Link } from "react-router-dom";

const CartTotal = () => {
  return (
    <div className="border border-borderColor rounded-2xl p-8">
      <div className="flex justify-between mb-2 text-bodyTextColor">
        <span>Subtotal</span>
        <span>$169.99</span>
      </div>
      <div className="flex justify-between mb-2 text-bodyTextColor">
        <span>Shipping estimate</span>
        <span>$5.99</span>
      </div>
      <div className="flex justify-between my-6 font-semibold text-primaryColor">
        <span>Order total</span>
        <span>$5.99</span>
      </div>
      <Link
        to="/order-success"
        className="bg-primaryColor text-white py-3.5 rounded-full flex items-center justify-center text-lg w-full"
      >
        Confirm order
      </Link>
      <button className="bg-red-900 text-white py-3.5 rounded-full flex items-center justify-center text-lg w-full mt-4">
        All delete products
      </button>
    </div>
  );
};

export default CartTotal;
