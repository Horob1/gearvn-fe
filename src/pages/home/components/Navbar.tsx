import { PiComputerTowerLight } from "react-icons/pi";
import { FaAngleRight } from "react-icons/fa6";
// import { IoCameraOutline } from "react-icons/io5";
// import { PiLaptopLight } from "react-icons/pi";
import './navbar.css'
export const Navbar = () => {

  return (
    <div className="h-96 rounded-md w-full bg-white">
      <ul className="text-black font-medium text-sm relative">
          <li className="flex justify-between items-center triangle hover:text-white hover:bg-red-500 relative px-1 py-1.5 z-10">
            <div className="flex items-center"><PiComputerTowerLight className="text-2xl mx-2"/>PC</div><FaAngleRight/>
            <div className="absolute hidden top-0 right-[-12px] translate-x-full h-96 rounded-md md:w-[542%] lg:w-[550%] xl:w-[1000px] bg-white "></div>
          </li>
          
      </ul>
    </div>
  )
}
