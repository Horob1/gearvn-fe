import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from './../assets/logo-white.png'
import { IoMenu } from "react-icons/io5";
import { FaRegHandSpock } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { PiHeadsetBold } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { IoClipboard } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";
import RearBanner from './RearBanner';
import { SearchResult } from './SearchResult';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store';
import './Header.css'
import { toast } from 'react-toastify';
import { logOut } from '../slice/user.slice';
import axios from './../utils/axios.ts'
import { GrLogout } from 'react-icons/gr';
import { useEffect, useRef, useState } from 'react';
import { ProductType } from '../pages/home/components/ProductSlider/ProductSlider.tsx';
const Header = () => {
  const [query, setQuery] = useState<string>('')
  const [searchResult, setSearchResult] = useState<ProductType[]>([])
  const searchRef = useRef<AbortController>()
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const handleLogOut = async() => {
    try {
      await axios.post('/api/auth/logOut')
      dispatch(logOut())
      navigate('/')
    } catch (error) {
      toast.error("Có lỗi! Xin Thử lại")
    }
  }
  const myInfor = useSelector((state: RootState)=> state.user)
  const showNavbar = () => {
    if(location.pathname !== '/') navigate('/')
    const navbar = document.getElementById('my-custom-navbar')
    if(navbar) {
      window.scrollTo(0, 0);
      navbar.classList.add('pointer-events-none')
      navbar.classList.add('animate-wiggle')
      setTimeout(() => {
        navbar.classList.remove('animate-wiggle')
        navbar.classList.remove('pointer-events-none')
      },1200)
    }
  }
  const handleLoginBtn = () => {
    if(!myInfor.isAuthenticated)
    // eslint-disable-next-line
    // @ts-ignore: Unreachable code error
      document.getElementById('my_modal_login').showModal()
  }
  const handleUserBtn = () => {
    if(myInfor.isAuthenticated) navigate('/user/my-info')
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/search?name='+query)
  }
  const handleSearchIPOnChange = async (e) => {
    setQuery(e.target.value)
    setSearchResult([])
    if (!e.target.value) return;
    if (searchRef.current) searchRef.current.abort();
    searchRef.current = new AbortController();
    const signal = searchRef.current.signal;

    //trycatch(() =>
    try {
      const res = await axios.get("/api/product?limit=10&name=" + e.target.value, {
        signal,
      });

      setSearchResult(res?.data?.filterProduct ?? []);
      
    } catch (error) {
      //
    }
  } 
  useEffect(()=>{
    setQuery('')
    setSearchResult([])
  }, [location])
  return (
    <div className="sticky top-0  bg-[#E30019] z-40 ">
      <div className="m-auto xl:max-w-[1220px] lg:max-w-[1000px] md:max-w-[100%] p-4 flex justify-between items-center">
        <Link to={"/"}>
          <img className="h-[32px]" src={logo} alt="logo" loading="lazy" />
        </Link>
        <button
          onClick={showNavbar}
          className="bg-[#BE1529] hover:bg-red-900  py-1.5 px-2 rounded-md hidden md:flex items-center"
        >
          <IoMenu className="text-white text-3xl" />
          <span className="text-white pl-1.5 hidden xl:block">Danh mục</span>
        </button>
        <form onSubmit={handleSubmit} className="relative hidden md:flex">
          <input
            type="text"
            value={query}
            onChange={handleSearchIPOnChange}
            placeholder="Bạn cần tìm gì?"
            className="py-2 px-2 text-base lg:w-[312px] xl:[200px] font-medium rounded-md focus:outline-double focus:outline-2 focus:outline-red-400 pr-12 "
          />
          <button
            type="submit"
            className=" absolute top-1/2 -translate-y-1/2 right-2"
          >
            <IoIosSearch className="text-xl" />
          </button>
          <SearchResult query={query} result={searchResult}/>
        </form>
        <Link to={"/about"}>
          <div className="hidden md:flex cursor-pointer text-white items-center ml-2">
            <PiHeadsetBold className="text-2xl mr-2" />
            <div className="hidden xl:block">
              <p className="leading-4 text-white">Hotline</p>
              <p className="leading-4 text-white">1800.xyzt</p>
            </div>
          </div>
        </Link>
        <Link to={"/showroom"}>
          <div className="hidden md:flex cursor-pointer text-white items-center ml-2">
            <FaLocationDot className="text-2xl mr-2" />
            <div className="hidden xl:block">
              <p className="leading-4 text-white">Hệ thống</p>
              <p className="leading-4 text-white">Showroom</p>
            </div>
          </div>
        </Link>
        <Link to={"/user/order"}>
          <div className="hidden md:flex cursor-pointer text-white items-center ml-2">
            <IoClipboard className="text-2xl mr-2" />
            <div className="hidden xl:block">
              <p className="leading-4 text-white">Tra cứu</p>
              <p className="leading-4 text-white">đơn hàng</p>
            </div>
          </div>
        </Link>
        <div className="hidden md:flex cursor-pointer text-white items-center ml-2">
          <div className="indicator">
            <span className="indicator-item text-white bg-yellow-500 indicator-start badge badge-secondary">
              3
            </span>
            <LuShoppingCart className="text-2xl mr-2" />
          </div>
          <p className="leading-4 text-white hidden xl:block">Giỏ hàng</p>
        </div>
        <button
          onClick={handleLoginBtn}
          className="btn-user bg-[#BE1529] hover:bg-red-900  py-1.5 px-2 rounded-md hidden md:flex items-center relative"
        >
          <IoPersonOutline className="text-white text-2xl line-clamp-1" />
          <span className="text-white pl-1.5 hidden xl:block">
            {myInfor.isAuthenticated ? myInfor.user.name : "Đăng nhập"}
          </span>
          {myInfor.isAuthenticated && (
            <div className="absolute user-option-container top-[100%] right-0 min-w-[320px] animate-fadeIn">
              <div className="user-option mt-3 p-4 bg-white rounded-md shadow">
                <ul>
                  <li
                    onClick={handleUserBtn}
                    className="flex items-center gap-4 hover:underline border-b-2 pb-3"
                  >
                    <FaRegHandSpock className="text-xl font-bold" />
                    <span className="font-bold">
                      Xin chào, {myInfor.user.name}
                    </span>
                  </li>
                  <Link to={"/user/my-cart"}>
                    <li className="flex items-center gap-4 hover:underline py-2">
                      <LuShoppingCart className="text-xl" />
                      <span>Giỏ hàng của tôi</span>
                    </li>
                  </Link>
                  <Link to={"/user/my-order"}>
                    <li className="flex items-center gap-4 hover:underline py-2">
                      <IoClipboard className="text-xl" />
                      <span>Đơn hàng của tôi</span>
                    </li>
                  </Link>
                  <li
                    onClick={handleLogOut}
                    className="flex items-center gap-4 hover:underline border-t-2 pt-3"
                  >
                    <GrLogout className="text-xl" />
                    <span>Đăng xuất</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </button>
      </div>
      <RearBanner />
    </div>
  );
}

export default Header
