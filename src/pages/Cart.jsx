import React, { useState } from "react";
import CartProduct from "../components/Cart/CartProduct";
import CartTotal from "../components/Cart/CartTotal";

const Cart = () => {
  const product = {
    title: "Çekmeyen Pamuklu Kumaş Slim Fit Kıvrılmaz Polo",
    category: "Accessories",
    price: "169.99",
    oldPrice: "199.99",
    imageUrl: "images/product4.png",
    productUrl: "/",
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-10 md:px-0">
        <h3 className="font-semibold text-3xl text-primaryColor pb-6 border-b border-borderColor mb-8">
          Order summary (2)
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="col-span-1 lg:col-span-2 h-[570px] lg:h-[750px] overflow-y-auto orderSum">
            <CartProduct product={product} />
            <CartProduct product={product} />
            <CartProduct product={product} />
          </div>
          <CartTotal />
        </div>
      </div>
    </div>
  );
};

export default Cart;
