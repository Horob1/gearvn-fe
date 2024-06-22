import { Helmet } from "react-helmet-async";
import { Link, useSearchParams } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";
import Fireworks from "@fireworks-js/react";


const PaymentSuccessPage = () => {
  const [params] = useSearchParams();
  return (
    <div className="m-auto xl:max-w-[1220px] lg:max-w-[1000px] md:max-w-[100%] p-4 flex   justify-between items-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Thanh toán thành công - GEARVN</title>
        <meta
          name="description"
          content="Không tìm thấy trang này trong hệ thống GEARVN. Vui lòng thử lại!"
        />
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <div className="m-auto p-16 bg-white rounded-md flex flex-col gap-10">
        <div className="hidden flex-col md:flex gap-8">
          <AiFillCheckCircle className="w-[80px] h-[80px] m-auto text-green-500"></AiFillCheckCircle>
          <h1 className="font-medium text-center text-green-500">
            Thanh toán thành công
          </h1>
          <h4 className="font-medium text-center">
            Đơn hàng có mã{" "}
            <span className="text-xl text-gray-500">#{params.get("id")}</span>{" "}
            đã được thanh toán thành công!
            <br />
            <span className="text-red-600 text-xl"> GearVN</span> sẽ liên lạc
            sớm nhất tới quý khách để bàn giao dịch vụ, sản phẩm ❤️
          </h4>
        </div>
        <button className="z-50 btn btn-outline btn-error m-auto text-lg">
          <Link to={"/"}>QUAY VỀ TRANG CHỦ</Link>
        </button>
      </div>
      <Fireworks
        autostart={true}
        options={{ opacity: 0.5 }}
        style={{
          top: 0,
          left: 0,
          zIndex: 20,
          width: "100%",
          height: "100%",
          position: "fixed",
          background: "transparent",
        }}
      />
    </div>
  );
};

export default PaymentSuccessPage;
