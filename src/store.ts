import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/user.slice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    user: userSlice,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()