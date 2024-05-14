import { Link } from 'react-router-dom'
import img from '../assets/dummy/productCard/nitro.webp'
import './searchResult.css'
export const SearchResult = () => {
  return (
    <div className='search-result hidden'>
      <div className="px-4 pt-2 bg-white shadow-md rounded-md absolute w-[130%] h-[250px] top-[110%] left-0 overflow-y-auto">
      {[0,1,2,3].map(()=> <div className="flex justify-between items-center pb-2 border-b-2">
        <div className='pr-5 pt-2'>
          <span className="line-clamp-1 text-sm">Laptop gaming Acer Aspire 7 A715 76G 59MW</span>
          <div className='flex gap-4 line-clamp-1'><span className='text-red-600 text-sm'>2.190.000₫</span> <span className='text-gray-500 line-through text-xs'>3.190.000₫</span></div>
        </div>
        <img src={img} className='h-[50px] aspect-square' alt="" />
      </div>)}
      <div className='flex'><Link to={'/search'} className='text-black m-auto px-4 py-3 cursor-pointer hover:text-red-600'>Hiển thị thêm</Link></div>
    </div></div>
    
  )
}
