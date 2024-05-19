const UserInfo = () => {
  return (
    <div className="p-4 bg-white rounded-md">
      <h2 className="text-gray-700">Thông tin tài khoản</h2>
      <div className="py-4">
        <div className="flex items-center justify-center">
          {/* Author: FormBold Team */}
          <div className="mx-auto w-full bg-white">
            <form>
              <div className="mb-5">
                <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                  Họ tên
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
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
