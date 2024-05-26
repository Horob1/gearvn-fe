import { FaStar } from "react-icons/fa6";
import { ProductType } from "../home/components/ProductSlider/ProductSlider";
import img from "./../../assets/download.gif";
import { Link } from "react-router-dom";
type ProductMiniCardProps = {
  product: ProductType;
};

const ProductMiniCard = ({ product }: ProductMiniCardProps) => {
  return (
    <div className="grid grid-cols-5 w-full gap-4">
      <div className="col-span-2 h-32 w-full">
        <Link to={"/products/" + product.slug}>
          <img
            src={product?.imageList?.[0] ?? img}
            className="h-full m-auto aspect-square"
            alt=""
          />
        </Link>
      </div>
      <div className="col-span-3 flex flex-col justify-between gap-3">
        <Link to={"/products/" + product.slug}>
          <h6 className="text-base line-clamp-2">{product?.name}</h6>
        </Link>
        <div>
          <span className="text-gray-500 line-through">
            {new Intl.NumberFormat("de-DE").format(product?.price ?? 0)}đ
          </span>
          <div className="flex items-center">
            <h4 className="text-red-600">
              {new Intl.NumberFormat("de-DE").format(
                ((product?.price ?? 0) * (100 - (product?.discount ?? 0))) / 100
              )}
              đ
            </h4>{" "}
            <div className="ml-2 rounded-sm text-red-600 border px-2 border-red-600 bg-red-50">
              {" "}-{product?.discount ?? 0}%{" "}
            </div>
          </div>
        </div>
        <span className="flex text-yellow-400 items-center">
          {Math.floor(
            ((product?.rateSum ?? 0) * 10) / (product?.rateQuan ?? 1)
          ) / 10}
          <FaStar />
          <span className="text-gray-500">
            ({product?.rateQuan ?? 0} đánh giá)
          </span>
        </span>
      </div>
    </div>
  );
};

export default ProductMiniCard;
