type ProductCardProps = {
  isLoading: boolean,
}

import image from './../../../../assets/dummy/productCard/nitro.webp'
import { PiGraphicsCardBold } from "react-icons/pi";
import { BsFillMotherboardFill } from "react-icons/bs";
import { FaMemory } from "react-icons/fa";
import { GoCpu } from "react-icons/go";
import { BiSolidMemoryCard } from "react-icons/bi";
// import { SlScreenDesktop } from "react-icons/sl";
// import { FiTarget } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { FaImage } from 'react-icons/fa6';

const ProductCard = ({isLoading}: ProductCardProps) => {
  return (
    <div>
      <div className="flex flex-col gap-4 h-full  w-full mt-6 border rounded-md px-4 pb-2">
        {isLoading ? 
        <>
          <div className="skeleton h-[232px] w-full relative mt-4">
            <FaImage className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-3xl text-gray-500"/>
          </div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-12 w-full"></div>
          <div className="skeleton h-4 w-full mb-4"></div>
        </> : 
        <>
          <div className="h-[232px] w-full ">
            <img src={image} alt="product" className='w-full h-full rounded-t-md'/>
          </div>
          <h6 className='text-base text-wrap line-clamp-2'>Laptop ASUS Vivobook S 16 OLED S5606MA MX051W</h6>
          <div className='p-1.5 bg-[#ECECEC] rounded-md'>
            <p className="grid grid-cols-2 gap-2">
              <span className="flex items-center"><GoCpu className="mr-2" />i7 14700F</span>
              <span className="flex items-center"><PiGraphicsCardBold className="mr-2" />RTX 2050</span>
              <span className="flex items-center"><BsFillMotherboardFill className="mr-2" />Z790</span>
              <span className="flex items-center"><FaMemory className="mr-2" />32GB</span>
              <span className="flex items-center"><BiSolidMemoryCard className="mr-2" />1TB</span>
              {/* <span className="flex items-center col-span-2"><SlScreenDesktop className="mr-2" />15.6 inch FHD</span>
              <span className="flex items-center"><FiTarget className="mr-2" />144HZ</span> */}
            </p>
          </div>
          <div>
            <span className='text-gray-500 line-through'>3.190.000₫</span>
            <div className='flex items-center'><h4 className='text-red-600'>2.190.000₫</h4> <div className='ml-2 rounded-sm text-red-600 border border-red-600 bg-red-50'>-27%</div></div>
          </div>
          <span className='flex text-yellow-400 items-center'>0.0<FaStar/><span className='text-gray-500'>(0 đánh giá)</span></span>
        </>
        }
      </div>
    </div>
  )
}

export default ProductCard
