import { IoClipboard, IoPersonOutline } from "react-icons/io5"
import { LuShoppingCart } from "react-icons/lu"
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { GrLogout } from "react-icons/gr";
import { logOut } from "../../slice/user.slice";
import { useAppDispatch } from "../../store";
import { Bounce, ToastContainer, toast } from "react-toastify";
import axios from "../../utils/axios.ts";
const UserPage = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const handleLogOut = async() => {
    try {
      await axios.post('/api/auth/logOut')
      dispatch(logOut())
      navigate('/')
    } catch (error) {
      toast.error("Có lỗi! Xin Thử lại")
    }
  }
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
            <li onClick={handleLogOut} className="text-lg cursor-pointer font-medium text-black hover:text-[#E30019] px-2 py-2 flex gap-3 items-center"><GrLogout/> Đăng xuất</li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <Outlet/>
        </div>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        className='z-50'
      />
      </div>
    </div>
  )
}

export default UserPage
