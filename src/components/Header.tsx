import { Link } from 'react-router-dom'
import logo from './../assets/logo-white.png'
import { IoMenu } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { PiHeadsetBold } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { IoClipboard } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";
import RearBanner from './RearBanner';
const Header = () => {
  return (
    <div className="sticky top-0  bg-[#E30019]">
      <div className="m-auto xl:max-w-[1220px] lg:max-w-[1000px] md:max-w-[100%] p-4 flex justify-between items-center">
          <Link to={'/'}><img className='h-[32px]' src={logo} alt="logo" loading='lazy' /></Link>
          <button className='bg-[#BE1529] hover:bg-red-900  py-1.5 px-2 rounded-md flex items-center'><IoMenu className='text-white text-3xl'/><span className='text-white pl-1.5 hidden xl:block'>Danh mục</span></button>
          <form className='relative'>
            <input type="text" required placeholder='Bạn cần tìm gì?' className='py-2 px-2 text-base lg:w-[312px] xl:[200px] font-medium rounded-md focus:outline-double focus:outline-2 focus:outline-red-400 pr-12 '/>
            <button type='submit' className=' absolute top-1/2 -translate-y-1/2 right-2'><IoIosSearch className='text-xl' /></button>
          </form>
          <div className='flex cursor-pointer text-white items-center ml-2'>
            <PiHeadsetBold className='text-2xl mr-2' />
            <div className='hidden xl:block'>
              <p className='leading-4'>Hotline</p>
              <p className='leading-4'>1800.xyzt</p>
            </div>
          </div>
          <div className='flex cursor-pointer text-white items-center ml-2'>
            <FaLocationDot  className='text-2xl mr-2' />
            <div className='hidden xl:block'>
              <p className='leading-4'>Hệ thống</p>
              <p className='leading-4'>Showroom</p>
            </div>
          </div>
          <div className='flex cursor-pointer text-white items-center ml-2'>
            <IoClipboard  className='text-2xl mr-2' />
            <div className='hidden xl:block'>
              <p className='leading-4'>Tra cứu</p>
              <p className='leading-4'>đơn hàng</p>
            </div>
          </div>
          
          <div className='flex cursor-pointer text-white items-center ml-2'>
            
            <div className="indicator">
              <span className="indicator-item bg-yellow-500 indicator-start badge badge-secondary">3</span> 
              <LuShoppingCart  className='text-2xl mr-2' />
            </div>
            <p className='leading-4 hidden xl:block'>Giỏ hàng</p>
          </div>
          <button className='bg-[#BE1529] hover:bg-red-900  py-1.5 px-2 rounded-md flex items-center'><IoPersonOutline className='text-white text-2xl'/><span className='text-white pl-1.5 hidden xl:block'>Đăng nhập</span></button>
      </div>
      <RearBanner/>
    </div>
  )
}

export default Header
