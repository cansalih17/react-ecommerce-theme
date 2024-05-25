import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="container mx-auto px-10 py-96">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-3xl font-semibold text-primaryColor mb-4">
          Thank you for your order!
        </h2>
        <p className="text-bodyTextColor mb-6">
          Your order has been successfully placed.
        </p>
        <p className="text-bodyTextColor mb-6">
          Order Number: <span className="font-semibold">#123456789</span>
        </p>
        <Link
          to="/filter"
          className="bg-primaryColor text-white py-3 px-6 rounded-full text-lg flex justify-center items-center mb-8"
        >
          Continue Shopping
        </Link>
        <p className="text-sm text-bodyTextColor">
          Need help?{" "}
          <Link to="/contact" className="text-primaryColor font-semibold">
            Contact us
          </Link>
        </p>
      </div>
    </div>
  );
};

export default OrderSuccess;
