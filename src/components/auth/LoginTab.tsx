
const LoginTab = () => {
  return (
    <form> 
      <div>
        <div className="space-y-4">
          <h1 className="text-center text-2xl font-semibold text-gray-600">Đăng nhập</h1>
          <hr />
          <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
            <input className="pl-2 outline-none border-none w-full" type="email" name="email" placeholder="Email" required />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <input className="pl-2 outline-none border-none w-full" type="password" name="password" id="" placeholder="Password" required />
          </div>
        </div>
        {/* Remember Me checkbox */}
        <button type="submit" value="login" id="login" className="mt-6 w-full shadow-xl bg-red-600 hover:opacity-50 text-indigo-100 py-2 rounded-md text-lg tracking-wide transition duration-1000">Đăng nhập</button>
        <p className="text-center font-semibold text-gray-600 mt-6">Hoặc đăng nhập bằng</p>
        <div className="flex gap-4 mt-2 pb-4">
          <button  className="w-full shadow-xl bg-red-600 hover:opacity-50 text-indigo-100 py-2 rounded-md text-lg tracking-wide transition duration-1000">Google</button>
          <button  className="w-full shadow-xl bg-blue-600 hover:opacity-50 text-indigo-100 py-2 rounded-md text-lg tracking-wide transition duration-1000">Facebook</button>
        </div>
        <hr />
      </div>
    </form>
  )
}

export default LoginTab
