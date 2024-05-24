import { Helmet } from "react-helmet-async";
import Ads from "./components/Ads.tsx";
import { Carousel } from "./components/Carousel.tsx";
import Catelog from "./components/Catelog.tsx";
import { Navbar } from "./components/Navbar.tsx";
import ProducList from "./components/ProducList.tsx";
export type PLType = {
  title: string;
  type: string;
  brands: string[] | null;
  pcList: string[] | null;
};
const prod = [
  {
    title: "PC BÁN CHẠY",
    type: "Pc",
    pcList: ["I3", "I5", "I7", "I9", "R3", "R5", "R7", "R9"],
    brands: null,
  },
  {
    title: "LAPTOP BÁN CHẠY",
    type: "Laptop",
    pcList: null,
    brands: ["ASUS", "ACER", "Dell", "MSI", "Lenovo"],
  },
  {
    title: "CAMERA BÁN CHẠY",
    type: "Camera",
    pcList: null,
    brands: ["Ezviz", "TP-Link", "Xiaomi"],
  },
  {
    title: "MÀN HÌNH BÁN CHẠY",
    type: "Monitor",
    pcList: null,
    brands: ["ACER", "ASUS", "Dell", "Samsung", "Lenovo"],
  },
  {
    title: "BÀN PHÍM BÁN CHẠY",
    type: "Keyboard",
    pcList: null,
    brands: ["Logitech", "Razer", "DareU", "Akko"],
  },
  {
    title: "CHUỘT BÁN CHẠY",
    type: "Mouse",
    pcList: null,
    brands: ["Logitech", "Razer", "DareU", "ASUS", "Corsair"],
  },
  {
    title: "TAI NGHE BÁN CHẠY",
    type: "Headphone",
    pcList: null,
    brands: ["HyperX", "Razer", "Apple", "Sony"],
  },
  {
    title: "LINH KIỆN BÁN CHẠY",
    type: "Component",
    pcList: null,
    brands: null,
  },
];
const HomePage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>GEARVN - Máy tính & Laptop</title>
        <meta
          name="description"
          content="GEARVN - Cung cấp Hi-End PC, Laptop và Gaming Gear Chuyên Nghiệp"
        />
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <div className="m-auto xl:max-w-[1220px] lg:max-w-[1000px] md:max-w-[100%] p-4">
        <div className="grid grid-cols-12 gap-3">
          <div className="hidden md:block md:col-span-2 z-20">
            <Navbar />
          </div>
          <div className="col-span-12 md:col-span-10 z-1">
            <Carousel></Carousel>
          </div>
        </div>
        <Ads level={0} />
        <ProducList productProps={prod[0]} />
        <ProducList productProps={prod[1]} />
        <ProducList productProps={prod[2]} />
        <ProducList productProps={prod[3]} />

        <Ads level={1} />
        <ProducList productProps={prod[4]} />
        <ProducList productProps={prod[5]} />
        <ProducList productProps={prod[6]} />
        <ProducList productProps={prod[7]} />
        <Catelog />
        <Ads level={0} />
      </div>
    </div>
  );
};

export default HomePage;
