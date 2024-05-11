// import NotFound from "./NotFound.tsx"

const MyOrderList = () => {
  return (
    <div>
      <div className="p-4 bg-white rounded-md">
        <h2 className="text-gray-700">Đơn hàng của tôi</h2>
        <div className="border-b border-gray-200">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500">
            <li className="me-2">
              <div className="text-red-600 border-red-600 cursor-pointer inline-flex items-center justify-center p-4 border-b-2 t rounded-t-lg hover:text-red-600 hover:border-red-600 group">
               <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                </svg>Tất cả
              </div>
            </li>
            <li className="me-2">
              <div className="cursor-pointer inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-red-600 hover:border-red-600 group">
               Đang giao hàng
              </div>
            </li>
            <li className="me-2">
              <div className="cursor-pointer inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-red-600 hover:border-red-600 group">
               Đã hoàn thành
              </div>
            </li>
            <li className="me-2">
              <div className="cursor-pointer inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-red-600 hover:border-red-600 group">
               Đã huỷ
              </div>
            </li>
          </ul>
        </div>
        {/* <div className="mt-10">
          <NotFound/>
        </div> */}
        <div className="my-6">
          <div className="px-2 pb-2 mt-4 rounded border-2">
            <div className="flex justify-between mt-2 items-center">
              <h4 className="font-medium text-gray-700">Mã đơn: sdfsdjfhajksdfhjska</h4>
              <kbd className="kbd text-red-600 border-red-600 bg-red-50 !font-semibold">⌘ Đang giao</kbd>
            </div>
            <div className="grid grid-cols-5 w-full gap-4 border-b-[1px]">
              <div className="col-span-2 h-32 w-full">
                <img src="https://product.hstatic.net/200000722513/product/logitech-g102-lightsync-rgb-black-1_bf4f5774229c4a0f81b8e8a2feebe4d8_aeb4ae49ee844c3e9d315883d4e482d4_grande.jpg" className="h-full m-auto aspect-square" alt="" />
              </div>
              <div className="col-span-3 mt-4 flex flex-col justify-between gap-3">
                <h6 className='text-base line-clamp-2'>Laptop ASUS Vivobook S 16 OLED S5606MA MX051W</h6>
                <h4 className='text-red-600'>2.190.000₫</h4>
                <span>Số lượng: 2</span>
              </div>
            </div>
            <div className="grid grid-cols-5 w-full gap-4 border-b-[1px]">
              <div className="col-span-2 h-32 w-full">
                <img src="https://product.hstatic.net/200000722513/product/logitech-g102-lightsync-rgb-black-1_bf4f5774229c4a0f81b8e8a2feebe4d8_aeb4ae49ee844c3e9d315883d4e482d4_grande.jpg" className="h-full m-auto aspect-square" alt="" />
              </div>
              <div className="col-span-3 mt-4 flex flex-col justify-between gap-3">
                <h6 className='text-base line-clamp-2'>Laptop ASUS Vivobook S 16 OLED S5606MA MX051W</h6>
                <h4 className='text-red-600'>2.190.000₫</h4>
                <span>Số lượng: 2</span>
              </div>

            </div>
            <div className=" flex justify-end gap-3 mt-2">
                <h4 className="font-medium">Thành tiền: </h4><h4 className='text-red-600'>2.190.000₫</h4>
            </div>
          </div>
          <div className="px-2 pb-2 mt-4 rounded border-2">
            <div className="flex justify-between mt-2 items-center">
              <h4 className="font-medium text-gray-700">Mã đơn: sdfsdjfhajksdfhjska</h4>
              <kbd className="kbd text-red-600 border-red-600 bg-red-50 !font-semibold">⌘ Đang giao</kbd>
            </div>
            <div className="grid grid-cols-5 w-full gap-4 border-b-[1px]">
              <div className="col-span-2 h-32 w-full">
                <img src="https://product.hstatic.net/200000722513/product/logitech-g102-lightsync-rgb-black-1_bf4f5774229c4a0f81b8e8a2feebe4d8_aeb4ae49ee844c3e9d315883d4e482d4_grande.jpg" className="h-full m-auto aspect-square" alt="" />
              </div>
              <div className="col-span-3 mt-4 flex flex-col justify-between gap-3">
                <h6 className='text-base line-clamp-2'>Laptop ASUS Vivobook S 16 OLED S5606MA MX051W</h6>
                <h4 className='text-red-600'>2.190.000₫</h4>
                <span>Số lượng: 2</span>
              </div>
            </div>
            <div className="grid grid-cols-5 w-full gap-4 border-b-[1px]">
              <div className="col-span-2 h-32 w-full">
                <img src="https://product.hstatic.net/200000722513/product/logitech-g102-lightsync-rgb-black-1_bf4f5774229c4a0f81b8e8a2feebe4d8_aeb4ae49ee844c3e9d315883d4e482d4_grande.jpg" className="h-full m-auto aspect-square" alt="" />
              </div>
              <div className="col-span-3 mt-4 flex flex-col justify-between gap-3">
                <h6 className='text-base line-clamp-2'>Laptop ASUS Vivobook S 16 OLED S5606MA MX051W</h6>
                <h4 className='text-red-600'>2.190.000₫</h4>
                <span>Số lượng: 2</span>
              </div>

            </div>
            <div className=" flex justify-end gap-3 mt-2">
                <h4 className="font-medium">Thành tiền: </h4><h4 className='text-red-600'>2.190.000₫</h4>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MyOrderList
