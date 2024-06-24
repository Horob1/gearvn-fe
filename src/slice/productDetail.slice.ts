import { ProductType } from "./../pages/home/components/ProductSlider/ProductSlider";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import img from "./../assets/download.gif";
import axios from "./../utils/axios.ts";

type PromotionPolicyType = {
  _id: string;
  typeDevice: string;
  description: string;
  createAt: number;
  updateAt: number | null;
  _destroy: boolean;
};

type ProductDetailType = {
  mainProduct: ProductType;
  relatedProducts: ProductType[];
  promotionPolicy: PromotionPolicyType[];
};

type InitialStateType = {
  product: ProductDetailType | null;
  isLoading: boolean;
};

const initialState: InitialStateType = {
  product: null,
  isLoading: true,
};

export const getProductDetail = createAsyncThunk(
  "product/getDetail",
  async (slug: string, thunkAPI) => {
    const response = await axios.get("/api/product/" + slug, {
      signal: thunkAPI.signal,
    });
    return response.data;
  }
);

const productDetailSlice = createSlice({
  name: "PRODUCTDETAIL",
  initialState,
  reducers: {
    addRate: (state, action) => {
      state?.product?.mainProduct?.rateList?.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductDetail.pending, (state) => {
      state.isLoading = true;
      state.product = null;
    });
    builder.addCase(getProductDetail.fulfilled, (state, action) => {
      state.product = action.payload;
      if (
        state.product &&
        state.product.mainProduct &&
        !state.product.mainProduct.imageList
      ) {
        state.product.mainProduct.imageList = [img];
      }
      state.isLoading = false;
    });
  },
});

export const { addRate } = productDetailSlice.actions;

export default productDetailSlice.reducer;
