import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartSlice";
import getProductDetailReducer from "../redux/getProductDetailSlice";
import getAllProductsReducer from "../redux/getAllProductsSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    getProductDetail: getProductDetailReducer,
    getAllProducts: getAllProductsReducer,
  },
});
