import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Navigation} from "swiper/modules"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import 'swiper/css'
import 'swiper/css/free-mode'
import './card.css'

import 'swiper/css/virtual'
import {imgs} from './../../assets/dummy/productDetail/productImg.ts'


const ProductDetail = () => {
  const [index, setIndex] = useState(0)
  const [showNav1, setShowNav1] = useState(false)
  const [showNav2, setShowNav2] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [swiper, setSwiper]= useState<any>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [swiper2, setSwiper2]= useState<any>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [swiper3, setSwiper3]= useState<any>(null)
  
  const setShowModal = ()=> {
    const modal = document.getElementById('my_modal_3')
    
    const swiper3 = document.getElementById('swiper-3')
    swiper3!.classList.remove('hidden')
    // eslint-disable-next-line
    // @ts-ignore: Unreachable code error
    modal.showModal()
    swiper3!.classList.add('animate-scale')
    
  }
  const handleDeleteAnimation = ()=> {
    const swiper3 = document.getElementById('swiper-3')
    swiper3!.classList.add('hidden')
    swiper3!.classList.remove('animate-scale')
  }

  const handleLeftBtn = () => {
    if(index > 0) setIndex(index-1)
  }
  const handleRightBtn = () => {
    if(index < imgs.length-1) setIndex(index+1)
  }

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
    <div className="m-auto xl:max-w-[1220px] lg:max-w-[1000px] md:max-w-[100%] p-4">
      <div className="text-sm breadcrumbs mb-3">
        <ul>
          <li className="text-red-600 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg><p className="text-red-600">Home</p></li> 
          <li className="text-red-600 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-5 h-5 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg><p className="text-red-600">Products</p></li> 
          <li><p>Laptop gaming Acer Aspire 5 A515 58GM 53PZ</p></li>
          </ul>
        </div>
        <div className="p-4 bg-white rounded-md grid md:grid-cols-12 grid-cols-1">
          <div className="col-span-1 md:col-span-4 p-2 w-full">
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
        </div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal relative">
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
                className="w-1/2 mt-10 flex" id="swiper-3"
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
