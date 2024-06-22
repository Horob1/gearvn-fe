import toast from "react-hot-toast";
import { OrderType } from "../../../slice/order.slice";
import img from "./../../../assets/download.gif";
import axios from "./../../../utils/axios.ts";
type OrderCardProps = {
  order: OrderType;
};
const getStatusVie = (status: string) => {
  if (status === "pending") {
    return "Chưa chấp nhận";
  }
  if (status === "accepted") {
    return "Đã chấp nhận";
  }
  if (status === "shipping") {
    return "Đang giao hàng";
  }
  if (status === "completed") {
    return "Đã hoàn thành";
  }
  if (status === "rejected") {
    return "Đã hủy";
  }
};
const getColor = (status: string) => {
  if (status === "pending") {
    return "#CC9900";
  }
  if (status === "accepted") {
    return "#3366CC";
  }
  if (status === "shipping") {
    return "#FF66CC";
  }
  if (status === "completed") {
    return "#009900";
  }
  if (status === "rejected") {
    return "#CC0033";
  }
};
const getTime = (timestamp: number) => {
  const date = new Date(timestamp);

  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1; // Months are zero-based, so we add 1
  const year = date.getUTCFullYear();

  return `${day}-${month}-${year}`;
};

const OrderCard = ({ order }: OrderCardProps) => {
  const handlePaymantZaloBtn = async (id: string) => {
    try {
      const res = await axios.post("/api/payment/zalo", { id });
      if (res?.data?.order_url) window.location.href = res?.data?.order_url;
      else toast.error("Không thể thanh toán");
    } catch (error) {
      //
    }
  };
  const handlePaymantMomoBtn = async (id: string) => {
    try {
      const res = await axios.post("/api/payment/momo", { id });
      if (res?.data?.payUrl) window.location.href = res?.data?.payUrl;
      else toast.error("Không thể thanh toán");
    } catch (error) {
      //
    }
  };
  return (
    <div className="px-2 pb-2 mt-4 rounded border-2">
      <div className="flex justify-between items-center py-3 border-b-[1px]">
        <h4 className="font-medium text-gray-700">Mã đơn: {order._id}</h4>
        <div className="flex gap-4">
          <kbd
            className="kbd text-center bg-red-50 !font-semibold"
            style={{
              color: getColor(order?.status),
              borderColor: getColor(order?.status),
            }}
          >
            ⌘ {getStatusVie(order?.status)}
          </kbd>
          {!order.isPaided && order.status === "pending" && (
            <>
              <kbd
                onClick={() => handlePaymantZaloBtn(order?._id)}
                className="kbd text-center cursor-pointer hover:animate-none bg-red-500 border-red-500 animate-bounce !font-semibold text-white"
              >
                ZaloPay
              </kbd>
              <kbd
                onClick={() => handlePaymantMomoBtn(order?._id)}
                className="kbd text-center cursor-pointer hover:animate-none bg-red-500 border-red-500 animate-bounce !font-semibold text-white"
              >
                MomoPay
              </kbd>
            </>
          )}
        </div>
      </div>
      {order.product.map((cart) => (
        <div
          key={cart.detail.createAt}
          className="grid grid-cols-5 w-full gap-4 border-b-[1px]"
        >
          <div className="col-span-2 h-32 w-full">
            <img
              src={cart?.detail?.imageList?.[0] ?? img}
              className="h-full m-auto aspect-square"
              alt=""
            />
          </div>
          <div className="col-span-3 mt-4 flex flex-col justify-between gap-3">
            <h6 className="text-base line-clamp-2">
              {cart?.detail?.name ?? "Unknown"}
            </h6>
            <span>Số lượng: {cart?.quantity ?? "1"}</span>
          </div>
        </div>
      ))}

      <div className="flex justify-between items-baseline">
        <h5 className="font-medium">Ngày tạo: {getTime(order.createAt)}</h5>
        <div className=" flex justify-end gap-3 mt-2">
          <h4 className="font-medium">Thành tiền: </h4>
          <h4 className="text-red-600">
            {new Intl.NumberFormat("de-DE").format(order?.totalAmount)}đ
          </h4>
        </div>
      </div>
    </div>
  );
};
export default OrderCard;
