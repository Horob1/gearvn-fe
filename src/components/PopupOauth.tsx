import toast from "react-hot-toast";
import { getMe } from "../slice/user.slice";
import { useAppDispatch } from "../store";
import axios from "./../utils/axios.ts";
import { useEffect } from "react";

export const PopupOauth = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    window.addEventListener("message", async (event) => {
      if (event?.data?.accessToken && event?.data?.refreshToken)
        try {
          // Gửi token đến server của bạn để xác thực và lấy thông tin người dùng
          await axios.post("/api/auth/google-login", {
            accessToken: event?.data?.accessToken,
            refreshToken: event?.data?.refreshToken,
          });
          dispatch(getMe());
        } catch (error) {
          toast.error("Có lỗi xảy ra!");
        }
    });

    return () => {
      window.removeEventListener("message", () => {});
    };
  }, [dispatch]);
  return <></>;
};
