import { useEffect, useState } from 'react'
import ImageSlider from './ImageSlider'
import axios from './../../../utils/axios.ts'
import { BannerType } from '../../../components/RearBanner.tsx'
export const Carousel = () => {
  const [isLoading, setLoading] = useState(true)
  const [banner, setBanner] = useState<BannerType[]>([])
  useEffect(() =>{
    const controller = new AbortController();
    const signal = controller.signal;
    const getBanner = async () => {
      try {
        const res = await axios.get('/api/banner?position=center&limit=6', {signal})
          if(res?.data?.banner.length===6) {
            setBanner(res?.data?.banner)
            setLoading(false)
          }
      } catch (error) {
        //
      }
    }
    getBanner()
    return () => {
       controller.abort();
    }
  },[])
  return (
    <div className="carousel rounded-md md:h-96 w-full ">
      <ImageSlider isLoading={isLoading} imgs={banner}></ImageSlider>
    </div>
  )
}
