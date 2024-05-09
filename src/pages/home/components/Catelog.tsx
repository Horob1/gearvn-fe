import laptop from './../../../assets/dummy/catelog/latop.webp'
import pc from './../../../assets/dummy/catelog/pc.webp'
import camera from './../../../assets/dummy/catelog/camera.png'
const Catelog = () => {
  return (
    <div className="w-full px-4 py-3 bg-white mt-3 rounded-md">
      <h3 className="font-medium text-red-600">DANH MỤC SẢN PHẨM</h3>
      <div className="grid grid-cols-3 lg:grid-cols-12  gap-10 w-full pt-4">
        <img src={pc} alt="" className='w-full aspect-square' />
        <img src={laptop} alt="" className='w-full aspect-square' />
        <img src={camera} alt="" className='w-full aspect-square' />
      </div>
    </div>
  )
}

export default Catelog
