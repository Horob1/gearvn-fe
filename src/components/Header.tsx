import { Link, useLocation, useNavigate } from 'react-router-dom'
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
  const location = useLocation()
  const navigate = useNavigate()
  const showNavbar = () => {
    if(location.pathname !== '/') navigate('/')
    const navbar = document.getElementById('my-custom-navbar')
    if(navbar) {
      navbar.classList.add('pointer-events-none')
      navbar.classList.add('animate-wiggle')
      setTimeout(() => {
        navbar.classList.remove('animate-wiggle')
        navbar.classList.remove('pointer-events-none')
      },1200)
    }
  }
  const showModalLogin = () => {
    // eslint-disable-next-line
    // @ts-ignore: Unreachable code error
    document.getElementById('my_modal_login').showModal()
  }
  return (
    <div className="sticky top-0  bg-[#E30019] z-40 ">
      
      <div className="m-auto xl:max-w-[1220px] lg:max-w-[1000px] md:max-w-[100%] p-4 flex justify-between items-center">
          <Link to={'/'}><img className='h-[32px]' src={logo} alt="logo" loading='lazy' /></Link>
          <button onClick={showNavbar} className='bg-[#BE1529] hover:bg-red-900  py-1.5 px-2 rounded-md hidden md:flex items-center'><IoMenu className='text-white text-3xl'/><span className='text-white pl-1.5 hidden xl:block'>Danh mục</span></button>
          <form className='relative hidden md:flex'>
            <input type="text" required placeholder='Bạn cần tìm gì?' className='py-2 px-2 text-base lg:w-[312px] xl:[200px] font-medium rounded-md focus:outline-double focus:outline-2 focus:outline-red-400 pr-12 '/>
            <button type='submit' className=' absolute top-1/2 -translate-y-1/2 right-2'><IoIosSearch className='text-xl' /></button>
          </form>
          <Link to={'/about'}><div className='hidden md:flex cursor-pointer text-white items-center ml-2'>
            <PiHeadsetBold className='text-2xl mr-2' />
            <div className='hidden xl:block'>
              <p className='leading-4 text-white'>Hotline</p>
              <p className='leading-4 text-white'>1800.xyzt</p>
            </div>
          </div></Link>
          <Link to={'/showroom'}><div className='hidden md:flex cursor-pointer text-white items-center ml-2'>
            <FaLocationDot  className='text-2xl mr-2' />
            <div className='hidden xl:block'>
              <p className='leading-4 text-white'>Hệ thống</p>
              <p className='leading-4 text-white'>Showroom</p>
            </div>
          </div></Link>
          <Link to={'/me/order'}><div className='hidden md:flex cursor-pointer text-white items-center ml-2'>
            <IoClipboard  className='text-2xl mr-2' />
            <div className='hidden xl:block'>
              <p className='leading-4 text-white'>Tra cứu</p>
              <p className='leading-4 text-white'>đơn hàng</p>
            </div>
          </div>
          </Link>
          <div className='hidden md:flex cursor-pointer text-white items-center ml-2'>
            <div className="indicator">
              <span className="indicator-item text-white bg-yellow-500 indicator-start badge badge-secondary">3</span> 
              <LuShoppingCart  className='text-2xl mr-2' />
            </div>
            <p className='leading-4 text-white hidden xl:block'>Giỏ hàng</p>
          </div>
          <button onClick={showModalLogin} className='bg-[#BE1529] hover:bg-red-900  py-1.5 px-2 rounded-md hidden md:flex items-center'><IoPersonOutline className='text-white text-2xl'/><span className='text-white pl-1.5 hidden xl:block'>Đăng nhập</span></button>
      </div>
      <RearBanner/>
    </div>
  )
}

export default Header
