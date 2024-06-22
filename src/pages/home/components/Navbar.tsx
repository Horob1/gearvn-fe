import { PiComputerTowerLight } from "react-icons/pi";
import { FaAngleRight } from "react-icons/fa6";
import { MdMonitor } from "react-icons/md";
import { CiDesktopMouse1 } from "react-icons/ci";
import { FaRegKeyboard } from "react-icons/fa6";
import { CiHeadphones } from "react-icons/ci";
import { LuComponent } from "react-icons/lu";
import { IoCameraOutline } from "react-icons/io5";
import { PiLaptopLight } from "react-icons/pi";
import "./navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const [showPCTab, setShowPCTab] = useState(false);
  const [showLaptopTab, setShowLaptopTab] = useState(false);
  const [showCameraTab, setShowCameraTab] = useState(false);
  const [showMonitorTab, setShowMonitorTab] = useState(false);
  const [showKeyboardTab, setShowKeyboardTab] = useState(false);
  const [showMouseTab, setShowMouseTab] = useState(false);
  const [showHeadphoneTab, setShowHeadphoneTab] = useState(false);
  const [showComponentTab, setShowComponentTab] = useState(false);
  return (
    <div
      id="my-custom-navbar"
      className="h-96 focus:outline-2 focus:outline-double rounded-md w-full bg-white"
    >
      <ul className="text-black font-medium text-sm relative">
        <li
          className="flex justify-between items-center triangle hover:text-white hover:bg-red-500 relative px-1 py-1.5 z-10"
          onMouseOver={() => setShowPCTab(true)}
          onMouseLeave={() => setShowPCTab(false)}
        >
          <div className="flex items-center">
            <PiComputerTowerLight className="text-2xl mx-2" />
            PC
          </div>
          <FaAngleRight />
          <div
            className={`absolute ${
              showPCTab ? "" : "hidden"
            } top-0 right-[-12px] translate-x-full h-96 rounded-md md:w-[542%] lg:w-[550%] xl:w-[1000px] bg-white py-4 px-8 grid grid-cols-10 gap-3`}
          >
            <ul className="col-span-2">
              <h6 className="text-red-600 text-base mb-2">Giá bán</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?maxPrice=10000000&typeDevice=Pc"}>
                  Dưới 10 triệu
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link
                  to={
                    "/search?maxPrice=20000000&minPrice=10000000&typeDevice=Pc"
                  }
                >
                  10 triệu - 20 triệu
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link
                  to={
                    "/search?maxPrice=30000000&minPrice=20000000&typeDevice=Pc"
                  }
                >
                  20 triệu - 30 triệu
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link
                  to={
                    "/search?maxPrice=40000000&minPrice=30000000&typeDevice=Pc"
                  }
                >
                  30 triệu - 40 triệu
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?minPrice=40000000&typeDevice=Pc"}>
                  Trên 40 triệu
                </Link>
              </li>
            </ul>
            <ul className="col-span-2">
              <h6 className="text-red-600 mb-2 text-base">Theo chip(Intel)</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?name=i9&typeDevice=Pc"}>Intel Core I9</Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?name=i7&typeDevice=Pc"}>Intel Core I7</Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?name=i5&typeDevice=Pc"}>Intel Core I5</Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?name=i3&typeDevice=Pc"}>Intel Core I3</Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?name=intel&typeDevice=Pc"}>Xem tất cả</Link>
              </li>
            </ul>
            <ul className="col-span-2">
              <h6 className="text-red-600 mb-2 text-base">Theo chip(AMD)</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?name=r9&typeDevice=Pc"}>AMD Ryzen 9</Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?name=r7&typeDevice=Pc"}>AMD Ryzen 7</Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?name=r5&typeDevice=Pc"}>AMD Ryzen 5</Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?name=r3&typeDevice=Pc"}>AMD Ryzen 3</Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?name=amd r&typeDevice=Pc"}>Xem tất cả</Link>
              </li>
            </ul>
            <ul className="col-span-2">
              <h6 className="text-red-600 text-base mb-2">Theo VGA</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?graphicCard=rx&typeDevice=Pc"}>AMD</Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?graphicCard=gtx&typeDevice=Pc"}>
                  NVIDIA GTX
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?graphicCard=rtx&typeDevice=Pc"}>
                  NVIDIA RTX
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?typeDevice=Pc"}>Xem tất cả</Link>
              </li>
            </ul>
            <ul className="col-span-2">
              <h6 className="text-red-600 text-base mb-2">Giảm giá sâu</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?sort=-discount"}>Giá cực tốt</Link>
              </li>
            </ul>
            <ul className="col-span-2">
              <h6 className="text-red-600 text-base mb-2">Hot nhất</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?sort=-sold"}>Bán chạy nhất</Link>
              </li>
            </ul>
          </div>
        </li>
        <li
          className="flex justify-between items-center triangle hover:text-white hover:bg-red-500 relative px-1 py-1.5 z-10"
          onMouseOver={() => setShowLaptopTab(true)}
          onMouseLeave={() => setShowLaptopTab(false)}
        >
          <div className="flex items-center">
            <PiLaptopLight className="text-2xl mx-2" />
            LAPTOP
          </div>
          <FaAngleRight />
          <div
            className={`absolute ${
              showLaptopTab ? "" : "hidden"
            } -top-[36px] right-[-12px] translate-x-full h-96 rounded-md md:w-[542%] lg:w-[550%] xl:w-[1000px] bg-white py-4 px-8 grid grid-cols-10 gap-3`}
          >
            <ul className="col-span-2">
              <h6 className="text-red-600 text-base mb-2">Giá bán</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?maxPrice=10000000&typeDevice=Laptop"}>
                  Dưới 10 triệu
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link
                  to={
                    "/search?maxPrice=20000000&minPrice=10000000&typeDevice=Laptop"
                  }
                >
                  10 triệu - 20 triệu
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link
                  to={
                    "/search?maxPrice=30000000&minPrice=20000000&typeDevice=Laptop"
                  }
                >
                  20 triệu - 30 triệu
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link
                  to={
                    "/search?maxPrice=40000000&minPrice=30000000&typeDevice=Laptop"
                  }
                >
                  30 triệu - 40 triệu
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?minPrice=40000000&typeDevice=Laptop"}>
                  Trên 40 triệu
                </Link>
              </li>
            </ul>
            <ul className="col-span-2">
              <h6 className="text-red-600 text-base mb-2">Thương hiệu</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?brand=DELL&typeDevice=Laptop"}>DELL</Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?brand=ASUS&typeDevice=Laptop"}>ASUS</Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?brand=ACER&typeDevice=Laptop"}>ACER</Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?brand=MSI&typeDevice=Laptop"}>MSI</Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?brand=Lenovo&typeDevice=Laptop"}>
                  Lenovo
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?typeDevice=Laptop"}>Xem tất cả</Link>
              </li>
            </ul>
            <ul className="col-span-2">
              <h6 className="text-red-600 text-base mb-2">Theo chip(Intel)</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?name=i9&typeDevice=Laptop"}>
                  Intel Core i9
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?name=i7&typeDevice=Laptop"}>
                  Intel Core i7
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?name=i5&typeDevice=Laptop"}>
                  Intel Core i5
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?name=i3&typeDevice=Laptop"}>
                  Intel Core i3
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?typeDevice=Laptop"}>Xem tất cả</Link>
              </li>
            </ul>
            <ul className="col-span-2">
              <h6 className="text-red-600 text-base mb-2">Theo chip(AMD)</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?name=r9&typeDevice=Laptop"}>
                  AMD Ryzen 9
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?name=r7&typeDevice=Laptop"}>
                  AMD Ryzen 7
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?name=r5&typeDevice=Laptop"}>
                  AMD Ryzen 5
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?name=r3&typeDevice=Laptop"}>
                  AMD Ryzen 3
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?typeDevice=Laptop"}>Xem tất cả</Link>
              </li>
            </ul>
            <ul className="col-span-2">
              <h6 className="text-red-600 text-base mb-2">Theo VGA</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?graphicCard=RX&typeDevice=Laptop"}>AMD</Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?graphicCard=GTX&typeDevice=Laptop"}>
                  NVIDIA GTX
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?graphicCard=RTX&typeDevice=Laptop"}>
                  NVIDIA RTX
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?typeDevice=Laptop"}>Xem tất cả</Link>
              </li>
            </ul>
            <ul className="col-span-2">
              <h6 className="text-red-600 text-base mb-2">Giảm giá sâu</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?sort=-discount&typeDevice=Laptop"}>
                  Giá cực tốt
                </Link>
              </li>
            </ul>
            <ul className="col-span-2">
              <h6 className="text-red-600 text-base mb-2">Hot nhất</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?sort=-sold&typeDevice=Laptop"}>
                  Bán chạy nhất
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li
          className="flex justify-between items-center triangle hover:text-white hover:bg-red-500 relative px-1 py-1.5 z-10"
          onMouseOver={() => setShowCameraTab(true)}
          onMouseLeave={() => setShowCameraTab(false)}
        >
          <div className="flex items-center">
            <IoCameraOutline className="text-2xl mx-2" />
            Camera
          </div>
          <FaAngleRight />
          <div
            className={`absolute ${
              showCameraTab ? "" : "hidden"
            } -top-[72px] right-[-12px] translate-x-full h-96 rounded-md md:w-[542%] lg:w-[550%] xl:w-[1000px] bg-white py-4 px-8 grid grid-cols-10 gap-3`}
          >
            <ul className="col-span-2">
              <h6 className="text-red-600 text-base mb-2">Giá bán</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?maxPrice=1000000&typeDevice=Camera"}>
                  Dưới 1 triệu
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?minPrice=1000000&typeDevice=Camera"}>
                  Trên 1 triệu
                </Link>
              </li>
            </ul>
            <ul className="col-span-2">
              <h6 className="text-red-600 text-base mb-2">Thương hiệu</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?brand=Ezviz&typeDevice=Camera"}>Ezviz</Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?brand=TP-Link&typeDevice=Camera"}>
                  TP-Link
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?brand=Xiaomi&typeDevice=Camera"}>
                  Xiaomi
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?typeDevice=Camera"}>Xem tất cả</Link>
              </li>
            </ul>
          </div>
        </li>
        <li
          className="flex justify-between items-center triangle hover:text-white hover:bg-red-500 relative px-1 py-1.5 z-10"
          onMouseOver={() => setShowMonitorTab(true)}
          onMouseLeave={() => setShowMonitorTab(false)}
        >
          <div className="flex items-center">
            <MdMonitor className="text-2xl mx-2" />
            Màn hình
          </div>
          <FaAngleRight />
          <div
            className={`absolute ${
              showMonitorTab ? "" : "hidden"
            } -top-[108px] right-[-12px] translate-x-full h-96 rounded-md md:w-[542%] lg:w-[550%] xl:w-[1000px] bg-white py-4 px-8 grid grid-cols-10 gap-3`}
          >
            <ul className="col-span-2">
              <h6 className="text-red-600 text-base mb-2">Giá bán</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?maxPrice=4000000&typeDevice=Monitor"}>
                  Dưới 4 triệu
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?minPrice=4000000&typeDevice=Monitor"}>
                  Trên 4 triệu
                </Link>
              </li>
            </ul>
            <ul className="col-span-2">
              <h6 className="text-red-600 text-base mb-2">Thương hiệu</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?brand=ACER&typeDevice=Monitor"}>ACER</Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?brand=ASUS&typeDevice=Monitor"}>ASUS</Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?brand=Dell&typeDevice=Monitor"}>Dell</Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?brand=Samsung&typeDevice=Monitor"}>
                  Samsung
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?brand=Lenovo&typeDevice=Monitor"}>
                  Lenovo
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?brand=Gigabyte&typeDevice=Monitor"}>
                  Gigabyte
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?brand=ViewSonic&typeDevice=Monitor"}>
                  ViewSonic
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?typeDevice=Monitor"}>Xem tất cả</Link>
              </li>
            </ul>
            <ul className="col-span-2">
              <h6 className="text-red-600 text-base mb-2">Kích thước</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?dimensions=24&typeDevice=Monitor"}>
                  24 inch
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?dimensions=27&typeDevice=Monitor"}>
                  27 inch
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?dimensions=29&typeDevice=Monitor"}>
                  29 inch
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?typeDevice=Monitor"}>Xem tất cả</Link>
              </li>
            </ul>
            <ul className="col-span-2">
              <h6 className="text-red-600 text-base mb-2">Tần số quét</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?display=144&typeDevice=Monitor"}>
                  144 Hz
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?display=75&typeDevice=Monitor"}>75 Hz</Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?typeDevice=Monitor"}>Xem tất cả</Link>
              </li>
            </ul>
            <ul className="col-span-2">
              <h6 className="text-red-600 text-base mb-2">Tấm nền</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?display=IPS&typeDevice=Monitor"}>
                  Tấm nền IPS
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?display=VA&typeDevice=Monitor"}>
                  Tấm nền VA
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?typeDevice=Monitor"}>Xem tất cả</Link>
              </li>
            </ul>
            <ul className="col-span-2">
              <h6 className="text-red-600 text-base mb-2">Hot nhất</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?sort=-discount&typeDevice=Monitor"}>
                  Giá tốt nhất
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?sort=-sold&typeDevice=Monitor"}>
                  Bán nhiều nhất
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?typeDevice=Monitor"}>Xem tất cả</Link>
              </li>
            </ul>
          </div>
        </li>
        <li
          className="flex justify-between items-center triangle hover:text-white hover:bg-red-500 relative px-1 py-1.5 z-10"
          onMouseOver={() => setShowKeyboardTab(true)}
          onMouseLeave={() => setShowKeyboardTab(false)}
        >
          <div className="flex items-center">
            <FaRegKeyboard className="text-2xl mx-2" />
            Bàn phím
          </div>
          <FaAngleRight />
          <div
            className={`absolute ${
              showKeyboardTab ? "" : "hidden"
            } -top-[144px] right-[-12px] translate-x-full h-96 rounded-md md:w-[542%] lg:w-[550%] xl:w-[1000px] bg-white py-4 px-8 grid grid-cols-10 gap-3`}
          >
            <ul className="col-span-2">
              <h6 className="text-red-600 text-base mb-2">Giá bán</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?maxPrice=1000000&typeDevice=Keyboard"}>
                  Dưới 1 triệu
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link
                  to={
                    "/search?minPrice=1000000&maxPrice=2000000&typeDevice=Keyboard"
                  }
                >
                  1 triệu - 2 triệu
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link
                  to={
                    "/search?minPrice=2000000&maxPrice=3000000&typeDevice=Keyboard"
                  }
                >
                  2 triệu - 3 triệu
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?minPrice=3000000&typeDevice=Keyboard"}>
                  Trên 3 triệu
                </Link>
              </li>
            </ul>
            <ul className="col-span-2">
              <h6 className="text-red-600 text-base mb-2">Thương hiệu</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?brand=Logitech&typeDevice=Keyboard"}>
                  Logitech
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?brand=Razer&typeDevice=Keyboard"}>
                  Razer
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?brand=DareU&typeDevice=Keyboard"}>
                  DareU
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?brand=Akko&typeDevice=Keyboard"}>Akko</Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?typeDevice=Keyboard"}>Xem tất cả</Link>
              </li>
            </ul>
            <ul className="col-span-2">
              <h6 className="text-red-600 text-base mb-2">Giảm giá sâu</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?sort=-discount&typeDevice=Keyboard"}>
                  Giá tốt nhất
                </Link>
              </li>
            </ul>
            <ul className="col-span-2">
              <h6 className="text-red-600 text-base mb-2">Hot nhất</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?sort=-sold&typeDevice=Keyboard"}>
                  Bán nhiều nhất
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li
          className="flex justify-between items-center triangle hover:text-white hover:bg-red-500 relative px-1 py-1.5 z-10"
          onMouseOver={() => setShowMouseTab(true)}
          onMouseLeave={() => setShowMouseTab(false)}
        >
          <div className="flex items-center">
            <CiDesktopMouse1 className="text-2xl mx-2" />
            Chuột
          </div>
          <FaAngleRight />
          <div
            className={`absolute ${
              showMouseTab ? "" : "hidden"
            } -top-[180px] right-[-12px] translate-x-full h-96 rounded-md md:w-[542%] lg:w-[550%] xl:w-[1000px] bg-white py-4 px-8 grid grid-cols-10 gap-3`}
          >
            <ul className="col-span-2">
              <h6 className="text-red-600 text-base mb-2">Giá bán</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?maxPrice=1000000&typeDevice=Mouse"}>
                  Dưới 1 triệu
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link
                  to={
                    "/search?maxPrice=2000000&minPrice=1000000&typeDevice=Mouse"
                  }
                >
                  1 triệu - 2 triệu
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link
                  to={
                    "/search?maxPrice=3000000&minPrice=2000000&typeDevice=Mouse"
                  }
                >
                  2 triệu - 3 triệu
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?minPrice=3000000&typeDevice=Mouse"}>
                  Trên 3 triệu
                </Link>
              </li>
            </ul>
            <ul className="col-span-2">
              <h6 className="text-red-600 text-base mb-2">Thương hiệu</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?brand=Logitech&typeDevice=Mouse"}>
                  Logitech
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?brand=Razer&typeDevice=Mouse"}>Razer</Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?brand=DareU&typeDevice=Mouse"}>DareU</Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?brand=ASUS&typeDevice=Mouse"}>ASUS</Link>
              </li>

              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?brand=E-DRA&typeDevice=Mouse"}>E-DRA</Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?brand=Rapoo&typeDevice=Mouse"}>Rapoo</Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?brand=Corsair&typeDevice=Mouse"}>
                  Corsair
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?typeDevice=Mouse"}>Xem tất cả</Link>
              </li>
            </ul>
            <ul className="col-span-2">
              <h6 className="text-red-600 text-base mb-2">Giảm giá sâu</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?sort=-discount&typeDevice=Mouse"}>
                  Giá tốt nhất
                </Link>
              </li>
            </ul>
            <ul className="col-span-2">
              <h6 className="text-red-600 text-base mb-2">Hot nhất</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?sort=-sold&typeDevice=Mouse"}>
                  Bán nhiều nhất
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li
          className="flex justify-between items-center triangle hover:text-white hover:bg-red-500 relative px-1 py-1.5 z-10"
          onMouseOver={() => setShowHeadphoneTab(true)}
          onMouseLeave={() => setShowHeadphoneTab(false)}
        >
          <div className="flex items-center">
            <CiHeadphones className="text-2xl font- mx-2" />
            Tai nghe
          </div>
          <FaAngleRight />
          <div
            className={`absolute ${
              showHeadphoneTab ? "" : "hidden"
            } -top-[216px] right-[-12px] translate-x-full h-96 rounded-md md:w-[542%] lg:w-[550%] xl:w-[1000px] bg-white py-4 px-8 grid grid-cols-10 gap-3`}
          >
            <ul className="col-span-2">
              <h6 className="text-red-600 text-base mb-2">Giá bán</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?maxPrice=1000000&typeDevice=Headphone"}>
                  Dưới 1 triệu
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link
                  to={
                    "/search?maxPrice=2000000&minPrice=1000000&typeDevice=Headphone"
                  }
                >
                  1 triệu - 2 triệu
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link
                  to={
                    "/search?maxPrice=3000000&minPrice=2000000&typeDevice=Headphone"
                  }
                >
                  2 triệu - 3 triệu
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?minPrice=3000000&typeDevice=Headphone"}>
                  Trên 3 triệu
                </Link>
              </li>
            </ul>
            <ul className="col-span-2">
              <h6 className="text-red-600 text-base mb-2">Thương hiệu</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?brand=HyperX&typeDevice=Headphone"}>
                  HyperX
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?brand=Razer&typeDevice=Headphone"}>
                  Razer
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?brand=Apple&typeDevice=Headphone"}>
                  Apple
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?brand=ASUS&typeDevice=Headphone"}>ASUS</Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?brand=Corsair&typeDevice=Headphone"}>
                  Corsair
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?brand=Sony&typeDevice=Headphone"}>Sony</Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?typeDevice=Headphone"}>Xem tất cả</Link>
              </li>
            </ul>
            <ul className="col-span-2">
              <h6 className="text-red-600 text-base mb-2">Giảm giá sâu</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?sort=-discount&typeDevice=Headphone"}>
                  Giá tốt nhất
                </Link>
              </li>
            </ul>
            <ul className="col-span-2">
              <h6 className="text-red-600 text-base mb-2">Hot nhất</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?sort=-sold&typeDevice=Headphone"}>
                  Bán nhiều nhất
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li
          className="flex justify-between items-center triangle hover:text-white hover:bg-red-500 relative px-1 py-1.5 z-10"
          onMouseOver={() => setShowComponentTab(true)}
          onMouseLeave={() => setShowComponentTab(false)}
        >
          <div className="flex items-center">
            <LuComponent className="text-2xl font- mx-2" />
            Link kiện
          </div>
          <FaAngleRight />
          <div
            className={`absolute ${
              showComponentTab ? "" : "hidden"
            } -top-[252px] right-[-12px] translate-x-full h-96 rounded-md md:w-[542%] lg:w-[550%] xl:w-[1000px] bg-white py-4 px-8 grid grid-cols-10 gap-3`}
          >
            <ul className="col-span-2">
              <h6 className="text-red-600 text-base mb-2">CPU</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?name=i&brand=Intel&typeDevice=Component"}>
                  Intel
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?name=r&brand=AMD&typeDevice=Component"}>
                  AMD
                </Link>
              </li>
            </ul>
            <ul className="col-span-2">
              <h6 className="text-red-600 text-base mb-2">VGA</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?name=RTX&typeDevice=Component"}>
                  NVIDIA RTX
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?name=GTX&typeDevice=Component"}>
                  NVIDIA GTX
                </Link>
              </li>
            </ul>
            <ul className="col-span-2">
              <h6 className="text-red-600 text-base mb-2">PSU</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?name=nguồn&typeDevice=Component"}>
                  Xem tất cả
                </Link>
              </li>
            </ul>
            <ul className="col-span-2">
              <h6 className="text-red-600 text-base mb-2">SSD</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?name=256&typeDevice=Component"}>
                  256GB
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?name=500&typeDevice=Component"}>
                  500GB
                </Link>
              </li>
            </ul>
            <ul className="col-span-2">
              <h6 className="text-red-600 text-base mb-2">RAM</h6>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?name=RAM DDR4&typeDevice=Component"}>
                  DDR4
                </Link>
              </li>
              <li className="text-black pb-1 hover:text-red-600">
                <Link to={"/search?name=RAM DDR5&typeDevice=Component"}>
                  DDR5
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};
