import { useEffect, useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Navigation} from "swiper/modules"
import { FaAngleLeft, FaAngleRight,FaAngleUp, FaAngleDown, FaStar } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { FiGift } from "react-icons/fi";
import { SiGoogletasks } from "react-icons/si";
import 'swiper/css'
import 'swiper/css/free-mode'
import './card.css'
import './productDetail.css'
import 'swiper/css/virtual'
import {imgs} from './../../assets/dummy/productDetail/productImg.ts'
import ProductMiniCard from "./ProductMiniCard.tsx";
import robot from './../../assets/robot.png'
import { Helmet } from "react-helmet-async";
import RatingList from "./RatingList.tsx";

const ProductDetail = () => {
  const location = useRef<HTMLDivElement>(document.createElement("div"))
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(1)
  const [showArticle, setShowArticle] = useState(false)
  const [showNav1, setShowNav1] = useState(false)
  const [showNav2, setShowNav2] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [swiper, setSwiper]= useState<any>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [swiper2, setSwiper2]= useState<any>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [swiper3, setSwiper3]= useState<any>(null)
  
  const executeScroll = () => location.current.scrollIntoView()

  const setShowModal = ()=> {
    const modal = document.getElementById('my_modal_3')
    
    const swiper3 = document.getElementById('swiper-3')
    swiper3!.classList.remove('hidden')
    // eslint-disable-next-line
    // @ts-ignore: Unreachable code error
    modal.showModal()
    swiper3!.classList.add('md:animate-scale')
    
  }
  const handleDeleteAnimation = ()=> {
    const swiper3 = document.getElementById('swiper-3')
    swiper3!.classList.add('hidden')
    swiper3!.classList.remove('md:animate-scale')
  }

  const handleLeftBtn = () => {
    if(index > 0) setIndex(index-1)
  }
  const handleRightBtn = () => {
    if(index < imgs.length-1) setIndex(index+1)
  }
  useEffect(() => {
    return () => {
      if (swiper) {
        swiper.destroy();
      }
      if (swiper2) {
        swiper2.destroy();
      }
      if (swiper3) {
        swiper3.destroy();
      }
    };
  }, [swiper, swiper2, swiper3]);

  useEffect(() => {
    const handleOnSetSwiper = () => {
    if(swiper && swiper2 && swiper3) {
      swiper2.slideTo(index)
      swiper.slideTo(index)
      swiper3.slideTo(index)
    }
    }
    handleOnSetSwiper()
  },[index,swiper,swiper2,swiper3])
  return (
    <div className="m-auto xl:max-w-[1220px] lg:max-w-[1000px] md:max-w-[100%]p-4">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Laptop gaming Acer Aspire 5 A515 58GM 53PZ</title>
        <meta name="description" content="Laptop gaming Acer Aspire 5 A515 58GM 53PZ" />
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <div className="text-sm breadcrumbs mb-3">
        <ul>
          <li className="text-red-600 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg><p className="text-red-600">Home</p></li> 
          <li className="text-red-600 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-5 h-5 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg><p className="text-red-600">Products</p></li> 
          <li><p>Laptop gaming Acer Aspire 5 A515 58GM 53PZ</p></li>
          </ul>
        </div>
        <div className="bg-white rounded-md grid md:grid-cols-12 grid-cols-1 mb-6">
          <div className="col-span-1 md:col-span-6 lg:col-span-5 p-4 px-8 w-full">
            <div>
              <div
              onMouseOver={()=> setShowNav1(true)}
              onMouseLeave={()=> setShowNav1(false)}>
              <Swiper
                allowTouchMove={false}
                onSwiper={(s) => {
                  
                    setSwiper(s)
                }}
                breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 12,
                }}}
                freeMode = {true}
                loop={false}
                modules={[FreeMode,Navigation]}
                autoplay={false}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                className="w-full relative"
                >
                    {imgs.map((item, key)=> 
                    <SwiperSlide onClick={setShowModal} className={``} key={key}>
                      <img src={item} className="cursor-pointer aspect-square" alt="" />
                    </SwiperSlide>)}
                  <div className={`${showNav1 ? '' : 'hidden'}`}>
                    <button onClick={handleLeftBtn} className="cursor-pointer absolute top-1/2 -translate-y-1/2 left-1 bg-slate-200 rounded-full swiper-button-prev z-10 p-2 hover:text-red-600"><FaAngleLeft></FaAngleLeft></button>
                    <button onClick={handleRightBtn} className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-1 bg-slate-200 rounded-full swiper-button-next z-10 p-2 hover:text-red-600"><FaAngleRight></FaAngleRight></button>
                  </div>
            </Swiper>
              </div>
              <div onMouseOver={()=> setShowNav2(true)}
              onMouseLeave={()=> setShowNav2(false)}>
                <Swiper
                onSwiper={(s) => {
                  
                    setSwiper2(s)
                }}
                breakpoints={{
                0: {
                  slidesPerView: 5,
                  spaceBetween: 12,
                }}}
                freeMode = {true}
                modules={[FreeMode,Navigation]}
                autoplay={false}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                className="w-full relative"
                >
                    {imgs.map((item, key)=> 
                    <SwiperSlide onClick={()=> setIndex(key)} key={key}>
                      <img src={item} className={`cursor-pointer rounded-md border-2 aspect-square border-white ${index===key ?'animate-border':''}`}  alt="" />
                    </SwiperSlide>)}
                  <div className={`${showNav2 ? '' : 'hidden'}`}>
                    <button className="cursor-pointer absolute top-1/2 -translate-y-1/2 left-1 bg-slate-200 rounded-full swiper-button-prev z-10 p-2 hover:text-red-600"><FaAngleLeft></FaAngleLeft></button>
                    <button className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-1 bg-slate-200 rounded-full swiper-button-next z-10 p-2 hover:text-red-600"><FaAngleRight></FaAngleRight></button>
                  </div>
            </Swiper>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 lg:col-span-7  px-8 py-4 pb-8 md:border-l-2">
            <h2 className="font-semibold">Laptop gaming Acer Aspire 5 A515 58GM 53PZ</h2>
            <span className='flex py-2 text-yellow-400 items-center text-lg'>0.0<FaStar className="mr-2"/><button onClick={executeScroll} className="text-lg cursor-pointer text-red-600">Đánh giá</button></span>
            <div className="flex items-center gap-4 pb-4">
              <h1 className='text-red-600 text-[32px]'>2.190.000₫</h1>
              <span className='text-gray-500 line-through text-[18px]'>3.190.000₫</span>
              <div className='ml-2 px-1.5  py-0.5 rounded-md text-red-600 border border-red-600 '> -27% </div>
            </div>
            <button className="px-20 py-3 rounded-md hover:opacity-75 bg-[#E30019]">
              <h4 className="text-white">MUA NGAY</h4>
              <span className="text-white">Giao hàng tận nơi hoặc nhận tại cửa hàng</span>
            </button>  
            <div className="py-4 flex flex-col gap-4 border-b-2">
              <h4 className="flex items-center gap-2 text-xl font-medium text-gray-700"><TiTick/>Bảo hành chính hãng 12 tháng.</h4>
              <h4 className="flex items-center gap-2 text-xl font-medium text-gray-700"><TiTick/>Hỗ trợ đổi mới trong 7 ngày.</h4>
              <h4 className="flex items-center gap-2 text-xl font-medium text-gray-700"><TiTick/>Miễn phí giao hàng toàn quốc.</h4>
            </div>  
            <div className="py-4 flex flex-col gap-4 border-b-2">
              <h2 className="text-[#E30019]">QUÀ TẶNG:</h2>
              <h4 className="flex items-center gap-2 text-xl font-medium text-gray-700"><FiGift/> Balo Acer Predator SUV.</h4>
            </div>  
            <div className="border-2 rounded-md mt-4">
              <div className="w-full px-6 py-1.5 bg-gray-400 rounded-t-md">
                <h4 className="text-xl font-medium">KHUYẾN MÃI</h4>
              </div>
              <div className="w-full px-6 py-2 pt-4 rounded-b-md flex flex-col gap-3">
                <h4 className="flex items-center gap-2 text-xl font-medium text-gray-700"><SiGoogletasks className="text-green-500"/>Giảm thêm 500.000đ khi mua kèm màn hình với laptop.</h4>
                <h4 className="flex items-center gap-2 text-xl font-medium text-gray-700"><SiGoogletasks className="text-green-500"/>Giảm thêm 500.000đ khi mua kèm màn hình với laptop.</h4>
                <h4 className="flex items-center gap-2 text-xl font-medium text-gray-700"><SiGoogletasks className="text-green-500"/>Giảm thêm 500.000đ khi mua kèm màn hình với laptop.</h4>
                <h4 className="flex items-center gap-2 text-xl font-medium text-gray-700"><SiGoogletasks className="text-green-500"/>Giảm thêm 500.000đ khi mua kèm màn hình với laptop.</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-4">
          <div className="lg:col-span-7 py-4 px-5 bg-white rounded-md">
            <div className={`${!showArticle?'article-container h-[700px]':''} overflow-hidden relative`}>
              <h2>Thông tin sản phẩm</h2>
              <div className="mt-8">
                <h2 className="font-extrabold">Thông số kỹ thuật:</h2>
                <div className="overflow-x-auto">
                  <table className="table border-2 mt-2 rounded">
                    <tbody>
                      {/* row 1 */}
                      <tr className="grid grid-cols-5 w-full">
                        <td className="bg-gray-200 p-2 w-full text-xl font-bold tex">CPU</td>
                        <td className="col-span-4 p-2 text-lg">Intel® Core™ i5-13420H (3.40GHz Up to 4.60Ghz ,8 Cores 12 Threads, 12 MB Intel® Smart Cache)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-8">
                <h2 className="font-extrabold">Đánh giá chi tiết</h2>
                <div className="py-4">
                  <article>
                    <p>Laptop gaming Acer Aspire 5 A515 58GM 53PZ là chiếc laptop chỉ có mức giá tầm trung ngang một chiếc laptop văn phòng nhưng bên trong lại sở hữu cấu hình mạnh mẽ đến kinh ngạc. Bộ vi xử lý Intel thế hệ thứ 13 mới nhất kết hợp card đồ họa RTX 2000 series chắc chắn sẽ mang đến cho bạn những trải nghiệm sử dụng và chiến game giải trí tuyệt vời. Cùng tìm hiểu ngay về mẫu laptop Acer này ngay dưới đây.</p>
                    <img src={imgs[0]} alt="" />
                  </article>
                </div>
              </div>
            </div>
            <button onClick={()=>{
              setShowArticle(!showArticle)
            }} className="w-full py-4 text-red-600 font-medium text-lg flex justify-center items-center">
              {showArticle? <>Hiển thị bớt<FaAngleUp className="ml-4"></FaAngleUp></>: <>Hiển thị thêm<FaAngleDown className="ml-4"></FaAngleDown></>}
            </button>
          </div>
          <div className="lg:col-span-5 p-4 h-fit bg-white rounded-md">
            <h2>Sản phẩm tương tự</h2>
            <div className="py-4 flex flex-col gap-5">
              {/* {[0,1,2,3].map((index)=> <>
                <div key={index} className="grid grid-cols-5 w-full gap-4">
                  <div className="col-span-2 skeleton h-32 w-full"></div>
                  <div className="col-span-3 flex flex-col justify-between gap-3">
                    <div className="skeleton h-full w-full"></div>
                    <div className="skeleton h-full w-full"></div>
                    <div className="skeleton h-full w-full"></div>
                  </div>
                </div> 
              </>)} */}
              {[0,1,2].map((index)=> <>
                <ProductMiniCard key={index} product={imgs[0]}/>
              </>)}
            </div>
                    
            {/* <ProductMiniCard product={}/> */}
          </div>
        </div>
      <div className="p-6 bg-white my-6 rounded-md" ref={location}>
        <h2 className="text-lg md:text-2xl">Đánh giá & Nhận xét Laptop gaming Acer Aspire 5 A515 58GM 53PZ</h2>

        <RatingList></RatingList>

        <form className="flex flex-col gap-3 mt-10">
          <div className="flex gap-10 justify-center">
            <img src={robot} className="w-56 h-56 rounded-full aspect-square" alt="" />
            <div className="flex flex-col gap-3">
              <h4 className="text-center font-medium text-gray-400">Chọn số lượng sao</h4>
              <div className="m-auto mb-4 rating rating-lg flex gap-2">
                {[0,1,2,3,4].map(key=> <input key={key} onClick={()=>setScore(key)} type="radio" name="rating-1" className="mask mask-star bg-red-500" checked={score===key? true: false } />)}
              </div>
              <h4 className="text-center font-medium text-gray-400">Nhập nội dung đánh giá</h4>
              <input type="text" placeholder="Nhập nội dung ở đây" className="input m-auto input-bordered input-error w-full max-w-xs" />
            </div>
          </div>
          <button className="btn btn-outline w-[360px] m-auto mt-4 btn-error">Gửi đánh giá</button>
        </form>
      </div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button onClick={handleDeleteAnimation} className="btn btn-sm bg-slate-400 btn-circle btn-ghost absolute right-10 top-5">✕</button>
          </form>

            <Swiper
                allowTouchMove={false}
                onSwiper={(s) => {
                  
                    setSwiper3(s)
                }}
                breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 12,
                }}}
                freeMode = {true}
                loop={false}
                modules={[FreeMode,Navigation]}
                autoplay={false}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                className="w-full -translate-y-1/3 md:translate-y-0 md:w-1/2 md:mt-10 flex" id="swiper-3"
                >
                    {imgs.map((item, key)=> 
                    <SwiperSlide className={``} key={key}>
                      <img src={item} className="aspect-square m-auto" alt="" />
                    </SwiperSlide>)}

                  
            </Swiper>
            <button onClick={handleLeftBtn} className="cursor-pointer absolute top-1/2 -translate-y-1/2 left-10 bg-slate-200 rounded-full swiper-button-prev z-10 p-2 hover:text-red-600"><FaAngleLeft></FaAngleLeft></button>
            <button onClick={handleRightBtn} className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-10 bg-slate-200 rounded-full swiper-button-next z-10 p-2 hover:text-red-600"><FaAngleRight></FaAngleRight></button>

      </dialog>
    </div>
  )
}

export default ProductDetail
