import { Helmet } from "react-helmet-async"
import errorImage from "../../assets/404.webp"
import { Link } from "react-router-dom"
const ErrorPage = () => {
  return (
    <div className="m-auto xl:max-w-[1220px] lg:max-w-[1000px] md:max-w-[100%] p-4 flex   justify-between items-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Không tìm thấy trang này - GEARVN</title>
        <meta name="description" content="Không tìm thấy trang này trong hệ thống GEARVN. Vui lòng thử lại!" />
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <div className="m-auto p-16 bg-white rounded-md flex flex-col gap-10">
          <img src={errorImage} className="w-full lg:w-1/2 m-auto " alt="" />
          <div className="hidden flex-col md:flex gap-8">
            <h4 className="font-medium text-center">Rất tiếc trang bạn tìm kiếm đang không tồn tại</h4>
            <h4 className="font-medium text-center">Nếu bạn cần hỗ trợ, vui lòng liên hệ tổng đài <span className="text-red-600 text-xl"> 1800 xyzt</span></h4>
          </div>
          <button className="btn btn-outline btn-error m-auto text-lg"><Link to={'/'}>QUAY VỀ TRANG CHỦ</Link></button>
      </div>
    </div>
  )
}

export default ErrorPage
