import ProductCard from "./ProductCard"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Navigation, Autoplay} from "swiper/modules"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import 'swiper/css'
import 'swiper/css/free-mode'
import './card.css'
// import 'swiper/css/navigation'
const ProductSlider = () => {

  return (
    // <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3 w-full h-[560px] overflow-hidden">
     
    <Swiper breakpoints={
          {
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
            }}}
            freeMode = {true}
            loop={true}
            modules={[FreeMode, Navigation, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            className="w-full h-[560px] relative"
        >
          <button className="absolute top-1/2 -translate-y-1/2 left-1 bg-slate-200 rounded-full swiper-button-prev z-10 p-2 hover:text-red-600"><FaAngleLeft></FaAngleLeft></button>
          {[0,1,2,3,4,5,6,7,8,9,10,11,12].map((item)=> <SwiperSlide key={item}>
            <ProductCard isLoading={false}/>
          </SwiperSlide>)}
          <button className="absolute top-1/2 -translate-y-1/2 right-1 bg-slate-200 rounded-full swiper-button-next z-10 p-2 hover:text-red-600"><FaAngleRight></FaAngleRight></button>
    </Swiper>
    
  )
}

export default ProductSlider
