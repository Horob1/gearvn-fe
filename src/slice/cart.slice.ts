import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../pages/home/components/ProductSlider/ProductSlider";

type Cart = {
  product: ProductType;
  quantity: number;
};

type InitialStateType = {
  cart: Cart[];
};
const initialState: InitialStateType = {
  cart: [],
};

const cartSlice = createSlice({ name: "CART", initialState, reducers: {} });

export default cartSlice.reducer;
