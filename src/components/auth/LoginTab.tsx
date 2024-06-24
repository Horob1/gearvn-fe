import { useState } from "react";
import getGoogleAuthUrl from "../../utils/getGoogleUrl";
import axios from "./../../utils/axios.ts";
import { useAppDispatch } from "../../store.ts";

import { getMe } from "../../slice/user.slice.ts";
import toast from "react-hot-toast";
const LoginTab = () => {
  const dispatch = useAppDispatch();
  const [disable, setDisable] = useState(false);
  const [formData, setFormData] = useState<{ email: string; password: string }>(
    {
      email: "",
      password: "",
    }
  );

  const handleSubmit = async (e) => {
    setDisable(true);
    e.preventDefault();
    try {
      if (formData.email !== "" && formData.password !== "") {
        await axios.post("/api/auth/login", {
          email: formData.email,
          password: formData.password,
        });
      }
      dispatch(getMe());
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error?.message === "Request failed with status code 422")
        toast.error("Tài khoản không tồn tại!");
      else if (error?.message === "Request failed with status code 401")
        toast.error("Sai mật khẩu!");
      else toast.error("Có lỗi xảy ra!");
    }
    setDisable(false);
  };
  const handleOauth = async () => {
    const width = 500;
    const height = 600;
    const left = screen.width / 2 - width / 2;
    const top = screen.height / 2 - height / 2;
    const authUrl = getGoogleAuthUrl(); // Hàm này trả về URL OAuth của Google

    const popup = window.open(
      authUrl,
      "Google OAuth",
      `width=${width}, height=${height}, top=${top}, left=${left}`
    );

    if (popup) {
      console.log("Google OAuth popup window opened");
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
    }
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <div className="space-y-4">
          <h1 className="text-center text-2xl font-semibold text-gray-600">
            Đăng nhập
          </h1>
          <hr />
          <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none w-full"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none w-full"
              value={formData.password}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
              type="password"
              name="password"
              id=""
              placeholder="Password"
              required
            />
          </div>
        </div>
        {/* Remember Me checkbox */}
        <button
          type="submit"
          disabled={disable}
          value="login"
          id="login"
          className="mt-6 w-full shadow-xl bg-red-600 hover:opacity-50 text-indigo-100 py-2 rounded-md text-lg tracking-wide transition duration-1000"
        >
          Đăng nhập
        </button>
        <p className="text-center font-semibold text-gray-600 mt-6">
          Hoặc đăng nhập bằng
        </p>
        <div className="flex gap-4 mt-2 pb-4">
          <button
            onClick={handleOauth}
            type="button"
            className="w-full text-center shadow-xl bg-red-600 hover:opacity-50 text-indigo-100 py-2 rounded-md text-lg tracking-wide transition duration-1000"
          >
            Google
          </button>
        </div>
        <hr />
      </div>
    </form>
  );
};

export default LoginTab;
