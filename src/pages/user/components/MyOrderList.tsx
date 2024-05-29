// import NotFound from "./NotFound.tsx"

import { useEffect, useState } from "react";
import NotFound from "./NotFound";
import { RootState, useAppDispatch } from "../../../store";
import { getMyOrder } from "../../../slice/order.slice";
import { useSelector } from "react-redux";
import OrderCard from "./OrderCard";
const tabTitle = [
  { title: "Tất cả", index: 0, status: "" },
  { title: "Chưa chấp nhận", index: 1, status: "pending" },
  { title: "Đã chấp nhận", index: 2, status: "accepted" },
  { title: "Đang giao", index: 3, status: "shipping" },
  { title: "Đã Hoàn thành", index: 4, status: "completed" },
  { title: "Đã Huỷ", index: 5, status: "rejected" },
];
const MyOrderList = () => {
  const dispatch = useAppDispatch();
  const order = useSelector((state: RootState) => state.order.orders);
  const [tab, setTab] = useState<number>(0);
  useEffect(() => {
    const action = dispatch(getMyOrder());
    return () => {
      action.abort();
    };
  }, [dispatch]);
  return (
    <div>
      <div className="p-4 bg-white rounded-md">
        <h2 className="text-gray-700">Đơn hàng của tôi</h2>
        <div className="border-b border-gray-200">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500">
            {tabTitle.map((tabItem) => (
              <li
                key={tabItem.title}
                className="me-2"
                onClick={() => setTab(tabItem.index)}
              >
                <div
                  className={` ${
                    tabItem.index === tab ? "text-red-600 border-red-600" : ""
                  } cursor-pointer inline-flex items-center justify-center p-4 border-b-2 t rounded-t-lg hover:text-red-600 hover:border-red-600 group`}
                >
                  {tabItem.title}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="my-6">
          {tabTitle.map((tabItem) => (
            <div
              key={tabItem.index + tabItem.status}
              className={`${
                tabItem.index === tab ? "" : "hidden"
              } animate-blinker`}
            >
              {tabItem.status === "" &&
                order.map((item) => <OrderCard key={item._id} order={item} />)}
              {order.map((item) =>
                item.status === tabItem.status ? (
                  <OrderCard key={item._id} order={item} />
                ) : (
                  ""
                )
              )}
              {tabItem.status !== "" &&
                order.filter((item) => item?.status === tabItem.status)
                  .length === 0 && <NotFound />}
              {tabItem.status === "" && order.length === 0 && <NotFound />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrderList;
