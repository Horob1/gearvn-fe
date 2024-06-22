import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserType } from "../types/user.type";
import axios from "./../utils/axios.ts";

const isAuth =
  localStorage !== null ? JSON.parse(localStorage.getItem("user")!) : false;
interface UserState {
  user: UserType;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  user: {
    _id: "",
    name: "",
    email: "",
    phone: "",
  },
  isAuthenticated: isAuth,
};

export const getMe = createAsyncThunk("user/getMe", async (_, thunkAPI) => {
  const response = await axios.get("/api/user/me", {
    headers: {
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
      Expires: "0",
    },
    signal: thunkAPI.signal,
  });
  return response.data;
});

const userSlice = createSlice({
  name: "USER",
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = initialState.user;
      state.isAuthenticated = false;
      localStorage.setItem("user", JSON.stringify(state.isAuthenticated));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMe.fulfilled, (state, action) => {
      // Add user to the state array
      state.user.name = action.payload?.user?.name || "";
      state.user._id = action.payload?.user?._id || "";
      state.user.email = action.payload?.user?.email || "";
      state.user.phone = action.payload?.user?.phone || "";
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(state.isAuthenticated));
    });
    builder.addCase(getMe.rejected, (state) => {
      state.user = initialState.user;
      state.isAuthenticated = false;
      localStorage.setItem("user", JSON.stringify(state.isAuthenticated));
    });
  },
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;
