import React from "react";
import CartProduct from "../components/Cart/CartProduct";
import CartTotal from "../components/Cart/CartTotal";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart } from "../redux/cartSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const handleDelete = (id) => {
    dispatch(removeItemFromCart(id));
    toast.success("Product removed from your cart");
  };

  let totalAmount = 0;
  let totalAmountDiscount = 0;

  items &&
    items.forEach((item) => {
      totalAmount += item.price * item.quantity;
      totalAmountDiscount += item.discountedPrice * item.quantity;
    });

  return (
    <div className="py-12">
      <div className="container mx-auto px-10 md:px-0">
        <h3 className="font-semibold text-3xl text-primaryColor pb-6 border-b border-borderColor mb-8">
          Order summary ({items && items.length})
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="col-span-1 lg:col-span-2 h-[570px] lg:h-[750px] overflow-y-auto orderSum">
            {items &&
              items.map((item) => (
                <CartProduct
                  product={item}
                  onClick={() => handleDelete(item.id)}
                />
              ))}
            {items.length === 0 && (
              <p className="text-lg">
                There are no items in your cart,{" "}
                <Link to="/filter" className="text-vibrantColor font-semibold">
                  continue
                </Link>{" "}
                shopping here
              </p>
            )}
          </div>
          <CartTotal
            totalAmount={totalAmount}
            totalAmountDiscount={totalAmountDiscount}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
