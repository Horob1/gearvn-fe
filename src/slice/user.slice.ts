import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserType } from "../types/user.type";
import axios from './../utils/axios.ts'



interface UserState {
  user: UserType,
  isAuthenticated: boolean,
}

const initialState: UserState = {
  user: {
    name: '',
    email: '',
    phone: '',
  }, 
  isAuthenticated: false
};

export const getMe = createAsyncThunk(
  'user/getMe',
  async (_, thunkAPI) => {
    const response = await axios.get("/api/user/me", {
      headers: {
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
        Expires: "0",
      },
      signal: thunkAPI.signal,
    });
    return response.data
  },
)

const userSlice = createSlice({
  name: 'USER', 
  initialState, 
  reducers:{
    logOut: (state) => {
        state.user = initialState.user;
        state.isAuthenticated = initialState.isAuthenticated;
    },
  }, extraReducers: (builder) => {
      builder.addCase(getMe.fulfilled, (state, action) => {
      // Add user to the state array
      state.user.name = action.payload?.user?.name || '';
      state.user.email = action.payload?.user?.email || '';
      state.user.phone = action.payload?.user?.phone || '';
      state.isAuthenticated = true;
    })
  }
})

export const { logOut } = userSlice.actions;

export default userSlice.reducer;