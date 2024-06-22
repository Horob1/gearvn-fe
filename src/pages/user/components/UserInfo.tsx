import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "../../../store"
import { useState } from "react"
import axios from "./../../../utils/axios"
import toast from "react-hot-toast"
import { getMe } from "../../../slice/user.slice"

const UserInfo = () => {
  const dispatch = useAppDispatch();
  const userInfor = useSelector((state: RootState)=> state.user.user)
  const [name, setName] = useState<string>(userInfor?.name ?? "")
  const [phone, setPhone] = useState<string>(userInfor?.phone?? "")
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if(name && phone && phone.match(/^[0-9]{9,15}$/)) {
        await axios.patch('/api/user/update-me', {name, phone})
        toast.success("Cập nhật thông tin thành công!")
        dispatch(getMe())
      }
      toast.error("Thông tin sai cú pháp")
    } catch (error) {
      //
      toast.error("Có lỗi! Vui lòng thử lại sau!")
    }
  }
  return (
    <div className="p-4 bg-white rounded-md">
      <h2 className="text-gray-700">Thông tin tài khoản</h2>
      <div className="py-4">
        <div className="flex items-center justify-center">
          {/* Author: FormBold Team */}
          <div className="mx-auto w-full bg-white">
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                  Họ tên
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  placeholder="Nhập họ tên"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                  Số điện thoại
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  required
                  value={phone}
                  onChange={(e)=>setPhone(e.target.value)}
                  placeholder="Nhập số điện thoại"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <div>
                <button
                  className="hover:shadow-form w-full rounded-md bg-red-600 hover:opacity-65 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                >
                  Cập nhật
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
