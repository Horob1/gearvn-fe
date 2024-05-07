import banner2 from '../assets/dummy/rear-banner-1.webp'
import banner3 from '../assets/dummy/rear-banner-2.webp'
const RearBanner = () => {
  return (
    <div className='relative max-w-[1280px] m-auto hidden 2xl:block'> 
      <div className='absolute top-full translate-y-10 -right-24 3xl:-right-36'>
        <img src={banner2} className="2xl:w-28 3xl:w-36 rounded-md" alt="" />
      </div>
      <div className='absolute top-full translate-y-10 -left-24 3xl:-left-36'>
        <img src={banner3} className="2xl:w-28 3xl:w-36 rounded-md" alt="" />
      </div>
    </div>
  )
}

export default RearBanner
