import { FaImage } from 'react-icons/fa6'
import { useEffect, useState } from 'react'
import axios from './../utils/axios.ts'
export type BannerType = {
  _id: string,
  imageURL: string,
  position: string,
  createdAt: string,
  updatedAt: string,
  _destroy: boolean,
  color: string
}
const RearBanner = () => {
  const [isLoading, setLoading] = useState(true)
  const [banner, setBanner] = useState<BannerType[]>([])
  useEffect(() =>{
    const controller = new AbortController();
    const signal = controller.signal;
    const getRearBanner = async () => {
      try {
        const res = await axios.get('/api/banner?position=rear&limit=2', {signal})
        if(res?.data?.banner.length===2) {
          setBanner(res?.data?.banner)
          setLoading(false)
        }
      } catch (error) {
        //
      }
    }
    getRearBanner()
    return () => {
       controller.abort();
    }
  },[])
  return (
    <div className='relative max-w-[1280px] m-auto hidden 2xl:block'> 
      <div className='absolute top-full translate-y-10 -right-24 3xl:-right-36'>
        {!isLoading && <img src={banner[0]?.imageURL} className="2xl:w-28 3xl:w-36 2xl:h-80 3xl:h-[436px] animate-blinker rounded-md" alt="" />}
        {isLoading && <div className="skeleton 2xl:w-28 3xl:w-36 2xl:h-80 3xl:h-[436px] rounded-md relative">
          <FaImage className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-3xl text-gray-500"/>
        </div>}
      </div>
      <div className='absolute top-full translate-y-10 -left-24 3xl:-left-36'>
        {!isLoading && <img src={banner[1]?.imageURL} className="2xl:w-28 3xl:w-36 2xl:h-80 3xl:h-[436px] animate-blinker rounded-md" alt="" />}
        {isLoading && <div className="skeleton 2xl:w-28 3xl:w-36 2xl:h-80 3xl:h-[436px] rounded-md relative">
          <FaImage className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-3xl text-gray-500"/>
        </div>}
      </div>
    </div>
  )
}

export default RearBanner
