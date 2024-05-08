import { Link } from "react-router-dom"
import ProductSlider from "./ProductSlider/ProductSlider"

const ProducList = () => {
  return (
    <div className="w-full px-4 py-3 bg-white mt-3 rounded-md">
      <div className="flex justify-between"> 
      <h3 className="font-medium text-red-600">LAPTOP BÁN CHẠY</h3>
      <div className="flex gap-4">
        <ul className="gap-4 hidden md:flex">
          <h5>ASUS</h5>
          <h5>MSI</h5>
          <h5>LENOVO</h5>
          <h5>DELL</h5>
          <h5>LG</h5>
          <h5>ACER</h5>
        </ul>
        <Link to={'/'} className="text-blue-600">Xem thêm</Link>
      </div>
      </div>
      <ProductSlider/>
    </div>
  )
}

export default ProducList
