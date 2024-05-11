import { Link } from "react-router-dom"
import ProductCart from "./ProductCart.tsx"

// import NotFound from "./NotFound.tsx"

const MyCartList = () => {
  return (
    <div className="p-4 bg-white rounded-md">
      <h2 className="text-gray-700">Giỏ hàng của tôi</h2>
      {/* <NotFound></NotFound> */}
      <ul className="mt-6">
        <li className="mt-4">
          <ProductCart></ProductCart>
        </li>
        <li className="mt-4">
          <ProductCart></ProductCart>
        </li>
        <li className="mt-4">
          <ProductCart></ProductCart>
        </li>
      </ul>
      <div className="flex mt-6">
        <Link to={'/buy'} className="px-8 py-6 mt-3 w-full text-center rounded-md text-white bg-red-600 text-lg font-medium hover:opacity-60">Đặt hàng ngay</Link>
      </div>
    </div>
  )
}

export default MyCartList
