import ProductCard from "./ProductCard"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Navigation, Autoplay} from "swiper/modules"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import 'swiper/css'
import 'swiper/css/free-mode'
import './card.css'
import { useEffect, useState } from "react";

import axios from "./../../../../utils/axios.ts";
// import 'swiper/css/navigation'
type ProductSliderProps = {
  type: string
}
export type ProductType = {
  _id: string;
  deviceCode: string;
  name: string;
  price: number;
  stock: number;
  information: null;
  techSpecification: {
    CPU: string | null,
    RAM: string | null,
    storage: string | null,
    graphicCard: string | null,
    display: string | null,
    ports: string | null,
    audio: string | null,
    keyboard: string | null,
    cardReader: string | null,
    wifiStandard: string | null,
    bluetooth: string | null,
    webcam: string | null,
    operatingSystem: string | null,
    battery: string | null,
    weight: string | null,
    color: string | null,
    dimensions: string | null,
  },
  rateQuan: number,
  rateSum: number,
  brand: string;
  discount: number;
  typeDevice: string;
  year: number;
  sold: number;
  warranty: string;
  slug: string;
  createAt: number;
  updateAt: number | null;
  imageList: string[],
  _destroy: boolean;
};

const ProductSlider = ({type} : ProductSliderProps) => {
  const [products, setProducts] = useState<ProductType[]>([])
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const getProducts = async () => {
      try {
        const res = await axios.get(
          `/api/product?typeDevice=${type}&limit=12&sort=-sold`,
          {
            signal,
          }
        );
        setProducts(res.data.filterProduct);
      } catch (error) {
        //
      }
    };
    getProducts();
    return () => {
      controller.abort();
    };
  }, [type]);
  return (
    // <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3 w-full h-[560px] overflow-hidden">

    <Swiper
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 12,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 12,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 12,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 12,
        },
      }}
      allowTouchMove={false}
      freeMode={true}
      loop={true}
      modules={[FreeMode, Navigation, Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      className="w-full h-fit relative"
    >
      <button className="absolute top-1/2 -translate-y-1/2 left-1 bg-slate-200 rounded-full swiper-button-prev z-10 p-2 hover:text-red-600">
        <FaAngleLeft></FaAngleLeft>
      </button>
      {products?.length === 0 &&
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
          <SwiperSlide key={item}>
            <ProductCard isLoading={true} product={null}/>
          </SwiperSlide>
        ))}
      {products &&
        products.map((item) => (
          <SwiperSlide key={item._id}>
            <ProductCard isLoading={false} product={item} />
          </SwiperSlide>
        ))}
      <button className="absolute top-1/2 -translate-y-1/2 right-1 bg-slate-200 rounded-full swiper-button-next z-10 p-2 hover:text-red-600">
        <FaAngleRight></FaAngleRight>
      </button>
    </Swiper>
  );
}

export default ProductSlider
