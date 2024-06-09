import { useEffect, useState } from "react";
// import {
//   DistrictCombobox,
//   ProvinceCombobox,
//   WardCombobox,
// } from "./AutoCompleteComboBox";
// import useProvinces from "../../../hook/Provinces.tsx";
// import useDistrict from "../../../hook/District.tsx";
// import useWard from "../../../hook/Ward.tsx";
import { Cart, clearCart } from "../../../slice/cart.slice";
type TabInforProps = {
  cart: Cart[];
  totalAmount: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
  setOrder: React.Dispatch<React.SetStateAction<string>>;
};
import axios from "./../../../utils/axios.ts";
import img from "./../../../assets/download.gif";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store.ts";
const TabInfor = ({ cart, totalAmount, setTab, setOrder }: TabInforProps) => {
  const userInfor = useSelector((state: RootState) => state.user);
  // const { provinces, selectedProvince, setSelectedProvince } = useProvinces();
  // const { districts, currentDistrict, setCurrentDistrict } = useDistrict({
  //   id: selectedProvince.province_id,
  // });
  const dispatch = useAppDispatch();
  // const { wards, currentWard, setCurrentWard } = useWard({
  //   id: currentDistrict.district_id,
  // });

  useEffect(() => {
    if (userInfor.isAuthenticated)
      setFormData({
        ...formData,
        name: userInfor?.user?.name ?? "",
        email: userInfor?.user?.email ?? "",
        phone: userInfor?.user?.phone ?? "",
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (
        formData.name &&
        formData.email &&
        formData.phone &&
        formData.address
        // &&
        // selectedProvince.province_name &&
        // currentDistrict.district_name &&
        // currentWard.ward_name
      ) {
        const body = {
          userId: "",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          // +
          // ", " +
          // currentWard.ward_name +
          // ", " +
          // currentDistrict.district_name +
          // ", " +
          // selectedProvince.province_name,
          cart: cart,
          totalAmount: totalAmount,
        };
        if (userInfor.isAuthenticated && userInfor?.user?._id)
          body.userId = userInfor.user?._id;
        const res = await axios.post("/api/order", body);

        setTab(2);
        setOrder(res?.data?.order._id);
        dispatch(clearCart());
        toast.success("Đặt hàng thành công");
      } else {
        // TODO: toast error
        toast.error("Chưa nhập đủ thông tin");
      }
    } catch (error) {
      // TODO: toast error
    }
  };
  return (
    <div>
      <h1 className="text-center">Thông tin cá nhân</h1>
      <div className="gap-4 grid md:grid-cols-5">
        <div className="col-span-3">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Họ và tên</label>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Số điện thoại</label>
              <input
                required
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            {/* <div className="mb-4 flex justify-between">
              <div>
                <label className="block text-gray-700">Tỉnh/Thành phố</label>
                <ProvinceCombobox
                  provinces={provinces}
                  setProvince={setSelectedProvince}
                />
              </div>
              <div>
                <label className="block text-gray-700">Quận/Huyện</label>
                <DistrictCombobox
                  districts={districts}
                  setCurrentDistrict={setCurrentDistrict}
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phường/Xã</label>
              <WardCombobox wards={wards} setCurrentWard={setCurrentWard} />
            </div> */}
            <div className="mb-4">
              <label className="block text-gray-700">Địa Chỉ</label>
              <input
                required
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </form>
        </div>
        <div className="col-span-2 px-4 bg-red-50 rounded-md">
          <h4 className="text-center pt-4">Chi tiết đơn hàng:</h4>
          <div className="mt-4 h-80 overflow-auto rounded-md">
            {cart.map((item) => (
              <div
                key={item.product._id}
                className="grid grid-cols-5 w-full gap-4 pb-2 border-t-2"
              >
                <div className="col-span-2 h-16 w-full">
                  <img
                    src={item.product?.imageList?.[0] ?? img}
                    className="h-full m-auto aspect-square"
                    alt=""
                  />
                </div>
                <div className="col-span-2 ">
                  <h6 className="text-sm line-clamp-1">{item.product?.name}</h6>

                  <div>
                    <h4 className="text-red-600 text-sm">
                      {new Intl.NumberFormat("de-DE").format(
                        ((item.product?.price ?? 0) *
                          (100 - (item.product?.discount ?? 0))) /
                          100
                      )}
                      đ
                    </h4>
                  </div>
                </div>
                <div className="h-full flex">
                  <span className="my-auto">x{item.quantity}</span>
                </div>
              </div>
            ))}
          </div>
          <h4 className="text-center mt-4">Tổng tiền:</h4>
          <h2 className="text-red-500 text-center">
            {new Intl.NumberFormat("de-DE").format(totalAmount)}đ
          </h2>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="px-8 py-6 mt-3 w-full text-center rounded-md text-white bg-red-600 text-lg font-medium hover:opacity-60"
      >
        Đặt hàng
      </button>
    </div>
  );
};

export default TabInfor;
