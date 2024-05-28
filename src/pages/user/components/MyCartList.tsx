import { Link } from "react-router-dom";
import ProductCart from "./ProductCart.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../../../store.ts";
import gearVn from "./../../../assets/logo.png";
import { Helmet } from "react-helmet-async";
// import NotFound from "./NotFound.tsx"

const MyCartList = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  return (
    <div className="p-4 bg-white rounded-md h-full">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Giỏ hàng của tôi</title>
        <meta
          name="description"
          content="GEARVN - Cung cấp Hi-End PC, Laptop và Gaming Gear Chuyên Nghiệp"
        />
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      {cart.length !== 0 ? (
        <>
          <h2 className="text-gray-700">Giỏ hàng của tôi</h2>
          {/* <NotFound></NotFound> */}
          <ul className="mt-6">
            {cart.map((item) => (
              <li key={item.product._id} className="mt-4">
                <ProductCart cart={item}></ProductCart>
              </li>
            ))}
          </ul>
          <div className="flex mt-6">
            <Link
              to={"/buy"}
              className="px-8 py-6 mt-3 w-full text-center rounded-md text-white bg-red-600 text-lg font-medium hover:opacity-60"
            >
              Đặt hàng ngay
            </Link>
          </div>
        </>
      ) : (
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
    </div>
  );
};

export default MyCartList;
