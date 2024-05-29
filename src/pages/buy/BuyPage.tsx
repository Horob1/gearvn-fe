import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ProductCart from "../user/components/ProductCart";
import gearVn from "./../../assets/logo.png";
import TabInfor from "./components/TabInfor";
import Example from "./components/Payment";
import axios from "./../../utils/axios.ts";
import toast from "react-hot-toast";

const BuyPage = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const [order, setOrder] = useState<string>("");
  const [orderMethod, setOrderMethod] = useState<number>(0);
  const getTotalAmount = () => {
    let total = 0;
    cart.forEach((item) => {
      total +=
        ((item.product.price * (100 - (item.product.discount ?? 0))) / 100) *
        item.quantity;
    });
    return total;
  };
  const handlePaymantZaloBtn = async (id: string) => {
    try {
      const res = await axios.post("/api/payment/zalo", { id });
      if (res?.data?.order_url) window.location.href = res?.data?.order_url;
      else toast.error("Không thể thanh toán");
    } catch (error) {
      //
    }
  };
  const [tab, setTab] = useState<number>(0);
  return (
    <div className="m-auto xl:max-w-[1000px] lg:max-w-[800px] md:max-w-[600] rounded-md my-6 flex flex-col gap-5 p-4 bg-white">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Đặt hàng Online</title>
        <meta
          name="description"
          content="GEARVN - Cung cấp Hi-End PC, Laptop và Gaming Gear Chuyên Nghiệp"
        />
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <div className="p-2 bg-red-50 rounded-md">
        <ul className="steps w-full">
          <li
            onClick={() => {
              if (tab === 2) return;
              setTab(0);
            }}
            className={`step cursor-pointer  step-error`}
          >
            Giỏ hàng
          </li>
          <li
            onClick={() => {
              if (tab === 2) return;
              setTab(1);
            }}
            className={`step cursor-pointer ${tab >= 1 ? "step-error" : ""}`}
          >
            Thông tin
          </li>
          <li
            className={`step cursor-pointer ${tab === 2 ? "step-error" : ""}`}
          >
            Thanh toán
          </li>
        </ul>
      </div>
      <div>
        {cart.length !== 0 && tab === 0 && (
          <>
            <ul className="mt-6">
              {cart.map((item) => (
                <li key={item.product._id} className="mt-4">
                  <ProductCart cart={item}></ProductCart>
                </li>
              ))}
            </ul>
            <div className="w-full flex justify-between items-baseline mt-3">
              <h4>Tổng tiền:</h4>
              <h2 className="text-red-500">
                {new Intl.NumberFormat("de-DE").format(getTotalAmount())}đ
              </h2>
            </div>
            <div className="flex mt-2">
              <button
                onClick={() => setTab(1)}
                className="px-8 py-6 mt-3 w-full text-center rounded-md text-white bg-red-600 text-lg font-medium hover:opacity-60"
              >
                Đặt hàng ngay
              </button>
            </div>
          </>
        )}
        {cart.length === 0 && tab === 0 && (
          <>
            <h2 className="text-center">Giỏ hàng của bạn đang trống</h2>
            <div className="flex flex-col h-full items-center gap-3">
              <Link to={"/"}>
                <button className="btn mt-14 mx-auto bg-red-600 text-white hover:bg-red-500">
                  Tiếp tục mua sắm
                </button>
              </Link>
              <img src={gearVn} className="w-40" alt="" />
            </div>
          </>
        )}
        {tab === 1 && (
          <TabInfor
            cart={cart}
            totalAmount={getTotalAmount()}
            setTab={setTab}
            setOrder={setOrder}
          />
        )}
        {tab === 2 && (
          <div className="w-full flex flex-col">
            <Example setOrderMethod={setOrderMethod}></Example>
            {orderMethod === 0 && (
              <Link to={"/"} className="mx-auto">
                <button className="btn min-w-72 mt-14 bg-red-600 text-white hover:bg-red-500">
                  Tiếp tục mua sắm
                </button>
              </Link>
            )}
            {orderMethod === 1 && (
              <button
                onClick={() => handlePaymantZaloBtn(order)}
                className="btn mx-auto min-w-72 mt-14 bg-red-600 text-white hover:bg-red-500"
              >
                Thanh toán
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BuyPage;
