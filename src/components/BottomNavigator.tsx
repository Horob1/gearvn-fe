import { CiDesktopMouse1, CiHeadphones } from "react-icons/ci"
import { FaRegKeyboard } from "react-icons/fa6"
import { GrLogout } from "react-icons/gr"
import { IoIosSearch } from "react-icons/io"
import { IoCameraOutline, IoMenu, IoPersonOutline } from "react-icons/io5"
import { LuComponent } from "react-icons/lu"
import { MdMonitor } from "react-icons/md"
import { PiComputerTowerLight, PiLaptopLight } from "react-icons/pi"
import { NavLink } from "react-router-dom"

const BottomNavigator = () => {
  return (
    <div className="md:hidden btm-nav bg-white">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active text-red-600 bg-white" : ""
      }
        ><button className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          <div className="btm-nav-label font-medium">Home</div>
        </button>
      </NavLink>
      
      <button className="z-50">
        <div className="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer-4" className="flex flex-col cursor-pointer items-center">
              <IoMenu/>
              <span className="btm-nav-label">Danh mục</span>
            </label>
          </div> 
          <div className="drawer-side">
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-red-100 text-base-content ">
              <div className="pt-20"></div>
              {/* Sidebar content here */}
              <div className="px-4 py-8">
                <form className='relative flex'>
                  <input type="text" required placeholder='Bạn cần tìm gì?' className='py-2 px-2 text-base font-medium rounded-md focus:outline-double focus:outline-2 focus:outline-red-400 pr-12 '/>
                  <div className='absolute top-1/2 -translate-y-1/2 right-4'><IoIosSearch className='text-xl' /></div>
                </form>
              </div>
              <li><div className="flex items-center text-black mr-4"><PiComputerTowerLight className="text-2xl mx-2"/>PC</div></li>
              <li><div className="flex items-center text-black mr-4"><PiLaptopLight className="text-2xl mx-2"/>LAPTOP</div></li>
              <li><div className="flex items-center text-black mr-4"><IoCameraOutline className="text-2xl mx-2"/>Camera</div></li>
              <li><div className="flex items-center text-black mr-4"><MdMonitor className="text-2xl mx-2"/>Màn hình</div></li>
              <li><div className="flex items-center text-black mr-4"><FaRegKeyboard className="text-2xl mx-2"/>Bàn phím</div></li>
              <li><div className="flex items-center text-black mr-4"><CiDesktopMouse1 className="text-2xl mx-2"/>Chuột</div></li>
              <li><div className="flex items-center text-black mr-4"><CiHeadphones className="text-2xl font- mx-2"/>Tai nghe</div></li>
              <li><div className="flex items-center text-black mr-4"><LuComponent className="text-2xl font- mx-2"/>Link kiện</div></li>
              <li><div className="flex items-center text-black mr-4 mt-20"><GrLogout className="text-2xl font- mx-2"/>Đăng xuất</div></li>
            </ul>
            
           
          </div>
        </div>
      </button>
      <button className="z-0">
        <IoPersonOutline />
        <span className="z-0 btm-nav-label">Đăng nhập</span>
      </button>
    </div>
  )
}

export default BottomNavigator
