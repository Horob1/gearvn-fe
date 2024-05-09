import { IoHomeSharp } from "react-icons/io5";
import { IoIosTime } from "react-icons/io";
import conner from "../../assets/showroom/conner.png"
import { FaLocationDot } from "react-icons/fa6";

export type ShowroomDetailProps = {
  data: {name: string, adress: string, map: string, img: string}
}

const ShowroomDetail = ({data} : ShowroomDetailProps) => {
  console.log(data)
  return (
    <div className="m-auto w-full xl:max-w-[1220px] lg:max-w-[1000px] md:max-w-[100%] px-8 py-12 grid grid-cols-1 md:grid-cols-12 gap-20">
      <div className="flex flex-col gap-4 md:col-span-5">
        <h5>SHOWROOM GEARVN</h5>
        <h1 className="text-[#003159]">{data.name.toUpperCase()}</h1>
        <div className="w-24 h-1 bg-[#E30019]"></div>
        <div>
          <span className="flex text-[#003159] items-center"><IoHomeSharp className="mr-2"></IoHomeSharp>{data.name+", "+data.adress}</span>
          <span className="flex text-[#003159] items-center"><IoIosTime className="mr-2"></IoIosTime> Thời gian làm việc: 8:00 - 21:00 | Thứ 2 - Chủ Nhật.</span>
        </div>
        <iframe className="h-[312px] w-full" src={data.map} width="600" height="450" style={{
          border:"0"
        }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="md:col-span-7 bg-red-50 border-4 border-[#E30019] rounded-lg relative" style={{  
        backgroundImage: `url(${data.img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
        }}>
        <img src={conner} className="absolute top-0 right-0" alt="" />
        <div className="absolute bottom-0 w-full p-8 flex items-center bg-[#E30019]">
          <FaLocationDot className="text-[40px] text-center text-white mr-3" ></FaLocationDot>
          <div>
            <h3 className="text-white">{data.name}</h3>
            <p className="text-white">
              {data.adress}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowroomDetail
