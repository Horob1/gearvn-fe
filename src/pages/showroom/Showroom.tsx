
import background from "./../../assets/showroom/background.png"
import shiper from "./../../assets/showroom/shiper.png"
import showroom from "./../../assets/showroom/showroom.png"
import lamb from "./../../assets/showroom/lamb.png"
import HN from "./../../assets/showroom/HN.png"
import HCM from "./../../assets/showroom/HCM.png"
import { FaLocationDot } from "react-icons/fa6";
import { useRef } from "react"
import HHT from "./../../assets/showroom/HHT.jpg"
import TH from "./../../assets/showroom/TH.jpg"
import KVC from "./../../assets/showroom/KVC.jpg"
import ShowroomDetail from "./ShowroomDetail"
import { Helmet } from "react-helmet-async"

const showrooms = [{
  name: "Hoàng Hoa Thám",
  adress:"Phường 12, Quận Tân Bình",
  img: HHT,
  map:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7838.24005927845!2d106.634138!3d10.802118000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175294a0c97a181%3A0x6aece518177f9a92!2sGEARVN%20Ho%C3%A0ng%20Hoa%20Th%C3%A1m!5e0!3m2!1svi!2sus!4v1715266816277!5m2!1svi!2sus"
},
{
  name: "Kha Vạn Cận",
  adress: "Phường Linh Tây, TP. Thủ Đức",
  img: KVC,
  map:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7836.743024011859!2d106.75941!3d10.859322!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527dfdb9a969d%3A0x2733db35aa4da8ff!2zR0VBUlZOIEtoYSBW4bqhbiBDw6Ju!5e0!3m2!1svi!2sus!4v1715267088047!5m2!1svi!2sus"
},
{
  name: "Thái Hà",
  adress: "Phường Trung Liệt, Đống Đa, Hà Nội",
  img: TH,
  map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7449.006425616744!2d105.820793!3d21.012542!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abd7a4041695%3A0xa594770e41494bdb!2sGearvn!5e0!3m2!1svi!2sus!4v1715267223057!5m2!1svi!2sus"
}]

const Showroom = () => {
  const location = useRef<HTMLDivElement>(document.createElement("div"))
  const sounthSide = useRef<HTMLDivElement>(document.createElement("div"))
  const northSide = useRef<HTMLDivElement>(document.createElement("div"))
  

  const executeSounthSideScroll = () => {configScroll(sounthSide)}
  const executeNorthSideScroll = () => {configScroll(northSide)} 
  const executeScroll = () => {configScroll(location)}
  const configScroll = (currentEle: React.MutableRefObject<HTMLDivElement>) => {
  const yOffset = -74; // Adjust this value as needed
  const element = currentEle.current;
  
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};


  return (
    <div className="bg-white">
      <Helmet>
        <meta charSet="utf-8" />
        <title>HỆ THỐNG SHOWROOM GEARVN</title>
        <meta name="description" content="Hệ thống showroom trên toàn quốc, phục vụ 24/7" />
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <div className="md:hidden flex-col flex items-center p-4">
          <h1 className="text-[30px] text-center text-[#003159]">HỆ THỐNG SHOWROOM GEARVN</h1>
          <h4 className="text-[#003159] text-center">Địa điểm trải nghiệm và mua sắm thiết bị công nghệ cao cấp</h4>
          <button onClick={executeScroll} className="px-4 py-1 text-white text-2xl bg-[#E30019] hover:opacity-75 rounded-md mt-3 ">XEM NGAY</button>
        </div>
      <div className=" relative border-b-8 border-[#003159]">
        <div className="w-full h-[30vh] md:h-[40vh] opacity-70 hover:opacity-100" style={{  
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
        }}>
        </div>
        <div className="absolute hidden md:block top-10 left-0 md:left-20  2xl:right-1/2 2xl:translate-x-1/2">
          <h1 className="text-[40px] text-[#003159]">HỆ THỐNG SHOWROOM GEARVN</h1>
          <h4 className="text-[#003159]">Địa điểm trải nghiệm và mua sắm thiết bị công nghệ cao cấp</h4>
          <button onClick={executeScroll} className="px-4 py-1 text-white text-3xl bg-[#E30019] hover:opacity-75 rounded-md mt-3">XEM NGAY</button>
        </div>
        <div className="hidden sm:block ">
          <img src={shiper} className="w-36 absolute bottom-0 animate-running z-20" alt="" />
        </div>
        <div className="flex gap-4 absolute bottom-0 right-1/2 translate-x-1/2 md:right-5 md:translate-x-0 2xl:right-96 items-end">
            <img src={showroom} className="hidden md:block w-36 h-36 z-10" alt="" />
            <img src={lamb} className="h-20 z-10 hidden md:block" alt="" />
            <img src={showroom} className="w-48 h-48 z-10" alt="" />
        </div>
      </div>   
      <div ref={location} className="m-auto xl:max-w-[1220px] lg:max-w-[1000px] md:max-w-[100%] p-4 flex flex-col justify-between items-center">
        <div className="p-8"><h1 className="text-[30px] text-center text-[#003159]">CHỌN KHU VỰC CỦA BẠN</h1></div>
        <div className="flex flex-col sm:flex-row gap-20 p-8">
        <button onClick={executeNorthSideScroll} className="flex flex-col items-center border-2 hover:border-red-500 rounded-lg p-4">
          <img src={HCM} className="w-28 h-28 md:w-40 md:h-40" alt="" />
          <div className="bg-[#003159] py-2 px-4 min-w-[150px] -translate-y-2 rounded-lg">
            <h3 className="text-white">KHU VỰC MIỀN NAM</h3>
          </div>
        </button>
        <button onClick={executeSounthSideScroll} className="flex flex-col items-center border-2 hover:border-red-500 rounded-lg p-4">
          <img src={HN} className="w-28 h-28 md:w-40 md:h-40" alt="" />
          <div className="bg-[#003159] py-2  min-w-[150px] px-4 -translate-y-2 rounded-lg">
            <h3 className="text-white">KHU VỰC MIỀN BẮC</h3>
          </div>
        </button>
        </div>
      </div>
      <div ref={northSide} className="p-8 bg-[#E30019] flex justify-center items-center border-t">
        <FaLocationDot className="text-[40px] text-center text-white mr-3" ></FaLocationDot><h1 className="text-center text-white">KHU VỰC MIỀN NAM</h1>
      </div>
      <ShowroomDetail data={showrooms[0]} />
      <div className="bg-[#F4F4F4]">
        <ShowroomDetail data={showrooms[1]} />
      </div>
      <div ref={sounthSide} className="p-8 bg-[#E30019] flex justify-center items-center border-t-2">
        <FaLocationDot className="text-[40px] text-center text-white mr-3" ></FaLocationDot><h1 className="text-center text-white">KHU VỰC MIỀN BẮC</h1>
      </div>
      <ShowroomDetail data={showrooms[2]} />
    </div>
  )
}

export default Showroom
