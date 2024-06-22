import { useEffect, useState } from 'react'
import { FaImage } from 'react-icons/fa'
import axios from './../utils/axios.ts'

const TopBanner = () => {
  const [isLoading, setLoading] = useState(true)
  const [color, setColor] = useState('')
  const [banner, setBanner] = useState('')
  useEffect(() =>{
    const controller = new AbortController();
    const signal = controller.signal;
    const getTopBanner = async () => {
      try {
        const res = await axios.get('/api/banner?position=top', {signal})
        const number = Math.floor(Math.random() * res?.data?.banner?.length)
        setBanner(res?.data?.banner?.[number]?.imageURL)
        setColor(res?.data?.banner?.[number]?.color)
        // lấy mã màu từ ảnh
        setLoading(false)
      } catch (error) {
        //
      }
    }
    getTopBanner()
    return () => {
       controller.abort();
    }
  },[])

  return (
      <div className='hidden md:flex' style={{
        backgroundColor: isLoading ? '' : color
      }}>
        {isLoading && <div className="m-auto rounded-none skeleton w-full h-12 relative">
          <FaImage className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-3xl text-gray-500"/>
        </div>}

        {!isLoading && <img src={banner} className="m-auto h-12" alt="" />}
        
      </div>
  )
}

export default TopBanner
