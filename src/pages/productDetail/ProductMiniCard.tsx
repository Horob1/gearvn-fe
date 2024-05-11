import { FaStar } from "react-icons/fa6"

type ProductMiniCardProps = {
  product: string
}

const ProductMiniCard = ({product}:ProductMiniCardProps) => {
  return (
    <div className="grid grid-cols-5 w-full gap-4">
      <div className="col-span-2 h-32 w-full">
        <img src={product} className="h-full m-auto aspect-square" alt="" />
      </div>
      <div className="col-span-3 flex flex-col justify-between gap-3">
        <h6 className='text-base line-clamp-2'>Laptop ASUS Vivobook S 16 OLED S5606MA MX051W</h6>
        <div>
          <span className='text-gray-500 line-through'>3.190.000₫</span>
          <div className='flex items-center'><h4 className='text-red-600'>2.190.000₫</h4> <div className='ml-2 rounded-sm text-red-600 border border-red-600 bg-red-50'>-27%</div></div>
        </div>
        <span className='flex text-yellow-400 items-center'>0.0<FaStar/><span className='text-gray-500'>(0 đánh giá)</span></span>
      </div>
    </div> 
  )
}

export default ProductMiniCard
