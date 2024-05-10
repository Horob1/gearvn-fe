import { PiComputerTowerLight } from "react-icons/pi";
import { FaAngleRight } from "react-icons/fa6";
import { MdMonitor } from "react-icons/md";
import { CiDesktopMouse1 } from "react-icons/ci";
import { FaRegKeyboard } from "react-icons/fa6";
import { CiHeadphones } from "react-icons/ci";
import { LuComponent } from "react-icons/lu";
import { IoCameraOutline } from "react-icons/io5";
import { PiLaptopLight } from "react-icons/pi";
import './navbar.css'
import { useState } from "react";
export const Navbar = () => {
  const [showPCTab, setShowPCTab] = useState(false)
  const [showLaptopTab, setShowLaptopTab] = useState(false)
  const [showCameraTab, setShowCameraTab] = useState(false)
  const [showMonitorTab, setShowMonitorTab] = useState(false)
  const [showKeyboardTab, setShowKeyboardTab] = useState(false)
  const [showMouseTab, setShowMouseTab] = useState(false)
  const [showHeadphoneTab, setShowHeadphoneTab] = useState(false)
  const [showComponentTab, setShowComponentTab] = useState(false)
  return (
    <div id="my-custom-navbar" className="h-96 focus:outline-2 focus:outline-double rounded-md w-full bg-white">
      <ul className="text-black font-medium text-sm relative">
          <li className="flex justify-between items-center triangle hover:text-white hover:bg-red-500 relative px-1 py-1.5 z-10"
          onMouseOver={()=>setShowPCTab(true)}
          onMouseLeave={()=>setShowPCTab(false)}
          >
            <div className="flex items-center"><PiComputerTowerLight className="text-2xl mx-2"/>PC</div><FaAngleRight/>
            <div className={`absolute ${showPCTab?'' : 'hidden'} top-0 right-[-12px] translate-x-full h-96 rounded-md md:w-[542%] lg:w-[550%] xl:w-[1000px] bg-white py-4 px-8 grid grid-cols-10 gap-3`}>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Giá bán</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Theo chip(Intel)</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Theo chip(AMD)</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Theo VGA</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">AIO</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Giảm giá sâu</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Hot nhất</h6></ul>
            </div>
          </li>
          <li className="flex justify-between items-center triangle hover:text-white hover:bg-red-500 relative px-1 py-1.5 z-10"
          onMouseOver={()=>setShowLaptopTab(true)}
          onMouseLeave={()=>setShowLaptopTab(false)}
          >
            <div className="flex items-center"><PiLaptopLight className="text-2xl mx-2"/>LAPTOP</div><FaAngleRight/>
            <div className={`absolute ${showLaptopTab ? '' : 'hidden'} -top-[36px] right-[-12px] translate-x-full h-96 rounded-md md:w-[542%] lg:w-[550%] xl:w-[1000px] bg-white py-4 px-8 grid grid-cols-10 gap-3`}>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Giá bán</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Thương hiệu</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Theo chip(Intel)</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Theo chip(AMD)</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Theo VGA</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Nhu cầu</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Giảm giá sâu</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Hot nhất</h6></ul>
            </div>
          </li>
          <li className="flex justify-between items-center triangle hover:text-white hover:bg-red-500 relative px-1 py-1.5 z-10"
          onMouseOver={()=>setShowCameraTab(true)}
          onMouseLeave={()=>setShowCameraTab(false)}
          >
            <div className="flex items-center"><IoCameraOutline className="text-2xl mx-2"/>Camera</div><FaAngleRight/>
            <div className={`absolute ${showCameraTab ? '' : 'hidden'} -top-[72px] right-[-12px] translate-x-full h-96 rounded-md md:w-[542%] lg:w-[550%] xl:w-[1000px] bg-white py-4 px-8 grid grid-cols-10 gap-3`}>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Giá bán</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Thương hiệu</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Giảm giá sâu</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Hot nhất</h6></ul>
            </div>
          </li>
          <li className="flex justify-between items-center triangle hover:text-white hover:bg-red-500 relative px-1 py-1.5 z-10"
          onMouseOver={()=>setShowMonitorTab(true)}
          onMouseLeave={()=>setShowMonitorTab(false)}
          >
            <div className="flex items-center"><MdMonitor className="text-2xl mx-2"/>Màn hình</div><FaAngleRight/>
            <div className={`absolute ${showMonitorTab ? '' : 'hidden'} -top-[108px] right-[-12px] translate-x-full h-96 rounded-md md:w-[542%] lg:w-[550%] xl:w-[1000px] bg-white py-4 px-8 grid grid-cols-10 gap-3`}>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Giá bán</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Thương hiệu</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Kích thước</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Tần số quét</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Giảm giá sâu</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Hot nhất</h6></ul>
            </div>
          </li>
          <li className="flex justify-between items-center triangle hover:text-white hover:bg-red-500 relative px-1 py-1.5 z-10"
          onMouseOver={()=>setShowKeyboardTab(true)}
          onMouseLeave={()=>setShowKeyboardTab(false)}
          >
            <div className="flex items-center"><FaRegKeyboard className="text-2xl mx-2"/>Bàn phím</div><FaAngleRight/>
            <div className={`absolute ${showKeyboardTab ? '' : 'hidden'} -top-[144px] right-[-12px] translate-x-full h-96 rounded-md md:w-[542%] lg:w-[550%] xl:w-[1000px] bg-white py-4 px-8 grid grid-cols-10 gap-3`}>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Giá bán</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Thương hiệu</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Layout</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Văn phòng</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Giảm giá sâu</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Hot nhất</h6></ul>
            </div>
          </li>
          <li className="flex justify-between items-center triangle hover:text-white hover:bg-red-500 relative px-1 py-1.5 z-10"
          onMouseOver={()=>setShowMouseTab(true)}
          onMouseLeave={()=>setShowMouseTab(false)}
          >
            <div className="flex items-center"><CiDesktopMouse1 className="text-2xl mx-2"/>Chuột</div><FaAngleRight/>
            <div className={`absolute ${showMouseTab ? '' : 'hidden'} -top-[180px] right-[-12px] translate-x-full h-96 rounded-md md:w-[542%] lg:w-[550%] xl:w-[1000px] bg-white py-4 px-8 grid grid-cols-10 gap-3`}>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Giá bán</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Thương hiệu</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">DPI</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Văn phòng</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Giảm giá sâu</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Hot nhất</h6></ul>
            </div>
          </li>
          <li className="flex justify-between items-center triangle hover:text-white hover:bg-red-500 relative px-1 py-1.5 z-10"
          onMouseOver={()=>setShowHeadphoneTab(true)}
          onMouseLeave={()=>setShowHeadphoneTab(false)}
          >
            <div className="flex items-center"><CiHeadphones className="text-2xl font- mx-2"/>Tai nghe</div><FaAngleRight/>
            <div className={`absolute ${showHeadphoneTab ? '' : 'hidden'} -top-[216px] right-[-12px] translate-x-full h-96 rounded-md md:w-[542%] lg:w-[550%] xl:w-[1000px] bg-white py-4 px-8 grid grid-cols-10 gap-3`}>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Giá bán</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Thương hiệu</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Giảm giá sâu</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Hot nhất</h6></ul>
            </div>
          </li>
          <li className="flex justify-between items-center triangle hover:text-white hover:bg-red-500 relative px-1 py-1.5 z-10"
          onMouseOver={()=>setShowComponentTab(true)}
          onMouseLeave={()=>setShowComponentTab(false)}
          >
            <div className="flex items-center"><LuComponent className="text-2xl font- mx-2"/>Link kiện</div><FaAngleRight/>
            <div className={`absolute ${showComponentTab ? '' : 'hidden'} -top-[252px] right-[-12px] translate-x-full h-96 rounded-md md:w-[542%] lg:w-[550%] xl:w-[1000px] bg-white py-4 px-8 grid grid-cols-10 gap-3`}>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">CPU</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">VGA</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">PSU</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">SSD</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Mother Board</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">RAM DDR5</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">RAM DDR4</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Tản nhiệt</h6></ul>
              <ul className="col-span-2"><h6 className="text-red-600 text-base">Tản nhiệt custom</h6></ul>
            </div>
          </li>
      </ul>
    </div>
  )
}
