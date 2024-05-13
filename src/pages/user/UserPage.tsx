import { IoClipboard, IoPersonOutline } from "react-icons/io5"
import { LuShoppingCart } from "react-icons/lu"
import { NavLink, Outlet } from "react-router-dom"
import { GrLogout } from "react-icons/gr";
const UserPage = () => {
  return (
    <div>
      <div className="m-auto xl:max-w-[1220px] lg:max-w-[1000px] md:max-w-[100%] grid md:grid-cols-6 gap-5 p-4">
        <div className="p-4 md:col-span-2 bg-white rounded-md">
          <ul>
            <li><h2 className="font-medium text-gray-600 text-center pb-4 border-b-[1px]">Nguyễn Thế Anh</h2></li>
            <div className="pb-2"></div>
            <NavLink
            to={'/user/my-info'}
            className={({ isActive }) =>
              isActive
                ? 'text-lg font-medium text-[#E30019]  hover:text-[#E30019]'
                : 'text-lg font-medium text-black'
            }
            >
              <li className="px-2 py-1.5 flex gap-3 items-center"><IoPersonOutline/> Thông tin cá nhân</li>
            </NavLink>
            <NavLink
            to={'/user/my-cart'}
            className={({ isActive }) =>
              isActive
                ? 'text-lg font-medium text-[#E30019]  hover:text-[#E30019]'
                : 'text-lg font-medium text-black'
            }
            >
              <li className="px-2 py-2 flex gap-3 items-center"><LuShoppingCart/> Giỏ hàng của tôi</li>
            </NavLink>
            <NavLink
            to={'/user/my-order'}
            className={({ isActive }) =>
              isActive
                ? 'text-lg font-medium text-[#E30019]  hover:text-[#E30019]'
                : 'text-lg font-medium text-black'
            }
            >
              <li className="px-2 py-2  flex gap-3 items-center"><IoClipboard/> Quản lý đơn hàng</li>
            </NavLink>
            <li className="text-lg font-medium text-black hover:text-[#E30019] px-2 py-2 flex gap-3 items-center"><GrLogout/> Đăng xuất</li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default UserPage
