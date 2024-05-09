import img1 from './../../../assets/dummy/carousel/img1.webp'
import img2 from './../../../assets/dummy/carousel/img2.webp'
import img3 from './../../../assets/dummy/carousel/img3.webp'
import img4 from './../../../assets/dummy/carousel/img4.webp'

const Ads = () => {
  return (
    <div className="w-full py-3 mt-2 grid-cols-4 grid sm:grid-cols-8 gap-4 ">
      <img src={img1} alt="" className='col-span-2 aspect-[2/1] rounded-md'/>
      <img src={img2} alt="" className='col-span-2 aspect-[2/1] rounded-md'/>
      <img src={img3} alt="" className='col-span-2 aspect-[2/1] rounded-md'/>
      <img src={img4} alt="" className='col-span-2 aspect-[2/1] rounded-md'/>
    </div>
  )
}

export default Ads
