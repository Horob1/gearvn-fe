import ship1 from '../assets/footer/shipping/ship_1.webp'
import ship2 from '../assets/footer/shipping/ship_2.webp'
import ship3 from '../assets/footer/shipping/ship_3.webp'
import ship4 from '../assets/footer/shipping/ship_4.webp'

import payment1 from '../assets/footer/payment/pay_1.webp'
import payment2 from '../assets/footer/payment/pay_2.webp'
import payment3 from '../assets/footer/payment/pay_3.webp'
import payment4 from '../assets/footer/payment/pay_4.webp'
import payment5 from '../assets/footer/payment/pay_5.webp'
import payment6 from '../assets/footer/payment/pay_6.webp'
import payment7 from '../assets/footer/payment/pay_7.webp'
import payment8 from '../assets/footer/payment/pay_8.webp'

import contact1 from '../assets/footer/link/facebook.webp'
import contact2 from '../assets/footer/link/tiktok.webp'
import contact3 from '../assets/footer/link/youtube.webp'

import bct from '../assets/footer/logo-bct.webp'

import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className='bg-white'>
      <div className=" sticky bottom-0 m-auto xl:max-w-[1220px] lg:max-w-[1000px] md:max-w-[100%] p-4">
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-12 gap-4 py-2 pb-4 border-b-2">
          <div className="md:col-span-1 lg:col-span-2">
            <ul>
              <h6 className="pb-3">VỀ GEARVN</h6>
              <li><p className="pb-2">Giới thiệu</p></li>
              <li><p className="pb-2">Tuyển dụng</p></li>
            </ul>
            
          </div>
          <div className="md:col-span-1 lg:col-span-2">
            <ul>
              <h6 className="pb-3">CHÍNH SÁCH</h6>
                <li><p className="pb-2">Chính sách bảo hành</p></li>
                <li><p className="pb-2">Chính sách thanh toán</p></li>
                <li><p className="pb-2">Chính sách giao hàng</p></li>
                <li><p className="pb-2">Chính sách bảo mật</p></li>
            </ul>
          </div>
          <div className="md:col-span-1 lg:col-span-2">
            <ul>
              <h6 className="pb-3">THÔNG TIN</h6>
              <div>
                <li><p className="pb-2">Hệ thống của hàng</p></li>
                <li><p className="pb-2">Hướng dẫn đặt mua</p></li>
                <li><p className="pb-2">Tra cứu địa chỉ bảo hành</p></li>
              </div>
            </ul>

          </div>
          <div className="md:col-span-1 lg:col-span-3">
            <h6 className="pb-3">TỔNG ĐÀI HỖ TRỢ <span>(8:00 - 21:00)</span></h6>
            <div className='grid grid-cols-4'>
              <p className="pb-2 col-span-1">Mua hàng: </p><span className=' col-span-3 pl-2 text-blue-500 font-semibold text-base'>1800.xyzt</span>
              <p className="pb-2 col-span-1">Bảo hành: </p><span className=' col-span-3 pl-2 text-blue-500 font-semibold text-base'>1800.tzyx</span>
              <p className="pb-2 col-span-1">Email: </p><span className=' col-span-3 pl-2 text-blue-500 font-semibold text-base'>cskh@example.gearvn</span>
            </div>
            
          </div>
          <div className="md:col-span-1 lg:col-span-3">
            <ul>
              <h6 className="pb-3">ĐƠN VỊ VẬN CHUYỂN</h6>
              <div className="grid grid-cols-4 gap-1 pb-4">
              <li><img src={ship1} alt="shipping" loading='lazy'/></li>
              <li><img src={ship2} alt="shipping" loading='lazy'/></li>
              <li><img src={ship3} alt="shipping" loading='lazy'/></li>
              <li><img src={ship4} alt="shipping" loading='lazy'/></li>
              </div>
            </ul>

            <h6 className="pb-3">CÁCH THỨC THANH TOÁN</h6>
            <div className="grid grid-cols-4 gap-1 pb-4">
              <img src={payment1} alt="payment" loading='lazy'/>
              <img src={payment2} alt="payment" loading='lazy'/>
              <img src={payment3} alt="payment" loading='lazy'/>
              <img src={payment4} alt="payment" loading='lazy'/>
              <img src={payment5} alt="payment" loading='lazy'/>
              <img src={payment6} alt="payment" loading='lazy'/>
              <img src={payment7} alt="payment" loading='lazy'/>
              <img src={payment8} alt="payment" loading='lazy'/>
            </div>
          </div>
        </div>
        <div className='flex md:hidden '>
          <div className='m-auto'>
            <img src={logo} alt="logo" loading='lazy'/>
          </div>

        </div>
        <div className='md:flex py-6 justify-between relative'>
          <div className='md:flex justify-center items-center ' >
            <h6 className='pr-4'>LIÊN HỆ VỚI CHÚNG TÔI</h6>
            <div className='flex'>
              <img src={contact1} className='rounded-full mr-2 w-[20px] md:w-[36px]' alt="contact" loading='lazy'/>
              <img src={contact2} className='rounded-full mr-2 w-[20px] md:w-[36px]' alt="contact" loading='lazy'/>
              <img src={contact3} className='rounded-full mr-2 w-[20px] md:w-[36px]' alt="contact" loading='lazy'/></div>
            </div>
          <div>
            <img src={bct} className='w-[100px] absolute right-0 top-1/2 -translate-y-1/2 md:w-[160px]' alt="certificate"   loading='lazy'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
