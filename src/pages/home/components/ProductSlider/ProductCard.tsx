type ProductCardProps = {
  isLoading: boolean;
  product: ProductType | null;
};

import { PiGraphicsCardBold } from "react-icons/pi";
import errorImg from "./../../../../assets/download.gif";
import { FaMemory } from "react-icons/fa";
import { GoCpu } from "react-icons/go";
import { BiSolidMemoryCard } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import { ProductType } from "./ProductSlider";
import Marquee from "react-fast-marquee";
import { SlScreenDesktop } from "react-icons/sl";
import { Link } from "react-router-dom";

const ProductCard = ({ isLoading, product }: ProductCardProps) => {
  return (
    <div>
      <div className=" flex flex-col gap-4 h-full  w-full mt-6 border rounded-md px-4 pb-2">
        {isLoading ? (
          <>
            <div className="skeleton h-[232px] w-full relative mt-4">
              <FaImage className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-3xl text-gray-500" />
            </div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-12 w-full"></div>
            <div className="skeleton h-4 w-full mb-4"></div>
          </>
        ) : (
          <>
            <Link to={"/products/"+product?.slug}>
              <div className="h-[232px] w-full">
                <img
                  src={product?.imageList?.[0] ?? errorImg}
                  alt="product"
                  className="w-full my-2 rounded-t-md"
                />
              </div>
            </Link>
            <Link to={"/products/"+product?.slug}>
              <h6 className="text-base text-wrap line-clamp-2">
                {product?.name}
              </h6>
            </Link>
            <div className="p-1.5 bg-[#ECECEC] rounded-md">
              <div className="grid grid-cols-2 gap-2">
                {product?.techSpecification?.CPU && (
                  <div className="flex items-center">
                    <GoCpu className="mr-2 text-xl" />
                    <Marquee speed={20} pauseOnHover={true}>
                      {product?.techSpecification?.CPU}
                    </Marquee>
                  </div>
                )}
                {product?.techSpecification?.graphicCard && (
                  <div className="flex items-center">
                    <PiGraphicsCardBold className="mr-2 text-xl" />
                    <Marquee speed={20} pauseOnHover={true}>
                      {product?.techSpecification?.graphicCard}
                    </Marquee>
                  </div>
                )}
                {product?.techSpecification?.RAM && (
                  <div className="flex items-center">
                    <FaMemory className="mr-2 text-xl" />
                    <Marquee speed={20} pauseOnHover={true}>
                      {product?.techSpecification?.RAM}
                    </Marquee>
                  </div>
                )}
                {product?.techSpecification?.storage && (
                  <div className="flex items-center">
                    <BiSolidMemoryCard className="mr-2 text-xl" />
                    <Marquee speed={20} pauseOnHover={true}>
                      {product?.techSpecification?.storage}
                    </Marquee>
                  </div>
                )}
                {(product?.techSpecification?.dimensions ||
                  product?.techSpecification?.display) && (
                  <div className="flex items-center col-span-2">
                    <SlScreenDesktop className="mr-2 text-xl" />
                    <Marquee speed={20} pauseOnHover={true}>
                      {`${product?.techSpecification?.dimensions ?? ""} ${
                        product?.techSpecification?.display ?? ""
                      }`}
                    </Marquee>
                  </div>
                )}
              </div>
            </div>
            <div>
              <span className="text-gray-500 line-through">
                {new Intl.NumberFormat("de-DE").format(product?.price ?? 0)}đ
              </span>
              <div className="flex items-center">
                <h4 className="text-red-600">
                  {new Intl.NumberFormat("de-DE").format(
                    ((product?.price ?? 0) * (100 - (product?.discount ?? 0))) /
                      100
                  )}
                  đ
                </h4>
                <div className="ml-2 rounded-sm text-red-600 border border-red-600 bg-red-50">
                  -{product?.discount ?? 0}%
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
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
