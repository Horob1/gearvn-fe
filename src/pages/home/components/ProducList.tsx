import { Link } from "react-router-dom"
import ProductSlider from "./ProductSlider/ProductSlider"
import { PLType } from "../HomePage";
type ProductListProps = {
  productProps: PLType;
}
const ProducList = ({productProps}: ProductListProps) => {
  return (
    <div className="w-full px-4 py-3 bg-white mt-3 mb-6 rounded-md">
      <div className="flex justify-between">
        <h3 className="font-medium text-red-600">{productProps.title}</h3>
        <div className="flex gap-4">
          <ul className="gap-4 hidden md:flex">
            {productProps.brands &&
              productProps.brands.map((item, index) => (
                <Link
                  key={index}
                  to={`/search?typeDevice=${productProps.type}&brand=${item}`}
                >
                  <h5 className="cursor-pointer font-medium hover:text-red-600 text-lg">
                    {item}
                  </h5>
                </Link>
              ))}
            {productProps.pcList &&
              productProps.pcList.map((item, index) => (
                <Link
                  key={index}
                  to={`/search?typeDevice=${productProps.type}&name=${item}`}
                >
                  <h5 className="cursor-pointer font-medium hover:text-red-600 text-lg">
                    {item}
                  </h5>
                </Link>
              ))}
          </ul>
          <Link
            to={`/search?typeDevice=${productProps.type}`}
            className="text-blue-600"
          >
            Xem thêm
          </Link>
        </div>
      </div>
      <ProductSlider type={productProps.type}/>
    </div>
  );
}

export default ProducList
