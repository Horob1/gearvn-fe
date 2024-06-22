import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "./../utils/axios.ts";
import { ProductType } from "../pages/home/components/ProductSlider/ProductSlider.tsx";

type ProductOrder = {
  detail: ProductType;
  quantity: number;
};

export const getMyOrder = createAsyncThunk(
  "user/getMyOrder",
  async (_, thunkAPI) => {
    const response = await axios.get("/api/user/my-order", {
      signal: thunkAPI.signal,
    });
    return response.data;
  }
);

export type OrderType = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  totalAmount: number;
  userId: string;
  product: ProductOrder[];
  isPaided: boolean;
  status: string;
  createAt: number;
  updateAt: number | null;
};

type InitialStateType = {
  orders: OrderType[];
};
const initialState: InitialStateType = {
  orders: [],
};

const orderSlice = createSlice({
  name: "ORDERS",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMyOrder.fulfilled, (state, action) => {
      state.orders = action.payload?.resOrders.reverse() ?? [];
    });

    builder.addCase(getMyOrder.rejected, (state) => {
      state.orders = [];
    });
  },
});

export default orderSlice.reducer;
