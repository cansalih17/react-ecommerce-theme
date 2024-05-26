import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += Number(newItem.quantity);
      } else {
        state.items.push({ ...newItem, quantity: newItem.quantity });
      }
    },
    removeItemFromCart(state, action) {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== itemIdToRemove);
    },
    updateCartItemQuantity(state, action) {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },
    cartToggle(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== newItem.id);
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    allClear(state) {
      state.items = [];
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  updateCartItemQuantity,
  cartToggle,
  allClear,
} = cartSlice.actions;
export default cartSlice.reducer;
