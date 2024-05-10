// import { FaImage } from 'react-icons/fa6'
import banner from '../assets/dummy/top-banner.webp'

const TopBanner = () => {
  return (
      <div className='hidden md:flex bg-[#C8EAFF]'>
        <img src={banner} className="m-auto h-12" alt="" />
        {/* <div className="m-auto rounded-none skeleton w-full h-12 relative">
          <FaImage className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-3xl text-gray-500"/>
        </div> */}
      </div>
  )
}

export default TopBanner
