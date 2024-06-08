import { useEffect, useState } from "react";
import RegisterTab from "./RegisterTab";
import LoginTab from "./LoginTab";
import { Toaster } from "react-hot-toast";

const LogIn = () => {
  const [tab, setTab] = useState(false);
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        setTab(false);
      }
    };

    // Đăng ký sự kiện nhấn phím Esc khi component được mount
    document.addEventListener("keydown", handleKeyPress);

    // Xóa sự kiện khi component unmount để tránh memory leaks
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  return (
    <dialog id="my_modal_login" className="modal">
      <div className="modal-box bg-white w-96">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            onClick={() => setTab(false)}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        {!tab ? <LoginTab></LoginTab> : <RegisterTab setTab={setTab}></RegisterTab>}
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <div className="flex justify-center items-center mt-4">
            <p className="inline-flex items-center text-gray-700 font-medium text-xs text-center">
              <span className="ml-2">
                {!tab ? "Chưa có tài khoản?" : "Đã có tài khoản"}
                <button
                  type="button"
                  onClick={() => setTab(!tab)}
                  className="text-xs ml-2 text-blue-500 font-semibold"
                >{`${!tab ? "Đăng ký" : "Đăng nhập"} ➡️`}</button>
              </span>
            </p>
          </div>
        </form>
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          className: "m r-4",
        }}
        reverseOrder={false}
      />
    </dialog>
  );
};

export default LogIn;
