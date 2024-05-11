import { RiDeleteBin5Line } from "react-icons/ri";
const ProductCart = () => {
  return (
    <div className="grid grid-cols-5 w-full gap-4 relative">
      <div className="col-span-2 h-32 w-full">
        <img src="https://product.hstatic.net/200000722513/product/logitech-g102-lightsync-rgb-black-1_bf4f5774229c4a0f81b8e8a2feebe4d8_aeb4ae49ee844c3e9d315883d4e482d4_grande.jpg" className="h-full m-auto aspect-square" alt="" />
      </div>
      <div className="col-span-3 flex flex-col justify-between gap-3">
        <h6 className='text-base line-clamp-2'>Laptop ASUS Vivobook S 16 OLED S5606MA MX051W</h6>
        <div>
          <span className='text-gray-500 line-through'>3.190.000₫</span>
          <div className='flex items-center'><h4 className='text-red-600'>2.190.000₫</h4> <div className='ml-2 rounded-sm text-red-600 border border-red-600 bg-red-50'>-27%</div></div>
        </div>
        <div className="join">
          <button className="join-item btn">«</button>
          <button className="join-item btn">Page 22</button>
          <button className="join-item btn">»</button>
        </div>
      </div>
      <button className="absolute bottom-0 right-0 p-4 rounded-full hover:bg-slate-200"><RiDeleteBin5Line></RiDeleteBin5Line></button>
    </div>
  )
}

export default ProductCart
