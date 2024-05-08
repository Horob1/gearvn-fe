import { PiComputerTowerLight } from "react-icons/pi";
import { FaAngleRight } from "react-icons/fa6";
// import { IoCameraOutline } from "react-icons/io5";
// import { PiLaptopLight } from "react-icons/pi";
import './navbar.css'
import { useState } from "react";
export const Navbar = () => {
  const [showPCTab, setShowPCTab] = useState(false)

  return (
    <div className="h-96 rounded-md w-full bg-white">
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
          
      </ul>
    </div>
  )
}
