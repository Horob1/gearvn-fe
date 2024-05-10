import laptop from './../../../assets/catelog/latop.webp'
import pc from './../../../assets/catelog/pc.webp'
import camera from './../../../assets/catelog/camera.png'
import monitor from './../../../assets/catelog/monitor.webp'
import component from './../../../assets/catelog/component.webp'
import mouse from './../../../assets/catelog/mouse.jpg'
import keyboard from './../../../assets/catelog/keyboard.webp'
import headphone from './../../../assets/catelog/headphone.webp'
const Catelog = () => {
  return (
    <div className="w-full px-4 py-3 bg-white mt-3 rounded-md">
      <h3 className="font-medium text-red-600">DANH MỤC SẢN PHẨM</h3>
      <div className="grid grid-cols-3 lg:grid-cols-12  gap-10 w-full pt-4">
        <img src={pc} alt="" className='w-full aspect-square' />
        <img src={laptop} alt="" className='w-full aspect-square' />
        <img src={camera} alt="" className='w-full aspect-square' />
        <img src={monitor} alt="" className='w-full aspect-square' />
        <img src={mouse} alt="" className='w-full aspect-square' />
        <img src={keyboard} alt="" className='w-full aspect-square' />
        <img src={headphone} alt="" className='w-full aspect-square' />
        <img src={component} alt="" className='w-full aspect-square' />
      </div>
    </div>
  )
}

export default Catelog
