// import { FaImage } from 'react-icons/fa6'
import banner2 from '../assets/dummy/rear-banner-1.webp'
import banner3 from '../assets/dummy/rear-banner-2.webp'
const RearBanner = () => {
  return (
    <div className='relative max-w-[1280px] m-auto hidden 2xl:block'> 
      <div className='absolute top-full translate-y-10 -right-24 3xl:-right-36'>
        <img src={banner2} className="2xl:w-28 3xl:w-36 2xl:h-80 3xl:h-[436px] animate-blinker rounded-md" alt="" />
        {/* <div className="skeleton 2xl:w-28 3xl:w-36 2xl:h-80 3xl:h-[436px] rounded-md relative">
          <FaImage className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-3xl text-gray-500"/>
        </div> */}
      </div>
      <div className='absolute top-full translate-y-10 -left-24 3xl:-left-36'>
        <img src={banner3} className="2xl:w-28 3xl:w-36 2xl:h-80 3xl:h-[436px] animate-blinker rounded-md" alt="" />
        {/* <div className="skeleton 2xl:w-28 3xl:w-36 2xl:h-80 3xl:h-[436px] rounded-md relative">
          <FaImage className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-3xl text-gray-500"/>
        </div> */}
      </div>
    </div>
  )
}

export default RearBanner
